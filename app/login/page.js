import Navbar from "../../components/Navbar";

export default function Login() {
  return (
    <main style={page}>
      <Navbar />
      <section style={wrap}>
        <div style={card}>
          <h1 style={title}>Welcome Back</h1>
          <p style={sub}>Login to continue RedditX</p>

          <form style={form}>
            <input style={input} type="email" placeholder="Email address" />
            <input style={input} type="password" placeholder="Password" />
            <button type="button" style={button}>Login</button>
          </form>

          <p style={text}>
            Don&apos;t have an account? <a style={link} href="/register">Register</a>
          </p>
        </div>
      </section>
    </main>
  );
}

const page = { minHeight: "100vh", background: "radial-gradient(circle at top left, rgba(255,69,0,.25), transparent 35%), #070b18", color: "white", fontFamily: "Arial" };
const wrap = { minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 };
const card = { width: "100%", maxWidth: 430, padding: 34, borderRadius: 30, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.14)", boxShadow: "0 30px 80px rgba(236,72,153,.15)" };
const title = { fontSize: 42, fontWeight: 900, textAlign: "center", background: "linear-gradient(90deg,#fb923c,#ec4899)", WebkitBackgroundClip: "text", color: "transparent" };
const sub = { textAlign: "center", color: "#94a3b8", marginTop: 10, marginBottom: 28 };
const form = { display: "grid", gap: 16 };
const input = { padding: "15px 16px", borderRadius: 14, border: "1px solid rgba(255,255,255,.14)", background: "rgba(255,255,255,.08)", color: "white", outline: "none", fontSize: 16 };
const button = { padding: "15px", borderRadius: 14, border: 0, background: "linear-gradient(90deg,#f97316,#db2777)", color: "white", fontWeight: 900, fontSize: 16, cursor: "pointer" };
const text = { textAlign: "center", color: "#94a3b8", marginTop: 22 };
const link = { color: "#fb7185", fontWeight: 800 };
