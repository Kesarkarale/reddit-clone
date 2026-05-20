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
document.body.style.color = "#0f172a"; setLight(true);
 }
 }

return (
 <button
  onClick={toggleTheme}
  className="relative flex h-14 w-28 items-center rounded-full border border-white/10 bg-white/10 px-2 backdrop-blur-xl transition-all duration-500 hover:scale-105"
>
  <div
    className={`absolute top-1 h-11 w-11 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 shadow-lg transition-all duration-500 ${
      darkMode
        ? "translate-x-0"
        : "translate-x-14"
    }`}
  />

  <div className="relative z-10 flex w-full items-center justify-between px-1 text-xl">
    <span>🌙</span>
    <span>☀️</span>
  </div>
</button> 
); 
}

const btn = {
  position: "fixed",
  left: 28,
  bottom: 28,
  zIndex: 3000,
  padding: "14px 18px",
  borderRadius: 18,
  border: "1px solid rgba(255,255,255,.14)",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  fontWeight: 900,
  cursor: "pointer",
  boxShadow: "0 18px 45px rgba(219,39,119,.35)",
};
