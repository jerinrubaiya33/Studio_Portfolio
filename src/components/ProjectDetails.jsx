// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { projects } from "../data/ProjectsData";
// import Meet from "../pages/Meet";
// import Footer from "../pages/Footer";
// import { fullProjects } from "../pages/FullProject";

// // Background Image Import
// import projectBg from "../assets/projectsbg.png";

// function StoryBlock({ title, text }) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <div className="space-y-6" onMouseLeave={() => setIsExpanded(false)}>
//       <h3 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-800 font-normal leading-tight">
//         {title}
//       </h3>

//       <div
//         className={`text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-600 leading-[1.45] overflow-hidden transition-[max-height] duration-500 ease-in-out ${
//           isExpanded
//             ? "max-h-[2000px]"
//             : "max-h-[210px] sm:max-h-[262px] lg:max-h-[314px]"
//         }`}
//       >
//         <p>{text}</p>
//       </div>

//       <button
//         onMouseEnter={() => setIsExpanded(true)}
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="inline-flex items-center gap-5 text-xl sm:text-3xl font-normal text-[#5b7fc7] transition-colors cursor-pointer pt-4"
//       >
//         <span className="text-2xl sm:text-3xl font-light text-neutral-400 select-none">
//           {isExpanded ? "−" : "+"}
//         </span>
//         <span className="tracking-tight">
//           {isExpanded ? "Read less" : "Read more"}
//         </span>
//       </button>
//     </div>
//   );
// }

// function ProjectDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const project = projects.find((item) => item.id === id);

//   // Fallback gallery images
//   const galleryImages = project?.images?.length
//     ? project.images
//     : project?.image
//     ? [project.image]
//     : [];

//   const mainHeroImage = galleryImages[0];
//   const restGalleryImages = galleryImages.slice(1);

//   // Group images into sets of 4 for slider
//   const IMAGES_PER_ROW = 4;
//   const imageGroups = [];
//   for (let i = 0; i < restGalleryImages.length; i += IMAGES_PER_ROW) {
//     imageGroups.push(restGalleryImages.slice(i, i + IMAGES_PER_ROW));
//   }

//   // More Projects
//   const otherProjects = fullProjects.filter((item) => item.id !== project?.id);
//   const moreProjects = [
//     ...otherProjects.filter((item) => item.type === project?.type),
//     ...otherProjects.filter((item) => item.type !== project?.type),
//   ].slice(0, 3);

//   // State for gallery slider
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const prevSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? imageGroups.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === imageGroups.length - 1 ? 0 : prev + 1
//     );
//   };

//   // Reset scroll and slide index on route change
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setCurrentSlide(0);
//   }, [id]);

//
//   /* NOT FOUND VIEW                                                             */
//
//   if (!project) {
//     return (
//       <main className="fixed inset-0 z-[999] overflow-y-auto flex flex-col items-center justify-center font-mono px-6">
//         {/* 1. Background Image Layer */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none -z-20"
//           style={{ backgroundImage: `url(${projectBg})` }}
//         />
//         {/* 2. Semi-Transparent White Overlay + Blur */}
//         <div className="absolute inset-0 bg-white/80 backdrop-blur-[52px] pointer-events-none -z-10" />

//         <h2 className="text-4xl font-light mb-6 text-neutral-800">
//           Project Not Found
//         </h2>
//         <p className="text-neutral-500 mb-8 max-w-md text-center text-lg">
//           The project entry you are looking for might have been moved or renamed.
//         </p>
//         <Link
//           to="/projects"
//           className="inline-flex items-center gap-2 text-base uppercase tracking-widest font-bold text-[#5b7fc7] hover:underline"
//         >
//           ← Return to Projects Index
//         </Link>
//       </main>
//     );
//   }

//
//   /* MAIN PROJECT DETAILS VIEW                                                  */
//
//   return (
//     <div className="fixed inset-0 z-[999] w-screen h-screen overflow-y-auto overflow-x-hidden text-neutral-900 font-mono selection:bg-[#5b7fc7] selection:text-white">
//       {/* 1. Background Image Layer */}
//       <div
//         className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none -z-20"
//         style={{ backgroundImage: `url(${projectBg})` }}
//       />

//       {/* 2. Semi-Transparent White Overlay + Blur */}
//       <div className="fixed inset-0 bg-white/40 backdrop-blur-md pointer-events-none -z-10" />

//       {/* Back Button */}
//       <div className="absolute top-28 sm:top-32 md:top-36 lg:top-40 left-6 sm:left-12 z-50">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2.5 text-black hover:text-[#5b7fc7] transition-colors duration-200 text-lg font-semibold drop-shadow-md cursor-pointer"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="m12 19-7-7 7-7" />
//             <path d="M19 12H5" />
//           </svg>
//           Back
//         </button>
//       </div>

