"use client";

export default function ErrorPage({ reset }) {
  return (
    <main style={page}>
      <div style={card}>
        <h1 style={title}>Something went wrong</h1>
        <p style={text}>PostPilot could not load this page properly.</p>

        <button onClick={() => reset()} style={btn}>
          Try Again
        </button>

        <a href="/" style={link}>
          Back to Home
        </a>
      </div>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#070b18",
  color: "white",
  display: "grid",
  placeItems: "center",
  fontFamily: "Arial, sans-serif",
};

const card = {
  width: "90%",
  maxWidth: 520,
  padding: 38,
  borderRadius: 30,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
  textAlign: "center",
};

const title = {
  fontSize: 42,
  fontWeight: 900,
};

const text = {
  color: "#94a3b8",
  marginTop: 12,
};

const btn = {
  marginTop: 24,
  padding: "14px 22px",
  borderRadius: 16,
  border: "none",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  fontWeight: 900,
  cursor: "pointer",
};

const link = {
  display: "block",
  marginTop: 16,
  color: "#fb923c",
  textDecoration: "none",
  fontWeight: 900,
};
