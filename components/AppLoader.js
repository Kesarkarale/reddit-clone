export default function AppLoader() {
  return (
    <div style={overlay}>
      <style>{`
        @keyframes spinGlow {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%,100% { transform: scale(.96); opacity:.85; }
          50% { transform: scale(1); opacity:1; }
        }
      `}</style>

      <div style={box}>
        <div style={logoWrap}>
          <div style={ring}></div>
          <div style={logoBox}>RX</div>
        </div>

        <h1 style={title}>RedditX</h1>
        <p style={text}>Loading modern discussions...</p>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "#070b18",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 99999,
};

const box = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const logoWrap = {
  width: 150,
  height: 150,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ring = {
  position: "absolute",
  inset: 0,
  borderRadius: "50%",
  border: "5px solid rgba(255,255,255,.08)",
  borderTop: "5px solid #f97316",
  animation: "spinGlow 1s linear infinite",
};

const logoBox = {
  width: 92,
  height: 92,
  borderRadius: 28,
  background: "linear-gradient(135deg,#f97316,#db2777,#8b5cf6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 34,
  fontWeight: "900",
  color: "white",
  animation: "pulse 1.8s ease-in-out infinite",
  zIndex: 2,
};

const title = {
  marginTop: 26,
  fontSize: 44,
  fontWeight: "900",
  background: "linear-gradient(90deg,#f97316,#ec4899,#8b5cf6)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const text = {
  color: "#94a3b8",
  marginTop: 8,
};
