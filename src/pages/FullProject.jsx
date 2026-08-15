import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Bashanta from "../assets/bashanta.png";
import Kindergarten from "../assets/kindergarten.png";
import Simin from "../assets/simin.png";
import HospitalImg from "../assets/hospital (1).png";
import InteriorLobby from "../assets/jb.png";
import InteriorRestaurant from "../assets/sushi.png";
import bashantaInte from "../assets/bashantaInte.png";
import AKM from "../assets/akm.png";
import Pavillion from "../assets/pavillion_20.png";
import PavillionTop from "../assets/pavillion_top_right.png";
import Shirin from "../assets/shirin.png";
import Alibaba from "../assets/alibaba-day.jpg";
import bgImage from "../assets/projectsbg.png";
import Footer from "./Footer";
import Meet from "./Meet";

export const fullProjects = [
  {
    id: "bashanta-bilash",
    type: "Exterior",
    category: "Resort",
    title: "Bashanta Bilash",
    location: "Tarabo, Kachpur, Narayangonj",
    locationType: "Countryside",
    status: "On Progress",
    area: "35 Bigha +",
    year: "2020–Present",
    image: Bashanta,
    summary:
      "A resort landscape composed around water, pavilions, gardens, and long-view hospitality sequences.",
  },
  {
    id: "kindergarten-madrassa",
    type: "Exterior",
    category: "Institutional",
    title: "Kindergarten Madrassa",
    location: "Purbachal, Dhaka",
    locationType: "Town",
    status: "Recent Project",
    area: "22 Bigha",
    year: "2022–2024",
    image: Kindergarten,
    summary:
      "A calm learning campus shaped with shaded courts, efficient circulation, and durable architectural language.",
  },
  {
    id: "simin-complex",
    type: "Exterior",
    category: "Villa",
    title: "Simin Complex",
    location: "Nokla, Sherpur",
    locationType: "Countryside",
    status: "Recent Project",
    area: "10 Katha",
    year: "2024",
    image: Simin,
    summary:
      "A private complex balancing residential privacy, landscape edges, and a crisp contemporary massing.",
  },
  {
    id: "bangladesh-eye-hospital",
    type: "Exterior",
    category: "Hospital",
    title: "Bangladesh Eye Hospital",
    location: "Uttara, Dhaka",
    locationType: "Town",
    status: "Recent Project",
    area: "1.5 Acre",
    year: "2023",
    image: HospitalImg,
    summary:
      "A healthcare environment planned for clarity, accessibility, patient comfort, and strong civic presence.",
  },
  {
    id: "shirin-villa",
    type: "Exterior",
    category: "Villa",
    title: "Shirin Villa",
    location: "Kachpur, Narayangonj",
    locationType: "Countryside",
    status: "Recent Project",
    area: "10 Katha",
    year: "2024",
    image: Shirin,
    summary:
      "A residence and home-office proposal with a restrained facade and clear separation of public and private life.",
  },
  {
    id: "jb-apartment",
    type: "Interior",
    category: "Residential",
    title: "JB Apartment",
    location: "Dhaka",
    locationType: "Town",
    status: "On Progress",
    area: "12,000 Sqft",
    year: "2021–Present",
    image: InteriorLobby,
    summary:
      "A warm residential interior with layered lighting, composed material transitions, and calm daily-use zones.",
  },
  {
    id: "sushi-samurai",
    type: "Interior",
    category: "Restaurant",
    title: "Sushi Samurai",
    location: "Gulshan, Dhaka",
    locationType: "Town",
    status: "Recent Project",
    area: "4,500 Sqft",
    year: "2023",
    image: InteriorRestaurant,
    summary:
      "A restaurant interior designed around intimate seating, crafted surfaces, and strong hospitality rhythm.",
  },
  {
    id: "bashanta-interior",
    type: "Interior",
    category: "Resort",
    title: "Bashanta Bilash Interior",
    location: "Tarabo, Kachpur, Narayangonj",
    locationType: "Countryside",
    status: "On Progress",
    area: "12,000 Sqft",
    year: "2021–Present",
    image: bashantaInte,
    summary:
      "Interior suites and gathering spaces for the resort, developed with earthy finishes and relaxed detail.",
  },
  {
    id: "akm-restaurant",
    type: "Interior",
    category: "Restaurant",
    title: "AKM Restaurant & Convention",
    location: "Gulshan, Dhaka",
    locationType: "Town",
    status: "Recent Project",
    area: "4,500 Sqft",
    year: "2023",
    image: AKM,
    summary:
      "A hospitality and event interior with flexible seating, ceremonial arrival, and a polished material palette.",
  },
];

