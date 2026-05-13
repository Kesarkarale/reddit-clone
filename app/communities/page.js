import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const communities = [
  {
    name: "technology",
    title: "Technology",
    members: "12.4k",
    desc: "Discuss latest tech, AI, gadgets and software.",
  },
  {
    name: "gaming",
    title: "Gaming",
    members: "8.7k",
    desc: "Share gaming news, clips, reviews and discussions.",
  },
  {
    name: "movies",
    title: "Movies",
    members: "5.2k",
    desc: "Talk about films, series and reviews.",
  },
];

export default function Communities() {
  return (
    <main className="min-h-screen bg-[#070b18] text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[260px_1fr] gap-6 px-6 py-8">
        <Sidebar />

        <section>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-slate-400 text-sm">Total Communities</p>
              <h2 className="text-4xl font-black mt-2 text-orange-300">
                120+
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-slate-400 text-sm">Posts Today</p>
              <h2 className="text-4xl font-black mt-2 text-pink-300">
                3.2k
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-slate-400 text-sm">Active Users</p>
              <h2 className="text-4xl font-black mt-2 text-purple-300">
                18k
              </h2>
            </div>
          </div>

          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-4xl font-black">
                Explore Communities
              </h1>

              <p className="text-slate-400 mt-2">
                Browse and join topic-based communities.
              </p>
            </div>

            <a
              href="/create-community"
              className="rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 px-5 py-3 font-bold hover:scale-105 transition"
            >
              + Create Community
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {communities.map((community) => (
              <a
                key={community.name}
                href={`/r/${community.name}`}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:-translate-y-2 transition"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center text-2xl font-black mb-5">
                  r/
                </div>

                <h2 className="text-2xl font-bold">
                  r/{community.title}
                </h2>

                <p className="text-orange-300 text-sm mt-1">
                  {community.members} members
                </p>

                <p className="text-slate-400 mt-4">
                  {community.desc}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-black mb-6">
              🔥 Trending Communities
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-orange-500/10 to-pink-600/10 p-6">
                <p className="text-orange-300 text-sm">
                  Trending #1
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  r/artificialintelligence
                </h3>

                <p className="text-slate-400 mt-3">
                  Discuss AI tools and machine learning.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-600/10 p-6">
                <p className="text-pink-300 text-sm">
                  Trending #2
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  r/webdesign
                </h3>

                <p className="text-slate-400 mt-3">
                  UI inspiration and animation discussions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <a
        href="/create-post"
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center text-3xl font-black shadow-2xl hover:scale-110 transition"
      >
        +
      </a>
    </main>
  );
}
