"use client";

import { useEffect, useState } from "react";
 import FloatingActions from "../../components/FloatingActions";
import SkeletonCard from "../../components/SkeletonCard";

const defaultPosts = [
  {
    id: 1,
    title: "Future of AI in Web Development",
    community: "technology",
    content: "AI tools are changing how developers build modern applications.",
    author: "kesar_dev",
    votes: 248,
    comments: 32,
  },
  {
    id: 2,
    title: "Best UI Trends in 2026",
    community: "webdesign",
    content: "Glassmorphism, gradients and animations are trending.",
    author: "design_master",
    votes: 124,
    comments: 18,
  },
];

const defaultCommunities = [
  {
    name: "technology",
    title: "Technology",
    desc: "Discuss latest tech, AI, gadgets and software.",
    members: "12.4k",
    logo: "",
  },
  {
    name: "gaming",
    title: "Gaming",
    desc: "Share gaming news, clips and reviews.",
    members: "8.7k",
    logo: "",
  },
  {
    name: "webdesign",
    title: "Web Design",
    desc: "UI inspiration, animations and design systems.",
    members: "5.2k",
    logo: "",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("new");
  const [posts, setPosts] = useState(defaultPosts);
  const [communities, setCommunities] = useState(defaultCommunities);
  const [recentSearches, setRecentSearches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const savedPosts =
        JSON.parse(localStorage.getItem("redditxPosts")) || [];

      const savedCommunities =
        JSON.parse(localStorage.getItem("redditxCommunities")) || [];

      const savedRecent =
        JSON.parse(localStorage.getItem("redditxRecentSearches")) || [];

      const formattedCommunities = savedCommunities.map((item) => ({
        name: item.slug,
        title: item.name,
        desc: item.description,
        members: item.members || "1",
        logo: item.logo || "",
      }));

      setPosts([...savedPosts, ...defaultPosts]);
      setCommunities([...formattedCommunities, ...defaultCommunities]);
      setRecentSearches(savedRecent);
      setLoading(false);
    }, 1200);
  }, []);

  function handleSearchChange(value) {
    setQuery(value);

    if (value.trim()) {
      const updated = [
        value,
        ...recentSearches.filter((item) => item !== value),
      ].slice(0, 6);

      setRecentSearches(updated);
      localStorage.setItem("redditxRecentSearches", JSON.stringify(updated));
    }
  }

  function clearRecentSearches() {
    localStorage.removeItem("redditxRecentSearches");
    setRecentSearches([]);
  }

 const postResults = posts
  .filter((post) =>
    `${post.title} ${post.community} ${post.content} ${
      post.author || ""
    }`
      .toLowerCase()
      .includes(query.toLowerCase())
  )
  .sort((a, b) => {
    if (sortBy === "top") {
      return (b.votes || 0) - (a.votes || 0);
    }

    return b.id - a.id;
  });

  const communityResults = communities.filter((community) =>
    `${community.title} ${community.name} ${community.desc}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const showPosts = filter === "all" || filter === "posts";
  const showCommunities = filter === "all" || filter === "communities";

  return (
    <main style={page}>
 
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .search-input::placeholder {
          color: #64748b;
        }
      `}</style>

      <section style={container}>
        <div style={hero}>
          <p style={badge}>🔍 PostPilot Search</p>

          <h1 style={title}>
            Search posts,
            <span style={gradientText}> communities & discussions.</span>
          </h1>

          <p style={sub}>
            Find trending posts, active communities and useful conversations
            across RedditX.
          </p>
        </div>

        <div style={searchPanel}>
          <input
            className="search-input"
            style={{
              ...search,
              ...(focused ? searchFocus : {}),
            }}
            placeholder="Search RedditX..."
            value={query}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => handleSearchChange(e.target.value)}
          />

          <div style={filters}>
            <button
              style={filter === "all" ? activeChip : chip}
              onClick={() => setFilter("all")}
            >
              All
            </button>

            <button
              style={filter === "posts" ? activeChip : chip}
              onClick={() => setFilter("posts")}
            >
              Posts
            </button>

            <button
              style={filter === "communities" ? activeChip : chip}
              onClick={() => setFilter("communities")}
            >
              Communities
            </button>
          </div>
                <div style={sortWrap}>
  <button
    style={sortBy === "new" ? activeChip : chip}
    onClick={() => setSortBy("new")}
  >
    Newest
  </button>

  <button
    style={sortBy === "top" ? activeChip : chip}
    onClick={() => setSortBy("top")}
  >
    Top Voted
  </button>
