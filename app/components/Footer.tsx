"use client";

export default function Footer() {
  return (
    <footer className="bg-[#080a0f] py-16 border-t border-white/10 relative">

      {/* 🔥 Smooth Top Gradient */}
      <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

      {/* GRID WRAPPER (You missed this earlier) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* 🔹 Column 1 — Logo & Intro */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/logo.png" alt="Abhra Banerjee Logo" className="w-10 h-10" />
            <h4 className="text-white text-xl font-semibold">Abhra Banerjee</h4>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Founder, storyteller, and brand strategist - transforming brand journeys
            through performance, technology, and creative excellence.
          </p>
        </div>

        {/* 🔹 Column 2 — Quick Links */}
        <div>
          <h5 className="text-white font-semibold mb-4 text-lg">Quick Links</h5>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#journey" className="hover:text-white transition">Journey</a></li>
            <li><a href="#cases" className="hover:text-white transition">Case Studies</a></li>
            <li><a href="/#cta" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* 🔹 Column 3 — Cleanomatics Sub-Brands */}
        <div>
          <h5 className="text-white font-semibold mb-4 text-lg">Cleanomatics Group</h5>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a
                href="https://cmoservices.cleanomatics.com/"
                target="_blank"
                className="hover:text-white transition"
              >
                Cleanomatics (CMO Services)
              </a>
            </li>

            <li>
              <a
                href="https://www.cleanomaticstech.com"
                target="_blank"
                className="hover:text-white transition"
              >
                Cleanomatics Tech Solutions (MarTech & CRM)
              </a>
            </li>

            <li>
              <a
                href="https://cleanomatics.com"
                target="_blank"
                className="hover:text-white transition"
              >
                Cleanomatics Laundry
              </a>
            </li>
          </ul>
        </div>

        {/* 🔹 Column 4 — Social Icons */}
        <div>
          <h5 className="text-white font-semibold mb-4 text-lg">Connect</h5>

          <div className="flex gap-5 pt-4">

            {/* X (Twitter) */}
            <a
              href="https://x.com/abhrarajib/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition transform hover:scale-110"
              aria-label="X (Twitter)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M18.244 2H21.5l-7.48 8.54L22 22h-6.633l-5.197-6.517L4.348 22H1l7.993-9.13L2 2h6.753l4.713 5.903L18.244 2Zm-1.057 18h1.57L7.888 4h-1.7l11 16Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/abhra.banerjee/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E4405F] transition transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 4.25a5 5 0 1 1 0 10.001A5 5 0 0 1 12 7.75zm0 1.5a3.5 3.5 0 1 0 0 7.001A3.5 3.5 0 0 0 12 9.25zm4.63-3.38a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abhrarajib/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077B5] transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-6 h-6"
                fill="currentColor"
              >
                <path d="M100.28 448H7.4V148.9h92.88V448zM53.79 108.1C24.09 108.1 0 83.9 0 54.3 0 24.7 24.09.5 53.79.5s53.79 24.2 53.79 53.8c0 29.6-24.09 53.8-53.79 53.8zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 15.9-44 31.3-2.3 5.6-2.9 13.3-2.9 21.1V448h-92.8s1.2-261.1 0-288H267v40.8c12.3-19 34.4-46 83.7-46 61.1 0 106.7 39.9 106.7 125.6V448z" />
              </svg>
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="mt-16 text-center text-gray-500 text-sm border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Abhra Banerjee. All rights reserved. | Built by{" "}
        <a
          href="https://www.cleanomaticstech.com"
          target="_blank"
          className="text-white hover:text-blue-500 transition"
        >
          Cleanomatics Tech Solutions
        </a>
      </div>

    </footer>
  );
}
