import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b18] text-white overflow-hidden">
      <Navbar />

      <section className="relative px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ff450044,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed44,transparent_35%)]"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="inline-block mb-5 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-orange-300">
            🚀 Modern Reddit Clone MVP
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Create. Discuss.
            <span className="block bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Vote. Connect.
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            RedditX is a modern social media platform where users can create
            communities, share posts, vote, and comment.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/communities"
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 px-8 py-4 font-bold hover:scale-105 transition"
            >
              Explore Communities
            </a>

            <a
              href="/create-post"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold hover:bg-white/10 transition"
            >
              Create Post
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        {[
          ["🌐 Communities", "Create and browse topic-based communities."],
          ["🔥 Voting", "Upvote and downvote posts easily."],
          ["💬 Comments", "Join discussions with clean comment UI."],
        ].map((item) => (
          <div
            key={item[0]}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl hover:-translate-y-2 transition"
          >
            <h2 className="text-2xl font-bold mb-3">{item[0]}</h2>
            <p className="text-slate-400">{item[1]}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
