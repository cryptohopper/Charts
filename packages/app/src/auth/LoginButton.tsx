import { useState, useRef, useEffect } from 'react';
import { useAuth, getTierDisplayName } from '@hopcharts/core';
import { LogOut, ChevronDown, User } from 'lucide-react';

export function LoginButton() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!menuOpen) return;

    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  if (isLoading) {
    return (
      <div className="h-9 w-24 rounded-lg bg-[var(--hc-surface)] animate-pulse" />
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <button
        onClick={() => login()}
        className="group relative h-9 px-4 bg-[#00b1c7] rounded-lg text-white text-[13px] font-semibold font-['Source_Sans_3',sans-serif] hover:bg-[#009aad] active:bg-[#00889a] transition-all overflow-hidden shadow-[0_2px_8px_0_rgba(0,177,199,0.2)] hover:shadow-[0_4px_14px_rgba(0,177,199,0.25)] flex items-center gap-2"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z" stroke="currentColor" strokeWidth="2" />
          <path d="M19.5 20C19.5 16.134 16.142 13 12 13C7.858 13 4.5 16.134 4.5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>Login with CryptoHopper</span>
      </button>
    );
  }

  // Authenticated — show avatar + dropdown
  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="flex items-center gap-2 h-9 pl-1 pr-2.5 rounded-lg border border-[var(--hc-border)] bg-[var(--hc-surface)] hover:bg-[var(--hc-hover-bg)] transition-colors"
      >
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.username}
            className="w-7 h-7 rounded-md object-cover"
          />
        ) : (
          <div className="w-7 h-7 rounded-md bg-[#00b1c7]/15 flex items-center justify-center">
            <User size={14} className="text-[#00b1c7]" />
          </div>
        )}
        <span className="text-[13px] font-medium text-[var(--hc-text)] font-['Source_Sans_3',sans-serif] max-w-[100px] truncate">
          {user.username}
        </span>
        <ChevronDown
          size={14}
          className={`text-[var(--hc-text-muted)] transition-transform ${menuOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {menuOpen && (
        <div className="absolute right-0 top-full mt-1.5 w-56 rounded-xl border border-[var(--hc-border)] bg-[var(--hc-surface)] shadow-[var(--hc-shadow)] overflow-hidden z-50">
          {/* User info */}
          <div className="px-4 py-3 border-b border-[var(--hc-border)]">
            <p className="text-[13px] font-semibold text-[var(--hc-text)] font-['Source_Sans_3',sans-serif] truncate">
              {user.username}
            </p>
            <p className="text-[12px] text-[var(--hc-text-muted)] font-['Source_Sans_3',sans-serif] truncate">
              {user.email}
            </p>
            <span className="inline-block mt-1.5 px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-[var(--hc-accent)]/10 text-[var(--hc-accent)] font-['Source_Sans_3',sans-serif]">
              {getTierDisplayName(user.subscriptionTier)}
            </span>
          </div>

          {/* Actions */}
          <div className="p-1.5">
            <button
              onClick={async () => {
                setMenuOpen(false);
                await logout();
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium text-[var(--hc-text-secondary)] hover:text-red-500 hover:bg-red-500/5 transition-colors font-['Source_Sans_3',sans-serif]"
            >
              <LogOut size={15} />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
