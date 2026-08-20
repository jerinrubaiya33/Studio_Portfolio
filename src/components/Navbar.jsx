// import React from "react";
// import landingImage from "/src/assets/landing11.png";
// import mobileLandingImage from "/src/assets/landing11_mobile.jpg";

// function Navbar() {
//   return (
//     <div className="sticky top-0 z-0 w-full h-screen h-[100dvh] overflow-hidden">
//       {/* Picture tag automatically swaps images based on screen width */}
//       <picture className="w-full h-full block">
//         {/* Used on screens smaller than 640px (Tailwind 'sm' breakpoint) */}
//         <source media="(max-width: 639px)" srcSet={mobileLandingImage} />
//         {/* Fallback & default for screens 640px and wider */}
//         <img
//           src={landingImage}
//           alt="Studio DNA Landing Page"
//           className="w-full h-full object-cover object-center"
//         />
//       </picture>

//       {/* Explore Portfolio Button */}
//       {/* <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-12 md:bottom-16 md:left-16 lg:bottom-20 lg:left-24">
//         <button className="group flex items-center gap-2 sm:gap-3 border-b border-[#4f5d39] bg-transparent px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-[#4f5d39] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm transition-all duration-300 hover:bg-transparent hover:text-black touch-manipulation">
//           <span>Explore Portfolio</span>
//           <span className="transition-transform duration-300 group-hover:translate-x-1">
//             →
//           </span>
//         </button>
//       </div> */}
//     </div>
//   );
// }

// export default Navbar;


















// import React from "react";
// import landingImage from "/src/assets/Torfi_Agnarsson.jpg";
// import mobileLandingImage from "/src/assets/landing11_mobile.jpg";

// function Navbar() {
//   return (
//     <div className="sticky top-0 z-0 w-full h-screen h-[100dvh] overflow-hidden">
//       {/* Image */}
//       <picture className="w-full h-full block">
//         <source
//           media="(max-width: 639px)"
//           srcSet={mobileLandingImage}
//         />

//         <img
//           src={landingImage}
//           alt="Studio DNA Landing Page"
//           className="w-full h-full object-cover grayscale-90 object-center"
//         />
//       </picture>

//       {/* Bottom black gradient */}
//       <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black via-black/75 to-transparent pointer-events-none" />

//       {/* Hero Title */}
//       <div className="absolute bottom-8 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12 md:bottom-16 md:left-16 lg:bottom-20 lg:left-24">
//         <h1 className="max-w-6xl font-mono text-4xl sm:text-xl md:text-5xl lg:text-5xl xl:text-5xl font-light leading-[0.95] tracking-tight text-white">
//           Architecture that{" "}
//           <span className="italic font-normal">Connects People</span>
//           <br />
//           with Place, Light and Material
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default Navbar;



















import React from "react";
import landingImage from "/src/assets/Torfi_Agnarsson.jpg";
import mobileLandingImage from "/src/assets/Torfi_Agnarsson.jpg";

function Navbar() {
  return (
    <div className="w-full">
      {/* Title Section */}
      <section className="w-full min-h-[45vh] flex items-end sm:mt-0 -mt-20 px-6 pb-10 sm:px-12 sm:pb-12 md:px-16 md:pb-16 lg:px-24 lg:pb-20">
        <h1 className="max-w-6xl font-mono text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-light leading-[0.95]
         tracking-tight text-black">
          Architecture that Connects People
          <br />
          with Place, Light and Material<span className="text-[#0077B5]">.</span>
        </h1>
      </section>

      {/* Image Section */}
      <section className="w-full h-[55vh] md:h-[95vh] overflow-hidden">
        <picture className="w-full h-full block">
          <source
            media="(max-width: 639px)"
            srcSet={mobileLandingImage}
          />

          <img
            src={landingImage}
            alt="Studio DNA Architecture"
            className="w-full h-full object-cover grayscale object-center"
          />
        </picture>
      </section>
    </div>
  );
}

export default Navbar;