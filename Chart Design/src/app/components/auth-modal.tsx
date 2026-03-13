import { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, EyeOff, X, ArrowLeft, Mail, Lock, User, CheckCircle2, ArrowRight } from "lucide-react";
import { useTheme } from "./theme-context";
import logoLight from "figma:asset/d0addcaee28de26fb80efe013f584570b90b0185.png";
import logoDark from "figma:asset/9e28964ad513be026690bf1410a7716466027194.png";

/* ─── Types ─────────────────────────────────── */

type AuthView = "login" | "signup" | "2fa" | "forgot-password" | "forgot-username";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  initialView?: AuthView;
}

/* ─── Form Components ───────────────────────── */

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  rightLabel?: string;
  onRightLabelClick?: () => void;
}

function InputField({ label, icon, rightLabel, onRightLabelClick, type = "text", ...props }: InputFieldProps) {
  const [showPw, setShowPw] = useState(false);
  const [focused, setFocused] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1.5">
        <label className="text-[13px] font-medium text-[var(--hc-text)] font-['Source_Sans_3',sans-serif]">
          {label}
        </label>
        {rightLabel && (
          <button
            type="button"
            onClick={onRightLabelClick}
            className="text-[12px] font-medium text-[var(--hc-text-secondary)] hover:text-[#00b1c7] transition-colors font-['Source_Sans_3',sans-serif]"
          >
            {rightLabel}
          </button>
        )}
      </div>
      <div 
        className={`relative flex items-center h-[44px] rounded-lg border transition-all duration-200 ${
          focused 
            ? 'border-[#00b1c7] ring-2 ring-[#00b1c7]/10 bg-[var(--hc-surface)]' 
            : 'border-[var(--hc-border)] bg-[var(--hc-input-bg)] hover:border-[#00b1c7]/50'
        }`}
      >
        {icon && (
          <div className={`pl-3 pr-2 flex items-center justify-center transition-colors ${focused ? 'text-[#00b1c7]' : 'text-[var(--hc-text-muted)]'}`}>
            {icon}
          </div>
        )}
        <input
          type={isPassword && !showPw ? "password" : "text"}
          className={`w-full h-full bg-transparent outline-none text-[14px] text-[var(--hc-text)] font-['Source_Sans_3',sans-serif] placeholder:text-[var(--hc-text-muted)] ${!icon ? 'px-3' : 'pr-3'}`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPw((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--hc-text-muted)] hover:text-[var(--hc-text)] transition-colors"
          >
            {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
    </div>
  );
}

function PrimaryButton({ text, onClick, icon: Icon }: { text: string; onClick?: () => void; icon?: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full h-[44px] bg-[#00b1c7] rounded-lg text-white text-[14px] font-semibold font-['Source_Sans_3',sans-serif] hover:bg-[#009aad] active:bg-[#00889a] transition-all overflow-hidden flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(0,177,199,0.25)] hover:shadow-[0_6px_20px_rgba(0,177,199,0.3)]"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      <span>{text}</span>
      {Icon && <span className="group-hover:translate-x-1 transition-transform">{Icon}</span>}
    </button>
  );
}

function SocialButton({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <button className="flex-1 h-[44px] flex items-center justify-center gap-2 rounded-lg border border-[var(--hc-border)] bg-[var(--hc-surface)] hover:bg-[var(--hc-hover-bg)] text-[13px] font-medium text-[var(--hc-text)] transition-colors font-['Source_Sans_3',sans-serif]">
      {icon}
      <span>{text}</span>
    </button>
  );
}

/* ─── Elegant Left Panel ────────────────────────── */

function ElegantTradingBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#070B0E] to-[#0A1216] overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />
      
      {/* Abstract chart spline */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00b1c7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00b1c7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chart-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(0,177,199,0)" />
            <stop offset="40%" stopColor="#00b1c7" />
            <stop offset="100%" stopColor="#09977e" />
          </linearGradient>
        </defs>
        
        <motion.path 
          d="M 0,80 Q 15,75 25,60 T 50,55 T 75,35 T 100,15 L 100,100 L 0,100 Z"
          fill="url(#chart-fill)"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.path
          d="M 0,80 Q 15,75 25,60 T 50,55 T 75,35 T 100,15"
          fill="none"
          stroke="url(#chart-line)"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>

      {/* Glowing point */}
      <motion.div 
        className="absolute w-2.5 h-2.5 rounded-full bg-[#09977e] shadow-[0_0_15px_#09977e]"
        style={{ top: '15%', right: '-0.5%', transform: 'translate(-50%, -50%)' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      />
      
      {/* Overlay branding text */}
      <div className="absolute inset-0 flex flex-col justify-end p-10 z-10 bg-gradient-to-t from-[#0A1216] via-transparent to-transparent">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8 h-[28px]"
        >
          <img 
            src={logoLight} 
            alt="Cryptohopper" 
            className="h-full w-auto object-contain"
          />
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-white text-[28px] font-['Sofia_Pro',sans-serif] font-bold mb-3 tracking-tight"
        >
          Master the Markets
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-[#94A3B8] text-[14px] leading-relaxed max-w-[280px] font-['Source_Sans_3',sans-serif]"
        >
          Join thousands of traders making smarter decisions with institutional-grade tools and real-time analytics.
        </motion.p>
      </div>
    </div>
  );
}

/* ─── Views ────────────────────────────────────── */

function LoginView({ onNavigate }: { onNavigate: (v: AuthView) => void }) {
  return (
    <div className="flex flex-col h-full justify-center pb-6 md:pb-0">
      <div className="mb-8">
        <h2 className="text-[28px] font-bold font-['Sofia_Pro',sans-serif] text-[var(--hc-text)] tracking-tight mb-2">
          Welcome back
        </h2>
        <p className="text-[14px] text-[var(--hc-text-secondary)] font-['Source_Sans_3',sans-serif]">
          Please enter your details to sign in.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-1">
        <InputField 
          label="Email or Username" 
          placeholder="Enter your email" 
          icon={<User size={18} />}
        />
        <InputField
          label="Password"
          placeholder="••••••••"
          type="password"
          icon={<Lock size={18} />}
          rightLabel="Forgot password?"
          onRightLabelClick={() => onNavigate("forgot-password")}
        />

        <div className="flex items-center gap-2 mb-6 mt-4 cursor-pointer group w-fit">
          <div className="relative flex items-center justify-center w-4 h-4 rounded border border-[var(--hc-border-strong)] bg-[var(--hc-input-bg)] group-hover:border-[#00b1c7] transition-colors">
            <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer" />
            <svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 peer-checked:text-[#00b1c7] transition-opacity" viewBox="0 0 11 8" fill="none">
              <path d="M10 1L3.8125 7L1 4.27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[13px] text-[var(--hc-text)] font-['Source_Sans_3',sans-serif] select-none">
            Remember me
          </span>
        </div>

        <PrimaryButton text="Sign in" icon={<ArrowRight size={16} />} />
      </form>

      <div className="mt-8 mb-6 relative flex items-center justify-center">
        <div className="absolute w-full h-px bg-[var(--hc-border)]" />
        <span className="relative bg-[var(--hc-modal-bg)] px-4 text-[12px] font-medium text-[var(--hc-text-muted)] font-['Source_Sans_3',sans-serif] uppercase tracking-wider">
          Or continue with
        </span>
      </div>

      <div className="flex gap-3">
        <SocialButton 
          text="Google" 
          icon={<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" color="#4285F4"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" color="#34A853"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" color="#FBBC05"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" color="#EA4335"/></svg>} 
        />
        <SocialButton 
          text="Apple" 
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--hc-text)]"><path d="M16.6 15c-.06.18-1.56 5.38-4.88 5.38-1.48 0-2.1-.88-3.92-.88-1.84 0-2.5.86-3.94.86-3.08 0-4.6-4.78-4.76-5.1-.22-.52-2.9-8.42-.5-11.58C10.04.22 12.06 0 13.56 0c1.86 0 2.86.9 4.02.9 1.14 0 2.22-.92 4.1-.92 1.34 0 2.92.2 4.18 1.48-3.3 1.86-2.78 5.8-2.68 6.52.22 1.66 1.8 2.66 2.04 2.8-1.8 2.68-4.18 3.06-4.4 3.06-.06 0-.22.02-.22.02zm-3.66-10.92c.7-1 1.18-2.3 1.04-3.62-1.18.06-2.62.8-3.46 1.8-.76.88-1.32 2.2-1.16 3.48 1.32.1 2.66-.7 3.58-1.66z"/></svg>} 
        />
      </div>

      <p className="mt-8 text-[13px] text-center text-[var(--hc-text-secondary)] font-['Source_Sans_3',sans-serif]">
        Don't have an account?{" "}
        <button 
          onClick={() => onNavigate("signup")}
          className="text-[#00b1c7] font-semibold hover:underline decoration-2 underline-offset-4"
        >
          Sign up for free
        </button>
      </p>
    </div>
  );
}

function SignupView({ onNavigate }: { onNavigate: (v: AuthView) => void }) {
  return (
    <div className="flex flex-col h-full justify-center pb-6 md:pb-0">
      <div className="mb-6">
        <h2 className="text-[28px] font-bold font-['Sofia_Pro',sans-serif] text-[var(--hc-text)] tracking-tight mb-2">
          Create an account
        </h2>
        <p className="text-[14px] text-[var(--hc-text-secondary)] font-['Source_Sans_3',sans-serif]">
          Start your trading journey with Hopcharts today.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-1">
        <div className="flex gap-3 mb-1">
          <InputField label="First Name" placeholder="John" />
          <InputField label="Last Name" placeholder="Doe" />
        </div>
        <InputField 
          label="Email" 
          placeholder="john@example.com" 
          icon={<Mail size={18} />}
        />
        <InputField
          label="Password"
          placeholder="Create a strong password"
          type="password"
          icon={<Lock size={18} />}
        />

        <div className="flex items-start gap-2 mb-6 mt-4 group">
          <div className="relative flex-shrink-0 flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-[var(--hc-border-strong)] bg-[var(--hc-input-bg)] group-hover:border-[#00b1c7] transition-colors">
            <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer" />
            <svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 peer-checked:text-[#00b1c7] transition-opacity" viewBox="0 0 11 8" fill="none">
              <path d="M10 1L3.8125 7L1 4.27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[12px] text-[var(--hc-text-secondary)] font-['Source_Sans_3',sans-serif] leading-tight select-none">
            I agree to the <button className="text-[#00b1c7] hover:underline">Terms of Service</button> and <button className="text-[#00b1c7] hover:underline">Privacy Policy</button>.
          </span>
        </div>

        <PrimaryButton text="Create Account" />
      </form>

      <p className="mt-8 text-[13px] text-center text-[var(--hc-text-secondary)] font-['Source_Sans_3',sans-serif]">
        Already have an account?{" "}
        <button 
          onClick={() => onNavigate("login")}
          className="text-[#00b1c7] font-semibold hover:underline decoration-2 underline-offset-4"
        >
          Sign in here
        </button>
      </p>
    </div>
  );
}

function ForgotPasswordView() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col h-full items-center justify-center text-center pb-6 md:pb-0">
        <div className="w-16 h-16 rounded-full bg-[#dcf5f7] dark:bg-[rgba(0,178,200,0.15)] flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-[#00b1c7]" />
        </div>
        <h2 className="text-[24px] font-bold font-['Sofia_Pro',sans-serif] text-[var(--hc-text)] mb-3">
          Check your email
        </h2>
        <p className="text-[14px] text-[var(--hc-text-secondary)] font-['Source_Sans_3',sans-serif] max-w-[280px]">
          We've sent password reset instructions to your email address.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full justify-center pb-6 md:pb-0">
      <div className="mb-6">
        <h2 className="text-[28px] font-bold font-['Sofia_Pro',sans-serif] text-[var(--hc-text)] tracking-tight mb-2">
          Reset password
        </h2>
        <p className="text-[14px] text-[var(--hc-text-secondary)] font-['Source_Sans_3',sans-serif] leading-relaxed">
          Enter the email address associated with your account and we'll send you a link to reset your password.
        </p>
      </div>
      
      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <InputField 
          label="Email address" 
          placeholder="Enter your email" 
          icon={<Mail size={18} />}
        />
        <div className="mt-6">
          <PrimaryButton text="Send reset link" />
        </div>
      </form>
    </div>
  );
}

/* ─── Main Auth Modal ────────────────────────── */

export function AuthModal({ open, onClose, initialView = "login" }: AuthModalProps) {
  const [view, setView] = useState<AuthView>(initialView);
  const { isDark } = useTheme();

  useEffect(() => {
    if (open) setView(initialView);
  }, [open, initialView]);

  const showBack = view !== "login" && view !== "signup";

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full h-full md:w-[850px] md:h-[560px] md:rounded-2xl flex flex-col md:flex-row overflow-hidden bg-[var(--hc-modal-bg)] md:border border-[var(--hc-border)] shadow-[var(--hc-shadow)] z-10"
            initial={{ scale: 0.96, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Left: Elegant Panel (Hidden on Mobile) */}
            <div className="hidden md:block relative w-[400px] shrink-0 h-full border-r border-[var(--hc-border)]">
              <ElegantTradingBackground />
            </div>

            {/* Right: Dynamic Form Area */}
            <div className="flex-1 flex flex-col relative w-full h-full bg-[var(--hc-modal-bg)]">
              
              {/* Top Controls */}
              <div className="absolute top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 flex justify-between items-center z-20">
                {showBack ? (
                  <button
                    onClick={() => setView("login")}
                    className="flex items-center gap-2 text-[13px] font-medium text-[var(--hc-text-secondary)] hover:text-[var(--hc-text)] transition-colors group px-2 py-1 -ml-2 rounded-lg hover:bg-[var(--hc-hover-bg)]"
                  >
                    <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                    Back to login
                  </button>
                ) : <div />}
                
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-[var(--hc-text-secondary)] hover:bg-[var(--hc-hover-bg)] hover:text-[var(--hc-text)] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Header (replaces the hidden left panel branding context) */}
              <div className="md:hidden pt-12 pb-2 px-6">
                <div className="mb-4 h-[18px]">
                  <img 
                    src={isDark ? logoLight : logoDark} 
                    alt="Cryptohopper" 
                    className="h-full w-auto object-contain"
                    style={isDark ? {} : { maxHeight: '18px' }}
                  />
                </div>
              </div>

              {/* Scrollable Form Content */}
              <div className="flex-1 overflow-y-auto px-6 md:px-12 pt-4 md:pt-12 pb-8 custom-scrollbar flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={view}
                    className="flex-1 flex flex-col w-full max-w-[380px] mx-auto"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {view === "login" && <LoginView onNavigate={setView} />}
                    {view === "signup" && <SignupView onNavigate={setView} />}
                    {view === "forgot-password" && <ForgotPasswordView />}
                    {/* Add other views gracefully if needed */}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}