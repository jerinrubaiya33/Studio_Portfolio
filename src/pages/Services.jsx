// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowUpRight, ArrowRight, ChevronDown, ChevronUp,
//   Compass, Sun, Shield, Pencil, LayoutGrid, Box,
//   Wind, Lightbulb, Thermometer, Calculator, TrendingUp, ShieldCheck,
//   ClipboardCheck, Calendar, FileCheck, Search, Truck, HardHat,
//   BarChart3, CheckCircle, Palette, Wrench, DollarSign, Building2, Sofa, KeyRound,
// } from "lucide-react";

// const pointIcons = {
//   compass: Compass,
//   sun: Sun,
//   shield: Shield,
//   pencil: Pencil,
//   layout: LayoutGrid,
//   box: Box,
//   wind: Wind,
//   lightbulb: Lightbulb,
//   thermometer: Thermometer,
//   calculator: Calculator,
//   trending: TrendingUp,
//   "shield-check": ShieldCheck,
//   clipboard: ClipboardCheck,
//   calendar: Calendar,
//   "file-check": FileCheck,
//   handshake: Shield,
//   search: Search,
//   truck: Truck,
//   hardhat: HardHat,
//   barchart: BarChart3,
//   checkcircle: CheckCircle,
//   palette: Palette,
//   wrench: Wrench,
//   dollar: DollarSign,
//   building: Building2,
//   sofa: Sofa,
//   key: KeyRound,
// };

// import Footer from "./Footer";

// /* Local & Branding Assets */
// import heroBg from "../assets/about.png";
// import logoBlack from "../assets/studioDNA_logo_black.png";
// import designImg from "../assets/designImg.avif";
// import buildImg from "../assets/buildImg.png";
// import supplyImg from "../assets/supplyImg.avif";
// import architectureImg from "../assets/inspact.png";
// import landscapeImg from "../assets/renovation-remodeling.jpg";
// import interiorImg from "../assets/interior.png";
// import productImg from "../assets/renovation.jpg";

// /* Scroll-reveal Helper */
// const Reveal = ({ children, delay = 0, className = "" }) => {
//   const ref = useRef(null);
//   const supportsIO = typeof window !== "undefined" && "IntersectionObserver" in window;
//   const [visible, setVisible] = useState(!supportsIO);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el || !supportsIO) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.12 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [supportsIO]);

//   return (
//     <div
//       ref={ref}
//       style={{ transitionDelay: `${delay}ms` }}
//       className={`transition-all duration-1000 ease-out will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//         } ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// /* ============ DESIGN • BUILD • SUPPLY ============ */
// const corePillars = [
//   {
//     num: "01",
//     title: "Design",
//     image: designImg,
//     subtitle:
//       "Architecture and specialist design coordinated as one system — from first sketch to approval.",
//     items: [
//       { name: "Architectural design" },
//       { name: "Structural design" },
//       { name: "Mechanical design" },
//       { name: "Electrical design" },
//       { name: "Plumbing design" },
//       { name: "HVAC design" },
//       { name: "Fire design" },
//       { name: "Graphics & visualisation" },
//       { name: "Authority approval" },
//       { name: "Special approval" },
//       { name: "Green building certification" },
//       { name: "Feasibility reports" },
//     ],
//   },
//   {
//     num: "02",
//     title: "Build",
//     image: buildImg,
//     subtitle:
//       "Construction, fit-out and delivery executed across varied structural systems with rigorous supervision.",
//     items: [
//       { name: "RCC and masonry structures" },
//       { name: "Prefabricated & metal structures" },
//       { name: "Composite structures" },
//       { name: "Wooden and bamboo structures" },
//       { name: "Rammed-earth structures" },
//       { name: "Interior fit-out" },
//       { name: "Landscape construction" },
//       { name: "Project management" },
//       { name: "Legal & documentation services" },
//     ],
//   },
//   {
//     num: "03",
//     title: "Supply",
//     image: supplyImg,
//     subtitle:
//       "Material and product sourcing connected directly to project delivery — local and imported.",
//     items: [
//       { name: "Local supply" },
//       { name: "Imported supply" },
//       { name: "Sourcing" },
//       { name: "Indenting" },
//     ],
//   },
// ];

