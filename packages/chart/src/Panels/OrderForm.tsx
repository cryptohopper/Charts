import React, { useState } from 'react';
import type { TradeSide, OrderType } from '@hopcharts/core';

interface OrderFormProps {
  pair: string;
  onSubmit: (params: {
    side: TradeSide;
    type: OrderType;
    amount: number;
    price?: number;
  }) => void;
  isSubmitting: boolean;
}

export function OrderForm({ pair, onSubmit, isSubmitting }: OrderFormProps) {
  const [side, setSide] = useState<TradeSide>('buy');
  const [orderType, setOrderType] = useState<OrderType>('limit');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) return;

    const priceNum = parseFloat(price);
    onSubmit({
      side,
      type: orderType,
      amount: amountNum,
      price: orderType !== 'market' && !isNaN(priceNum) ? priceNum : undefined,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-[12px] flex flex-col gap-[10px]"
    >
      {/* Pair label */}
      <div
        className="text-[14px] font-medium"
        style={{ color: 'var(--hc-text)' }}
      >
        {pair}
      </div>

      {/* Buy / Sell toggle */}
      <div className="flex rounded-md overflow-hidden" style={{ border: '1px solid var(--hc-border)' }}>
        <button
          type="button"
          className="flex-1 py-[6px] text-[13px] font-medium transition-colors"
          style={{
            backgroundColor: side === 'buy' ? 'var(--hc-green)' : 'transparent',
            color: side === 'buy' ? '#fff' : 'var(--hc-text)',
          }}
          onClick={() => setSide('buy')}
        >
          Buy
        </button>
        <button
          type="button"
          className="flex-1 py-[6px] text-[13px] font-medium transition-colors"
          style={{
            backgroundColor: side === 'sell' ? 'var(--hc-red)' : 'transparent',
            color: side === 'sell' ? '#fff' : 'var(--hc-text)',
          }}
          onClick={() => setSide('sell')}
        >
          Sell
        </button>
      </div>

      {/* Order type */}
      <div className="flex gap-[6px]">
        {(['market', 'limit', 'stop'] as const).map((t) => (
          <button
            key={t}
            type="button"
            className="flex-1 py-[4px] text-[12px] capitalize rounded transition-colors"
            style={{
              backgroundColor: orderType === t ? 'var(--hc-accent)' : 'transparent',
              color: orderType === t ? '#fff' : 'var(--hc-text-muted)',
              border: orderType === t ? 'none' : '1px solid var(--hc-border)',
            }}
            onClick={() => setOrderType(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Amount */}
      <label className="flex flex-col gap-[4px]">
        <span className="text-[12px]" style={{ color: 'var(--hc-text-muted)' }}>
          Amount
        </span>
        <input
          type="number"
          step="any"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-[8px] py-[6px] rounded text-[13px]"
          style={{
            backgroundColor: 'var(--hc-input-bg)',
            color: 'var(--hc-text)',
            border: '1px solid var(--hc-border)',
            outline: 'none',
          }}
          placeholder="0.00"
          required
        />
      </label>

      {/* Price (hidden for market orders) */}
      {orderType !== 'market' && (
        <label className="flex flex-col gap-[4px]">
          <span className="text-[12px]" style={{ color: 'var(--hc-text-muted)' }}>
            Price
          </span>
          <input
            type="number"
            step="any"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="px-[8px] py-[6px] rounded text-[13px]"
            style={{
              backgroundColor: 'var(--hc-input-bg)',
              color: 'var(--hc-text)',
              border: '1px solid var(--hc-border)',
              outline: 'none',
            }}
            placeholder="0.00"
            required
          />
        </label>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="py-[8px] rounded text-[14px] font-medium transition-opacity"
        style={{
          backgroundColor: side === 'buy' ? 'var(--hc-green)' : 'var(--hc-red)',
          color: '#fff',
          opacity: isSubmitting ? 0.6 : 1,
        }}
      >
        {isSubmitting
          ? 'Placing...'
          : `${side === 'buy' ? 'Buy' : 'Sell'} ${pair.split('/')[0] || ''}`}
      </button>
    </form>
  );
}
