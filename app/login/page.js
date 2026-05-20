"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
 
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

 function handleLogin(e) {
  e.preventDefault();

  if (!email || !password) {
    setType("error");
    setMessage("Please enter email and password.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("redditxUsers")) || [];

  const matchedUser = users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password
  );

  if (!matchedUser) {
    setType("error");
    setMessage("Invalid email or password.");
    return;
  }

  localStorage.setItem("redditxUser", JSON.stringify(matchedUser));
  localStorage.setItem("isLoggedIn", "true");

  setType("success");
  setMessage("Login successful! Redirecting...");

  setTimeout(() => {
    router.push("/communities");
  }, 1000);
}
  return (
    <main style={page}>
 
      <style>{`
        @keyframes floatCard {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glowMove {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,-20px) scale(1.08); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .login-input::placeholder { color: #64748b; }
      `}</style>

      <div style={glowOne}></div>
      <div style={glowTwo}></div>
      <div style={gridOverlay}></div>

      <section style={wrapper}>
        <div style={leftPanel}>
          <span style={badge}>🔥 RedditX Community</span>

          <h1 style={heroTitle}>
            Welcome back to your
            <span style={gradientText}> discussion hub.</span>
          </h1>

          <p style={heroText}>
            Login to create communities, publish posts, vote on content and join
            conversations.
          </p>

          <div style={miniStats}>
            <MiniCard value="120+" label="Communities" />
            <MiniCard value="3.2k" label="Posts Today" />
            <MiniCard value="18k" label="Active Users" />
          </div>
        </div>

        <div style={card}>
          <div style={iconBox}>🚀</div>

          <h2 style={title}>Login</h2>
          <p style={subtitle}>Enter your details to continue</p>

          {message && (
            <div
              style={{
                ...toast,
                borderColor:
                  type === "success"
                    ? "rgba(34,197,94,0.45)"
                    : "rgba(244,63,94,0.45)",
                color: type === "success" ? "#86efac" : "#fda4af",
              }}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleLogin} style={form}>
            <div>
              <label style={label}>Email Address</label>
              <input
                className="login-input"
                style={input}
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label style={label}>Password</label>
              <div style={passwordBox}>
                <input
                  className="login-input"
                  style={passwordInput}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  style={showBtn}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" style={loginBtn}>
              Login to RedditX
            </button>
          </form>

          <p style={bottomText}>
            Don&apos;t have an account?{" "}
            <a href="/register" style={link}>
              Create account
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

function MiniCard({ value, label }) {
  return (
    <div style={miniCard}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "var(--page-bg)",
  color: "var(--text-main)",
  fontFamily: "Arial, sans-serif",
  position: "relative",
  overflow: "hidden",
};

const glowOne = {
  position: "absolute",
  width: "420px",
  height: "420px",
  top: "-140px",
  left: "-120px",
  background: "#f97316",
  filter: "blur(140px)",
  opacity: 0.18,
  animation: "glowMove 7s ease-in-out infinite",
};

const glowTwo = {
  position: "absolute",
  width: "460px",
  height: "460px",
  bottom: "-160px",
  right: "-130px",
  background: "#8b5cf6",
  filter: "blur(150px)",
  opacity: 0.18,
  animation: "glowMove 8s ease-in-out infinite",
};

const gridOverlay = {
  position: "absolute",
  inset: 0,
  backgroundImage:
    "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
  backgroundSize: "50px 50px",
  opacity: 0.18,
};

const wrapper = {
  position: "relative",
  zIndex: 5,
  minHeight: "85vh",
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "50px 24px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "36px",
  alignItems: "center",
};

const leftPanel = {
  animation: "fadeIn .8s ease both",
};

const badge = {
  display: "inline-block",
  padding: "10px 16px",
  borderRadius: "999px",
  background: "var(--card-bg)",
  border: "1px solid var(--border-color)",
  color: "#fb923c",
  fontWeight: "800",
  marginBottom: "22px",
};

const heroTitle = {
  fontSize: "clamp(42px, 6vw, 72px)",
  lineHeight: "1.05",
  fontWeight: "900",
  margin: 0,
  color: "var(--text-main)",
};

const gradientText = {
  display: "block",
  background: "linear-gradient(90deg,#fb923c,#ec4899,#8b5cf6)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const heroText = {
  maxWidth: "560px",
  color: "var(--text-muted)",
  fontSize: "19px",
  lineHeight: "1.7",
  marginTop: "22px",
};

const miniStats = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
  gap: "14px",
  marginTop: "32px",
  maxWidth: "560px",
};

const miniCard = {
  padding: "18px",
  borderRadius: "20px",
  background: "var(--card-bg)",
  border: "1px solid var(--border-color)",
  display: "grid",
  gap: "6px",
  color: "var(--text-main)",
};

const card = {
  width: "100%",
  maxWidth: "470px",
  margin: "0 auto",
  padding: "38px",
  borderRadius: "34px",
  background: "var(--card-bg)",
  border: "1px solid var(--border-color)",
  backdropFilter: "blur(22px)",
  boxShadow: "0 30px 90px rgba(236,72,153,0.14)",
  animation: "floatCard 5s ease-in-out infinite, fadeIn .9s ease both",
  color: "var(--text-main)",
};

const iconBox = {
  width: "76px",
  height: "76px",
  borderRadius: "24px",
  background: "linear-gradient(135deg,#f97316,#db2777)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "34px",
  margin: "0 auto 20px",
  boxShadow: "0 15px 35px rgba(219,39,119,0.3)",
};

const title = {
  textAlign: "center",
  fontSize: "42px",
  fontWeight: "900",
  margin: 0,
  color: "var(--text-main)",
};

const subtitle = {
  textAlign: "center",
  color: "var(--text-muted)",
  marginTop: "10px",
  marginBottom: "26px",
};

const toast = {
  padding: "14px",
  borderRadius: "16px",
  background: "var(--card-bg)",
  border: "1px solid var(--border-color)",
  color: "var(--text-main)",
  textAlign: "center",
  marginBottom: "20px",
  fontWeight: "700",
};

const form = {
  display: "grid",
  gap: "18px",
};

const label = {
  display: "block",
  marginBottom: "8px",
  color: "var(--text-muted)",
  fontSize: "14px",
  fontWeight: "700",
};

const input = {
  width: "100%",
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid var(--border-color)",
  background: "var(--card-bg)",
  color: "var(--text-main)",
  outline: "none",
  fontSize: "15px",
};

const passwordBox = {
  display: "flex",
  alignItems: "center",
  borderRadius: "16px",
  border: "1px solid var(--border-color)",
  background: "var(--card-bg)",
};

const passwordInput = {
  flex: 1,
  padding: "16px",
  background: "transparent",
  border: "none",
  outline: "none",
  color: "var(--text-main)",
  fontSize: "15px",
};

const showBtn = {
  border: "none",
  background: "transparent",
  color: "#fb7185",
  padding: "0 16px",
  cursor: "pointer",
  fontWeight: "900",
};

const loginBtn = {
  marginTop: "8px",
  padding: "16px",
  borderRadius: "18px",
  border: "none",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  fontSize: "16px",
  fontWeight: "900",
  cursor: "pointer",
  boxShadow: "0 16px 35px rgba(219,39,119,0.25)",
};

const bottomText = {
  textAlign: "center",
  color: "var(--text-muted)",
  marginTop: "24px",
};

const link = {
  color: "#fb7185",
  fontWeight: "900",
  textDecoration: "none",
};
