"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
 
export default function Register() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  
function handleRegister(e) {
  e.preventDefault();

  if (!username || !email || !password) {
    setType("error");
    setMessage("Please fill all fields.");
    return;
  }

  if (!email.includes("@")) {
    setType("error");
    setMessage("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    setType("error");
    setMessage("Password must be at least 6 characters.");
    return;
  }

  const existingUsers =
    JSON.parse(localStorage.getItem("redditxUsers")) || [];

  const alreadyExists = existingUsers.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );

  if (alreadyExists) {
    setType("error");
    setMessage("This email is already registered. Please login.");
    return;
  }

  const newUser = {
    username,
    email,
    password,
    joinedAt: new Date().toISOString(),
  };

  existingUsers.push(newUser);

  localStorage.setItem("redditxUsers", JSON.stringify(existingUsers));
  localStorage.setItem("redditxUser", JSON.stringify(newUser));

  setType("success");
  setMessage("Registration successful! Please login.");

  setTimeout(() => {
    router.push("/login");
  }, 1200);
}

  return (
    <main style={page}>
 
      <style>{`
        @keyframes floatCard {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glowMove {
          0%,100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, 20px) scale(1.08); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .register-input::placeholder { color: #64748b; }
      `}</style>

      <div style={glowOne}></div>
      <div style={glowTwo}></div>
      <div style={gridOverlay}></div>

      <section style={wrapper}>
        <div style={leftPanel}>
          <span style={badge}>✨ Join PostPilot</span>

          <h1 style={heroTitle}>
            Start your own
            <span style={gradientText}> community journey.</span>
          </h1>

          <p style={heroText}>
            Create an account to publish posts, join communities, vote on
            content, and participate in discussions.
          </p>

          <div style={miniStats}>
            <MiniCard value="Free" label="Create Account" />
            <MiniCard value="Fast" label="Demo Signup" />
            <MiniCard value="Secure" label="Local Demo" />
          </div>
        </div>

        <div style={card}>
          <div style={iconBox}>🧡</div>

          <h2 style={title}>Create Account</h2>
          <p style={subtitle}>Register to become part of  PostPilot</p>

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

          <form onSubmit={handleRegister} style={form}>
            <div>
              <label style={label}>Username</label>
              <input
                className="register-input"
                style={input}
                type="text"
                placeholder="Choose username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label style={label}>Email Address</label>
              <input
                className="register-input"
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
                  className="register-input"
                  style={passwordInput}
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 6 characters"
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

            <button type="submit" style={registerBtn}>
              Create  PostPilot Account
            </button>
          </form>

          <p style={bottomText}>
            Already have an account?{" "}
            <a href="/login" style={link}>
              Login
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

const registerBtn = {
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
