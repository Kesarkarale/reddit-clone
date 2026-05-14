"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("redditxPosts")) || []);
    setSavedPosts(JSON.parse(localStorage.getItem("redditxSavedPosts")) || []);
    setCommunities(JSON.parse(localStorage.getItem("redditxCommunities")) || []);
    setUser(JSON.parse(localStorage.getItem("redditxUser")));
  }, []);

  return (
    <main style={page}>
      <Navbar />

      <section style={container}>
        <h1 style={title}>Admin Dashboard</h1>
        <p style={sub}>Monitor RedditX platform activity.</p>

        <div style={grid}>
          <Stat title="Users" value={user ? 1 : 0} icon="👤" />
          <Stat title="Posts" value={posts.length} icon="📝" />
          <Stat title="Communities" value={communities.length + 3} icon="🌐" />
          <Stat title="Saved Posts" value={savedPosts.length} icon="🔖" />
        </div>

        <div style={panel}>
          <h2 style={sectionTitle}>Recent Posts</h2>

          {posts.length === 0 ? (
            <p style={empty}>No posts created yet.</p>
          ) : (
            posts.slice(0, 5).map((post) => (
              <a key={post.id} href={`/post/${post.id}`} style={item}>
                <div>
                  <h3>{post.title}</h3>
                  <p style={itemText}>r/{post.community} • by u/{post.author}</p>
                </div>
                <span style={badge}>Open</span>
              </a>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

function Stat({ title, value, icon }) {
  return (
    <div style={stat}>
      <div style={statIcon}>{icon}</div>
      <h2 style={statValue}>{value}</h2>
      <p style={statText}>{title}</p>
    </div>
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
  maxWidth: 1150,
  margin: "0 auto",
  padding: "55px 24px",
};

const title = {
  fontSize: 56,
  fontWeight: 900,
};

const sub = {
  color: "#94a3b8",
  marginTop: 10,
  marginBottom: 34,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: 20,
};

const stat = {
  padding: 26,
  borderRadius: 28,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
};

const statIcon = {
  fontSize: 34,
};

const statValue = {
  fontSize: 44,
  marginTop: 14,
  color: "#fb923c",
};

const statText = {
  color: "#94a3b8",
  marginTop: 6,
};

const panel = {
  marginTop: 34,
  padding: 30,
  borderRadius: 30,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
};

const sectionTitle = {
  fontSize: 30,
  marginBottom: 18,
};

const empty = {
  color: "#94a3b8",
};

const item = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 18,
  padding: 20,
  borderRadius: 22,
  background: "rgba(255,255,255,.06)",
  color: "white",
  textDecoration: "none",
  marginBottom: 14,
};

const itemText = {
  color: "#94a3b8",
  marginTop: 6,
};

const badge = {
  padding: "8px 14px",
  borderRadius: 14,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  fontWeight: 900,
};
