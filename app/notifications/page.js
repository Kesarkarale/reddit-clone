"use client";

import Navbar from "../../components/Navbar";

const notifications = [
  {
    id: 1,
    title: "New Comment",
    text: "alex commented on your post.",
    time: "2 min ago",
    icon: "💬",
  },
  {
    id: 2,
    title: "New Upvote",
    text: "Your post received 24 new upvotes.",
    time: "10 min ago",
    icon: "🔥",
  },
  {
    id: 3,
    title: "Community Invite",
    text: "You were invited to r/design.",
    time: "1 hour ago",
    icon: "🌐",
  },
];

export default function Notifications() {
  return (
    <main style={page}>
      <Navbar />

      <section style={container}>
        <div style={header}>
          <div>
            <h1 style={title}>Notifications</h1>
            <p style={sub}>
              Stay updated with activity on RedditX.
            </p>
          </div>

          <button style={clearBtn}>
            Clear All
          </button>
        </div>

        <div style={list}>
          {notifications.map((item) => (
            <div key={item.id} style={card}>
              <div style={icon}>
                {item.icon}
              </div>

              <div style={{ flex: 1 }}>
                <h2 style={cardTitle}>
                  {item.title}
                </h2>

                <p style={cardText}>
                  {item.text}
                </p>
              </div>

              <span style={time}>
                {item.time}
              </span>
            </div>
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
  maxWidth: 1000,
  margin: "0 auto",
  padding: "50px 24px",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 20,
  flexWrap: "wrap",
  marginBottom: 30,
};

const title = {
  fontSize: 54,
  fontWeight: 900,
};

const sub = {
  color: "#94a3b8",
  marginTop: 10,
};

const clearBtn = {
  padding: "14px 20px",
  borderRadius: 16,
  border: "none",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  fontWeight: 900,
  cursor: "pointer",
};

const list = {
  display: "grid",
  gap: 18,
};

const card = {
  display: "flex",
  alignItems: "center",
  gap: 18,
  padding: 24,
  borderRadius: 26,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
};

const icon = {
  width: 62,
  height: 62,
  borderRadius: 20,
  background: "linear-gradient(135deg,#f97316,#db2777)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 28,
};

const cardTitle = {
  fontSize: 22,
};

const cardText = {
  color: "#94a3b8",
  marginTop: 8,
};

const time = {
  color: "#64748b",
  fontSize: 14,
};
