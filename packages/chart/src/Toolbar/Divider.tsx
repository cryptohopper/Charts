import React from 'react';

export const Divider = React.memo(function Divider() {
  return (
    <div className="flex items-center justify-center h-[40px] px-[4px] shrink-0">
      <div
        className="w-px h-[24px] rounded-md"
        style={{ backgroundColor: 'var(--hc-border)' }}
      />
    </div>
  );
});
