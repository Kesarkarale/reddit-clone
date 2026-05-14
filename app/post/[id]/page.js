"use client";

import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Toast from "../../../components/Toast";

export default function PostPage({ params }) {
  const postId = params.id;

  const [post, setPost] = useState(null);
  const [votes, setVotes] = useState(0);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [toast, setToast] = useState("");
  const [toastType, setToastType] = useState("success");

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("redditxPosts")) || [];
    const foundPost = savedPosts.find((p) => String(p.id) === String(postId));

    if (foundPost) {
      setPost(foundPost);
      setVotes(foundPost.votes || 1);
    } else {
      const demoPost = {
        id: postId,
        title: "Future of AI in Web Development",
        community: "technology",
        author: "kesar_dev",
        votes: 248,
        content:
          "AI tools are transforming frontend and backend development by improving productivity and reducing repetitive tasks.",
      };

      setPost(demoPost);
      setVotes(248);
    }

    const savedComments =
      JSON.parse(localStorage.getItem(`redditxComments_${postId}`)) || [];

    if (savedComments.length > 0) {
      setComments(savedComments);
    } else {
      setComments([
        { id: 1, user: "alex", text: "This discussion is really useful!" },
        {
          id: 2,
          user: "design_master",
          text: "The UI looks clean and professional.",
        },
      ]);
    }
  }, [postId]);

  function showToast(message, type = "success") {
    setToastType(type);
    setToast(message);
    setTimeout(() => setToast(""), 2000);
  }

  function saveComments(updatedComments) {
    setComments(updatedComments);
    localStorage.setItem(
      `redditxComments_${postId}`,
      JSON.stringify(updatedComments)
    );
  }

  function handleComment(e) {
    e.preventDefault();

    if (!comment.trim()) {
      showToast("Please write a comment first.", "error");
      return;
    }

    const user = JSON.parse(localStorage.getItem("redditxUser")) || {};

    const newComment = {
      id: Date.now(),
      user: user.username || "anonymous",
      text: comment,
      createdAt: new Date().toISOString(),
    };

    const updatedComments = [newComment, ...comments];

    saveComments(updatedComments);

    setPost({
      ...post,
      comments: updatedComments.length,
    });

    setComment("");
    showToast("Comment added successfully!", "success");
  }

  function deleteComment(id) {
    const updatedComments = comments.filter((item) => item.id !== id);
    saveComments(updatedComments);

    setPost({
      ...post,
      comments: updatedComments.length,
    });

    showToast("Comment deleted.", "success");
  }

  function handleShare() {
    navigator.clipboard.writeText(window.location.href);
    showToast("Post link copied!", "success");
  }

  function handleSave() {
    const savedList =
      JSON.parse(localStorage.getItem("redditxSavedPosts")) || [];

    const alreadySaved = savedList.find(
      (item) => String(item.id) === String(post.id)
    );

    if (!alreadySaved) {
      savedList.unshift(post);
      localStorage.setItem("redditxSavedPosts", JSON.stringify(savedList));
      setSaved(true);
      showToast("Post saved successfully!", "success");
    } else {
      setSaved(true);
      showToast("Post already saved.", "error");
    }
  }

  if (!post) {
    return (
      <main style={page}>
        <Navbar />
        <p style={{ textAlign: "center", marginTop: 80 }}>Loading...</p>
      </main>
    );
  }

  return (
    <main style={page}>
      <Navbar />
      <Toast message={toast} type={toastType} />

      <style>{`
        @keyframes glowMove {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px,-15px) scale(1.08); }
          100% { transform: translate(0,0) scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .comment-input::placeholder {
          color: #64748b;
        }
      `}</style>

      <div style={glowOne}></div>
      <div style={glowTwo}></div>

      <section style={container}>
        <div style={layout}>
          <div>
            <article style={postCard}>
              <div style={voteBox}>
                <button
                  style={voteBtn}
                  onClick={() => {
                    setVotes(votes + 1);
                    showToast("Upvoted!", "success");
                  }}
                >
                  ▲
                </button>

                <strong style={voteCount}>{votes}</strong>

                <button
                  style={voteBtn}
                  onClick={() => {
                    setVotes(votes - 1);
                    showToast("Downvoted!", "success");
                  }}
                >
                  ▼
                </button>
              </div>

              <div>
                <p style={meta}>
                  Posted in r/{post.community || "technology"} by u/
                  {post.author || "you"} · just now
                </p>

                <h1 style={title}>{post.title}</h1>

                {post.imageUrl && (
                  <img src={post.imageUrl} alt="post" style={postImage} />
                )}

                <p style={content}>{post.content}</p>

                <div style={actions}>
                  <span>💬 {comments.length} Comments</span>

                  <button style={actionBtn} onClick={handleShare}>
                    🔗 Share
                  </button>

                  <button style={actionBtn} onClick={handleSave}>
                    {saved ? "✅ Saved" : "🔖 Save"}
                  </button>
                </div>
              </div>
            </article>

            <form onSubmit={handleComment} style={commentBox}>
              <h2 style={sectionTitle}>Add Comment</h2>

              <textarea
                className="comment-input"
                style={textarea}
                placeholder="What are your thoughts?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>

              <button type="submit" style={commentBtn}>
                Post Comment
              </button>
            </form>

            <div style={commentsWrap}>
              <h2 style={sectionTitle}>Comments</h2>

              {comments.map((item) => (
                <div key={item.id} style={commentCard}>
                  <div style={commentHeader}>
                    <strong style={commentUser}>u/{item.user}</strong>
                    <span style={commentTime}>
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleString()
                        : "just now"}
                    </span>
                  </div>

                  <p style={commentText}>{item.text}</p>

                  <div style={commentActions}>
                    <button style={smallBtn}>▲ Upvote</button>
                    <button style={smallBtn}>Reply</button>
                    <button
                      style={{ ...smallBtn, color: "#f87171" }}
                      onClick={() => deleteComment(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside style={aside}>
            <div style={sideCard}>
              <h3 style={sideTitle}>Post Stats</h3>
              <p style={sideLine}>🔥 {votes} votes</p>
              <p style={sideLine}>💬 {comments.length} comments</p>
              <p style={sideLine}>👁️ 1.8k views</p>
            </div>

            <div style={sideCard}>
              <h3 style={sideTitle}>Community</h3>
              <p style={sideText}>
                Visit r/{post.community || "technology"} for more posts and
                discussions like this.
              </p>

              <a href={`/r/${post.community || "technology"}`} style={visitBtn}>
                Visit Community
              </a>
            </div>

            <div style={sideCard}>
              <h3 style={sideTitle}>🔥 Trending Posts</h3>

              <div style={trendItem}>
                <h4 style={trendHeading}>Future of AI</h4>
                <p style={trendText}>2.4k votes</p>
              </div>

              <div style={trendItem}>
                <h4 style={trendHeading}>UI Design Trends</h4>
                <p style={trendText}>1.8k votes</p>
              </div>
            </div>
          </aside>
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
  width: "430px",
  height: "430px",
  bottom: "-160px",
  right: "-120px",
  background: "#8b5cf6",
  filter: "blur(150px)",
  opacity: 0.2,
  animation: "glowMove 8s ease-in-out infinite",
};

const container = {
  position: "relative",
  zIndex: 5,
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "40px 24px",
};

const layout = {
  display: "grid",
  gridTemplateColumns: "1fr 320px",
  gap: "24px",
};

const postCard = {
  display: "grid",
  gridTemplateColumns: "70px 1fr",
  gap: "20px",
  padding: "30px",
  borderRadius: "32px",
  background: "rgba(255,255,255,0.075)",
  border: "1px solid rgba(255,255,255,0.14)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 30px 90px rgba(236,72,153,0.14)",
  animation: "fadeIn .7s ease both",
};

const voteBox = {
  display: "grid",
  justifyItems: "center",
  alignSelf: "start",
  gap: "8px",
};

const voteBtn = {
  width: "42px",
  height: "42px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  cursor: "pointer",
};

const voteCount = {
  color: "#fb923c",
  fontSize: "18px",
};

const meta = {
  color: "#94a3b8",
  fontSize: "14px",
};

const title = {
  fontSize: "clamp(34px,5vw,56px)",
  lineHeight: "1.1",
  marginTop: "14px",
  fontWeight: "900",
};

const postImage = {
  width: "100%",
  borderRadius: "24px",
  marginTop: "24px",
  maxHeight: "420px",
  objectFit: "cover",
};

const content = {
  marginTop: "22px",
  color: "#cbd5e1",
  lineHeight: "1.8",
  fontSize: "18px",
};

const actions = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap",
  marginTop: "24px",
  color: "#94a3b8",
  fontSize: "14px",
};

const actionBtn = {
  border: "none",
  background: "transparent",
  color: "#cbd5e1",
  cursor: "pointer",
  fontWeight: "700",
};

const commentBox = {
  marginTop: "24px",
  padding: "28px",
  borderRadius: "30px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
};

const sectionTitle = {
  fontSize: "28px",
  fontWeight: "900",
  marginBottom: "18px",
};

const textarea = {
  width: "100%",
  minHeight: "130px",
  padding: "16px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  outline: "none",
  resize: "none",
  fontSize: "15px",
};

const commentBtn = {
  marginTop: "14px",
  padding: "14px 22px",
  borderRadius: "16px",
  border: "none",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  fontWeight: "900",
  cursor: "pointer",
};

const commentsWrap = {
  marginTop: "28px",
};

const commentCard = {
  padding: "22px",
  borderRadius: "24px",
  background: "rgba(255,255,255,0.065)",
  border: "1px solid rgba(255,255,255,0.12)",
  marginBottom: "14px",
};

const commentHeader = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  marginBottom: "10px",
};

const commentUser = {
  color: "#fb923c",
};

const commentTime = {
  color: "#64748b",
  fontSize: "14px",
};

const commentText = {
  color: "#cbd5e1",
  lineHeight: "1.7",
};

const commentActions = {
  display: "flex",
  gap: "12px",
  marginTop: "14px",
};

const smallBtn = {
  border: "none",
  background: "transparent",
  color: "#94a3b8",
  cursor: "pointer",
  fontWeight: "700",
};

const aside = {
  display: "grid",
  gap: "18px",
  alignSelf: "start",
};

const sideCard = {
  padding: "24px",
  borderRadius: "28px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
};

const sideTitle = {
  fontSize: "22px",
  fontWeight: "900",
  marginBottom: "14px",
};

const sideLine = {
  color: "#cbd5e1",
  marginBottom: "10px",
};

const sideText = {
  color: "#94a3b8",
  lineHeight: "1.7",
};

const visitBtn = {
  display: "block",
  marginTop: "18px",
  padding: "14px",
  borderRadius: "16px",
  background: "linear-gradient(90deg,#f97316,#db2777)",
  color: "white",
  textAlign: "center",
  textDecoration: "none",
  fontWeight: "900",
};

const trendItem = {
  padding: "16px",
  borderRadius: "18px",
  background: "rgba(255,255,255,.06)",
  marginTop: "12px",
};

const trendHeading = {
  marginBottom: "6px",
};

const trendText = {
  color: "#94a3b8",
};
