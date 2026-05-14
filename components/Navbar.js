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
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  }

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Communities", href: "/communities" },
    { label: "Create", href: "/create-post" },
    { label: "Search", href: "/search" },
    { label: "Saved", href: "/saved" },
    { label: "Notifications", href: "/notifications" },
    { label: "Profile", href: "/profile" },
    { label: "Settings", href: "/settings" },
    { label: "Admin", href: "/admin" },
  ];

  return (
    <nav style={nav}>
      <a href="/" style={logo}>
        RedditX
      </a>

      <button style={menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>

      <div style={menuOpen ? mobileLinks : desktopLinks}>
        {navLinks.map((item) => (
          <a key={item.href} href={item.href} style={link}>
            {item.label}
          </a>
        ))}

        <div style={divider}></div>

        {user ? (
          <>
            <a href="/profile" style={userBox}>
              <div style={avatar}>
                {user.username ? user.username.charAt(0).toUpperCase() : "U"}
              </div>
              <div>
                <p style={username}>{user.username || "User"}</p>
                <span style={online}>Online</span>
              </div>
            </a>

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
  padding: "16px 24px",
  background: "rgba(7,11,24,0.88)",
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

const desktopLinks = {
  display: "flex",
  gap: "12px",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "flex-end",
};

const mobileLinks = {
  position: "absolute",
  top: 74,
  right: 18,
  left: 18,
  padding: 18,
  borderRadius: 24,
  background: "rgba(15,23,42,.97)",
  border: "1px solid rgba(255,255,255,.14)",
  boxShadow: "0 24px 80px rgba(0,0,0,.45)",
  display: "grid",
  gap: 12,
};

const link = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontWeight: "800",
  padding: "10px 12px",
  borderRadius: 14,
  background: "rgba(255,255,255,.04)",
};

const divider = {
  width: 1,
  height: 28,
  background: "rgba(255,255,255,.12)",
};

const outlineBtn = {
  padding: "10px 18px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  textDecoration: "none",
  fontWeight: "900",
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
  textDecoration: "none",
};

const avatar = {
  width: "38px",
  height: "38px",
  borderRadius: "12px",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "900",
  color: "white",
};

const username = {
  color: "white",
  fontWeight: "900",
  margin: 0,
};

const online = {
  color: "#4ade80",
  fontSize: 12,
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
