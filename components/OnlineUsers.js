"use client";

import { useEffect, useState } from "react";

export default function OnlineUsers() {
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    function generateUsers() {
      const random =
        Math.floor(Math.random() * 4000) + 1200;

      setOnlineUsers(random);
    }

    generateUsers();

    const interval = setInterval(() => {
      generateUsers();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={wrap}>
      <style>{`
        @keyframes pulseDot {
          0% {
            transform: scale(1);
            opacity: 1;
          }

          50% {
            transform: scale(1.3);
            opacity: .6;
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

      <div style={dot}></div>

      <span style={text}>
        {onlineUsers.toLocaleString()} online
      </span>
    </div>
  );
}

const wrap = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "10px 16px",
  borderRadius: 999,
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.12)",
};

const dot = {
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: "#22c55e",
  animation: "pulseDot 1.4s infinite",
};

const text = {
  color: "#cbd5e1",
  fontWeight: "800",
  fontSize: 14,
};
