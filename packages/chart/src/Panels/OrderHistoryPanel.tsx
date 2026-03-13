import type { OrderHistoryEntry } from '@hopcharts/core';

interface OrderHistoryPanelProps {
  history: OrderHistoryEntry[];
}

export function OrderHistoryPanel({ history }: OrderHistoryPanelProps) {
  if (history.length === 0) {
    return (
      <div
        className="flex items-center justify-center h-full text-[13px]"
        style={{ color: 'var(--hc-text-muted)' }}
      >
        No trade history
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
            <th className="px-[10px] py-[6px] font-medium">Time</th>
            <th className="px-[10px] py-[6px] font-medium">Pair</th>
            <th className="px-[10px] py-[6px] font-medium">Side</th>
            <th className="px-[10px] py-[6px] font-medium">Type</th>
            <th className="px-[10px] py-[6px] font-medium text-right">Price</th>
            <th className="px-[10px] py-[6px] font-medium text-right">Amount</th>
            <th className="px-[10px] py-[6px] font-medium text-right">Fee</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => (
            <tr
              key={entry.id}
              className="transition-colors"
              style={{ borderBottom: '1px solid var(--hc-border)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '';
              }}
            >
              <td className="px-[10px] py-[8px]" style={{ color: 'var(--hc-text-muted)' }}>
                {new Date(entry.filledAt).toLocaleString()}
              </td>
              <td className="px-[10px] py-[8px]" style={{ color: 'var(--hc-text)' }}>
                {entry.pair}
              </td>
              <td
                className="px-[10px] py-[8px] uppercase"
                style={{ color: entry.side === 'buy' ? 'var(--hc-green)' : 'var(--hc-red)' }}
              >
                {entry.side}
              </td>
              <td className="px-[10px] py-[8px] capitalize" style={{ color: 'var(--hc-text)' }}>
                {entry.type}
              </td>
              <td className="px-[10px] py-[8px] text-right" style={{ color: 'var(--hc-text)' }}>
                {entry.price}
              </td>
              <td className="px-[10px] py-[8px] text-right" style={{ color: 'var(--hc-text)' }}>
                {entry.amount}
              </td>
              <td className="px-[10px] py-[8px] text-right" style={{ color: 'var(--hc-text-muted)' }}>
                {entry.fee.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
