import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReWear",
  description: "Your sustainable wardrobe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Simple Navigation */}
        <nav className="w-full border-b p-4 flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/wardrobe">Wardrobe</Link>
          <Link href="/add-item">Add Item</Link>
        </nav>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
