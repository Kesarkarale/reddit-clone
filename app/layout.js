export const metadata = {
  title: "RedditX",
  description: "Modern Reddit Clone",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
