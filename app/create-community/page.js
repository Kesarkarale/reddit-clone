"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

export default function CreateCommunity() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  function handleCreate(e) {
    e.preventDefault();

    if (!name || !description || !category) {
      setMessage("Please fill all fields.");
      return;
    }

    const communities =
      JSON.parse(localStorage.getItem("redditxCommunities")) || [];

    const slug = name.toLowerCase().trim().replace(/\s+/g, "-");

    const newCommunity = {
      id: Date.now(),
      name,
      slug,
      description,
      category,
      members: "1",
    };

    communities.unshift(newCommunity);
    localStorage.setItem("redditxCommunities", JSON.stringify(communities));

    setMessage("Community created successfully!");

    setTimeout(() => {
      router.push(`/r/${slug}`);
    }, 1200);
  }

  return (
    <main style={page}>
      <Navbar />

      <style>{`
        @keyframes floatCard {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }

        @keyframes glowMove {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-20px,15px) scale(1.08); }
          100% { transform: translate(0,0) scale(1); }
        }

        .community-input::placeholder {
          color: #64748b;
        }
      `}</style>

      <div style={glowOne}></div>
      <div style={glowTwo}></div>

      <section style={wrapper}>
        <div style={leftPanel}>
          <span style={badge}>🌐 New Community</span>

          <h1 style={heroTitle}>
            Build your own
            <span style={gradientText}> RedditX space.</span>
          </h1>

          <p style={heroText}>
            Create a topic-based community where people can post, vote,
            comment and discuss ideas together.
          </p>

          <div style={miniGrid}>
            <div style={miniCard}>
              <strong>Unique</strong>
              <span>Community Slug</span>
            </div>

            <div style={miniCard}>
              <strong>Public</strong>
              <span>Open to Users</span>
            </div>

            <div style={miniCard}>
              <strong>Fast</strong>
              <span>Demo Creation</span>
            </div>
          </div>
        </div>

        <div style={card}>
          <div style={iconBox}>🌍</div>

          <h2 style={titleStyle}>Create Community</h2>
          <p style={subtitle}>Start a new discussion space</p>

          {message && <div style={toast}>{message}</div>}

          <form onSubmit={handleCreate} style={form}>
            <div>
              <label style={label}>Community Name</label>
              <input
                className="community-input"
                style={input}
                type="text"
                placeholder="example: web design"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label style={label}>Category</label>
              <select
                style={input}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                <option value="Technology">Technology</option>
                <option value="Gaming">Gaming</option>
                <option value="Movies">Movies</option>
                <option value="Design">Design</option>
                <option value="Education">Education</option>
              </select>
            </div>

            <div>
              <label style={label}>Description</label>
              <textarea
                className="community-input"
                style={textarea}
                placeholder="What is this community about?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" style={button}>
              Create Community
            </button>
          </form>
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
  background: "#8b5cf6",
  filter: "blur(140px)",
  opacity: 0.22,
  top: "-130px",
  right: "-120px",
  animation: "glowMove 7s ease-in-out infinite",
};

const glowTwo = {
  position: "absolute",
  width: "440px",
  height: "440px",
  background: "#f97316",
  filter: "blur(150px)",
  opacity: 0.2,
  bottom: "-150px",
  left: "-130px",
  animation: "glowMove 8s ease-in-out infinite",
};

const wrapper = {
  position: "relative",
  zIndex: 5,
  minHeight: "85vh",
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "50px 24px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "40px",
  alignItems: "center",
};

const leftPanel = {};

const badge = {
  display: "inline-block",
  padding: "10px 16px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#c084fc",
  fontWeight: "800",
  marginBottom: "24px",
};

const heroTitle = {
  fontSize: "clamp(42px,6vw,72px)",
  lineHeight: "1.05",
  fontWeight: "900",
};

const gradientText = {
  display: "block",
  background: "linear-gradient(90deg,#8b5cf6,#ec4899,#f97316)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const heroText = {
  color: "#94a3b8",
  lineHeight: "1.8",
  fontSize: "18px",
  marginTop: "20px",
  maxWidth: "560px",
};

const miniGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
  gap: "14px",
  marginTop: "32px",
};

const miniCard = {
  padding: "18px",
  borderRadius: "22px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  display: "grid",
  gap: "6px",
};

const card = {
  width: "100%",
  maxWidth: "520px",
  margin: "0 auto",
  padding: "38px",
  borderRadius: "34px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 30px 90px rgba(139,92,246,0.18)",
  animation: "floatCard 5s ease-in-out infinite",
};

const iconBox = {
  width: "78px",
  height: "78px",
  borderRadius: "24px",
  background: "linear-gradient(135deg,#8b5cf6,#db2777)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "34px",
  margin: "0 auto 20px",
};

const titleStyle = {
  textAlign: "center",
  fontSize: "42px",
  fontWeight: "900",
};

const subtitle = {
  textAlign: "center",
  color: "#94a3b8",
  marginTop: "10px",
  marginBottom: "28px",
};

const toast = {
  padding: "14px",
  borderRadius: "16px",
  background: "rgba(34,197,94,0.12)",
  border: "1px solid rgba(34,197,94,0.3)",
  color: "#86efac",
  textAlign: "center",
  marginBottom: "20px",
  fontWeight: "700",
};

const form = {
  display: "grid",
  gap: "18px",
};

const label = {
  display: "block",
  marginBottom: "8px",
  color: "#cbd5e1",
  fontWeight: "700",
  fontSize: "14px",
};

const input = {
  width: "100%",
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  outline: "none",
  fontSize: "15px",
};

const textarea = {
  width: "100%",
  minHeight: "150px",
  padding: "16px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  outline: "none",
  resize: "none",
  fontSize: "15px",
};

const button = {
  marginTop: "10px",
  padding: "16px",
  borderRadius: "18px",
  border: "none",
  background: "linear-gradient(90deg,#8b5cf6,#db2777)",
  color: "white",
  fontSize: "16px",
  fontWeight: "900",
  cursor: "pointer",
};
