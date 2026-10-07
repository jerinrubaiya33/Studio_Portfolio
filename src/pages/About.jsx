// import React, { useEffect, useRef, useState, useCallback } from "react";
// import { Link } from "react-router-dom";
// import { ArrowUp, ArrowRight } from "lucide-react";
// import archVideo from "../assets/arch.mp4";

// const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState(
//     typeof window !== "undefined" ? window.innerWidth < 768 : false
//   );
//   useEffect(() => {
//     const mq = window.matchMedia("(max-width: 767px)");
//     const handler = (e) => setIsMobile(e.matches);
//     mq.addEventListener("change", handler);
//     setIsMobile(mq.matches);
//     return () => mq.removeEventListener("change", handler);
//   }, []);
//   return isMobile;
// };

// const corePillars = [
//   {
//     title: "Design",
//     subtitle:
//       "Architecture and specialist design coordinated as one system.",
//   },
//   {
//     title: "Build",
//     subtitle:
//       "Construction, fit-out & delivery across varied structural systems.",
//   },
//   {
//     title: "Supply",
//     subtitle:
//       "Material and product sourcing connected to project delivery.",
//   },
// ];

// const lerp = (a, b, t) => a + (b - a) * t;
// const clamp01 = (v) => Math.min(Math.max(v, 0), 1);

// const About = () => {
//   const sectionRef = useRef(null);
//   const videoSectionRef = useRef(null);
//   const isMobile = useIsMobile();

//   const [activePillarIndex, setActivePillarIndex] = useState(2);
//   const [scrollState, setScrollState] = useState({
//     showTopBtn: false,
//     overallProgress: 0,
//     videoScale: 0.4,
//   });

//   const rafRef = useRef(null);

//   const recompute = useCallback(() => {
//     let overallProgress = 0;
//     let videoScale = 0.4;
//     let showTopBtn = false;

//     const section = sectionRef.current;
//     if (section) {
//       const rect = section.getBoundingClientRect();
//       const total = rect.height - window.innerHeight;
//       const distanceScrolled = -rect.top;
//       overallProgress = total > 0 ? clamp01(distanceScrolled / total) : 0;
//     }

//     const videoSec = videoSectionRef.current;
//     if (videoSec) {
//       const rect = videoSec.getBoundingClientRect();
//       const winHeight = window.innerHeight;
//       const maxDistance = isMobile ? winHeight * 0.35 : winHeight * 0.85;
//       const initialScale = isMobile ? 0.25 : 0.15;
//       const progress = clamp01((winHeight - rect.top) / maxDistance);
//       videoScale = lerp(initialScale, 1.45, progress);
//     }

//     const scrolled = window.scrollY;
//     const totalHeight =
//       document.documentElement.scrollHeight - window.innerHeight;
//     showTopBtn = totalHeight > 0 && scrolled > totalHeight * 0.3;

//     setScrollState({ showTopBtn, overallProgress, videoScale });

//     if (overallProgress < 0.42) {
//       setActivePillarIndex(0);
//     } else if (overallProgress < 0.75) {
//       setActivePillarIndex(1);
//     } else {
//       setActivePillarIndex(2);
//     }
//   }, [isMobile]);

//   useEffect(() => {
//     const onScroll = () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       rafRef.current = requestAnimationFrame(() => {
//         recompute();
//         rafRef.current = null;
//       });
//     };
//     recompute();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", recompute);
//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", recompute);
//     };
//   }, [recompute]);

//   const { showTopBtn, videoScale } = scrollState;
//   const active = corePillars[activePillarIndex];

//   return (
//     <>
//       <style>{`
//         html, body {
//           scrollbar-width: none;
//           -ms-overflow-style: none;
//           background-color: #2E3133;
//           color: #F7F7F4;
//         }
//         html::-webkit-scrollbar, body::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>

//       {/* ===== TITLE BLOCK SECTION ===== */}
//       <section
//         ref={sectionRef}
//         className="relative w-full min-h-[70vh] sm:min-h-[90vh] bg-[#2E3133] text-[#F7F7F4] font-sans px-6 sm:px-12 lg:px-24 py-4 pb-1 sm:py-14 transition-colors duration-500 about-page-section"
//       >
//         <div className="max-w-auto mx-auto w-full mt-15 flex flex-col h-auto lg:h-screen lg:sticky lg:top-0 justify-start">

