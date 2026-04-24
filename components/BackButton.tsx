"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type BackButtonProps = {
  href: string;
  label?: string;
  className?: string;
};

export default function BackButton({
  href,
  label = "Back",
  className = "",
}: BackButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition mb-6 ${className}`}
    >
      <ArrowLeft size={16} />
      {label}
    </Link>
  );
}
