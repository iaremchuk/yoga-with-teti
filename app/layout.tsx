import type { Metadata } from "next";
import { inter } from "@/lib/fonts/fonts";
import Header from "@/components/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Yoga with Teti",
  description: "Yoga classes, retreats and workshops",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