//       {/* 1. HERO SECTION */}
//       <section className="w-screen min-h-screen flex flex-col lg:flex-row font-mono">
//         {/* Left 30% */}
//         <div className="w-full lg:w-[30%] flex items-center justify-start px-8 sm:px-12 lg:px-14 min-h-screen z-10 py-12">
//           <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal text-neutral-900 tracking-tight leading-[1.1] break-words">
//             {project.title}
//           </h1>
//         </div>

//         {/* Right 70% */}
//         <div className="w-full lg:w-[70%] min-h-screen bg-neutral-100/50 overflow-hidden">
//           {mainHeroImage && (
//             <img
//               src={mainHeroImage}
//               alt={project.title}
//               className="w-full h-full object-cover rounded-none"
//             />
//           )}
//         </div>
//       </section>

//       {/* 2. PROJECT OVERVIEW & DESCRIPTION SECTION */}
//       <section className="w-screen py-24 px-8 sm:px-12 lg:px-14 font-mono flex flex-col lg:flex-row">
//         <div className="hidden lg:block lg:w-[25%]" />

//         <div className="w-full lg:w-[75%] lg:pl-16">
//           <div className="flex items-center gap-3 text-lg sm:text-xl text-neutral-500 mb-12">
//             <Link to="/projects" className="underline hover:text-neutral-900">
//               Projects
//             </Link>
//             <span>→</span>
//             <span className="text-neutral-800 font-medium">{project.title}</span>
//           </div>

//           <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl font-normal text-neutral-900 leading-[1.25] tracking-tight mb-16">
//             <p>{project.description || project.summary}</p>

//             {project.description && project.summary && (
//               <p className="mt-10 text-2xl sm:text-3xl lg:text-4xl text-neutral-600 font-light leading-relaxed">
//                 {project.summary}
//               </p>
//             )}
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 sm:gap-16 pt-10 border-t border-neutral-300">
//             <div>
//               <span className="block text-base sm:text-lg text-neutral-500 uppercase tracking-wider mb-3">
//                 Typologies
//               </span>
//               <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-900 block">
//                 {project.category || project.type || "Restaurant"}
//               </span>
//             </div>

//             <div>
//               <span className="block text-base sm:text-lg text-neutral-500 uppercase tracking-wider mb-3">
//                 Status
//               </span>
//               <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-900 block">
//                 {project.status || "Completed"}
//               </span>
//             </div>

//             <div>
//               <span className="block text-base sm:text-lg text-neutral-500 uppercase tracking-wider mb-3">
//                 Location
//               </span>
//               <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-900 block">
//                 {project.location || "Gulshan, Dhaka"}
//               </span>
//             </div>

//             <div>
//               <span className="block text-base sm:text-lg text-neutral-500 uppercase tracking-wider mb-3">
//                 {project.client ? "Client" : "Scale"}
//               </span>
//               <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-900 block">
//                 {project.client || project.area || "4,500 Sqft"}
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. PROJECT STORY & PROCESS SECTION */}
//       <section className="w-screen font-mono border-t border-neutral-300">
//         {/* STAGE 1 */}
//         <div className="w-screen flex flex-col lg:flex-row items-start justify-center gap-24 px-6 sm:px-10 lg:px-12 py-12 lg:py-50">
//           <div className="w-full lg:w-[22%] shrink-0">
//             <span className="text-xs sm:text-sm font-bold mt-35 tracking-[0.25em] text-[#5b7fc7] block mb-2">
//               01 / The Beginning
//             </span>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight leading-tight">
//               How We Got Started
//             </h2>
//           </div>

//           <div className="w-full lg:w-[50%]">
//             <StoryBlock
//               title="Understanding the Space & Building the Plan"
//               text={
//                 project.initialization ||
//                 "Every project begins by spending time on site to understand the space. Before sketching any concepts, we studied the natural sunlight, how people would walk through the rooms, and what the existing building could handle. We worked closely with the client to agree on clear goals early—making sure our design ideas were realistic, fit the budget, and made sense for daily use."
//               }
//             />
//           </div>
//         </div>

//         {/* STAGE 2 */}
//         <div className="w-screen flex flex-col-reverse lg:flex-row items-start justify-center gap-24 px-6 sm:px-10 lg:px-12 py-12 lg:py-50 border-t border-neutral-300">
//           <div className="w-full lg:w-[50%]">
//             <StoryBlock
//               title="Fixing Structural Issues & Working Through Delays"
//               text={
//                 project.challenges ||
//                 "During construction, we ran into a few real-world problems. The building had strict load limits, and the high concrete ceilings caused loud echoes. Hiding the air conditioning, wiring, and pipes without lowering the ceiling height took clever engineering work. When locally sourced materials were delayed, our site team made quick on-the-spot adjustments to keep everything moving without compromising on quality."
//               }
//             />
//           </div>

