import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Bashanta from "../assets/bashanta.png";
import Kindergarten from "../assets/kindergarten.png";
import Simin from "../assets/simin.png";
import HospitalImg from "../assets/hospital (1).png";
import InteriorLobby from "../assets/jb.png";
import InteriorRestaurant from "../assets/sushi.png";
import bashantaInte from "../assets/bashantaInte.png";
import AKM from "../assets/akm.png";
import ProjectsBg from "../assets/projectsbg.png";

const allProjects = [
  {
    id: "kindergarten-madrassa",
    title: "Kindergarten Madrassa",
    location: "Purbachal, Dhaka",
    area: "22 Bigha",
    timeline: "2022–2024",
    image: Kindergarten,
  },
  {
    id: "simin-complex",
    title: "Simin Complex",
    location: "Nokla, Sherpur",
    area: "10 Katha",
    timeline: "2024",
    image: Simin,
  },
  {
    id: "bangladesh-eye-hospital",
    title: "Bangladesh Eye Hospital",
    location: "Uttara, Dhaka",
    area: "1.5 Acre",
    timeline: "2023",
    image: HospitalImg,
  },
  {
    id: "jb-apartment",
    title: "JB Apartment",
    location: "Tarabo, Kachpur, Narayangonj",
    area: "12,000 Sqft",
    timeline: "2021–Present",
    image: InteriorLobby,
  },
  {
    id: "sushi-samurai",
    title: "Sushi Samurai",
    location: "Gulshan, Dhaka",
    area: "4,500 Sqft",
    timeline: "2023",
    image: InteriorRestaurant,
  },
  {
    id: "bashanta-interior",
    title: "Bashanta Bilash Interior",
    location: "Tarabo, Kachpur, Narayangonj",
    area: "12,000 Sqft",
    timeline: "2021–Present",
    image: bashantaInte,
  },
  {
    id: "bashanta-bilash",
    title: "Bashanta Bilash",
    location: "Tarabo, Kachpur, Narayangonj",
    area: "35 Bigha +",
    timeline: "2020–Present",
    image: Bashanta,
  },
  {
    id: "akm-restaurant",
    title: "AKM Restaurant & Convention Center",
    location: "Gulshan, Dhaka",
    area: "4,500 Sqft",
    timeline: "2023",
    image: AKM,
  },
];

const getLayoutClasses = (index) => {
  const patterns = [
    { span: "col-span-1", aspect: "aspect-[4/3] sm:aspect-[4/3]" },
    { span: "col-span-1", aspect: "aspect-[4/3] sm:aspect-[3/4]" },
    { span: "col-span-1 sm:col-span-2 md:col-span-1", aspect: "aspect-[4/3] sm:aspect-[1/1]" },
    { span: "col-span-1", aspect: "aspect-[4/3] sm:aspect-[4/3]" },
    { span: "col-span-1", aspect: "aspect-[4/3] sm:aspect-[3/4]" },
    { span: "col-span-1 sm:col-span-2 md:col-span-1", aspect: "aspect-[4/3] sm:aspect-[4/3]" },
  ];
  return patterns[index % patterns.length];
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      delay: (i % 3) * 0.1,
    },
  }),
};

function ProjectCard({ project, index }) {
  const layout = getLayoutClasses(index);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className={`group mb-12 sm:mb-16 md:mb-20 select-none ${layout.span}`}
    >
      <Link to={`/projects/${project.id}`} className="relative block z-10 cursor-pointer">
        {/* IMAGE CONTAINER */}
        <div className={`w-full z-10 ${layout.aspect} overflow-hidden bg-neutral-100 mb-4 sm:mb-6 relative rounded-sm`}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
          />
        </div>

        {/* TITLE & YEAR */}
        <div className="relative z-10 pb-2 min-h-[36px] sm:min-h-[40px]">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-mono text-[#1c1c1c] font-normal 
            group-hover:text-neutral-600 transition-colors duration-700 leading-snug">
              {project.title}
            </h3>

            {/* YEAR - Always visible on mobile touch screens, animated on hover for desktop */}
            <span className="text-xs sm:text-sm md:text-base font-mono text-neutral-500 shrink-0 font-medium opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-x-4 sm:group-hover:translate-x-0 transition-all duration-700 ease-out">
              {project.timeline}
            </span>
          </div>

          {/* UNDERLINE ANIMATION */}
          <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1px] bg-neutral-300 transition-all duration-700 ease-out" />
        </div>

        {/* LOCATION & AREA */}
        <div className="mt-2 flex flex-col xs:flex-row xs:items-center justify-between gap-1 font-mono opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-4 sm:group-hover:translate-y-0 transition-all duration-700 ease-out delay-100">
          <p className="font-medium text-sm sm:text-base md:text-lg text-neutral-800 line-clamp-1">{project.location}</p>
          <p className="text-xs sm:text-sm md:text-base text-neutral-500 shrink-0">{project.area}</p>
        </div>
      </Link>
    </motion.div>
  );
}

function Project() {
  const displayedProjects = allProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="relative z-0 w-full mt-0 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 py-12 sm:py-16 md:py-20 bg-cover bg-center 
      bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${ProjectsBg})` }}
    >
      {/* HERO HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 sm:mb-24 md:mb-32 mt-16 sm:mt-28 md:mt-40 border-b border-neutral-200 pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6"
      >
        <div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl mb-2 sm:mb-4 text-[#1c1c1c] font-normal font-mono tracking-tight
           sm:tracking-[0.1rem] leading-none uppercase">
            Some Works
          </h1>
        </div>

        <p className="max-w-md uppercase font-sans mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
          Architectural forms, spatial interior design, and environmental planning.
        </p>
      </motion.div>

      {/* GRID: 1 column on Mobile, 2 columns on Tablet (sm/md), 3 columns on Desktop (lg) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-10 sm:gap-y-12 md:gap-y-16 items-start">
        {displayedProjects.map((p, index) => (
          <ProjectCard key={p.id} project={p} index={index} />
        ))}
      </div>

      {/* SEE MORE WORK BUTTON */}
      <div className="mt-8 sm:mt-16 md:mt-5 flex justify-center items-center">
        <Link to="/projects" className="w-full sm:w-auto text-center">
          <button className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-3 text-xs sm:text-sm md:text-base font-bold tracking-[0.15em] sm:tracking-[0.2em] text-gray-900 uppercase font-mono bg-white/90 border-2 border-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer">
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />

            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              See More Work
            </span>

            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              <ChevronDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Project;