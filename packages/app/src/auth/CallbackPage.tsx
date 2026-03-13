import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authClient, setAuthUser } from '@hopcharts/core';

export function CallbackPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const handled = useRef(false);

  useEffect(() => {
    // Guard against strict-mode double-fire which would consume the CSRF state twice
    if (handled.current) return;
    handled.current = true;

    const params = new URLSearchParams(window.location.search);

    authClient
      .handleCallback(params)
      .then((user) => {
        setAuthUser(user);
        const redirect = authClient.consumePostLoginRedirect();
        navigate(redirect, { replace: true });
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : 'Authentication failed');
      });
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--hc-bg)]">
        <div className="max-w-sm w-full text-center px-6">
          <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>
          <h1 className="text-[22px] font-bold font-['Sofia_Pro',sans-serif] text-[var(--hc-text)] mb-2">
            Authentication Failed
          </h1>
          <p className="text-[14px] text-[var(--hc-text-secondary)] font-['Source_Sans_3',sans-serif] mb-8">
            {error}
          </p>
          <button
            onClick={() => authClient.initiateLogin()}
            className="w-full h-[44px] bg-[#00b1c7] rounded-lg text-white text-[14px] font-semibold font-['Source_Sans_3',sans-serif] hover:bg-[#009aad] active:bg-[#00889a] transition-colors shadow-[0_4px_14px_0_rgba(0,177,199,0.25)]"
          >
            Try Again
          </button>
          <button
            onClick={() => navigate('/', { replace: true })}
            className="mt-3 w-full h-[44px] rounded-lg text-[14px] font-medium text-[var(--hc-text-secondary)] hover:text-[var(--hc-text)] hover:bg-[var(--hc-hover-bg)] transition-colors font-['Source_Sans_3',sans-serif]"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--hc-bg)]">
      <div className="text-center">
        <div className="w-8 h-8 mx-auto mb-4 border-2 border-[#00b1c7] border-t-transparent rounded-full animate-spin" />
        <p className="text-[14px] text-[var(--hc-text-secondary)] font-['Source_Sans_3',sans-serif]">
          Completing sign in...
        </p>
      </div>
    </div>
  );
}