</div>
        </div>

        <div style={recentWrap}>
          <div style={recentHeader}>
            <h3 style={recentTitle}>Recent Searches</h3>

            {recentSearches.length > 0 && (
              <button style={clearRecent} onClick={clearRecentSearches}>
                Clear
              </button>
            )}
          </div>

          <div style={recentGrid}>
            {recentSearches.length === 0 ? (
              <p style={{ color: "#64748b" }}>No recent searches yet.</p>
            ) : (
              recentSearches.map((item, index) => (
                <button
                  key={index}
                  style={recentChip}
                  onClick={() => setQuery(item)}
                >
                  🔍 {item}
                </button>
              ))
            )}
          </div>
        </div>

        <div style={statsGrid}>
          <Stat title="Post Results" value={postResults.length} />
          <Stat title="Community Results" value={communityResults.length} />
          <Stat title="Search Mode" value={filter} />
        </div>

        {query === "" && (
          <div style={emptyBox}>
            <h2>Start searching PostPilot</h2>
            <p>
              Try searching for technology, AI, gaming, design, web development
              or community names.
            </p>
          </div>
        )}

        {query !== "" && (
          <>
            {showPosts && (
              <section style={section}>
                <h2 style={sectionTitle}>📝 Posts</h2>

                {loading ? (
                  <div style={skeletonGrid}>
                    <SkeletonCard />
                    <SkeletonCard />
                  </div>
                ) : postResults.length === 0 ? (
                  <p style={emptyText}>No posts found.</p>
                ) : (
                  <div style={list}>
                    {postResults.map((post) => (
                      <a key={post.id} href={`/post/${post.id}`} style={card}>
                        <p style={meta}>
                          r/{post.community || "general"} • by u/
                          {post.author || "user"}
                        </p>

                        <h2 style={cardTitle}>{post.title}</h2>

                        <p style={text}>{post.content}</p>

                        <div style={actions}>
                          <span>🔥 {post.votes || 1} votes</span>
                          <span>💬 {post.comments || 0} comments</span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </section>
            )}

            {showCommunities && (
              <section style={section}>
                <h2 style={sectionTitle}>🌐 Communities</h2>

                {communityResults.length === 0 ? (
                  <p style={emptyText}>No communities found.</p>
                ) : (
                  <div style={communityGrid}>
                    {communityResults.map((community) => (
                      <a
                        key={community.name}
                        href={`/r/${community.name}`}
                        style={communityCard}
                      >
                        <div style={icon}>
                          {community.logo ? (
                            <img
                              src={community.logo}
                              alt="logo"
                              style={communityLogo}
                            />
                          ) : (
                            "r/"
                          )}
                        </div>

                        <h2 style={cardTitle}>r/{community.title}</h2>

                        <p style={members}>{community.members} members</p>

                        <p style={text}>{community.desc}</p>

                        <span style={openText}>Open Community →</span>
                      </a>
                    ))}
                  </div>
                )}
              </section>
            )}
          </>
        )}
      </section>

       <FloatingActions />
    </main>
  );
}

function Stat({ title, value }) {
  return (
    <div style={statCard}>
      <p style={statTitle}>{title}</p>
      <h2 style={statValue}>{value}</h2>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, rgba(249,115,22,.18), transparent 35%), radial-gradient(circle at bottom right, rgba(139,92,246,.18), transparent 35%), #070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "60px 24px",
};

const hero = {
  animation: "fadeIn .7s ease both",
  marginBottom: 30,
};

const badge = {
  display: "inline-block",
  padding: "10px 16px",
  borderRadius: 999,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.12)",
  color: "#fb923c",
  fontWeight: 900,
  marginBottom: 18,
};

const title = {
  fontSize: "clamp(42px,6vw,68px)",
  lineHeight: 1.05,
  fontWeight: 900,
  margin: 0,
};

const gradientText = {
  display: "block",
  background: "linear-gradient(90deg,#f97316,#ec4899,#8b5cf6)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const sub = {
  color: "#94a3b8",
  marginTop: 18,
  maxWidth: 680,
  fontSize: 18,
  lineHeight: 1.7,
};

const searchPanel = {
  padding: 22,
  borderRadius: 28,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
  marginBottom: 24,
};

const search = {
  width: "100%",
  padding: "18px",
  borderRadius: 18,
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(255,255,255,.14)",
  color: "white",
  outline: "none",
  fontSize: 16,
};

const searchFocus = {
  border: "1px solid #f97316",
  boxShadow: "0 0 0 4px rgba(249,115,22,.12)",
};

const filters = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 16,
};

const chip = {
  padding: "11px 18px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,.14)",
  background: "rgba(255,255,255,.06)",
  color: "#cbd5e1",
  fontWeight: 900,
  cursor: "pointer",
};

const activeChip = {
  ...chip,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  border: "none",
};

const recentWrap = {
  marginBottom: 26,
};

const recentHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 14,
};

