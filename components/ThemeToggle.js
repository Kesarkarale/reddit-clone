"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("redditxTheme");
    applyTheme(savedTheme === "light");
  }, []);

  function applyTheme(isLight) {
    if (isLight) {
      document.documentElement.style.setProperty("--rx-bg", "#f8fafc");
      document.documentElement.style.setProperty("--rx-text", "#0f172a");
      document.body.style.background = "#f8fafc";
      document.body.style.color = "#0f172a";
      setLight(true);
    } else {
      document.documentElement.style.setProperty("--rx-bg", "#070b18");
      document.documentElement.style.setProperty("--rx-text", "white");
      document.body.style.background = "#070b18";
      document.body.style.color = "white";
      setLight(false);
    }
  }

  function toggleTheme() {
    const nextLight = !light;

    localStorage.setItem("redditxTheme", nextLight ? "light" : "dark");
    applyTheme(nextLight);
    window.dispatchEvent(new Event("redditxThemeChange"));
  }

  return (
    <button onClick={toggleTheme} style={light ? lightBtn : darkBtn}>
      {light ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

const baseBtn = {
  position: "fixed",
  left: 28,
  bottom: 28,
  zIndex: 3000,
  padding: "14px 18px",
  borderRadius: 18,
  fontWeight: 900,
  cursor: "pointer",
};

const darkBtn = {
  ...baseBtn,
  border: "1px solid rgba(255,255,255,.14)",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  boxShadow: "0 18px 45px rgba(219,39,119,.35)",
};

const lightBtn = {
  ...baseBtn,
  border: "1px solid #cbd5e1",
  background: "#ffffff",
  color: "#0f172a",
  boxShadow: "0 18px 45px rgba(15,23,42,.14)",
};
