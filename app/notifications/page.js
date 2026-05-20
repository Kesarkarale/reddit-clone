"use client";

import { useEffect, useState } from "react";
 
export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("redditxNotifications")) || [];
    setNotifications(saved);
  }, []);

  function clearAll() {
    localStorage.removeItem("redditxNotifications");
    setNotifications([]);
  }

  return (
    <main style={page}>
 
      <section style={container}>
        <div style={header}>
          <div>
            <h1 style={title}>Notifications</h1>
            <p style={sub}>Stay updated with activity on RedditX.</p>
          </div>

          <button style={clearBtn} onClick={clearAll}>
            Clear All
          </button>
        </div>

        {notifications.length === 0 ? (
          <div style={empty}>
            <h2>No notifications yet</h2>
            <p>Upvote, save, or comment on posts to see activity here.</p>
          </div>
        ) : (
          <div style={list}>
            {notifications.map((item) => (
              <div key={item.id} style={card}>
                <div style={icon}>{item.icon || "🔔"}</div>

                <div style={{ flex: 1 }}>
                  <h2 style={cardTitle}>Activity Update</h2>
                  <p style={cardText}>{item.text}</p>
                </div>

                <span style={time}>{item.time}</span>
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

const empty = {
  padding: 40,
  borderRadius: 28,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
  textAlign: "center",
  color: "#94a3b8",
};
