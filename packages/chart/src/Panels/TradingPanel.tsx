import React, { useState } from 'react';
import {
  useChartStore,
  usePositions,
  useOrders,
  useOrderHistory,
  usePlaceOrder,
  useCancelOrder,
  useTradingStore,
  useRealtimeTrades,
} from '@hopcharts/core';
import type { TradeSide, OrderType } from '@hopcharts/core';
import { PositionsPanel } from './PositionsPanel.js';
import { OrdersPanel } from './OrdersPanel.js';
import { OrderHistoryPanel } from './OrderHistoryPanel.js';
import { OrderForm } from './OrderForm.js';

type Tab = 'positions' | 'orders' | 'history';

export function TradingPanel() {
  const [activeTab, setActiveTab] = useState<Tab>('positions');

  const exchangeId = useChartStore((s) => s.exchangeId);
  const pair = useChartStore((s) => s.pair);

  // Real-time WS invalidation
  useRealtimeTrades(exchangeId);

  // Data fetching
  const { data: positions = [] } = usePositions(exchangeId);
  const { data: orders = [] } = useOrders(exchangeId);
  const { data: history = [] } = useOrderHistory(exchangeId, pair);

  // Sync to store for chart overlays
  const setPositions = useTradingStore((s) => s.setPositions);
  const setOrders = useTradingStore((s) => s.setOrders);
  const setOrderHistory = useTradingStore((s) => s.setOrderHistory);

  // Keep store in sync with query data
  React.useEffect(() => { setPositions(positions); }, [positions, setPositions]);
  React.useEffect(() => { setOrders(orders); }, [orders, setOrders]);
  React.useEffect(() => { setOrderHistory(history); }, [history, setOrderHistory]);

  // Mutations
  const placeOrder = usePlaceOrder();
  const cancelOrder = useCancelOrder();

  const handlePlaceOrder = (params: {
    side: TradeSide;
    type: OrderType;
    amount: number;
    price?: number;
  }) => {
    placeOrder.mutate({
      exchangeId,
      pair,
      ...params,
    });
  };

  const handleCancelOrder = (orderId: string) => {
    cancelOrder.mutate({ exchangeId, orderId });
  };

  const tabs: { key: Tab; label: string; count?: number }[] = [
    { key: 'positions', label: 'Positions', count: positions.length || undefined },
    { key: 'orders', label: 'Orders', count: orders.length || undefined },
    { key: 'history', label: 'History' },
  ];

  return (
    <div
      className="flex flex-col h-full font-['Source_Sans_3',sans-serif]"
      style={{ borderTop: '1px solid var(--hc-border)' }}
    >
      {/* Tab bar */}
      <div
        className="flex shrink-0"
        style={{ borderBottom: '1px solid var(--hc-border)' }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className="px-[14px] py-[8px] text-[13px] font-medium transition-colors relative"
            style={{
              color: activeTab === tab.key ? 'var(--hc-accent)' : 'var(--hc-text-muted)',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.key)
                e.currentTarget.style.color = 'var(--hc-text)';
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.key)
                e.currentTarget.style.color = 'var(--hc-text-muted)';
            }}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span
                className="ml-[4px] text-[11px] px-[4px] py-[1px] rounded-full"
                style={{
                  backgroundColor: 'var(--hc-accent)',
                  color: '#fff',
                }}
              >
                {tab.count}
              </span>
            )}
            {/* Active indicator */}
            {activeTab === tab.key && (
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: 'var(--hc-accent)' }}
              />
            )}
          </button>
        ))}

        {/* Spacer */}
        <div className="flex-1" />
      </div>

      {/* Content */}
      <div className="flex flex-1 min-h-0">
        {/* Table area */}
        <div className="flex-1 min-w-0">
          {activeTab === 'positions' && <PositionsPanel positions={positions} />}
          {activeTab === 'orders' && (
            <OrdersPanel orders={orders} onCancel={handleCancelOrder} />
          )}
          {activeTab === 'history' && <OrderHistoryPanel history={history} />}
        </div>

        {/* Order form sidebar */}
        <div
          className="shrink-0"
          style={{
            width: 240,
            borderLeft: '1px solid var(--hc-border)',
          }}
        >
          <OrderForm
            pair={pair}
            onSubmit={handlePlaceOrder}
            isSubmitting={placeOrder.isPending}
          />
        </div>
      </div>
    </div>
  );
}
