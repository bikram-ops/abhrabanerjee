"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Journey", href: "/#journey" },
    { name: "Notable Awards", href: "/#awards" },
    { name: "Services", href: "/#services" },
    { name: "Case Studies", href: "/#cases" },
    { name: "Contact", href: "/#cta" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-white">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-wide">
          ABHRA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm opacity-90">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group hover:text-blue-400 transition-colors duration-300"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile / CTA */}
        <div className="flex items-center gap-3">
          {/* Mobile Book a Session button */}
          <Link
            href="/#cta"
            className="px-3 py-2 text-sm rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition md:hidden"
          >
            Book a Session
          </Link>

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Book a Session */}
          <Link
            href="/#cta"
            className="hidden md:inline-block px-4 py-2 text-sm rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Book a Session
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md absolute w-full left-0 top-full border-t border-white/10 flex flex-col items-center justify-center gap-6 min-h-[calc(100vh-60px)] py-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium relative group hover:text-blue-400 transition-colors duration-300"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
