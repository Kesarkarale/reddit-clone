import Navbar from "../../components/Navbar";

const communities = [
  { name: "technology", title: "Technology", members: "12.4k", desc: "Discuss latest tech, AI, gadgets and software." },
  { name: "gaming", title: "Gaming", members: "8.7k", desc: "Share gaming news, clips, reviews and discussions." },
  { name: "movies", title: "Movies", members: "5.2k", desc: "Talk about films, series and reviews." },
];

export default function Communities() {
  return (
    <main style={page}>
      <Navbar />

      <section style={container}>
        <div style={statsGrid}>
          <Stat title="Total Communities" value="120+" color="#fb923c" />
          <Stat title="Posts Today" value="3.2k" color="#ec4899" />
          <Stat title="Active Users" value="18k" color="#a78bfa" />
        </div>

        <div style={header}>
          <div>
            <h1 style={title}>Explore Communities</h1>
            <p style={sub}>Browse and join topic-based communities.</p>
          </div>

          <a href="/create-community" style={btn}>+ Create Community</a>
        </div>

        <div style={cardGrid}>
          {communities.map((c) => (
            <a key={c.name} href={`/r/${c.name}`} style={card}>
              <div style={icon}>r/</div>
              <h2 style={cardTitle}>r/{c.title}</h2>
              <p style={members}>{c.members} members</p>
              <p style={desc}>{c.desc}</p>
            </a>
          ))}
        </div>

        <h2 style={sectionTitle}>🔥 Trending Communities</h2>

        <div style={trendGrid}>
          <div style={trendCard}>
            <p style={tag}>Trending #1</p>
            <h3 style={trendTitle}>r/artificialintelligence</h3>
            <p style={desc}>Discuss AI tools and machine learning.</p>
          </div>

          <div style={trendCard}>
            <p style={tag}>Trending #2</p>
            <h3 style={trendTitle}>r/webdesign</h3>
            <p style={desc}>UI inspiration and animation discussions.</p>
          </div>
        </div>
      </section>

      <a href="/create-post" style={floating}>+</a>
    </main>
  );
}

function Stat({ title, value, color }) {
  return (
    <div style={stat}>
      <p style={{ color: "#94a3b8" }}>{title}</p>
      <h2 style={{ fontSize: 42, color, marginTop: 8 }}>{value}</h2>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top left, rgba(255,69,0,.2), transparent 35%), #070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const container = { maxWidth: 1200, margin: "0 auto", padding: "40px 24px" };

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 20,
  marginBottom: 40,
};

const stat = {
  padding: 24,
  borderRadius: 26,
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.12)",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 20,
  marginBottom: 35,
  flexWrap: "wrap",
};

const title = { fontSize: 48, fontWeight: 900 };
const sub = { color: "#94a3b8", marginTop: 10, fontSize: 18 };

const btn = {
  padding: "14px 22px",
  borderRadius: 16,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: 800,
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 24,
};

const card = {
  padding: 28,
  borderRadius: 28,
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.12)",
  textDecoration: "none",
  color: "white",
};

const icon = {
  width: 60,
  height: 60,
  borderRadius: 18,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 24,
  fontWeight: 900,
  marginBottom: 18,
};

const cardTitle = { fontSize: 26, marginBottom: 8 };
const members = { color: "#fb923c", fontSize: 14 };
const desc = { color: "#94a3b8", marginTop: 12, lineHeight: 1.6 };

const sectionTitle = { fontSize: 34, marginTop: 55, marginBottom: 22 };

const trendGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 22,
};

const trendCard = {
  padding: 28,
  borderRadius: 28,
  background: "linear-gradient(135deg,rgba(249,115,22,.14),rgba(219,39,119,.12))",
  border: "1px solid rgba(255,255,255,.12)",
};

const tag = { color: "#fb923c", fontSize: 14 };
const trendTitle = { fontSize: 26, marginTop: 10 };

const floating = {
  position: "fixed",
  right: 30,
  bottom: 30,
  width: 64,
  height: 64,
  borderRadius: "50%",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  fontSize: 36,
  fontWeight: 900,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
