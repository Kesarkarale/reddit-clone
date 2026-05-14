import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <main style={page}>
      <Navbar />

      <section style={box}>
        <h1 style={title}>404</h1>
        <h2 style={sub}>Page Not Found</h2>
        <p style={text}>The page you are looking for does not exist.</p>

        <a href="/" style={btn}>
          Back to Home
        </a>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const box = {
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 24,
};

const title = {
  fontSize: 110,
  fontWeight: 900,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const sub = { fontSize: 36 };
const text = { color: "#94a3b8", marginTop: 12 };

const btn = {
  marginTop: 28,
  padding: "14px 24px",
  borderRadius: 16,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: 900,
};

