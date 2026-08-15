// import React, { useState } from "react";
// import designIcon from "../assets/Design.png";
// import buildIcon from "../assets/Build2.png";
// import supplyIcon from "../assets/supply.png";
// import commitmentIcon from "../assets/commitment.png";
// import qualityIcon from "../assets/quality.png";
// import sustainabilityIcon from "../assets/sustainability.png";

// const pillars = [
//   {
//     num: "01",
//     icon: (
//       <img
//         src={designIcon}
//         alt="Design"
//         className="w-9 h-9 object-contain object-left group-hover:scale-105 transition-transform duration-300"
//       />
//     ),
//     title: "DESIGN",
//     desc: "Exclusive Architectural Interior Design",
//   },
//   {
//     num: "02",
//     icon: (
//       <img
//         src={buildIcon}
//         alt="Build"
//         className="w-9 h-9 -mt-3 mb-2 object-contain object-left group-hover:scale-105 transition-transform duration-300"
//       />
//     ),
//     title: "BUILD",
//     desc: "Custom Construction with Premium Material",
//   },
//   {
//     num: "03",
//     icon: (
//       <img
//         src={supplyIcon}
//         alt="Supply"
//         className="w-9 h-9 object-contain object-left group-hover:scale-105 transition-transform duration-300"
//       />
//     ),
//     title: "SUPPLY",
//     desc: "Premium Material Outsourcing Strength",
//   },
//   {
//     num: "04",
//     icon: (
//       <img
//         src={commitmentIcon}
//         alt="Commitment"
//         className="w-12 h-12 -mt-2.5 object-contain object-left group-hover:scale-105 transition-transform duration-300"
//       />
//     ),
//     title: "COMMITMENT",
//     desc: "On Time Delivery with Professional Integrity",
//   },
//   {
//     num: "05",
//     icon: (
//       <img
//         src={qualityIcon}
//         alt="Quality"
//         className="w-9 h-9 object-contain object-left group-hover:scale-105 transition-transform duration-300"
//       />
//     ),
//     title: "QUALITY",
//     desc: "Assured Quality in Every Detail",
//   },
//   {
//     num: "06",
//     icon: (
//       <img
//         src={sustainabilityIcon}
//         alt="Sustainability"
//         className="w-9.5 h-9.5 -mt-3.5 mb-3 object-contain object-left group-hover:scale-105 transition-transform duration-300"
//       />
//     ),
//     title: "SUSTAINABILITY",
//     desc: "Eco Friendly Solutions for Better Future",
//   },
// ];

// const Features = () => {
//   // Mobile active slide state
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section className="relative z-10 w-full mt-0 md:-mt-22 pt-8 pb-6 md:pb-3 px-6 md:px-12 lg:px-30 bg-[#ffffff] text-[#718355] overflow-hidden select-none">
//       {/* Fine Blueprint Border Lines - Spans Full Width with padding */}
//       <div className="absolute inset-3 bg-[#f8f8f8] border border-[#718355]/15 pointer-events-none" />

//       {/* Full-width Inner wrapper */}
//       <div className="w-full ml-0 md:-ml-6 relative pt-6 pb-2 z-10">
//         {/* Compact Header */}
//         <div className="flex items-center justify-between mb-8 border-b border-[#718355]/10 pb-2">
//           <span
//             style={{ fontFamily: "'Jost', sans-serif" }}
//             className="text-xs tracking-[0.4em] text-[#718355] uppercase font-light"
//           >
//             Our Pillars
//           </span>
//           <span
//             style={{ fontFamily: "'Cormorant Garamond', serif" }}
//             className="text-xs text-[#718355]/60 italic font-light"
//           >
//             Sequence _ {pillars[activeTab].num}
//           </span>
//         </div>

