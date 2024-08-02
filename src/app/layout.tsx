import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rsa Stores",
  description: "Website displaying posts from a free and reliable fake API",
  openGraph: {
    title: "Rsa Stores",
    type: "website",
    locale: "en_US",
    siteName: "Rsa Stores",
    url: "https://1732-rsa-stores.vercel.app/",
    description: "Website displaying posts from a free and reliable fake API",
    images:
      "https://aj1732.github.io/rsa-stores/public/favicon_io/android-chrome-192x192.png",
  },
  icons: {
    icon: ["/favicon_io/favicon.ico?v=4"],
    apple: ["/favicon_io/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon_io/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} content-grid font-satoshi`}>
        <header className="py-6">Header</header>
        {children}
        <footer className="py-20">Footer</footer>
      </body>
    </html>
  );
}
