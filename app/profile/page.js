"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [tab, setTab] = useState("posts");
  const [avatarImage, setAvatarImage] = useState("");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("redditxUser"));
    const savedPosts = JSON.parse(localStorage.getItem("redditxPosts")) || [];
    const saved = JSON.parse(localStorage.getItem("redditxSavedPosts")) || [];

    setUser(savedUser);
    setPosts(savedPosts);
    setSavedPosts(saved);
    setAvatarImage(savedUser?.avatar || "");
  }, []);

  function handleAvatarUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const updatedUser = {
        ...user,
        avatar: reader.result,
      };

      localStorage.setItem("redditxUser", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setAvatarImage(reader.result);
    };

    reader.readAsDataURL(file);
  }

  const karma = posts.reduce((total, post) => total + (post.votes || 1), 0);

  const joinedDate = user?.joinedAt
    ? new Date(user.joinedAt).toLocaleDateString()
    : "Demo User";

  return (
    <main style={page}>
      <Navbar />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section style={container}>
        <div style={profileCard}>
          <div style={cover}></div>

          <div style={profileContent}>
            <div>
              <div style={avatar}>
                {avatarImage ? (
                  <img src={avatarImage} alt="avatar" style={avatarImg} />
                ) : user?.username ? (
                  user.username.charAt(0).toUpperCase()
                ) : (
                  "U"
                )}
              </div>

              <label style={uploadBtn}>
                Upload Avatar
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleAvatarUpload}
                />
              </label>
            </div>

            <div style={{ flex: 1 }}>
              <h1 style={title}>{user?.username || "Guest User"}</h1>

              <p style={sub}>{user?.email || "Please login/register first"}</p>

              <p style={bio}>
                {user?.bio ||
                  "RedditX user who loves communities, discussions and modern web apps."}
              </p>

              <div style={miniInfo}>
                <span>📅 Joined: {joinedDate}</span>
                <span>🟢 Online</span>
                <span>🔥 Contributor</span>
              </div>
            </div>

            <a href="/settings" style={editBtn}>
              Edit Profile
            </a>
          </div>

          <div style={statsGrid}>
            <Stat title="Posts" value={posts.length} />
            <Stat title="Saved" value={savedPosts.length} />
            <Stat title="Karma" value={karma || 248} />
            <Stat title="Communities" value="3" />
          </div>
        </div>

        <div style={actionsRow}>
          <a href="/create-post" style={primaryBtn}>
            + Create New Post
          </a>

          <a href="/saved" style={outlineBtn}>
            View Saved Posts
          </a>

          <a href="/notifications" style={outlineBtn}>
            Notifications
          </a>
        </div>

        <div style={dashboardGrid}>
          <div style={activityCard}>
            <div style={tabBar}>
              <button
                style={tab === "posts" ? activeTab : tabBtn}
                onClick={() => setTab("posts")}
              >
                My Posts
              </button>

              <button
                style={tab === "saved" ? activeTab : tabBtn}
                onClick={() => setTab("saved")}
              >
                Saved Posts
              </button>
            </div>

            {tab === "posts" && (
              <>
                <h2 style={sectionTitle}>Recent Activity</h2>

                {posts.length === 0 ? (
                  <Empty
                    title="No posts yet"
                    text="Create your first discussion and it will appear here."
                    href="/create-post"
                    label="Create Post"
                  />
                ) : (
                  posts.map((post) => (
                    <a key={post.id} href={`/post/${post.id}`} style={postItem}>
                      <p style={meta}>r/{post.community || "general"}</p>
                      <h3 style={postTitle}>{post.title}</h3>
                      <p style={postText}>{post.content}</p>

                      <div style={postStats}>
                        <span>🔥 {post.votes || 1} votes</span>
                        <span>💬 {post.comments || 0} comments</span>
                      </div>
                    </a>
                  ))
                )}
              </>
            )}

            {tab === "saved" && (
              <>
                <h2 style={sectionTitle}>Saved Posts</h2>

                {savedPosts.length === 0 ? (
                  <Empty
                    title="No saved posts"
                    text="Save posts from the post detail page."
                    href="/communities"
                    label="Explore"
                  />
                ) : (
                  savedPosts.map((post) => (
                    <a key={post.id} href={`/post/${post.id}`} style={postItem}>
                      <p style={meta}>
                        Saved from r/{post.community || "general"}
                      </p>
                      <h3 style={postTitle}>{post.title}</h3>
                      <p style={postText}>{post.content}</p>
                    </a>
                  ))
                )}
              </>
            )}
          </div>

          <aside style={sidePanel}>
            <div style={sideCard}>
              <h3 style={sideTitle}>Profile Strength</h3>
              <div style={progressOuter}>
                <div style={progressInner}></div>
              </div>
              <p style={sideText}>85% complete</p>
            </div>

            <div style={sideCard}>
              <h3 style={sideTitle}>Achievements</h3>
              <div style={badgeItem}>🏆 First Post</div>
              <div style={badgeItem}>🔥 Active Member</div>
              <div style={badgeItem}>💬 Comment Starter</div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Stat({ title, value }) {
  return (
    <div style={stat}>
      <h2 style={statValue}>{value}</h2>
      <p style={statLabel}>{title}</p>
    </div>
  );
}

