import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sofia Robles | Computer Science",
  description: "Personal portfolio of Sofia Robles, featuring software projects, technical skills, professional experience, and interests in technology. ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b p-4">
          <nav>
            <ul className="flex gap-4 justify-center">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/resume">Resume</Link></li>
            </ul>
          </nav>
        </header>
        {children}
        </body>
    </html>
  );
}
