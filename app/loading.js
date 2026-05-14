export default function Loading() {
  return (
    <main style={page}>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div style={loader}></div>
      <h1 style={title}>Loading RedditX...</h1>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#070b18",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Arial, sans-serif",
};

const loader = {
  width: 80,
  height: 80,
  borderRadius: "50%",
  border: "8px solid rgba(255,255,255,.12)",
  borderTop: "8px solid #f97316",
  animation: "spin 1s linear infinite",
};

const title = {
  marginTop: 22,
  fontSize: 24,
  fontWeight: 900,
};
