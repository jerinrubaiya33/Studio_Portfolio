import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

import aboutBg from "../assets/about.png";
import architectureImg from "../assets/inspact.png";
import landscapeImg from "../assets/renovation-remodeling.jpg";
import interiorImg from "../assets/interior.png";
import productImg from "../assets/renovation.jpg";
import archVideo from "../assets/arch.mp4";

// Turn-Key Process Data
const constructionProcess = [
  {
    num: "01",
    title: "Space Analysis",
    description:
      "We start with nothing but ground. Soil, orientation, sun path, wind direction, neighbouring mass, access roads and local zoning are all surveyed so every later decision rests on facts, not guesses.",
    points: [
      "Site survey & soil check",
      "Sun path + wind mapping",
      "Zoning & legal limits",
    ],
  },
  {
    num: "02",
    title: "Turning constraints into form",
    description:
      "Your brief becomes plans, sections and 3D massing. We test multiple layouts against your lifestyle or business flow until the proportions, circulation and daylight feel effortless.",
    points: [
      "Concept & massing studies",
      "Floor plans & elevations",
      "3D walkthrough review",
    ],
  },
  {
    num: "03",
    title: "Air, light & comfort simulation",
    description:
      "Before a single brick is ordered we simulate how the building breathes — cross ventilation, daylight penetration, shading, acoustics and thermal performance — so the space stays comfortable year-round.",
    points: [
      "Airflow & ventilation study",
      "Daylight + shading analysis",
      "Thermal & acoustic comfort",
    ],
  },
  {
    num: "04",
    title: "A budget that holds",
    description:
      "A transparent bill of quantities, item-by-item rates and a phase-wise cash-flow plan. You see exactly where every unit of budget goes — no hidden lines, no mid-project surprises.",
    points: [
      "Detailed BOQ",
      "Phase-wise cash flow",
      "Contingency planning",
    ],
  },
  {
    num: "05",
    title: "One clear master timeline",
    description:
      "Design, cost and schedule are locked into a single approved package. You sign off once on a complete picture: drawings, finishes, milestones and delivery date.",
    points: [
      "Approved drawing set",
      "Milestone schedule",
      "Single-point approval",
    ],
  },
  {
    num: "06",
    title: "Sourcing & procurement",
    description:
      "We buy on your behalf from vetted suppliers — steel, cement, stone, timber, glazing and fixtures — with quality testing, samples for approval and logistics handled end to end.",
    points: [
      "Vetted supplier network",
      "Sample approval & QC",
      "Delivery logistics",
    ],
  },
  {
    num: "07",
    title: "Construction",
    description:
      "Foundation, frame, envelope, MEP roughing and finishing — executed by our supervised teams with weekly site reports, photo updates and strict safety and quality checkpoints.",
    points: [
      "Supervised site execution",
      "Weekly progress reports",
      "Stage-wise quality checks",
    ],
  },
  {
    num: "08",
    title: "Client Customization",
    description:
      "Layout tweaks, finish swaps, joinery details or smart-home additions — we build in flexible decision windows so you can personalise without derailing cost or schedule.",
    points: [
      "Finish & material swaps",
      "Custom joinery options",
      "Cost-impact shown upfront",
    ],
  },
  {
    num: "09",
    title: "Handover, fully finished",
    description:
      "Façade, landscape and lighting outside; furniture, fixtures and styling inside. We close out snag lists, hand over warranties and give you the keys to a space ready to live in.",
    points: [
      "Façade & landscape",
      "FF&E and styling",
      "Snag-free handover",
    ],
  },
];

