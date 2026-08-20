import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowUpRight, Calendar } from "lucide-react";
import Footer from "./Footer";

/* Original Local Image Imports */
import heroBg from "../assets/studio.webp";
import aboutBg from "../assets/about.png";
import studioLogo from "../assets/studioDNA_logo_black.png";

/* Section 4 Contextual Images */
const DEDICATED_WORK_IMG = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop";
const FRIENDLY_ENV_IMG = "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop";

/* Everyday Moments of Creation Gallery */
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
];

/* Categorized Team Data */
const PARTNERS = [
  {
    name: "Elena Alvarez",
    role: "Founding Partner & Principal Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Alejandro Morales",
    role: "Partner & Structural Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Alessandro Mischi",
    role: "Managing Partner & Design Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
];

const GENERAL_TEAM = [
  {
    name: "Alexandra Triantafyllidou",
    role: "Senior Interior Architect",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Alex Duro",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Alexander Lehmann",
    role: "BIM & Technical Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Alexander Schwarz",
    role: "Sustainability Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Aria Chen",
    role: "Landscape Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Alexandra Triantafyllidou",
    role: "Senior Interior Architect",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Alex Duro",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Alexander Lehmann",
    role: "BIM & Technical Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Alexander Schwarz",
    role: "Sustainability Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Aria Chen",
    role: "Landscape Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  
];

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
      className={`transition-all duration-1000 ease-out will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${className}`}
    >
      {children}
    </div>
  );
};

/* 3-Point Service Section Data */
const corePillars = [
  {
    num: "01",
    title: "Design",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop",
    subtitle: "Architecture and specialist design coordinated as one system.",
    items: [
      { name: "Architectural design" },
      { name: "Structural design" },
      { name: "Mechanical design" },
      { name: "Electrical design" },
      { name: "Plumbing design" },
      { name: "HVAC design" },
      { name: "Fire design" },
      { name: "Graphics & visualisation design" },
      { name: "Authority approval" },
      { name: "Special approval" },
      { name: "Green building certification" },
      { name: "Feasibility reports" },
      { name: "Assessment and vetting" },
    ],
  },
  {
    num: "02",
    title: "Build",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop",
    subtitle: "Construction, fit-out and delivery across varied structural systems.",
    items: [
      { name: "RCC and masonry structures" },
      { name: "Prefabricated & metal structures" },
      { name: "Composite structures" },
      { name: "Wooden and bamboo structures" },
      { name: "Rammed-earth structures" },
      { name: "Interior fit-out" },
      { name: "Landscape construction" },
      { name: "Project management" },
      { name: "Legal and documentation services" },
    ],
  },
  {
    num: "03",
    title: "Supply",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    subtitle: "Material and product sourcing connected to project delivery.",
    items: [
      { name: "Local supply" },
      { name: "Imported supply" },
      { name: "Sourcing" },
      { name: "Indenting" },
    ],
  },
];

/* Studio Fest & News Events Data */
const studioEvents = [
  {
    id: 1,
    title: "National Architectural Fest 2026",
    category: "Exhibition & Keynote",
    date: "MARCH 2026",
    description:
      "Our team showcased cutting-edge sustainable structural models and conducted live workshops on green architecture integration.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Urban Greenery Design Campaign",
    category: "Community Outreach",
    date: "JANUARY 2026",
    description:
      "A hands-on studio initiative focusing on public space interventions, bio-inclusive materials, and sustainable urban revitalisation.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
  },
];

