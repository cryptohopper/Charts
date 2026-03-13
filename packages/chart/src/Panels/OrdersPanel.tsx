import type { Order } from '@hopcharts/core';

interface OrdersPanelProps {
  orders: Order[];
  onCancel: (orderId: string) => void;
}

export function OrdersPanel({ orders, onCancel }: OrdersPanelProps) {
  if (orders.length === 0) {
    return (
      <div
        className="flex items-center justify-center h-full text-[13px]"
        style={{ color: 'var(--hc-text-muted)' }}
      >
        No open orders
      </div>
    );
  }

  return (
    <div className="overflow-auto h-full">
      <table className="w-full text-[13px]">
        <thead>
          <tr
            className="text-left"
            style={{ color: 'var(--hc-text-muted)', borderBottom: '1px solid var(--hc-border)' }}
          >
            <th className="px-[10px] py-[6px] font-medium">Pair</th>
            <th className="px-[10px] py-[6px] font-medium">Side</th>
            <th className="px-[10px] py-[6px] font-medium">Type</th>
            <th className="px-[10px] py-[6px] font-medium text-right">Price</th>
            <th className="px-[10px] py-[6px] font-medium text-right">Amount</th>
            <th className="px-[10px] py-[6px] font-medium text-right">Filled</th>
            <th className="px-[10px] py-[6px] font-medium text-center" />
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="transition-colors"
              style={{ borderBottom: '1px solid var(--hc-border)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '';
              }}
            >
              <td className="px-[10px] py-[8px]" style={{ color: 'var(--hc-text)' }}>
                {order.pair}
              </td>
              <td
                className="px-[10px] py-[8px] uppercase"
                style={{ color: order.side === 'buy' ? 'var(--hc-green)' : 'var(--hc-red)' }}
              >
                {order.side}
              </td>
              <td className="px-[10px] py-[8px] capitalize" style={{ color: 'var(--hc-text)' }}>
                {order.type}
              </td>
              <td className="px-[10px] py-[8px] text-right" style={{ color: 'var(--hc-text)' }}>
                {order.price}
              </td>
              <td className="px-[10px] py-[8px] text-right" style={{ color: 'var(--hc-text)' }}>
                {order.amount}
              </td>
              <td className="px-[10px] py-[8px] text-right" style={{ color: 'var(--hc-text-muted)' }}>
                {order.filledAmount}/{order.amount}
              </td>
              <td className="px-[10px] py-[8px] text-center">
                <button
                  onClick={() => onCancel(order.id)}
                  className="text-[12px] px-[8px] py-[2px] rounded transition-colors"
                  style={{
                    color: 'var(--hc-red)',
                    border: '1px solid var(--hc-red)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--hc-red)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.color = 'var(--hc-red)';
                  }}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
