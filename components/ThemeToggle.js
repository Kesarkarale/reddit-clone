"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("redditxTheme");

    if (savedTheme === "light") {
      setLight(true);
      document.body.style.background = "#f8fafc";
      document.body.style.color = "#0f172a";
    } else {
      setLight(false);
      document.body.style.background = "#070b18";
      document.body.style.color = "white";
    }
  }, []);

  function toggleTheme() {
    if (light) {
      localStorage.setItem("redditxTheme", "dark");
      document.body.style.background = "#070b18";
      document.body.style.color = "white";
      setLight(false);
    } else {
      localStorage.setItem("redditxTheme", "light");
      document.body.style.background = "#f8fafc";
      document.body.style.color = "#0f172a";
      setLight(true);
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-7 left-7 z-[3000] relative flex h-14 w-28 items-center rounded-full border border-white/10 bg-white/10 px-2 backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:shadow-orange-500/20"
    >
      <div
        className={`absolute top-1 h-11 w-11 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 shadow-lg transition-all duration-500 ${
          light ? "translate-x-14" : "translate-x-0"
        }`}
      />

      <div className="relative z-10 flex w-full items-center justify-between px-1 text-xl">
        <span>🌙</span>
        <span>☀️</span>
      </div>
    </button>
  );
}
