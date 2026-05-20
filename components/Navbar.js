"use client";

import { useEffect, useState } from "react";
import OnlineUsers from "./OnlineUsers";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    function safeGet(key, fallback = null) {
      try {
        return JSON.parse(localStorage.getItem(key)) || fallback;
      } catch {
        localStorage.removeItem(key);
        return fallback;
      }
    }

    const savedUser = safeGet("redditxUser", null);

    const notifications = safeGet(
      "redditxNotifications",
      []
    );

    setUser(savedUser);

    setNotificationCount(
      notifications.length
    );
  }, []);

  function handleLogout() {
    localStorage.removeItem("redditxUser");
    localStorage.removeItem("isLoggedIn");

    window.location.href = "/login";
  }

  const navLinks = [
    { label: "🏠 Home", href: "/" },

    {
      label: "🌐 Communities",
      href: "/communities",
    },

    {
      label: "✍️ Create Post",
      href: "/create-post",
    },

    {
      label: "🔍 Search",
      href: "/search",
    },

    {
      label: "🔖 Saved Posts",
      href: "/saved",
    },

    {
      label:
        notificationCount > 0
          ? `🔔 Notifications (${notificationCount})`
          : "🔔 Notifications",

      href: "/notifications",
    },

    {
      label: "👤 Profile",
      href: "/profile",
    },

    {
      label: "⚙️ Settings",
      href: "/settings",
    },

    {
      label: "📊 Admin Dashboard",
      href: "/admin",
    },

    {
      label: "ℹ️ About",
      href: "/about",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }

          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

      <nav style={nav}>
        <div style={leftSide}>
          <button
            style={menuBtn}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <a href="/" style={logo}>
            RedditX
          </a>
        </div>

        {menuOpen && (
          <div style={sidebar}>
            <div style={sideHeader}>
              <h2 style={sideLogo}>
                RedditX
              </h2>

              <button
                style={closeBtn}
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                ✕
              </button>
            </div>

            <div style={sideLinks}>
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={sideLink}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <div style={topActions}>
          <OnlineUsers />

          <ThemeToggle />

          <a
            href="/notifications"
            style={notifyBtn}
          >
            🔔

            {notificationCount > 0 && (
              <span style={notifyBadge}>
                {notificationCount}
              </span>
            )}
          </a>

          <div style={rightSide}>
            {user ? (
              <>
                <a
                  href="/profile"
                  style={userBox}
                >
                  <div style={avatar}>
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt="avatar"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit:
                            "cover",

                          borderRadius:
                            "12px",
                        }}
                      />
                    ) : user?.username ? (
                      user.username
                        .charAt(0)
                        .toUpperCase()
                    ) : (
                      "U"
                    )}
                  </div>

                  <div>
                    <p style={username}>
                      {user.username ||
                        "User"}
                    </p>

                    <span style={online}>
                      Online
                    </span>
                  </div>
                </a>

                <button
                  onClick={handleLogout}
                  style={logoutBtn}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  style={outlineBtn}
                >
                  Login
                </a>

                <a
                  href="/register"
                  style={primaryBtn}
                >
                  Register
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

const nav = {
  position: "sticky",
  top: 0,
  zIndex: 999,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 28px",
  background:
    "rgba(7,11,24,0.88)",

  backdropFilter: "blur(18px)",

  borderBottom:
    "1px solid rgba(255,255,255,0.08)",
};

const leftSide = {
  display: "flex",
  alignItems: "center",
  gap: 16,
};

const logo = {
  fontSize: "34px",
  fontWeight: "900",

  background:
    "linear-gradient(90deg,#fb923c,#ec4899,#8b5cf6)",

  WebkitBackgroundClip: "text",

  color: "transparent",

  textDecoration: "none",
};

const menuBtn = {
  border:
    "1px solid rgba(255,255,255,.18)",

  background:
    "rgba(255,255,255,.07)",

  color: "white",

  width: "52px",

  height: "52px",

  borderRadius: "18px",

  fontSize: "24px",

  cursor: "pointer",
};

const sidebar = {
  position: "fixed",

  top: 0,

  left: 0,

  width: "310px",

  height: "100vh",

  padding: "22px",

  background:
    "rgba(15,23,42,.98)",

  borderRight:
    "1px solid rgba(255,255,255,.12)",

  boxShadow:
    "30px 0 90px rgba(0,0,0,.45)",

  zIndex: 2000,

  display: "flex",

  flexDirection: "column",

  animation: "slideIn .35s ease",
};

const sideHeader = {
  display: "flex",

  justifyContent: "space-between",

  alignItems: "center",

  marginBottom: 24,
};

const sideLogo = {
  margin: 0,

  fontSize: 30,

  background:
    "linear-gradient(90deg,#fb923c,#ec4899)",

  WebkitBackgroundClip: "text",

  color: "transparent",
};

const closeBtn = {
  width: 42,

  height: 42,

  borderRadius: 14,

  border:
    "1px solid rgba(255,255,255,.14)",

  background:
    "rgba(255,255,255,.07)",

  color: "white",

  cursor: "pointer",
};

const sideLinks = {
  display: "grid",

  gap: 12,
};

const sideLink = {
  padding: "14px 16px",

  borderRadius: 16,

  background:
    "rgba(255,255,255,.06)",

  border:
    "1px solid rgba(255,255,255,.08)",

  color: "#e2e8f0",

  textDecoration: "none",

  fontWeight: 900,

  transition: ".3s",
};

const topActions = {
  display: "flex",

  alignItems: "center",

  gap: 14,
};

const rightSide = {
  display: "flex",

  alignItems: "center",

  gap: 14,
};

const outlineBtn = {
  padding: "11px 18px",

  borderRadius: "16px",

  border:
    "1px solid rgba(255,255,255,0.15)",

  color: "white",

  textDecoration: "none",

  fontWeight: "900",
};

const primaryBtn = {
  padding: "11px 20px",

  borderRadius: "16px",

  background:
    "linear-gradient(90deg,#f97316,#db2777)",

  color: "white",

  textDecoration: "none",

  fontWeight: "900",
};

const userBox = {
  display: "flex",

  alignItems: "center",

  gap: "10px",

  padding: "8px 12px",

  borderRadius: "16px",

  background:
    "rgba(255,255,255,.06)",

  textDecoration: "none",
};

const avatar = {
  width: "38px",

  height: "38px",

  borderRadius: "12px",

  background:
    "linear-gradient(90deg,#f97316,#db2777)",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  fontWeight: "900",

  color: "white",

  overflow: "hidden",
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
  padding: "11px 18px",

  borderRadius: "16px",

  border: "none",

  background:
    "linear-gradient(90deg,#dc2626,#ef4444)",

  color: "white",

  fontWeight: "900",

  cursor: "pointer",
};

const notifyBtn = {
  position: "relative",

  width: 52,

  height: 52,

  borderRadius: 18,

  background:
    "rgba(255,255,255,.07)",

  border:
    "1px solid rgba(255,255,255,.14)",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  textDecoration: "none",

  fontSize: 22,
};

const notifyBadge = {
  position: "absolute",

  top: -6,

  right: -4,

  minWidth: 22,

  height: 22,

  borderRadius: 999,

  background: "#ef4444",

  color: "white",

  fontSize: 12,

  fontWeight: "900",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  padding: "0 6px",
};