// /*  FULL SERVICE INDEX  */
// const serviceIndex = [
//   { num: "01", title: "Planning", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80", description: "Strategic site and program analysis to inform the design process, ensuring optimal spatial and functional outcomes." },
//   { num: "02", title: "Feasibility Study", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80", description: "Evaluating financial, regulatory, and spatial parameters to determine project viability before investment." },
//   { num: "03", title: "Site Analysis", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80", description: "In-depth contextual and environmental study to align building designs seamlessly with their surroundings." },
//   { num: "04", title: "Cost Estimating", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80", description: "Detailed bill of quantities and financial forecasting to maintain budget integrity across phases." },
//   { num: "05", title: "Masterplans", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80", description: "Comprehensive long-term development strategies for large-scale residential, commercial, and mixed-use sites." },
//   { num: "06", title: "Space Planning", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", description: "Optimizing interior layout and flow to maximize usability, circulation, and spatial experience." },
//   { num: "07", title: "Conceptual Design", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80", description: "Crafting foundational architectural visions using 3D massing, preliminary sketches, and material concepts." },
//   { num: "08", title: "Residential Architecture", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80", description: "Bespoke single-family homes and luxury villas engineered for comfort, light, and timeless living." },
//   { num: "09", title: "Commercial Architecture", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", description: "High-performance office complexes, retail centers, and mixed-use commercial destinations." },
//   { num: "10", title: "Multifamily Architecture", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80", description: "Dense, sustainable apartment buildings and community-centric housing developments." },
//   { num: "11", title: "Storage Facilities", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80", description: "Efficient, secure industrial warehouse and self-storage facility architectural design." },
//   { num: "12", title: "Civic Architecture", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80", description: "Public infrastructure, government facilities, and community centers designed for civic pride." },
//   { num: "13", title: "Project Management", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80", description: "End-to-end administration, procurement supervision, and timeline management for building delivery." },
//   { num: "14", title: "Code Analysis", image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRTarCAI6vIuVbrFof2EhyLPO7PmCrRWtNGHpW3Gc5-tGI7hACnh8RJiuba6Tm0-WebsLTX3ULnjk5sBAk", description: "Ensuring all architectural proposals strictly comply with local building codes, zoning, and safety standards." },
//   { num: "15", title: "Interior Design", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", description: "Curated interior environments balancing warm textures, custom joinery, and lighting atmospheres." },
//   { num: "16", title: "FF&E", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", description: "Bespoke furniture procurement, custom fixture specification, and turn-key FF&E integration." },
//   { num: "17", title: "Archviz Renders & Animations", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80", description: "Photorealistic 3D architectural renders, VR walkthroughs, and cinema-grade marketing films." },
// ];

