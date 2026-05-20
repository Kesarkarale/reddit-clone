"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("redditxTheme");
    setLight(savedTheme === "light");
  }, []);

  function toggleTheme() {
    const nextLight = !light;
    localStorage.setItem("redditxTheme", nextLight ? "light" : "dark");

    document.documentElement.classList.toggle("light-theme", nextLight);
    document.body.style.background = nextLight ? "#f8fafc" : "#070b18";
    document.body.style.color = nextLight ? "#0f172a" : "white";

    setLight(nextLight);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={light ? "Switch to dark mode" : "Switch to light mode"}
      style={toggleBtn}
    >
      <span
        style={{
          ...toggleCircle,
          transform: light ? "translateX(38px)" : "translateX(0px)",
        }}
      />

      <span style={icons}>
        <span>🌙</span>
        <span>☀️</span>
      </span>
    </button>
  );
}

const toggleBtn = {
  position: "relative",
  width: 86,
  height: 46,
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,.18)",
  background: "rgba(255,255,255,.08)",
  cursor: "pointer",
  padding: 4,
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
};

const toggleCircle = {
  position: "absolute",
  left: 5,
  top: 5,
  width: 34,
  height: 34,
  borderRadius: "50%",
  background: "linear-gradient(135deg,#f97316,#db2777)",
  transition: "transform .3s ease",
  boxShadow: "0 8px 18px rgba(249,115,22,.35)",
};

const icons = {
  position: "relative",
  zIndex: 2,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "0 8px",
  fontSize: 16,
};
