"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [community, setCommunity] = useState("");
  const [category, setCategory] = useState("Technology");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  useEffect(() => {
    const user = localStorage.getItem("redditxUser");

    if (!user) {
      window.location.href = "/login";
    }
  }, []);

  function showMessage(text, type = "success") {
    setMessage(text);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showMessage("Please select a valid image file.", "error");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
      setImageUrl("");
      showMessage("Image uploaded successfully.", "success");
    };

    reader.readAsDataURL(file);
  }

  function handlePost(e) {
    e.preventDefault();

    if (!title.trim() || !community.trim() || !content.trim()) {
      showMessage("Please fill title, community and content.", "error");
      return;
    }

    const posts = JSON.parse(localStorage.getItem("redditxPosts")) || [];
    const user = JSON.parse(localStorage.getItem("redditxUser")) || {};

    const slug = community.toLowerCase().trim().replace(/\s+/g, "-");

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      community: slug,
      category,
      imageUrl: uploadedImage || imageUrl,
      content: content.trim(),
      author: user.username || "anonymous",
      votes: 1,
      comments: 0,
      createdAt: new Date().toISOString(),
    };

    posts.unshift(newPost);
    localStorage.setItem("redditxPosts", JSON.stringify(posts));

    showMessage("Post published successfully! Redirecting...", "success");

    setTimeout(() => {
      window.location.href = `/r/${slug}`;
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
          50% { transform: translate(20px,-15px) scale(1.08); }
          100% { transform: translate(0,0) scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .post-input::placeholder {
          color: #64748b;
        }
      `}</style>

      <div style={glowOne}></div>
      <div style={glowTwo}></div>

      <section style={wrapper}>
        <div style={leftPanel}>
          <span style={badge}>✍️ Create Discussion</span>

          <h1 style={heroTitle}>
            Share your ideas with the
            <span style={gradientText}> RedditX community.</span>
          </h1>

          <p style={heroText}>
            Publish posts, start discussions and interact with users inside
            modern communities.
          </p>

          <div style={miniGrid}>
            <div style={miniCard}>
              <strong style={miniValue}>120+</strong>
              <span style={miniLabel}>Communities</span>
            </div>

            <div style={miniCard}>
              <strong style={miniValue}>18k</strong>
              <span style={miniLabel}>Users</span>
            </div>

            <div style={miniCard}>
              <strong style={miniValue}>3.2k</strong>
              <span style={miniLabel}>Posts Today</span>
            </div>
          </div>

          <div style={preview}>
            <p style={previewTag}>👁️ Live Preview</p>

            <h2 style={previewTitle}>{title || "Your post title"}</h2>

            <p style={previewMeta}>
              r/{community || "community"} • {category} • by u/you
            </p>

            {(imageUrl || uploadedImage) ? (
              <img
                src={uploadedImage || imageUrl}
                alt="preview"
                style={previewImg}
              />
            ) : (
              <div style={emptyImage}>
                <span style={{ fontSize: 42 }}>🖼️</span>
                <p>No image selected</p>
              </div>
            )}

            <p style={previewText}>
              {content || "Post content preview will appear here."}
            </p>
          </div>
        </div>

        <div style={card}>
          <div style={iconBox}>🚀</div>

          <h2 style={titleStyle}>Create Post</h2>

          <p style={subtitle}>Start a new discussion in RedditX</p>

          {message && (
            <div
              style={{
                ...toast,
                color: messageType === "success" ? "#86efac" : "#fda4af",
                border:
                  messageType === "success"
                    ? "1px solid rgba(34,197,94,.35)"
                    : "1px solid rgba(244,63,94,.35)",
                background:
                  messageType === "success"
                    ? "rgba(34,197,94,.12)"
                    : "rgba(244,63,94,.12)",
              }}
            >
              {messageType === "success" ? "✅" : "⚠️"} {message}
            </div>
          )}

          <form onSubmit={handlePost} style={form}>
            <div>
              <label style={label}>Post Title *</label>

              <input
                className="post-input"
                style={input}
                type="text"
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label style={label}>Community *</label>

              <input
                className="post-input"
                style={input}
                type="text"
                placeholder="example: technology"
                value={community}
                onChange={(e) => setCommunity(e.target.value)}
              />
            </div>

            <div style={{ position: "relative" }}>
              <label style={label}>Category *</label>

              <button
                type="button"
                style={customSelect}
                onClick={() => setCategoryOpen(!categoryOpen)}
              >
                {category}

                <span
                  style={{
                    transform: categoryOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: ".3s",
                  }}
                >
                  ⌄
                </span>
              </button>

              {categoryOpen && (
                <div style={dropdown}>
                  {[
                    "Technology",
                    "Gaming",
                    "Movies",
                    "Design",
                    "Education",
                    "General",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      style={item === category ? activeOption : option}
                      onClick={() => {
                        setCategory(item);
                        setCategoryOpen(false);
                      }}
                    >
                      <span>{item}</span>
                      {item === category && <span>✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label style={label}>Image URL Optional</label>

              <input
                className="post-input"
                style={input}
                type="text"
                placeholder="Paste image URL..."
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                  setUploadedImage("");
                }}
              />
            </div>

            <div>
              <label style={label}>Upload Image Optional</label>

              <label style={uploadBox}>
                <span style={cameraIcon}>📸</span>
                <strong>Choose Image</strong>
                <small style={uploadText}>JPG, PNG or WEBP</small>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </label>
            </div>

            <div>
              <label style={label}>Post Content *</label>

              <textarea
                className="post-input"
                style={textarea}
                placeholder="Write your discussion..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" style={button}>
              🚀 Publish Post
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
  overflow: "hidden",
  position: "relative",
};

const glowOne = {
  position: "absolute",
  width: "430px",
  height: "430px",
  background: "#f97316",
  filter: "blur(140px)",
  opacity: 0.18,
  top: "-120px",
  left: "-120px",
  animation: "glowMove 7s ease-in-out infinite",
};

const glowTwo = {
  position: "absolute",
  width: "440px",
  height: "440px",
  background: "#db2777",
  filter: "blur(150px)",
  opacity: 0.18,
  bottom: "-140px",
  right: "-120px",
  animation: "glowMove 8s ease-in-out infinite",
};

const wrapper = {
  position: "relative",
  zIndex: 5,
  minHeight: "85vh",
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "55px 24px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "44px",
  alignItems: "center",
};

const leftPanel = {
  animation: "fadeIn .8s ease both",
};

const badge = {
  display: "inline-block",
  padding: "10px 16px",
  borderRadius: "999px",
  background: "rgba(249,115,22,0.1)",
  border: "1px solid rgba(249,115,22,0.35)",
  color: "#fb923c",
  fontWeight: "900",
  marginBottom: "24px",
};

const heroTitle = {
  fontSize: "clamp(42px,6vw,72px)",
  lineHeight: "1.05",
  fontWeight: "900",
  margin: 0,
};

const gradientText = {
  display: "block",
  background: "linear-gradient(90deg,#f97316,#ec4899,#8b5cf6)",
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
  gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
  gap: "14px",
  marginTop: "32px",
};

const miniCard = {
  padding: "20px",
  borderRadius: "22px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  display: "grid",
  gap: "6px",
  textAlign: "center",
};

const miniValue = {
  color: "#fb923c",
  fontSize: 26,
};

const miniLabel = {
  color: "#94a3b8",
  fontSize: 14,
};

const preview = {
  marginTop: "30px",
  padding: "24px",
  borderRadius: "28px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const previewTag = {
  color: "#fb923c",
  fontWeight: "900",
  marginBottom: "12px",
};

const previewTitle = {
  fontSize: "28px",
  marginBottom: "8px",
};

const previewMeta = {
  color: "#94a3b8",
  fontSize: "14px",
};

const previewText = {
  color: "#cbd5e1",
  marginTop: "14px",
  lineHeight: "1.7",
};

const previewImg = {
  width: "100%",
  maxHeight: "240px",
  objectFit: "cover",
  borderRadius: "20px",
  marginTop: "16px",
};

const emptyImage = {
  minHeight: 150,
  marginTop: 16,
  borderRadius: 20,
  border: "1px dashed rgba(255,255,255,.2)",
  background: "rgba(255,255,255,.04)",
  color: "#94a3b8",
  display: "grid",
  placeItems: "center",
  textAlign: "center",
  padding: 18,
};

const card = {
  width: "100%",
  maxWidth: "540px",
  margin: "0 auto",
  padding: "38px",
  borderRadius: "34px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 30px 90px rgba(236,72,153,0.16)",
  animation: "floatCard 5s ease-in-out infinite",
};

const iconBox = {
  width: "78px",
  height: "78px",
  borderRadius: "24px",
  background: "linear-gradient(135deg,#f97316,#db2777)",
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
  margin: 0,
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
  textAlign: "center",
  marginBottom: "20px",
  fontWeight: "800",
};

const form = {
  display: "grid",
  gap: "18px",
};

const label = {
  display: "block",
  marginBottom: "8px",
  color: "#e2e8f0",
  fontWeight: "800",
  fontSize: "14px",
};

const input = {
  width: "100%",
  padding: "16px 18px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  outline: "none",
  fontSize: "15px",
};

const customSelect = {
  width: "100%",
  padding: "16px 18px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,.14)",
  background: "rgba(255,255,255,.06)",
  color: "white",
  outline: "none",
  fontSize: "15px",
  fontWeight: "800",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  backdropFilter: "blur(14px)",
  boxShadow: "0 12px 30px rgba(0,0,0,.18)",
};

const dropdown = {
  position: "absolute",
  top: "82px",
  left: 0,
  right: 0,
  zIndex: 999,
  padding: "10px",
  borderRadius: "22px",
  background: "rgba(15,23,42,.98)",
  border: "1px solid rgba(255,255,255,.12)",
  backdropFilter: "blur(18px)",
  boxShadow: "0 30px 80px rgba(0,0,0,.45)",
  display: "grid",
  gap: "6px",
  animation: "fadeIn .25s ease",
};

const option = {
  width: "100%",
  padding: "15px 18px",
  border: "none",
  borderRadius: "14px",
  background: "transparent",
  color: "#cbd5e1",
  fontWeight: "800",
  textAlign: "left",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const activeOption = {
  ...option,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  boxShadow: "0 12px 30px rgba(219,39,119,.28)",
};

const uploadBox = {
  width: "100%",
  minHeight: "130px",
  padding: "22px",
  borderRadius: "22px",
  border: "2px dashed rgba(255,255,255,.2)",
  background: "rgba(255,255,255,.04)",
  color: "#cbd5e1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontWeight: "900",
};

const cameraIcon = {
  fontSize: 34,
  marginBottom: 8,
};

const uploadText = {
  color: "#64748b",
  marginTop: 6,
  fontWeight: "700",
};

const textarea = {
  width: "100%",
  minHeight: "170px",
  padding: "16px 18px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.06)",
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
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  fontSize: "16px",
  fontWeight: "900",
  cursor: "pointer",
  boxShadow: "0 16px 35px rgba(219,39,119,.25)",
};
