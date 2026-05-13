import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(255,69,0,0.25), transparent 35%), radial-gradient(circle at bottom right, rgba(124,58,237,0.25), transparent 35%), #070b18",
        color: "white",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <Navbar />

      <section
        style={{
          padding: "90px 24px 60px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              display: "inline-block",
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              color: "#fb923c",
              marginBottom: "24px",
              fontWeight: "600",
            }}
          >
            🚀 Modern Reddit Clone MVP
          </p>

          <h1
            style={{
              fontSize: "clamp(44px, 7vw, 82px)",
              lineHeight: "1.05",
              fontWeight: "900",
              marginBottom: "24px",
            }}
          >
            Create. Discuss.
            <span
              style={{
                display: "block",
                background: "linear-gradient(90deg,#fb923c,#ec4899,#8b5cf6)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Vote. Connect.
            </span>
          </h1>

          <p
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              color: "#94a3b8",
              fontSize: "20px",
              lineHeight: "1.7",
            }}
          >
            RedditX is a modern social media platform where users can create
            communities, share posts, vote, and comment.
          </p>

          <div
            style={{
              marginTop: "38px",
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="/communities" style={primaryBtn}>
              Explore Communities
            </a>

            <a href="/create-post" style={secondaryBtn}>
              Create Post
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px 24px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        <FeatureCard
          icon="🌐"
          title="Communities"
          desc="Create and browse topic-based communities."
        />
        <FeatureCard
          icon="🔥"
          title="Voting"
          desc="Upvote and downvote posts easily."
        />
        <FeatureCard
          icon="💬"
          title="Comments"
          desc="Join discussions with clean comment UI."
        />
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(16px)",
        borderRadius: "28px",
        padding: "30px",
        boxShadow: "0 20px 60px rgba(236,72,153,0.08)",
      }}
    >
      <div style={{ fontSize: "34px", marginBottom: "14px" }}>{icon}</div>
      <h2 style={{ fontSize: "26px", marginBottom: "12px" }}>{title}</h2>
      <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>{desc}</p>
    </div>
  );
}

const primaryBtn = {
  display: "inline-block",
  padding: "16px 28px",
  borderRadius: "18px",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: "800",
};

const secondaryBtn = {
  display: "inline-block",
  padding: "16px 28px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  textDecoration: "none",
  fontWeight: "800",
};
