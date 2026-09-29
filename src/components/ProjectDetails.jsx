import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/ProjectsData";
import Footer from "../pages/Footer";
import { fullProjects } from "../pages/FullProject";
import { useTheme } from "../contexts/ThemeContext";
import CTASection from "../pages/CTA";

function StoryBlock({ title, text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-3 sm:space-y-4" onMouseLeave={() => setIsExpanded(false)}>
      <h3 className="font-mono text-lg sm:text-2xl text-white font-normal leading-tight">
        {title}
      </h3>

      <div
        className={`font-mono text-sm sm:text-lg lg:text-xl font-light text-[#D9A08B] leading-relaxed overflow-hidden 
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
        className="inline-flex items-center gap-3 text-sm sm:text-lg font-medium text-[#D9A08B] transition-colors 
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
        // style={{ backgroundImage: `url(${projectBg})` }}
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
      </main>
    );
  }

  /* MAIN PROJECT DETAILS VIEW */
  return (
    <div
      ref={scrollContainerRef}
      className="fixed inset-0 z-[999] w-full h-full overflow-y-auto overflow-x-hidden font-mono 
      selection:bg-[#D9A08B] selection:text-white transition-colors duration-500"
    >
      {/* 1. Background Image Layer */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none -z-20"
      // style={{ backgroundImage: `url(${projectBg})` }}
      >
        <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none transition-colors duration-500"
          style={{ backgroundColor: 'var(--bg-primary)' }} />
      </div>

      {/* 2. Semi-Transparent Overlay + Blur */}
      <div className="fixed inset-0 backdrop-blur-md pointer-events-none -z-10 transition-colors duration-500"
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
      <section className="w-full flex flex-col lg:flex-row font-mono pt-16 sm:min-h-screen sm:mb-0 lg:pt-0">
        {/* Left 35% */}
        <div className="w-full lg:w-[38%] flex items-center justify-start px-6 sm:px-10 lg:px-14 py-8 lg:py-12 z-10 lg:min-h-screen">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-tight break-words">
            {project.title}
          </h1>
        </div>

        {/* Right 65% */}
        <div className="w-full lg:w-[65%] sm:min-h-[500px] lg:min-h-screen overflow-hidden 
        transition-colors duration-500">
          {mainHeroImage && (
            <img
              src={mainHeroImage}
              alt={project.title}
              className="w-full h-full object-cover rounded-none"
            />
          )}
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW & DESCRIPTION SECTION */}
      <section className="w-full py-12 sm:py-16 lg:py-24 px-6 sm:px-10 lg:px-14 font-mono flex flex-col lg:flex-row">
        <div className="hidden lg:block lg:w-[25%]" />

        <div className="w-full lg:w-[75%] lg:pl-40">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] sm:text-lg sm:mt-0 text-[#D9A08B] mb-6 sm:mb-8">
            <Link to="/projects" className="underline hover:text-white">
              Projects
            </Link>
            <span>→</span>
            <span className="text-white font-medium truncate">
              {project.title}
            </span>
          </div>

          <div className="text-lg sm:text-xl lg:text-2xl font-normal text-white leading-snug tracking-tight mb-10 sm:mb-12">
            <p>{project.description || project.summary}</p>

            {project.description && project.summary && (
              <p className="mt-6 text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                {project.summary}
              </p>
            )}
          </div>

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

            <div className="sm:-ml-15 ml-0">                 <span className="block text-[10px] sm:text-xs text-[#D9A08B] uppercase tracking-wider mb-1">
              Location
            </span>                <span className="text-xs sm:text-sm lg:text-base font-semibold text-white block">
                {project.location || "Gulshan, Dhaka"}
              </span>
            </div>

            <div>                <span className="block text-[10px] sm:text-xs text-[#D9A08B] uppercase tracking-wider mb-1">
              {project.client ? "Client" : "Scale"}
            </span>                <span className="text-xs sm:text-sm lg:text-base font-semibold text-white block">
                {project.client || project.area || "4,500 Sqft"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION */}
      {restGalleryImages.length > 0 && (
        <section className="w-full py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 font-mono border-t border-theme">
          <div className="w-full">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-widest mb-8 text-white">
              Gallery
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
                        ? "h-[320px] sm:h-[450px] lg:h-[450px]"
                        : "aspect-[16/10] sm:aspect-[4/3]"
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
                <div className="w-full h-[280px] sm:h-[340px] lg:h-[380px] overflow-hidden rounded-sm transition-colors duration-500">
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
        {/* <Meet /> */}
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}

export default ProjectDetails;