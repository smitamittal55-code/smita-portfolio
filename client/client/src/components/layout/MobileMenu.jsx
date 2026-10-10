"use client";

import Link from "next/link";
import { X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-[#080811] md:hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <Link
          href="/"
          onClick={onClose}
          className="text-xl font-bold tracking-wide"
        >
          <span className="text-white">Smita</span>
          <span className="text-violet-500">.</span>
        </Link>

        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col px-6 py-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="border-b border-white/5 py-5 text-lg font-medium text-gray-300 transition hover:text-violet-400"
          >
            {link.name}
          </Link>
        ))}

        {/* CTA */}
        <Link
          href="/contact"
          onClick={onClose}
          className="mt-8 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3.5 text-center font-medium text-white shadow-lg shadow-violet-500/20"
        >
          Let's Talk
        </Link>
      </nav>
    </div>
  );
}