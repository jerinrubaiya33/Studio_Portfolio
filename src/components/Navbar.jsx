import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate, AnimatePresence } from "framer-motion";
import landscape1 from "../assets/bashanta-bilash-aerial-04.jpg";
import landscape2 from "../assets/sushi.jpg";
import landscape3 from "../assets/akm.jpg";
import landscape4 from "../assets/jb.jpg";

const projects = [
  {
    id: 1,
    title: "Bashanta Bilash Resort",
    category: "Architecture / Exterior",
    location: "Tarabo, Kachpur, Narayanganj",
    year: "2020-present",
    imgUrl: landscape1,
    isLocal: true,
  },
  {
    id: 2,
    title: "Sushi Samurai",
    category: "Commercial Space",
    location: "Banani, Dhaka",
    year: "2022",
    imgUrl: landscape2,
  },
  {
    id: 3,
    title: "AKM Restaurant & Convention Center",
    category: "Commercial Space",
    location: "Gulshan, Dhaka",
    year: "2022-23",
    imgUrl: landscape3,
  },
  {
    id: 4,
    title: "JB Apartment",
    category: "Interior Architecture",
    location: "Madhabdi, Narsingdi",
    year: "2020",
    imgUrl: landscape4,
  },
];

const getSrcSet = (baseUrl) => {
  if (!baseUrl.startsWith("http")) return undefined;
  const cleanUrl = baseUrl.split("?")[0];
  return [1200, 1920, 2560, 3840]
    .map((w) => `${cleanUrl}?auto=format&fit=crop&w=${w}&q=85 ${w}w`)
    .join(", ");
};

function HeroSlider() {
  const x = useMotionValue(0);
  const trackRef = useRef(null);

  const [activeProject, setActiveProject] = useState(projects[0]);

  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : false
  );


  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handleChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const duplicatedProjects = [...projects, ...projects];

  useEffect(() => {
    if (!trackRef.current) return;

    const singleSetWidth = trackRef.current.scrollWidth / 2;
    const duration = isDesktop ? 75 : 45;

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

        if (progressInSlide >= slideWidth * 0.5) {
          setActiveProject(null);
        } else {
          setActiveProject(projects[currentIndex]);
        }
      },
    });

    return () => controls.stop();
  }, [x, isDesktop]);

  return (
    <div 
      className="relative z-0 h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* Top Gradient Overlay */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-24 bg-gradient-to-b from-transparent to-transparent sm:h-32 md:h-40" />

      {/* Panoramic Continuous Motion Track */}
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex h-[100svh] w-max"
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="relative flex h-full w-[max(125vw,125svh)] flex-shrink-0 items-center justify-center overflow-hidden"
          >
            <img
              src={project.imgUrl}
              srcSet={project.isLocal ? undefined : getSrcSet(project.imgUrl)}
              sizes="max(150vw, 150svh)"
              alt={project.title}
              className="block h-full w-full object-cover object-center transform-gpu md:h-auto md:object-contain"
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </motion.div>

      {/* Bottom Gradient Overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2/3 bg-gradient-to-t from-[#2E3133] via-[#2E313300] to-transparent sm:h-1/2" />

      {/* Description Overlay */}
      <div className="pointer-events-none absolute bottom-12 left-0 right-0 z-20 flex items-end justify-between p-6 text-white sm:bottom-0 sm:p-10 md:p-16">
        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl space-y-1 sm:space-y-2"
            >
              <motion.span
                className="block font-mono text-xs font-extrabold uppercase tracking-widest text-white sm:text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                {activeProject.category}
              </motion.span>

              <motion.h2
                className="font-sans text-2xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 30, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, rotateX: 40 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformPerspective: 800 }}
              >
                {activeProject.title}
              </motion.h2>

              <motion.p
                className="font-mono text-xs font-extrabold text-white sm:text-base"
                initial={{ opacity: 0, x: -30, letterSpacing: '0.3em' }}
                animate={{ opacity: 1, x: 0, letterSpacing: '0em' }}
                exit={{ opacity: 0, x: 30, letterSpacing: '0.3em' }}
                transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {activeProject.location} &bull; {activeProject.year}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HeroSlider;