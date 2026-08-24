import React, { useEffect, useRef, useState, useCallback } from "react";
import { ArrowUp, ChevronDown } from "lucide-react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    setIsMobile(mq.matches);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
};

const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(
    typeof window !== "undefined"
      ? window.innerWidth >= 768 && window.innerWidth < 1024
      : false
  );
  useEffect(() => {
    const mqMin = window.matchMedia("(min-width: 768px)");
    const mqMax = window.matchMedia("(max-width: 1023px)");
    const handler = () => setIsTablet(mqMin.matches && mqMax.matches);
    handler();
    mqMin.addEventListener("change", handler);
    mqMax.addEventListener("change", handler);
    return () => {
      mqMin.removeEventListener("change", handler);
      mqMax.removeEventListener("change", handler);
    };
  }, []);
  return isTablet;
};

const corePillars = [
  {
    num: "01",
    title: "Design",
    subtitle:
      "Architecture and specialist design coordinated as one system — from first sketch to approval.",
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRYEf2Kb9Xn4qNj4O3jH5NQgNppcPtd7gGbJrG4fgwYl5CK0FhYUwXTQ20o8eTzQkBFlbzuoQFvnLZPeV0",
  },
  {
    num: "02",
    title: "Build",
    subtitle:
      "Construction, fit-out and delivery executed across varied structural systems with rigorous supervision.",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQFqBSF4FthDSM5VVzagfCoQGjo6yAWYg_PAWF2coupudcqSDGEgEk8FToVyTjJfFDdb0DGxWFTK5RbSsw",
  },
  {
    num: "03",
    title: "Supply",
    subtitle:
      "Material and product sourcing connected directly to project delivery — local and imported.",
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRnTiB1hOwOwgAtod3DPl8wEeRMjHbsTBjq2zsAZfcTdvkwt7vGfL5Ruk_0c3s9oNBXW92LBwB_bvAC8NA",
  },
];

const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => Math.min(Math.max(v, 0), 1);

