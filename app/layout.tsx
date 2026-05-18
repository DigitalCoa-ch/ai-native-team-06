import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team 06 — AI Native",
  description: "AI Native Team 06 project page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}