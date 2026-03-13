# CryptoHopper Trading Integration Plan

## Overview
Add trading integration to HopCharts: positions, orders, order history — with chart overlays using LWC price lines and series markers.

## Architecture

### Layer 1: Types (`packages/core/src/types/trading.ts`)
- `TradeSide` — `'buy' | 'sell'`
- `OrderType` — `'market' | 'limit' | 'stop'`
- `OrderStatus` — `'open' | 'filled' | 'cancelled' | 'partial'`
- `Position` — open position (id, exchangeId, pair, side, entryPrice, amount, currentPrice, unrealizedPnl, openedAt)
- `Order` — active order (id, exchangeId, pair, side, type, price, amount, filledAmount, status, createdAt)
- `OrderHistoryEntry` — completed trade (id, exchangeId, pair, side, type, price, amount, fee, filledAt)

### Layer 2: API Client (`packages/core/src/api/trading-api.ts`)
REST endpoints (CryptoHopper backend proxy):
- `GET /v1/trading/positions?exchangeId=...` → Position[]
- `GET /v1/trading/orders?exchangeId=...` → Order[]
- `GET /v1/trading/history?exchangeId=...&pair=...&from=...&to=...` → OrderHistoryEntry[]
- `POST /v1/trading/orders` → Order (place order)
- `DELETE /v1/trading/orders/:id` → void (cancel order)

### Layer 3: React Query Hooks (`packages/core/src/api/hooks.ts`)
- `usePositions(exchangeId)` — 10s stale, refetch on WS push
- `useOrders(exchangeId)` — 10s stale
- `useOrderHistory(exchangeId, pair, from?, to?)` — 30s stale
- `usePlaceOrder()` — mutation, invalidates orders + positions
- `useCancelOrder()` — mutation, invalidates orders

### Layer 4: Zustand Store (`packages/core/src/store/tradingStore.ts`)
State: positions[], orders[], orderHistory[], showPositionOverlay, showOrderMarkers
Actions: setPositions, setOrders, setOrderHistory, togglePositionOverlay, toggleOrderMarkers

### Layer 5: WebSocket Events (`packages/core/src/api/websocket.ts`)
Add to existing client:
- `position_update` event → re-fetch positions (invalidate query)
- `order_update` event → re-fetch orders (invalidate query)
- `useRealtimeTrades(exchangeId)` hook

### Layer 6: Chart Overlays (`packages/chart/src/hooks/`)
- `usePositionOverlay(series, positions)` — creates LWC price lines for entry prices with P&L in title
- `useOrderMarkers(series, orderHistory)` — uses `series.setMarkers()` with up-triangle buys / down-triangle sells

### Layer 7: UI Panels (`packages/chart/src/Panels/`)
- `TradingPanel.tsx` — tab container (Positions | Orders | History)
- `PositionsPanel.tsx` — table of open positions with P&L
- `OrdersPanel.tsx` — active orders with cancel button
- `OrderHistoryPanel.tsx` — completed trades list
- `OrderForm.tsx` — market/limit order form

### Layer 8: Integration
- Wire trading hooks into `HopChart.tsx`
- Activate 'orders' side panel in uiStore
- Add trading toggle to Toolbar

## Task Execution Order
1. Types (no deps)
2. API client (depends on types)
3. Hooks (depends on API client)
4. Store (depends on types)
5. WebSocket events (depends on types)
6. Chart overlays (depends on store + hooks)
7. UI Panels (depends on store + hooks)
8. HopChart integration (depends on everything)
9. Barrel exports (final wiring)