// /*  HOW WE BUILD STEPS (same steps & points as About page)  */
// const constructionProcess = [
//   {
//     num: "01",
//     title: "Space Analysis",
//     description:
//       "We start with nothing but ground. Soil, orientation, sun path, wind direction, neighbouring mass, access roads and local zoning are all surveyed so every later decision rests on facts, not guesses.",
//     points: [
//       { name: "Site survey & soil check", icon: "compass" },
//       { name: "Sun path + wind mapping", icon: "sun" },
//       { name: "Zoning & legal limits", icon: "shield" },
//     ],
//   },
//   {
//     num: "02",
//     title: "Turning constraints into form",
//     description:
//       "Your brief becomes plans, sections and 3D massing. We test multiple layouts against your lifestyle or business flow until the proportions, circulation and daylight feel effortless.",
//     points: [
//       { name: "Concept & massing studies", icon: "pencil" },
//       { name: "Floor plans & elevations", icon: "layout" },
//       { name: "3D walkthrough review", icon: "box" },
//     ],
//   },
//   {
//     num: "03",
//     title: "Air, light & comfort simulation",
//     description:
//       "Before a single brick is ordered we simulate how the building breathes — cross ventilation, daylight penetration, shading, acoustics and thermal performance — so the space stays comfortable year-round.",
//     points: [
//       { name: "Airflow & ventilation study", icon: "wind" },
//       { name: "Daylight + shading analysis", icon: "lightbulb" },
//       { name: "Thermal & acoustic comfort", icon: "thermometer" },
//     ],
//   },
//   {
//     num: "04",
//     title: "A budget that holds",
//     description:
//       "A transparent bill of quantities, item-by-item rates and a phase-wise cash-flow plan. You see exactly where every unit of budget goes — no hidden lines, no mid-project surprises.",
//     points: [
//       { name: "Detailed BOQ", icon: "calculator" },
//       { name: "Phase-wise cash flow", icon: "trending" },
//       { name: "Contingency planning", icon: "shield-check" },
//     ],
//   },
//   {
//     num: "05",
//     title: "One clear master timeline",
//     description:
//       "Design, cost and schedule are locked into a single approved package. You sign off once on a complete picture: drawings, finishes, milestones and delivery date.",
//     points: [
//       { name: "Approved drawing set", icon: "clipboard" },
//       { name: "Milestone schedule", icon: "calendar" },
//       { name: "Single-point approval", icon: "file-check" },
//     ],
//   },
//   {
//     num: "06",
//     title: "Sourcing & procurement",
//     description:
//       "We buy on your behalf from vetted suppliers — steel, cement, stone, timber, glazing and fixtures — with quality testing, samples for approval and logistics handled end to end.",
//     points: [
//       { name: "Vetted supplier network", icon: "handshake" },
//       { name: "Sample approval & QC", icon: "search" },
//       { name: "Delivery logistics", icon: "truck" },
//     ],
//   },
//   {
//     num: "07",
//     title: "Construction",
//     description:
//       "Foundation, frame, envelope, MEP roughing and finishing — executed by our supervised teams with weekly site reports, photo updates and strict safety and quality checkpoints.",
//     points: [
//       { name: "Supervised site execution", icon: "hardhat" },
//       { name: "Weekly progress reports", icon: "barchart" },
//       { name: "Stage-wise quality checks", icon: "checkcircle" },
//     ],
//   },
//   {
//     num: "08",
//     title: "Client Customization",
//     description:
//       "Layout tweaks, finish swaps, joinery details or smart-home additions — we build in flexible decision windows so you can personalise without derailing cost or schedule.",
//     points: [
//       { name: "Finish & material swaps", icon: "palette" },
//       { name: "Custom joinery options", icon: "wrench" },
//       { name: "Cost-impact shown upfront", icon: "dollar" },
//     ],
//   },
//   {
//     num: "09",
//     title: "Handover, fully finished",
//     description:
//       "Façade, landscape and lighting outside; furniture, fixtures and styling inside. We close out snag lists, hand over warranties and give you the keys to a space ready to live in.",
//     points: [
//       { name: "Façade & landscape", icon: "building" },
//       { name: "FF&E and styling", icon: "sofa" },
//       { name: "Snag-free handover", icon: "key" },
//     ],
//   },
// ];

// const Services = () => {
//   const navigate = useNavigate();

//   /* Hover state for the service index list */
//   const [activeHoverIndex, setActiveHoverIndex] = useState(null);
//   const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
//   const [activeServiceIndex, setActiveServiceIndex] = useState(null);

//   /* State for How We Build process section */
//   const processRef = useRef(null);
//   const [hoveredProcess, setHoveredProcess] = useState(null);
//   const [openStep, setOpenStep] = useState(null);
//   const [showMoreProcess, setShowMoreProcess] = useState(false);
//   const [showMoreServices, setShowMoreServices] = useState(false);

//   const isTouchDevice =
//     typeof window !== "undefined" &&
//     typeof window.matchMedia === "function" &&
//     window.matchMedia("(hover: none)").matches;

//   const displayedProcess = showMoreProcess
//     ? constructionProcess
//     : constructionProcess.slice(0, 5);

//   const displayedServices = showMoreServices
//     ? serviceIndex
//     : serviceIndex.slice(0, 5);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setHoverPos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
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

//   const handleStepClick = (idx) => {
//     if (!isTouchDevice) return;
//     setOpenStep((prev) => (prev === idx ? null : idx));
//   };


//   const handleProcessToggle = () => {
//     setShowMoreProcess((prev) => !prev);
//     scrollToRefWithOffset(processRef, 250);
//   };

//   const handleServicesToggle = () => {
//     setShowMoreServices((prev) => !prev);
//   };

//   // Close the expanded step panel when clicking anywhere outside the rows
//   useEffect(() => {
//     const closeOnOutsideClick = (e) => {
//       if (!e.target.closest("[data-process-row]")) {
//         setOpenStep(null);
//       }
//     };
//     document.addEventListener("click", closeOnOutsideClick);
//     return () => document.removeEventListener("click", closeOnOutsideClick);
//   }, []);

//   return (
//     <>
//       <main className="relative z-10 w-full min-h-screen bg-white text-gray-900 font-sans overflow-hidden">

