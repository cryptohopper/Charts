import type { ExchangeId } from './exchange.js';

export interface TradingPair {
  symbol: string;          // "BTC/USDT"
  base: string;            // "BTC"
  quote: string;           // "USDT"
  exchangeId: ExchangeId;
  priceDecimals: number;
  quantityDecimals: number;
  minOrderSize?: number;
}