const About = () => {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [overallProgress, setOverallProgress] = useState(0);
  const hasScrolledRef = useRef(false);

  // On mobile, delay animation start until user has scrolled past a threshold
  const canAnimate = isMobile ? hasScrolledRef.current : true;

  const recompute = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const distanceScrolled = -rect.top;
    const progress = total > 0 ? clamp01(distanceScrolled / total) : 0;
    setOverallProgress(progress);

    const scrolled = window.scrollY;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    setShowTopBtn(totalHeight > 0 && scrolled > totalHeight * 0.3);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!hasScrolledRef.current && window.scrollY > 80) {
        hasScrolledRef.current = true;
        recompute();
      }
      recompute();
    };
    recompute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recompute);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recompute);
    };
  }, [recompute]);

  const stageSize = 1 / corePillars.length;
  const getItemProgress = useCallback(
    (i) => {
      if (!canAnimate) return 0;
      const start = i * stageSize;
      const end = start + stageSize;
      return clamp01((overallProgress - start) / (end - start));
    },
    [overallProgress, stageSize, canAnimate]
  );

  // Responsive layout constants
  const STACK_TOP_STEP = isMobile ? 25 : isTablet ? 18 : 25;
  const ITEM_WIDTH = isMobile ? 85 : isTablet ? 60 : 48;
  const ITEM_HEIGHT = isMobile ? '30%' : '25%';

  // Responsive final staggered positions after scroll
  const FINAL_POSITIONS = isMobile
    ? [
        { left: 2, top: 12 },
        { left: 18, top: 40 },
        { left: 2, top: 70 },
      ]
    : isTablet
    ? [
        { left: 3, top: 30 },
        { left: 35, top: 58 },
        { left: 3, top: 86 },
      ]
    : [
        { left: 5, top: 32 },
        { left: 50, top: 62 },
        { left: 5, top: 92 },
      ];

  return (
    <>
      <style>{`
        html, body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        html::-webkit-scrollbar, body::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <section className="relative w-full border-t border-gray-100">
        <div className="absolute inset-0 z-0 bg-white/10" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">
          <div className="pt-32 sm:pt-14 md:pt-16 lg:pt-16 xl:pt-48 mb-2 sm:mb-12 md:mb-18 text-left flex justify-start pl-2 sm:pl-4 md:pl-8">
            <h2 className="font-mono text-xl px-0 sm:px-20 sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl ml-2 sm:ml-5 font-semibold leading-tight text-[#5b7fc7] max-w-4xl">
              From architecture and engineering to construction, fit-out and
              sourcing.
            </h2>
          </div>

          {/* ================= SCROLL-PINNED STACK ================= */}
          <div
            ref={sectionRef}
            style={{ height: `${corePillars.length * (isMobile ? 35 : isTablet ? 42 : 40)}vh` }}
            className="relative"
          >
            <div className={`sticky flex h-[100dvh] w-full items-start px-4 sm:px-8 md:px-12 lg:px-20 ${isMobile ? 'justify-center' : ''}`}>
              <div className={`relative w-full ${isMobile ? 'h-[90%] mt-[2vh]' : 'h-[85%] mt-[3vh] sm:mt-[4vh] lg:mt-[5vh]'}`}>
                {corePillars.map((item, i) => {
                  const progress = getItemProgress(i);

                  const top = lerp(
                    i * STACK_TOP_STEP,
                    FINAL_POSITIONS[i].top,
                    progress
                  );
                  const left = lerp(0, FINAL_POSITIONS[i].left, progress);
                  const width = lerp(100, ITEM_WIDTH, progress);

                  const isUnfolded = progress > 0.6;

                  return (
                    <div
                      key={item.title}
                      className={`absolute flex items-center transition-colors duration-300 ${
                        isUnfolded
                          ? "border-b border-gray-300/80"
                          : "border-b border-transparent"
                      }`}
                      style={{
                        top: `${top}%`,
                        left: `${left}%`,
                        width: `${width}%`,
                        height: ITEM_HEIGHT,
                        transition:
                          "top 0.18s cubic-bezier(0.25, 1, 0.5, 1), left 0.18s cubic-bezier(0.25, 1, 0.5, 1), width 0.18s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease",
                      }}
                    >
                      <div className="w-full px-2 sm:px-4 md:px-8 lg:px-16">
                        <div                                  className="w-full grid gap-3 sm:gap-4 md:gap-6 lg:gap-12 xl:gap-16 items-center transition-all duration-500"
                          style={{
                            gridTemplateColumns: isUnfolded
                              ? "1fr"
                              : "40% 1fr",
                          }}
                        >
                          {/* Title & Subtitle Container */}
                          <div className="flex flex-col justify-center">
                            <h3 className="font-mono text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium tracking-tight text-[#1c1c1c] whitespace-nowrap m-0">
                              {item.title}
                            </h3>

                            {/* Subtitle - Always visible under title after scroll */}
                            {isUnfolded && (
                              <p
                                className="font-mono text-[10px] sm:text-xs md:text-sm lg:text-base font-medium leading-relaxed text-gray-800 text-left max-w-md w-full mt-1 sm:mt-2 pb-1 sm:pb-2"
                                style={{
                                  opacity: 1,
                                  maxHeight: "150px",
                                  overflow: "hidden",
                                  transition:
                                    "opacity 0.4s ease, max-height 0.4s ease",
                                }}
                              >
                                {item.subtitle}
                              </p>
                            )}
                          </div>

                          {/* Image Beside Title - Shows before scroll */}
                          {!isUnfolded && (
                            <div className="w-full flex items-center justify-start overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="h-28 sm:h-28 md:h-32 lg:h-32 xl:h-36 w-auto object-cover rounded-md shadow-sm border border-gray-100 transition-opacity duration-300"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Detail Services Button */}
              <div
                className="absolute -bottom-10 sm:-bottom-28 md:-bottom-35 left-0 w-full flex justify-center"
                style={{
                  opacity: overallProgress >= 0.95 ? 1 : 0,
                  transform: `translateY(${
                    overallProgress >= 0.95 ? 0 : 20
                  }px)`,
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  pointerEvents: overallProgress >= 0.95 ? "auto" : "none",
                }}
              >
                <a
                  href="#services"
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-3 text-xs sm:text-sm md:text-base font-bold tracking-[0.15em] sm:tracking-[0.2em] text-gray-900 uppercase font-mono bg-white/90 border-2 border-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
                >
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    Our Detail Services
                  </span>
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    <ChevronDown
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-y-1"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-[#5b7fc7] text-white shadow-md cursor-pointer ${
          showTopBtn ? "block" : "hidden"
        }`}
      >
        <ArrowUp size={14} />
      </button>
    </>
  );
};

export default About;