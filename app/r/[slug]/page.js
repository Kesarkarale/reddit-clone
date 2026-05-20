"use client";

import { useEffect, useMemo, useState } from "react";
 
export default function CommunityPage({ params }) {
  const slug = params.slug;

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const savedPosts =
      JSON.parse(localStorage.getItem("redditxPosts")) || [];

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

  const filteredPosts = useMemo(() => {
    let data = [...allPosts];

    data = data.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.content.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "popular") {
      data.sort((a, b) => (b.votes || 0) - (a.votes || 0));
    }

    if (sort === "comments") {
      data.sort((a, b) => (b.comments || 0) - (a.comments || 0));
    }

    return data;
  }, [search, sort, allPosts]);

  return (
    <main style={page}>
 
      <style>{`
        @keyframes glowMove {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px,-15px) scale(1.08); }
          100% { transform: translate(0,0) scale(1); }
        }

        .search-input::placeholder {
          color: #64748b;
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
              <p style={category}>🔥 Trending Community</p>

              <h1 style={title}>r/{slug}</h1>

              <p style={subtitle}>
                Welcome to the r/{slug} community. Share posts, vote,
                comment and discuss with members.
              </p>

              <div style={stats}>
                <span>👥 12.8k members</span>
                <span>🟢 248 online</span>
                <span>🔥 Trending</span>
              </div>
            </div>

            <div style={heroBtns}>
              <button
                style={joinBtn}
                onClick={() => setJoined(!joined)}
              >
                {joined ? "Joined ✓" : "Join Community"}
              </button>

              <a href="/create-post" style={createBtn}>
                + Create Post
              </a>
            </div>
          </div>
        </div>

        <div style={layout}>
          <div style={feed}>
            <div style={toolbar}>
              <input
                className="search-input"
                style={searchInput}
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                style={select}
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
                <option value="comments">Most Commented</option>
              </select>
            </div>

            {filteredPosts.map((post) => (
              <a
                key={post.id}
                href={`/post/${post.id}`}
                style={postCard}
              >
                <div style={voteBox}>
                  <button style={voteBtn}>▲</button>

                  <strong style={voteCount}>
                    {post.votes || 1}
                  </strong>

                  <button style={voteBtn}>▼</button>
                </div>

                <div>
                  <p style={meta}>
                    Posted by u/{post.author || "you"} · just now
                  </p>

                  <h2 style={postTitle}>{post.title}</h2>

                  {post.imageUrl && (
                    <img
                      src={post.imageUrl}
                      alt="post"
                      style={postImage}
                    />
                  )}

                  <p style={postText}>{post.content}</p>

                  <div style={actions}>
                    <span>
                      💬 {post.comments || 0} Comments
                    </span>

                    <span>🔥 Trending</span>

                    <span>🔖 Save</span>
                  </div>
                </div>
              </a>
            ))}

            {filteredPosts.length === 0 && (
              <div style={emptyBox}>
                <h2>No posts found</h2>
                <p>Try another search keyword.</p>
              </div>
            )}
          </div>

          <aside style={aside}>
            <div style={sideCard}>
              <h3 style={sideTitle}>About Community</h3>

              <p style={sideText}>
                This is a professional Reddit-style community page
                with posts, voting UI, stats and clean discussion
                layout.
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

            <div style={sideCard}>
              <h3 style={sideTitle}>🔥 Trending Topics</h3>

              <div style={trendItem}>
                <h4>AI Tools</h4>
                <p style={trendText}>2.4k posts</p>
              </div>

              <div style={trendItem}>
                <h4>Frontend Design</h4>
                <p style={trendText}>1.8k posts</p>
              </div>

              <div style={trendItem}>
                <h4>React & Next.js</h4>
                <p style={trendText}>4.1k posts</p>
              </div>
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
  height: "190px",
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

const category = {
  color: "#fb923c",
  fontWeight: "800",
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

const heroBtns = {
  display: "grid",
  gap: "12px",
};

const joinBtn = {
  padding: "14px 22px",
  borderRadius: "16px",
  border: "none",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  fontWeight: "900",
  cursor: "pointer",
};

const createBtn = {
  padding: "14px 22px",
  borderRadius: "16px",
  background: "rgba(255,255,255,.08)",
  color: "white",
  textDecoration: "none",
  textAlign: "center",
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

const toolbar = {
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
  padding: "16px",
  borderRadius: "22px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const searchInput = {
  flex: 1,
  minWidth: "220px",
  padding: "14px 16px",
  borderRadius: "14px",
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(255,255,255,.12)",
  color: "white",
  outline: "none",
};

const select = {
  padding: "14px 16px",
  borderRadius: "14px",
  background: "#111827",
  color: "white",
  border: "1px solid rgba(255,255,255,.12)",
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

const postImage = {
  width: "100%",
  borderRadius: "20px",
  marginTop: "18px",
  maxHeight: "360px",
  objectFit: "cover",
};

const postText = {
  color: "#cbd5e1",
  marginTop: "12px",
  lineHeight: "1.7",
};

const actions = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap",
  marginTop: "18px",
  color: "#94a3b8",
  fontSize: "14px",
};

const emptyBox = {
  padding: "30px",
  borderRadius: "26px",
  background: "rgba(255,255,255,.06)",
  textAlign: "center",
  color: "#94a3b8",
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

const trendItem = {
  padding: "14px",
  borderRadius: "18px",
  background: "rgba(255,255,255,.06)",
  marginTop: "12px",
};

const trendText = {
  color: "#94a3b8",
  marginTop: "6px",
};
