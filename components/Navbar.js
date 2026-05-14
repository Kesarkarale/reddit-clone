export default function Navbar() {
  return (
    <nav style={nav}>
      <a href="/" style={logo}>RedditX</a>

      <div style={links}>
        <a href="/" style={link}>Home</a>
        <a href="/communities" style={link}>Communities</a>
        <a href="/create-post" style={link}>Create Post</a>
        <a href="/login" style={outlineBtn}>Login</a>
        <a href="/register" style={primaryBtn}>Register</a>
        <a href="/about" style={link}>About</a>
<a href="/profile" style={link}>Profile</a>
      </div>
    </nav>
  );
}

const nav = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 40px",
  background: "rgba(7,11,24,0.86)",
  backdropFilter: "blur(18px)",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
};

const logo = {
  fontSize: "30px",
  fontWeight: "900",
  background: "linear-gradient(90deg,#fb923c,#ec4899)",
  WebkitBackgroundClip: "text",
  color: "transparent",
  textDecoration: "none",
};

const links = {
  display: "flex",
  gap: "18px",
  alignItems: "center",
  flexWrap: "wrap",
};

const link = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontWeight: "600",
};

const outlineBtn = {
  padding: "10px 18px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  textDecoration: "none",
  fontWeight: "700",
};

const primaryBtn = {
  padding: "10px 18px",
  borderRadius: "14px",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: "800",
};
