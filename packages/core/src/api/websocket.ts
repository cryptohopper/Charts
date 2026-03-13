import type { ExchangeId } from '../types/exchange.js';
import type { OHLCV } from '../types/ohlcv.js';
import type { DetectedPattern } from '../types/pattern.js';
import { getEnvVar } from '../utils/env.js';

// --- Message types ---

interface SubscribeMessage {
  action: 'subscribe';
  exchange: ExchangeId;
  pairs: string[];
}

interface UnsubscribeMessage {
  action: 'unsubscribe';
  exchange: ExchangeId;
  pairs: string[];
}

interface PingMessage {
  action: 'ping';
}

type OutgoingMessage = SubscribeMessage | UnsubscribeMessage | PingMessage;

interface TickMessage {
  type: 'tick';
  exchange: ExchangeId;
  pair: string;
  data: OHLCV;
}

interface PatternMessage {
  type: 'pattern';
  exchange: ExchangeId;
  pair: string;
  patterns: DetectedPattern[];
}

interface SubscribedMessage {
  type: 'subscribed';
  exchange: ExchangeId;
  pairs: string[];
}

interface ErrorMessage {
  type: 'error';
  message: string;
}

interface PongMessage {
  type: 'pong';
}

interface PositionUpdateMessage {
  type: 'position_update';
  exchange: ExchangeId;
}

interface OrderUpdateMessage {
  type: 'order_update';
  exchange: ExchangeId;
}

type IncomingMessage = TickMessage | PatternMessage | SubscribedMessage | ErrorMessage | PongMessage | PositionUpdateMessage | OrderUpdateMessage;

// --- Event types ---

export interface WebSocketEvents {
  tick: (data: { exchange: ExchangeId; pair: string; ohlcv: OHLCV }) => void;
  pattern: (data: { exchange: ExchangeId; pair: string; patterns: DetectedPattern[] }) => void;
  position_update: (data: { exchange: ExchangeId }) => void;
  order_update: (data: { exchange: ExchangeId }) => void;
  connected: () => void;
  disconnected: () => void;
  error: (error: string) => void;
}

type EventName = keyof WebSocketEvents;

// --- Constants ---

const DEFAULT_WS_URL = 'wss://api.cryptohopper.com/charts/stream';
const HEARTBEAT_INTERVAL = 30_000;
const PONG_TIMEOUT = 10_000;
const MIN_RECONNECT_DELAY = 1_000;
const MAX_RECONNECT_DELAY = 30_000;
const MAX_QUEUE_SIZE = 100;

function getWsUrl(): string {
  return getEnvVar('HOPCHARTS_WS_URL', DEFAULT_WS_URL);
}

// --- WebSocketClient ---

export class WebSocketClient {
  private url: string;
  private token: string | null;
  private ws: WebSocket | null = null;
  private listeners = new Map<EventName, Set<(...args: unknown[]) => void>>();
  private subscriptions = new Map<ExchangeId, Set<string>>(); // exchange -> set of pairs
  private outgoingQueue: OutgoingMessage[] = [];
  private reconnectDelay = MIN_RECONNECT_DELAY;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private heartbeatTimer: ReturnType<typeof setInterval> | null = null;
  private pongTimer: ReturnType<typeof setTimeout> | null = null;
  private intentionalClose = false;

  constructor(url?: string, token?: string | null) {
    this.url = url ?? getWsUrl();
    this.token = token ?? null;
  }

  // --- Public API ---

  connect(): void {
    if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
      return;
    }

    this.intentionalClose = false;
    const wsUrl = this.token ? `${this.url}?token=${encodeURIComponent(this.token)}` : this.url;
    this.ws = new WebSocket(wsUrl);

    this.ws.onopen = () => {
      this.reconnectDelay = MIN_RECONNECT_DELAY;
      this.flushQueue();
      this.resubscribe();
      this.startHeartbeat();
      this.emit('connected');
    };

    this.ws.onmessage = (event) => {
      this.handleMessage(event.data as string);
    };

    this.ws.onclose = () => {
      this.stopHeartbeat();
      this.emit('disconnected');
      if (!this.intentionalClose) {
        this.scheduleReconnect();
      }
    };

