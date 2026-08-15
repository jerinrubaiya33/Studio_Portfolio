// import React, { useState } from "react";

// const peopleData = [
//   {
//     id: 1,
//     name: "Oleksii Voronko",
//     role: "Managing Partner",
//     department: "Corporate Law / Litigation",
//     largeImage:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=900",
//     thumbImage:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
//   },
//   {
//     id: 2,
//     name: "Serhii Kyrychenko",
//     role: "Partner",
//     department: "Restructuring and Insolvency",
//     largeImage:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=900",
//     thumbImage:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
//   },
//   {
//     id: 3,
//     name: "Yevhen Hryshyn",
//     role: "Partner",
//     department: "Criminal Defense / White-Collar Crime",
//     largeImage:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=900",
//     thumbImage:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
//   },
//   {
//     id: 4,
//     name: "Olena Manevych",
//     role: "Partner",
//     department: "Tax Dispute Resolution",
//     largeImage:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900",
//     thumbImage:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
//   },
//   {
//     id: 5,
//     name: "Artem Kravchenko",
//     role: "Associate Partner",
//     department: "Asset Recovery",
//     largeImage:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=900",
//     thumbImage:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
//   },
//   {
//     id: 6,
//     name: "Nataliia Mazur",
//     role: "Counsel",
//     department: "Banking & Finance",
//     largeImage:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=900",
//     thumbImage:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
//   },
//   {
//     id: 7,
//     name: "Denys Petrenko",
//     role: "Counsel",
//     department: "Real Estate & Construction",
//     largeImage:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=900",
//     thumbImage:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
//   },
//   {
//     id: 8,
//     name: "Iryna Sokolova",
//     role: "Senior Associate",
//     department: "Intellectual Property",
//     largeImage:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=900",
//     thumbImage:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
//   },
// ];

// const transforms = [
//   "md:-translate-x-8 md:-translate-y-0",
//   "md:-translate-x-4 md:translate-y-10",
//   "md:translate-x-0 md:-translate-y-2",
//   "md:-translate-x-14 md:translate-y-2",
//   "md:-translate-x-2 md:-translate-y-8",
//   "md:translate-x-0 md:translate-y-4",
//   "md:-translate-x-6 md:translate-y-0",
//   "md:translate-x-5 md:-translate-y-4",
// ];

// const sizes = [
//   "max-w-[120px]",
//   "max-w-[145px]",
//   "max-w-[130px]",
//   "max-w-[160px]",
//   "max-w-[125px]",
//   "max-w-[140px]",
//   "max-w-[150px]",
//   "max-w-[135px]",
// ];

// function People() {
//   const [selected, setSelected] = useState(peopleData[0]);

//   return (
//     <section className="relative z-10 w-full bg-white text-[#1a1a1a] font-sans px-4 md:px-10 py-10 md:py-14 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
        
//         {/* MOBILE-ONLY WORDMARK (TOP) */}
//         <div className="block md:hidden text-center mb-8">
//           <h1 className="font-serif text-5xl tracking-tight text-[#1a1a1a]/15 leading-none select-none">
//             ALL +
//           </h1>
//           <h1 className="font-serif font-semibold text-5xl tracking-tight text-[#4f5d39] leading-none select-none">
//             PARTNERS
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-10">
//           {/* LEFT FEATURED IMAGE */}
//           <div className="md:col-span-4">
//             <div className="w-full aspect-[4/5] max-w-[250px] sm:max-w-[300px] ml-15 sm:ml-0 overflow-hidden bg-[#4f5d39]/10 shadow-lg">
//               <img
//                 key={selected.id}
//                 src={selected.largeImage}
//                 alt={selected.name}
//                 className="w-full h-100 object-cover transition-all duration-500"
//               />
//             </div>

//             <div className="mt-5 max-w-[320px]">
//               <h2 className="font-serif text-2xl md:text-3xl sm:ml-0 ml-20 font-bold text-[#4f5d39]">
//                 {selected.name}
//               </h2>

//               <div className="mt-4 grid grid-cols-2 border-t border-[#1a1a1a]/15 pt-3 font-serif text-sm sm:ml-0 ml-20">
//                 <div className="pr-3 text-[#1a1a1a]/60">{selected.role}</div>

//                 <div className="pl-3 border-l border-[#1a1a1a]/20 text-[#e97100] font-semibold">
//                   {selected.department}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT EDITORIAL COLLAGE */}
//           <div className="md:col-span-8 flex flex-col">
//             <div className="relative min-h-[520px]">
//               <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-6">
//                 {peopleData.map((person, i) => {
//                   const isActive = selected.id === person.id;

