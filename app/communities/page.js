"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

const defaultCommunities = [
  {
    name: "technology",
    title: "Technology",
    members: "12.4k",
    desc: "Discuss latest tech, AI, gadgets and software.",
    category: "Technology",
  },
  {
    name: "gaming",
    title: "Gaming",
    members: "8.7k",
    desc: "Share gaming news, clips, reviews and discussions.",
    category: "Gaming",
  },
  {
    name: "movies",
    title: "Movies",
    members: "5.2k",
    desc: "Talk about films, series and reviews.",
    category: "Movies",
  },
];

export default function Communities() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");
  const [communities, setCommunities] = useState(defaultCommunities);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("redditxCommunities")) || [];

    const formatted = saved.map((item) => ({
      name: item.slug,
      title: item.name,
      members: item.members || "1",
      desc: item.description,
      category: item.category || "General",
    }));

    setCommunities([...formatted, ...defaultCommunities]);
  }, []);

  const filteredCommunities = communities
    .filter((c) =>
      `${c.title} ${c.desc} ${c.category}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "az") return a.title.localeCompare(b.title);
      if (sort === "newest") return 0;
      return String(b.members).localeCompare(String(a.members));
    });

  return (
    <main style={page}>
      <Navbar />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .community-input::placeholder {
          color: #64748b;
        }
      `}</style>

      <section style={container}>
        <div style={statsGrid}>
          <Stat title="Total Communities" value={communities.length + "+"} color="#fb923c" />
          <Stat title="Posts Today" value="3.2k" color="#ec4899" />
          <Stat title="Active Users" value="18k" color="#a78bfa" />
        </div>

        <div style={heroBox}>
          <div>
            <p style={badge}>🌐 Explore RedditX</p>
            <h1 style={title}>Explore Communities</h1>
            <p style={sub}>
              Browse, search and join topic-based communities.
            </p>
          </div>

          <a href="/create-community" style={btn}>
            + Create Community
          </a>
        </div>

        <div style={tools}>
          <input
            className="community-input"
            style={searchInput}
            placeholder="Search communities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            style={select}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="popular">Sort: Popular</option>
            <option value="az">Sort: A - Z</option>
            <option value="newest">Sort: Newest</option>
          </select>
        </div>

        <div style={cardGrid}>
          {filteredCommunities.map((c) => (
            <a key={c.name} href={`/r/${c.name}`} style={card}>
              <div style={icon}>r/</div>

              <p style={category}>{c.category}</p>

              <h2 style={cardTitle}>r/{c.title}</h2>

              <p style={members}>{c.members} members</p>

              <p style={desc}>{c.desc}</p>

              <span style={joinPill}>Open Community →</span>
            </a>
          ))}
        </div>

        {filteredCommunities.length === 0 && (
          <div style={emptyBox}>
            <h2>No communities found</h2>
            <p>Try searching technology, gaming, movies or design.</p>
          </div>
        )}

        <h2 style={sectionTitle}>🔥 Trending Communities</h2>

        <div style={trendGrid}>
          <a href="/r/artificialintelligence" style={trendCard}>
            <p style={tag}>Trending #1</p>
            <h3 style={trendTitle}>r/artificialintelligence</h3>
            <p style={desc}>Discuss AI tools and machine learning.</p>
          </a>

          <a href="/r/webdesign" style={trendCard}>
            <p style={tag}>Trending #2</p>
            <h3 style={trendTitle}>r/webdesign</h3>
            <p style={desc}>UI inspiration and animation discussions.</p>
          </a>
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
  background:
    "radial-gradient(circle at top left, rgba(255,69,0,.2), transparent 35%), radial-gradient(circle at bottom right, rgba(139,92,246,.18), transparent 35%), #070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "40px 24px 90px",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 20,
  marginBottom: 36,
};

const stat = {
  padding: 24,
  borderRadius: 26,
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.12)",
  animation: "fadeIn .6s ease both",
};

const heroBox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 20,
  marginBottom: 28,
  flexWrap: "wrap",
  padding: 28,
  borderRadius: 30,
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.12)",
};

const badge = {
  display: "inline-block",
  padding: "8px 14px",
  borderRadius: 999,
  background: "rgba(249,115,22,.12)",
  color: "#fb923c",
  fontWeight: 800,
  marginBottom: 14,
};

const title = {
  fontSize: "clamp(42px,6vw,64px)",
  fontWeight: 900,
  margin: 0,
};

const sub = {
  color: "#94a3b8",
  marginTop: 10,
  fontSize: 18,
};

const btn = {
  padding: "14px 22px",
  borderRadius: 16,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: 900,
};

const tools = {
  display: "flex",
  gap: 14,
  flexWrap: "wrap",
  marginBottom: 28,
};

const searchInput = {
  flex: 1,
  minWidth: 240,
  padding: "15px 16px",
  borderRadius: 16,
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(255,255,255,.14)",
  color: "white",
  outline: "none",
  fontSize: 15,
};

const select = {
  padding: "15px 16px",
  borderRadius: 16,
  background: "#111827",
  color: "white",
  border: "1px solid rgba(255,255,255,.14)",
  outline: "none",
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
  boxShadow: "0 20px 60px rgba(236,72,153,.08)",
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

const category = {
  color: "#a78bfa",
  fontSize: 13,
  fontWeight: 800,
};

const cardTitle = {
  fontSize: 26,
  marginBottom: 8,
};

const members = {
  color: "#fb923c",
  fontSize: 14,
};

const desc = {
  color: "#94a3b8",
  marginTop: 12,
  lineHeight: 1.6,
};

const joinPill = {
  display: "inline-block",
  marginTop: 18,
  color: "#fb7185",
  fontWeight: 900,
};

const emptyBox = {
  marginTop: 24,
  padding: 30,
  borderRadius: 26,
  background: "rgba(255,255,255,.06)",
  color: "#94a3b8",
  textAlign: "center",
};

const sectionTitle = {
  fontSize: 34,
  marginTop: 55,
  marginBottom: 22,
};

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
  textDecoration: "none",
  color: "white",
};

const tag = {
  color: "#fb923c",
  fontSize: 14,
};

const trendTitle = {
  fontSize: 26,
  marginTop: 10,
};

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
