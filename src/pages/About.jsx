





















import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, ChevronDown, Play, Pause } from "lucide-react";
import archVideo from "../assets/arch.mp4";

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
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
];

const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => Math.min(Math.max(v, 0), 1);

const About = () => {
  const sectionRef = useRef(null);
  const videoSectionRef = useRef(null);
  
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [overallProgress, setOverallProgress] = useState(0);
  const [videoScale, setVideoScale] = useState(0.4);
  const hasScrolledRef = useRef(false);

  // On mobile, delay animation start until user has scrolled past a threshold
  const canAnimate = isMobile ? hasScrolledRef.current : true;

  const recompute = useCallback(() => {
    // 1. Stack section calculation
    const section = sectionRef.current;
    if (section) {
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const distanceScrolled = -rect.top;
      const progress = total > 0 ? clamp01(distanceScrolled / total) : 0;
      setOverallProgress(progress);
    }

    // 2. Video section scale calculation
    const videoSec = videoSectionRef.current;
    if (videoSec) {
      const rect = videoSec.getBoundingClientRect();
      const winHeight = window.innerHeight;
      
      // On mobile, reduce distance needed to reach full size (0.35 of screen height vs 0.85 on desktop)
      const maxDistance = isMobile ? winHeight * 0.35 : winHeight * 0.85;
      const initialScale = isMobile ? 0.45 : 0.3;

      const progress = clamp01((winHeight - rect.top) / maxDistance);
      
      const currentScale = lerp(initialScale, 1.0, progress);
      setVideoScale(currentScale);
    }

    // 3. Top button toggle
    const scrolled = window.scrollY;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    setShowTopBtn(totalHeight > 0 && scrolled > totalHeight * 0.3);
  }, [isMobile]);

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
                        <div className="w-full grid gap-3 sm:gap-4 md:gap-6 lg:gap-12 xl:gap-16 items-center transition-all duration-500"
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
                <Link
                  to="/services"
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAST RESPONSIVE VIDEO SECTION ================= */}
      <section 
        ref={videoSectionRef} 
        className="relative w-full bg-white mt-8 sm:mt-0 md:mt-0 py-4 sm:py-20 md:py-24 overflow-hidden"
      >
        <div className="mx-auto max-w-[1500px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">
          <div 
            className="relative w-full lg:max-w-5xl xl:max-w-4xl mx-auto aspect-video overflow-hidden rounded-2xl sm:rounded-2xl  sm:shadow-2xl bg-black transition-transform duration-150 ease-out origin-center"
            style={{
              transform: `scale(${videoScale})`,
              willChange: "transform",
            }}
          >
            <video
              src={archVideo}
              loop
              muted
              playsInline
              autoPlay
              className="w-full h-full object-cover"
            />
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

























// import React, { useState, useRef, useEffect } from "react";
// import { Play, Pause, ArrowUpRight } from "lucide-react";

// import aboutBg from "../assets/about.png";
// import architectureImg from "../assets/inspact.png";
// import landscapeImg from "../assets/renovation-remodeling.jpg";
// import interiorImg from "../assets/interior.png";
// import productImg from "../assets/renovation.jpg";
// import archVideo from "../assets/arch.mp4";

// // Portfolio Grid Categories
// const portfolioSections = [
//   {
//     title: "ARCHITECTURE",
//     image: architectureImg,
//   },
//   {
//     title: "RENOVATION REMODELING",
//     image: landscapeImg,
//   },
//   {
//     title: "INTERIOR ARCHITECTURE",
//     image: interiorImg,
//   },
//   {
//     title: "MATERIAL SUPPLY",
//     image: productImg,
//   },
// ];

// const About = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Section Refs
//   const videoRef = useRef(null);
//   const videoSectionRef = useRef(null);

//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     const section = videoSectionRef.current;
//     if (!video || !section) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             video.play().catch(() => { });
//           } else {
//             video.pause();
//           }
//         });
//       },
//       { threshold: 0.25 }
//     );

