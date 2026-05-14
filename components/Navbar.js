"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("redditxUser"));
    setUser(savedUser);
  }, []);

  function handleLogout() {
    localStorage.removeItem("redditxUser");
    window.location.href = "/login";
  }

  return (
    <nav style={nav}>
      <a href="/" style={logo}>
        RedditX
      </a>

      <button
        style={menuBtn}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div
        style={{
          ...links,
          ...(menuOpen ? mobileMenuOpen : {}),
        }}
      >
        <a href="/" style={link}>
          Home
        </a>

        <a href="/communities" style={link}>
          Communities
        </a>

        <a href="/create-post" style={link}>
          Create Post
        </a>

        <a href="/about" style={link}>
          About
        </a>

        <a href="/profile" style={link}>
          Profile
        </a>

        {user ? (
          <>
            <div style={userBox}>
              <div style={avatar}>
                {user.username
                  ? user.username.charAt(0).toUpperCase()
                  : "U"}
              </div>

              <span style={username}>
                {user.username || "User"}
              </span>
            </div>

            <button onClick={handleLogout} style={logoutBtn}>
              Logout
            </button>
          </>
        ) : (
          <>
            <a href="/login" style={outlineBtn}>
              Login
            </a>

            <a href="/register" style={primaryBtn}>
              Register
            </a>
          </>
        )}
      </div>
    </nav>
  );
}

const nav = {
  position: "sticky",
  top: 0,
  zIndex: 999,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 24px",
  background: "rgba(7,11,24,0.86)",
  backdropFilter: "blur(18px)",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};

const logo = {
  fontSize: "32px",
  fontWeight: "900",
  background: "linear-gradient(90deg,#fb923c,#ec4899,#8b5cf6)",
  WebkitBackgroundClip: "text",
  color: "transparent",
  textDecoration: "none",
};

const links = {
  display: "flex",
  gap: "16px",
  alignItems: "center",
  flexWrap: "wrap",
};

const mobileMenuOpen = {
  position: "absolute",
  top: 80,
  right: 20,
  background: "rgba(15,23,42,.96)",
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: "22px",
  padding: "18px",
  display: "grid",
  minWidth: "230px",
};

const link = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontWeight: "700",
  transition: ".3s",
};

const outlineBtn = {
  padding: "10px 18px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  textDecoration: "none",
  fontWeight: "800",
};

const primaryBtn = {
  padding: "10px 18px",
  borderRadius: "14px",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: "900",
};

const menuBtn = {
  display: "none",
  border: "none",
  background: "rgba(255,255,255,.08)",
  color: "white",
  width: "46px",
  height: "46px",
  borderRadius: "14px",
  fontSize: "22px",
  cursor: "pointer",
};

const userBox = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "8px 12px",
  borderRadius: "16px",
  background: "rgba(255,255,255,.06)",
};

const avatar = {
  width: "36px",
  height: "36px",
  borderRadius: "12px",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "900",
};

const username = {
  color: "white",
  fontWeight: "800",
};

const logoutBtn = {
  padding: "10px 18px",
  borderRadius: "14px",
  border: "none",
  background: "linear-gradient(90deg,#dc2626,#ef4444)",
  color: "white",
  fontWeight: "900",
  cursor: "pointer",
};
