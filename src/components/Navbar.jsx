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



















// import React from "react";
// import landingImage from "/src/assets/Torfi_Agnarsson.jpg";
// import mobileLandingImage from "/src/assets/Torfi_Agnarsson.jpg";

// function Navbar() {
//   return (
//     <div className="w-full">
//       {/* Title Section */}
//       <section className="w-full min-h-[45vh] flex items-end sm:mt-0 -mt-20 px-6 pb-10 sm:px-12 sm:pb-12 md:px-16 md:pb-16 lg:px-24 lg:pb-20">
//         <h1 className="max-w-6xl font-mono text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-light leading-[0.95]
//          tracking-tight text-black">
//           Architecture that Connects People
//           <br />
//           with Place, Light and Material<span className="text-[#0077B5]">.</span>
//         </h1>
//       </section>

//       {/* Image Section */}
//       <section className="w-full h-[55vh] md:h-[95vh] overflow-hidden">
//         <picture className="w-full h-full block">
//           <source
//             media="(max-width: 639px)"
//             srcSet={mobileLandingImage}
//           />

//           <img
//             src={landingImage}
//             alt="Studio DNA Architecture"
//             className="w-full h-full object-cover grayscale object-center"
//           />
//         </picture>
//       </section>
//     </div>
//   );
// }

// export default Navbar;























// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Distinct images for testing contrast between slides
// const carouselItems = [
//   {
//     desktop:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
//     mobile:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//     alt: "Modern Concrete Villa",
//   },
//   {
//     desktop:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
//     mobile:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
//     alt: "Minimalist Architectural Interior",
//   },
//   {
//     desktop:
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
//     mobile:
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
//     alt: "Modern Glass Architecture",
//   },
// ];

// function Navbar() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-switch images every 4 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="sticky top-0 z-0 w-full h-screen h-[100dvh] overflow-hidden bg-black">
//       {/* Background Carousel */}
//       <AnimatePresence mode="popLayout">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <picture className="w-full h-full block">
//             <source
//               media="(max-width: 639px)"
//               srcSet={carouselItems[currentIndex].mobile}
//             />
//             <img
//               src={carouselItems[currentIndex].desktop}
//               alt={carouselItems[currentIndex].alt}
//               className="w-full h-full object-cover  object-center"
//             />
//           </picture>
//         </motion.div>
//       </AnimatePresence>

//       {/* Bottom black gradient */}
//       <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black via-black/75 to-transparent pointer-events-none z-10" />

//       {/* Hero Title */}
//       <div className="absolute bottom-8 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12 md:bottom-16 md:left-16 lg:bottom-20 lg:left-24 z-20">
//         <h1 className="max-w-6xl font-mono text-4xl sm:text-xl md:text-5xl lg:text-5xl xl:text-5xl font-light leading-[0.95] tracking-tight text-white">
//           Architecture that{" "}
//           <span className="italic font-normal">Connects People</span>
//           <br />
//           with Place, Light and Material
//         </h1>

//         {/* Carousel Indicators */}
//         <div className="flex gap-2 mt-6">
//           {carouselItems.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`h-1 transition-all duration-500 rounded-full ${
//                 index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;













// import React, { useEffect } from "react";
// import { motion, useMotionValue, animate } from "framer-motion";

// const images = [
//   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
//   "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
//   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
//   "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80",
// ];

// function Navbar() {
//   const x = useMotionValue(0);

//   useEffect(() => {
//     // Total distance across 4 slides
//     const totalDistance = -3 * window.innerWidth;
    
//     // Increased duration to 36 seconds for a much slower, seamless crawl
//     const duration = 36;

//     const controls = animate(x, totalDistance, {
//       ease: "linear",
//       duration: duration,
//       repeat: Infinity,
//       repeatType: "loop",
//       repeatDelay: 0,
//     });

//     return () => controls.stop();
//   }, [x]);

//   return (
//     <div className="sticky top-0 z-0 w-full h-screen h-[100dvh] overflow-hidden">
//       {/* Horizontal Continuous Track */}
//       <motion.div
//         style={{ x }}
//         className="flex w-[400vw] h-full"
//       >
//         {/* SLIDE 1: First 80% crop of Image 1 */}
//         <div className="w-[100vw] h-full flex-shrink-0 relative overflow-hidden">
//           <img
//             src={images[0]}
//             alt="Image 1 (0-80%)"
//             className="absolute top-0 left-0 h-full max-w-none w-[125%] object-cover"
//             style={{ objectPosition: "0% center" }}
//           />
//         </div>

//         {/* SLIDE 2: Image 1 Rest (20%) + Image 2 First 80% */}
//         <div className="w-[100vw] h-full flex flex-shrink-0">
//           <div className="w-[20%] h-full overflow-hidden relative">
//             <img
//               src={images[0]}
//               alt="Image 1 (80-100%)"
//               className="absolute top-0 right-0 h-full max-w-none w-[500%] object-cover"
//               style={{ objectPosition: "100% center" }}
//             />
//           </div>
//           <div className="w-[80%] h-full overflow-hidden relative">
//             <img
//               src={images[1]}
//               alt="Image 2 (0-80%)"
//               className="absolute top-0 left-0 h-full max-w-none w-[125%] object-cover"
//               style={{ objectPosition: "0% center" }}
//             />
//           </div>
//         </div>

