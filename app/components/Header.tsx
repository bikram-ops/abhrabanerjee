"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Abhra's Story", href: "abhras-story" },
    { name: "Journey", href: "journey" },
    { name: "Notable Awards", href: "awards" },
    { name: "Services", href: "services" },
    { name: "Case Studies", href: "cases" },
  ];

  const [existingSections, setExistingSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const map: Record<string, boolean> = {};
    menuItems.forEach((item) => {
      map[item.href] = !!document.getElementById(item.href);
    });
    map["cta"] = !!document.getElementById("cta");
    setExistingSections(map);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      let found = false;
      menuItems.forEach((item) => {
        if (!existingSections[item.href]) return;
        const section = document.getElementById(item.href);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) {
          setActiveSection(item.href);
          found = true;
        }
      });
      if (!found) setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [existingSections]);

  const handleSmoothScroll = (id: string) => {
    if (!existingSections[id] && id !== "home") return;
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(id);
    if (!section) return;
    const offset = section.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-3 sm:py-4 flex items-center justify-between text-white">

        {/* LOGO */}
        <button
          onClick={() => handleSmoothScroll("home")}
          className="font-bold tracking-wide text-base sm:text-lg"
        >
          <span className="md:hidden">ABHRA</span>
          <span className="hidden md:inline">ABHRA BANERJEE</span>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm">
          {menuItems.map((item) => {
            const exists = existingSections[item.href];
            return (
              <button
                key={item.name}
                onClick={() => exists && handleSmoothScroll(item.href)}
                disabled={!exists}
                className={`relative transition duration-300 ${
                  exists ? "hover:text-blue-300" : "opacity-30 cursor-not-allowed"
                }`}
              >
                <span className={activeSection === item.href ? "text-blue-400" : "text-white"}>
                  {item.name}
                </span>
                {exists && (
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all duration-300 ${
                      activeSection === item.href ? "w-full" : "w-0"
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA + MOBILE MENU ICON */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile CTA */}
          <button
            onClick={() => existingSections["cta"] && handleSmoothScroll("cta")}
            className="md:hidden px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-blue-600 rounded-lg flex items-center gap-1 sm:gap-2"
          >
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
            Book a Session
          </button>

          {/* Desktop CTA */}
          <button
            onClick={() => existingSections["cta"] && handleSmoothScroll("cta")}
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 rounded-xl"
          >
            <Phone className="w-4 h-4 animate-pulse" />
            Book a Session
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* MOBILE BACKDROP */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 sm:w-72 bg-[#0b0b0f]/95 backdrop-blur-2xl 
          border-l border-white/10 px-4 sm:px-6 py-20 flex flex-col space-y-4 sm:space-y-6 transition-transform duration-500 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        {menuItems.map((item) => {
          const exists = existingSections[item.href];
          const isActive = activeSection === item.href;
          return (
            <button
              key={item.name}
              onClick={() => {
                if (exists) handleSmoothScroll(item.href);
                setIsOpen(false);
              }}
              disabled={!exists}
              className={`text-base sm:text-lg font-medium py-2 px-3 rounded-lg transition 
                ${exists ? (isActive ? "bg-blue-600 text-white" : "text-white hover:bg-white/10") : "opacity-30 cursor-not-allowed"}`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
