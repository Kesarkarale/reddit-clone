export default function AppLoader() {
  return (
    <div style={overlay}>
      <style>{`
        @keyframes spinGlow {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0% {
            opacity: .6;
            transform: scale(.96);
          }

          50% {
            opacity: 1;
            transform: scale(1);
          }

          100% {
            opacity: .6;
            transform: scale(.96);
          }
        }
      `}</style>

      <div style={loaderWrap}>
        <div style={ring}></div>

        <div style={logoBox}>
          RX
        </div>

        <h1 style={title}>RedditX</h1>

        <p style={text}>
          Loading modern discussions...
        </p>
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

const loaderWrap = {
  position: "relative",
  textAlign: "center",
};

const ring = {
  position: "absolute",
  inset: "-20px",
  borderRadius: "50%",
  border: "4px solid rgba(255,255,255,.08)",
  borderTop: "4px solid #f97316",
  animation: "spinGlow 1.2s linear infinite",
};

const logoBox = {
  width: 110,
  height: 110,
  borderRadius: 32,
  background: "linear-gradient(135deg,#f97316,#db2777,#8b5cf6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 38,
  fontWeight: "900",
  color: "white",
  animation: "pulse 2s ease-in-out infinite",
};

const title = {
  marginTop: 34,
  fontSize: 42,
  fontWeight: "900",
  background: "linear-gradient(90deg,#f97316,#ec4899,#8b5cf6)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const text = {
  color: "#94a3b8",
  marginTop: 10,
};