//     observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       className="relative z-10 w-full bg-white min-h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-8 md:px-12 lg:px-16
//         py-14 md:py-24 font-sans overflow-hidden"
//     >
//       <div className="relative z-10 w-full">
//         {/* ABOUT / STUDIO DNA DESCRIPTION */}
//         <div className="ml-auto max-w-5xl p-5 sm:p-12 text-right">
//           <span
//             className="text-base sm:text-lg md:text-2xl font-bold tracking-[0.1em] uppercase text-black border-b-2
//             border-white pb-2 font-mono"
//           >
//             ABOUT THE STUDIO
//           </span>

//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.6] text-gray-700 mt-6 md:mt-8 font-serif">
//             <span className="font-bold text-gray-950">Studio DNA</span> is an
//             architectural firm founded in 2026, driven by a belief that thoughtful
//             design can transform the way people live, work, and experience space.
//             Through proportion, light, materiality, and spatial clarity, we create
//             environments that feel timeless, functional, and deeply connected to their
//             purpose.
//           </p>
//         </div>

//         {/* ---------- PORTFOLIO SECTIONS ---------- */}
//         <div className="mt-14 md:mt-24 w-full flex flex-col md:flex-row px-4 sm:px-12 md:px-20 lg:px-40 py-10 md:py-20 items-center justify-between gap-10 md:gap-16">
//           {/* Left Title - Vertically Centered */}
//           <div className="w-full md:w-5/12 flex items-center justify-start">
//             <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold tracking-[0.08em] uppercase text-black font-mono text-left leading-tight -mt-5">
//               WHAT WE BUILD & DESIGN
//             </h2>
//           </div>

//           {/* Right-Aligned Minimal List */}
//           <div className="w-full md:w-6/12 flex flex-col border-t border-gray-300">
//             {portfolioSections.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="group flex items-center justify-between px-4 sm:px-6 py-4 md:py-5 border-b border-gray-300 cursor-pointer transition-all duration-300 hover:bg-[#5b7fc7]"
//               >
//                 <h3 className="text-base sm:text-lg md:text-xl text-gray-400 font-mono font-serif tracking-wide transition-all duration-300 group-hover:text-white group-hover:font-bold group-hover:tracking-widest">
//                   {item.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* OUTLINE ARCHITECTS ANNOUNCEMENT */}
//         <div className="mt-14 md:mt-24 p-10 sm:p-20 max-w-4xl text-left">
//           <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl leading-[1.6] text-gray-700 font-serif">
//             <span className="font-bold text-gray-950">Outline Architects</span>{" "}
//             is proudly presenting{" "}
//             <span className="font-bold text-gray-950">Studio DNA</span> — The
//             brainchild and inspirational partner to offer more exciting services to our valued clients.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;











































// // ________________MAIN______________
// import React, { useState, useRef, useEffect } from "react";
// import { Play, Pause, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

// import aboutBg from "../assets/about.png";
// import architectureImg from "../assets/inspact.png";
// import landscapeImg from "../assets/renovation-remodeling.jpg";
// import interiorImg from "../assets/interior.png";
// import productImg from "../assets/renovation.jpg";
// import archVideo from "../assets/arch.mp4";