//         {/* Desktop Horizontal Timeline Layout (UNCHANGED) */}
//         <div className="relative hidden md:block my-16 w-full">
//           <div className="absolute top-[145px] left-0 w-full h-[1px] bg-[#718355]/20" />
//           <div className="grid grid-cols-6 gap-6 relative z-10 w-full">
//             {pillars.map(({ num, icon, title, desc }, index) => {
//               const isEven = index % 2 === 0;
//               return (
//                 <div
//                   key={num}
//                   className={`group flex flex-col relative px-2 transition-all duration-300 ${
//                     isEven
//                       ? "justify-end h-[115px] pb-5"
//                       : "justify-start h-[115px] pt-6 mt-[160px]"
//                   }`}
//                 >
//                   <div
//                     className={`absolute left-2 w-[1px] bg-[#718355]/40 group-hover:bg-[#718355] transition-colors duration-300 ${
//                       isEven ? "bottom-[-18px] h-6" : "top-6 h-6 -translate-y-6"
//                     }`}
//                   >
//                     <div
//                       className={`absolute left-1/2 -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-[#718355]/60 border border-[#718355]/40 group-hover:border-[#718355] group-hover:bg-[#718355] group-hover:scale-125 transition-all duration-300 ${
//                         isEven ? "bottom-[-3.5px]" : "top-0 -translate-y-1/2"
//                       }`}
//                     />
//                   </div>

//                   <div className="space-y-1.5 text-left">
//                     <div className="flex items-center gap-2">
//                       <span className="font-mono text-[10px] text-[#ff7b00] tracking-wider">
//                         {num}
//                       </span>
//                       <div className="text-[#718355] transition-colors duration-300">
//                         {icon}
//                       </div>
//                     </div>
//                     <h4
//                       style={{ fontFamily: "'serif', sans-serif" }}
//                       className="text-[18px] lg:text-[20px] font-medium tracking-[0.15em] uppercase text-[#718355]"
//                     >
//                       {title}
//                     </h4>
//                     <p
//                       style={{ fontFamily: "'Cormorant Garamond', serif" }}
//                       className="text-[#718355] text-[13px] lg:text-[14px] leading-snug line-clamp-2 font-normal opacity-80 group-hover:opacity-100 transition-opacity duration-300"
//                     >
//                       {desc}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* NEW Interactive Mobile & Tablet UI */}
//         <div className="md:hidden w-full my-6 text-left">
//           {/* Axis Step Numbers Controller */}
//           <div className="relative w-full flex justify-between items-center mb-10 px-2">
//             <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#718355]/20 z-0" />
            
//             {pillars.map((pillar, idx) => (
//               <button
//                 key={pillar.num}
//                 onClick={() => setActiveTab(idx)}
//                 className="relative z-10 flex flex-col items-center group focus:outline-none"
//               >
//                 <span className={`font-mono text-[10px] transition-all duration-300 mb-1 ${
//                   idx === activeTab ? "text-[#ff7b00] font-bold scale-110" : "text-[#718355]/40"
//                 }`}>
//                   {pillar.num}
//                 </span>
//                 <div className={`w-2 h-2 rounded-full border transition-all duration-300 ${
//                   idx === activeTab 
//                     ? "bg-[#ff7b00] border-[#ff7b00] scale-125 shadow-sm" 
//                     : "bg-white border-[#718355]/40"
//                 }`} />
//               </button>
//             ))}
//           </div>

//           {/* Active Step Content Card */}
//           <div className="bg-white/50 border border-[#718355]/10 rounded-xl p-5 min-h-[160px] flex flex-col justify-between transition-all duration-500 ease-in-out">
//             <div className="space-y-3">
//               <div className="flex items-center gap-3">
//                 <div className="text-[#718355] max-h-9 overflow-visible [&_img]:mt-0 [&_img]:mb-0">
//                   {pillars[activeTab].icon}
//                 </div>
//                 <h4
//                   style={{ fontFamily: "'Jost', sans-serif" }}
//                   className="text-lg font-semibold tracking-wider uppercase text-[#718355]"
//                 >
//                   {pillars[activeTab].title}
//                 </h4>
//               </div>
//               <p
//                 style={{ fontFamily: "'Cormorant Garamond', serif" }}
//                 className="text-[#718355]/90 text-[15px] leading-relaxed pt-1"
//               >
//                 {pillars[activeTab].desc}
//               </p>
//             </div>

