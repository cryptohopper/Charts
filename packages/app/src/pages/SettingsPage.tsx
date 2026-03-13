import { useTheme, useUserStore, useAuth, getTierDisplayName } from "@hopcharts/core";
import { useNavigate } from "react-router-dom";

export function SettingsPage() {
  const { isDark, toggleTheme } = useTheme();
  const { user, isAuthenticated } = useAuth();
  const defaultExchange = useUserStore((s) => s.preferences.defaultExchange);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--hc-page-bg)" }}>
      {/* Header */}
      <div className="h-[48px] flex items-center px-4 gap-4" style={{ backgroundColor: "var(--hc-surface)", borderBottom: "1px solid var(--hc-border)" }}>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[14px] font-['Source_Sans_3',sans-serif]"
          style={{ color: "var(--hc-accent)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Chart
        </button>
        <span className="text-[16px] font-semibold font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>
          Settings
        </span>
      </div>

      <div className="max-w-[600px] mx-auto px-4 py-6 space-y-6">
        {/* Theme */}
        <SettingsSection title="Appearance">
          <SettingsRow label="Dark theme">
            <ToggleSwitch on={isDark} onToggle={toggleTheme} />
          </SettingsRow>
        </SettingsSection>

        {/* Account */}
        <SettingsSection title="Account">
          {isAuthenticated && user ? (
            <div className="px-4 py-3">
              <p className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>
                Signed in as <strong>{user.username}</strong>
              </p>
              <p className="text-[12px] font-['Source_Sans_3',sans-serif] mt-1" style={{ color: "var(--hc-text-secondary)" }}>
                {user.email}
              </p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-[11px] font-semibold uppercase bg-[var(--hc-accent-bg)] text-[var(--hc-accent)] font-['Source_Sans_3',sans-serif]">
                {getTierDisplayName(user.subscriptionTier)}
              </span>
            </div>
          ) : (
            <div className="px-4 py-3">
              <p className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text-secondary)" }}>
                Not signed in
              </p>
            </div>
          )}
        </SettingsSection>

        {/* Defaults */}
        <SettingsSection title="Defaults">
          <SettingsRow label="Default exchange">
            <span className="text-[14px] font-['Source_Sans_3',sans-serif] capitalize" style={{ color: "var(--hc-text-secondary)" }}>
              {defaultExchange || "binance"}
            </span>
          </SettingsRow>
        </SettingsSection>
      </div>
    </div>
  );
}

function SettingsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg overflow-hidden" style={{ backgroundColor: "var(--hc-surface)", border: "1px solid var(--hc-border)" }}>
      <div className="px-4 py-2" style={{ backgroundColor: "var(--hc-modal-header)", borderBottom: "1px solid var(--hc-border)" }}>
        <span className="text-[13px] font-semibold font-['Source_Sans_3',sans-serif] uppercase tracking-wider" style={{ color: "var(--hc-text-secondary)" }}>
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

function SettingsRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid var(--hc-border)" }}>
      <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ color: "var(--hc-text)" }}>
        {label}
      </span>
      {children}
    </div>
  );
}

function ToggleSwitch({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="w-[38px] h-[22px] rounded-full relative shrink-0 transition-colors"
      style={{ backgroundColor: on ? "var(--hc-accent)" : "var(--hc-border-strong)" }}
    >
      <div
        className="absolute w-[18px] h-[18px] bg-white rounded-full top-[2px] transition-all"
        style={{ left: on ? "18px" : "2px", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }}
      />
    </button>
  );
}