//           {/* Services Title (Top Left) & Statement Block */}
//           <div className="relative w-full mt-8 sm:mt-14 lg:mt-30 mb-6 lg:mb-8">
//             <h2 className="static lg:absolute top-2 left-40 text-2xl sm:text-3xl font-light uppercase tracking-wider leading-snug mb-5 lg:mb-0 text-[#F7F7F4] font-sans">
//               Our Services
//             </h2>
//             <div className="max-w-full lg:max-w-auto lg:ml-170 w-full lg:w-2/5">
//               <p className="text-base sm:text-xl font-serif text-left lg:text-left leading-relaxed text-[#F7F7F4]/90">
//                 One connected practice, coordinating ideas, engineering,
//                 execution and sourcing.
//               </p>
//             </div>
//           </div>

//           {/* Row of three */}
//           <div className="mt-10 sm:mt-14 lg:mt-14 flex flex-col justify-start">
//             <div className="border-t border-b border-[#F7F7F4]/15 py-9 sm:py-14 lg:py-20 flex flex-nowrap items-center
//              justify-center gap-3 sm:gap-8 lg:gap-10">
//               {corePillars.map((pillar, idx) => {
//                 const isActive = activePillarIndex === idx;
//                 return (
//                   <React.Fragment key={pillar.title}>
//                     <button
//                       onClick={() => setActivePillarIndex(idx)}
//                       onMouseEnter={() => setActivePillarIndex(idx)}
//                       className={`whitespace-nowrap text-2xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight transition-colors duration-300 ${
//                         isActive
//                           ? "text-[#A84E32]"
//                           : "text-[#F7F7F4] hover:text-[#F7F7F4]/70"
//                       }`}
//                     >
//                       {pillar.title}
//                     </button>

//                     {idx < corePillars.length - 1 && (
//                       <span className="text-xl sm:text-5xl md:text-6xl text-[#A84E32]/60 font-light select-none">
//                         +
//                       </span>
//                     )}
//                   </React.Fragment>
//                 );
//               })}
//             </div>

// {/* Subtitle & Underlined CTA Row */}
// <div className="mt-10 sm:mt-14 lg:mt-16 w-full lg:w-3/4 lg:ml-42 flex flex-col md:flex-row items-start md:items-center justify-between gap-7 pb-14 lg:pb-0">
//   <p className="text-base sm:text-xl font-serif leading-relaxed text-left transition-opacity duration-300 max-w-xl text-[#F7F7F4]/80">
//     {active.subtitle}
//   </p>

//   <Link
//     to="/services"
//     className="group relative shrink-0 inline-flex items-center justify-center lg:-mr-10 gap-2 text-xs sm:text-sm 
//     font-semibold tracking-wide text-[#F7F7F4] bg-[#2E3133] border border-[#F7F7F4]/50 px-5 py-2.5 rounded-md shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer overflow-hidden font-sans"
//   >
//     <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#A84E32] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />
//     <span className="relative z-10 transition-colors duration-500 group-hover:text-[#F7F7F4]">
//       See Full Services
//     </span>
//     <span className="relative z-10 transition-colors duration-500 group-hover:text-[#F7F7F4]">
//       <ArrowRight
//         size={14}
//         className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//       />
//     </span>
//   </Link>
// </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== PLATE / VIDEO SECTION ===== */}
//       <section
//         ref={videoSectionRef}
//         className="relative w-full bg-[#2E3133] pt-0 pb-20 sm:pt-10 sm:pb-48 font-sans transition-colors duration-500 about-page-section"
//       >
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32">
//           <div className="relative max-w-4xl mx-auto">
//             <div
//               className="relative w-full max-w-[280px] sm:max-w-lg md:max-w-4xl mx-auto aspect-video overflow-hidden rounded-2xl transition-transform duration-150 ease-out origin-center shadow-2xl border border-[#F7F7F4]/10"
//               style={{ transform: `scale(${videoScale})`, willChange: "transform" }}
//             >
//               <video
//                 src={archVideo}
//                 loop
//                 muted
//                 playsInline
//                 autoPlay
//                 className="w-full h-full object-cover filter brightness-90"
//               />

