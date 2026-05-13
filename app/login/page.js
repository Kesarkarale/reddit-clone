"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("redditxUser"));

    if (!savedUser) {
      setMessage("No account found. Please register first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("isLoggedIn", "true");

      setMessage("Login successful!");

      setTimeout(() => {
        router.push("/communities");
      }, 1200);
    } else {
      setMessage("Invalid email or password");
    }
  }

  return (
    <main style={page}>
      <Navbar />

      <div style={bgGlow1}></div>
      <div style={bgGlow2}></div>

      <section style={wrap}>
        <div style={card}>
          <div style={logoBox}>🔥</div>

          <h1 style={title}>Welcome Back</h1>

          <p style={sub}>
            Login to continue your RedditX journey
          </p>

          {message && (
            <div style={toast}>
              {message}
            </div>
          )}

          <form onSubmit={handleLogin} style={form}>
            <div>
              <label style={label}>Email Address</label>

              <input
                style={input}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label style={label}>Password</label>

              <div style={passwordWrap}>
                <input
                  style={passwordInput}
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  style={showBtn}
                  onClick={() => setShow(!show)}
                >
                  {show ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" style={button}>
              Login
            </button>
          </form>

          <p style={text}>
            Don&apos;t have an account?{" "}
            <a href="/register" style={link}>
              Register
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
  overflow: "hidden",
  position: "relative",
};

const wrap = {
  minHeight: "85vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
  position: "relative",
  zIndex: 10,
};

const card = {
  width: "100%",
  maxWidth: "460px",
  padding: "38px",
  borderRadius: "32px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 25px 80px rgba(236,72,153,0.18)",
};

const logoBox = {
  width: "80px",
  height: "80px",
  margin: "0 auto 20px",
  borderRadius: "24px",
  background: "linear-gradient(135deg,#f97316,#db2777)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "34px",
};

const title = {
  textAlign: "center",
  fontSize: "44px",
  fontWeight: "900",
  background: "linear-gradient(90deg,#fb923c,#ec4899)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const sub = {
  textAlign: "center",
  color: "#94a3b8",
  marginTop: "10px",
  marginBottom: "30px",
  lineHeight: "1.6",
};

const toast = {
  padding: "14px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  marginBottom: "20px",
  textAlign: "center",
  color: "#fda4af",
  fontWeight: "600",
};

const form = {
  display: "grid",
  gap: "18px",
};

const label = {
  display: "block",
  marginBottom: "8px",
  color: "#cbd5e1",
  fontSize: "14px",
};

const input = {
  width: "100%",
  padding: "15px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  outline: "none",
  fontSize: "15px",
};

const passwordWrap = {
  display: "flex",
  alignItems: "center",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.08)",
};

const passwordInput = {
  flex: 1,
  padding: "15px",
  background: "transparent",
  border: "none",
  outline: "none",
  color: "white",
  fontSize: "15px",
};

const showBtn = {
  padding: "0 16px",
  border: "none",
  background: "transparent",
  color: "#fb7185",
  cursor: "pointer",
  fontWeight: "700",
};

const button = {
  marginTop: "10px",
  padding: "16px",
  borderRadius: "18px",
  border: "none",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  fontSize: "16px",
  fontWeight: "900",
  cursor: "pointer",
};

const text = {
  textAlign: "center",
  color: "#94a3b8",
  marginTop: "24px",
};

const link = {
  color: "#fb7185",
  fontWeight: "800",
};

const bgGlow1 = {
  position: "absolute",
  width: "400px",
  height: "400px",
  background: "#f97316",
  filter: "blur(140px)",
  opacity: 0.18,
  top: "-100px",
  left: "-120px",
};

const bgGlow2 = {
  position: "absolute",
  width: "400px",
  height: "400px",
  background: "#8b5cf6",
  filter: "blur(140px)",
  opacity: 0.18,
  bottom: "-120px",
  right: "-120px",
};
