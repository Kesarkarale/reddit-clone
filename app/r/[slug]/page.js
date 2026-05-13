const posts = [
  {
    id: 1,
    title: "Future of AI in Web Development",
    author: "kesar_dev",
    votes: 248,
    comments: 32,
    content:
      "AI tools are changing how developers build modern applications.",
  },
  {
    id: 2,
    title: "Best UI Trends in 2026",
    author: "design_master",
    votes: 124,
    comments: 18,
    content:
      "Glassmorphism, gradients and modern animations are trending.",
  },
];

export default async function CommunityPage({ params }) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-[#070b18] text-white px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl mb-8">
          <div className="h-40 rounded-3xl bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600"></div>

          <div className="-mt-12">
            <div className="h-24 w-24 rounded-3xl bg-[#070b18] border-4 border-[#070b18] flex items-center justify-center text-3xl font-black">
              r/
            </div>

            <h1 className="text-5xl font-black mt-5">
              r/{slug}
            </h1>

            <p className="text-slate-400 mt-3">
              Welcome to the r/{slug} community.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {posts.map((post) => (
            <a
              key={post.id}
              href={`/post/${post.id}`}
              className="block rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:-translate-y-1 transition"
            >
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <button className="hover:text-orange-300">
                    ▲
                  </button>

                  <span className="font-bold text-orange-300">
                    {post.votes}
                  </span>

                  <button className="hover:text-purple-300">
                    ▼
                  </button>
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Posted by u/{post.author}
                  </p>

                  <h2 className="text-2xl font-bold mt-2">
                    {post.title}
                  </h2>

                  <p className="text-slate-400 mt-3">
                    {post.content}
                  </p>

                  <p className="text-sm text-slate-500 mt-4">
                    💬 {post.comments} comments
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
