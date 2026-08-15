import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import Footer from "./Footer";

/* Local & Branding Assets */
import heroBg from "../assets/about.png";
import logoBlack from "../assets/studioDNA_logo_black.png";
import designImg from "../assets/designImg.avif";
import buildImg from "../assets/buildImg.png";
import supplyImg from "../assets/supplyImg.avif";
import architectureImg from "../assets/inspact.png";
import landscapeImg from "../assets/renovation-remodeling.jpg";
import interiorImg from "../assets/interior.png";
import productImg from "../assets/renovation.jpg";

/* Scroll-reveal Helper */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const supportsIO = typeof window !== "undefined" && "IntersectionObserver" in window;
  const [visible, setVisible] = useState(!supportsIO);

  useEffect(() => {
    const el = ref.current;
    if (!el || !supportsIO) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [supportsIO]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${className}`}
    >
      {children}
    </div>
  );
};

/* ============ DESIGN • BUILD • SUPPLY ============ */
const corePillars = [
  {
    num: "01",
    title: "Design",
    image: designImg,
    subtitle:
      "Architecture and specialist design coordinated as one system — from first sketch to approval.",
    items: [
      { name: "Architectural design" },
      { name: "Structural design" },
      { name: "Mechanical design" },
      { name: "Electrical design" },
      { name: "Plumbing design" },
      { name: "HVAC design" },
      { name: "Fire design" },
      { name: "Graphics & visualisation" },
      { name: "Authority approval" },
      { name: "Special approval" },
      { name: "Green building certification" },
      { name: "Feasibility reports" },
    ],
  },
  {
    num: "02",
    title: "Build",
    image: buildImg,
    subtitle:
      "Construction, fit-out and delivery executed across varied structural systems with rigorous supervision.",
    items: [
      { name: "RCC and masonry structures" },
      { name: "Prefabricated & metal structures" },
      { name: "Composite structures" },
      { name: "Wooden and bamboo structures" },
      { name: "Rammed-earth structures" },
      { name: "Interior fit-out" },
      { name: "Landscape construction" },
      { name: "Project management" },
      { name: "Legal & documentation services" },
    ],
  },
  {
    num: "03",
    title: "Supply",
    image: supplyImg,
    subtitle:
      "Material and product sourcing connected directly to project delivery — local and imported.",
    items: [
      { name: "Local supply" },
      { name: "Imported supply" },
      { name: "Sourcing" },
      { name: "Indenting" },
    ],
  },
];

/* ============ FULL SERVICE INDEX ============ */
const serviceIndex = [
  { num: "01", title: "Planning", image: architectureImg, description: "Strategic site and program analysis to inform the design process, ensuring optimal spatial and functional outcomes." },
  { num: "02", title: "Feasibility Study", image: landscapeImg, description: "Evaluating financial, regulatory, and spatial parameters to determine project viability before investment." },
  { num: "03", title: "Site Analysis", image: architectureImg, description: "In-depth contextual and environmental study to align building designs seamlessly with their surroundings." },
  { num: "04", title: "Cost Estimating", image: landscapeImg, description: "Detailed bill of quantities and financial forecasting to maintain budget integrity across phases." },
  { num: "05", title: "Masterplans", image: interiorImg, description: "Comprehensive long-term development strategies for large-scale residential, commercial, and mixed-use sites." },
  { num: "06", title: "Space Planning", image: interiorImg, description: "Optimizing interior layout and flow to maximize usability, circulation, and spatial experience." },
  { num: "07", title: "Conceptual Design", image: architectureImg, description: "Crafting foundational architectural visions using 3D massing, preliminary sketches, and material concepts." },
  { num: "08", title: "Residential Architecture", image: landscapeImg, description: "Bespoke single-family homes and luxury villas engineered for comfort, light, and timeless living." },
  { num: "09", title: "Commercial Architecture", image: productImg, description: "High-performance office complexes, retail centers, and mixed-use commercial destinations." },
  { num: "10", title: "Multifamily Architecture", image: architectureImg, description: "Dense, sustainable apartment buildings and community-centric housing developments." },
  { num: "11", title: "Storage Facilities", image: landscapeImg, description: "Efficient, secure industrial warehouse and self-storage facility architectural design." },
  { num: "12", title: "Civic Architecture", image: productImg, description: "Public infrastructure, government facilities, and community centers designed for civic pride." },
  { num: "13", title: "Project Management", image: architectureImg, description: "End-to-end administration, procurement supervision, and timeline management for building delivery." },
  { num: "14", title: "Code Analysis", image: productImg, description: "Ensuring all architectural proposals strictly comply with local building codes, zoning, and safety standards." },
  { num: "15", title: "Interior Design", image: interiorImg, description: "Curated interior environments balancing warm textures, custom joinery, and lighting atmospheres." },
  { num: "16", title: "FF&E", image: productImg, description: "Bespoke furniture procurement, custom fixture specification, and turn-key FF&E integration." },
  { num: "17", title: "Archviz Renders & Animations", image: architectureImg, description: "Photorealistic 3D architectural renders, VR walkthroughs, and cinema-grade marketing films." },
];

/* ============ HOW WE BUILD STEPS ============ */
const howWeBuildSteps = [
  {
    num: "01",
    title: "Discovery & Site Strategy",
    description: "Establishing client goals, site limits, structural constraints, and municipal approval pathways.",
    points: ["Feasibility Review", "Site Audit", "Zoning Compliance"],
  },
  {
    num: "02",
    title: "Architectural & Technical Design",
    description: "Developing synchronized architectural blueprints, structural calculations, and mechanical specifications.",
    points: ["3D BIM Modeling", "Structural & MEP", "Interior Joinery"],
  },
  {
    num: "03",
    title: "Procurement & Material Selection",
    description: "Sourcing premium construction materials and custom interior components directly through global and local supply networks.",
    points: ["Direct Import", "Quality Control", "Budget Forecasting"],
  },
  {
    num: "04",
    title: "Turnkey Execution & Supervision",
    description: "On-site construction and fit-out managed by dedicated project engineers with rigorous quality audits.",
    points: ["On-Site Management", "Safety Protocol", "Milestone Audits"],
  },
  {
    num: "05",
    title: "Handover & Post-Occupancy",
    description: "Final walkthroughs, building commissioning, regulatory sign-offs, and operational handovers.",
    points: ["Authority Clearances", "Commissioning", "Warranty Care"],
  },
];

const Services = () => {
  const navigate = useNavigate();

  /* Hover state for the service index list */
  const [activeHoverIndex, setActiveHoverIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);

  /* State for How We Build process section */
  const processRef = useRef(null);
  const [hoveredProcess, setHoveredProcess] = useState(null);
  const [openStep, setOpenStep] = useState(null);
  const [showMoreProcess, setShowMoreProcess] = useState(false);
  const [showMoreServices, setShowMoreServices] = useState(false);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const displayedProcess = showMoreProcess
    ? howWeBuildSteps
    : howWeBuildSteps.slice(0, 3);

  const displayedServices = showMoreServices
    ? serviceIndex
    : serviceIndex.slice(0, 5);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleStepClick = (idx) => {
    setOpenStep((prev) => (prev === idx ? null : idx));
  };

  const handleProcessToggle = () => {
    setShowMoreProcess((prev) => !prev);
  };

  const handleServicesToggle = () => {
    setShowMoreServices((prev) => !prev);
  };

  return (
    <>
      <main className="relative z-10 w-full min-h-screen bg-white text-gray-900 font-sans overflow-hidden">

        {/*  1. INTRO STATEMENT  */}
        <section className="relative w-full bg-white px-5 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-20 md:py-28 mt-12 sm:mt-0">
          <div className="max-w-[1600px] mx-auto">
            <Reveal>
              <div className="mb-6">
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-gray-900 leading-tight sm:max-w-4xl max-w-4xl">
                  One Studio. Three Disciplines. <h1>End-To-End Delivery.</h1>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-mono font-normal text-gray-700 leading-relaxed max-w-3xl">
                Studio DNA is the focused design branch of Outline Architects, backed by 30 years of practice. From planning and feasibility through architecture, engineering and interior design, to construction and material supply — we deliver the full journey of a project under one roof.
              </p>
            </Reveal>
          </div>
        </section>

        {/*  2. HERO SERVICE BANNER  */}
        <section className="relative w-full h-[60vh] sm:h-[75vh] md:h-[90vh] overflow-hidden flex items-end">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80"
            alt="Services Banner - Architectural Design & Engineering"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Black gradient overlay from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Banner Title */}
          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 sm:px-10 md:px-16 lg:px-24 pb-12 sm:pb-16 md:pb-24">
            <Reveal>
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#5b7fc7] block mb-2">
                — What We Offer
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-bold text-white tracking-tight uppercase">
                Our Services
              </h1>
            </Reveal>
          </div>
        </section>



        {/* ================= 3. DESIGN • BUILD • SUPPLY ================= */}
        <section className="relative w-full border-y border-gray-100 py-20 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 z-0 bg-white/50 backdrop-blur-[2px]" />

          <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-12 md:px-16 lg:px-38">
            <Reveal>
              <div className="mb-12 md:mb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <h2 className="text-2xl sm:text-5xl text-[#5b7fc7] lg:text-5xl font-mono font-bold  leading-tight">
                    Design · Build · Supply
                  </h2>

                  <p className="ml-auto text-base sm:text-lg md:text-xl font-mono text-gray-700 max-w-md text-left leading-snug">
                    From architecture and engineering to construction, fit-out and sourcing.
                  </p>
                </div>

                <div className="mt-8 w-full border-t border-gray-300"></div>
              </div>
            </Reveal>

            <div className="divide-y divide-gray-300/80 border-t border-b border-gray-300/80">
              {corePillars.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 150}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-16 md:py-24">

                    <div className="lg:col-span-4 flex flex-col justify-center text-left">
                      <h3 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-[#5b7fc7] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-6 text-lg sm:text-xl md:text-2xl font-mono font-medium text-gray-800 leading-relaxed max-w-sm">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="lg:col-span-4 flex justify-center items-center">
                      <div className="relative w-full grayscale-70 lg:-ml-30 max-w-md h-64 sm:h-80 overflow-hidden rounded-none shadow-sm border border-gray-200/80 bg-gray-100">
                        <img
                          src={item.image}
                          alt={`${item.title} service visual`}
                          className="w-full h-full object-cover filter grayscale-[30%] hover:grayscale-0 transition-all duration-500 ease-out"
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-4">
                      <ul className="divide-y divide-gray-300/80 border-t border-b border-gray-300/80">
                        {item.items.map((sub, subIdx) => (
                          <li
                            key={subIdx}
                            className="py-4 font-mono text-base sm:text-lg md:text-2xl text-gray-900 uppercase font-semibold tracking-wide"
                          >
                            {sub.name}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/*  4. FULL SERVICE INDEX  */}
        <section className="relative w-full bg-white px-5 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-24 md:py-32">
          <div className="w-full max-w-[1920px] mx-auto">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#5b7fc7]">
                    — Complete Service Index
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-mono font-bold text-gray-900 leading-tight">
                    Everything Under One Roof
                  </h2>
                </div>
                <p className="text-sm sm:text-base font-mono text-gray-600 max-w-md md:text-right">
                  Tap or hover over a service to preview what it covers. Every line of work is delivered by the same studio that designed it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative border-t border-gray-300 w-full">
                {displayedServices.map((item, index) => {
                  const isHovered = activeHoverIndex === index;

                  return (
                    <div
                      key={item.num}
                      onMouseEnter={() => setActiveHoverIndex(index)}
                      onMouseLeave={() => setActiveHoverIndex(null)}
                      onMouseMove={handleMouseMove}
                      onClick={() => {
                        if (
                          typeof window !== "undefined" &&
                          window.innerWidth < 1024
                        ) {
                          setActiveServiceIndex((prev) =>
                            prev === index ? null : index
                          );
                        }
                      }}
                      className={`group relative border-b border-gray-300 cursor-pointer transition-all duration-300 w-full ${isHovered || activeServiceIndex === index
                          ? "bg-[#5b7fc7] text-white"
                          : "hover:bg-gray-100 text-gray-900"
                        }`}
                    >
                      <div className="flex items-center justify-between py-5 sm:py-6 md:py-7 px-3 sm:px-5">
                        <div className="flex items-center gap-4 sm:gap-8 md:gap-10 z-10">
                          <span
                            className={`text-sm sm:text-lg font-mono font-extrabold tracking-wider transition-colors duration-300 ${isHovered || activeServiceIndex === index
                                ? "text-white/90"
                                : "text-gray-400"
                              }`}
                          >
                            {item.num}
                          </span>
                          <h3
                            className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono font-medium transition-transform duration-500 ease-out ${isHovered || activeServiceIndex === index
                                ? "translate-x-3 sm:translate-x-5 font-semibold"
                                : "text-gray-900"
                              }`}
                          >
                            {item.title}
                          </h3>
                        </div>

                        <ArrowUpRight
                          size={22}
                          className={`z-10 shrink-0 transition-all duration-300 ${isHovered || activeServiceIndex === index
                              ? "rotate-45 scale-110 opacity-100 text-white"
                              : "text-gray-400 opacity-60 group-hover:opacity-100"
                            }`}
                        />
                      </div>

                      {/* Inline description for mobile & tablet (below lg) */}
                      <div
                        className={`grid lg:hidden transition-all duration-300 ease-in-out ${activeServiceIndex === index
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden px-3 sm:px-5">
                          <div className="pb-5 sm:pb-6 pt-1 border-t border-white/20">
                            <p className="text-sm sm:text-base font-mono leading-relaxed text-white/90 font-medium">
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
                          className="hidden lg:flex -mt-52 absolute z-30 h-[300px] w-[560px] shadow-2xl overflow-hidden border border-white/60 pointer-events-none transition-all duration-150 ease-out bg-white/95 backdrop-blur-md"
                        >
                          <div className="w-1/2 h-full overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-1/2 h-full p-6 flex flex-col justify-center text-left">
                            <p className="text-base font-mono leading-relaxed text-gray-800 font-medium">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* See More Services Button */}
            <div className="mt-8 flex justify-start">
              <button
                onClick={handleServicesToggle}
                className="group relative overflow-hidden flex items-center gap-3 text-xs sm:text-sm font-bold
                 tracking-[0.15em] text-gray-900 uppercase font-mono bg-white border border-gray-400 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer"
              >
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />

                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  {showMoreServices ? "Show Less" : "See More Services"}
                </span>

                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  {showMoreServices ? (
                    <ChevronUp
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-1"
                    />
                  ) : (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-y-1"
                    />
                  )}
                </span>
              </button>
            </div>

            {/*  HOW WE BUILD SECTION  */}
            <div
              ref={processRef}
              className="mt-14 md:mt-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start 
              pt-12 border-t border-gray-200"
            >
              {/* Left Header */}
              <div className="lg:col-span-4 sticky top-28 pt-4">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#5b7fc7]">
                  — How We Build
                </span>
                <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-mono font-bold text-gray-900 leading-tight">
                  How We Build
                </h2>
              </div>

              {/* Right Accordion List */}
              <div className="lg:col-span-8 border-t-2 border-gray-200">
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
                      className="border-b border-gray-300 py-4 md:py-6 cursor-pointer transition-colors duration-300 group"
                    >
                      {/* Title Container with Blue Number */}
                      <div className="flex items-center justify-between gap-3 md:gap-6 w-full">
                        <div className="flex items-baseline gap-3 md:gap-6 min-w-0">
                          <span className="text-sm sm:text-lg font-mono font-extrabold tracking-wider text-[#5b7fc7] mr-2 sm:mr-6 shrink-0">
                            Step: {item.num}
                          </span>
                          <h3
                            className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono font-medium transition-all duration-300 ${isHovered
                                ? "text-gray-950 font-semibold"
                                : "text-gray-800 group-hover:text-gray-950"
                              }`}
                          >
                            {item.title}
                          </h3>
                        </div>

                        <ArrowUpRight
                          size={18}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStepClick(idx);
                          }}
                          className="lg:hidden shrink-0 text-gray-300 cursor-pointer"
                        />
                      </div>

                      {/* Expandable Description Directly Under Title */}
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className={`grid transition-all duration-500 ease-in-out ${isHovered || (isTouchDevice && openStep === idx)
                            ? "grid-rows-[1fr] opacity-100 pt-3 md:pt-5"
                            : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden sm:ml-34 ml-22">
                          <p className="text-sm sm:text-2xl font-mono leading-relaxed text-gray-700 max-w-3xl mb-3 md:mb-5">
                            {item.description}
                          </p>

                          <ul className="flex flex-wrap gap-x-4 gap-y-2 pt-3 border-t border-gray-200">
                            {item.points.map((pt, pIdx) => (
                              <li
                                key={pIdx}
                                className="text-sm sm:text-base font-mono font-semibold text-gray-600 uppercase tracking-wider flex items-center gap-2"
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
                    className="group relative overflow-hidden flex items-center gap-3 text-xs sm:text-sm font-bold tracking-[0.15em]
                     text-gray-900 uppercase font-mono bg-white border border-gray-400 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                      shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer"
                  >
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 
                    group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />

                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      {showMoreProcess ? "Show Less" : "See More Steps"}
                    </span>

                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      {showMoreProcess ? (
                        <ChevronUp
                          size={16}
                          className="transition-transform duration-300 group-hover:-translate-y-1"
                        />
                      ) : (
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-y-1"
                        />
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  5. CTA  */}
        <section className="relative w-full bg-[#dcd8c2] px-5 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-24 md:py-28 overflow-hidden">
          <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
            <Reveal>
              <div>
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#4f5d39]">
                  — Start A Project
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-mono font-bold text-[#333333] leading-tight">
                  Have a vision in mind?
                  <br />
                  Let's build it together.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                <a
                  href="tel:+8801711000000"
                  className="group relative overflow-hidden inline-flex items-center gap-3 px-6 sm:px-7 py-4 bg-[#333333] text-white rounded-none border border-[#333333] transition-all duration-500 hover:bg-transparent hover:text-[#333333]"
                >
                  <span className="relative z-10 text-xs sm:text-sm font-mono font-bold tracking-[0.15em] uppercase">
                    Discuss Your Project
                  </span>
                  <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <button
                  onClick={() => navigate("/projects")}
                  className="group inline-flex items-center gap-3 px-6 sm:px-7 py-4 border border-[#333333]/40 text-[#333333] rounded-none transition-all duration-500 hover:border-[#333333] hover:bg-[#333333] hover:text-white"
                >
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.15em] uppercase">
                    View Our Work
                  </span>
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        <style>{`
          @keyframes slowZoom {
            0%, 100% { transform: scale(1.02); }
            50% { transform: scale(1.06); }
          }
        `}</style>
      </main>

      {/* Footer Block */}
      <div className="relative z-10 w-full border-t border-neutral-300 bg-white/70 backdrop-blur-md">
        <Footer />
      </div>
    </>
  );
};

export default Services;