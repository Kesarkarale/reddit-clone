export default function AppLoader() {
  return (
    <div style={overlay}>
      <div style={loaderBox}>
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

const spinner = {
  width: 90,
  height: 90,
  borderRadius: "50%",
  border: "6px solid rgba(255,255,255,.1)",
  borderTop: "6px solid #f97316",
  animation: "spin 1s linear infinite",
  margin: "0 auto 24px",
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