// Initial Services
const initialServices = [
  {
    num: "01",
    title: "Planning",
    image: architectureImg,
    description:
      "Strategic site and program analysis to inform the design process, ensuring optimal spatial and functional outcomes.",
  },
  {
    num: "02",
    title: "Feasibility Study",
    image: landscapeImg,
    description:
      "Evaluating financial, regulatory, and spatial parameters to determine project viability before investment.",
  },
  {
    num: "03",
    title: "Site Analysis",
    image: architectureImg,
    description:
      "In-depth contextual and environmental study to align building designs seamlessly with their surroundings.",
  },
  {
    num: "04",
    title: "Cost Estimating",
    image: landscapeImg,
    description:
      "Detailed bill of quantities and financial forecasting to maintain budget integrity across phases.",
  },
  {
    num: "05",
    title: "Masterplans",
    image: interiorImg,
    description:
      "Comprehensive long-term development strategies for large-scale residential, commercial, and mixed-use sites.",
  },
];

// Expanded items
const extendedServices = [
  {
    num: "06",
    title: "Space Planning",
    image: interiorImg,
    description:
      "Optimizing interior layout and flow to maximize usability, circulation, and spatial experience.",
  },
  {
    num: "07",
    title: "Conceptual Design",
    image: architectureImg,
    description:
      "Crafting foundational architectural visions using 3D massing, preliminary sketches, and material concepts.",
  },
  {
    num: "08",
    title: "Residential Architecture",
    image: landscapeImg,
    description:
      "Bespoke single-family homes and luxury villas engineered for comfort, light, and timeless living.",
  },
  {
    num: "09",
    title: "Commercial Architecture",
    image: productImg,
    description:
      "High-performance office complexes, retail centers, and mixed-use commercial destinations.",
  },
  {
    num: "10",
    title: "Multifamily Architecture",
    image: architectureImg,
    description:
      "Dense, sustainable apartment buildings and community-centric housing developments.",
  },
  {
    num: "11",
    title: "Storage Facilities",
    image: landscapeImg,
    description:
      "Efficient, secure industrial warehouse and self-storage facility architectural design.",
  },
  {
    num: "12",
    title: "Civic Architecture",
    image: productImg,
    description:
      "Public infrastructure, government facilities, and community centers designed for civic pride.",
  },
  {
    num: "13",
    title: "Project Management",
    image: architectureImg,
    description:
      "End-to-end administration, procurement supervision, and timeline management for building delivery.",
  },
  {
    num: "14",
    title: "Code Analysis",
    image: productImg,
    description:
      "Ensuring all architectural proposals strictly comply with local building codes, zoning, and safety standards.",
  },
  {
    num: "15",
    title: "Interior Design",
    image: interiorImg,
    description:
      "Curated interior environments balancing warm textures, custom joinery, and lighting atmospheres.",
  },
  {
    num: "16",
    title: "Furniture, Fixtures, and Equipment",
    image: productImg,
    description:
      "Bespoke furniture procurement, custom fixture specification, and FF&E turn-key integration.",
  },
  {
    num: "17",
    title: "Archviz Renders and Animations",
    image: architectureImg,
    description:
      "Photorealistic 3D architectural renders, VR walkthroughs, and cinema-grade marketing films.",
  },
];

// Portfolio Grid Categories
const portfolioSections = [
  {
    title: "ARCHITECTURE",
    image: architectureImg,
  },
  {
    title: "RENOVATION REMODELING",
    image: landscapeImg,
  },
  {
    title: "INTERIOR ARCHITECTURE",
    image: interiorImg,
  },
  {
    title: "MATERIAL SUPPLY",
    image: productImg,
  },
];

