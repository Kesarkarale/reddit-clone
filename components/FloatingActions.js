"use client";

import { useState } from "react";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  const actions = [
    { label: "Create Post", href: "/create-post", icon: "✍️" },
    { label: "Create Community", href: "/create-community", icon: "🌐" },
    { label: "Search", href: "/search", icon: "🔍" },
    { label: "Notifications", href: "/notifications", icon: "🔔" },
  ];

  return (
    <div style={wrap}>
      {open && (
        <div style={panel}>
          {actions.map((item) => (
            <a key={item.href} href={item.href} style={action}>
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      )}

      <button style={button} onClick={() => setOpen(!open)}>
        {open ? "×" : "+"}
      </button>
    </div>
  );
}

const wrap = {
  position: "fixed",
  right: 28,
  bottom: 28,
  zIndex: 3000,
};

const panel = {
  marginBottom: 14,
  padding: 14,
  borderRadius: 24,
  background: "rgba(15,23,42,.96)",
  border: "1px solid rgba(255,255,255,.14)",
  display: "grid",
  gap: 10,
  boxShadow: "0 24px 70px rgba(0,0,0,.4)",
};

const action = {
  padding: "13px 16px",
  borderRadius: 16,
  background: "rgba(255,255,255,.07)",
  color: "white",
  textDecoration: "none",
  fontWeight: 900,
  display: "flex",
  gap: 10,
};

const button = {
  width: 64,
  height: 64,
  borderRadius: "50%",
  border: "none",
  background: "linear-gradient(135deg,#f97316,#db2777)",
  color: "white",
  fontSize: 34,
  fontWeight: 900,
  cursor: "pointer",
  boxShadow: "0 18px 45px rgba(219,39,119,.35)",
};
