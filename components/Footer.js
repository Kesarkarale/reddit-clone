export default function Footer() {
  return (
    <footer style={footer}>
      <div style={glow}></div>

      <div style={content}>
        <div style={brandBox}>
          <h2 style={logo}>RedditX</h2>

          <p style={text}>
            A modern Reddit-style social platform for communities, posts,
            votes and discussions.
          </p>

          <div style={socials}>
            <a href="/communities" style={social}>🌐</a>
            <a href="/search" style={social}>🔍</a>
            <a href="/notifications" style={social}>🔔</a>
            <a href="/profile" style={social}>👤</a>
          </div>
        </div>

        <div style={linksGrid}>
          <div>
            <h3 style={heading}>Platform</h3>
            <a href="/" style={link}>Home</a>
            <a href="/communities" style={link}>Communities</a>
            <a href="/create-post" style={link}>Create Post</a>
            <a href="/search" style={link}>Search</a>
          </div>

          <div>
            <h3 style={heading}>User</h3>
            <a href="/profile" style={link}>Profile</a>
            <a href="/saved" style={link}>Saved Posts</a>
            <a href="/notifications" style={link}>Notifications</a>
            <a href="/settings" style={link}>Settings</a>
          </div>

          <div>
            <h3 style={heading}>Project</h3>
            <a href="/about" style={link}>About</a>
            <a href="/admin" style={link}>Admin</a>
            <a href="/login" style={link}>Login</a>
            <a href="/register" style={link}>Register</a>
          </div>
        </div>
      </div>

      <div style={bottom}>
        <p style={copy}>© 2026 RedditX. Built as a modern social media MVP.</p>
        <p style={copy}>Next.js • React • JavaScript • Vercel</p>
      </div>
    </footer>
  );
}

const footer = {
  position: "relative",
  overflow: "hidden",
  marginTop: 70,
  padding: "50px 24px 24px",
  background: "rgba(7,11,24,.95)",
  borderTop: "1px solid rgba(255,255,255,.1)",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const glow = {
  position: "absolute",
  width: 420,
  height: 420,
  right: "-120px",
  bottom: "-180px",
  background: "#db2777",
  filter: "blur(150px)",
  opacity: 0.16,
};

const content = {
  position: "relative",
  zIndex: 2,
  maxWidth: 1180,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1.2fr 2fr",
  gap: 40,
};

const brandBox = {
  maxWidth: 420,
};

const logo = {
  fontSize: 36,
  fontWeight: 900,
  margin: 0,
  background: "linear-gradient(90deg,#fb923c,#ec4899,#8b5cf6)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const text = {
  color: "#94a3b8",
  lineHeight: 1.7,
  marginTop: 14,
};

const socials = {
  display: "flex",
  gap: 12,
  marginTop: 22,
};

const social = {
  width: 44,
  height: 44,
  borderRadius: 15,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  fontSize: 20,
};

const linksGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
  gap: 24,
};

const heading = {
  fontSize: 16,
  color: "white",
  marginBottom: 14,
};

const link = {
  display: "block",
  color: "#94a3b8",
  textDecoration: "none",
  marginBottom: 11,
  fontWeight: 700,
};

const bottom = {
  position: "relative",
  zIndex: 2,
  maxWidth: 1180,
  margin: "36px auto 0",
  paddingTop: 20,
  borderTop: "1px solid rgba(255,255,255,.1)",
  display: "flex",
  justifyContent: "space-between",
  gap: 14,
  flexWrap: "wrap",
};

const copy = {
  color: "#64748b",
  margin: 0,
  fontSize: 14,
};