const Studio = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [pendingSection, setPendingSection] = useState(null);

  useEffect(() => {
    if (!pendingSection || location.pathname !== "/") return;

    let attempts = 0;
    let timeoutId;
    const tryScroll = () => {
      const el = document.getElementById(pendingSection);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setPendingSection(null);
        return;
      }
      attempts += 1;
      if (attempts < 20) {
        timeoutId = setTimeout(tryScroll, 50);
      } else {
        setPendingSection(null);
      }
    };
    timeoutId = setTimeout(tryScroll, 60);

    return () => clearTimeout(timeoutId);
  }, [pendingSection, location.pathname]);

  return (
    <>
      <main className="relative z-10 w-full min-h-screen bg-white text-gray-900 font-sans overflow-hidden">

        {/* ================= 1. STUDIO HERO IMAGE ================= */}
        <section className="relative w-full h-[65vh] md:h-[80vh] min-h-[450px] overflow-hidden flex items-end">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 animate-[slowZoom_24s_ease-in-out_infinite]"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#000000] via-[#1c1c1c]/30 to-black/30" />

          <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 pb-8 md:pb-12">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl font-mono font-bold text-white tracking-[0.1rem] uppercase drop-shadow-md">
              Our Studio
            </h2>
          </div>
        </section>

        {/* ================= 2. DESCRIPTION & YEARS / PROJECTS ================= */}
        <section className="relative w-full bg-white px-6 sm:px-12 md:px-16 lg:px-24 py-16 md:py-44">
          <div className="max-w-[1000px] ml-auto text-right">
            <Reveal delay={120}>
              <div className="flex justify-end">
                <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-mono font-bold text-gray-900 leading-tight max-w-3xl lg:max-w-7xl">
                  Creating Places That Stand The Test Of Time.
                </h1>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex justify-end">
                <p className="mt-6 text-md sm:text-xl md:text-2xl lg:text-2xl font-mono font-medium text-gray-800 leading-snug max-w-[1300px]">
                  Studio DNA is the focused design branch of Outline Architects. Backed by the rich heritage and foundation of Outline Architects, we combine boutique attention to detail with deep architectural capability. From bespoke residential sanctuaries to tailored commercial environments, our team transforms visions into lived experiences.
                </p>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-12 pt-10 border-t border-gray-200 flex flex-wrap justify-end items-center gap-10 sm:gap-16">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl md:text-4xl font-mono font-bold text-gray-900">10+</span>
                  <div className="text-right">
                    <span className="block sm:text-xl text-md mr-25 font-mono font-bold uppercase tracking-wider text-[#5b7fc7]">Years</span>
                    <span className="sm:text-xl text-md mr-8 sm:mr-4 font-mono uppercase tracking-widest text-gray-500">Of Practice</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-3 -ml-8">
                  <span className="text-2xl md:text-4xl font-mono font-bold text-gray-900">30+</span>
                  <div className="text-right">
                    <span className="block sm:text-xl text-md mr-18 font-mono font-bold uppercase tracking-wider text-[#5b7fc7]">Projects</span>
                    <span className="sm:text-xl text-md mr-14 sm:mr-4 font-mono uppercase tracking-widest text-gray-500">Delivered</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/*  4. STUDIO CULTURE, WORKFORCE & EVENTS  */}
        <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white px-4 sm:px-8 md:px-12
         lg:px-40 py-12 sm:py-20 md:py-28 sm:-mt-20 mt-0">
          <div className="w-full max-w-[1920px] mx-auto space-y-16 sm:space-y-24 md:space-y-32">

            <Reveal>
              <div className="max-w-3xl">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#5b7fc7]">
                  — Studio Culture & Life
                </span>
                <h2 className="mt-2 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-mono font-bold text-gray-900 leading-tight">
                  Craft, Community & Passion
                </h2>
              </div>
            </Reveal>

            {/* Block 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-6">
                <Reveal>
                  <div className="relative h-[280px] sm:h-[400px] md:h-[480px] w-full overflow-hidden bg-gray-100 border border-gray-200 rounded-none">
                    <img
                      src={DEDICATED_WORK_IMG}
                      alt="Architects studying blueprints and architectural models"
                      className="w-full h-full object-cover filter grayscale-[30%] brightness-[1.02] contrast-[0.95] hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-6">
                <Reveal delay={150}>
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#5b7fc7] font-bold">
                    01 / Dedication to Craft
                  </span>
                  <h3 className="mt-2 sm:mt-3 text-xl sm:text-3xl lg:text-4xl font-mono font-bold text-gray-900 leading-tight">
                    Relentless Commitment to Architectural Perfection
                  </h3>
                  <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-mono text-gray-700 leading-relaxed">
                    Our architects and designers bring absolute focus to every line drawn, every 3D model rendered, and every detail detailed. From late-night design charrettes to rigorous structural vetting, our dedication drives spaces that are as structurally sound as they are artistically groundbreaking.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <Reveal delay={150}>
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#5b7fc7] font-bold">
                    02 / Warm Atmosphere
                  </span>
                  <h3 className="mt-2 sm:mt-3 text-xl sm:text-3xl lg:text-4xl font-mono font-bold text-gray-900 leading-tight">
                    An Open, Friendly Environment Where Ideas Flourish
                  </h3>
                  <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-mono text-gray-700 leading-relaxed">
                    We believe great design stems from happy, supported individuals. Our studio culture rejects rigid hierarchy in favor of shared coffee breaks, collaborative desk discussions, and open communication where junior interns and senior partners exchange creative visions seamlessly.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <Reveal>
                  <div className="relative h-[280px] sm:h-[400px] md:h-[480px] w-full overflow-hidden bg-gray-100 border border-gray-200 rounded-none">
                    <img
                      src={FRIENDLY_ENV_IMG}
                      alt="Architectural team collaborating at table"
                      className="w-full h-full object-cover filter grayscale-[30%] brightness-[1.02] contrast-[0.95] hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Block 3: Everyday Moments of Creation */}
            <div>
              <Reveal>
                <div className="mb-6 sm:mb-8">
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#5b7fc7] font-bold">
                     Inside the Studio & On Site
                  </span>
                  <h3 className="mt-1 sm:mt-2 text-xl sm:text-3xl md:text-4xl font-mono font-bold text-gray-900">
                    Everyday Moments of Creation
                  </h3>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {GALLERY_IMAGES.map((imgSrc, index) => (
                  <Reveal key={index} delay={index * 120}>
                    <div className="relative h-60 sm:h-72 md:h-80 lg:h-96 w-full overflow-hidden border border-gray-200 bg-gray-100 rounded-none group">
                      <img
                        src={imgSrc}
                        alt={`Architectural process photo ${index + 1}`}
                        className="w-full h-full object-cover filter grayscale-[30%] brightness-[1.02] contrast-[0.95] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* ================= CATEGORIZED TEAM SECTION (COMPACT IMAGES & PERFECT PADDING) ================= */}
            <div className="pt-10 sm:pt-32 sm:p-30 p-5 border-t border-gray-200 space-y-16 sm:space-y-20">

              {/* SECTION TITLE & OVERVIEW */}
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
                  <div>
                    {/* <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-[#5b7fc7] font-bold">
                       Leadership & Talent
                    </span> */}
                    <h3 className="mt-1 sm:mt-2 text-2xl sm:text-4xl lg:text-5xl font-mono font-bold text-gray-900">
                      Our People
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg mb-0 sm:-mb-1 font-mono text-gray-600 max-w-lg">
                    A collective of dedicated architects, structural experts, and visionaries driving design excellence.
                  </p>
                </div>
              </Reveal>

              {/* CATEGORY 1: PARTNERS */}
              <div className="space-y-8">
                <Reveal>
                  <div className="border-b border-gray-200 pb-3">
                    <h4 className="text-xl sm:text-3xl font-mono font-bold text-gray-900 uppercase tracking-wider">
                      Partners
                    </h4>
                    <p className="text-sm sm:text-lg font-mono text-gray-500 mt-1">
                      Founding directors leading strategic vision and design philosophy.
                    </p>
                  </div>
                </Reveal>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:gap-x-6 gap-y-10 sm:gap-y-12">
                  {PARTNERS.map((member, idx) => (
                    <Reveal key={member.name} delay={idx * 100} className="w-full">
                      <div className="flex flex-col group w-full max-w-[140px] sm:max-w-[250px]">
                        <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 mb-1.5">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top filter grayscale-[25%] contrast-[0.98] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                          />
                        </div>
                        <h5 className="text-base sm:text-lg font-mono font-bold text-gray-900 tracking-tight leading-snug">
                          {member.name}
                        </h5>
                        <p className="mt-0.5 text-xs sm:text-sm font-mono text-gray-500 leading-tight">
                          {member.role}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* CATEGORY 2: TEAM */}
              <div className="space-y-8">
                <Reveal>
                  <div className="border-b border-gray-200 pb-3">
                    <h4 className="text-xl sm:text-3xl font-mono font-bold text-gray-900 uppercase tracking-wider">
                      Team
                    </h4>
                    <p className="text-sm sm:text-lg font-mono text-gray-500 mt-1">
                      Architects, engineers, and specialists crafting spatial solutions.
                    </p>
                  </div>
                </Reveal>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:gap-x-6 gap-y-10 sm:gap-y-12">
                  {GENERAL_TEAM.map((member, idx) => (
                    <Reveal key={member.name} delay={idx * 100} className="w-full">
                      <div className="flex flex-col group w-full max-w-[140px] sm:max-w-[250px]">
                        <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 mb-1.5">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top filter grayscale-[25%] contrast-[0.98] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                          />
                        </div>
                        <h5 className="text-base sm:text-lg font-mono font-bold text-gray-900 tracking-tight leading-snug">
                          {member.name}
                        </h5>
                        <p className="mt-0.5 text-xs sm:text-sm font-mono text-gray-500 leading-tight">
                          {member.role}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

            </div>

            {/* Block 4: Events, Architect Fests & News Campaigns */}
            <div className="pt-10 sm:pt-12 border-t border-gray-200">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
                  <div>
                    <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#5b7fc7] font-bold">
                       Out In The Field
                    </span>
                    <h3 className="mt-1 sm:mt-2 text-xl sm:text-3xl lg:text-4xl font-mono font-bold text-gray-900">
                      Fests, Campaigns & News
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base font-mono text-gray-600 max-w-lg">
                    Active participation in national conventions, architectural festivals, and community-driven urban campaigns.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {studioEvents.map((event, idx) => (
                  <Reveal key={event.id} delay={idx * 150}>
                    <div className="bg-gray-50/80 border border-gray-200 rounded-none overflow-hidden hover:border-gray-300 transition-all duration-300 flex flex-col h-full">
                      <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden rounded-none">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover filter grayscale-[30%] brightness-[1.02] contrast-[0.95] hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-none text-[10px] sm:text-xs font-mono font-bold text-[#5b7fc7] tracking-wider uppercase">
                          {event.category}
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">
                            <Calendar size={14} className="text-[#5b7fc7]" />
                            <span>{event.date}</span>
                          </div>
                          <h4 className="text-lg sm:text-2xl font-mono font-bold text-gray-900 mb-3 sm:mb-4">
                            {event.title}
                          </h4>
                          <p className="text-xs sm:text-sm md:text-base font-mono text-gray-700 leading-relaxed">
                            {event.description}
                          </p>
                        </div>

                        <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-200 flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#5b7fc7] hover:text-gray-900 transition-colors cursor-pointer">
                          <span>Read full event report</span>
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

          </div>
        </section>

        <style>{`
        @keyframes slowZoom {
          0%, 100% { transform: scale(1.02); }
          50% { transform: scale(1.08); }
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

export default Studio;