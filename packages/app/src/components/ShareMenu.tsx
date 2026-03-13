import { useRef, useEffect, useState } from "react";
import { useChartStore } from "@hopcharts/core";

interface ShareMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareMenu({ isOpen, onClose }: ShareMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const exchangeId = useChartStore((s) => s.exchangeId);
  const pair = useChartStore((s) => s.pair);
  const timeframe = useChartStore((s) => s.timeframe);

  const shareUrl = `${window.location.origin}/?exchange=${encodeURIComponent(exchangeId)}&pair=${encodeURIComponent(pair)}&tf=${encodeURIComponent(timeframe)}`;

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) setCopied(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      window.prompt("Copy this link:", shareUrl);
    }
  };

  const handleSocialShare = (platform: string) => {
    const text = "Check out this chart on Hopcharts!";
    let url = "";
    switch (platform) {
      case "x":
        url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "telegram":
        url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`;
        break;
      case "reddit":
        url = `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(text)}`;
        break;
      case "email":
        url = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(shareUrl)}`;
        break;
    }
    if (url) window.open(url, "_blank");
  };

  const IC = "var(--hc-icon-stroke)";

  return (
    <div
      ref={panelRef}
      className="absolute top-[44px] right-0 z-50 rounded-md overflow-hidden"
      style={{ width: 406, backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
    >
      {/* Header */}
      <div className="h-[40px] flex items-center justify-between px-[15px] rounded-t-md" style={{ backgroundColor: 'var(--hc-modal-header)' }}>
        <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ fontWeight: 600, color: 'var(--hc-text)' }}>
          Image URL
        </span>
        <button onClick={onClose} className="w-[24px] h-[24px] flex items-center justify-center rounded transition-colors">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M10.5 0.5L0.5 10.5M0.5 0.5L10.5 10.5" stroke={IC} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="px-[15px] pt-[16px] pb-[14px]">
        {/* URL + Copy */}
        <div className="flex gap-[10px] items-center">
          <div className="flex-1 h-[40px] rounded flex items-center px-[12px] overflow-hidden" style={{ backgroundColor: 'var(--hc-input-bg)', border: '1px solid var(--hc-border)' }}>
            <span className="text-[14px] font-['Source_Sans_3',sans-serif] truncate" style={{ color: copied ? 'var(--hc-text)' : 'var(--hc-text-secondary)' }}>
              {shareUrl}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className={`h-[40px] px-[20px] rounded text-[14px] font-['Source_Sans_3',sans-serif] transition-all shrink-0 ${
              copied
                ? "border-2 border-[#00b1c7] text-[#00b1c7]"
                : "bg-[#00b1c7] text-white hover:bg-[#009aad]"
            }`}
            style={{ fontWeight: 600, minWidth: 80, ...(copied ? { backgroundColor: 'var(--hc-surface)' } : {}) }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Divider */}
        <div className="h-px my-[14px]" style={{ backgroundColor: 'var(--hc-border)' }} />

        {/* Social Share */}
        <p className="text-[12px] font-['Source_Sans_3',sans-serif] mb-[10px]" style={{ color: 'var(--hc-text-secondary)' }}>
          Share on socials
        </p>
        <div className="flex items-center gap-[8px]">
          <button onClick={() => handleSocialShare("x")} className="w-[36px] h-[36px] rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'var(--hc-hover-bg)' }} title="X (Twitter)">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M9.5 6.8L14.5 1H13.2L8.9 5.9L5.5 1H1L6.2 8.7L1 15H2.3L6.8 9.6L10.4 15H14.9L9.5 6.8ZM7.5 8.8L6.9 7.9L2.8 2.1H4.9L8.1 6.7L8.7 7.6L13.2 14H11.1L7.5 8.8Z" fill="var(--hc-text)" />
            </svg>
          </button>
          <button onClick={() => handleSocialShare("facebook")} className="w-[36px] h-[36px] rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'var(--hc-hover-bg)' }} title="Facebook">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 1C4.13 1 1 4.13 1 8C1 11.49 3.55 14.35 6.9 14.9V10.1H5.2V8H6.9V6.4C6.9 4.7 7.9 3.8 9.4 3.8C10.1 3.8 10.8 3.9 10.8 3.9V5.6H10C9.2 5.6 9 6.1 9 6.6V8H10.7L10.4 10.1H9V14.9C12.45 14.35 15 11.49 15 8C15 4.13 11.87 1 8 1Z" fill="#1877F2" />
            </svg>
          </button>
          <button onClick={() => handleSocialShare("telegram")} className="w-[36px] h-[36px] rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'var(--hc-hover-bg)' }} title="Telegram">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M14.5 2L7 9.5" stroke="#229ED9" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.5 2L10 14.5L7 9.5L1.5 7L14.5 2Z" stroke="#229ED9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={() => handleSocialShare("reddit")} className="w-[36px] h-[36px] rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'var(--hc-hover-bg)' }} title="Reddit">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#FF4500" strokeWidth="1" fill="none" />
              <circle cx="5.5" cy="8.5" r="1" fill="#FF4500" />
              <circle cx="10.5" cy="8.5" r="1" fill="#FF4500" />
              <path d="M5.5 10.5C6 11.5 7 12 8 12C9 12 10 11.5 10.5 10.5" stroke="#FF4500" strokeLinecap="round" fill="none" />
              <circle cx="12" cy="4" r="1" fill="#FF4500" />
              <path d="M10 3L12 4" stroke="#FF4500" strokeLinecap="round" />
            </svg>
          </button>
          <button onClick={() => handleSocialShare("email")} className="w-[36px] h-[36px] rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'var(--hc-hover-bg)' }} title="Email">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="1.5" y="3.5" width="13" height="9" rx="1" stroke="var(--hc-text)" />
              <path d="M1.5 4.5L8 9L14.5 4.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
