export default function Loading() {
  return (
    <main style={page}>
      <div style={glowOne}></div>
      <div style={glowTwo}></div>

      <div style={loaderWrap}>
        <div style={logo}>PostPilot</div>

        <div style={spinner}></div>

        <p style={text}>Loading amazing discussions...</p>
      </div>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#070b18",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  fontFamily: "Arial, sans-serif",
};

const loaderWrap = {
  position: "relative",
  zIndex: 5,
  textAlign: "center",
};

const logo = {
  fontSize: "56px",
  fontWeight: "900",
  background: "linear-gradient(90deg,#f97316,#ec4899,#8b5cf6)",
  WebkitBackgroundClip: "text",
  color: "transparent",
  marginBottom: "28px",
};

const spinner = {
  width: "70px",
  height: "70px",
  margin: "0 auto",
  borderRadius: "50%",
  border: "6px solid rgba(255,255,255,.12)",
  borderTop: "6px solid #f97316",
  animation: "spin 1s linear infinite",
};

const text = {
  color: "#94a3b8",
  marginTop: "24px",
  fontSize: "18px",
};

const glowOne = {
  position: "absolute",
  width: "420px",
  height: "420px",
  background: "#f97316",
  filter: "blur(140px)",
  opacity: 0.18,
  top: "-120px",
  left: "-120px",
};

const glowTwo = {
  position: "absolute",
  width: "420px",
  height: "420px",
  background: "#8b5cf6",
  filter: "blur(140px)",
  opacity: 0.18,
  bottom: "-120px",
  right: "-120px",
};
