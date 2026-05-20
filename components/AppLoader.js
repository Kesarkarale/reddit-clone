export default function AppLoader() {
  return (
    <div style={overlay}>
      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.08);
          }
        }
      `}</style>

      <div style={loaderWrapper}>
        <div style={spinner}>
          <div style={logo}>
            RX
          </div>
        </div>

        <h2 style={title}>
          RedditX
        </h2>

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

const loaderWrapper = {
  textAlign: "center",
};

const spinner = {
  width: 120,
  height: 120,
  borderRadius: "50%",
  border: "6px solid rgba(255,255,255,.12)",
  borderTop: "6px solid #f97316",
  animation: "spin 1s linear infinite",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 26px",
  boxShadow:
    "0 0 60px rgba(249,115,22,.25)",
};

const logo = {
  width: 78,
  height: 78,
  borderRadius: "24px",
  background:
    "linear-gradient(135deg,#f97316,#db2777,#8b5cf6)",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 30,
  fontWeight: 900,
  boxShadow:
    "0 15px 35px rgba(219,39,119,.35)",
};
const title = {
  fontSize: 42,
  margin: 0,
  fontWeight: 900,
  background:
    "linear-gradient(90deg,#fb923c,#ec4899,#8b5cf6)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const text = {
  color: "var(--text-muted)",
  marginTop: 12,
  fontSize: 16,
};
