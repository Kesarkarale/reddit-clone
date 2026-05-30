"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import SkeletonCard from "../components/SkeletonCard";
import AppLoader from "../components/AppLoader";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [sort, setSort] = useState("new");
  const [loading, setLoading] = useState(true);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(
        JSON.parse(
          localStorage.getItem("redditxPosts") || "[]"
        )
      );

      setCommunities(
        JSON.parse(
          localStorage.getItem("redditxCommunities") || "[]"
        )
      );

      setLoading(false);
      setAppLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const scoredPosts = posts.map((post) => {
    const voteScore = (post.votes || 0) * 2;
    const commentScore = (post.comments || 0) * 3;

    const recencyScore =
      Date.now() - post.id < 86400000
        ? 120
        : 20;

    return {
      ...post,
      trendingScore:
        voteScore +
        commentScore +
        recencyScore,
    };
  });

  const sortedPosts = [...scoredPosts].sort(
    (a, b) => {
      if (sort === "top") {
        return (
          b.trendingScore -
          a.trendingScore
        );
      }

      return b.id - a.id;
    }
  );

  return (
    <main style={page}>
      {appLoading && <AppLoader />}

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-8px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section style={hero}>
        <div style={heroInner}>
          <p style={badge}>
            🚀 Modern RedditX MVP
          </p>

          <h1 style={heroTitle}>
            Create. Discuss.
            <span style={gradientText}>
              Vote. Connect.
            </span>
          </h1>

          <p style={heroText}>
           RedditX is a modern social
            media platform where users
            can create communities,
            share posts, vote, comment
            and explore discussions.
          </p>

          <div style={heroButtons}>
            <a
              href="/communities"
              style={primaryBtn}
            >
              Explore Communities
            </a>

            <a
              href="/create-post"
              style={secondaryBtn}
            >
              Create Post
            </a>
          </div>
        </div>
      </section>

      <section style={statsGrid}>
        <StatCard
          title="Communities"
          value={communities.length + 3}
        />

        <StatCard
          title="Total Posts"
          value={posts.length}
        />

        <StatCard
          title="Active Users"
          value="18k"
        />

        <StatCard
          title="Comments"
          value="9.8k"
        />
      </section>

      <section style={featureGrid}>
        <FeatureCard
          icon="🌐"
          title="Communities"
          desc="Create and browse topic-based communities like tech, gaming and design."
        />

        <FeatureCard
          icon="🔥"
          title="Voting System"
          desc="Upvote and downvote posts to highlight popular discussions."
        />

        <FeatureCard
          icon="💬"
          title="Comments"
          desc="Join discussions with a clean and interactive comment system."
        />
      </section>

      <section style={twoColumn}>
        <div style={panel}>
          <div style={sectionHeader}>
            <h2 style={sectionTitle}>
              🔥 Trending Posts
            </h2>

            <select
              style={sortSelect}
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
            >
              <option value="new">
                Newest
              </option>

              <option value="top">
                Top Voted
              </option>
            </select>
          </div>

          {loading ? (
            <div style={skeletonGrid}>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : sortedPosts.length === 0 ? (
            <div style={emptyFeed}>
              <h3>No posts yet</h3>

              <p>
                Create your first post
                to see it here.
              </p>

              <a
                href="/create-post"
                style={primaryBtn}
              >
                Create Post
              </a>
            </div>
          ) : (
            sortedPosts
              .slice(0, 6)
              .map((post, index) => (
                <a
                  href={`/post/${post.id}`}
                  style={listItem}
                  key={post.id}
                >
                  <span style={rank}>
                    #{index + 1}
                  </span>

                  <div style={{ flex: 1 }}>
                    <h3 style={listTitle}>
                      {post.title}
                    </h3>

                    {post.trendingScore >
                      200 && (
                      <span style={hotBadge}>
                        HOT
                      </span>
                    )}

                    <p style={listText}>
                      r/
                      {post.community ||
                        "general"}{" "}
                      • 🔥{" "}
                      {post.votes || 1}{" "}
                      votes • ⭐{" "}
                      {
                        post.trendingScore
                      }
                    </p>
                  </div>
                </a>
              ))
          )}
        </div>

        <div style={panel}>
          <h2 style={sectionTitle}>
            🌟 Top Communities
          </h2>

          {communities.length === 0
            ? [
                "technology",
                "gaming",
                "webdesign",
              ].map((community) => (
                <a
                  href={`/r/${community}`}
                  style={communityItem}
                  key={community}
                >
                  <div style={smallIcon}>
                    r/
                  </div>

                  <div>
                    <h3 style={listTitle}>
                      r/{community}
                    </h3>

                    <p style={listText}>
                      Active discussions
                      every day
                    </p>
                  </div>
                </a>
              ))
            : communities
                .slice(0, 6)
                .map((community) => (
                  <a
                    href={`/r/${community.slug}`}
                    style={communityItem}
                    key={community.id}
                  >
                    <div style={smallIcon}>
                      {community.logo ? (
                        <img
                          src={
                            community.logo
                          }
                          alt="logo"
                          style={
                            communityLogo
                          }
                        />
                      ) : (
                        "r/"
                      )}
                    </div>

                    <div>
                      <h3 style={listTitle}>
                        r/
                        {
                          community.name
                        }
                      </h3>

                      <p style={listText}>
                        {community.members ||
                          1}{" "}
                        members
                      </p>
                    </div>
                  </a>
                ))}
        </div>
      </section>

      <section style={cta}>
        <h2 style={ctaTitle}>
          Ready to join RedditX?
        </h2>

        <p style={ctaText}>
          Register now and start
          creating communities, posts
          and discussions.
        </p>

        <a
          href="/register"
          style={primaryBtn}
        >
          Create Account
        </a>
      </section>
    </main>
  );
}

