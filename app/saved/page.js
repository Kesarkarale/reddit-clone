"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function SavedPosts() {
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("redditxSavedPosts")) || [];
    setSavedPosts(data);
  }, []);

  return (
    <main style={page}>
      <Navbar />

      <section style={container}>
        <h1 style={title}>Saved Posts</h1>
        <p style={sub}>Your bookmarked RedditX discussions.</p>

        {savedPosts.length === 0 ? (
          <div style={empty}>
            <h2>No saved posts yet</h2>
            <p>Save posts from post detail page to see them here.</p>
            <a href="/communities" style={btn}>Explore Communities</a>
          </div>
        ) : (
          <div style={grid}>
            {savedPosts.map((post) => (
              <a key={post.id} href={`/post/${post.id}`} style={card}>
                <p style={meta}>r/{post.community || "technology"}</p>
                <h2>{post.title}</h2>
                <p style={text}>{post.content}</p>
              </a>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top left, rgba(249,115,22,.2), transparent 35%), #070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: 1000,
  margin: "0 auto",
  padding: "60px 24px",
};

const title = {
  fontSize: 54,
  fontWeight: 900,
};

const sub = {
  color: "#94a3b8",
  marginTop: 10,
  marginBottom: 30,
};

const empty = {
  padding: 40,
  borderRadius: 30,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
  textAlign: "center",
};

const btn = {
  display: "inline-block",
  marginTop: 22,
  padding: "14px 22px",
  borderRadius: 16,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: 900,
};

const grid = {
  display: "grid",
  gap: 18,
};

const card = {
  padding: 26,
  borderRadius: 26,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
  color: "white",
  textDecoration: "none",
};

const meta = {
  color: "#fb923c",
  fontWeight: 800,
};

const text = {
  color: "#94a3b8",
  marginTop: 10,
};
