import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/ProjectsData";
import Meet from "../pages/Meet";
import Footer from "../pages/Footer";
import { fullProjects } from "../pages/FullProject";

// Background Image Import
import projectBg from "../assets/projectsbg.png";

function StoryBlock({ title, text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-3 sm:space-y-4" onMouseLeave={() => setIsExpanded(false)}>
      <h3 className="font-mono text-xl sm:text-3xl text-neutral-800 font-normal leading-tight">
        {title}
      </h3>

      <div
        className={`font-mono text-base sm:text-xl lg:text-2xl font-light text-neutral-600 leading-relaxed overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isExpanded
            ? "max-h-[2000px] line-clamp-none"
            : "max-h-[78px] sm:max-h-[98px] lg:max-h-[117px] line-clamp-3"
        }`}
      >
        <p>{text}</p>
      </div>

      <button
        onMouseEnter={() => setIsExpanded(true)}
        onClick={() => setIsExpanded(!isExpanded)}
        className="inline-flex items-center gap-3 text-base sm:text-xl font-medium text-[#5b7fc7] transition-colors cursor-pointer pt-2"
      >
        <span className="text-lg sm:text-2xl font-light text-neutral-400 select-none">
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
          style={{ backgroundImage: `url(${projectBg})` }}
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[52px] pointer-events-none -z-10" />

        <h2 className="text-2xl sm:text-3xl font-light mb-4 text-neutral-800">
          Project Not Found
        </h2>
        <p className="text-neutral-500 mb-6 max-w-md text-center text-sm sm:text-base">
          The project entry you are looking for might have been moved or renamed.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-[#5b7fc7] hover:underline"
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
      className="fixed inset-0 z-[999] w-full h-full overflow-y-auto overflow-x-hidden text-neutral-900 font-mono selection:bg-[#5b7fc7] selection:text-white"
    >
      {/* 1. Background Image Layer */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none -z-20"
        style={{ backgroundImage: `url(${projectBg})` }}
      />

      {/* 2. Semi-Transparent White Overlay + Blur */}
      <div className="fixed inset-0 bg-white/40 backdrop-blur-md pointer-events-none -z-10" />

      {/* Back Button */}
      <div className="absolute top-6 sm:top-10 left-4 sm:left-8 lg:left-12 z-50">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-neutral-900 hover:text-[#5b7fc7] transition-colors duration-200 text-sm sm:text-base font-semibold drop-shadow-md cursor-pointer bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-md lg:bg-transparent lg:p-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5"
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
      <section className="w-full min-h-screen flex flex-col lg:flex-row font-mono pt-16 sm:mb-0 -mb-100 lg:pt-0">
        {/* Left 35% */}
        <div className="w-full lg:w-[35%] flex items-center justify-start px-6 sm:px-10 lg:px-14 py-8 lg:py-12 z-10 lg:min-h-screen">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight leading-tight break-words">
            {project.title}
          </h1>
        </div>

        {/* Right 65% */}
        <div className="w-full lg:w-[65%] min-h-[350px] sm:min-h-[500px] lg:min-h-screen bg-neutral-100/50 overflow-hidden">
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
          <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 mb-6 sm:mb-8">
            <Link to="/projects" className="underline hover:text-neutral-900">
              Projects
            </Link>
            <span>→</span>
            <span className="text-neutral-800 font-medium truncate">
              {project.title}
            </span>
          </div>

          <div className="text-xl sm:text-2xl lg:text-3xl font-normal text-neutral-900 leading-snug tracking-tight mb-10 sm:mb-12">
            <p>{project.description || project.summary}</p>

            {project.description && project.summary && (
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-600 font-light leading-relaxed">
                {project.summary}
              </p>
            )}
          </div>

          {/* Project Details Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-neutral-300">
            <div>
              <span className="block text-xs sm:text-sm text-neutral-500 uppercase tracking-wider mb-1">
                Typologies
              </span>
              <span className="text-sm sm:text-base lg:text-lg font-semibold text-neutral-900 block">
                {project.category || project.type || "Restaurant"}
              </span>
            </div>

            <div>
              <span className="block text-xs sm:text-sm text-neutral-500 uppercase tracking-wider mb-1">
                Status
              </span>
              <span className="text-sm sm:text-base lg:text-lg font-semibold text-neutral-900 block">
                {project.status || "Completed"}
              </span>
            </div>

            <div className="sm:-ml-15 ml-0">
              <span className="block text-xs sm:text-sm text-neutral-500 uppercase tracking-wider mb-1">
                Location
              </span>
              <span className="text-sm sm:text-base lg:text-lg font-semibold text-neutral-900 block">
                {project.location || "Gulshan, Dhaka"}
              </span>
            </div>

            <div>
              <span className="block text-xs sm:text-sm text-neutral-500 uppercase tracking-wider mb-1">
                {project.client ? "Client" : "Scale"}
              </span>
              <span className="text-sm sm:text-base lg:text-lg font-semibold text-neutral-900 block">
                {project.client || project.area || "4,500 Sqft"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECT STORY & PROCESS SECTION */}
      <section className="w-full font-mono border-t border-neutral-300">
        {/* STAGE 1 */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-16 px-6 sm:px-10 lg:px-12 py-10 lg:py-20">
          <div className="w-full lg:w-[25%] shrink-0">
            <span className="text-xs font-bold tracking-[0.2em] text-[#5b7fc7] block mb-2">
              01 / The Beginning
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-neutral-900 tracking-tight leading-tight">
              How We Got Started
            </h2>
          </div>

          <div className="w-full lg:w-[55%]">
            <StoryBlock
              title="Understanding the Space & Building the Plan"
              text={
                project.initialization ||
                "Every project begins by spending time on site to understand the space. Before sketching any concepts, we studied the natural sunlight, how people would walk through the rooms, and what the existing building could handle. We worked closely with the client to agree on clear goals early—making sure our design ideas were realistic, fit the budget, and made sense for daily use."
              }
            />
          </div>
        </div>

        {/* STAGE 2 */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-start justify-center gap-6 lg:gap-16 px-6 sm:px-10 lg:px-12 py-10 lg:py-20 border-t border-neutral-300">
          <div className="w-full lg:w-[55%]">
            <StoryBlock
              title="Fixing Structural Issues & Working Through Delays"
              text={
                project.challenges ||
                "During construction, we ran into a few real-world problems. The building had strict load limits, and the high concrete ceilings caused loud echoes. Hiding the air conditioning, wiring, and pipes without lowering the ceiling height took clever engineering work. When locally sourced materials were delayed, our site team made quick on-the-spot adjustments to keep everything moving without compromising on quality."
              }
            />
          </div>

          <div className="w-full lg:w-[25%] shrink-0 lg:text-right">
            <span className="text-xs font-bold tracking-[0.2em] text-[#5b7fc7] block mb-2">
              02 / The Challenges
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-neutral-900 tracking-tight leading-tight">
              The Main Challenges
            </h2>
          </div>
        </div>

        {/* STAGE 3 */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-16 px-6 sm:px-10 lg:px-12 py-10 lg:py-20 border-t border-neutral-300">
          <div className="w-full lg:w-[25%] shrink-0">
            <span className="text-xs font-bold tracking-[0.2em] text-[#5b7fc7] block mb-2">
              03 / The Handover
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-neutral-900 tracking-tight leading-tight">
              Finishing & Handover
            </h2>
          </div>

          <div className="w-full lg:w-[55%]">
            <StoryBlock
              title="Final Touches & Passing Over the Keys"
              text={
                project.execution ||
                project.handover ||
                "To solve the noise issue, we added simple timber wall panels and tucked mechanical equipment out of sight under raised platforms. Before delivering the project, we went through every detail with the client—testing the lighting controls, checking the finish on every surface, and confirming that all systems were running smoothly. The space was handed over clean, fully functional, and ready to open."
              }
            />
          </div>
        </div>
      </section>

{/* 4. GALLERY SECTION */}
{restGalleryImages.length > 0 && (
  <section className="w-full py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 font-mono border-t border-neutral-300">
    <div className="w-full">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-widest text-[#1c1c1c] mb-8">
        Gallery
      </h2>

      <div className="flex flex-col gap-8 lg:gap-12">
        {galleryRows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`grid grid-cols-1 gap-6 ${
              row.length === 3
                ? "sm:grid-cols-3"
                : row.length === 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-1"
            }`}
          >
            {row.map((img, imgIdx) => (
              <div
                key={imgIdx}
                className={`w-full overflow-hidden bg-neutral-100 group rounded-sm ${
                  rowIdx === 0
                    ? "h-[320px] sm:h-[450px] lg:h-[450px]" /* Forced explicit height for row 1 */
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
      <section className="w-full py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-14 font-mono border-t border-neutral-300">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl mb-2 sm:mb-4 text-[#1c1c1c] font-normal font-mono tracking-tight sm:tracking-[0.1rem] leading-none uppercase">
              More Projects
            </h2>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 sm:mb-10 mb-0 text-sm sm:text-lg lg:text-xl font-bold text-neutral-900 tracking-wider hover:tracking-widest hover:text-[#5b7fc7] transition-all duration-300 ease-out"
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
                <div className="w-full h-[280px] sm:h-[340px] lg:h-[380px] bg-neutral-100 overflow-hidden rounded-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight text-neutral-800 group-hover:text-[#5b7fc7] transition-all duration-300 ease-out">
                    <span className="inline-block transition-all duration-300 ease-out group-hover:tracking-wider active:tracking-widest">
                      {item.title}
                    </span>
                    {item.summary && (
                      <span className="text-neutral-500 font-light block text-base sm:text-lg mt-1">
                        {item.summary}
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-neutral-600 font-mono mt-1">
                    {item.type}, {item.category}
                  </p>
                  <p className="text-sm sm:text-base text-[#5b7fc7] font-mono font-semibold">
                    {item.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Block */}
      <div className="w-full border-t border-neutral-300 pt-12 font-mono">
        <Meet />
        <Footer />
      </div>
    </div>
  );
}

export default ProjectDetails;