//         {/*  1. INTRO STATEMENT  */}
//         <section className="relative w-full bg-white px-5 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-20 md:py-28 mt-12 sm:mt-20">
//           <div className="max-w-[1600px] mx-auto">
//             <Reveal>
//               <div className="mb-6">
//                 <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-gray-900 
//                 leading-tight sm:max-w-4xl max-w-4xl">
//                   One Studio. Three Disciplines. <h1>End-To-End Delivery.</h1>
//                 </h2>
//               </div>
//             </Reveal>

//             <Reveal delay={120}>
//               <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-mono font-normal text-gray-700 leading-relaxed max-w-3xl">
//                 Studio DNA is the focused design branch of Outline Architects, backed by 30 years of practice. From planning and feasibility through architecture, engineering and interior design, to construction and material supply — we deliver the full journey of a project under one roof.
//               </p>
//             </Reveal>
//           </div>
//         </section>

//         {/*  2. HERO SERVICE BANNER  */}
//         <section className="relative w-full h-[60vh] sm:h-[75vh] md:h-[90vh] overflow-hidden flex items-end">
//           <img
//             src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80"
//             alt="Services Banner - Architectural Design & Engineering"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//           {/* Black gradient overlay from bottom */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//           {/* Banner Title */}
//           <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 sm:px-10 md:px-16 lg:px-24 pb-12 sm:pb-16 md:pb-24">
//             <Reveal>
//               <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#5b7fc7] block mb-2">
//                 — What We Offer
//               </span>
//               <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-bold text-white tracking-tight uppercase">
//                 Our Services
//               </h1>
//             </Reveal>
//           </div>
//         </section>



//         {/* ================= 3. DESIGN • BUILD • SUPPLY ================= */}
//         <section className="relative w-full border-y border-gray-100 py-20 md:py-32 overflow-hidden">
//           <div
//             className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
//             style={{ backgroundImage: `url(${heroBg})` }}
//           />
//           <div className="absolute inset-0 z-0" />

//           <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-12 md:px-16 lg:px-38">
//             <Reveal>
//               <div className="-mb-5 md:mb-20">
//                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
//                   <h2 className="text-2xl sm:text-5xl text-[#5b7fc7] lg:text-5xl font-mono font-bold  leading-tight">
//                     Design · Build · Supply
//                   </h2>

//                   <p className="ml-auto text-base mr-5 sm:text-lg md:text-xl font-mono text-gray-700 max-w-md text-left leading-snug">
//                     From architecture and engineering to construction, fit-out and sourcing.
//                   </p>
//                 </div>

//                 <div className="mt-8 w-full border-t border-gray-300"></div>
//               </div>
//             </Reveal>

//             <div className="divide-y divide-gray-300/80 border-t border-b border-gray-300/80">
//               {corePillars.map((item, idx) => (
//                 <Reveal key={item.title} delay={idx * 150}>
//                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-16 md:py-24">

//                     <div className="lg:col-span-4 flex flex-col justify-center text-left">
//                       <h3 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-[#5b7fc7] tracking-tight">
//                         {item.title}
//                       </h3>
//                       <p className="mt-6 text-lg sm:text-xl md:text-2xl font-mono font-medium text-gray-800 leading-relaxed max-w-sm">
//                         {item.subtitle}
//                       </p>
//                     </div>

//                     <div className="lg:col-span-4 flex justify-center items-center">
//                       <div className="relative w-full grayscale-70 lg:-ml-30 max-w-md h-64 sm:h-80 overflow-hidden rounded-none shadow-sm border border-gray-200/80 bg-gray-100">
//                         <img
//                           src={item.image}
//                           alt={`${item.title} service visual`}
//                           className="w-full h-full object-cover filter grayscale-[30%] hover:grayscale-0 transition-all duration-500 ease-out"
//                         />
//                       </div>
//                     </div>

//                     <div className="lg:col-span-4">
//                       <ul className="divide-y divide-gray-300/80 border-t border-b border-gray-300/80">
//                         {item.items.map((sub, subIdx) => (
//                           <li
//                             key={subIdx}
//                             className="py-4 font-mono text-base sm:text-lg md:text-2xl text-gray-900 uppercase font-semibold tracking-wide"
//                           >
//                             {sub.name}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/*  4. FULL SERVICE INDEX  */}
//         <section className="relative w-full bg-white px-4 sm:px-8 md:px-12 lg:px-60 py-12 sm:py-16 md:py-24">
//           <div className="w-full max-w-[1920px] mx-auto">
//             <Reveal>
//               <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
//                 <div>
//                   {/* <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#5b7fc7]">
//                     — Complete Service Index
//                   </span> */}
//                   <h2 className="mt-2 text-lg sm:text-2xl lg:text-3xl font-mono font-bold text-gray-900 leading-tight">
//                     Everything Under One Roof
//                   </h2>
//                 </div>
//                 <p className="text-[11px] sm:text-xs font-mono text-gray-600 max-w-sm md:text-right">
//                   Tap or hover over a service to preview what it covers. Every line of work is delivered by the same studio that designed it.
//                 </p>
//               </div>
//             </Reveal>

