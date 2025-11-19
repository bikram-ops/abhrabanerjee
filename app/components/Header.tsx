"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Journey", href: "/#journey" },
    { name: "Notable Awards", href: "/#awards" },
    { name: "Services", href: "/#services" },
    { name: "Case Studies", href: "/#cases" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-white">

        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-wide">
          ABHRA
        </Link>

        {/* Desktop Nav */}
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

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Mobile CTA */}
          <Link
            href="/#cta"
            className="px-3 py-2 text-sm rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition md:hidden flex items-center gap-2"
          >
            <Phone className="w-4 h-4 animate-pulse" />
            Book a Session
          </Link>

          {/* Hamburger Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop CTA */}
          <Link
            href="/#cta"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <Phone className="w-4 h-4 animate-pulse" />
            Book a Session
          </Link>
        </div>
      </div>


      {/* Backdrop - Smooth Fade */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-72
          bg-[#0b0b0f]/95 backdrop-blur-2xl 
          border-l border-white/10
          flex flex-col space-y-6 px-6 py-20
          transition-transform duration-500
          ease-[cubic-bezier(.25,.8,.25,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          z-50 md:hidden
        `}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white hover:text-blue-400 transition"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Drawer Links */}
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium hover:text-blue-400 transition"
          >
            {item.name}
          </Link>
        ))}
      </div>

    </nav>
  );
}