//         {/* SLIDE 3: Image 2 Rest (20%) + Image 3 First 80% */}
//         <div className="w-[100vw] h-full flex flex-shrink-0">
//           <div className="w-[20%] h-full overflow-hidden relative">
//             <img
//               src={images[1]}
//               alt="Image 2 (80-100%)"
//               className="absolute top-0 right-0 h-full max-w-none w-[500%] object-cover"
//               style={{ objectPosition: "100% center" }}
//             />
//           </div>
//           <div className="w-[80%] h-full overflow-hidden relative">
//             <img
//               src={images[2]}
//               alt="Image 3 (0-80%)"
//               className="absolute top-0 left-0 h-full max-w-none w-[125%] object-cover"
//               style={{ objectPosition: "0% center" }}
//             />
//           </div>
//         </div>

//         {/* SLIDE 4: Image 3 Rest (20%) + Image 4 First 80% */}
//         <div className="w-[100vw] h-full flex flex-shrink-0">
//           <div className="w-[20%] h-full overflow-hidden relative">
//             <img
//               src={images[2]}
//               alt="Image 3 (80-100%)"
//               className="absolute top-0 right-0 h-full max-w-none w-[500%] object-cover"
//               style={{ objectPosition: "100% center" }}
//             />
//           </div>
//           <div className="w-[80%] h-full overflow-hidden relative">
//             <img
//               src={images[3]}
//               alt="Image 4 (0-80%)"
//               className="absolute top-0 left-0 h-full max-w-none w-[125%] object-cover"
//               style={{ objectPosition: "0% center" }}
//             />
//           </div>
//         </div>
//       </motion.div>

//       {/* Hero Overlay & Text Content */}
//       <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-10" />

//       <div className="absolute bottom-8 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12 md:bottom-16 md:left-16 lg:bottom-20 lg:left-24 z-20 pointer-events-none">
//         <h1 className="max-w-6xl font-mono text-4xl sm:text-xl md:text-5xl lg:text-5xl xl:text-5xl font-light leading-[0.95] tracking-tight text-white drop-shadow-md">
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















// import React from "react";
// import { motion } from "framer-motion";

// const images = [
//   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
//   "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
//   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
//   "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=80",
// ];

// function HeroSlider() {
//   const duplicatedImages = [...images, ...images];

//   return (
//     <div className="relative z-0 w-full h-[100dvh] overflow-hidden bg-black">
//       {/* Top Gradient Overlay */}
//       <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none" />

//       {/* Horizontal Continuous Track */}
//       <motion.div
//         className="flex h-full w-max"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{
//           ease: "linear",
//           duration: 36,
//           repeat: Infinity,
//           repeatType: "loop",
//         }}
//       >
//         {duplicatedImages.map((src, index) => (
//           <div
//             key={index}
//             className="w-[100vw] h-full flex-none relative overflow-hidden"
//           >
//             <img
//               src={src}
//               alt={`Slide ${(index % images.length) + 1}`}
//               className="w-full h-full object-cover object-center"
//               loading={index < 2 ? "eager" : "lazy"}
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default HeroSlider;

























import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1080&q=75",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1080&q=75",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1080&q=75",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1080&q=75",
];

function HeroSlider() {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative z-0 w-full h-[100dvh] overflow-hidden flex items-center bg-black">
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none" />

      {/* Hardware-Accelerated Continuous Track */}
      <motion.div
        className="flex w-max will-change-transform items-center"
        style={{ transform: "translateZ(0)" }}
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 50, // Calibrated slow panning speed for large full-height slides
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            // Mobile: w-[150dvh] + h-[100dvh] guarantees maximum screen height while keeping exact 3:2 uncropped image ratio
            className="w-[150dvh] h-[100dvh] md:w-[100vw] md:h-screen flex-none relative overflow-hidden"
          >
            <img
              src={src}
              alt={`Slide ${(index % images.length) + 1}`}
              className="w-full h-full object-cover transform-gpu"
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default HeroSlider;
















// import React from "react";
// import { motion } from "framer-motion";

// const images = [
//   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1080&q=75",
//   "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1080&q=75",
//   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1080&q=75",
//   "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1080&q=75",
// ];

// function HeroSlider() {
//   const duplicatedImages = [...images, ...images];

//   return (
//     <div className="relative z-0 w-full overflow-hidden flex items-center bg-black">
//       {/* Top Gradient Overlay */}
//       <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none" />

//       {/* Hardware-Accelerated Track */}
//       <motion.div
//         className="flex w-max will-change-transform items-center"
//         style={{ transform: "translateZ(0)" }}
//         animate={{
//           x: ["0%", "-50%"],
//         }}
//         transition={{
//           duration: 45, // Smooth, slow pan across wide full-height slides
//           ease: "linear",
//           repeat: Infinity,
//           repeatType: "loop",
//         }}
//       >
//         {duplicatedImages.map((src, index) => (
//           <div
//             key={index}
//             // Mobile: 210vw width + 140vw height (or 95dvh) maxes out screen height with 100% uncropped 3:2 images
//             className="w-[210vw] h-[140vw] sm:h-[95dvh] md:w-[100vw] md:h-screen flex-none relative overflow-hidden"
//           >
//             <img
//               src={src}
//               alt={`Slide ${(index % images.length) + 1}`}
//               className="w-full h-full object-cover transform-gpu"
//               loading={index < 2 ? "eager" : "lazy"}
//               decoding="async"
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default HeroSlider;