// // Turn-Key Process Data
// const constructionProcess = [
//   {
//     num: "01",
//     title: "Space Analysis",
//     description:
//       "We start with nothing but ground. Soil, orientation, sun path, wind direction, neighbouring mass, access roads and local zoning are all surveyed so every later decision rests on facts, not guesses.",
//     points: [
//       "Site survey & soil check",
//       "Sun path + wind mapping",
//       "Zoning & legal limits",
//     ],
//   },
//   {
//     num: "02",
//     title: "Turning constraints into form",
//     description:
//       "Your brief becomes plans, sections and 3D massing. We test multiple layouts against your lifestyle or business flow until the proportions, circulation and daylight feel effortless.",
//     points: [
//       "Concept & massing studies",
//       "Floor plans & elevations",
//       "3D walkthrough review",
//     ],
//   },
//   {
//     num: "03",
//     title: "Air, light & comfort simulation",
//     description:
//       "Before a single brick is ordered we simulate how the building breathes — cross ventilation, daylight penetration, shading, acoustics and thermal performance — so the space stays comfortable year-round.",
//     points: [
//       "Airflow & ventilation study",
//       "Daylight + shading analysis",
//       "Thermal & acoustic comfort",
//     ],
//   },
//   {
//     num: "04",
//     title: "A budget that holds",
//     description:
//       "A transparent bill of quantities, item-by-item rates and a phase-wise cash-flow plan. You see exactly where every unit of budget goes — no hidden lines, no mid-project surprises.",
//     points: [
//       "Detailed BOQ",
//       "Phase-wise cash flow",
//       "Contingency planning",
//     ],
//   },
//   {
//     num: "05",
//     title: "One clear master timeline",
//     description:
//       "Design, cost and schedule are locked into a single approved package. You sign off once on a complete picture: drawings, finishes, milestones and delivery date.",
//     points: [
//       "Approved drawing set",
//       "Milestone schedule",
//       "Single-point approval",
//     ],
//   },
//   {
//     num: "06",
//     title: "Sourcing & procurement",
//     description:
//       "We buy on your behalf from vetted suppliers — steel, cement, stone, timber, glazing and fixtures — with quality testing, samples for approval and logistics handled end to end.",
//     points: [
//       "Vetted supplier network",
//       "Sample approval & QC",
//       "Delivery logistics",
//     ],
//   },
//   {
//     num: "07",
//     title: "Construction",
//     description:
//       "Foundation, frame, envelope, MEP roughing and finishing — executed by our supervised teams with weekly site reports, photo updates and strict safety and quality checkpoints.",
//     points: [
//       "Supervised site execution",
//       "Weekly progress reports",
//       "Stage-wise quality checks",
//     ],
//   },
//   {
//     num: "08",
//     title: "Client Customization",
//     description:
//       "Layout tweaks, finish swaps, joinery details or smart-home additions — we build in flexible decision windows so you can personalise without derailing cost or schedule.",
//     points: [
//       "Finish & material swaps",
//       "Custom joinery options",
//       "Cost-impact shown upfront",
//     ],
//   },
//   {
//     num: "09",
//     title: "Handover, fully finished",
//     description:
//       "Façade, landscape and lighting outside; furniture, fixtures and styling inside. We close out snag lists, hand over warranties and give you the keys to a space ready to live in.",
//     points: [
//       "Façade & landscape",
//       "FF&E and styling",
//       "Snag-free handover",
//     ],
//   },
// ];

// // Initial Services
// const initialServices = [
//   {
//     num: "01",
//     title: "Planning",
//     image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Strategic site and program analysis to inform the design process, ensuring optimal spatial and functional outcomes.",
//   },
//   {
//     num: "02",
//     title: "Feasibility Study",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Evaluating financial, regulatory, and spatial parameters to determine project viability before investment.",
//   },
//   {
//     num: "03",
//     title: "Site Analysis",
//     image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "In-depth contextual and environmental study to align building designs seamlessly with their surroundings.",
//   },
//   {
//     num: "04",
//     title: "Cost Estimating",
//     image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Detailed bill of quantities and financial forecasting to maintain budget integrity across phases.",
//   },
//   {
//     num: "05",
//     title: "Masterplans",
//     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Comprehensive long-term development strategies for large-scale residential, commercial, and mixed-use sites.",
//   },
// ];

// // Expanded items
// const extendedServices = [
//   {
//     num: "06",
//     title: "Space Planning",
//      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Optimizing interior layout and flow to maximize usability, circulation, and spatial experience.",
//   },
//   {
//     num: "07",
//     title: "Conceptual Design",
//     image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Crafting foundational architectural visions using 3D massing, preliminary sketches, and material concepts.",
//   },
//   {
//     num: "08",
//     title: "Residential Architecture",
//     image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Bespoke single-family homes and luxury villas engineered for comfort, light, and timeless living.",
//   },
//   {
//     num: "09",
//     title: "Commercial Architecture",
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "High-performance office complexes, retail centers, and mixed-use commercial destinations.",
//   },
//   {
//     num: "10",
//     title: "Multifamily Architecture",
//     image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Dense, sustainable apartment buildings and community-centric housing developments.",
//   },
//   {
//     num: "11",
//     title: "Storage Facilities",
//     image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Efficient, secure industrial warehouse and self-storage facility architectural design.",
//   },
//   {
//     num: "12",
//     title: "Civic Architecture",
//     image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Public infrastructure, government facilities, and community centers designed for civic pride.",
//   },
// {
//    num: "13",
//    title: "Project Management",
//    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
//    description:
//      "End-to-end administration, procurement supervision, and timeline management for building delivery.",
//  },
// {
//   "num": "14",
//   "title": "Code Analysis",
//   "image": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRTarCAI6vIuVbrFof2EhyLPO7PmCrRWtNGHpW3Gc5-tGI7hACnh8RJiuba6Tm0-WebsLTX3ULnjk5sBAk",
//   "description": "Ensuring all architectural proposals strictly comply with local building codes, zoning, and safety standards."
// },
//   {
//     num: "15",
//     title: "Interior Design",
//     image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Curated interior environments balancing warm textures, custom joinery, and lighting atmospheres.",
//   },
//   {
//     num: "16",
//     title: "Furniture, Fixtures, and Equipment",
//     image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Bespoke furniture procurement, custom fixture specification, and FF&E turn-key integration.",
//   },
//   {
//     num: "17",
//     title: "Archviz Renders and Animations",
//     image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Photorealistic 3D architectural renders, VR walkthroughs, and cinema-grade marketing films.",
//   },
// ];