//             <Reveal delay={120}>
//               <div className="relative border-t border-gray-300 w-full">
//                 {displayedServices.map((item, index) => {
//                   const isHovered = activeHoverIndex === index;

//                   return (
//                     <div
//                       key={item.num}
//                       onMouseEnter={() => setActiveHoverIndex(index)}
//                       onMouseLeave={() => setActiveHoverIndex(null)}
//                       onMouseMove={handleMouseMove}
//                       onClick={() => {
//                         if (
//                           typeof window !== "undefined" &&
//                           window.innerWidth < 1024
//                         ) {
//                           setActiveServiceIndex((prev) =>
//                             prev === index ? null : index
//                           );
//                         }
//                       }}
//                       className={`group relative border-b border-gray-300 cursor-pointer transition-all duration-300 w-full ${isHovered || activeServiceIndex === index
//                           ? "bg-[#5b7fc7] text-white"
//                           : "hover:bg-gray-100 text-gray-900"
//                         }`}
//                     >
//                       <div className="flex items-center justify-between py-3.5 sm:py-4 md:py-5 px-2 sm:px-4">
//                         <div className="flex items-center gap-3 sm:gap-6 md:gap-8 z-10">
//                           <span
//                             className={`text-[11px] sm:text-xs md:text-sm font-mono font-extrabold tracking-wider transition-colors duration-300 ${isHovered || activeServiceIndex === index
//                                 ? "text-white/90"
//                                 : "text-gray-400"
//                               }`}
//                           >
//                             {item.num}
//                           </span>
//                           <h3
//                             className={`text-sm sm:text-lg md:text-xl lg:text-2xl font-mono font-medium transition-transform duration-500 ease-out ${isHovered || activeServiceIndex === index
//                                 ? "translate-x-2 sm:translate-x-4 font-semibold"
//                                 : "text-gray-900"
//                               }`}
//                           >
//                             {item.title}
//                           </h3>
//                         </div>

//                         <ArrowUpRight
//                           size={18}
//                           className={`z-10 shrink-0 transition-all duration-300 ${isHovered || activeServiceIndex === index
//                               ? "rotate-45 scale-110 opacity-100 text-white"
//                               : "text-gray-400 opacity-60 group-hover:opacity-100"
//                             }`}
//                         />
//                       </div>