//           <div className="w-full lg:w-[22%] shrink-0 lg:text-right">
//             <span className="text-xs sm:text-sm font-bold tracking-[0.25em] mt-35 text-[#5b7fc7] block mb-2">
//               02 / The Challenges
//             </span>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight leading-tight">
//               The Main Challenges
//             </h2>
//           </div>
//         </div>

//         {/* STAGE 3 */}
//         <div className="w-screen flex flex-col lg:flex-row items-start justify-center gap-24 px-6 sm:px-10 lg:px-12 py-12 lg:py-50 border-t border-neutral-300">
//           <div className="w-full mt-35 lg:w-[22%] shrink-0">
//             <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#5b7fc7] block mb-2">
//               03 / The Handover
//             </span>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight leading-tight">
//               Finishing & Handover
//             </h2>
//           </div>

//           <div className="w-full lg:w-[50%]">
//             <StoryBlock
//               title="Final Touches & Passing Over the Keys"
//               text={
//                 project.execution ||
//                 project.handover ||
//                 "To solve the noise issue, we added simple timber wall panels and tucked mechanical equipment out of sight under raised platforms. Before delivering the project, we went through every detail with the client—testing the lighting controls, checking the finish on every surface, and confirming that all systems were running smoothly. The space was handed over clean, fully functional, and ready to open."
//               }
//             />
//           </div>
//         </div>
//       </section>

//       {/* 4. GALLERY SECTION */}
//       {restGalleryImages.length > 0 && (
//         <section className="w-screen py-20 px-8 sm:px-16 lg:px-20 font-mono border-t border-neutral-300">
//           <div className="w-full">
//             <h2 className="text-lg sm:text-5xl font-bold font-mono uppercase tracking-widest text-[#1c1c1c] mb-18 mt-10">
//               Gallery
//             </h2>

//             {restGalleryImages.length > 2 ? (
//               <div className="relative w-full overflow-hidden">
//                 <div
//                   className="flex transition-transform duration-500 ease-out"
//                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                 >
//                   {imageGroups.map((group, groupIdx) => (
//                     <div
//                       key={groupIdx}
//                       className="w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
//                     >
//                       {group.map((img, imgIdx) => (
//                         <div
//                           key={imgIdx}
//                           className="w-full aspect-[1/2] overflow-hidden bg-neutral-100 group"
//                         >
//                           <img
//                             src={img}
//                             alt={`${project.title} Gallery View ${
//                               groupIdx * IMAGES_PER_ROW + imgIdx + 1
//                             }`}
//                             loading="lazy"
//                             className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Slider Controls */}
//                 {imageGroups.length > 1 && (
//                   <div className="flex items-center justify-between mt-8">
//                     <div className="flex items-center gap-3 text-lg font-bold text-neutral-800 tracking-wider">
//                       <span>{String(currentSlide + 1).padStart(2, "0")}</span>
//                       <span className="text-neutral-400">/</span>
//                       <span className="text-neutral-400">
//                         {String(imageGroups.length).padStart(2, "0")}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <button
//                         onClick={prevSlide}
//                         className="p-4 bg-neutral-100/80 hover:bg-[#5b7fc7] hover:text-white transition-colors duration-200 cursor-pointer"
//                         aria-label="Previous slide"
//                       >
//                         <svg
//                           className="w-6 h-6"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M15 19l-7-7 7-7"
//                           />
//                         </svg>
//                       </button>
//                       <button
//                         onClick={nextSlide}
//                         className="p-4 bg-neutral-100/80 hover:bg-[#5b7fc7] hover:text-white transition-colors duration-200 cursor-pointer"
//                         aria-label="Next slide"
//                       >
//                         <svg
//                           className="w-6 h-6"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M9 5l7 7-7 7"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
//                 {restGalleryImages.map((img, idx) => (
//                   <div
//                     key={idx}
//                     className="w-full h-[900px] max-h-[85vh] overflow-hidden group"
//                   >
//                     <img
//                       src={img}
//                       alt={`${project.title} Gallery View ${idx + 1}`}
//                       loading="lazy"
//                       className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>
//       )}

