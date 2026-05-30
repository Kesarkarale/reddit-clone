export default function AppLoader() {
  return (
    <div style={overlay}>
      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div style={loaderBox}>
        <div style={spinnerWrapper}>
          <div style={spinnerRing}></div>

          <div style={logo}>
            PP
          </div>
        </div>

        <h2 style={title}>
          PostPilot
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

const loaderBox = {
  textAlign: "center",
};

const spinnerWrapper = {
  position: "relative",
  width: 120,
  height: 120,
  margin: "0 auto 26px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const spinnerRing = {
  position: "absolute",
  inset: 0,
  borderRadius: "50%",
  border: "6px solid rgba(148,163,184,.25)",
  borderTop: "6px solid #f97316",
  animation: "spin 1s linear infinite",
  boxShadow: "0 0 60px rgba(249,115,22,.25)",
};

const logo = {
  width: 78,
  height: 78,
  borderRadius: "24px",
  background: "linear-gradient(135deg,#f97316,#db2777,#8b5cf6)",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 30,
  fontWeight: 900,
  zIndex: 2,
  boxShadow: "0 15px 35px rgba(219,39,119,.35)",
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