const recentTitle = {
  fontSize: 20,
};

const clearRecent = {
  border: "none",
  background: "transparent",
  color: "#fb7185",
  cursor: "pointer",
  fontWeight: "900",
};

const recentGrid = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
};

const recentChip = {
  padding: "10px 16px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,.12)",
  background: "rgba(255,255,255,.06)",
  color: "#cbd5e1",
  cursor: "pointer",
  fontWeight: "800",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: 16,
  marginBottom: 32,
};

const statCard = {
  padding: 20,
  borderRadius: 22,
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.12)",
};

const statTitle = {
  color: "#94a3b8",
  textTransform: "capitalize",
};

const statValue = {
  color: "#fb923c",
  marginTop: 8,
  fontSize: 30,
  textTransform: "capitalize",
};

const emptyBox = {
  padding: 36,
  borderRadius: 30,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
  color: "#94a3b8",
  textAlign: "center",
};

const section = {
  marginTop: 36,
};

const sectionTitle = {
  fontSize: 32,
  marginBottom: 18,
};

const emptyText = {
  color: "#94a3b8",
};

const skeletonGrid = {
  display: "grid",
  gap: 18,
};

const list = {
  display: "grid",
  gap: 18,
};

const card = {
  display: "block",
  padding: 26,
  borderRadius: 28,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
  color: "white",
  textDecoration: "none",
};

const meta = {
  color: "#fb923c",
  fontWeight: 900,
  marginBottom: 8,
};

const cardTitle = {
  fontSize: 26,
  margin: "8px 0",
};

const text = {
  color: "#94a3b8",
  lineHeight: 1.7,
};

const actions = {
  display: "flex",
  gap: 18,
  flexWrap: "wrap",
  color: "#cbd5e1",
  marginTop: 16,
  fontSize: 14,
};

const communityGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: 18,
};

const communityCard = {
  display: "block",
  padding: 26,
  borderRadius: 28,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.14)",
  color: "white",
  textDecoration: "none",
};

const icon = {
  width: 58,
  height: 58,
  borderRadius: 18,
  background: "linear-gradient(90deg,#f97316,#db2777)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  marginBottom: 16,
  overflow: "hidden",
};

const communityLogo = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const members = {
  color: "#fb923c",
  fontSize: 14,
  marginBottom: 10,
};

const openText = {
  display: "inline-block",
  color: "#fb7185",
  fontWeight: 900,
  marginTop: 16,
};
const sortWrap = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 16,
};
