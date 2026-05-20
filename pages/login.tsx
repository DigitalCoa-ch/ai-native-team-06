import React, { useState, FormEvent } from "react";
import Head from "next/head";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await new Promise((r) => setTimeout(r, 800));
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Sign In — AI Task Inbox</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={styles.root}>
        {/* Left column — branding */}
        <div style={styles.left}>
          <div style={styles.logo}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a10 10 0 1 0 10 10" />
              <path d="M12 6v6l4 2" />
              <circle cx="18" cy="6" r="3" fill="white" stroke="none" />
            </svg>
            <span style={styles.logoText}>Retaska</span>
          </div>

          <div style={styles.leftContent}>
            <h2 style={styles.headline}>Turn messages into structured tasks.</h2>
            <p style={styles.subline}>
              Send voice or text to your Telegram bot. Our AI extracts the title, priority,
              tags, and time estimate — your task lands on the kanban board instantly.
            </p>

            <div style={styles.features}>
              <Feature icon={<MicIcon />} title="Voice & text input" desc="Whisper transcribes, GPT-4o structures" />
              <Feature icon={<SparkIcon />} title="AI structured output" desc="Title, priority, tags, time estimate" />
              <Feature icon={<ZapIcon />} title="Real-time kanban" desc="Drag & drop, team analytics" />
            </div>
          </div>
        </div>

        {/* Right column — form */}
        <div style={styles.right}>
          <div style={styles.card}>
            {/* Mobile logo */}
            <div style={styles.mobileLogoWrap}>
              <div style={styles.mobileLogoIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 1 0 10 10" />
                  <path d="M12 6v6l4 2" />
                  <circle cx="18" cy="6" r="3" />
                </svg>
              </div>
              <span style={styles.mobileLogoText}>AI Task Inbox</span>
            </div>

            <div style={styles.formHeader}>
              <h1 style={styles.title}>Welcome back</h1>
              <p style={styles.subtitle}>Enter your email to sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.field}>
                <label htmlFor="email" style={styles.label}>Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                  autoComplete="email"
                  style={styles.input}
                  onFocus={(e) => (e.target.style.borderColor = "#18181b")}
                  onBlur={(e) => (e.target.style.borderColor = "#e4e4e7")}
                />
              </div>

              <div style={styles.field}>
                <label htmlFor="password" style={styles.label}>Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  required
                  autoComplete="current-password"
                  style={styles.input}
                  onFocus={(e) => (e.target.style.borderColor = "#18181b")}
                  onBlur={(e) => (e.target.style.borderColor = "#e4e4e7")}
                />
              </div>

              {error && <p style={styles.error}>{error}</p>}

              <button type="submit" disabled={loading} style={loading ? { ...styles.button, ...styles.buttonDisabled } : styles.button}>
                {loading ? (
                  <span style={styles.spinner} />
                ) : null}
                {loading ? "Signing in…" : "Sign in"}
              </button>
            </form>

            <p style={styles.footerText}>
              Don&apos;t have an account?{" "}
              <a href="/register" style={styles.link}>Sign up</a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 1023px) {
          .left-col { display: none !important; }
          .mobile-logo { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div style={styles.feature}>
      <div style={styles.featureIcon}>{icon}</div>
      <div>
        <p style={styles.featureTitle}>{title}</p>
        <p style={styles.featureDesc}>{desc}</p>
      </div>
    </div>
  );
}

function MicIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
      <path d="M5 3l.5 1.5L7 5l-1.5.5L5 7l-.5-1.5L3 5l1.5-.5z" />
      <path d="M19 15l.5 1.5L21 17l-1.5.5L19 19l-.5-1.5L17 17l1.5-.5z" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

const styles: Record<string, React.CSSProperties> = {
  root: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#fff",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    flex: "0 0 50%",
    backgroundColor: "#18181b",
    color: "#fff",
    padding: "40px",
    position: "relative",
    overflow: "hidden",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    zIndex: 10,
    position: "relative",
    fontSize: "15px",
    fontWeight: 600,
    letterSpacing: "-0.01em",
  },
  logoText: { color: "#fff" },
  leftContent: {
    marginTop: "auto",
    position: "relative",
    zIndex: 10,
  },
  headline: {
    fontSize: "28px",
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "-0.02em",
    marginBottom: "12px",
  },
  subline: {
    fontSize: "14px",
    color: "#a1a1aa",
    lineHeight: 1.6,
    marginBottom: "32px",
  },
  features: { display: "flex", flexDirection: "column", gap: "16px" },
  feature: { display: "flex", alignItems: "flex-start", gap: "12px" },
  featureIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    height: "28px",
    borderRadius: "6px",
    border: "1px solid rgba(255,255,255,0.12)",
    backgroundColor: "rgba(255,255,255,0.06)",
    flexShrink: 0,
  },
  featureTitle: { fontSize: "13px", fontWeight: 500, marginBottom: "2px" },
  featureDesc: { fontSize: "12px", color: "#71717a" },
  right: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 16px",
    backgroundColor: "#fff",
  },
  card: {
    width: "100%",
    maxWidth: "360px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  mobileLogoWrap: {
    display: "none",
    alignItems: "center",
    gap: "8px",
  },
  mobileLogoIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    border: "1px solid #e4e4e7",
    backgroundColor: "#fff",
  },
  mobileLogoText: { fontSize: "15px", fontWeight: 600 },
  formHeader: { textAlign: "center" },
  title: { fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em", color: "#09090b", marginBottom: "6px" },
  subtitle: { fontSize: "13px", color: "#71717a" },
  form: { display: "flex", flexDirection: "column", gap: "16px" },
  field: { display: "flex", flexDirection: "column", gap: "6px" },
  label: { fontSize: "13px", fontWeight: 500, color: "#09090b" },
  input: {
    width: "100%",
    height: "38px",
    padding: "0 12px",
    borderRadius: "8px",
    border: "1px solid #e4e4e7",
    fontSize: "14px",
    color: "#09090b",
    backgroundColor: "#fff",
    outline: "none",
    transition: "border-color 0.15s",
  },
  error: { fontSize: "13px", color: "#ef4444", textAlign: "center" },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: "100%",
    height: "38px",
    borderRadius: "8px",
    backgroundColor: "#18181b",
    color: "#fff",
    fontSize: "14px",
    fontWeight: 500,
    border: "none",
    cursor: "pointer",
    transition: "opacity 0.15s",
  },
  buttonDisabled: { opacity: 0.6, cursor: "not-allowed" },
  spinner: {
    width: "14px",
    height: "14px",
    border: "2px solid rgba(255,255,255,0.3)",
    borderTopColor: "#fff",
    borderRadius: "50%",
    animation: "spin 0.7s linear infinite",
    display: "inline-block",
  },
  footerText: { textAlign: "center", fontSize: "13px", color: "#71717a" },
  link: { color: "#09090b", textDecoration: "underline", textUnderlineOffset: "3px" },
};
