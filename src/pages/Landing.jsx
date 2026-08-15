import React, { useState, useRef } from 'react';
import remodelingImg from '../assets/remodeling.jpeg'; 

const Landing = () => {
  // Track which service row is active/expanded for mobile viewports
  const [activeMobileIndex, setActiveMobileIndex] = useState(null);
  // Store timeout ID to cancel scroll if the user closes the row before it fires
  const scrollTimeoutRef = useRef(null);

  const services = [
   {
      number: "01",
      title: "Exterior Design",
      description: "Designing beautiful home exteriors and outdoor spaces that look stunning from the street and blend perfectly with their surroundings.",
      targetId: "exterior",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      number: "02",
      title: "Interior Design",
      description: "Creating warm, thoughtful indoor spaces tailored to your daily life, focusing on natural light, smart layouts, and beautiful finishes.",
      targetId: "interior",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    },
    {
      number: "03",
      title: "Renovation",
      description: "Breathing new life into older or historic properties, updating them for modern living while protecting the character that makes them special.",
      targetId: null, 
      image: remodelingImg
    },
    {
      number: "04",
      title: "Remodeling",
      description: "Changing the actual layout of your current home—like knocking down walls or reshaping rooms—to completely transform how you use the space.",
      targetId: null, 
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80" 
    }
  ];

  const handleServiceClick = (e, targetId, index) => {
    // Clear any active scroll countdowns immediately
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Undo: If the clicked item is already expanded, contract it back and exit
    if (activeMobileIndex === index) {
      setActiveMobileIndex(null);
      return;
    }

    // Otherwise, expand the new row
    setActiveMobileIndex(index);

    if (targetId) {
      // Start the smooth scroll execution window
      scrollTimeoutRef.current = setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 350);
    }
  };

  return (
    <section
      id="landing-details"
      className="relative z-10 mb-0 sm:mb-12 md:mb-22 flex flex-col items-center justify-start py-8 sm:py-12 md:py-16 select-none bg-white text-zinc-950 w-full"
    >
      {/* Header Section */}
      <div className="w-full mt-10 mb-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-2 mb-8 sm:mb-12 text-center">
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#ff7b00]/80">
          Our Expertise
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#4f5d39] tracking-wider uppercase font-serif">
          Our Services
        </h2>
        <div className="w-12 h-[1px] bg-zinc-200 mt-1"></div>
      </div>

      {/* Vertical Interactive Rows */}
      <div className="flex flex-col w-full border-t border-zinc-200">
        {services.map((service, index) => {
          const isMobileExpanded = activeMobileIndex === index;

          return (
            <button
              key={`landing-srv-${index}-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => handleServiceClick(e, service.targetId, index)}
              type="button"
              className="group text-left relative w-full border-b border-zinc-200 overflow-hidden block transition-colors duration-500 bg-white cursor-pointer touch-manipulation"
            >
              
             <div 
  className={`absolute top-0 bottom-0 right-0 z-0 bg-cover bg-center transition-[width,opacity,filter] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none 
    ${/* Desktop styles */ ''}
    md:w-32 md:grayscale-[70%] md:opacity-40 md:group-hover:w-full md:group-hover:opacity-15 md:group-hover:grayscale-0
    ${/* Mobile styles */ ''}
    ${isMobileExpanded 
      ? 'w-full opacity-20 grayscale-0' 
      : 'w-24 opacity-40 grayscale-[50%]'
    }
  `}
  style={{ backgroundImage: `url(${service.image})` }}
/>
              
              {/* Crop Boundary Indicator Line */}
              <div 
                className={`absolute top-0 bottom-0 z-0 bg-zinc-200/60 transition-opacity duration-300 md:right-32 md:group-hover:opacity-0
                  ${isMobileExpanded ? 'opacity-0 right-0' : 'opacity-100 right-20 sm:right-28'}
                `} 
              />

              {/* Content Container */}
              <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col md:flex-row md:items-center justify-between py-5 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10">

                {/* Left Column: Number & Section Title */}
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-1.5 md:mb-0 md:w-[380px] shrink-0 font-serif font-light">
                  <span className="text-xs sm:text-sm text-[#ff7b00]/70 group-hover:text-[#4f5d39] tracking-widest font-light transition-colors duration-300">
                    {service.number}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-[#4f5d39] tracking-wide md:group-hover:translate-x-1 transition-transform duration-500 ease-out">
                    {service.title}
                  </h3>
                </div>

                {/* Right Column: Clean description alignment */}
                <div className="pl-4 sm:pl-6 md:pl-0 pr-24 sm:pr-32 md:pr-30 flex-1 md:flex md:justify-end">
                  <div className="w-full md:max-w-md">
                    <p className="text-[11px] sm:text-xs md:text-sm text-[#313826] font-light leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>

              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Landing;