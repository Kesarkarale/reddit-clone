"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("redditxUser"));
    const savedPosts = JSON.parse(localStorage.getItem("redditxPosts")) || [];

    setUser(savedUser);
    setPosts(savedPosts);
  }, []);

  return (
    <main style={page}>
      <Navbar />

      <section style={container}>
        <div style={profileCard}>
          <div style={avatar}>
            {user?.username ? user.username.charAt(0).toUpperCase() : "U"}
          </div>

          <h1 style={title}>{user?.username || "Guest User"}</h1>
          <p style={sub}>{user?.email || "Please login/register first"}</p>

          <div style={statsGrid}>
            <Stat title="Posts" value={posts.length} />
            <Stat title="Communities" value="3" />
            <Stat title="Karma" value="248" />
          </div>

          <a href="/create-post" style={btn}>
            + Create New Post
          </a>
        </div>

        <div style={activityCard}>
          <h2 style={sectionTitle}>Recent Activity</h2>

          {posts.length === 0 ? (
            <p style={empty}>No posts yet. Create your first post.</p>
          ) : (
            posts.map((post) => (
              <a key={post.id} href={`/post/${post.id}`} style={postItem}>
                <h3>{post.title}</h3>
                <p>Posted in r/{post.community}</p>
              </a>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

function Stat({ title, value }) {
  return (
    <div style={stat}>
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, rgba(255,115,22,.22), transparent 35%), radial-gradient(circle at bottom right, rgba(139,92,246,.22), transparent 35%), #070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: "1050px",
  margin: "0 auto",
  padding: "50px 24px",
  display: "grid",
  gap: "24px",
};

const profileCard = {
  textAlign: "center",
  padding: "42px",
  borderRadius: "34px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
};

const avatar = {
  width: "100px",
  height: "100px",
  borderRadius: "30px",
  margin: "0 auto 20px",
  background: "linear-gradient(135deg,#f97316,#db2777)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "44px",
  fontWeight: "900",
};

const title = {
  fontSize: "42px",
  fontWeight: "900",
};

const sub = {
  color: "#94a3b8",
  marginTop: "8px",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
  gap: "18px",
  marginTop: "32px",
};

const stat = {
  padding: "22px",
  borderRadius: "24px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const btn = {
  display: "inline-block",
  marginTop: "30px",
  padding: "15px 24px",
  borderRadius: "18px",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: "900",
};

const activityCard = {
  padding: "30px",
  borderRadius: "30px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
};

const sectionTitle = {
  fontSize: "30px",
  marginBottom: "20px",
};

const empty = {
  color: "#94a3b8",
};

const postItem = {
  display: "block",
  padding: "20px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "white",
  textDecoration: "none",
  marginBottom: "14px",
};
