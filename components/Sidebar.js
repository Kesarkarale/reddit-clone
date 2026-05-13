const links = [
  { name: "Home", href: "/", icon: "🏠" },
  { name: "Communities", href: "/communities", icon: "🌐" },
  { name: "Create Post", href: "/create-post", icon: "✍️" },
  { name: "Create Community", href: "/create-community", icon: "➕" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:block sticky top-20 h-[calc(100vh-90px)] rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-500">
        Menu
      </h3>

      <div className="space-y-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-300 hover:bg-white/10 hover:text-white transition"
          >
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
