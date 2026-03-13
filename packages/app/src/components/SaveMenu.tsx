import { useRef, useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FeedbackModal } from "./FeedbackModal";

/* --- Toggle Switch --- */

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onToggle(); }}
      className="w-[36px] h-[22px] rounded-full relative shrink-0 transition-colors"
      style={{ backgroundColor: on ? "#00b1c7" : "var(--hc-border-strong)" }}
    >
      <div
        className="absolute w-[18px] h-[18px] bg-white rounded-full top-[2px] transition-all"
        style={{ left: on ? "16px" : "2px" }}
      />
    </button>
  );
}

/* --- Modal Shell --- */

function ModalShell({ open, onClose, width, children }: { open: boolean; onClose: () => void; width: number; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
          <div className="absolute inset-0" style={{ backgroundColor: 'var(--hc-modal-overlay)' }} onClick={onClose} />
          <motion.div
            className="relative rounded-md overflow-hidden"
            style={{ width, backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalHeader({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="h-[40px] flex items-center justify-between px-[15px] rounded-t-md" style={{ backgroundColor: 'var(--hc-modal-header)' }}>
      <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ fontWeight: 600, color: 'var(--hc-text)' }}>{title}</span>
      <button onClick={onClose} className="w-[24px] h-[24px] flex items-center justify-center rounded transition-colors">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M10.5 0.5L0.5 10.5M0.5 0.5L10.5 10.5" stroke="var(--hc-icon-stroke)" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>
  );
}

function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="h-[32px] px-[20px] rounded-sm text-[14px] font-['Source_Sans_3',sans-serif] transition-colors" style={{ backgroundColor: 'var(--hc-surface)', border: '1px solid var(--hc-border-strong)', color: 'var(--hc-text-secondary)' }}>
      Cancel
    </button>
  );
}

function PrimaryButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="h-[32px] px-[20px] bg-[#00b1c7] rounded-sm text-[14px] text-white font-['Source_Sans_3',sans-serif] hover:bg-[#009aad] transition-colors" style={{ fontWeight: 600 }}>
      {children}
    </button>
  );
}

/* --- Save Chart Layout Modal --- */

function SaveLayoutModal({ open, onClose, onSave, defaultName = "Unnamed Layout 1" }: {
  open: boolean; onClose: () => void; onSave: (name: string) => void; defaultName?: string;
}) {
  const [name, setName] = useState(defaultName);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) { setName(defaultName); setTimeout(() => inputRef.current?.select(), 50); }
  }, [open, defaultName]);

  return (
    <ModalShell open={open} onClose={onClose} width={350}>
      <ModalHeader title="Save Chart Layout" onClose={onClose} />
      <div className="px-[20px] pt-[16px] pb-[20px]">
        <p className="text-[12px] font-['Source_Sans_3',sans-serif] mb-[10px]" style={{ color: 'var(--hc-text)' }}>Enter a new chart layout name</p>
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-[36px] px-[12px] rounded text-[14px] font-['Source_Sans_3',sans-serif] outline-none transition-colors"
          style={{ backgroundColor: 'var(--hc-input-bg)', border: '1px solid var(--hc-border)', color: 'var(--hc-text)' }}
          onKeyDown={(e) => { if (e.key === "Enter" && name.trim()) onSave(name.trim()); }}
          onFocus={(e) => e.currentTarget.style.borderColor = '#00b1c7'}
          onBlur={(e) => e.currentTarget.style.borderColor = 'var(--hc-border)'}
        />
        <div className="flex justify-end gap-[10px] mt-[20px]">
          <CancelButton onClick={onClose} />
          <PrimaryButton onClick={() => name.trim() && onSave(name.trim())}>Save</PrimaryButton>
        </div>
      </div>
    </ModalShell>
  );
}

/* --- Rename Modal --- */

