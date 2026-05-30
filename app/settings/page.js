"use client";

import { useEffect, useState } from "react";
 
export default function Settings() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("redditxUser"));

    if (savedUser) {
      setUser(savedUser);
      setUsername(savedUser.username || "");
      setBio(savedUser.bio || "");
    }
  }, []);

  function handleSave(e) {
    e.preventDefault();

    const updatedUser = {
      ...user,
      username,
      bio,
    };

    localStorage.setItem("redditxUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setMessage("Settings updated successfully!");

    setTimeout(() => setMessage(""), 2000);
  }

  return (
    <main style={page}>
 
      <section style={container}>
        <div style={header}>
          <h1 style={title}>Settings</h1>
          <p style={sub}>Manage your PostPilot profile and preferences.</p>
        </div>

        {message && <div style={toast}>✅ {message}</div>}

        <form onSubmit={handleSave} style={card}>
          <div style={avatar}>
            {username ? username.charAt(0).toUpperCase() : "U"}
          </div>

          <div>
            <label style={label}>Username</label>
            <input
              style={input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your username"
            />
          </div>

          <div>
            <label style={label}>Bio</label>
            <textarea
              style={textarea}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write something about yourself..."
            ></textarea>
          </div>

          <button style={button} type="submit">
            Save Changes
          </button>
        </form>
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
  maxWidth: 850,
  margin: "0 auto",
  padding: "60px 24px",
};

const header = {
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

const toast = {
  marginBottom: 20,
  padding: "14px 18px",
  borderRadius: 18,
  background: "rgba(34,197,94,.16)",
  border: "1px solid rgba(34,197,94,.35)",
  color: "#86efac",
  fontWeight: 900,
};

const card = {
  padding: 34,
  borderRadius: 32,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
  display: "grid",
  gap: 22,
};

const avatar = {
  width: 90,
  height: 90,
  borderRadius: 28,
  background: "linear-gradient(135deg,#f97316,#db2777)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 42,
  fontWeight: 900,
};

const label = {
  display: "block",
  marginBottom: 8,
  color: "#cbd5e1",
  fontWeight: 800,
};

const input = {
  width: "100%",
  padding: 16,
  borderRadius: 16,
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(255,255,255,.14)",
  color: "white",
  outline: "none",
};

const textarea = {
  width: "100%",
  minHeight: 140,
  padding: 16,
  borderRadius: 18,
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(255,255,255,.14)",
  color: "white",
  outline: "none",
  resize: "none",
};

const button = {
  padding: "15px 22px",
  borderRadius: 18,
  border: "none",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  fontWeight: 900,
  cursor: "pointer",
};
