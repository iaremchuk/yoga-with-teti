import Link from "next/link";
import { playfair } from "@/lib/fonts/fonts";

export default function Footer() {
  return (
    <footer className="bg-[#C6A85C] text-white px-6 py-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-3">
        <div className="text-center">
          <p className={`text-base mb-2 ${playfair.className}`}>
            Connect with me
          </p>
          <Link
            href="https://www.instagram.com/yoga_teti?igsh=MXU5dzZqdXh3aXlu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/30 hover:bg-white hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1.5" />
            </svg>
          </Link>
        </div>
        <div className="w-12 h-px bg-white/30" />
        <p className="text-sm text-white/70">
          &copy; {new Date().getFullYear()} Yoga With Teti
        </p>
      </div>
    </footer>
  );
}