//               {/* corner registration marks */}
//               {[
//                 "top-3 left-3 border-t border-l",
//                 "top-3 right-3 border-t border-r",
//                 "bottom-3 left-3 border-b border-l",
//                 "bottom-3 right-3 border-b border-r",
//               ].map((pos) => (
//                 <span
//                   key={pos}
//                   className={`pointer-events-none absolute h-4 w-4 sm:h-5 sm:w-5 border-[#F7F7F4]/40 ${pos}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Back to top */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         aria-label="Back to top"
//         className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#F7F7F4]/20 bg-[#2E3133] text-[#D9A08B] shadow-sm transition-opacity duration-300 font-sans ${
//           showTopBtn ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <ArrowUp size={16} />
//       </button>
//     </>
//   );
// };

// export default About;






















import React, { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowRight } from "lucide-react";
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

const corePillars = [
  {
    title: "Design",
    subtitle:
      "Architecture and specialist design coordinated as one system.",
    points: [
      "Architectural design",
      "Structural design",
      "Mechanical design",
    ],
    linkText: "Explore More Design",
    to: "/services",
  },
  {
    title: "Build",
    subtitle:
      "Construction, fit-out and delivery across varied structural systems.",
    points: [
      "RCC and masonry structures",
      "Prefabricated & metal structures",
      "Composite structures",
    ],
    linkText: "Explore More Build",
    to: "/services",
  },
  {
    title: "Supply",
    subtitle:
      "Material and product sourcing connected to project delivery.",
    points: [
      "Local supply",
      "Imported supply",
      "Sourcing",
    ],
    linkText: "Explore More Supply",
    to: "/services",
  },
];

const waysOfWorkingItems = [
  { number: "01", title: "Architecture", to: "/projects?discipline=Exterior" },
  { number: "02", title: "Interior", to: "/projects?discipline=Interior" },
  { number: "03", title: "Landscape", to: "/projects" },
  { number: "04", title: "Hospitality", to: "/projects" },
  { number: "05", title: "Residential", to: "/projects" },
  { number: "06", title: "Healthcare", to: "/projects" },
];

const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => Math.min(Math.max(v, 0), 1);

