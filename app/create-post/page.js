export default function CreatePost() {
  return (
    <main className="min-h-screen bg-[#070b18] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <h1 className="text-4xl font-black bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
          Create Post
        </h1>

        <p className="text-slate-400 mt-2 mb-8">
          Share your thoughts with the community.
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Post Title"
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none"
          />

          <textarea
            rows="8"
            placeholder="Write your post content..."
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none resize-none"
          ></textarea>

          <button
            type="button"
            className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 py-3 font-bold hover:scale-[1.02] transition"
          >
            Publish Post
          </button>
        </form>
      </div>
    </main>
  );
}
