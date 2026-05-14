"use client";

import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

export default function CommunityPage({ params }) {
  const slug = params.slug;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("redditxPosts")) || [];

    const filtered = savedPosts.filter(
      (post) =>
        post.community &&
        post.community.toLowerCase().replace(/\s+/g, "-") === slug
    );

    setPosts(filtered);
  }, [slug]);

  const defaultPosts = [
    {
      id: 1,
      title: "Future of AI in Web Development",
      author: "kesar_dev",
      votes: 248,
      comments: 32,
      content:
        "AI tools are changing how developers build modern applications.",
    },
    {
      id: 2,
      title: "Best UI Trends in 2026",
      author: "design_master",
      votes: 124,
      comments: 18,
      content:
        "Glassmorphism, gradients and modern animations are trending.",
    },
  ];

  const allPosts = posts.length > 0 ? posts : defaultPosts;

  return (
    <main style={page}>
      <Navbar />

      <style>{`
        @keyframes glowMove {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px,-15px) scale(1.08); }
          100% { transform: translate(0,0) scale(1); }
        }
      `}</style>

      <div style={glowOne}></div>
      <div style={glowTwo}></div>

      <section style={container}>
        <div style={heroCard}>
          <div style={cover}></div>

          <div style={heroContent}>
            <div style={avatar}>r/</div>

            <div>
              <h1 style={title}>r/{slug}</h1>
              <p style={subtitle}>
                Welcome to the r/{slug} community. Share posts, vote, comment,
                and discuss with members.
              </p>

              <div style={stats}>
                <span>👥 12.8k members</span>
                <span>🟢 248 online</span>
                <span>🔥 Trending</span>
              </div>
            </div>

            <a href="/create-post" style={joinBtn}>
              + Create Post
            </a>
          </div>
        </div>

        <div style={layout}>
          <div style={feed}>
            <div style={sortBar}>
              <button style={activeSort}>Latest</button>
              <button style={sortBtn}>Popular</button>
              <button style={sortBtn}>Top</button>
            </div>

            {allPosts.map((post) => (
              <a key={post.id} href={`/post/${post.id}`} style={postCard}>
                <div style={voteBox}>
                  <button style={voteBtn}>▲</button>
                  <strong style={voteCount}>{post.votes || 1}</strong>
                  <button style={voteBtn}>▼</button>
                </div>

                <div>
                  <p style={meta}>
                    Posted by u/{post.author || "you"} · just now
                  </p>

                  <h2 style={postTitle}>{post.title}</h2>

                  <p style={postText}>{post.content}</p>

                  <div style={actions}>
                    <span>💬 {post.comments || 0} Comments</span>
                    <span>🔗 Share</span>
                    <span>🔖 Save</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <aside style={aside}>
            <div style={sideCard}>
              <h3 style={sideTitle}>About Community</h3>
              <p style={sideText}>
                This is a professional Reddit-style community page with posts,
                voting UI, stats, and clean discussion layout.
              </p>
            </div>

            <div style={sideCard}>
              <h3 style={sideTitle}>Community Rules</h3>
              <ul style={rules}>
                <li>Be respectful</li>
                <li>No spam promotion</li>
                <li>Use clear post titles</li>
                <li>Stay on topic</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
  position: "relative",
  overflow: "hidden",
};

const glowOne = {
  position: "absolute",
  width: "420px",
  height: "420px",
  top: "-140px",
  left: "-120px",
  background: "#f97316",
  filter: "blur(140px)",
  opacity: 0.18,
  animation: "glowMove 7s ease-in-out infinite",
};

const glowTwo = {
  position: "absolute",
  width: "430px",
  height: "430px",
  bottom: "-160px",
  right: "-120px",
  background: "#8b5cf6",
  filter: "blur(150px)",
  opacity: 0.2,
  animation: "glowMove 8s ease-in-out infinite",
};

const container = {
  position: "relative",
  zIndex: 5,
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "40px 24px",
};

const heroCard = {
  borderRadius: "34px",
  overflow: "hidden",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
  marginBottom: "30px",
};

const cover = {
  height: "180px",
  background: "linear-gradient(90deg,#f97316,#db2777,#8b5cf6)",
};

const heroContent = {
  padding: "28px",
  display: "grid",
  gridTemplateColumns: "90px 1fr auto",
  gap: "22px",
  alignItems: "center",
};

const avatar = {
  width: "90px",
  height: "90px",
  borderRadius: "26px",
  background: "#070b18",
  border: "4px solid #070b18",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
  fontWeight: "900",
  marginTop: "-55px",
};

const title = {
  fontSize: "46px",
  fontWeight: "900",
};

const subtitle = {
  color: "#94a3b8",
  marginTop: "10px",
  lineHeight: "1.6",
};

const stats = {
  display: "flex",
  flexWrap: "wrap",
  gap: "18px",
  marginTop: "15px",
  color: "#cbd5e1",
  fontSize: "14px",
};

const joinBtn = {
  padding: "14px 22px",
  borderRadius: "16px",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: "900",
};

const layout = {
  display: "grid",
  gridTemplateColumns: "1fr 320px",
  gap: "24px",
};

const feed = {
  display: "grid",
  gap: "18px",
};

const sortBar = {
  display: "flex",
  gap: "10px",
  padding: "16px",
  borderRadius: "22px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const activeSort = {
  border: "none",
  padding: "10px 16px",
  borderRadius: "14px",
  background: "#f97316",
  color: "white",
  fontWeight: "900",
};

const sortBtn = {
  border: "1px solid rgba(255,255,255,0.12)",
  padding: "10px 16px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  fontWeight: "800",
};

const postCard = {
  display: "grid",
  gridTemplateColumns: "60px 1fr",
  gap: "18px",
  padding: "24px",
  borderRadius: "28px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
  color: "white",
  textDecoration: "none",
};

const voteBox = {
  display: "grid",
  justifyItems: "center",
  gap: "8px",
};

const voteBtn = {
  width: "38px",
  height: "38px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.07)",
  color: "white",
};

const voteCount = {
  color: "#fb923c",
};

const meta = {
  color: "#94a3b8",
  fontSize: "14px",
};

const postTitle = {
  fontSize: "28px",
  marginTop: "8px",
  fontWeight: "900",
};

const postText = {
  color: "#cbd5e1",
  marginTop: "12px",
  lineHeight: "1.7",
};

const actions = {
  display: "flex",
  gap: "18px",
  marginTop: "18px",
  color: "#94a3b8",
  fontSize: "14px",
};

const aside = {
  display: "grid",
  gap: "18px",
  alignSelf: "start",
};

const sideCard = {
  padding: "24px",
  borderRadius: "28px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
};

const sideTitle = {
  fontSize: "22px",
  marginBottom: "12px",
};

const sideText = {
  color: "#94a3b8",
  lineHeight: "1.7",
};

const rules = {
  color: "#cbd5e1",
  lineHeight: "2",
  paddingLeft: "20px",
};
