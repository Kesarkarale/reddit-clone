"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

const defaultPosts = [
  {
    id: 1,
    title: "Future of AI in Web Development",
    community: "technology",
    content: "AI tools are changing how developers build modern applications.",
  },
  {
    id: 2,
    title: "Best UI Trends in 2026",
    community: "webdesign",
    content: "Glassmorphism, gradients and animations are trending.",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState(defaultPosts);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("redditxPosts")) || [];
    setPosts([...savedPosts, ...defaultPosts]);
  }, []);

  const results = posts.filter((post) =>
    `${post.title} ${post.community} ${post.content}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <main style={page}>
      <Navbar />

      <section style={container}>
        <h1 style={title}>Search RedditX</h1>
        <p style={sub}>Find posts, communities and discussions.</p>

        <input
          style={search}
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div style={list}>
          {results.map((post) => (
            <a key={post.id} href={`/post/${post.id}`} style={card}>
              <p style={meta}>r/{post.community}</p>
              <h2>{post.title}</h2>
              <p style={text}>{post.content}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, rgba(249,115,22,.18), transparent 35%), #070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: 900,
  margin: "0 auto",
  padding: "60px 24px",
};

const title = {
  fontSize: 56,
  fontWeight: 900,
};

const sub = {
  color: "#94a3b8",
  marginTop: 10,
  marginBottom: 28,
};

const search = {
  width: "100%",
  padding: 18,
  borderRadius: 18,
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(255,255,255,.14)",
  color: "white",
  outline: "none",
  fontSize: 16,
  marginBottom: 28,
};

const list = {
  display: "grid",
  gap: 18,
};

const card = {
  display: "block",
  padding: 24,
  borderRadius: 26,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
  color: "white",
  textDecoration: "none",
};

const meta = {
  color: "#fb923c",
  fontWeight: 900,
};

const text = {
  color: "#94a3b8",
  marginTop: 10,
};