function Empty({ title, text, href, label }) {
  return (
    <div style={empty}>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={href} style={emptyBtn}>
        {label}
      </a>
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
  maxWidth: "1150px",
  margin: "0 auto",
  padding: "50px 24px",
  display: "grid",
  gap: "24px",
};

const profileCard = {
  borderRadius: "34px",
  overflow: "hidden",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
  animation: "fadeIn .7s ease both",
};

const cover = {
  height: 150,
  background: "linear-gradient(90deg,#f97316,#db2777,#8b5cf6)",
};

const profileContent = {
  padding: "0 34px 30px",
  display: "flex",
  alignItems: "center",
  gap: 24,
  flexWrap: "wrap",
};

const avatar = {
  width: "110px",
  height: "110px",
  borderRadius: "32px",
  marginTop: "-50px",
  background: "#070b18",
  border: "5px solid #070b18",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "46px",
  fontWeight: "900",
  boxShadow: "0 20px 60px rgba(236,72,153,.25)",
  overflow: "hidden",
};

const avatarImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const uploadBtn = {
  display: "inline-block",
  marginTop: 12,
  padding: "10px 14px",
  borderRadius: 14,
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(255,255,255,.14)",
  color: "white",
  fontWeight: "900",
  cursor: "pointer",
  fontSize: 13,
};

const title = {
  fontSize: "44px",
  fontWeight: "900",
  margin: 0,
};

const sub = {
  color: "#94a3b8",
  marginTop: "6px",
};

const bio = {
  color: "#cbd5e1",
  marginTop: 12,
  lineHeight: 1.6,
};

const miniInfo = {
  display: "flex",
  gap: 14,
  flexWrap: "wrap",
  color: "#94a3b8",
  fontSize: 14,
  marginTop: 14,
};

const editBtn = {
  padding: "13px 20px",
  borderRadius: 16,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: 900,
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
  gap: "18px",
  padding: "0 34px 34px",
};

const stat = {
  padding: "22px",
  borderRadius: "24px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  textAlign: "center",
};

const statValue = {
  fontSize: 36,
  color: "#fb923c",
};

const statLabel = {
  color: "#94a3b8",
  marginTop: 6,
};

const actionsRow = {
  display: "flex",
  gap: 14,
  flexWrap: "wrap",
};

const primaryBtn = {
  display: "inline-block",
  padding: "15px 24px",
  borderRadius: "18px",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: "900",
};

const outlineBtn = {
  display: "inline-block",
  padding: "15px 24px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,.14)",
  background: "rgba(255,255,255,.06)",
  color: "white",
  textDecoration: "none",
  fontWeight: "900",
};

const dashboardGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 320px",
  gap: 24,
};

const activityCard = {
  padding: "30px",
  borderRadius: "30px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
};

const tabBar = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginBottom: 24,
};

const tabBtn = {
  padding: "11px 18px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,.14)",
  background: "rgba(255,255,255,.06)",
  color: "#cbd5e1",
  fontWeight: 900,
  cursor: "pointer",
};

const activeTab = {
  ...tabBtn,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  border: "none",
};

const sectionTitle = {
  fontSize: "30px",
  marginBottom: "20px",
};

const empty = {
  padding: 34,
  borderRadius: 26,
  background: "rgba(255,255,255,.06)",
  color: "#94a3b8",
  textAlign: "center",
};

const emptyBtn = {
  display: "inline-block",
  marginTop: 18,
  padding: "12px 20px",
  borderRadius: 16,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: 900,
};

const postItem = {
  display: "block",
  padding: "22px",
  borderRadius: "22px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "white",
  textDecoration: "none",
  marginBottom: "14px",
};

const meta = {
  color: "#fb923c",
  fontWeight: 900,
};

const postTitle = {
  marginTop: 8,
};

const postText = {
  color: "#94a3b8",
  marginTop: 10,
  lineHeight: 1.6,
};

const postStats = {
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
  color: "#cbd5e1",
  marginTop: 14,
  fontSize: 14,
};

const sidePanel = {
  display: "grid",
  gap: 18,
  alignSelf: "start",
};

const sideCard = {
  padding: 24,
  borderRadius: 28,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
};

const sideTitle = {
  fontSize: 22,
  marginBottom: 14,
};

const sideText = {
  color: "#94a3b8",
  marginTop: 10,
};

const progressOuter = {
  height: 12,
  borderRadius: 999,
  background: "rgba(255,255,255,.09)",
  overflow: "hidden",
};

const progressInner = {
  width: "85%",
  height: "100%",
  background: "linear-gradient(90deg,#f97316,#db2777)",
};

const badgeItem = {
  padding: 14,
  borderRadius: 16,
  background: "rgba(255,255,255,.06)",
  marginTop: 10,
};
