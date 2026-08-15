import React from "react";
import landingImage from "/src/assets/landing11.png";
import mobileLandingImage from "/src/assets/landing11_mobile.jpg";

function Navbar() {
  return (
    <div className="sticky top-0 z-0 w-full h-screen h-[100dvh] overflow-hidden">
      {/* Picture tag automatically swaps images based on screen width */}
      <picture className="w-full h-full block">
        {/* Used on screens smaller than 640px (Tailwind 'sm' breakpoint) */}
        <source media="(max-width: 639px)" srcSet={mobileLandingImage} />
        {/* Fallback & default for screens 640px and wider */}
        <img
          src={landingImage}
          alt="Studio DNA Landing Page"
          className="w-full h-full object-cover object-center"
        />
      </picture>

      {/* Explore Portfolio Button */}
      {/* <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-12 md:bottom-16 md:left-16 lg:bottom-20 lg:left-24">
        <button className="group flex items-center gap-2 sm:gap-3 border-b border-[#4f5d39] bg-transparent px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-[#4f5d39] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm transition-all duration-300 hover:bg-transparent hover:text-black touch-manipulation">
          <span>Explore Portfolio</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div> */}
    </div>
  );
}

export default Navbar;