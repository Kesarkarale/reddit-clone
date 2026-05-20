"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  function applyTheme(isLight) {
    document.body.style.background = isLight ? "#f8fafc" : "#070b18";
    document.body.style.color = isLight ? "#0f172a" : "white";

    document.documentElement.style.setProperty(
      "--page-bg",
      isLight
        ? "#f8fafc"
        : "radial-gradient(circle at top left, rgba(255,69,0,0.25), transparent 35%), radial-gradient(circle at bottom right, rgba(124,58,237,0.25), transparent 35%), #070b18"
    );

    document.documentElement.style.setProperty(
      "--card-bg",
      isLight ? "#ffffff" : "rgba(255,255,255,0.07)"
    );

    document.documentElement.style.setProperty(
      "--text-main",
      isLight ? "#0f172a" : "#ffffff"
    );

    document.documentElement.style.setProperty(
      "--text-muted",
      isLight ? "#475569" : "#94a3b8"
    );

    document.documentElement.style.setProperty(
      "--nav-bg",
      isLight ? "#ffffff" : "rgba(7,11,24,0.88)"
    );

    document.documentElement.style.setProperty(
      "--border-color",
      isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"
    );
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("redditxTheme");
    const isLight = savedTheme === "light";
    setLight(isLight);
    applyTheme(isLight);
  }, []);

  function toggleTheme() {
    const nextLight = !light;
    localStorage.setItem("redditxTheme", nextLight ? "light" : "dark");
    setLight(nextLight);
    applyTheme(nextLight);
  }

  return (
    <button onClick={toggleTheme} style={toggleBtn}>
      <span
        style={{
          ...circle,
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
  border: "1px solid var(--border-color)",
  background: "rgba(255,255,255,.08)",
  cursor: "pointer",
  padding: 4,
  display: "flex",
  alignItems: "center",
};

const circle = {
  position: "absolute",
  left: 5,
  top: 5,
  width: 34,
  height: 34,
  borderRadius: "50%",
  background: "linear-gradient(135deg,#f97316,#db2777)",
  transition: "transform .3s ease",
};

const icons = {
  position: "relative",
  zIndex: 2,
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 8px",
};