const About = () => {
  const sectionRef = useRef(null);
  const videoSectionRef = useRef(null);
  const isMobile = useIsMobile();

  const [activePillarIndex, setActivePillarIndex] = useState(2);
  const [scrollState, setScrollState] = useState({
    showTopBtn: false,
    overallProgress: 0,
    videoScale: 0.4,
  });

  const rafRef = useRef(null);

  const recompute = useCallback(() => {
    let overallProgress = 0;
    let videoScale = 0.4;
    let showTopBtn = false;

    const section = sectionRef.current;
    if (section) {
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const distanceScrolled = -rect.top;
      overallProgress = total > 0 ? clamp01(distanceScrolled / total) : 0;
    }

    const videoSec = videoSectionRef.current;
    if (videoSec) {
      const rect = videoSec.getBoundingClientRect();
      const winHeight = window.innerHeight;
      const maxDistance = isMobile ? winHeight * 0.35 : winHeight * 0.85;
      const initialScale = isMobile ? 0.25 : 0.15;
      const progress = clamp01((winHeight - rect.top) / maxDistance);
      videoScale = lerp(initialScale, 1.45, progress);
    }

    const scrolled = window.scrollY;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    showTopBtn = totalHeight > 0 && scrolled > totalHeight * 0.3;

    setScrollState({ showTopBtn, overallProgress, videoScale });

    if (overallProgress < 0.42) {
      setActivePillarIndex(0);
    } else if (overallProgress < 0.75) {
      setActivePillarIndex(1);
    } else {
      setActivePillarIndex(2);
    }
  }, [isMobile]);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        recompute();
        rafRef.current = null;
      });
    };
    recompute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recompute);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recompute);
    };
  }, [recompute]);

  const { showTopBtn, videoScale } = scrollState;

  return (
    <>
      <style>{`
        html, body {
          scrollbar-width: none;
          -ms-overflow-style: none;
          background-color: #2E3133;
          color: #ffffff;
          overflow-x: hidden;
        }
        html::-webkit-scrollbar, body::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* ===== TITLE BLOCK SECTION ===== */}
      <section
        ref={sectionRef}
        className="relative w-full mt-15 sm:mt-0 min-h-auto lg:min-h-[90vh] lg:-ml-5 bg-[#8C777A7C6121] text-[#ffffff] font-sans px-4
          sm:px-8 lg:px-24 py-10 lg:py-14 transition-colors duration-500 about-page-section"
      >
        <div className="max-w-auto mx-auto w-full lg:mt-15 flex flex-col h-auto lg:h-screen lg:sticky lg:top-0 justify-start">

          {/* Services Title & Statement Block */}
          <div className="relative w-full mt-2 lg:mt-30 mb-6 lg:mb-8">
            <h2 className="static lg:absolute top-2 lg:left-40 text-3xl sm:text-4xl lg:text-4xl font-bold uppercase tracking-wider leading-snug mb-3 lg:mb-0 text-[#ffffff] font-sans">
              Our Services
            </h2>
            <div className="max-w-full lg:max-w-auto lg:ml-170 w-full lg:w-2/5">
              <p className="text-base sm:text-xl font-serif text-left leading-relaxed text-[#ffffff]">
                One connected practice, coordinating ideas, engineering,
                execution and sourcing.
              </p>
            </div>
          </div>

          {/* Row of three */}
          <div className="mt-6 sm:mt-10 lg:mt-14 flex flex-col lg:ml-15 justify-start">
            <div className="border-t border-b border-[#ffffff]/25 py-8 sm:py-12 lg:py-20 flex flex-col lg:flex-row lg:flex-nowrap items-start justify-center gap-12 lg:gap-16">

              {corePillars.map((pillar, idx) => {
                const isActive = activePillarIndex === idx;
                return (
                  <React.Fragment key={pillar.title}>
                    <div className="flex flex-col items-start w-full lg:flex-1 lg:max-w-[360px] text-left">
                      <button
                        onClick={() => setActivePillarIndex(idx)}
                        onMouseEnter={() => setActivePillarIndex(idx)}
                        className={`whitespace-nowrap text-4xl lg:-ml-7 sm:text-5xl lg:text-5xl font-base font-sans tracking-tight transition-colors duration-300 ${
                          isActive ? "text-[#ffffff]" : "text-[#ffffff] hover:text-[#ffffff]"
                        }`}
                      >
                        <span className="text-[#A84E32] mr-3">|</span>{pillar.title}
                      </button>
                      <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl font-serif leading-relaxed text-[#ffffff]/95">
                        {pillar.subtitle}
                      </p>

                      <div className="w-full h-[1px] bg-[#ffffff]/30 my-5" />

                      <ul className="flex flex-col gap-3 items-start list-none text-base sm:text-lg lg:text-lg font-sans text-[#ffffff]/90 w-full pl-12 sm:pl-20 lg:pl-0">
                        {pillar.points.map((point, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#A84E32] shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={pillar.to}
                        className="mt-6 inline-flex items-center gap-1.5 text-base sm:text-lg lg:text-lg font-semibold tracking-wide text-[#ffffff] border-b-2 border-[#A84E32] pb-0.5 hover:text-[#A84E32] transition-colors duration-300 font-sans"
                      >
                        {pillar.linkText}
                      </Link>
                    </div>

                    {idx < corePillars.length - 1 && (
                      <div className="hidden lg:block w-[1px] self-stretch bg-[#ffffff]/5 my-2" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Underlined CTA Row */}
            <div className="mt-8 sm:mt-12 lg:mt-16 w-full flex flex-col items-center justify-center gap-7 pb-6 lg:pb-0">
              <Link
                to="/services"
                className="group relative shrink-0 inline-flex items-center justify-center gap-2.5 text-base sm:text-md 
                font-semibold tracking-wide text-[#ffffff] bg-[#2E3133] border border-[#ffffff]/70 px-8 py-3.5 rounded-md 
                shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer overflow-hidden font-sans"
              >
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#A84E32] rounded-full
                  scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#ffffff]">
                  See Full Services
                </span>
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#ffffff]">
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ===== WAYS OF WORKING SECTION ===== */}
      <section className="relative w-full -mt-6 sm:mt-18 bg-[#2E3133] text-[#ffffff] px-4 sm:px-8 lg:px-24 py-16 lg:py-24 font-sans border-t border-[#ffffff]/10">
        <div className="max-w-auto mx-auto w-full lg:mt-15 flex flex-col justify-start">
          
          {/* Ways of Working Title & Statement Block (Matching "Our Services") */}
          <div className="relative w-full mt-2 lg:mt-10 mb-6 lg:mb-8">
            <h2 className="static lg:absolute top-2 lg:left-35 text-3xl sm:text-4xl lg:text-4xl font-bold uppercase tracking-wider leading-snug mb-3 lg:mb-0 text-[#ffffff] font-sans">
              Ways of Working
            </h2>
            <div className="max-w-full lg:max-w-auto lg:ml-170 w-full lg:w-2/5">
              <p className="text-base sm:text-xl font-serif text-left leading-relaxed text-[#ffffff]">
                A structured, disciplined approach to managing every phase of project realization.
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-10 lg:mt-14 flex flex-col lg:ml-15 justify-start">
            <div className="border-t border-b border-[#ffffff]/25 py-2 flex flex-col w-full">
              {waysOfWorkingItems.map((item) => (
                <Link
                  key={item.number}
                  to={item.to}
                  className="group relative flex items-center justify-between py-6 sm:py-8 lg:py-8 border-b border-[#ffffff]/20 last:border-b-0 hover:border-[#ffffff] transition-colors duration-300"
                >
                  <div className="flex items-baseline gap-6 sm:gap-16 lg:ml-40">
                    <span className="text-xs sm:text-sm font-light text-[#ffffff]/50 font-mono">
                      {item.number}
                    </span>
                    <h4 className="text-2xl sm:text-3xl lg:text-3xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-300 font-sans">
                      {item.title}
                    </h4>
                  </div>

                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#ffffff]/30 flex items-center justify-center 
                  group-hover:bg-[#A84E32] group-hover:border-[#A84E32] transition-all duration-300 mr-5 sm:mr-45">
                    <ArrowRight size={16} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-[#ffffff]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLATE / VIDEO SECTION ===== */}
      {/* <section
        ref={videoSectionRef}
        className="relative w-full bg-[#2E3133] pt-10 pb-20 sm:pt-20 sm:pb-48 font-sans transition-colors duration-500 about-page-section overflow-hidden"
      >
        <div className="mx-auto max-w-[1500px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="relative max-w-4xl mx-auto">
            <div
              className="relative w-full max-w-[280px] sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto aspect-video overflow-hidden rounded-2xl transition-transform duration-150 ease-out origin-center shadow-2xl border border-[#ffffff]/20"
              style={{ transform: `scale(${videoScale})`, willChange: "transform" }}
            >
              <video
                src={archVideo}
                loop
                muted
                playsInline
                autoPlay
                className="w-full h-full object-cover filter brightness-90"
              />

              {[
                "top-3 left-3 border-t border-l",
                "top-3 right-3 border-t border-r",
                "bottom-3 left-3 border-b border-l",
                "bottom-3 right-3 border-b border-r",
              ].map((pos) => (
                <span
                  key={pos}
                  className={`pointer-events-none absolute h-4 w-4 sm:h-5 sm:w-5 border-[#ffffff]/60 ${pos}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#ffffff]/30 bg-[#2E3133] text-[#D9A08B] shadow-sm transition-opacity duration-300 font-sans ${
          showTopBtn ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp size={16} />
      </button>

      <Helmet>
        <title>About Us — Studio DNA</title>
      </Helmet>
    </>
  );
};

export default About;