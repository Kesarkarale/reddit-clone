export default function Register() {
  return (
    <main className="min-h-screen bg-[#070b18] text-white flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7c3aed44,transparent_35%),radial-gradient(circle_at_bottom_right,#ff450044,transparent_35%)] animate-pulse"></div>

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl">
        <h1 className="text-4xl font-black text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Create Account
        </h1>

        <p className="text-center text-slate-400 mt-2 mb-8">
          Join RedditX today
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:border-purple-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:border-purple-500"
          />

          <button
            type="button"
            className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 py-3 font-bold hover:scale-[1.02] transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Already have account?{" "}
          <a href="/login" className="text-pink-400">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}
