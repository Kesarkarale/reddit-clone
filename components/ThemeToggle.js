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
 <button onClick={toggleTheme} style={btn}>
 {light ? "🌙 Dark" : "☀️ Light"} 
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
