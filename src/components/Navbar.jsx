import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    category: "Architecture / Interior",
    location: "Zurich, Switzerland",
    year: "2024",
    imgUrl: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2560&q=90",
  },
  {
    id: 2,
    title: "Monochrome Penthouse",
    category: "Residential Design",
    location: "Tokyo, Japan",
    year: "2023",
    imgUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2560&q=90",
  },
  {
    id: 3,
    title: "The Glass Pavilion",
    category: "Commercial Space",
    location: "Oslo, Norway",
    year: "2024",
    imgUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2560&q=90",
  },
  {
    id: 4,
    title: "Urban Horizon Tower",
    category: "Exterior Architecture",
    location: "New York, USA",
    year: "2023",
    imgUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2560&q=90",
  },
];

const getSrcSet = (baseUrl) => {
  const cleanUrl = baseUrl.split("?")[0];
  return [1200, 1920, 2560, 3840]
    .map((w) => `${cleanUrl}?auto=format&fit=crop&w=${w}&q=85 ${w}w`)
    .join(", ");
};

function HeroSlider() {
  const x = useMotionValue(0);
  const trackRef = useRef(null);

  const [activeProject, setActiveProject] = useState(projects[0]);

  const duplicatedProjects = [...projects, ...projects];

  useEffect(() => {
    if (!trackRef.current) return;

    const singleSetWidth = trackRef.current.scrollWidth / 2;
    const duration = 45;

    const controls = animate(x, -singleSetWidth, {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      onUpdate: (latestX) => {
        const firstSlide = trackRef.current?.children[0];
        const slideWidth = firstSlide ? firstSlide.offsetWidth : window.innerWidth * 1.5;

        const currentPos = Math.abs(latestX);
        const currentIndex = Math.floor(currentPos / slideWidth) % projects.length;
        const progressInSlide = currentPos % slideWidth;

        if (progressInSlide >= slideWidth * 0.7) {
          setActiveProject(null);
        } else {
          setActiveProject(projects[currentIndex]);
        }
      },
    });

    return () => controls.stop();
  }, [x]);

  return (
    <div className="relative z-0 min-h-[100dvh] w-full overflow-hidden bg-black">
      {/* Top Gradient Overlay */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-24 bg-gradient-to-b from-black/50 to-transparent sm:h-32 md:h-40" />

      {/* Panoramic Continuous Motion Track */}
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex h-[100dvh] w-max"
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="relative flex h-full w-[max(150vw,150dvh)] flex-shrink-0 items-center justify-center overflow-hidden"
          >
            {/* Slide Image */}
            <img
              src={project.imgUrl}
              srcSet={getSrcSet(project.imgUrl)}
              sizes="max(150vw, 150dvh)"
              alt={project.title}
              className="block h-full w-full transform-gpu object-cover object-center"
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </motion.div>

      {/* Fixed Bottom Gradient Overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2/3 bg-gradient-to-t from-black via-gray-950/60 to-transparent sm:h-1/2" />

      {/* Fixed Description Overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-6 text-white sm:p-10 md:p-16">
        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="max-w-xl space-y-1 sm:space-y-2"
            >
              <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-gray-300 sm:text-sm">
                {activeProject.category}
              </span>
              <h2 className="font-sans text-2xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                {activeProject.title}
              </h2>
              <p className="font-mono text-xs font-extrabold text-gray-300 sm:text-base">
                {activeProject.location} &bull; {activeProject.year}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HeroSlider;