const About = () => {
  const [showMoreProcess, setShowMoreProcess] = useState(false);
  const [showMoreServices, setShowMoreServices] = useState(false);
  const [activeHoverIndex, setActiveHoverIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  // Tracks the service row tapped to expand on mobile/tablet (accordion style)
  const [expandedService, setExpandedService] = useState(null);

  // Tracks the process step tapped to expand on touch devices (accordion style)
  const [openStep, setOpenStep] = useState(null);

  // True on touch devices (no hover) — drives click-based expansion for steps
  const [isTouchDevice] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(hover: none)").matches
  );

  const [hoveredProcess, setHoveredProcess] = useState(null);

  // Section Refs for Auto-Scroll
  const processRef = useRef(null);
  const servicesRef = useRef(null);
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);

  const displayedProcess = showMoreProcess
    ? constructionProcess
    : constructionProcess.slice(0, 5);

  const displayedServices = showMoreServices
    ? [...initialServices, ...extendedServices]
    : initialServices;

  const handleServiceClick = (index) => {
    setExpandedService((prev) => (prev === index ? null : index));
  };

  const handleStepClick = (idx) => {
    if (!isTouchDevice) return;
    setOpenStep((prev) => (prev === idx ? null : idx));
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPos({
      x: e.clientX - rect.left + 20,
      y: e.clientY - rect.top - 100,
    });
  };

  // Custom Smooth Scroll Helper (Scrolls ~250px ABOVE the section ref)
  const scrollToRefWithOffset = (ref, offset = 250) => {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleProcessToggle = () => {
    setShowMoreProcess((prev) => !prev);
    scrollToRefWithOffset(processRef, 250);
  };

  const handleServicesToggle = () => {
    setShowMoreServices((prev) => !prev);
    scrollToRefWithOffset(servicesRef, 250);
  };

  // Starts paused — the IntersectionObserver below triggers playback when the
  // section enters the viewport, and onPlay/onPause keep this state in sync.
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto play the video when its section scrolls into view and pause when it
  // leaves the viewport. The HTML5 video keeps its currentTime while paused,
  // so returning to the section resumes playback from the exact same position.
  useEffect(() => {
    const video = videoRef.current;
    const section = videoSectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Close the expanded panels when clicking anywhere outside the rows
  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (!e.target.closest("[data-service-row]")) {
        setExpandedService(null);
      }
      if (!e.target.closest("[data-process-row]")) {
        setOpenStep(null);
      }
    };
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, []);

  return (
    <section
      className="relative z-10 w-full min-h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-8 md:px-12 lg:px-16 py-14 md:py-24 font-sans overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBg})`,
      }}
    >
      <div className="relative z-10 w-full">
        {/* ABOUT / STUDIO DNA DESCRIPTION */}
        <div className="ml-auto max-w-5xl p-5 sm:p-15 text-right">
          <span className="text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.2em] uppercase text-white border-b-2 
          border-white pb-2 font-mono ">
            ABOUT THE STUDIO
          </span>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[1.6] text-gray-700 mt-8 md:mt-10 font-serif">
            <span className="font-bold text-gray-950">Studio DNA</span> is an
            architectural firm founded in 2026, driven by a belief that thoughtful
            design can transform the way people live, work, and experience space.
            Through proportion, light, materiality, and spatial clarity, we create
            environments that feel timeless, functional, and deeply connected to their
            purpose.
          </p>
        </div>

        {/* ---------- 4 PORTFOLIO SECTIONS ---------- */}
        <div className="mt-14 md:mt-24 w-full">
          <div className="text-center mb-8 md:mb-22">
            <span className="text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.15em] uppercase text-white border-b-2 border-white pb-2 font-mono">
              WHAT WE BUILD & DESIGN
            </span>
          </div>

          <div className="flex flex-col md:flex-row w-full md:h-[400px] gap-2 md:gap-3 overflow-hidden rounded-2xl md:rounded-3xl
           bg-white font-serif p-2 md:p-3">
            {portfolioSections.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex-1 min-h-[220px] md:min-h-0 hover:flex-[2.5] transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden rounded-xl md:rounded-2xl cursor-pointer select-none"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover grayscale-[25%] brightness-75 transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                />

                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5b7fc7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 left-4 text-3xl md:text-5xl font-black text-white/20 transition-all duration-500 group-hover:text-white/50 group-hover:translate-x-1 font-mono">
                  0{idx + 1}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 flex items-end justify-between gap-3">
                  <div className="flex flex-col gap-1 max-w-[90%]">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white tracking-wide uppercase leading-tight transition-transform duration-500 group-hover:translate-x-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* <ArrowUpRight
                    size={16}
                    className="text-white transition-all duration-500 group-hover:rotate-45 group-hover:scale-110"
                  /> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OUTLINE ARCHITECTS ANNOUNCEMENT */}
        <div className="mt-14 md:mt-24 p-10 sm:p-20  max-w-4xl text-left">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[1.6] text-gray-700 font-serif">
            <span className="font-bold text-gray-950">Outline Architects</span>{" "}
            is proudly presenting{" "}
            <span className="font-bold text-gray-950">Studio DNA</span> — The
            brainchild and inspirational partner to offer more exciting services to our valued clients.
          </p>
        </div>

        {/* ---------- FEATURED VIDEO SECTION ---------- */}
        <div ref={videoSectionRef} className="mt-12 md:mt-20 sm:mb-40 mb-10 w-full flex justify-center">
          <div className="group relative w-full sm:max-w-[70vw] aspect-video mx-auto rounded-2xl md:rounded-3xl overflow-hidden 
          shadow-2xl border border-white/20 bg-black/40 backdrop-blur-sm">
            <video
              ref={videoRef}
              src={archVideo}
              loop
              muted
              playsInline
              onClick={togglePlayPause}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl cursor-pointer block"
            />

            {/* Floating Play/Pause Toggle Icon */}
            <button
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
              className="absolute bottom-4 right-4 md:bottom-22 md:right-22 z-20 flex h-10 w-10 md:h-16 md:w-16 items-center justify-center
              rounded-full bg-white/60 text-white backdrop-blur-md border border-white/30 shadow-lg hover:bg-white/80 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 md:w-6 md:h-6 text-white fill-[#5b7fc7]" />
              ) : (
                <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-0.5" />
              )}
            </button>
          </div>
        </div>

        {/* ---------- HOW WE BUILD (PROPORTIONATE & RESPONSIVE HOVER LIST) ---------- */}
        <div
          ref={processRef}
          className="mt-14 md:mt-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
        >
          {/* Left Header */}
          <div className="lg:col-span-4 sticky top-28 pt-4">
            <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:ml-5 uppercase tracking-[0.1em] text-white font-bold font-mono border-b-2 border-white pb-2 md:pb-4">
              How We Build
            </h2>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8 border-t-2 border-white">
            {displayedProcess.map((item, idx) => {
              const isHovered = hoveredProcess === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => {
                    if (!isTouchDevice) setHoveredProcess(idx);
                  }}
                  onMouseLeave={() => setHoveredProcess(null)}
                  onClick={() => handleStepClick(idx)}
                  data-process-row={idx}
                  className="border-b-2 border-white py-5 md:py-7 cursor-pointer transition-colors duration-300 group"
                >
                  {/* Title Container with Blue Number */}
                  <div className="flex items-center justify-between gap-3 md:gap-6 w-full">
                    <div className="flex items-baseline gap-3 md:gap-6 min-w-0">
                      <span className="text-sm sm:text-base md:text-lg lg:text-xl font-mono font-normal text-[#5b7fc7] mr-3 sm:mr-8 shrink-0">
                        Step: {item.num}
                      </span>
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif tracking-tight transition-all duration-300 ${
                          isHovered
                            ? "text-gray-950 font-semibold"
                            : "text-gray-800 font-medium group-hover:text-gray-950"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={16}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStepClick(idx);
                      }}
                      className="lg:hidden shrink-0 text-white cursor-pointer"
                    />
                  </div>

                  {/* Expandable Description Directly Under Title */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={`grid transition-all duration-500 ease-in-out ${
                      isHovered || (isTouchDevice && openStep === idx)
                        ? "grid-rows-[1fr] opacity-100 pt-4 md:pt-6 md:ml-10"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden ml-22 sm:ml-25">
                      <p className="text-base sm:text-lg md:text-xl   font-mono leading-relaxed text-gray-900 max-w-4xl mb-4 md:mb-6">
                        {item.description}
                      </p>

                      <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-white">
                        {item.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="text-sm sm:text-base md:text-lg font-mono font-semibold text-gray-700 uppercase tracking-wider flex items-center gap-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#5b7fc7]" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* See More Steps Button */}
            <div className="mt-8 flex justify-start">
              <button
                onClick={handleProcessToggle}
                className="group relative overflow-hidden flex items-center gap-3 text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] text-gray-900 uppercase font-mono bg-white/90 border-2 border-white px-6 md:px-7 py-3 md:py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />

                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  {showMoreProcess ? "Show Less" : "See More Steps"}
                </span>

                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  {showMoreProcess ? (
                    <ChevronUp
                      size={20}
                      className="transition-transform duration-300 group-hover:-translate-y-1"
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-y-1"
                    />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ---------- PLANNING & SERVICES SECTION ---------- */}
        <div
          ref={servicesRef}
          className="mt-14 md:mt-24 w-full"
        >
          <div className="mb-6 md:mb-10">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.1em] text-white font-bold font-mono">
              — PRE-CONSTRUCTION & PLANNING
            </span>
          </div>

          <div className="relative border-t-2 border-white w-full">
            {displayedServices.map((item, index) => {
              const isHovered = activeHoverIndex === index;
              const isExpanded = expandedService === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveHoverIndex(index)}
                  onMouseLeave={() => setActiveHoverIndex(null)}
                  onMouseMove={handleMouseMove}
                  onClick={() => handleServiceClick(index)}
                  data-service-row={index}
                  className={`group relative flex flex-col border-b-2 border-white cursor-pointer transition-all duration-300 w-full ${
                    isHovered || isExpanded
                      ? "bg-[#5b7fc7] text-white"
                      : "hover:bg-gray-200/40 text-gray-900"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 px-4 md:px-6 py-5">
                    <div className="flex items-center gap-3 md:gap-6 z-10">
                      <span
                        className={`text-base md:text-xl font-extrabold font-mono tracking-wider transition-colors duration-300 ${
                          isHovered || isExpanded ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.num}
                      </span>
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium transition-transform duration-500 ease-out ${
                          isHovered || isExpanded
                            ? "translate-x-6 text-white font-serif font-semibold"
                            : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>                    <ArrowUpRight
                      size={16}
                      className={`z-10 shrink-0 text-white transition-all duration-300 ${
                        isHovered || isExpanded
                          ? "rotate-45 scale-110 opacity-100"
                          : "opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                      }`}
                    />
                  </div>

                  {/* Inline expandable panel — image left, description right (mobile/tablet) */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={`lg:hidden grid transition-all duration-500 ease-in-out ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex items-stretch gap-3 px-4 md:px-6 pb-5 pt-4 border-t border-white/40">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-1/2 h-36 sm:h-44 object-cover rounded-xl"
                        />
                        <p className="w-1/2 text-xs sm:text-sm md:text-base font-serif leading-relaxed text-white/95 font-sans font-medium self-center">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {isHovered && (
                    <div
                      style={{
                        top: `${hoverPos.y}px`,
                        left: `${hoverPos.x}px`,
                      }}
                      className="hidden lg:flex -mt-40 absolute z-30 h-[400px] w-[640px] shadow-2xl rounded-2xl overflow-hidden border border-white/60 pointer-events-none transition-all duration-150 ease-out animate-in fade-in zoom-in-95 backdrop-blur-md bg-white/95"
                    >
                      <div className="w-1/2 h-full overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="w-1/2 h-full p-5 flex flex-col justify-center text-left">
                        <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 font-sans font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-start">
            <button
              onClick={handleServicesToggle}
              className="group relative overflow-hidden flex items-center gap-3 text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] text-gray-900 uppercase font-mono bg-white/90 border-2 border-white px-6 md:px-7 py-3 md:py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />

              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                {showMoreServices ? "Show Less" : "See More Services"}
              </span>

              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                {showMoreServices ? (
                  <ChevronUp
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1"
                  />
                ) : (
                  <ChevronDown
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