//                   return (
//                     <button
//                       key={person.id}
//                       onClick={() => setSelected(person)}
//                       className={`
//                         group
//                         relative
//                         aspect-[3/4]
//                         w-full
//                         ${sizes[i % sizes.length]}
//                         ${transforms[i % transforms.length]}
//                         overflow-hidden
//                         bg-[#f6f6f6]
//                         shadow-md
//                         transition-all
//                         duration-300
//                         hover:scale-[1.03]
//                         hover:z-20
//                         ${
//                           isActive
//                             ? "ring-1 ring-[#b3b3b3] scale-[1.04] z-30"
//                             : ""
//                         }
//                       `}
//                     >
//                       <img
//                         src={person.thumbImage}
//                         alt={person.name}
//                         className={`
//                           w-full h-full object-cover transition-all duration-500
//                           ${
//                             isActive
//                               ? "grayscale-0 brightness-100"
//                               : "grayscale-[30%] brightness-[108%] contrast-[92%]"
//                           }
//                           hover:grayscale-0 hover:brightness-100 hover:contrast-100
//                         `}
//                       />

//                       {/* HOVER CIRCLE ANIMATION WITH TEXT */}
//                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 pb-[40%]">
//                         <div className="w-14 h-14 rounded-full bg-[#4f5d39]/90 text-white flex items-center justify-center font-serif text-[10px] uppercase tracking-wider font-semibold shadow-md scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out mt-34 ml-10">
//                           Click Me
//                         </div>
//                       </div>
                      
//                       {/* NAME AND ROLE OVERLAY */}
//                       <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-2 text-left flex flex-col justify-end min-h-[40%] transition-opacity duration-300">
//                         <p className="text-white font-medium text-[10px] md:text-xs leading-tight line-clamp-1">
//                           {person.name}
//                         </p>
//                         <p className="text-white/70 text-[9px] md:text-[10px] leading-tight mt-0.5 line-clamp-1">
//                           {person.role}
//                         </p>
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* DESKTOP-ONLY WORDMARK (BOTTOM RIGHT) */}
//             <div className="hidden md:block -mt-12 md:self-end text-center md:text-right">
//               <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-[#1a1a1a]/15 leading-none select-none">
//                 ALL +
//               </h1>

//               <h1 className="font-serif font-semibold text-4xl md:text-6xl tracking-tight text-[#4f5d39] leading-none select-none ">
//                 PARTNERS
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default People;















import React, { useState, useRef } from "react";

const peopleData = [
  {
    id: 1,
    name: "Oleksii Voronko",
    role: "Managing Partner",
    department: "Corporate Law / Litigation",
    largeImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=900",
    thumbImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    name: "Serhii Kyrychenko",
    role: "Partner",
    department: "Restructuring and Insolvency",
    largeImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=900",
    thumbImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    name: "Yevhen Hryshyn",
    role: "Partner",
    department: "Criminal Defense / White-Collar Crime",
    largeImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=900",
    thumbImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    name: "Olena Manevych",
    role: "Partner",
    department: "Tax Dispute Resolution",
    largeImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900",
    thumbImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 5,
    name: "Artem Kravchenko",
    role: "Associate Partner",
    department: "Asset Recovery",
    largeImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=900",
    thumbImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 6,
    name: "Nataliia Mazur",
    role: "Counsel",
    department: "Banking & Finance",
    largeImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=900",
    thumbImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 7,
    name: "Denys Petrenko",
    role: "Counsel",
    department: "Real Estate & Construction",
    largeImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=900",
    thumbImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 8,
    name: "Iryna Sokolova",
    role: "Senior Associate",
    department: "Intellectual Property",
    largeImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=900",
    thumbImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
  },
];

const transforms = [
  "md:-translate-x-8 md:-translate-y-0",
  "md:-translate-x-4 md:translate-y-10",
  "md:translate-x-0 md:-translate-y-2",
  "md:-translate-x-14 md:translate-y-2",
  "md:-translate-x-2 md:-translate-y-8",
  "md:translate-x-0 md:translate-y-4",
  "md:-translate-x-6 md:translate-y-0",
  "md:translate-x-5 md:-translate-y-4",
];

const sizes = [
  "max-w-[120px]",
  "max-w-[145px]",
  "max-w-[130px]",
  "max-w-[160px]",
  "max-w-[125px]",
  "max-w-[140px]",
  "max-w-[150px]",
  "max-w-[135px]",
];