function StatCard({ title, value }) {
  return (
    <div style={statCard}>
      <h2 style={statValue}>
        {value}
      </h2>

      <p style={statTitle}>
        {title}
      </p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}) {
  return (
    <div style={featureCard}>
      <div
        style={{
          fontSize: "36px",
          marginBottom: "14px",
        }}
      >
        {icon}
      </div>

      <h2
        style={{
          fontSize: "26px",
          marginBottom: "12px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#94a3b8",
          lineHeight: "1.7",
        }}
      >
        {desc}
      </p>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "var(--page-bg)",
  color: "var(--text-main)",
  fontFamily: "Arial, sans-serif",
  overflowX: "hidden",
};

const hero = {
  padding: "90px 24px 60px",
  textAlign: "center",
};

const heroInner = {
  maxWidth: "950px",
  margin: "0 auto",
  animation: "fadeIn .8s ease both",
};

const badge = {
  display: "inline-block",
  padding: "10px 18px",
  borderRadius: "999px",
  border:
    "1px solid rgba(255,255,255,0.12)",
  background:
    "rgba(255,255,255,0.06)",
  color: "#fb923c",
  marginBottom: "24px",
  fontWeight: "700",
};

const heroTitle = {
  fontSize: "clamp(44px, 7vw, 84px)",
  lineHeight: "1.05",
  fontWeight: "900",
  marginBottom: "24px",
};

const gradientText = {
  display: "block",
  background:
    "linear-gradient(90deg,#fb923c,#ec4899,#8b5cf6)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const heroText = {
  maxWidth: "720px",
  margin: "0 auto",
  color: "#94a3b8",
  fontSize: "20px",
  lineHeight: "1.7",
};

const heroButtons = {
  marginTop: "38px",
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const statsGrid = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "10px 24px 30px",
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "18px",
};

const statCard = {
  padding: "24px",
  borderRadius: "24px",
  background:
    "rgba(255,255,255,0.06)",
  border:
    "1px solid rgba(255,255,255,0.12)",
  textAlign: "center",
};

const statValue = {
  fontSize: "38px",
  color: "#fb923c",
};

const statTitle = {
  color: "#94a3b8",
  marginTop: "8px",
};

const featureGrid = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "20px 24px 50px",
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "24px",
};