// Custom Filter Component
function CustomFilterDropdown({ label, options, selectedValue, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative font-mono" ref={dropdownRef}>
      <label className="text-xs font-bold uppercase tracking-wider text-[#5b7fc7] block mb-1.5">
        {label}
      </label>

      {/* Main Selected Input Box */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-transparent border-b border-neutral-300 pb-1.5 px-1 text-base text-neutral-900 cursor-pointer transition-all duration-300 ease-in-out hover:border-[#5b7fc7] focus:outline-none"
      >
        <span className="truncate">
          {selectedValue === "All" ? `All ${label}` : selectedValue}
        </span>
        <span className="text-xs text-[#5b7fc7] ml-2">▼</span>
      </button>

      {/* Dropdown Options List */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white/95 backdrop-blur-md border border-neutral-200 rounded-lg shadow-xl z-50 overflow-hidden flex flex-col gap-1 p-1.5">
          {options.map((option) => {
            const isSelected = selectedValue === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onSelect(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm rounded-md font-mono transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#5b7fc7] hover:text-white ${isSelected
                    ? "bg-[#5b7fc7] text-white font-semibold"
                    : "text-neutral-900 bg-transparent"
                  }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function FullProject() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("All");
  const [selectedTypology, setSelectedTypology] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  // Mobile detection (matches the lg: breakpoint used for the hover preview)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1023px)");
    const handleChange = () => setIsMobile(mql.matches);
    handleChange();
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  // Expanded row id for the mobile list view
  const [expandedId, setExpandedId] = useState(null);

  // Collapse the expanded row whenever filters/search change
  useEffect(() => {
    setExpandedId(null);
  }, [searchQuery, selectedDiscipline, selectedTypology, selectedStatus, selectedLocation]);

  // Hover state for interactive list view
  const [activeHoverIndex, setActiveHoverIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const filteredProjects = useMemo(() => {
    return fullProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDiscipline =
        selectedDiscipline === "All" || project.type === selectedDiscipline;

      const matchesTypology =
        selectedTypology === "All" || project.category === selectedTypology;

      const matchesStatus =
        selectedStatus === "All" || project.status === selectedStatus;

      const matchesLocation =
        selectedLocation === "All" || project.locationType === selectedLocation;

      return (
        matchesSearch &&
        matchesDiscipline &&
        matchesTypology &&
        matchesStatus &&
        matchesLocation
      );
    });
  }, [searchQuery, selectedDiscipline, selectedTypology, selectedStatus, selectedLocation]);

  return (
    <div className="relative min-h-screen text-neutral-900 font-sans selection:bg-[#5b7fc7] selection:text-white">
      {/* Background Image Wrapper */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Soft overlay ensuring high text readability */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />
      </div>

      <main className="relative z-10 w-full min-h-screen pt-20 sm:pt-24 md:pt-28 pb-20">
        {/* Back Button */}
        <div className="px-6 sm:px-12 md:px-16 lg:px-20 pt-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-neutral-600 hover:text-[#5b7fc7] transition-colors duration-200 text-sm font-semibold font-mono"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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

        {/* Editorial Title Block */}
        <header className="w-full max-w-5xl mb-8 pt-6 px-6 sm:px-12 md:px-16 lg:px-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug text-neutral-900 tracking-tight">
            <span className="text-[#5b7fc7] font-normal mr-3 font-mono">Projects...</span>
            Every project begins with a question: how can this be better? Through design, we explore new possibilities
            and create spaces that respond to real people and real needs.
          </h1>
        </header>

        {/* Filter & Control Section */}
        <section className="w-full pt-2 pb-6 px-6 sm:px-12 md:px-16 lg:px-20">
          {/* Top Control Bar: View Switcher & Search */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-neutral-300/80">
            {/* View Mode Switcher */}
            <div className="flex items-center gap-6 text-sm font-medium">
              <button
                onClick={() => {
                  setViewMode("grid");
                  setExpandedId(null);
                }}
                className={`flex items-center gap-2 transition-all font-mono duration-200 pb-1 ${viewMode === "grid"
                    ? "text-[#5b7fc7] font-bold border-b-2 border-[#5b7fc7]"
                    : "text-neutral-400 hover:text-neutral-800"
                  }`}
              >
                <span className="text-base leading-none">⊞</span> Grid
              </button>

              <button
                onClick={() => {
                  setViewMode("list");
                  setExpandedId(null);
                }}
                className={`flex items-center gap-2 transition-all font-mono duration-200 pb-1 ${viewMode === "list"
                    ? "text-[#5b7fc7] font-bold border-b-2 border-[#5b7fc7]"
                    : "text-neutral-400 hover:text-neutral-800"
                  }`}
              >
                <span className="text-base leading-none">⫶☰</span> List
              </button>
            </div>

            {/* Search Input */}
            <div className="relative font-mono w-full sm:w-72 flex items-center justify-between pb-1 border-b border-neutral-400 focus-within:border-[#5b7fc7] transition-colors">
              <input
                type="text"
                placeholder="Search Projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm placeholder-neutral-400 focus:outline-none text-neutral-900 font-normal"
              />
              <span className="text-[#5b7fc7] text-base font-light ml-2">🔎︎</span>
            </div>
          </div>

          {/* Filter Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            <CustomFilterDropdown
              label="Disciplines"
              selectedValue={selectedDiscipline}
              onSelect={setSelectedDiscipline}
              options={[
                { label: "All Disciplines", value: "All" },
                { label: "Exterior", value: "Exterior" },
                { label: "Interior", value: "Interior" },
              ]}
            />

            <CustomFilterDropdown
              label="Typology"
              selectedValue={selectedTypology}
              onSelect={setSelectedTypology}
              options={[
                { label: "All Typologies", value: "All" },
                { label: "Resort", value: "Resort" },
                { label: "Institutional", value: "Institutional" },
                { label: "Villa", value: "Villa" },
                { label: "Hospital", value: "Hospital" },
                { label: "Commercial", value: "Commercial" },
                { label: "Residential", value: "Residential" },
                { label: "Restaurant", value: "Restaurant" },
              ]}
            />

            <CustomFilterDropdown
              label="Location"
              selectedValue={selectedLocation}
              onSelect={setSelectedLocation}
              options={[
                { label: "All Locations", value: "All" },
                { label: "Town", value: "Town" },
                { label: "Countryside", value: "Countryside" },
              ]}
            />

            <CustomFilterDropdown
              label="Status"
              selectedValue={selectedStatus}
              onSelect={setSelectedStatus}
              options={[
                { label: "All Projects", value: "All" },
                { label: "On Progress", value: "On Progress" },
                { label: "Recent Project", value: "Recent Project" },
              ]}
            />
          </div>
        </section>

        {/* Clean Architectural Grid / Interactive Mono List Views */}
        {viewMode === "grid" ? (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 sm:gap-y-36 items-start mt-12 sm:mt-28 px-6 sm:px-12 md:px-16 lg:px-20">
            {filteredProjects.map((project, index) => {
              const isSecondRowTall = index === 3;

              return (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group flex flex-col gap-3"
                >
                  {/* Image Container */}
                  <div
                    className={`w-full bg-neutral-100 overflow-hidden ${isSecondRowTall
                        ? "h-[380px] sm:h-[420px]"
                        : "h-[280px] sm:h-[320px]"
                      }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Grid Titles & Summaries */}
                  <div className="flex flex-col gap-3.5 pt-1">
                    {/* Title and Summary Inline Flow */}
                    <div className="text-lg sm:text-xl text-neutral-600 font-light leading-relaxed">
                      <span className="font-semibold font-mono text-xl sm:text-2xl text-neutral-900 font-mono tracking-wide mr-2.5 inline">
                        {project.title}
                      </span>
                      <span className="inline text-xl sm:text-2xl">{project.summary}</span>
                    </div>

                    {/* Category & Year Metadata */}
                    <div className="flex items-center justify-between text-sm sm:text-base font-mono pt-1">
                      <span className="text-neutral-600 font-semibold">
                        {project.type}, {project.category}
                      </span>
                      <span className="text-[#5b7fc7] font-semibold">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
        ) : (
          /* List View */
          <section className="mt-8 px-6 sm:px-12 md:px-16 lg:px-20 w-full font-mono">
            <div className="relative border-t border-gray-300 w-full">
              {filteredProjects.map((project, index) => {
                const isHovered = !isMobile && activeHoverIndex === index;
                const isExpanded = expandedId === project.id;
                const formattedNum = String(index + 1).padStart(2, "0");

                return (
                  <div
                    key={project.id}
                    onMouseEnter={() => setActiveHoverIndex(index)}
                    onMouseLeave={() => setActiveHoverIndex(null)}
                    onMouseMove={handleMouseMove}
                    onClick={() => {
                      if (isMobile) {
                        setExpandedId(isExpanded ? null : project.id);
                      } else {
                        navigate(`/projects/${project.id}`);
                      }
                    }}
                    className={`group relative border-b border-gray-300 w-full transition-all duration-300 ${isHovered
                        ? "bg-[#5b7fc7] text-white"
                        : "hover:bg-gray-200/40 text-gray-900"
                      }`}
                  >
                    {/* Row Header */}
                    <div className="flex items-center justify-between py-5 px-4 cursor-pointer w-full">
                      {/* Index & Title */}
                      <div className="flex items-center gap-6 md:gap-10 z-10">
                        <span
                          className={`text-base md:text-lg font-bold font-mono tracking-wider transition-colors duration-300 ${isHovered ? "text-white" : "text-gray-900"
                            }`}
                        >
                          {formattedNum}
                        </span>
                        <h3
                          className={`text-xl sm:text-2xl md:text-3xl font-mono font-medium transition-transform duration-300 ease-out ${isHovered
                              ? "translate-x-3 text-white font-semibold"
                              : "text-gray-900"
                            }`}
                        >
                          {project.title}
                        </h3>
                      </div>

                      {/* White Arrow Icon (mobile: visible tappable expand/collapse control) */}
                      <button
                        type="button"
                        aria-expanded={isMobile ? isExpanded : undefined}
                        aria-label={
                          isMobile
                            ? isExpanded
                              ? "Collapse project details"
                              : "Expand project details"
                            : undefined
                        }
                        onClick={(e) => {
                          if (isMobile) {
                            e.stopPropagation();
                            setExpandedId(isExpanded ? null : project.id);
                          }
                        }}
                        className={`z-10 flex items-center justify-center transition-all duration-300 ${
                          isHovered
                            ? "rotate-45 text-white scale-110"
                            : isMobile
                              ? `text-gray-400 ${isExpanded ? "rotate-90" : ""}`
                              : "text-gray-400 opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <ArrowUpRight size={16} />
                      </button>
                    </div>

                    {/* Mobile Expanded Preview: image left, description right */}
                    {isMobile && isExpanded && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="lg:hidden bg-white/70 backdrop-blur-sm border-t border-gray-200 px-4 pt-4 pb-5"
                      >
                        <div className="flex items-stretch gap-4">
                          <div className="w-2/5 shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                            <img
                              src={project.image}
                              alt={project.title}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0 flex flex-col justify-center text-left">
                            <p className="text-sm leading-relaxed text-gray-800 font-normal">
                              {project.summary}
                            </p>
                            <div className="mt-3 pt-2 border-t border-gray-200 flex flex-col gap-0.5 text-[11px] text-gray-600">
                              <span>{project.type} • {project.category}</span>
                              <span className="truncate">{project.location}</span>
                              <span className="text-[#5b7fc7] font-bold">{project.year}</span>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/projects/${project.id}`);
                          }}
                          className="mt-4 w-full flex items-center justify-center gap-2 bg-[#5b7fc7] text-white font-mono text-sm font-semibold tracking-wide px-6 py-3 rounded-full transition-colors duration-300 hover:bg-[#4a6db5] cursor-pointer"
                        >
                          View More Details
                          <ArrowUpRight size={16} className="shrink-0" />
                        </button>
                      </div>
                    )}

                    {/* Floating Hover Preview Card */}
                    {isHovered && (
                      <div
                        style={{
                          top: `${hoverPos.y}px`,
                          left: `${hoverPos.x}px`,
                        }}
                        className="hidden lg:flex -mt-40 absolute z-30 h-[380px] w-[650px] shadow-2xl rounded-xl overflow-hidden border border-white/60 pointer-events-none transition-all duration-150 ease-out backdrop-blur-md bg-white/95"
                      >
                        <div className="w-1/2 h-full overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-1/2 h-full p-6 flex flex-col justify-center text-left font-mono">
                          <p className="text-sm md:text-xl leading-relaxed text-gray-800 font-normal">
                            {project.summary}
                          </p>
                          <div className="mt-4 pt-3 border-t border-gray-200 flex flex-col gap-1 text-xs text-gray-600">
                            <span>{project.type} • {project.category}</span>
                            <span>{project.location}</span>
                            <span className="text-[#5b7fc7] font-bold mt-1">{project.year}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>

      {/* Footer Block */}
      <div className="relative z-10 w-screen border-t border-neutral-300 pt-12 bg-white/70 backdrop-blur-md">
        <Meet />
        <Footer />
      </div>
    </div>
  );
}

export default FullProject;
