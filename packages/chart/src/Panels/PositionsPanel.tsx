import type { Position } from '@hopcharts/core';

interface PositionsPanelProps {
  positions: Position[];
}

export function PositionsPanel({ positions }: PositionsPanelProps) {
  if (positions.length === 0) {
    return (
      <div
        className="flex items-center justify-center h-full text-[13px]"
        style={{ color: 'var(--hc-text-muted)' }}
      >
        No open positions
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
            <th className="px-[10px] py-[6px] font-medium text-right">Entry</th>
            <th className="px-[10px] py-[6px] font-medium text-right">Amount</th>
            <th className="px-[10px] py-[6px] font-medium text-right">P&L</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((pos) => (
            <tr
              key={pos.id}
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
                {pos.pair}
              </td>
              <td
                className="px-[10px] py-[8px] uppercase"
                style={{ color: pos.side === 'buy' ? 'var(--hc-green)' : 'var(--hc-red)' }}
              >
                {pos.side}
              </td>
              <td className="px-[10px] py-[8px] text-right" style={{ color: 'var(--hc-text)' }}>
                {pos.entryPrice}
              </td>
              <td className="px-[10px] py-[8px] text-right" style={{ color: 'var(--hc-text)' }}>
                {pos.amount}
              </td>
              <td
                className="px-[10px] py-[8px] text-right font-medium"
                style={{
                  color: pos.unrealizedPnl >= 0 ? 'var(--hc-green)' : 'var(--hc-red)',
                }}
              >
                {pos.unrealizedPnl >= 0 ? '+' : ''}
                {pos.unrealizedPnl.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
