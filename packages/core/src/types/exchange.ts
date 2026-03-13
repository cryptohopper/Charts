export type ExchangeId = 'binance' | 'coinbase' | 'kraken' | 'kucoin' | string;

export interface Exchange {
  id: ExchangeId;
  name: string;
  logoUrl: string;
  supportedFeatures: {
    websocket: boolean;
    ohlcv: boolean;
    orderbook: boolean;
  };
}