    this.ws.onerror = () => {
      // onclose will fire after onerror, so reconnect is handled there
    };
  }

  disconnect(): void {
    this.intentionalClose = true;
    this.clearReconnectTimer();
    this.stopHeartbeat();
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  subscribe(exchange: ExchangeId, pairs: string[]): void {
    if (pairs.length === 0) return;

    // Track subscriptions
    let exchangeSubs = this.subscriptions.get(exchange);
    if (!exchangeSubs) {
      exchangeSubs = new Set();
      this.subscriptions.set(exchange, exchangeSubs);
    }
    const newPairs = pairs.filter((p) => !exchangeSubs!.has(p));
    if (newPairs.length === 0) return;
    for (const p of newPairs) exchangeSubs.add(p);

    this.send({ action: 'subscribe', exchange, pairs: newPairs });
  }

  unsubscribe(exchange: ExchangeId, pairs: string[]): void {
    if (pairs.length === 0) return;

    const exchangeSubs = this.subscriptions.get(exchange);
    if (!exchangeSubs) return;

    const toRemove = pairs.filter((p) => exchangeSubs!.has(p));
    if (toRemove.length === 0) return;
    for (const p of toRemove) exchangeSubs.delete(p);
    if (exchangeSubs.size === 0) this.subscriptions.delete(exchange);

    this.send({ action: 'unsubscribe', exchange, pairs: toRemove });
  }

  on<E extends EventName>(event: E, callback: WebSocketEvents[E]): () => void {
    let set = this.listeners.get(event);
    if (!set) {
      set = new Set();
      this.listeners.set(event, set);
    }
    set.add(callback as (...args: unknown[]) => void);

    // Return unsubscribe function
    return () => {
      set!.delete(callback as (...args: unknown[]) => void);
    };
  }

  get isConnected(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  destroy(): void {
    this.disconnect();
    this.listeners.clear();
    this.subscriptions.clear();
    this.outgoingQueue = [];
  }

  // --- Private ---

  private send(msg: OutgoingMessage): void {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(msg));
    } else if (this.outgoingQueue.length < MAX_QUEUE_SIZE) {
      this.outgoingQueue.push(msg);
    }
  }

  private flushQueue(): void {
    // Filter out subscribe messages — resubscribe() handles those separately
    const queue = this.outgoingQueue.filter((m) => m.action !== 'subscribe');
    this.outgoingQueue = [];
    for (const msg of queue) {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify(msg));
      }
    }
  }

  private resubscribe(): void {
    for (const [exchange, pairs] of this.subscriptions) {
      if (pairs.size > 0) {
        this.send({ action: 'subscribe', exchange, pairs: [...pairs] });
      }
    }
  }

  private handleMessage(raw: string): void {
    let msg: IncomingMessage;
    try {
      msg = JSON.parse(raw) as IncomingMessage;
    } catch {
      return;
    }

    switch (msg.type) {
      case 'tick':
        this.emit('tick', { exchange: msg.exchange, pair: msg.pair, ohlcv: msg.data });
        break;
      case 'pattern':
        this.emit('pattern', { exchange: msg.exchange, pair: msg.pair, patterns: msg.patterns });
        break;
      case 'subscribed':
        // Acknowledgement — no action needed
        break;
      case 'error':
        this.emit('error', msg.message);
        break;
      case 'position_update':
        this.emit('position_update', { exchange: msg.exchange });
        break;
      case 'order_update':
        this.emit('order_update', { exchange: msg.exchange });
        break;
      case 'pong':
        this.clearPongTimer();
        break;
    }
  }

  private emit<E extends EventName>(event: E, ...args: Parameters<WebSocketEvents[E]>): void {
    const set = this.listeners.get(event);
    if (!set) return;
    for (const cb of set) {
      try {
        (cb as (...a: unknown[]) => void)(...args);
      } catch {
        // Don't let listener errors break the client
      }
    }
  }

  // --- Heartbeat ---

  private startHeartbeat(): void {
    this.stopHeartbeat();
    this.heartbeatTimer = setInterval(() => {
      this.clearPongTimer();
      this.send({ action: 'ping' });
      this.pongTimer = setTimeout(() => {
        // No pong received — force reconnect
        this.ws?.close();
      }, PONG_TIMEOUT);
    }, HEARTBEAT_INTERVAL);
  }

  private stopHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    this.clearPongTimer();
  }

  private clearPongTimer(): void {
    if (this.pongTimer) {
      clearTimeout(this.pongTimer);
      this.pongTimer = null;
    }
  }

  // --- Reconnect ---

  private scheduleReconnect(): void {
    this.clearReconnectTimer();
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.connect();
    }, this.reconnectDelay);
    // Exponential backoff
    this.reconnectDelay = Math.min(this.reconnectDelay * 2, MAX_RECONNECT_DELAY);
  }

  private clearReconnectTimer(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }
}

// --- Singleton ---

let singletonClient: WebSocketClient | null = null;

export function getWebSocketClient(): WebSocketClient {
  if (!singletonClient) {
    singletonClient = new WebSocketClient();
  }
  return singletonClient;
}
