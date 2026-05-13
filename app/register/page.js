import Navbar from "../../components/Navbar";

export default function Register() {
  return (
    <main style={page}>
      <Navbar />
      <section style={wrap}>
        <div style={card}>
          <h1 style={title}>Create Account</h1>
          <p style={sub}>Join RedditX community today</p>

          <form style={form}>
            <input style={input} type="text" placeholder="Username" />
            <input style={input} type="email" placeholder="Email address" />
            <input style={input} type="password" placeholder="Password" />
            <button type="button" style={button}>Register</button>
          </form>

          <p style={text}>
            Already have an account? <a style={link} href="/login">Login</a>
          </p>
        </div>
      </section>
    </main>
  );
}

const page = { minHeight: "100vh", background: "radial-gradient(circle at top right, rgba(124,58,237,.25), transparent 35%), #070b18", color: "white", fontFamily: "Arial" };
const wrap = { minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 };
const card = { width: "100%", maxWidth: 450, padding: 34, borderRadius: 30, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.14)", boxShadow: "0 30px 80px rgba(124,58,237,.16)" };
const title = { fontSize: 42, fontWeight: 900, textAlign: "center", background: "linear-gradient(90deg,#a78bfa,#ec4899,#fb923c)", WebkitBackgroundClip: "text", color: "transparent" };
const sub = { textAlign: "center", color: "#94a3b8", marginTop: 10, marginBottom: 28 };
const form = { display: "grid", gap: 16 };
const input = { padding: "15px 16px", borderRadius: 14, border: "1px solid rgba(255,255,255,.14)", background: "rgba(255,255,255,.08)", color: "white", outline: "none", fontSize: 16 };
const button = { padding: "15px", borderRadius: 14, border: 0, background: "linear-gradient(90deg,#8b5cf6,#db2777)", color: "white", fontWeight: 900, fontSize: 16, cursor: "pointer" };
const text = { textAlign: "center", color: "#94a3b8", marginTop: 22 };
const link = { color: "#fb7185", fontWeight: 800 };