function RenameModal({ open, onClose, onRename, currentName }: {
  open: boolean; onClose: () => void; onRename: (name: string) => void; currentName: string;
}) {
  const [name, setName] = useState(currentName);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) { setName(currentName); setTimeout(() => inputRef.current?.select(), 50); }
  }, [open, currentName]);

  return (
    <ModalShell open={open} onClose={onClose} width={350}>
      <ModalHeader title="Rename Chart Layout" onClose={onClose} />
      <div className="px-[20px] pt-[16px] pb-[20px]">
        <p className="text-[12px] font-['Source_Sans_3',sans-serif] mb-[10px]" style={{ color: 'var(--hc-text)' }}>Enter a new chart Layout name:</p>
        <div className="relative">
          <input
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-[36px] px-[12px] pr-[32px] rounded text-[14px] font-['Source_Sans_3',sans-serif] outline-none transition-colors"
            style={{ backgroundColor: 'var(--hc-input-bg)', border: '1px solid var(--hc-border)', color: 'var(--hc-text)' }}
            onKeyDown={(e) => { if (e.key === "Enter" && name.trim()) onRename(name.trim()); }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#00b1c7'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'var(--hc-border)'}
          />
          {name.length > 0 && (
            <button
              onClick={() => { setName(""); inputRef.current?.focus(); }}
              className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] flex items-center justify-center rounded-full transition-colors"
            >
              <svg width="8" height="8" viewBox="0 0 11 11" fill="none"><path d="M10.5 0.5L0.5 10.5M0.5 0.5L10.5 10.5" stroke="var(--hc-text-secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
            </button>
          )}
        </div>
        <div className="flex justify-end gap-[10px] mt-[20px]">
          <CancelButton onClick={onClose} />
          <PrimaryButton onClick={() => name.trim() && onRename(name.trim())}>Save</PrimaryButton>
        </div>
      </div>
    </ModalShell>
  );
}

/* --- Load Layout Modal --- */

interface SavedLayout { id: string; name: string; description: string; }

const MOCK_LAYOUTS: SavedLayout[] = [
  { id: "1", name: "Unnamed Layout 1", description: "BTC/USD, BITSTAMP, 1D (09.03.2026, 14:30)" },
  { id: "2", name: "LINK", description: "LINK/USDT, BINANCE, 4H (05.03.2026, 09:15)" },
  { id: "3", name: "Named98765", description: "USD/CAD, BITSTAMP, 1Y (04.09.2020, 12:01)" },
  { id: "4", name: "Scalping Setup", description: "ETH/USD, COINBASE, 5m (08.03.2026, 22:45)" },
];

type SortMode = "name-asc" | "name-desc" | "date-new" | "date-old";
const SORT_OPTIONS: { value: SortMode; label: string }[] = [
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "date-new", label: "By date (New first)" },
  { value: "date-old", label: "By date (Old first)" },
];

