"use client";

import { useState } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { playfair } from "@/fonts/fonts";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/events", label: "Events" },
  { href: "/offerings", label: "Offerings" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `block text-lg ${
      pathname.startsWith(path) && path !== "/"
        ? "underline underline-offset-4"
        : pathname === "/"
        ? path === "/"
          ? "underline underline-offset-4"
          : ""
        : ""
    }`;

  const handleClick = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="bg-white text-neutral-800 relative z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className={playfair.className}>
          <Link
            href="/"
            className="block text-2xl leading-tight text-center hover:opacity-80 transition"
          >
            <span className="block">Yoga</span>
            <span className="block">with Teti</span>
          </Link>
        </h1>
        <div className="hidden md:flex space-x-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:opacity-70 ${linkClass(link.href)}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl"
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-2xl"
            aria-label="Close menu"
            aria-expanded={open}
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(link.href)}
              onClick={handleClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