//       {/* 5. MORE PROJECTS SECTION */}
//       <section className="w-screen py-52 px-8 sm:px-16 lg:px-20 font-mono border-t border-neutral-300">
//         <div className="w-full">
//           <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-24">
//             <h2 className="text-lg sm:text-5xl font-bold font-mono uppercase tracking-widest text-[#1c1c1c]">
//               More Projects
//             </h2>
//             <Link
//               to="/projects"
//               className="inline-flex items-center mt-15 gap-2 text-3xl font-bold text-neutral-900
//               tracking-widest hover:text-[#1c1c1c] transition-colors duration-300
//               hover:scale-x-105 transform origin-left"
//             >
//               View All Projects →
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-x-28 gap-y-50 items-start">
//             {moreProjects.map((item) => (
//               <Link
//                 key={item.id}
//                 to={`/projects/${item.id}`}
//                 className="group flex flex-col gap-4"
//               >
//                 <div className="w-full h-[450px] sm:h-[520px] bg-neutral-100 overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     loading="lazy"
//                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-2 pt-2">
//                   <div className="text-xl sm:text-2xl md:text-3xl">
//                     <span className="font-semibold leading-wide tracking-[0.1rem] text-neutral-700 mr-3 font-mono">
//                       {item.title}
//                     </span>
//                     <span className="text-neutral-500 font-light text-[32px]">
//                       {item.summary}
//                     </span>
//                   </div>

//                   <p className="text-2xl text-neutral-600 font-semibold font-mono leading-snug mt-1">
//                     {item.type}, {item.category}
//                   </p>
//                   <p className="text-2xl text-[#5b7fc7] font-mono font-semibold">
//                     {item.year}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer Block */}
//       <div className="w-screen border-t border-neutral-300 pt-16 font-mono">
//         <Meet />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default ProjectDetails;















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
        className={`font-mono text-base sm:text-xl lg:text-2xl font-light text-neutral-600 leading-relaxed overflow-hidden transition-[max-height] duration-500 ease-in-out ${isExpanded
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

  // Group images into sets of 4 for slider
  const IMAGES_PER_ROW = 4;
  const imageGroups = [];
  for (let i = 0; i < restGalleryImages.length; i += IMAGES_PER_ROW) {
    imageGroups.push(restGalleryImages.slice(i, i + IMAGES_PER_ROW));
  }

  // More Projects
  const otherProjects = fullProjects.filter((item) => item.id !== project?.id);
  const moreProjects = [
    ...otherProjects.filter((item) => item.type === project?.type),
    ...otherProjects.filter((item) => item.type !== project?.type),
  ].slice(0, 3);

  // State for gallery slider
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? imageGroups.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === imageGroups.length - 1 ? 0 : prev + 1
    );
  };

  // Reset scroll and slide index on route change. This page scrolls inside
  // its own overflow-y-auto container (not the window), so scroll that.
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setCurrentSlide(0);
  }, [id]);

  /* NOT FOUND VIEW                                                             */
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

  /* MAIN PROJECT DETAILS VIEW                                                  */
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
            <span className="text-neutral-800 font-medium truncate ">
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

            {restGalleryImages.length > 2 ? (
              <div className="relative w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {imageGroups.map((group, groupIdx) => (
                    <div
                      key={groupIdx}
                      className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {group.map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          /* aspect-[16/10] makes mobile images shorter, while keeping sm: and lg: at aspect-[4/3] */
                          className="w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/3] overflow-hidden bg-neutral-100 group rounded-sm"
                        >
                          <img
                            src={img}
                            alt={`${project.title} Gallery View ${groupIdx * IMAGES_PER_ROW + imgIdx + 1
                              }`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Slider Controls */}
                {imageGroups.length > 1 && (
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-neutral-800 tracking-wider">
                      <span>{String(currentSlide + 1).padStart(2, "0")}</span>
                      <span className="text-neutral-400">/</span>
                      <span className="text-neutral-400">
                        {String(imageGroups.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevSlide}
                        className="p-3 bg-neutral-100/80 hover:bg-[#5b7fc7] hover:text-white transition-colors duration-200 cursor-pointer rounded-sm"
                        aria-label="Previous slide"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={nextSlide}
                        className="p-3 bg-neutral-100/80 hover:bg-[#5b7fc7] hover:text-white transition-colors duration-200 cursor-pointer rounded-sm"
                        aria-label="Next slide"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {restGalleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    /* Matching mobile height reduction */
                    className="w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/3] overflow-hidden bg-neutral-100 group rounded-sm"
                  >
                    <img
                      src={img}
                      alt={`${project.title} Gallery View ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
      {/* 5. MORE PROJECTS SECTION */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-14 font-mono border-t border-neutral-300">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl mb-2 sm:mb-4 text-[#1c1c1c] font-normal font-mono tracking-tight
           sm:tracking-[0.1rem] leading-none uppercase">
              More Projects
            </h2>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 sm:mb-10 mb-0 text-sm sm:text-lg lg:text-xl  font-bold text-neutral-900 tracking-wider hover:tracking-widest hover:text-[#5b7fc7] transition-all duration-300 ease-out"
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