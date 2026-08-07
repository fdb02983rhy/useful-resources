import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Useful Resources — Curated reference library",
  description:
    "A searchable library of useful tools, papers, courses, and field notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