//             {/* Step indicator helper */}
//             <div className="flex justify-between items-center mt-4 pt-3 border-t border-[#718355]/5">
//               <span className="text-[10px] font-mono text-[#718355]/30">
//                 PILLAR_0{activeTab + 1} // STRUCT
//               </span>
//               <div className="flex gap-1.5">
//                 <button 
//                   disabled={activeTab === 0}
//                   onClick={() => setActiveTab(prev => prev - 1)}
//                   className="w-6 h-6 rounded-md border border-[#718355]/20 flex items-center justify-center text-xs disabled:opacity-20 text-[#718355]"
//                 >
//                   ←
//                 </button>
//                 <button 
//                   disabled={activeTab === pillars.length - 1}
//                   onClick={() => setActiveTab(prev => prev + 1)}
//                   className="w-6 h-6 rounded-md border border-[#718355]/20 flex items-center justify-center text-xs disabled:opacity-20 text-[#718355]"
//                 >
//                   →
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Micro Footer Spec Mark */}
//         <div className="w-full text-right mt-2 text-[9px] font-mono text-[#718355]/20 uppercase tracking-widest hidden md:block">
//           [ fine_line_schematic_rev.02 ]
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;










import React from "react";
import designIcon from "../assets/Design.png";
import buildIcon from "../assets/Build2.png";
import supplyIcon from "../assets/supply.png";
import commitmentIcon from "../assets/commitment.png";
import qualityIcon from "../assets/quality.png";
import sustainabilityIcon from "../assets/sustainability.png";

const pillars = [
  {
    num: "01",
    icon: (
      <img
        src={designIcon}
        alt="Design"
        className="w-9 h-9 object-contain object-left group-hover:scale-105 transition-transform duration-300"
      />
    ),
    title: "DESIGN",
    desc: "Exclusive Architectural Interior Design",
  },
  {
    num: "02",
    icon: (
      <img
        src={buildIcon}
        alt="Build"
        className="w-9 h-9 -mt-3 mb-2 object-contain object-left group-hover:scale-105 transition-transform duration-300"
      />
    ),
    title: "BUILD",
    desc: "Custom Construction with Premium Material",
  },
  {
    num: "03",
    icon: (
      <img
        src={supplyIcon}
        alt="Supply"
        className="w-9 h-9 object-contain object-left group-hover:scale-105 transition-transform duration-300"
      />
    ),
    title: "SUPPLY",
    desc: "Premium Material Outsourcing Strength",
  },
  {
    num: "04",
    icon: (
      <img
        src={commitmentIcon}
        alt="Commitment"
        className="w-12 h-12 -mt-2.5 object-contain object-left group-hover:scale-105 transition-transform duration-300"
      />
    ),
    title: "COMMITMENT",
    desc: "On Time Delivery with Professional Integrity",
  },
  {
    num: "05",
    icon: (
      <img
        src={qualityIcon}
        alt="Quality"
        className="w-9 h-9 object-contain object-left group-hover:scale-105 transition-transform duration-300"
      />
    ),
    title: "QUALITY",
    desc: "Assured Quality in Every Detail",
  },
  {
    num: "06",
    icon: (
      <img
        src={sustainabilityIcon}
        alt="Sustainability"
        className="w-9.5 h-9.5 -mt-3.5 mb-3 object-contain object-left group-hover:scale-105 transition-transform duration-300"
      />
    ),
    title: "SUSTAINABILITY",
    desc: "Eco Friendly Solutions for Better Future",
  },
];