//                       {/* Inline description for mobile & tablet (below lg) */}
//                       <div
//                         className={`grid lg:hidden transition-all duration-300 ease-in-out ${activeServiceIndex === index
//                             ? "grid-rows-[1fr] opacity-100"
//                             : "grid-rows-[0fr] opacity-0"
//                           }`}
//                       >
//                         <div className="overflow-hidden px-2 sm:px-4">
//                           <div className="pb-4 sm:pb-5 pt-1 border-t border-white/20">
//                             <p className="text-[11px] sm:text-xs font-mono leading-relaxed text-white/90 font-medium">
//                               {item.description}
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       {isHovered && (
//                         <div
//                           style={{
//                             top: `${hoverPos.y}px`,
//                             left: `${hoverPos.x}px`,
//                           }}
//                           className="hidden lg:flex -mt-44 absolute z-30 h-[240px] w-[460px] shadow-2xl overflow-hidden border border-white/60 pointer-events-none transition-all duration-150 ease-out bg-white/95 backdrop-blur-md"
//                         >
//                           <div className="w-1/2 h-full overflow-hidden">
//                             <img
//                               src={item.image}
//                               alt={item.title}
//                               className="w-full h-full object-cover"
//                             />
//                           </div>
//                           <div className="w-1/2 h-full p-4 flex flex-col justify-center text-left">
//                             <p className="text-[11px] sm:text-xs font-mono leading-relaxed text-gray-800 font-medium">
//                               {item.description}
//                             </p>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </Reveal>

//             {/* See More Services Button */}
//             <div className="mt-6 flex justify-start">
//               <button
//                 onClick={handleServicesToggle}
//                 className="group relative overflow-hidden flex items-center gap-2 text-[9px] sm:text-[10px] font-bold
//                   tracking-[0.15em] text-gray-900 uppercase font-mono bg-white border border-gray-400 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer"
//               >
//                 <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />

//                 <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
//                   {showMoreServices ? "Show Less" : "See More Services"}
//                 </span>

//                 <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
//                   {showMoreServices ? (
//                     <ChevronUp
//                       size={14}
//                       className="transition-transform duration-300 group-hover:-translate-y-0.5"
//                     />
//                   ) : (
//                     <ChevronDown
//                       size={14}
//                       className="transition-transform duration-300 group-hover:translate-y-0.5"
//                     />
//                   )}
//                 </span>
//               </button>
//             </div>

//             {/*  HOW WE BUILD SECTION (same layout & steps as About page)  */}
//             <div
//               ref={processRef}
//               className="mt-10 md:mt-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start"
//             >
//               {/* Left Header */}
//               <div className="lg:col-span-4 sticky top-24 pt-6">
//                 <h2 className="inline-block text-lg sm:text-xl md:text-2xl lg:text-3xl lg:ml-4 uppercase tracking-[0.1em] text-gray-900 font-bold font-mono">
//                   How We Build
//                 </h2>
//               </div>

//               {/* Right Accordion List */}
//               <div className="lg:col-span-8 border-t-2 border-gray-200">
//                 {displayedProcess.map((item, idx) => {
//                   const isHovered = hoveredProcess === idx;

//                   return (
//                     <div
//                       key={idx}
//                       onMouseEnter={() => {
//                         if (!isTouchDevice) setHoveredProcess(idx);
//                       }}
//                       onMouseLeave={() => setHoveredProcess(null)}
//                       onClick={() => handleStepClick(idx)}
//                       data-process-row={idx}
//                       className="border-b border-gray-300 py-3.5 md:py-5 cursor-pointer transition-colors duration-300 group"
//                     >
//                       {/* Title Container with Blue Number */}
//                       <div className="flex items-center justify-between gap-3 md:gap-5 w-full">
//                         <div className="flex items-baseline gap-2.5 md:gap-5 min-w-0">
//                           <span className="text-[10px] sm:text-xs md:text-sm font-mono font-normal text-gray-500 mr-2 sm:mr-6 shrink-0">
//                             Step: {item.num}
//                           </span>
//                           <h3
//                             className={`text-sm sm:text-lg md:text-xl lg:text-2xl font-mono tracking-tight transition-all duration-300 ${
//                               isHovered
//                                 ? "text-gray-950 font-semibold"
//                                 : "text-gray-800 font-medium group-hover:text-gray-950"
//                             }`}
//                           >
//                             {item.title}
//                           </h3>
//                         </div>

//                         <ArrowUpRight
//                           size={14}
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleStepClick(idx);
//                           }}
//                           className="lg:hidden shrink-0 text-gray-300 cursor-pointer"
//                         />
//                       </div>

//                       {/* Expandable Description Directly Under Title */}
//                       <div
//                         onClick={(e) => e.stopPropagation()}
//                         className={`grid transition-all duration-500 ease-in-out ${
//                           isHovered || (isTouchDevice && openStep === idx)
//                             ? "grid-rows-[1fr] opacity-100 pt-3 md:pt-4 md:ml-5"
//                             : "grid-rows-[0fr] opacity-0"
//                         }`}
//                       >
//                         <div className="overflow-hidden ml-[4.5rem] sm:ml-[5.5rem]">
//                           <p className="text-[11px] sm:text-xs md:text-sm font-mono leading-relaxed text-gray-900 max-w-3xl
//                            mb-3 md:mb-4">
//                             {item.description}
//                           </p>

//                           <div className="pt-3 border-t border-gray-200">
//                             {item.points.map((pt, pIdx) => {
//                               const Icon = pointIcons[pt.icon];
//                               return (
//                                 <div
//                                   key={pIdx}
//                                   className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
//                                 >
//                                   <div className="flex items-center gap-2">
//                                     <span className="h-1 w-1 rounded-full bg-[#5b7fc7] shrink-0" />
//                                     <span className="text-[10px] sm:text-xs md:text-sm font-mono font-semibold text-gray-700 uppercase tracking-wider">
//                                       {pt.name}
//                                     </span>
//                                   </div>
//                                   {/* {Icon && <Icon size={16} className="text-gray-400 shrink-0" />} */}
//                                 </div>
//                               );
//                             })}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}

//                 {/* See More Steps Button */}
//                 <div className="mt-6 flex justify-start">
//                   <button
//                     onClick={handleProcessToggle}
//                     className="group relative overflow-hidden flex items-center gap-2 text-[9px] sm:text-[10px] font-bold
//                       tracking-[0.15em] text-gray-900 uppercase font-mono bg-white border border-gray-400 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer"
//                   >
//                     <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />

//                     <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
//                       {showMoreProcess ? "Show Less" : "See More Steps"}
//                     </span>

//                     <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
//                       {showMoreProcess ? (
//                         <ChevronUp
//                           size={14}
//                           className="transition-transform duration-300 group-hover:-translate-y-0.5"
//                         />
//                       ) : (
//                         <ChevronDown
//                           size={14}
//                           className="transition-transform duration-300 group-hover:translate-y-0.5"
//                         />
//                       )}
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/*  5. CTA  */}
//         <section className="relative w-full bg-[#dcd8c2] px-5 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-24 md:py-28 overflow-hidden">
//           <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
//             <Reveal>
//               <div>
//                 <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#4f5d39]">
//                   — Start A Project
//                 </span>
//                 <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-mono font-bold text-[#333333] leading-tight">
//                   Have a vision in mind?
//                   <br />
//                   Let's build it together.
//                 </h2>
//               </div>
//             </Reveal>

//             <Reveal delay={150}>
//               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
//                 <a
//                   href="tel:+8801711000000"
//                   className="group relative overflow-hidden inline-flex items-center gap-3 px-6 sm:px-7 py-4 bg-[#333333] text-white
//                    rounded-none border border-[#333333] transition-all duration-500 hover:bg-transparent hover:text-[#333333]"
//                 >
//                   <span className="relative z-10 text-xs sm:text-sm font-mono font-bold tracking-[0.15em] uppercase">
//                     Discuss Your Project
//                   </span>
//                   <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
//                 </a>

//                 <button
//                   onClick={() => navigate("/projects")}
//                   className="group inline-flex items-center gap-3 px-6 sm:px-7 py-4 border border-[#333333]/40 text-[#333333] rounded-none transition-all duration-500 hover:border-[#333333] hover:bg-[#333333] hover:text-white"
//                 >
//                   <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.15em] uppercase">
//                     View Our Work
//                   </span>
//                   <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
//                 </button>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         <style>{`
//           @keyframes slowZoom {
//             0%, 100% { transform: scale(1.02); }
//             50% { transform: scale(1.06); }
//           }
//         `}</style>
//       </main>

//       {/* Footer Block */}
//       <div className="relative z-10 w-full border-t border-neutral-300 bg-white/70 backdrop-blur-md">
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Services;















import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUp } from "lucide-react";

