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
    document.body.style.background = nextLight ? "#f8fafc" : "#070b18";
    document.body.style.color = nextLight ? "#0f172a" : "white";
    setLight(nextLight);
  }

  return (
    <button
      onClick={toggleTheme}
      title="Toggle theme"
      className="relative flex h-11 w-20 shrink-0 items-center rounded-full border border-white/15 bg-white/10 px-1.5 shadow-lg backdrop-blur-xl transition hover:scale-105"
    >
      <span
        className={`absolute top-1 h-9 w-9 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 shadow-md transition-all duration-300 ${
          light ? "translate-x-8" : "translate-x-0"
        }`}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-1 text-base">
        <span>🌙</span>
        <span>☀️</span>
      </span>
    </button>
  );
}
