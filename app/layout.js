import "./globals.css";

export const metadata = {
  title: {
    default: "RedditX • Modern Reddit Clone",
    template: "%s | RedditX",
  },
  description:
    "RedditX is a modern Reddit-style social media platform built with Next.js where users can create communities, publish posts, vote, comment and save discussions.",
  keywords: [
    "Reddit Clone",
    "Next.js Project",
    "React Project",
    "RedditX",
    "Social Media Platform",
    "Communities",
    "Discussion Platform",
    "College Project",
  ],
  authors: [{ name: "Kesar Karale" }],
  creator: "Kesar Karale",
  publisher: "Kesar Karale",
  applicationName: "RedditX",
  themeColor: "#070b18",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "RedditX • Modern Reddit Clone",
    description:
      "Create communities, share posts, vote, comment and join discussions.",
    url: "https://redditx.vercel.app",
    siteName: "RedditX",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "RedditX Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={body}>
        <div style={bgGlowOne}></div>
        <div style={bgGlowTwo}></div>
        {children}
      </body>
    </html>
  );
}

const body = {
  margin: 0,
  padding: 0,
  background: "#070b18",
  color: "white",
  fontFamily: "Arial, sans-serif",
  position: "relative",
  overflowX: "hidden",
};

const bgGlowOne = {
  position: "fixed",
  width: "420px",
  height: "420px",
  top: "-140px",
  left: "-120px",
  background: "#f97316",
  filter: "blur(140px)",
  opacity: 0.14,
  zIndex: -1,
};

const bgGlowTwo = {
  position: "fixed",
  width: "420px",
  height: "420px",
  bottom: "-140px",
  right: "-120px",
  background: "#8b5cf6",
  filter: "blur(140px)",
  opacity: 0.16,
  zIndex: -1,
};