const featureCard = {
  border:
    "1px solid rgba(255,255,255,0.12)",
  background:
    "rgba(255,255,255,0.06)",
  backdropFilter: "blur(16px)",
  borderRadius: "28px",
  padding: "30px",
  boxShadow:
    "0 20px 60px rgba(236,72,153,0.08)",
  animation:
    "float 5s ease-in-out infinite",
};

const twoColumn = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 24px 70px",
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "24px",
};

const panel = {
  padding: "28px",
  borderRadius: "30px",
  background:
    "var(--card-bg)",
  border:
    "1px solid rgba(255,255,255,0.14)",
};

const sectionHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "14px",
  marginBottom: "20px",
  flexWrap: "wrap",
};

const sectionTitle = {
  fontSize: "30px",
  marginBottom: "20px",
};

const sortSelect = {
  padding: "12px 14px",
  borderRadius: "14px",
  border:
    "1px solid rgba(255,255,255,.14)",
  background:
    "rgba(255,255,255,.06)",
  color: "white",
  outline: "none",
};

const emptyFeed = {
  padding: "24px",
  borderRadius: "22px",
  background:
    "rgba(255,255,255,.06)",
  textAlign: "center",
  color: "#94a3b8",
};

const listItem = {
  display: "flex",
  gap: "16px",
  alignItems: "center",
  padding: "18px",
  borderRadius: "20px",
  background:
    "rgba(255,255,255,0.06)",
  color: "white",
  textDecoration: "none",
  marginBottom: "14px",
};

const rank = {
  color: "#fb923c",
  fontWeight: "900",
  fontSize: "22px",
};

const listTitle = {
  margin: 0,
  fontSize: "18px",
};

const listText = {
  color: "#94a3b8",
  marginTop: "6px",
};

const communityItem = {
  display: "flex",
  gap: "16px",
  alignItems: "center",
  padding: "18px",
  borderRadius: "20px",
  background:
    "rgba(255,255,255,0.06)",
  color: "white",
  textDecoration: "none",
  marginBottom: "14px",
};

const smallIcon = {
  width: "48px",
  height: "48px",
  borderRadius: "16px",
  background:
    "linear-gradient(90deg,#f97316,#db2777)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "900",
  overflow: "hidden",
};

const communityLogo = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const cta = {
  maxWidth: "900px",
  margin: "0 auto 80px",
  padding: "44px 24px",
  borderRadius: "34px",
  background:
    "linear-gradient(135deg,rgba(249,115,22,.18),rgba(219,39,119,.16))",
  border:
    "1px solid rgba(255,255,255,0.14)",
  textAlign: "center",
};

const ctaTitle = {
  fontSize: "40px",
  fontWeight: "900",
};

const ctaText = {
  color: "#94a3b8",
  margin: "14px auto 24px",
  maxWidth: "620px",
  lineHeight: "1.7",
};

const primaryBtn = {
  display: "inline-block",
  padding: "16px 28px",
  borderRadius: "18px",
  background:
    "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textDecoration: "none",
  fontWeight: "900",
};

const secondaryBtn = {
  display: "inline-block",
  padding: "16px 28px",
  borderRadius: "18px",
  border:
    "1px solid rgba(255,255,255,0.14)",
  background:
    "rgba(255,255,255,0.06)",
  color: "white",
  textDecoration: "none",
  fontWeight: "900",
};

const skeletonGrid = {
  display: "grid",
  gap: "16px",
};

const hotBadge = {
  display: "inline-block",
  marginTop: "10px",
  padding: "6px 12px",
  borderRadius: "999px",
  background:
    "linear-gradient(90deg,#f97316,#ef4444)",
  color: "white",
  fontSize: "12px",
  fontWeight: "900",
};
