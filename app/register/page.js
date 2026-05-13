"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

export default function Register() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleRegister(e) {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      setToast("Please fill all fields");
      return;
    }

    if (form.password.length < 6) {
      setToast("Password must be at least 6 characters");
      return;
    }

    localStorage.setItem("redditxUser", JSON.stringify(form));
    setToast("Registration successful! Redirecting to login...");

    setTimeout(() => {
      router.push("/login");
    }, 1200);
  }

  return (
    <main style={page}>
      <Navbar />

      {toast && <div style={toastBox}>{toast}</div>}

      <section style={wrap}>
        <div style={card}>
          <div style={badge}>🚀 Join RedditX</div>

          <h1 style={title}>Create Account</h1>
          <p style={sub}>Start posting, voting and joining communities.</p>

          <form onSubmit={handleRegister} style={formStyle}>
            <input
              style={input}
              name="username"
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />

            <input
              style={input}
              name="email"
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
            />

            <div style={passWrap}>
              <input
                style={{ ...input, paddingRight: 80 }}
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                style={showBtn}
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </div>

            <button type="submit" style={button}>
              Create Account
            </button>
          </form>

          <p style={text}>
            Already have an account?{" "}
            <a style={link} href="/login">
              Login
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top right, rgba(124,58,237,.35), transparent 32%), radial-gradient(circle at bottom left, rgba(255,69,0,.25), transparent 35%), #070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const wrap = {
  minHeight: "85vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 24,
};

const card = {
  width: "100%",
  maxWidth: 460,
  padding: 36,
  borderRadius: 34,
  background: "rgba(255,255,255,.075)",
  border: "1px solid rgba(255,255,255,.14)",
  boxShadow: "0 35px 90px rgba(124,58,237,.22)",
  backdropFilter: "blur(20px)",
};

const badge = {
  width: "fit-content",
  margin: "0 auto 18px",
  padding: "9px 16px",
  borderRadius: 999,
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(255,255,255,.12)",
  color: "#fbcfe8",
  fontWeight: 700,
};

const title = {
  fontSize: 44,
  fontWeight: 900,
  textAlign: "center",
  background: "linear-gradient(90deg,#a78bfa,#ec4899,#fb923c)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const sub = {
  textAlign: "center",
  color: "#94a3b8",
  marginTop: 12,
  marginBottom: 30,
  lineHeight: 1.6,
};

const formStyle = {
  display: "grid",
  gap: 16,
};

const input = {
  width: "100%",
  padding: "16px 17px",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,.14)",
  background: "rgba(255,255,255,.09)",
  color: "white",
  outline: "none",
  fontSize: 16,
};

const passWrap = {
  position: "relative",
};

const showBtn = {
  position: "absolute",
  right: 12,
  top: "50%",
  transform: "translateY(-50%)",
  border: 0,
  background: "transparent",
  color: "#fb7185",
  fontWeight: 800,
  cursor: "pointer",
};

const button = {
  padding: "16px",
  borderRadius: 16,
  border: 0,
  background: "linear-gradient(90deg,#8b5cf6,#db2777,#f97316)",
  color: "white",
  fontWeight: 900,
  fontSize: 16,
  cursor: "pointer",
  boxShadow: "0 15px 35px rgba(236,72,153,.28)",
};

const text = {
  textAlign: "center",
  color: "#94a3b8",
  marginTop: 24,
};

const link = {
  color: "#fb7185",
  fontWeight: 900,
};

const toastBox = {
  position: "fixed",
  top: 88,
  right: 24,
  zIndex: 100,
  padding: "14px 18px",
  borderRadius: 16,
  background: "rgba(15,23,42,.95)",
  border: "1px solid rgba(255,255,255,.14)",
  boxShadow: "0 15px 40px rgba(0,0,0,.35)",
};
