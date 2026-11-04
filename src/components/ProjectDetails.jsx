import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/ProjectsData";
import Footer from "../pages/Footer";
import { fullProjects } from "../pages/FullProject";
import { useTheme } from "../contexts/ThemeContext";
import CTASection from "../pages/CTA";
import { Helmet } from "react-helmet-async";

function StoryBlock({ title, text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-3 sm:space-y-4" onMouseLeave={() => setIsExpanded(false)}>
      <h3 className="font-mono text-lg sm:text-2xl text-white font-normal leading-tight">
        {title}
      </h3>

      <div
        className={`font-mono text-sm  sm:text-lg lg:text-xl font-light text-[#D9A08B] leading-relaxed overflow-hidden 
          transition-[max-height] duration-500 ease-in-out ${isExpanded
            ? "max-h-[2000px] line-clamp-none"
            : "max-h-[78px] sm:max-h-[98px] lg:max-h-[117px] line-clamp-3"
          }`}
      >
        <p>{text}</p>
      </div>

      <button
        onMouseEnter={() => setIsExpanded(true)}
        onClick={() => setIsExpanded(!isExpanded)}
        className="inline-flex items-center gap-3  text-sm sm:text-lg font-medium text-[#D9A08B] transition-colors 
        cursor-pointer pt-2"
      >
        <span className="text-base sm:text-xl font-light text-[#D9A08B] select-none">
          {isExpanded ? "−" : "+"}
        </span>
        <span className="tracking-tight">
          {isExpanded ? "Read less" : "Read more"}
        </span>
      </button>
    </div>
  );
}

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const project = projects.find((item) => item.id === id);

  // Fallback gallery images
  const galleryImages = project?.images?.length
    ? project.images
    : project?.image
      ? [project.image]
      : [];

  const mainHeroImage = galleryImages[0];
  const restGalleryImages = galleryImages.slice(1);

  // Group images into alternating rows: 3 -> 2 -> 3 -> 2...
  const galleryRows = [];
  let imageIndex = 0;
  let patternIndex = 0;
  const rowPattern = [3, 2];

  while (imageIndex < restGalleryImages.length) {
    const rowSize = rowPattern[patternIndex % rowPattern.length];
    galleryRows.push(restGalleryImages.slice(imageIndex, imageIndex + rowSize));
    imageIndex += rowSize;
    patternIndex++;
  }

  // More Projects
  const otherProjects = fullProjects.filter((item) => item.id !== project?.id);
  const moreProjects = [
    ...otherProjects.filter((item) => item.type === project?.type),
    ...otherProjects.filter((item) => item.type !== project?.type),
  ].slice(0, 3);

  // Scroll to top on route change
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [id]);

  /* NOT FOUND VIEW */
  if (!project) {
    return (
      <main className="fixed inset-0 z-[999] overflow-y-auto flex flex-col items-center justify-center font-mono px-6">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none -z-20"
        />
        <div className="absolute inset-0 bg-theme-primary/80 backdrop-blur-[52px] pointer-events-none -z-10 transition-colors duration-500" />

        <h2 className="text-xl sm:text-2xl font-light mb-4 text-white">
          Project Not Found
        </h2>
        <p className="text-white mb-6 max-w-md text-center text-xs sm:text-sm">
          The project entry you are looking for might have been moved or renamed.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#D9A08B] hover:underline"
        >
          ← Return to Projects Index
        </Link>

        <Helmet>
          <title>Project Not Found | Studio DNA</title>
          <meta
            name="description"
            content="The project you are looking for does not exist. Browse the full Studio DNA architecture and interior design portfolio."
          />
          <meta name="robots" content="noindex" />
        </Helmet>
      </main>
    );
  }

  /* MAIN PROJECT DETAILS VIEW */
  return (
    <div
      ref={scrollContainerRef}
      className="fixed inset-0  z-[999] w-full h-full overflow-y-auto overflow-x-hidden font-mono 
      selection:bg-[#D9A08B] selection:text-white transition-colors duration-500"
    >
      {/* 1. Background Image Layer */}
      <div className="fixed inset-0  bg-cover bg-center bg-no-repeat pointer-events-none -z-20">
        <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none transition-colors duration-500"
          style={{ backgroundColor: 'var(--bg-primary)' }} />
      </div>

      {/* 2. Semi-Transparent Overlay + Blur */}
      <div className="fixed inset-0  backdrop-blur-md pointer-events-none -z-10 transition-colors duration-500"
        style={{ backgroundColor: 'color-mix(in srgb, var(--bg-primary) 40%, transparent)' }} />

      {/* Back Button */}
      <div className="absolute top-6 sm:top-10 left-4 sm:left-8 lg:left-12 z-50">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white hover:text-[#D9A08B] transition-colors duration-200 text-xs
          sm:text-sm font-semibold drop-shadow-md cursor-pointer  backdrop-blur-sm px-3 py-1.5 rounded-md lg:bg-transparent lg:p-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back
        </button>
      </div>

      {/* 1. HERO SECTION */}
      <section className="w-full  flex flex-col lg:flex-row font-mono pt-16 sm:min-h-screen sm:mb-0 lg:pt-0">
        {/* Left Side Panel (Wider width to shift hero image right) */}
        <div className="w-full mt-0 sm:-mt-15 lg:w-[44%] flex flex-col justify-start px-6 sm:px-10 lg:px-14 py-8 lg:py-12 z-10
         lg:min-h-screen lg:pb-24">
          <div className="flex mt-0 sm:mt-50 items-center gap-2 text-[11px] sm:text-base text-[#D9A08B] mb-3 sm:mb-4">
            <Link to="/projects" className="underline hover:text-white">
              Projects
            </Link>
            <span>→</span>
            <span className="text-white font-medium truncate">
              {project.title}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-normal text-white tracking-tight leading-tight break-words mb-3 sm:mb-4">
            {project.title}
          </h1>
          <div className="text-lg sm:text-xl lg:text-2xl font-normal text-white leading-snug tracking-tight">
            <p>{project.description || project.summary}</p>

            {project.description && project.summary && (
              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                {project.summary}
              </p>
            )}
          </div>
        </div>

        {/* Right Side Image (Shifted further right) */}
        <div className="w-full lg:w-[56%] h-[520px] sm:h-[620px] lg:h-[80vh] overflow-hidden transition-colors duration-500
         lg:mt-0 lg:ml-2">
          {mainHeroImage && (
            <img
              src={mainHeroImage}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover rounded-none"
            />
          )}
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW & DESCRIPTION SECTION (Meta grid shifted further right) */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 font-mono flex flex-col lg:flex-row lg:-mt-52 
      lg:relative lg:z-20">
        <div className="hidden lg:block lg:w-[28%]" />

        <div className="w-full lg:w-[72%] lg:pl-72">
          {/* Project Details Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-theme">
            <div>                <span className="block text-[10px] sm:text-xs text-[#D9A08B] uppercase tracking-wider mb-1">
              Typologies
            </span>                <span className="text-xs sm:text-sm lg:text-base font-semibold text-white block">
                {project.category || project.type || "Restaurant"}
              </span>
            </div>

            <div>                <span className="block text-[10px] sm:text-xs text-[#D9A08B] uppercase tracking-wider mb-1">
              Status
            </span>                <span className="text-xs sm:text-sm lg:text-base font-semibold text-white block">
                {project.status || "Completed"}
              </span>
            </div>

            <div className="sm:-ml-6  ml-0">                <span className="block text-[10px] sm:text-xs text-[#D9A08B] uppercase tracking-wider mb-1">
              Location
            </span>
              <span>
                {project.location || "Gulshan, Dhaka"}
              </span>
            </div>

            <div>
              <span className="block text-[10px] sm:text-xs text-[#D9A08B] uppercase tracking-wider mb-1">
                {project.client ? "Client" : "Scale"}
              </span>
              <span>
                {project.client || project.area || "..."}
              </span>
            </div>
          </div>

          {project.id === "tepanter-dayout-cottage" && (
            <div className="max-w-3xl mt-10 sm:mt-12 space-y-8 sm:space-y-10">
              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
        text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
        relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
        before:border-[#D9A08B]/60">
                  01
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Project Overview
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    Set on a 10-katha site, this 2,000 sq ft cottage features a living space, attached bathroom and 
                    <br className="hidden sm:block" />
                    Studio DNA’s recorded scope included structural design, construction and supervision.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
        text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
        relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b 
        before:border-[#D9A08B]/60">
                  02
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Design Concept
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The cottage takes a vernacular approach, using
                    <br className="hidden sm:block" />
                    local materials to create an eco-influenced retreat.
                  </p>
                </div>
              </div>

              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
        text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
        relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
        before:border-[#D9A08B]/60">
                  03
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Design Response
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    Large glazed openings, an extended roof and exposed brick fins shape the cottage’s character. Its solar
                    <br className="hidden sm:block" />
                    orientation supports daylight and natural ventilation.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
        text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
        relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b before:border-[#D9A08B]/60">
                  04
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Materials and Distinctive Feature
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The project showcase identifies brick, plaster, glass and aluminium.
                    <br className="hidden sm:block" />
                    The vernacular approach and exposed brick fins are among its defining features.
                  </p>
                </div>
              </div>

              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
        text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
        relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
        before:border-[#D9A08B]/60">
                  05
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Challenge and Execution
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The site’s distance from the road made access difficult.
                    <br className="hidden sm:block" />
                    The project record says this was managed through project management.
                  </p>
                </div>
              </div>
            </div>
          )}
          {project.id === "simin-group-head-office" && (
            <div className="max-w-3xl mt-10 sm:mt-12 space-y-8 sm:space-y-10">
              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                before:border-[#D9A08B]/60">
                  01
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Project Overview
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The office interior covers 2,800 sqft. Studio DNA’s scope
                    <br className="hidden sm:block" />
                    includes interior design, construction, supervision and furniture supply.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b 
                  before:border-[#D9A08B]/60">
                  02
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Design Concept
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The brief called for a corporate office. The design
                    <br className="hidden sm:block" />
                     concept was to create a bright space that feels wider.
                  </p>
                </div>
              </div>

              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  03
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Design Response
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    A bright working environment is the key design aim.

                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b before:border-[#D9A08B]/60">
                  04
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Materials and Distinctive Feature
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The database lists gypsum board, board finishes, HPL and glass. It also 
                    <br className="hidden sm:block" />
                   includes “Meta Ceiling”; confirm this material term before publishing.
                  </p>
                </div>
              </div>

              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
        text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
        relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
        before:border-[#D9A08B]/60">
                  05
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Challenge and Execution
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The project has a compact work-hour timeframe.
                  </p>
                </div>
              </div>
            </div>
          )}

         {project.id === "simin-complex" && (
            <div className="max-w-3xl mt-10 sm:mt-12 space-y-8 sm:space-y-10">
              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                before:border-[#D9A08B]/60">
                  01
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Project Overview
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The 6-bedroom home has a recorded built-up area of  
                    <br className="hidden sm:block" />
                    3,000 sqft on a  10-katha site.  Studio DNA’s scope included architecture, structural design, construction and supervision.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b 
                  before:border-[#D9A08B]/60">
                  02
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Design response
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The house faces south and sits beside a national highway, surrounded by
                    <br className="hidden sm:block" />
                    agricultural land. Large glazing, an extended roof  and a veranda or balcony support daylight, natural ventilation and heat reduction.

                  </p>
                </div>
              </div>

              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  03
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Materials & distinctive feature
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    Concrete, brick and glass are listed as the main materials. The shading-device design is the feature highlighted by the design team.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b before:border-[#D9A08B]/60">
                  04
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Challenge and execution
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The project required fast construction while managing quality and cost. 
                  </p>
                </div>
              </div>
            </div>
          )}

          {project.id === "icchhedana-resort-cottage" && (
            <div className="max-w-3xl mt-10 sm:mt-12 space-y-8 sm:space-y-10">
              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  01
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Project Overview
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The cottage is set on a 12-katha site, with a built-up area
                    <br className="hidden sm:block" />
                  of 1,250 sq ft and two rooms. Studio DNA’s recorded scope included structural design, construction, supervision and furniture supply.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b 
                  before:border-[#D9A08B]/60">
                  02
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Design Concept
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The project brief called for an “eco vibe.” The design concept
                    <br className="hidden sm:block" />
                    was a lightweight, sustainable cottage using local materials.
                  </p>
                </div>
              </div>

              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  03
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Design Response
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    Large glazing and an extended roof support daylight
                    <br className="hidden sm:block" />
                    and natural ventilation. 
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b before:border-[#D9A08B]/60">
                  04
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Materials and Distinctive Feature
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    Wood and metal are listed as the main materials. The use of 
                    <br className="hidden sm:block" />
                  local materials is the feature highlighted by the design team.
                  </p>
                </div>
              </div>

              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  05
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Challenge and Execution
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    Pest control was a project consideration. The database
                    <br className="hidden sm:block" />
                    records chemical treatment as the response.
                  </p>
                </div>
              </div>
            </div>
          )}

          {project.id === "doobshatar-pool-leisure" && (
            <div className="max-w-3xl mt-10 sm:mt-12 space-y-8 sm:space-y-10">
              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  01
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Project Overview
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The project occupies a 10-katha site, with 1,500 sq ft recorded as the built-up area.
                    <br className="hidden sm:block" />
                    Studio DNA's scope included landscape design, structural design, construction, supervision and furniture supply.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b 
                  before:border-[#D9A08B]/60">
                  02
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Design Concept
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The brief called for a cosy commercial pool.
                    <br className="hidden sm:block" />
                    The concept centres on an open, geometric pool.
                  </p>
                </div>
              </div>

              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  03
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Design Response
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The project record notes landscape preservation,
                    <br className="hidden sm:block" />
                    daylight and natural ventilation. It does not describe the site conditions or how they shaped the design.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b before:border-[#D9A08B]/60">
                  04
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Materials and Distinctive Feature
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    RCC, brick and metal are listed as materials. Brick jali work and exposed
                    <br className="hidden sm:block" />
                     brick fins contribute to the project's character; stamped concrete flooring is the feature highlighted by the design team.
                  </p>
                </div>
              </div>

              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  05
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Challenge and Execution
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    Land development and earth engineering were the main challenges recorded.
                  </p>
                </div>
              </div>
            </div>
          )}

          {project.id === "salton-pharmaceuticals" && ( 
            <div className="max-w-3xl mt-10 sm:mt-12 space-y-8 sm:space-y-10">
              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  01
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Project Overview
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The project covers a 109,240 sq ft site, with 35,000 sqft
                    <br className="hidden sm:block" />
                    of built-up area recorded. Studio DNA’s scope included architecture, landscape design and supervision.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b 
                  before:border-[#D9A08B]/60">
                  02
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Design Concept
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The project was guided by the idea of a green industry, with a brief that
                    <br className="hidden sm:block" />
                    called for a low-maintenance landscape, an efficient work shed, strong security, and corporate and research-oriented office spaces.

                  </p>
                </div>
              </div>

              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  03
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Design Response
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The site’s marshy ground and intense sun exposure shaped the response. The project record lists strategic landfilling, boundary design, contextual planting,
                    <br className="hidden sm:block" />
                    landscape beautification, heat reduction, rainwater management, soakable green areas and ETP design. It also notes HVAC coordination for the pharmaceutical facilities.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b before:border-[#D9A08B]/60">
                  04
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Materials and Distinctive Feature
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    Steel, RCC and masonry walls are listed as the main materials.
                    <br className="hidden sm:block" />
                    Curated plantation is the feature highlighted by the design team.
                  </p>
                </div>
              </div>

              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  05
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Challenge and Execution
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    Land development was the main challenge.
                    <br className="hidden sm:block" />
                    Strategic landfilling is recorded as part of the site response.
                  </p>
                </div>
              </div>
            </div>
          )}


          {project.id === "pebbles-showroom" && ( 
            <div className="max-w-3xl mt-10 sm:mt-12 space-y-8 sm:space-y-10">
              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  01
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Project Overview
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The showroom has a recorded site area of 10 katha and a built-up area of 6,500 sq ft. It includes basement parking, a
                    <br className="hidden sm:block" />
                    ground floor for menswear, and a first floor for children’s and womenswear. Studio DNA’s scope included interior design and a face uplift.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b 
                  before:border-[#D9A08B]/60">
                  02
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Design Concept
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    The brief called for an open clothing store with broad visibility. The concept
                    <br className="hidden sm:block" />
                     is recorded as creating a standout presence within the urban fabric.
                  </p>
                </div>
              </div>

              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  03
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Design Response
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    Large glazing, an extended roof, exposed brick fins and generous ceiling height shape the storefront. Daylighting, 
                    <br className="hidden sm:block" />
                    heat reduction and rainwater management are also listed as design considerations.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-center sm:text-left font-mono font-bold text-[#D9A08B]/50
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b before:border-[#D9A08B]/60">
                  04
                </span>
                <div className="sm:text-left sm:pr-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl border-b border-white/10 mb-2 font-mono font-bold uppercase tracking-widest text-white">
                    Materials and Distinctive Feature
                  </h2>
                  <p className="mt-4 sm:mt-0 sm:ml-0 sm:text-left sm:pr-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    Steel and exposed brick as the main materials. The project
                    <br className="hidden sm:block" />
                    record highlights material integrity and fidelity as a point of pride.
                  </p>
                </div>
              </div>

              <div className="max-w-xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 ml-0 sm:-ml-150">
                <span className="w-10 sm:w-16 sm:flex-shrink-0 text-left font-mono font-bold text-[#D9A08B]/50 
                  text-3xl sm:text-4xl lg:text-5xl leading-none select-none block sm:block
                  relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-b
                  before:border-[#D9A08B]/60">
                  05
                </span>
                <div className="text-left pr-0">
                  <h2 className="text-lg sm:text-xl border-b border-white/10 mb-2 lg:text-2xl font-mono font-bold uppercase tracking-widest text-white">
                    Challenge and Execution
                  </h2>
                  <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                    Work-hour management and PEB construction management 
                  </p>
                </div>
              </div>
            </div>
          )}


        </div>
      </section>

      {/* 4. GALLERY SECTION */}
      {restGalleryImages.length > 0 && (
        <section className="w-full py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 font-mono border-t border-theme">
          <div className="w-full">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl mb-8 sm:mb-15 font-normal font-mono tracking-tight sm:tracking-[0.1rem] leading-none uppercase text-white">
              Some Snapshots
            </h2>

            <div className="flex flex-col gap-8 lg:gap-12">
              {galleryRows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className={`grid grid-cols-1 gap-6 ${row.length === 3
                    ? "sm:grid-cols-3"
                    : row.length === 2
                      ? "sm:grid-cols-2"
                      : "sm:grid-cols-1"
                    }`}
                >
                  {row.map((img, imgIdx) => (
                    <div
                      key={imgIdx} className={`w-full overflow-hidden group rounded-sm transition-colors duration-500 ${rowIdx === 0
                        ? "aspect-[2/1] sm:aspect-[16/8] lg:aspect-[10/8]"
                        : rowIdx === 1
                          ? "aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10]"
                          : "aspect-[16/7] sm:aspect-[16/7] lg:aspect-[16/10]"
                        }`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} Gallery Item ${rowIdx * 3 + imgIdx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. MORE PROJECTS SECTION */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-14 font-mono border-t border-theme">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl mb-2 sm:mb-4 font-normal font-mono tracking-tight sm:tracking-[0.1rem] leading-none uppercase text-white">
              More Projects
            </h2>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 sm:mb-10 mb-0 text-xs sm:text-base lg:text-lg font-bold text-white tracking-wider hover:tracking-widest hover:text-[#D9A08B] transition-all duration-300 ease-out"
            >
              <span>View All Projects</span>
              <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-3">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start">
            {moreProjects.map((item) => (
              <Link
                key={item.id}
                to={`/projects/${item.id}`}
                className="group flex flex-col gap-4"
              >
                <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10] overflow-hidden rounded-sm transition-colors duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <div className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight text-white group-hover:text-[#D9A08B] transition-all duration-300 ease-out">
                    <span className="inline-block transition-all duration-300 ease-out group-hover:tracking-wider active:tracking-widest">
                      {item.title}
                    </span>
                    {item.summary && (
                      <span className="text-white font-light block text-sm sm:text-base mt-1">
                        {item.summary}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-white font-mono mt-1">
                    {item.type}, {item.category}
                  </p>
                  <p className="text-xs sm:text-sm text-[#D9A08B] font-mono font-semibold">
                    {item.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Block */}
      <div className="w-full border-t border-theme pt-12 font-mono transition-colors duration-500">
        <CTASection />
        <Footer />
      </div>

      {/* Rendered last so the page tags win over section-level ones */}
      <Helmet>
        <title>{`${project.title} — ${project.category || project.type || "Project"} | Studio DNA`}</title>
        <meta
          name="description"
          content={
            project.summary ||
            `${project.title} by Studio DNA — a ${project.category || project.type || "design"} project in ${project.location}.`
          }
        />
        <link rel="canonical" href={`https://sdnabd.com/projects/${project.id}`} />
        <meta
          property="og:title"
          content={`${project.title} — ${project.category || project.type || "Project"} | Studio DNA`}
        />
        <meta
          property="og:description"
          content={
            project.summary ||
            `${project.title} by Studio DNA — a ${project.category || project.type || "design"} project in ${project.location}.`
          }
        />
        <meta property="og:url" content={`https://sdnabd.com/projects/${project.id}`} />
        <meta property="og:type" content="article" />
      </Helmet>
    </div>
  );
}

export default ProjectDetails;