 
export default function About() {
  return (
    <main style={page}>
 
      <section style={container}>
        <h1 style={title}>About RedditX</h1>
        <p style={sub}>
          RedditX is a modern Reddit-style social media MVP where users can
          create communities, publish posts, vote, comment, and explore
          discussions.
        </p>

        <div style={grid}>
          <Card title="Modern UI" text="Dark theme, gradients, glass cards and smooth animations." />
          <Card title="Community Focused" text="Users can browse communities and join discussions." />
          <Card title="MVP Ready" text="Built with Next.js routing, forms and local demo storage." />
        </div>
      </section>

     </main>
  );
}

function Card({ title, text }) {
  return (
    <div style={card}>
      <h2>{title}</h2>
      <p style={cardText}>{text}</p>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, rgba(249,115,22,.22), transparent 35%), #070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "90px 24px",
};

const title = {
  fontSize: "clamp(48px,7vw,80px)",
  fontWeight: 900,
  background: "linear-gradient(90deg,#fb923c,#ec4899,#8b5cf6)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const sub = {
  color: "#94a3b8",
  fontSize: 20,
  lineHeight: 1.8,
  maxWidth: 760,
  marginTop: 20,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: 22,
  marginTop: 50,
};

const card = {
  padding: 28,
  borderRadius: 28,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
};

const cardText = {
  color: "#94a3b8",
  marginTop: 12,
  lineHeight: 1.7,
};
