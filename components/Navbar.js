export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b18]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="text-3xl font-black bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"
        >
          RedditX
        </a>

        <div className="hidden md:flex items-center gap-3">
          <a href="/communities" className="text-slate-300 hover:text-white">
            Communities
          </a>

          <a href="/create-post" className="text-slate-300 hover:text-white">
            Create Post
          </a>
        </div>
      </div>
    </nav>
  );
}
