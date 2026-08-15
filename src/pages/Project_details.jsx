
import React, { useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import ResortMain from '../assets/resort-main.jpg';
import ResortTopView from '../assets/resort-top.jpg';
import ResortGrid from '../assets/resort-grid.jpg';
import ShirinVillaGrid from '../assets/shirin-villa.jpg';
import InteriorMain from '../assets/resort-top.jpg';
import InteriorView2 from '../assets/resort-top.jpg';

const allProjects = [
  {
    id: "ext-resort-1",
    section: "exterior",
    category: "Resort",
    title: "PROPOSED DAY RESORT - BASHANTA BILASH",
    location: "TARABO, KACHPUR, NARAYANGONJ.",
    area: "35 BIGHA +",
    timeline: "OUTLINE ARCHITECTS, 2020-PRESENT",
    description: "An integrated multi-bigha water body landscape harmonized with modern hospitality pavilions. Designed to blur boundaries between open-air relaxation structures and organic heritage ecosystems.",
    images: [ResortMain, ResortTopView, ResortGrid],
    layoutType: "editorial-asymmetric"
  },
  {
    id: "ext-office-1",
    section: "exterior",
    category: "Office",
    title: "PROPOSED RESIDENCE & HOME OFFICE - SHIRIN VILLA",
    location: "TARABO, KACHPUR, NARAYANGONJ.",
    area: "10 KATHA",
    timeline: "OUTLINE ARCHITECTS, 2024",
    description: "A dual-purpose contemporary minimalist residential block showcasing sharp monolithic geometries juxtaposed with localized context elements.",
    images: [ShirinVillaGrid, ResortTopView],
    layoutType: "split-duo"
  },
  {
    id: "int-office-1",
    section: "interior",
    category: "Office",
    title: "PROPOSED DUPLEX INTERIOR - ELEGANT LIVING",
    location: "BANANI, DHAKA.",
    area: "3,800 SFT",
    timeline: "STUDIO DNA DESIGNS, 2026",
    description: "Curated premium interior environment prioritizing tactile materials, subtle lighting pathways, and acoustic balances tailored for upscale duplex living.",
    images: [InteriorMain, InteriorView2],
    layoutType: "split-duo"
  }
];

const categories = ["All", "Hospital", "Office", "Resort", "Restaurant"];
function Project_details() {
  const [exteriorFilter, setExteriorFilter] = useState("All");
  const [interiorFilter, setInteriorFilter] = useState("All");

  const ImageFrame = ({ src, alt, aspectClass = "aspect-[4/3]" }) => (
    <div className={`relative w-full ${aspectClass} overflow-hidden group/img cursor-pointer transition-all duration-700 ease-out border border-[#4f5d39]/20`}>
      <div className="absolute top-3 right-3 z-20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-6 h-6 rounded-full border border-[#4f5d39]/30 bg-[#f4f1ea]/80 backdrop-blur-md flex items-center justify-center text-[#4f5d39] text-[10px] font-bold">
          +
        </div>
      </div>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover/img:scale-[1.03] filter brightness-[0.92] contrast-[1.05] grayscale-[40%] group-hover/img:brightness-100 group-hover/img:contrast-100 group-hover/img:grayscale-0"
      />
      {/* Newspaper ink tint overlay effect */}
      <div className="absolute inset-0 bg-[#4f5d39]/5 mix-blend-multiply opacity-100 group-hover/img:opacity-0 transition-opacity duration-500 pointer-events-none" />
    </div>
  );

  const renderProjectImages = (project) => {
    switch (project.layoutType) {
      case "editorial-asymmetric":
        return (
          <div className="w-full flex flex-col space-y-4">
            <div className="max-w-[85%]">
              <ImageFrame src={project.images[0]} alt="Primary Layout" aspectClass="aspect-[3/2]" />
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7">
                <ImageFrame src={project.images[1] || project.images[0]} alt="Supporting Frame" aspectClass="aspect-[4/3]" />
              </div>
              <div className="col-span-5 flex items-end">
                <div className="w-full max-w-[90%]">
                  <ImageFrame src={project.images[2] || project.images[0]} alt="Detail Macro" aspectClass="aspect-square" />
                </div>
              </div>
            </div>
          </div>
        );
      case "split-duo":
        return (
          <div className="grid grid-cols-2 gap-4 w-full items-start max-w-[90%]">
            <div className="pt-8">
              <ImageFrame src={project.images[0]} alt="Left Column" aspectClass="aspect-[4/5]" />
            </div>
            <div>
              <ImageFrame src={project.images[1] || project.images[0]} alt="Right Column" aspectClass="aspect-[4/5]" />
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full max-w-[85%]">
            <ImageFrame src={project.images[0]} alt={project.title} aspectClass="aspect-[16/10]" />
          </div>
        );
    }
  };

  const renderProjectCard = (project) => (
    <div key={project.id} className="w-full min-w-full snap-start flex flex-col lg:flex-row gap-12 lg:gap-16 items-center group/card pt-14 pb-16 relative">
      <div className="w-full lg:w-[45%] flex flex-col justify-between text-left space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-sans font-bold tracking-[0.4em] text-[#4f5d39] uppercase">
             {project.category}
            </span>
            <div className="w-6 h-[1px] bg-[#4f5d39]/30"></div>
          </div>
          <h3 className="text-xl md:text-3xl font-serif font-bold text-[#4f5d39] tracking-tight leading-tight group-hover/card:text-[#4f5d39]/80 transition-colors duration-400">
            {project.title}
          </h3>
          <p className="font-sans text-xs text-[#4f5d39]/80 font-light leading-relaxed max-w-sm pt-1">
            {project.description}
          </p>
        </div>

        <div className="space-y-2.5 font-sans text-[14px] tracking-wide border-t border-b border-[#4f5d39]/30 py-5 max-w-sm">
          <div className="grid grid-cols-4 gap-1">
            <span className="col-span-1 font-bold text-[#4f5d39] uppercase text-[11px] tracking-widest">Location</span>
            <span className="col-span-3 text-[#4f5d39] font-normal truncate">{project.location}</span>
          </div>
          <div className="grid grid-cols-4 gap-1 pt-1">
            <span className="col-span-1 font-bold text-[#4f5d39] uppercase text-[11px] tracking-widest">Scale</span>
            <span className="col-span-3 text-[#4f5d39] font-normal">{project.area}</span>
          </div>
          <div className="grid grid-cols-4 gap-1 pt-1">
            <span className="col-span-1 font-bold text-[#4f5d39] uppercase text-[11px] tracking-widest">Credits</span>
            <span className="col-span-3 text-[#4f5d39] italic font-normal text-[11px]">{project.timeline}</span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[55%] flex justify-end">
        <div className="w-full max-w-md lg:max-w-lg">
          {renderProjectImages(project)}
        </div>
      </div>
    </div>
  );

  const getFilteredProjects = (section, filter) => {
    return allProjects.filter(p => p.section === section && (filter === "All" || p.category === filter));
  };

  const exteriorProjects = getFilteredProjects("exterior", exteriorFilter);
  const interiorProjects = getFilteredProjects("interior", interiorFilter);

  const renderFilterNavbar = (currentFilter, section, setFilter) => (
    <div className="flex flex-wrap justify-start items-center gap-6 text-[10px] tracking-[0.25em] font-sans uppercase my-6 border-b border-[#4f5d39]/30 pb-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`relative pb-2 transition-all duration-300 font-bold ${
            currentFilter === cat ? "text-[#4f5d39]" : "text-[#4f5d39]/40 hover:text-[#4f5d39]/70"
          }`}
        >
          {cat}
          {currentFilter === cat && (
            <span className="absolute bottom-[-1px] left-0 w-full h-[1.5px] bg-[#4f5d39]" />
          )}
        </button>
      ))}
    </div>
  );

  const renderSectionHeading = (indexStr, title) => (
    <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#4f5d39] pb-4">
      <div className="space-y-0.5">
        <span className="text-[10px] font-sans tracking-[0.4em] text-[#4f5d39]/70 font-bold uppercase block">
          Portfolio Index — {indexStr}
        </span>
        <h2 className="text-2xl md:text-4xl font-serif font-black tracking-tight text-[#4f5d39] lowercase first-letter:uppercase">
          {title}
        </h2>
      </div>
    </div>
  );

  const renderExploreLink = (to, label) => (
    <div className="pt-6 flex justify-end">
      <Link
        to={to}
        className="group/link inline-flex items-center gap-4 text-[10px] font-sans tracking-[0.25em] font-bold text-[#4f5d39]/80 uppercase transition-colors duration-300 hover:text-[#4f5d39]"
      >
        <span className="relative py-1">
          {label}
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#4f5d39] group-hover/link:w-full transition-all duration-300" />
        </span>
        <span className="transition-transform duration-300 group-hover/link:translate-x-2 text-sm">&rarr;</span>
      </Link>
    </div>
  );

  const RenderProjectTrack = ({ projects }) => (
    <div className="relative w-full group/track">
      {/* Floating dynamic newspaper edge helper bar */}
      {projects.length > 1 && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none flex flex-col items-center gap-1 text-[9px] font-sans font-bold tracking-[0.4em] text-[#4f5d39]/80 uppercase select-none bg-gradient-to-l from-[#f4f1ea] -mr-17 via-[#f4f1ea]/95 to-transparent pl-12 pr-4 py-8 rounded-l-md">
          <span className="animate-bounce text-base tracking-normal font-light">&rarr;</span>
          <span className="writing-mode-vertical text-[8px] tracking-[0.2em] opacity-80 pt-1">Next Works</span>
        </div>
      )}

      <div className="w-full overflow-x-auto scrollbar-none snap-x snap-mandatory flex scroll-smooth border-b border-[#4f5d39]/20">
        {projects.map((project) => renderProjectCard(project))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-28 bg-[#f4f1ea] space-y-36 overflow-hidden z-20 transition-colors duration-500">

      {/* 01. EXTERIOR ARCHITECTURE */}
      <div className="space-y-2">
        {renderSectionHeading("01", "Exterior structures")}
        {renderFilterNavbar(exteriorFilter, "exterior", setExteriorFilter)}

        {exteriorProjects.length > 0 ? (
          <RenderProjectTrack projects={exteriorProjects} />
        ) : (
          <div className="text-center py-16 border-b border-[#4f5d39]/20">
            <p className="text-xs tracking-widest text-[#4f5d39]/50 uppercase font-medium">
              No archived structural works match this criteria.
            </p>
          </div>
        )}

        {exteriorFilter === "All" && renderExploreLink("/exterior-portfolio", "View Full Structural Index")}
      </div>

      {/* 02. INTERIOR ENVIRONMENTS */}
      <div className="space-y-2">
        {renderSectionHeading("02", "Interior environments")}
        {renderFilterNavbar(interiorFilter, "interior", setInteriorFilter)}

        {interiorProjects.length > 0 ? (
          <RenderProjectTrack projects={interiorProjects} />
        ) : (
          <div className="text-center py-16 border-b border-[#4f5d39]/20">
            <p className="text-xs tracking-widest text-[#4f5d39]/50 uppercase font-medium">
              No curated space works match this criteria.
            </p>
          </div>
        )}

        {interiorFilter === "All" && renderExploreLink("/interior-portfolio", "View Full Interior Archive")}
      </div>
    </section>
  );
}


export default Project_details;
