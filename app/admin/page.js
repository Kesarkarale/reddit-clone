"use client";

import { useEffect, useState } from "react";
 
export default function AdminDashboard() {
  const [allowed, setAllowed] = useState(false);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [users, setUsers] = useState([]);
  const [reportedPosts, setReportedPosts] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("redditxUser"));

    if (!loggedInUser) {
      window.location.href = "/login";
      return;
    }

    setAllowed(true);
    loadData();
  }, []);

function loadData() {
  setPosts(
    JSON.parse(localStorage.getItem("redditxPosts")) || []
  );

  setSavedPosts(
    JSON.parse(localStorage.getItem("redditxSavedPosts")) || []
  );

  setCommunities(
    JSON.parse(localStorage.getItem("redditxCommunities")) || []
  );

  setNotifications(
    JSON.parse(localStorage.getItem("redditxNotifications")) || []
  );

  setUsers(
    JSON.parse(localStorage.getItem("redditxUsers")) || []
  );

  setReportedPosts(
    JSON.parse(localStorage.getItem("redditxReportedPosts")) || []
  );
}

  function deletePost(id) {
    const updated = posts.filter((post) => String(post.id) !== String(id));
    localStorage.setItem("redditxPosts", JSON.stringify(updated));
    setPosts(updated);
  }

  function clearNotifications() {
    localStorage.removeItem("redditxNotifications");
    setNotifications([]);
  }
function removeReport(id) {
  const updated = reportedPosts.filter(
    (item) => String(item.id) !== String(id)
  );

  localStorage.setItem(
    "redditxReportedPosts",
    JSON.stringify(updated)
  );

  setReportedPosts(updated);
}
  if (!allowed) {
    return (
      <main style={page}>
      
        <p style={{ textAlign: "center", marginTop: 80 }}>
          Checking admin access...
        </p>
      </main>
    );
  }

  return (
    <main style={page}>
 
      <section style={container}>
        <div style={header}>
          <div>
            <h1 style={title}>Admin Dashboard</h1>
            <p style={sub}>Monitor PostPilot platform activity.</p>
          </div>

          <button style={dangerBtn} onClick={clearNotifications}>
            Clear Notifications
          </button>
        </div>

        <div style={grid}>
          <Stat title="Users" value={users.length} icon="👤" />
          <Stat title="Posts" value={posts.length} icon="📝" />
          <Stat title="Communities" value={communities.length + 3} icon="🌐" />
          <Stat title="Saved Posts" value={savedPosts.length} icon="🔖" />
          <Stat title="Notifications" value={notifications.length} icon="🔔" />
         <Stat
         title="Reports"
         value={reportedPosts.length}
         icon="🚨"
         />
        </div>

        <div style={layout}>
          <div style={panel}>
            <h2 style={sectionTitle}>Recent Posts</h2>

            {posts.length === 0 ? (
              <p style={empty}>No posts created yet.</p>
            ) : (
              posts.slice(0, 6).map((post) => (
                <div key={post.id} style={item}>
                  <div>
                    <h3>{post.title}</h3>
                    <p style={itemText}>
                      r/{post.community} • by u/{post.author || "anonymous"}
                    </p>
                  </div>

                  <div style={actions}>
                    <a href={`/post/${post.id}`} style={badge}>
                      Open
                    </a>

                    <button
                      style={deleteBtn}
                      onClick={() => deletePost(post.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <aside style={panel}>
            <h2 style={sectionTitle}>Recent Activity</h2>

            {notifications.length === 0 ? (
              <p style={empty}>No activity yet.</p>
            ) : (
              notifications.slice(0, 5).map((item) => (
                <div key={item.id} style={activity}>
                  <span style={activityIcon}>{item.icon || "🔔"}</span>
                  <div>
                    <p style={activityText}>{item.text}</p>
                    <small style={itemText}>{item.time}</small>
                  </div>
                </div>
              ))
            )}
          </aside>
            <div style={panel}>
  <h2 style={sectionTitle}>
    🚨 Reported Posts
  </h2>

  {reportedPosts.length === 0 ? (
    <p style={empty}>
      No reported posts.
    </p>
  ) : (
    reportedPosts.map((post) => (
      <div
        key={post.id}
        style={item}
      >
        <div>
          <h3>{post.title}</h3>

          <p style={itemText}>
            r/{post.community} • by u/
            {post.author || "anonymous"}
          </p>
        </div>

        <div style={actions}>
          <a
            href={`/post/${post.id}`}
            style={badge}
          >
            Review
          </a>

          <button
            style={deleteBtn}
            onClick={() =>
              removeReport(post.id)
            }
          >
            Remove
          </button>
        </div>
      </div>
    ))
  )}
</div>
        </div>
      </section>
    </main>
  );
}

function Stat({ title, value, icon }) {
  return (
    <div style={stat}>
      <div style={statIcon}>{icon}</div>
      <h2 style={statValue}>{value}</h2>
      <p style={statText}>{title}</p>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, rgba(249,115,22,.18), transparent 35%), radial-gradient(circle at bottom right, rgba(139,92,246,.18), transparent 35%), #070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "55px 24px",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  gap: 20,
  flexWrap: "wrap",
  alignItems: "center",
  marginBottom: 34,
};

const title = {
  fontSize: 56,
  fontWeight: 900,
};

const sub = {
  color: "#94a3b8",
  marginTop: 10,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: 20,
};

const stat = {
  padding: 26,
  borderRadius: 28,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
};

const statIcon = {
  fontSize: 34,
};

const statValue = {
  fontSize: 44,
  marginTop: 14,
  color: "#fb923c",
};

const statText = {
  color: "#94a3b8",
  marginTop: 6,
};

const layout = {
  display: "grid",
  gridTemplateColumns: "1.5fr .9fr",
  gap: 22,
  marginTop: 34,
};

const panel = {
  padding: 30,
  borderRadius: 30,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
};

const sectionTitle = {
  fontSize: 30,
  marginBottom: 18,
};

const empty = {
  color: "#94a3b8",
};

const item = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 18,
  padding: 20,
  borderRadius: 22,
  background: "rgba(255,255,255,.06)",
  color: "white",
  marginBottom: 14,
};

const itemText = {
  color: "#94a3b8",
  marginTop: 6,
};

const actions = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
};

const badge = {
  padding: "9px 14px",
  borderRadius: 14,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: 900,
};

const deleteBtn = {
  padding: "9px 14px",
  borderRadius: 14,
  border: "1px solid rgba(248,113,113,.35)",
  background: "rgba(239,68,68,.14)",
  color: "#fca5a5",
  fontWeight: 900,
  cursor: "pointer",
};

const dangerBtn = {
  padding: "14px 20px",
  borderRadius: 16,
  border: "none",
  background: "linear-gradient(90deg,#dc2626,#ef4444)",
  color: "white",
  fontWeight: 900,
  cursor: "pointer",
};

const activity = {
  display: "flex",
  gap: 14,
  padding: 16,
  borderRadius: 18,
  background: "rgba(255,255,255,.06)",
  marginBottom: 12,
};

const activityIcon = {
  fontSize: 24,
};

const activityText = {
  color: "white",
  margin: 0,
};