function LoadLayoutModal({ open, onClose, onLoad }: { open: boolean; onClose: () => void; onLoad: (layout: SavedLayout) => void; }) {
  const [layouts, setLayouts] = useState<SavedLayout[]>(MOCK_LAYOUTS);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>("name-asc");
  const [deleteTarget, setDeleteTarget] = useState<SavedLayout | null>(null);
  const [deleteSuccessOpen, setDeleteSuccessOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 50); }, [searchOpen]);

  useEffect(() => {
    if (!sortOpen) return;
    const handler = (e: MouseEvent) => { if (sortRef.current && !sortRef.current.contains(e.target as Node)) setSortOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [sortOpen]);

  const filtered = useMemo(() => {
    let list = [...layouts];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((l) => l.name.toLowerCase().includes(q) || l.description.toLowerCase().includes(q));
    }
    list.sort((a, b) => {
      if (sortMode === "name-asc") return a.name.localeCompare(b.name);
      if (sortMode === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });
    return list;
  }, [layouts, searchQuery, sortMode]);

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setLayouts((prev) => prev.filter((l) => l.id !== deleteTarget.id));
    setDeleteTarget(null);
    setDeleteSuccessOpen(true);
  };

  const ICS = "var(--hc-text-muted)";

  return (
    <>
      <AnimatePresence>
        {open && !deleteTarget && !deleteSuccessOpen && (
          <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <div className="absolute inset-0" style={{ backgroundColor: 'var(--hc-modal-overlay)' }} onClick={onClose} />
            <motion.div
              className="relative rounded-md overflow-hidden flex flex-col"
              style={{ width: 350, maxHeight: 400, backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
              initial={{ scale: 0.95, opacity: 0, y: 10 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="h-[40px] flex items-center justify-between px-[15px] rounded-t-md shrink-0" style={{ backgroundColor: 'var(--hc-modal-header)' }}>
                <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={{ fontWeight: 600, color: 'var(--hc-text)' }}>Load Layout</span>
                <div className="flex items-center gap-[4px]">
                  <button onClick={() => { setSearchOpen((v) => !v); if (searchOpen) setSearchQuery(""); }} className="w-[24px] h-[24px] flex items-center justify-center rounded transition-colors">
                    <svg width="15" height="15" viewBox="0 0 15.0001 15" fill="none">
                      <path d="M5.55555 10.6111C8.34765 10.6111 10.6111 8.34766 10.6111 5.55555C10.6111 2.76345 8.34765 0.5 5.55555 0.5C2.76345 0.5 0.5 2.76345 0.5 5.55555C0.5 8.34766 2.76345 10.6111 5.55555 10.6111Z" stroke={searchOpen ? "#00B1C7" : ICS} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.5001 14.5L9.05566 9.44444" stroke={searchOpen ? "#00B1C7" : ICS} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className="relative" ref={sortRef}>
                    <button onClick={() => setSortOpen((v) => !v)} className="w-[24px] h-[24px] flex items-center justify-center rounded transition-colors">
                      <svg width="12" height="12" viewBox="0 0 15 12" fill="none">
                        <path d="M11.0001 3.9L7.50006 0.5L4.00006 3.9" stroke={sortOpen ? "#00B1C7" : ICS} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 8.1L7.5 11.5L11 8.1" stroke={sortOpen ? "#00B1C7" : ICS} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {sortOpen && (
                      <div className="absolute right-0 top-[28px] z-10 rounded-md py-[4px]" style={{ width: 170, backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}>
                        {SORT_OPTIONS.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => { setSortMode(opt.value); setSortOpen(false); }}
                            className="w-full flex items-center gap-[8px] px-[12px] h-[32px] transition-colors text-[13px] font-['Source_Sans_3',sans-serif]"
                            style={{ color: sortMode === opt.value ? "#00B1C7" : "var(--hc-text)" }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                          >
                            {sortMode === opt.value && (<svg width="10" height="8" viewBox="0 0 18 13" fill="none"><path d="M16.5 1.5L6.1875 11.5L1.5 6.95" stroke="#00B1C7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>)}
                            <span className={sortMode === opt.value ? "" : "ml-[18px]"}>{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <button onClick={onClose} className="w-[24px] h-[24px] flex items-center justify-center rounded transition-colors">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M10.5 0.5L0.5 10.5M0.5 0.5L10.5 10.5" stroke="var(--hc-icon-stroke)" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </div>
              </div>

              {/* Search bar */}
              <AnimatePresence>
                {searchOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.15 }} className="overflow-hidden shrink-0">
                    <div className="px-[15px] py-[8px]" style={{ borderBottom: '1px solid var(--hc-border)' }}>
                      <input
                        ref={searchInputRef}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search layouts..."
                        className="w-full h-[32px] px-[10px] rounded text-[13px] font-['Source_Sans_3',sans-serif] outline-none transition-colors"
                        style={{ backgroundColor: 'var(--hc-input-bg)', border: '1px solid var(--hc-border)', color: 'var(--hc-text)' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#00b1c7'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'var(--hc-border)'}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Layout list */}
              <div className="flex-1 overflow-y-auto">
                {filtered.length === 0 && (
                  <div className="px-[15px] py-[20px] text-center text-[13px] font-['Source_Sans_3',sans-serif]" style={{ color: 'var(--hc-text-secondary)' }}>No layouts found</div>
                )}
                {filtered.map((layout, i) => (
                  <div
                    key={layout.id}
                    className="relative transition-colors cursor-pointer group"
                    style={{ borderTop: i > 0 ? '1px solid var(--hc-border)' : undefined }}
                    onClick={() => { onLoad(layout); onClose(); }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                  >
                    <div className="px-[15px] py-[10px] pr-[40px]">
                      <p className="text-[14px] font-['Source_Sans_3',sans-serif] truncate" style={{ fontWeight: 600, color: 'var(--hc-text)' }}>{layout.name}</p>
                      <p className="text-[14px] font-['Source_Sans_3',sans-serif] leading-[20px] truncate" style={{ color: 'var(--hc-text-muted)' }}>{layout.description}</p>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); setDeleteTarget(layout); }}
                      className="absolute right-[10px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded"
                    >
                      <svg width="15" height="17" viewBox="0 0 15 17" fill="none">
                        <path d="M0.5 3.70001H2.05556H14.5" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.38896 3.7V2.1C4.38896 1.67565 4.55285 1.26869 4.84458 0.968629C5.1363 0.668571 5.53196 0.5 5.94452 0.5H9.05563C9.46819 0.5 9.86385 0.668571 10.1556 0.968629C10.4473 1.26869 10.6112 1.67565 10.6112 2.1V3.7M12.9445 3.7V14.9C12.9445 15.3243 12.7806 15.7313 12.4889 16.0314C12.1972 16.3314 11.8015 16.5 11.389 16.5H3.61119C3.19863 16.5 2.80297 16.3314 2.51124 16.0314C2.21952 15.7313 2.05563 15.3243 2.05563 14.9V3.7H12.9445Z" stroke="var(--hc-text)" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FeedbackModal open={!!deleteTarget && !deleteSuccessOpen} onClose={() => setDeleteTarget(null)} variant="warning" message={deleteTarget ? <>Do you really want to remove<br />Chart Layout &ldquo;{deleteTarget.name}&rdquo;?</> : ""} secondaryLabel="Remove" onSecondary={handleDeleteConfirm} primaryLabel="Not Now" onPrimary={() => setDeleteTarget(null)} zIndex={10000} />
      <FeedbackModal open={deleteSuccessOpen} onClose={() => setDeleteSuccessOpen(false)} variant="success" message="The layout was removed successfully" zIndex={10000} />
    </>
  );
}

/* --- Main SaveMenu Dropdown --- */

export interface SaveMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSaved?: () => void;
}

export function SaveMenu({ isOpen, onClose, onSaved }: SaveMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [autosave, setAutosave] = useState(true);
  const [sharing, setSharing] = useState(false);
  const [layoutName, setLayoutName] = useState("Unnamed Layout 1");
  const [isSaved, setIsSaved] = useState(false);
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [renameModalOpen, setRenameModalOpen] = useState(false);
  const [renameSuccessOpen, setRenameSuccessOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [loadModalOpen, setLoadModalOpen] = useState(false);
  const [savedName, setSavedName] = useState("");
  const [renamedName, setRenamedName] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => { if (panelRef.current && !panelRef.current.contains(e.target as Node)) onClose(); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const handleSaveNow = () => {
    if (isSaved) { onClose(); onSaved?.(); } else { onClose(); setSaveModalOpen(true); }
  };

  const handleSaveConfirm = (name: string) => {
    setLayoutName(name); setSavedName(name); setIsSaved(true); setSaveModalOpen(false); setSuccessModalOpen(true); onSaved?.();
  };

  const handleRenameConfirm = (name: string) => {
    setLayoutName(name); setRenamedName(name); setRenameModalOpen(false); setRenameSuccessOpen(true);
  };

  const menuItemStyle: React.CSSProperties = { color: 'var(--hc-text)' };

  return (
    <>
      {isOpen && (
        <div
          ref={panelRef}
          className="absolute top-[44px] right-0 z-50 rounded-lg overflow-hidden"
          style={{ width: 236, backgroundColor: 'var(--hc-modal-bg)', border: '1px solid var(--hc-border)', boxShadow: 'var(--hc-shadow)' }}
        >
          {/* Autosave */}
          <div className="mx-[8px] mt-[8px] rounded flex flex-col" style={{ backgroundColor: "rgba(0,177,199,0.05)" }}>
            <div className="flex items-center justify-between px-[14px] h-[40px]">
              <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={menuItemStyle}>Autosave</span>
              <Toggle on={autosave} onToggle={() => setAutosave((v) => !v)} />
            </div>
            {autosave && (<span className="text-[10px] font-['Source_Sans_3',sans-serif] px-[14px] pb-[8px] -mt-[4px]" style={{ color: 'var(--hc-text-secondary)' }}>Every 5 minutes</span>)}
          </div>

          <button onClick={handleSaveNow} className="w-full flex items-center px-[22px] h-[40px] transition-colors text-[14px] font-['Source_Sans_3',sans-serif]" style={menuItemStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>Save now ...</button>

          <div className="h-px mx-[14px] my-[2px]" style={{ backgroundColor: 'var(--hc-border)' }} />

          <div className="mx-[8px] rounded flex flex-col" style={{ backgroundColor: 'var(--hc-hover-bg)' }}>
            <div className="flex items-center justify-between px-[14px] h-[40px]">
              <span className="text-[14px] font-['Source_Sans_3',sans-serif]" style={menuItemStyle}>Sharing On</span>
              <Toggle on={sharing} onToggle={() => setSharing((v) => !v)} />
            </div>
            <span className="text-[10px] font-['Source_Sans_3',sans-serif] px-[14px] pb-[8px] -mt-[4px]" style={{ color: 'var(--hc-text-secondary)' }}>Anyone with the link can view and copy</span>
          </div>

          <div className="h-px mx-[14px] my-[2px]" style={{ backgroundColor: 'var(--hc-border)' }} />

          {["Rename ...", "Make a copy ..."].map((label, i) => (
            <button key={label} onClick={() => { onClose(); if (i === 0) setRenameModalOpen(true); else setShareModalOpen(true); }}
              className="w-full flex items-center px-[22px] h-[40px] transition-colors text-[14px] font-['Source_Sans_3',sans-serif]" style={menuItemStyle}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>{label}</button>
          ))}

          <div className="h-px mx-[14px] my-[2px]" style={{ backgroundColor: 'var(--hc-border)' }} />

          <button onClick={() => { onClose(); setLayoutName("Unnamed Layout " + (Math.floor(Math.random() * 99) + 2)); setIsSaved(false); }}
            className="w-full flex items-center px-[22px] h-[40px] transition-colors text-[14px] font-['Source_Sans_3',sans-serif]" style={menuItemStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>New Chart Layout</button>

          <button onClick={() => { onClose(); setLoadModalOpen(true); }}
            className="w-full flex items-center px-[22px] h-[40px] transition-colors text-[14px] font-['Source_Sans_3',sans-serif] mb-[4px]" style={menuItemStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hc-hover-bg)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>Load Chart Layout</button>
        </div>
      )}

      <SaveLayoutModal open={saveModalOpen} onClose={() => setSaveModalOpen(false)} onSave={handleSaveConfirm} defaultName={layoutName} />
      <FeedbackModal open={successModalOpen} onClose={() => setSuccessModalOpen(false)} variant="success" message={<>&ldquo;{savedName}&rdquo; is successfully saved.</>} />
      <RenameModal open={renameModalOpen} onClose={() => setRenameModalOpen(false)} onRename={handleRenameConfirm} currentName={layoutName} />
      <FeedbackModal open={renameSuccessOpen} onClose={() => setRenameSuccessOpen(false)} variant="success" message={<>The layout was renamed to<br />&ldquo;{renamedName}&rdquo;</>} />
      {/* ShareModal is simplified - uses embed code pattern */}
      <ModalShell open={shareModalOpen} onClose={() => setShareModalOpen(false)} width={406}>
        <ModalHeader title="Share" onClose={() => setShareModalOpen(false)} />
        <div className="px-[15px] pt-[12px] pb-[20px]">
          <p className="text-[14px] font-['Source_Sans_3',sans-serif] mb-[10px]" style={{ color: 'var(--hc-text)' }}>
            Embed code will be available when sharing is enabled.
          </p>
        </div>
      </ModalShell>
      <LoadLayoutModal open={loadModalOpen} onClose={() => setLoadModalOpen(false)} onLoad={(layout) => { setLayoutName(layout.name); setIsSaved(true); onSaved?.(); }} />
    </>
  );
}