function People() {
  const [selected, setSelected] = useState(peopleData[0]);
  const featuredImageRef = useRef(null);

  const handleSelect = (person) => {
    setSelected(person);

    // Scroll to the top of the featured image only on mobile views (< 768px)
    if (window.innerWidth < 768 && featuredImageRef.current) {
      featuredImageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative z-10 w-full bg-white text-[#1a1a1a] font-sans px-4 md:px-10 py-10 md:py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* MOBILE-ONLY WORDMARK (TOP) */}
        <div className="block md:hidden text-center mb-8">
          <h1 className="font-serif text-5xl tracking-tight text-[#1a1a1a]/15 leading-none select-none">
            ALL +
          </h1>
          <h1 className="font-serif font-semibold text-5xl tracking-tight text-[#4f5d39] leading-none select-none">
            PARTNERS
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-10">
          {/* LEFT FEATURED IMAGE (Target for smooth scroll) */}
          <div ref={featuredImageRef} className="md:col-span-4 scroll-mt-6">
            <div className="w-full aspect-[4/5] max-w-[250px] sm:max-w-[300px] ml-15 sm:ml-0 overflow-hidden bg-[#4f5d39]/10 shadow-lg">
              <img
                key={selected.id}
                src={selected.largeImage}
                alt={selected.name}
                className="w-full h-100 object-cover transition-all duration-500"
              />
            </div>

            <div className="mt-5 max-w-[320px]">
              <h2 className="font-serif text-2xl md:text-3xl sm:ml-0 ml-20 font-bold text-[#4f5d39]">
                {selected.name}
              </h2>

              <div className="mt-4 grid grid-cols-2 border-t border-[#1a1a1a]/15 pt-3 font-serif text-sm sm:ml-0 ml-20">
                <div className="pr-3 text-[#1a1a1a]/60">{selected.role}</div>

                <div className="pl-3 border-l border-[#1a1a1a]/20 text-[#e97100] font-semibold">
                  {selected.department}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT EDITORIAL COLLAGE */}
          <div className="md:col-span-8 flex flex-col">
            <div className="relative min-h-[520px]">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-6">
                {peopleData.map((person, i) => {
                  const isActive = selected.id === person.id;

                  return (
                    <button
                      key={person.id}
                      onClick={() => handleSelect(person)}
                      className={`
                        group
                        relative
                        aspect-[3/4]
                        w-full
                        ${sizes[i % sizes.length]}
                        ${transforms[i % transforms.length]}
                        overflow-hidden
                        bg-[#f6f6f6]
                        shadow-md
                        transition-all
                        duration-300
                        hover:scale-[1.03]
                        hover:z-20
                        ${
                          isActive
                            ? "ring-1 ring-[#b3b3b3] scale-[1.04] z-30"
                            : ""
                        }
                      `}
                    >
                      <img
                        src={person.thumbImage}
                        alt={person.name}
                        className={`
                          w-full h-full object-cover transition-all duration-500
                          ${
                            isActive
                              ? "grayscale-0 brightness-100"
                              : "grayscale-[30%] brightness-[108%] contrast-[92%]"
                          }
                          hover:grayscale-0 hover:brightness-100 hover:contrast-100
                        `}
                      />

                      {/* HOVER CIRCLE ANIMATION WITH TEXT */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 pb-[40%]">
                        <div className="w-14 h-14 rounded-full bg-[#4f5d39]/90 text-white flex items-center justify-center font-serif text-[10px] uppercase tracking-wider font-semibold shadow-md scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out mt-34 ml-10">
                          Click Me
                        </div>
                      </div>
                      
                      {/* NAME AND ROLE OVERLAY */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-2 text-left flex flex-col justify-end min-h-[40%] transition-opacity duration-300">
                        <p className="text-white font-medium text-[10px] md:text-xs leading-tight line-clamp-1">
                          {person.name}
                        </p>
                        <p className="text-white/70 text-[9px] md:text-[10px] leading-tight mt-0.5 line-clamp-1">
                          {person.role}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DESKTOP-ONLY WORDMARK (BOTTOM RIGHT) */}
            <div className="hidden md:block -mt-12 md:self-end text-center md:text-right">
              <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-[#1a1a1a]/15 leading-none select-none">
                ALL +
              </h1>

              <h1 className="font-serif font-semibold text-4xl md:text-6xl tracking-tight text-[#4f5d39] leading-none select-none ">
                PARTNERS
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default People;