const Features = () => {
  return (
    <section className="relative z-10 w-full mt-0 md:-mt-22 pt-8 pb-6 md:pb-3 px-6 md:px-12 lg:px-30 bg-[#ffffff] text-[#718355] overflow-hidden select-none">
      {/* Fine Blueprint Border Lines - Spans Full Width with padding */}
      <div className="absolute inset-3 bg-[#f8f8f8] border border-[#718355]/15 pointer-events-none" />

      {/* Full-width Inner wrapper */}
      <div className="w-full ml-0 md:-ml-6 relative pt-6 pb-2 z-10">
        {/* Compact Header */}
        <div className="flex items-center justify-between mb-8 border-b border-[#718355]/10 pb-2">
          <span
            style={{ fontFamily: "'Jost', sans-serif" }}
            className="text-xs tracking-[0.4em] text-[#718355] uppercase font-light"
          >
            Our Pillars
          </span>
          <span
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-xs text-[#718355]/60 italic font-light"
          >
            Sequence _ 01-06
          </span>
        </div>

        {/* Desktop Horizontal Timeline Layout (Unchanged) */}
        <div className="relative hidden md:block my-16 w-full">
          {/* Continuous Core Horizontal Axis Line */}
          <div className="absolute top-[145px] left-0 w-full h-[1px] bg-[#718355]/20" />

          {/* 6-Column Alternating Layout */}
          <div className="grid grid-cols-6 gap-6 relative z-10 w-full">
            {pillars.map(({ num, icon, title, desc }, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={num}
                  className={`group flex flex-col relative px-2 transition-all duration-300 ${
                    isEven
                      ? "justify-end h-[115px] pb-5"
                      : "justify-start h-[115px] pt-6 mt-[160px]"
                  }`}
                >
                  {/* Vertical connector pinned to axis */}
                  <div
                    className={`absolute left-2 w-[1px] bg-[#718355]/40 group-hover:bg-[#718355] transition-colors duration-300 ${
                      isEven ? "bottom-[-18px] h-6" : "top-6 h-6 -translate-y-6"
                    }`}
                  >
                    {/* Node dot sitting exactly on axis line */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-[#718355]/60 border border-[#718355]/40 group-hover:border-[#718355] group-hover:bg-[#718355] group-hover:scale-125 transition-all duration-300 ${
                        isEven ? "bottom-[-3.5px]" : "top-0 -translate-y-1/2"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#ff7b00] tracking-wider">
                        {num}
                      </span>
                      <div className="text-[#718355] transition-colors duration-300">
                        {icon}
                      </div>
                    </div>
                    <h4
                      style={{ fontFamily: "'serif', sans-serif" }}
                      className="text-[18px] lg:text-[20px] font-medium tracking-[0.15em] uppercase text-[#718355]"
                    >
                      {title}
                    </h4>
                    <p
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      className="text-[#718355] text-[13px] lg:text-[14px] leading-snug line-clamp-2 font-normal opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden grid grid-cols-2 gap-x-3 gap-y-8 my-4 text-left">
          {pillars.map(({ num, icon, title, desc }) => (
            <div 
              key={num} 
              className="relative pt-3 pl-3 border-t border-l border-[#718355]/15 flex flex-col justify-start"
            >
              {/* Massive subtle background blueprint number */}
              <div className="absolute right-1 bottom-0 font-mono text-5xl font-extrabold text-[#ff7b00]/5 leading-none pointer-events-none select-none">
                {num}
              </div>

              {/* Subtitle & Icon Row */}
              <div className="flex items-center justify-between mb-1.5 z-10">
                
                {/* Corrects desktop offsets on images */}
                <div className="text-[#718355] max-h-6 max-w-6 overflow-visible [&_img]:mt-0 [&_img]:mb-0 [&_img]:w-6 [&_img]:h-6">
                  {icon}
                </div>
              </div>

              {/* Core Header Title */}
              <h4
                style={{ fontFamily: "'Jost', sans-serif" }}
                className="text-xs font-bold tracking-wider uppercase text-[#718355] mb-1 z-10"
              >
                {title}
              </h4>

              {/* Minimalist Draft Line Indicator */}
              <div className="w-6 h-[1px] bg-[#718355]/20 mb-2 z-10" />

              {/* Descriptive Copy (Sits snugly underneath the divider) */}
              <p
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-[#718355]/90 text-[11px] leading-tight font-medium pr-1 z-10"
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Micro Footer Spec Mark */}
        <div className="w-full text-right mt-2 text-[9px] font-mono text-[#718355]/20 uppercase tracking-widest hidden md:block">
          [ fine_line_schematic_rev.02 ]
        </div>
      </div>
    </section>
  );
};

export default Features;