const comments = [
  {
    id: 1,
    user: "alex",
    text: "Amazing discussion!",
  },
  {
    id: 2,
    user: "john",
    text: "I really like this UI design.",
  },
];

export default async function PostPage({ params }) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#070b18] text-white px-6 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm text-slate-400">
            Posted in r/technology by u/kesar_dev
          </p>

          <h1 className="text-5xl font-black mt-4">
            Future of AI in Web Development
          </h1>

          <p className="text-slate-300 mt-6 leading-relaxed">
            AI tools are transforming frontend and backend development by
            improving productivity and reducing repetitive tasks.
          </p>

          <div className="flex gap-5 mt-8">
            <button className="rounded-xl bg-white/10 px-5 py-3 hover:bg-orange-500 transition">
              ▲ Upvote
            </button>

            <button className="rounded-xl bg-white/10 px-5 py-3 hover:bg-purple-500 transition">
              ▼ Downvote
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-black mb-6">
            Comments
          </h2>

          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-2xl bg-white/5 border border-white/10 p-5"
              >
                <p className="font-bold text-orange-300">
                  u/{comment.user}
                </p>

                <p className="text-slate-300 mt-2">
                  {comment.text}
                </p>
              </div>
            ))}
          </div>

          <textarea
            rows="4"
            placeholder="Write a comment..."
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none resize-none mt-6"
          ></textarea>

          <button className="mt-4 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 px-6 py-3 font-bold hover:scale-105 transition">
            Add Comment
          </button>
        </div>
      </div>
    </main>
  );
}
