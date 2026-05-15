"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function SavedPosts() {
  const [savedPosts, setSavedPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("redditxSavedPosts")) || [];
    setSavedPosts(data);
  }, []);

  function removeSaved(id) {
    const updated = savedPosts.filter((post) => String(post.id) !== String(id));
    setSavedPosts(updated);
    localStorage.setItem("redditxSavedPosts", JSON.stringify(updated));
  }

  function clearAll() {
    localStorage.removeItem("redditxSavedPosts");
    setSavedPosts([]);
  }

  const filteredPosts = savedPosts.filter((post) =>
    `${post.title} ${post.community} ${post.content}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main style={page}>
      <Navbar />

      <section style={container}>
        <div style={header}>
          <div>
            <h1 style={title}>Saved Posts</h1>
            <p style={sub}>Your bookmarked RedditX discussions.</p>
          </div>

          {savedPosts.length > 0 && (
            <button onClick={clearAll} style={clearBtn}>
              Clear All
            </button>
          )}
        </div>

        <input
          style={searchInput}
          placeholder="Search saved posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {savedPosts.length === 0 ? (
          <div style={empty}>
            <h2>No saved posts yet</h2>
            <p>Save posts from post detail page to see them here.</p>
            <a href="/communities" style={btn}>
              Explore Communities
            </a>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div style={empty}>
            <h2>No saved posts found</h2>
            <p>Try another search keyword.</p>
          </div>
        ) : (
          <div style={grid}>
            {filteredPosts.map((post) => (
              <div key={post.id} style={card}>
                <a href={`/post/${post.id}`} style={cardLink}>
                  <p style={meta}>r/{post.community || "technology"}</p>
                  <h2 style={postTitle}>{post.title}</h2>
                  <p style={text}>{post.content}</p>

                  {post.imageUrl && (
                    <img src={post.imageUrl} alt="saved" style={image} />
                  )}
                </a>

                <button
                  style={removeBtn}
                  onClick={() => removeSaved(post.id)}
                >
                  Remove Saved
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, rgba(249,115,22,.2), transparent 35%), #070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: 1050,
  margin: "0 auto",
  padding: "60px 24px",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 18,
  flexWrap: "wrap",
  marginBottom: 24,
};

const title = {
  fontSize: 54,
  fontWeight: 900,
};

const sub = {
  color: "#94a3b8",
  marginTop: 10,
};

const searchInput = {
  width: "100%",
  padding: 16,
  borderRadius: 18,
  border: "1px solid rgba(255,255,255,.14)",
  background: "rgba(255,255,255,.07)",
  color: "white",
  outline: "none",
  marginBottom: 28,
};

const empty = {
  padding: 40,
  borderRadius: 30,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
  textAlign: "center",
  color: "#94a3b8",
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

const clearBtn = {
  padding: "14px 22px",
  borderRadius: 16,
  border: "none",
  background: "linear-gradient(90deg,#dc2626,#ef4444)",
  color: "white",
  fontWeight: 900,
  cursor: "pointer",
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
};

const cardLink = {
  color: "white",
  textDecoration: "none",
  display: "block",
};

const meta = {
  color: "#fb923c",
  fontWeight: 800,
};

const postTitle = {
  marginTop: 8,
};

const text = {
  color: "#94a3b8",
  marginTop: 10,
  lineHeight: 1.7,
};

const image = {
  width: "100%",
  maxHeight: 260,
  objectFit: "cover",
  borderRadius: 20,
  marginTop: 18,
};

const removeBtn = {
  marginTop: 18,
  padding: "12px 18px",
  borderRadius: 15,
  border: "1px solid rgba(248,113,113,.35)",
  background: "rgba(239,68,68,.12)",
  color: "#fca5a5",
  fontWeight: 900,
  cursor: "pointer",
};
