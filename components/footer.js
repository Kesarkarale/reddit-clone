export default function Footer() {
  return (
    <footer style={footer}>
      <div>
        <h2 style={logo}>RedditX</h2>
        <p style={text}>Modern Reddit Clone MVP for community discussions.</p>
      </div>

      <div style={links}>
        <a href="/" style={link}>Home</a>
        <a href="/about" style={link}>About</a>
        <a href="/communities" style={link}>Communities</a>
        <a href="/profile" style={link}>Profile</a>
      </div>
    </footer>
  );
}

const footer = {
  padding: "30px 40px",
  borderTop: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(7,11,24,0.9)",
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  flexWrap: "wrap",
};

const logo = {
  background: "linear-gradient(90deg,#fb923c,#ec4899)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const text = { color: "#94a3b8", marginTop: 8 };

const links = { display: "flex", gap: 18, flexWrap: "wrap" };

const link = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontWeight: 700,
};