// // Portfolio Grid Categories
// const portfolioSections = [
//   {
//     title: "ARCHITECTURE",
//     image: architectureImg,
//   },
//   {
//     title: "RENOVATION REMODELING",
//     image: landscapeImg,
//   },
//   {
//     title: "INTERIOR ARCHITECTURE",
//     image: interiorImg,
//   },
//   {
//     title: "MATERIAL SUPPLY",
//     image: productImg,
//   },
// ];

// const About = () => {
//   const [showMoreProcess, setShowMoreProcess] = useState(false);
//   const [showMoreServices, setShowMoreServices] = useState(false);
//   const [activeHoverIndex, setActiveHoverIndex] = useState(null);
//   const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

//   // Tracks the service row tapped to expand on mobile/tablet (accordion style)
//   const [expandedService, setExpandedService] = useState(null);

//   // Tracks the process step tapped to expand on touch devices (accordion style)
//   const [openStep, setOpenStep] = useState(null);

//   // True on touch devices (no hover) — drives click-based expansion for steps
//   const [isTouchDevice] = useState(
//     () =>
//       typeof window !== "undefined" &&
//       typeof window.matchMedia === "function" &&
//       window.matchMedia("(hover: none)").matches
//   );

//   const [hoveredProcess, setHoveredProcess] = useState(null);

//   // Section Refs for Auto-Scroll
//   const processRef = useRef(null);
//   const servicesRef = useRef(null);
//   const videoRef = useRef(null);
//   const videoSectionRef = useRef(null);

//   const displayedProcess = showMoreProcess
//     ? constructionProcess
//     : constructionProcess.slice(0, 5);

//   const displayedServices = showMoreServices
//     ? [...initialServices, ...extendedServices]
//     : initialServices;

//   const handleServiceClick = (index) => {
//     setExpandedService((prev) => (prev === index ? null : index));
//   };

