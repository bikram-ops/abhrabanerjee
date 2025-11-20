"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface CaseItem {
  slug: string;
  title: string;
  img: string;
  summary: string;
}

const caseItems: CaseItem[] = [
  {
    slug: "modern-trade-uplift",
    title: "Modern Trade Uplift",
    img: "/images/case-moderntrade.jpeg",
    summary:
      "Joint business planning + optimized planograms delivering 42% uplift in shelf share.",
  },
  {
    slug: "digital-enablement-aarkay",
    title: "Digital Enablement – Aarkay",
    img: "/images/case-aarkay.jpg",
    summary:
      "Zoho + AI automation boosted CRM efficiency and improved lead conversions by 68%.",
  },
  {
    slug: "d2c-phygital-cleanomatics",
    title: "D2C Phygital – Cleanomatics",
    img: "/images/case-cleanomatics.jpg",
    summary:
      "App-first CRM segmentation with hyper-personalized journeys and luxury collaborations.",
  },
  {
    slug: "b2b-abm-engine",
    title: "B2B ABM Engine",
    img: "/images/case-abm.jpg",
    summary:
      "Account-based funnels with webinar touchpoints, SDR handoff & pipeline intelligence.",
  },
];

export default function PremiumCaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // --- Drag / swipe handlers ---
  const startDrag = (x: number) => {
    setIsDragging(true);
    setStartX(x - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseDown = (e: React.MouseEvent) => startDrag(e.pageX);
  const handleTouchStart = (e: React.TouchEvent) => startDrag(e.touches[0].pageX);

  const handleMove = (x: number) => {
    if (!isDragging || !scrollRef.current) return;
    const walk = (x - startX) * 2; // drag speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.pageX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].pageX);

  const stopDrag = () => setIsDragging(false);
  const handleMouseUp = stopDrag;
  const handleMouseLeave = stopDrag;
  const handleTouchEnd = stopDrag;

  // --- Auto scroll ---
  useEffect(() => {
    if (!scrollRef.current) return;
    const scrollContainer = scrollRef.current;
    let animationFrame: number;

    const autoScroll = () => {
      if (!isDragging && !isHovered) {
        const speed = window.innerWidth < 100 ? 2 : 1; // faster on mobile
        scrollContainer.scrollLeft += speed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging, isHovered]);

  return (
    <section id="cases" className="relative py-14 md:py-14 bg-transparent overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 md:mb-14 text-center
                     text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
        Selected Case Studies
      </h2>

      {/* --- Case Study Slider --- */}
      <div
        ref={scrollRef}
        className="flex gap-6 md:gap-10 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          handleMouseLeave();
          setIsHovered(false);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ overflow: "hidden" }}
      >
        {[...caseItems, ...caseItems].map((item, i) => (
          <Link
            href={`/casestudies/${item.slug}`}
            key={i}
            className="min-w-[280px] md:min-w-[400px] select-none block"
          >
            <div
              className="relative h-[300px] md:h-[480px] rounded-3xl overflow-hidden 
                         border border-white/10 bg-[#101018]/80 backdrop-blur-xl
                         shadow-[0_0_50px_rgba(0,255,255,0.06)]
                         hover:shadow-[0_0_70px_rgba(0,255,255,0.18)]
                         transition-all duration-700 group/card"
            >
              <div className="absolute inset-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1800ms] group-hover/card:scale-110"
                />
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover/card:opacity-100
                           transition-all duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(115deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 40%)",
                }}
              />

              <div
                className="absolute bottom-0 inset-x-0 p-5 md:p-7
                           bg-gradient-to-t from-black/80 via-black/40 to-transparent
                           backdrop-blur-sm"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-snug mb-3 md:mb-5">
                  {item.summary}
                </p>

                <div
                  className="px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm rounded-lg inline-block
                             bg-gradient-to-r from-cyan-400/20 to-blue-400/20 
                             text-cyan-300 border border-cyan-400/30 
                             hover:from-cyan-400/30 hover:to-blue-400/30
                             transition-all backdrop-blur-md"
                >
                  View Full Case Study →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* --- SEE ALL CASE STUDIES BUTTON --- */}
      <div className="mt-6 md:mt-10 text-center">
        <Link
          href="/casestudies"
          className="inline-block px-5 md:px-6 py-2 md:py-3 text-sm md:text-lg font-semibold
                     rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-400/20
                     text-cyan-300 border border-cyan-400/30
                     hover:from-cyan-400/30 hover:to-blue-400/30
                     transition-all backdrop-blur-md"
        >
          See All Case Studies →
        </Link>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