import heroBg from "../assets/about.png";
import designImg from "../assets/designImg.avif";
import buildImg from "../assets/buildImg.png";
import supplyImg from "../assets/supplyImg.avif";

/* Scroll Reveal */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);

  const supportsIO =
    typeof window !== "undefined" &&
    "IntersectionObserver" in window;

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
      className={`transition-all duration-[2000ms] ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

/* ================= DESIGN • BUILD • SUPPLY ================= */

const corePillars = [
  {
    num: "01",
    title: "Design",
    image: designImg,
    subtitle:
      "Architecture and specialist design coordinated as one system — from first sketch to approval.",
    items: [
      "Architectural design",
      "Structural design",
      "Mechanical design",
      "Electrical design",
      "Plumbing design",
      "HVAC design",
      "Fire design",
      "Graphics & visualisation",
      "Authority approval",
      "Special approval",
      "Green building certification",
      "Feasibility reports",
    ],
  },
  {
    num: "02",
    title: "Build",
    image: buildImg,
    subtitle:
      "Construction, fit-out and delivery executed across varied structural systems with rigorous supervision.",
    items: [
      "RCC and masonry structures",
      "Prefabricated & metal structures",
      "Composite structures",
      "Wooden and bamboo structures",
      "Rammed-earth structures",
      "Interior fit-out",
      "Landscape construction",
      "Project management",
      "Legal & documentation services",
    ],
  },
  {
    num: "03",
    title: "Supply",
    image: supplyImg,
    subtitle:
      "Material and product sourcing connected directly to project delivery — local and imported.",
    items: [
      "Local supply",
      "Imported supply",
      "Sourcing",
      "Indenting",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setShowTopBtn(scrolled > totalHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative z-10 min-h-screen w-full overflow-hidden bg-theme-primary font-sans text-theme-primary transition-colors duration-500">

      {/* ================= THREE CORE SERVICES ================= */}

      <section className="relative w-full border-y border-gray-100 py-4 sm:py-16 md:py-24 lg:py-36  px-4 sm:px-6 md:px-14 lg:px-16">

        {/* Background */}
        {/* <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        /> */}

        <div className="absolute inset-0 z-0 bg-white/10" />

        <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">

          {/* Section Heading */}

          <Reveal>
            <div className="mb-8 md:mb-16 lg:mb-24 px-0 md:px-8 lg:px-18">

              <div className="relative flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:items-end">

                {/* Back Button - Relative on mobile/tablet, absolutely positioned only on large screens */}
                <button
                  onClick={() => navigate(-1)}
                  className="group relative md:absolute mt-8 mb-4 sm:-mt-10 sm:mb-0  md:-left-32 lg:-left-37 md:top-1/2 z-20 flex md:-translate-y-1/2 
                  items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em]
                   text-gray-500 transition-all duration-300 hover:text-gray-900"
                >
                  <span
                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center bg-gray-700 text-white transition-all
                     duration-300 group-hover:border-gray-900 group-hover:bg-[#5b7fc7]"
                  >
                    <ArrowLeft
                      size={14}
                      strokeWidth={1.5}
                      className="text-white transition-transform duration-300 group-hover:-translate-x-1"
                    />
                  </span>

                  <span className="block">
                    Back
                  </span>
                </button>

                <h2 className="font-mono text-base sm:text-xl sm:mt-20 md:text-3xl lg:text-3xl xl:text-3xl font-extrabold leading-tight whitespace-nowrap
                 text-[#5b7fc7]">
                  Design · Build · Supply
                </h2>
{/* 
                <p className="max-w-md text-left font-mono -mb-3 text-xs sm:text-sm md:text-base leading-relaxed text-gray-700">
                  From architecture and engineering to construction,
                  fit-out and sourcing.
                </p> */}

              </div>

            </div>
          </Reveal>

          {/* ================= SERVICE ROWS ================= */}

          <div className="divide-y divide-gray-300/80 border-b border-t border-gray-300/80">

            {corePillars.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 1200}>

                <div className="grid grid-cols-1 items-start md:items-center gap-8 py-8 sm:py-12 md:py-16 lg:grid-cols-12 lg:gap-16 lg:py-28 px-0 sm:px-4 md:px-8 lg:px-20">

                  {/* Service Title */}

                  <div className="flex flex-col justify-center text-left lg:col-span-4 pr-0 lg:pr-4">

                    <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#5b7fc7] lg:text-5xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 sm:mt-4 lg:mt-5 max-w-sm font-mono text-xs sm:text-sm md:text-base font-medium leading-relaxed text-gray-800">
                      {item.subtitle}
                    </p>

                  </div>

                  {/* Image */}

                  <div className="flex items-center justify-center lg:col-span-4 w-full">

                    <div className="relative h-36 sm:h-56 md:h-64 lg:h-60 w-full max-w-md overflow-hidden border border-gray-200/80 bg-gray-100 shadow-sm">

                      <img
                        src={item.image}
                        alt={`${item.title} service`}
                        className="h-full w-full object-cover grayscale-[90%] transition-all duration-500 ease-out hover:grayscale-0"
                      />

                    </div>

                  </div>

                  {/* Service List */}

                  <div className="w-full lg:col-span-4 pl-0 lg:pl-4">

                    <ul className="divide-y divide-gray-300/80 border-b border-t border-gray-300/80">

                      {item.items.map((service, serviceIndex) => (
                        <li
                          key={`${item.num}-${serviceIndex}`}
                          className="py-2.5 sm:py-3 px-1 sm:px-2 font-mono text-[11px] sm:text-xs md:text-base font-semibold uppercase tracking-wide text-gray-900"
                        >
                          {service}
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

      {/* Floating Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-[#5b7fc7] text-white shadow-md transition-all duration-300 hover:h-9 hover:w-9 hover:shadow-lg cursor-pointer ${showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <ArrowUp
          size={14}
          className="opacity-100 scale-100 transition-all duration-300"
        />
      </button>

    </main>
  );
};

export default Services;