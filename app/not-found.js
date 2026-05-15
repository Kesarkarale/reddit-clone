import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <main style={page}>
      <Navbar />

      <section style={container}>
        <div style={card}>
          <div style={emoji}>🚫</div>

          <h1 style={title}>404</h1>

          <h2 style={subtitle}>Page Not Found</h2>

          <p style={text}>
            The page you are looking for does not exist or may have been moved.
          </p>

          <div style={actions}>
            <a href="/" style={primaryBtn}>
              Back Home
            </a>

            <a href="/communities" style={secondaryBtn}>
              Explore Communities
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, rgba(249,115,22,.18), transparent 35%), radial-gradient(circle at bottom right, rgba(139,92,246,.18), transparent 35%), #070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const container = {
  minHeight: "85vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
};

const card = {
  width: "100%",
  maxWidth: "700px",
  padding: "50px",
  borderRadius: "34px",
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
  textAlign: "center",
  backdropFilter: "blur(20px)",
};

const emoji = {
  fontSize: "70px",
  marginBottom: "10px",
};

const title = {
  fontSize: "120px",
  fontWeight: "900",
  margin: 0,
  background: "linear-gradient(90deg,#f97316,#db2777,#8b5cf6)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const subtitle = {
  fontSize: "42px",
  marginTop: "10px",
};

const text = {
  color: "#94a3b8",
  fontSize: "18px",
  lineHeight: "1.8",
  marginTop: "16px",
};

const actions = {
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "30px",
};

const primaryBtn = {
  padding: "15px 26px",
  borderRadius: "18px",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: "900",
};

const secondaryBtn = {
  padding: "15px 26px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,.14)",
  color: "white",
  textDecoration: "none",
  fontWeight: "900",
};
