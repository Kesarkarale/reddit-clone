export default function AppLoader() {
  return (
    <div style={overlay}>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes pulseLogo {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: .8; }
        }
      `}</style>

      <div style={loaderBox}>
        <div style={logoCircle}>
          R
        </div>

        <div style={spinner}></div>

        <h2 style={title}>RedditX</h2>

        <p style={text}>
          Loading amazing communities...
        </p>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  zIndex: 99999,
  background: "var(--page-bg)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const loaderBox = {
  textAlign: "center",
};

const logoCircle = {
  width: 96,
  height: 96,
  margin: "0 auto 22px",
  borderRadius: "28px",
  background: "linear-gradient(135deg,#f97316,#db2777,#8b5cf6)",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 44,
  fontWeight: 900,
  boxShadow: "0 25px 70px rgba(219,39,119,.35)",
  animation: "pulseLogo 1.4s ease-in-out infinite",
};

const spinner = {
  width: 70,
  height: 70,
  borderRadius: "50%",
  border: "5px solid rgba(148,163,184,.25)",
  borderTop: "5px solid #f97316",
  animation: "spin 1s linear infinite",
  margin: "0 auto 24px",
};

const title = {
  fontSize: 42,
  margin: 0,
  fontWeight: 900,
  background: "linear-gradient(90deg,#fb923c,#ec4899,#8b5cf6)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const text = {
  color: "var(--text-muted)",
  marginTop: 12,
  fontSize: 16,
};
