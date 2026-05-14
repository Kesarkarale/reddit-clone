"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [community, setCommunity] = useState("");
  const [category, setCategory] = useState("Technology");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("redditxUser");

    if (!user) {
      window.location.href = "/login";
    }
  }, []);

  function handleImageUpload(e) {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
      setImageUrl("");
    };

    reader.readAsDataURL(file);
  }

  function handlePost(e) {
    e.preventDefault();

    if (!title || !community || !content) {
      setMessage("Please fill title, community and content.");
      return;
    }

    const posts = JSON.parse(localStorage.getItem("redditxPosts")) || [];
    const user = JSON.parse(localStorage.getItem("redditxUser")) || {};

    const slug = community.toLowerCase().trim().replace(/\s+/g, "-");

    const newPost = {
      id: Date.now(),
      title,
      community: slug,
      category,
      imageUrl: uploadedImage || imageUrl,
      content,
      author: user.username || "anonymous",
      votes: 1,
      comments: 0,
      createdAt: new Date().toISOString(),
    };

    posts.unshift(newPost);
    localStorage.setItem("redditxPosts", JSON.stringify(posts));

    setMessage("Post published successfully! Redirecting...");

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
            Publish posts, start discussions and interact with thousands of
            users inside modern communities.
          </p>

          <div style={miniGrid}>
            <div style={miniCard}>
              <strong>120+</strong>
              <span>Communities</span>
            </div>

            <div style={miniCard}>
              <strong>18k</strong>
              <span>Users</span>
            </div>

            <div style={miniCard}>
              <strong>3.2k</strong>
              <span>Posts Today</span>
            </div>
          </div>

          <div style={preview}>
            <p style={previewTag}>Live Preview</p>

            <h2 style={previewTitle}>{title || "Your post title"}</h2>

            <p style={previewMeta}>
              r/{community || "community"} • {category} • by u/you
            </p>

            {(imageUrl || uploadedImage) && (
              <img
                src={uploadedImage || imageUrl}
                alt="preview"
                style={previewImg}
              />
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

          {message && <div style={toast}>{message}</div>}

          <form onSubmit={handlePost} style={form}>
            <div>
              <label style={label}>Post Title</label>

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
              <label style={label}>Community</label>

              <input
                className="post-input"
                style={input}
                type="text"
                placeholder="example: technology"
                value={community}
                onChange={(e) => setCommunity(e.target.value)}
              />
            </div>

            <div>
              <label style={label}>Category</label>

              <select
                style={input}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Technology</option>
                <option>Gaming</option>
                <option>Movies</option>
                <option>Design</option>
                <option>Education</option>
                <option>General</option>
              </select>
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
              <label style={label}>Upload Image</label>

              <label style={uploadBox}>
                📸 Choose Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </label>
            </div>

            <div>
              <label style={label}>Post Content</label>

              <textarea
                className="post-input"
                style={textarea}
                placeholder="Write your discussion..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" style={button}>
              Publish Post
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
  width: "420px",
  height: "420px",
  background: "#f97316",
  filter: "blur(140px)",
  opacity: 0.2,
  top: "-120px",
  left: "-120px",
  animation: "glowMove 7s ease-in-out infinite",
};

const glowTwo = {
  position: "absolute",
  width: "430px",
  height: "430px",
  background: "#db2777",
  filter: "blur(150px)",
  opacity: 0.2,
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
  color: "#fb923c",
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
  background: "linear-gradient(90deg,#f97316,#ec4899)",
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

const preview = {
  marginTop: "28px",
  padding: "24px",
  borderRadius: "26px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const previewTag = {
  color: "#fb923c",
  fontWeight: "900",
  marginBottom: "10px",
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
  maxHeight: "220px",
  objectFit: "cover",
  borderRadius: "20px",
  marginTop: "16px",
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

const uploadBox = {
  width: "100%",
  padding: "18px",
  borderRadius: "18px",
  border: "2px dashed rgba(255,255,255,.18)",
  background: "rgba(255,255,255,.05)",
  color: "#cbd5e1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontWeight: "800",
};

const textarea = {
  width: "100%",
  minHeight: "170px",
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
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  fontSize: "16px",
  fontWeight: "900",
  cursor: "pointer",
};