//   const handleStepClick = (idx) => {
//     if (!isTouchDevice) return;
//     setOpenStep((prev) => (prev === idx ? null : idx));
//   };

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setHoverPos({
//       x: e.clientX - rect.left + 20,
//       y: e.clientY - rect.top - 100,
//     });
//   };

//   // Custom Smooth Scroll Helper (Scrolls ~250px ABOVE the section ref)
//   const scrollToRefWithOffset = (ref, offset = 250) => {
//     if (ref.current) {
//       const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
//       const offsetPosition = elementPosition - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   const handleProcessToggle = () => {
//     setShowMoreProcess((prev) => !prev);
//     scrollToRefWithOffset(processRef, 250);
//   };

//   const handleServicesToggle = () => {
//     setShowMoreServices((prev) => !prev);
//     scrollToRefWithOffset(servicesRef, 250);
//   };

//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     const section = videoSectionRef.current;
//     if (!video || !section) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             video.play().catch(() => {});
//           } else {
//             video.pause();
//           }
//         });
//       },
//       { threshold: 0.25 }
//     );

//     observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const closeOnOutsideClick = (e) => {
//       if (!e.target.closest("[data-service-row]")) {
//         setExpandedService(null);
//       }
//       if (!e.target.closest("[data-process-row]")) {
//         setOpenStep(null);
//       }
//     };
//     document.addEventListener("click", closeOnOutsideClick);
//     return () => document.removeEventListener("click", closeOnOutsideClick);
//   }, []);

//   return (
//     <section
//       className="relative z-10 w-full min-h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-8 md:px-12 lg:px-16 py-14 md:py-24 font-sans overflow-hidden"
//       style={{
//         backgroundImage: `url(${aboutBg})`,
//       }}
//     >
//       <div className="relative z-10 w-full">
//         {/* ABOUT / STUDIO DNA DESCRIPTION */}
//         <div className="ml-auto max-w-5xl p-5 sm:p-15 text-right">
//           <span className="text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.2em] uppercase text-white border-b-2
//           border-white pb-2 font-mono ">
//             ABOUT THE STUDIO
//           </span>

//           <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[1.6] text-gray-700 mt-8 md:mt-10 font-serif">
//             <span className="font-bold text-gray-950">Studio DNA</span> is an
//             architectural firm founded in 2026, driven by a belief that thoughtful
//             design can transform the way people live, work, and experience space.
//             Through proportion, light, materiality, and spatial clarity, we create
//             environments that feel timeless, functional, and deeply connected to their
//             purpose.
//           </p>
//         </div>

//         {/* ---------- 4 PORTFOLIO SECTIONS ---------- */}
//         <div className="mt-14 md:mt-24 w-full">
//           <div className="text-center mb-8 md:mb-22">
//             <span className="text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.15em] uppercase text-white border-b-2 border-white pb-2 font-mono">
//               WHAT WE BUILD & DESIGN
//             </span>
//           </div>

//           <div className="flex flex-col md:flex-row w-full md:h-[400px] gap-2 md:gap-3 overflow-hidden rounded-2xl md:rounded-3xl
//            bg-white font-serif p-2 md:p-3">
//             {portfolioSections.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="group relative flex-1 min-h-[220px] md:min-h-0 hover:flex-[2.5] transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden rounded-xl md:rounded-2xl cursor-pointer select-none"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="absolute inset-0 h-full w-full object-cover grayscale-[25%] brightness-75 transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
//                 />

//                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5b7fc7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 <div className="absolute top-4 left-4 text-3xl md:text-5xl font-black text-white/20 transition-all duration-500 group-hover:text-white/50 group-hover:translate-x-1 font-mono">
//                   0{idx + 1}
//                 </div>

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

//                 <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 flex items-end justify-between gap-3">
//                   <div className="flex flex-col gap-1 max-w-[90%]">
//                     <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white tracking-wide uppercase leading-tight transition-transform duration-500 group-hover:translate-x-2">
//                       {item.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* OUTLINE ARCHITECTS ANNOUNCEMENT */}
//         <div className="mt-14 md:mt-24 p-10 sm:p-20 max-w-4xl text-left">
//           <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[1.6] text-gray-700 font-serif">
//             <span className="font-bold text-gray-950">Outline Architects</span>{" "}
//             is proudly presenting{" "}
//             <span className="font-bold text-gray-950">Studio DNA</span> — The
//             brainchild and inspirational partner to offer more exciting services to our valued clients.
//           </p>
//         </div>

//         {/* ---------- FEATURED VIDEO SECTION ---------- */}
//         <div ref={videoSectionRef} className="mt-12 md:mt-20 sm:mb-40 mb-10 w-full flex justify-center">
//           <div className="group relative w-full sm:max-w-[70vw] aspect-video mx-auto rounded-2xl md:rounded-xl overflow-hidden
//           shadow-2xl border border-white/20 bg-black/40 backdrop-blur-sm">
//             <video
//               ref={videoRef}
//               src={archVideo}
//               loop
//               muted
//               playsInline
//               onClick={togglePlayPause}
//               onPlay={() => setIsPlaying(true)}
//               onPause={() => setIsPlaying(false)}
//               className="w-full h-full object-cover rounded-2xl md:rounded-xl cursor-pointer block"
//             />

//             <button
//               onClick={togglePlayPause}
//               aria-label={isPlaying ? "Pause Video" : "Play Video"}
//               className="absolute bottom-4 right-4 md:bottom-18 md:right-20 z-20 flex h-10 w-10 md:h-16 md:w-16 items-center justify-center
//               rounded-full bg-white/60 text-white backdrop-blur-md border border-white/30 shadow-lg hover:bg-white/80 hover:scale-105 transition-all duration-300 cursor-pointer"
//             >
//               {isPlaying ? (
//                 <Pause className="w-5 h-5 md:w-6 md:h-6 text-white fill-[#5b7fc7]"/>
//               ) : (
//                 <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-0.5"/>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* ---------- HOW WE BUILD ---------- */}
//         <div
//           ref={processRef}
//           className="mt-14 md:mt-2 w-full grid grid-cols-1 sm:p-20 p-5 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
//         >
//           <div className="lg:col-span-4 sticky top-28 pt-4">
//             <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:ml-5 uppercase text-white font-bold font-mono border-b-2 border-white pb-2 md:pb-4">
//               How We Build
//             </h2>
//           </div>

//           <div className="lg:col-span-8 border-t-2 border-white">
//             {displayedProcess.map((item, idx) => {
//               const isHovered = hoveredProcess === idx;

//               return (
//                 <div
//                   key={idx}
//                   onMouseEnter={() => {
//                     if (!isTouchDevice) setHoveredProcess(idx);
//                   }}
//                   onMouseLeave={() => setHoveredProcess(null)}
//                   onClick={() => handleStepClick(idx)}
//                   data-process-row={idx}
//                   className="border-b-2 border-white py-5 md:py-7 cursor-pointer transition-colors duration-300 group"
//                 >
//                   <div className="flex items-center justify-between gap-3 md:gap-6 w-full">
//                     <div className="flex items-baseline gap-3 md:gap-6 min-w-0">
//                       <span className="text-sm sm:text-base md:text-lg lg:text-xl font-mono font-normal text-[#ffffff] mr-3 sm:mr-8 shrink-0">
//                         Step: {item.num}
//                       </span>
//                       <h3
//                         className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono tracking-tight transition-all duration-300 ${
//                           isHovered
//                             ? "text-gray-950 font-semibold"
//                             : "text-gray-800 font-medium group-hover:text-gray-950"
//                         }`}
//                       >
//                         {item.title}
//                       </h3>
//                     </div>

//                     <ArrowUpRight
//                       size={16}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleStepClick(idx);
//                       }}
//                       className="lg:hidden shrink-0 text-white cursor-pointer"
//                     />
//                   </div>

//                   <div
//                     onClick={(e) => e.stopPropagation()}
//                     className={`grid transition-all duration-500 ease-in-out ${
//                       isHovered || (isTouchDevice && openStep === idx)
//                         ? "grid-rows-[1fr] opacity-100 pt-4 md:pt-6 md:ml-10"
//                         : "grid-rows-[0fr] opacity-0"
//                     }`}
//                   >
//                     <div className="overflow-hidden ml-22 sm:ml-25">
//                       <p className="text-base sm:text-lg md:text-xl font-mono leading-relaxed text-gray-900 max-w-4xl mb-4 md:mb-6">
//                         {item.description}
//                       </p>

//                       <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-white">
//                         {item.points.map((pt, pIdx) => (
//                           <li
//                             key={pIdx}
//                             className="text-sm sm:text-base md:text-lg font-mono font-semibold text-gray-700 uppercase tracking-wider flex items-center gap-2"
//                           >
//                             <span className="h-1.5 w-1.5 rounded-full bg-[#5b7fc7]" />
//                             {pt}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}

//             <div className="mt-8 flex justify-start">
//               <button
//                 onClick={handleProcessToggle}
//                 className="group relative overflow-hidden flex items-center gap-3 text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] text-gray-900 uppercase font-mono bg-white/90 border-2 border-white px-6 md:px-7 py-3 md:py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
//               >
//                 <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />

//                 <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
//                   {showMoreProcess ? "Show Less" : "See More Steps"}
//                 </span>
//                 <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
//                   {showMoreProcess ? (
//                     <ChevronUp size={20} className="transition-transform duration-300 group-hover:-translate-y-1" />
//                   ) : (
//                     <ChevronDown size={20} className="transition-transform duration-300 group-hover:translate-y-1" />
//                   )}
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ---------- PLANNING & SERVICES SECTION ---------- */}
//         <div
//           ref={servicesRef}
//           className="mt-14 md:mt-10 w-full sm:p-20 p-5"
//         >
//           <div className="mb-6 md:mb-10">
//             <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.1em] text-white font-bold font-mono">
//               — PRE-CONSTRUCTION & PLANNING
//             </span>
//           </div>
//           <div className="relative border-t-2 border-white w-full">
//             {displayedServices.map((item, index) => {
//               const isHovered = activeHoverIndex === index;
//               const isExpanded = expandedService === index;

//               return (
//                 <div
//                   key={index}
//                   onMouseEnter={() => setActiveHoverIndex(index)}
//                   onMouseLeave={() => setActiveHoverIndex(null)}
//                   onMouseMove={handleMouseMove}
//                   onClick={() => handleServiceClick(index)}
//                   data-service-row={index}
//                   className={`group relative flex flex-col border-b-2 border-white cursor-pointer transition-all duration-300 w-full ${
//                     isHovered || isExpanded
//                       ? "bg-[#5b7fc7] text-white"
//                       : "hover:bg-gray-200/40 text-gray-900"
//                   }`}
//                 >
//                   <div className="flex items-center justify-between gap-3 px-4 md:px-6 py-5">
//                     <div className="flex items-center gap-3 md:gap-6 z-10">
//                       <span
//                         className={`text-base md:text-xl font-extrabold font-mono tracking-wider transition-colors duration-300 ${
//                           isHovered || isExpanded ? "text-white" : "text-gray-900"
//                         }`}
//                       >
//                         {item.num}
//                       </span>
//                       <h3
//                         className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-medium transition-transform duration-500 ease-out ${
//                           isHovered || isExpanded
//                             ? "translate-x-6 text-white font-mono font-semibold"
//                             : "text-gray-900"
//                         }`}
//                       >
//                         {item.title}
//                       </h3>
//                     </div>
//                     <ArrowUpRight
//                       size={16}
//                       className={`z-10 shrink-0 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100 text-white ${
//                         isHovered || isExpanded ? "opacity-100 rotate-45 scale-110" : "opacity-100"
//                       }`}
//                     />
//                   </div>

//                   {/* Inline expandable panel — image left, description right (mobile/tablet) */}
//                   <div
//                     onClick={(e) => e.stopPropagation()}
//                     className={`lg:hidden grid transition-all duration-500 ease-in-out ${
//                       isExpanded
//                         ? "grid-rows-[1fr] opacity-100"
//                         : "grid-rows-[0fr] opacity-0"
//                     }`}
//                   >
//                     <div className="overflow-hidden">
//                       <div className="flex items-stretch gap-3 px-4 md:px-6 pb-5 pt-4 border-t border-white/40">
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="w-1/2 h-36 sm:h-44 object-cover rounded-xl"
//                         />
//                         <p className="w-1/2 text-xs sm:text-sm md:text-base font-serif leading-relaxed text-white/95 font-medium self-center">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Desktop Hover Floating Image Card */}
//                   {isHovered && (
//                     <div
//                       style={{
//                         top: `${hoverPos.y}px`,
//                         left: `${hoverPos.x}px`,
//                       }}
//                       className="hidden lg:flex -mt-40 absolute z-30 h-[400px] w-[640px] shadow-2xl rounded-2xl overflow-hidden border border-white/60 pointer-events-none transition-all duration-150 ease-out animate-in fade-in zoom-in-95 backdrop-blur-md bg-white/95"
//                     >
//                       <div className="w-1/2 h-full overflow-hidden">
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                         />
//                       </div>
//                       <div className="w-1/2 h-full p-5 flex flex-col justify-center text-left">
//                         <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 font-medium">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           <div className="mt-8 flex justify-start">
//             <button
//               onClick={handleServicesToggle}
//               className="group relative overflow-hidden flex items-center gap-3 text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] text-gray-900 uppercase font-mono bg-white/90 border-2 border-white px-6 md:px-7 py-3 md:py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
//             >
//               <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />

//               <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
//                 {showMoreServices ? "Show Less" : "See More Services"}
//               </span>

//               <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
//                 {showMoreServices ? (
//                   <ChevronUp size={18} className="transition-transform duration-300 group-hover:-translate-y-1" />
//                 ) : (
//                   <ChevronDown size={18} className="transition-transform duration-300 group-hover:translate-y-1" />
//                 )}
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;