"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Abhra's Story", href: "/#abhras-story", sectionId: "abhras-story" },
    { name: "Journey", href: "/#journey", sectionId: "journey" },
    { name: "Notable Awards", href: "/#awards", sectionId: "awards" },
    { name: "Services", href: "/#services", sectionId: "services" },
    { name: "Case Studies", href: "/casestudies", sectionId: "cases" },
  ];

  const [existingSections, setExistingSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const map: Record<string, boolean> = {};
    menuItems.forEach((item) => {
      if (item.sectionId) map[item.name] = !!document.getElementById(item.sectionId);
    });
    map["cta"] = !!document.getElementById("cta");
    setExistingSections(map);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      let found = false;
      menuItems.forEach((item) => {
        if (!item.sectionId || !existingSections[item.name]) return;
        const section = document.getElementById(item.sectionId);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) {
          setActiveSection(item.name);
          found = true;
        }
      });
      if (!found) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [existingSections]);

  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    } else {
      // Navigate to homepage with section
      window.location.href = `/${id === "cta" ? "#cta" : `#${id}`}`;
    }
    setIsOpen(false);
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
  onClick={() => window.location.href = "/"}
  className="font-bold tracking-wide cursor-pointer text-lg sm:text-lg md:text-lg lg:text-lg"
>
  <span className="md:hidden text-xl sm:text-xl">ABHRA</span> {/* Slightly larger on mobile */}
  <span className="hidden md:inline">ABHRA BANERJEE</span>   {/* Keep same on desktop */}
</button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleSmoothScroll(item.sectionId || "")}
              className={`relative transition duration-300 cursor-pointer ${
                activeSection === item.name ? "text-blue-400" : "text-white hover:text-blue-300"
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all duration-300 ${
                  activeSection === item.name ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* CTA + MOBILE MENU ICON */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Mobile CTA */}
<button
  onClick={() => handleSmoothScroll("cta")}
  className="md:hidden px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base bg-blue-600 rounded-lg flex items-center gap-2 sm:gap-3 cursor-pointer"
>
  <Phone className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
  Book a Session
</button>

{/* Desktop CTA */}
<button
  onClick={() => handleSmoothScroll("cta")}
  className="hidden md:flex items-center gap-3 px-5 py-2.5 text-base sm:text-sm bg-blue-600 rounded-xl cursor-pointer"
>
  <Phone className="w-5 h-5 animate-pulse" />
  Book a Session
</button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
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
        border-l border-white/10 px-4 sm:px-6 py-20 flex flex-col space-y-4 sm:space-y-6 transition-transform duration-500 z-50 pointer-events-auto
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleSmoothScroll(item.sectionId || "")}
            className={`text-base sm:text-lg font-medium py-2 px-3 rounded-lg transition cursor-pointer ${
              activeSection === item.name ? "bg-blue-600 text-white" : "text-white hover:bg-white/10"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
