// import { useState, useEffect, useRef } from "react";
// import { MapPin, Phone, Mail, Compass, Image as ImageIcon } from "lucide-react";
// import Footer from "./Footer";
// import Meet from "./Meet";
// import bgImage from "../assets/about.png";
// import CTASection from "./CTA";

// /* Scroll-reveal Helper */
// const Reveal = ({ children, delay = 0, className = "" }) => {
//   const ref = useRef(null);
//   const supportsIO =
//     typeof window !== "undefined" && "IntersectionObserver" in window;
//   const [visible, setVisible] = useState(!supportsIO);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el || !supportsIO) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.12 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [supportsIO]);

//   return (
//     <div
//       ref={ref}
//       style={{ transitionDelay: `${delay}ms` }}
//       className={`transition-all duration-1000 ease-out will-change-transform ${
//         visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//       } ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// /* Office locations dataset */
// const offices = [
//   {
//     name: "STUDIO DNA",
//     tag: "THE STUDIO / BARIDHARA",
//     address: (
//       <>
//         House 42, Road 11, Baridhara,
//         <br />
//         Dhaka 1212, Bangladesh
//       </>
//     ),
//     phone: "+880 1711-000 000",
//     phoneHref: "tel:+8801711000000",
//     email: "info@studiodna.com",
//     emailHref: "mailto:info@studiodna.com",
//     mapSrc:
//       "https://www.google.com/maps?q=Baridhara+Dhaka+Bangladesh&output=embed",
//     image:
//       "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
//   },
//   // {
//   //   name: "OUTLINE ARCHITECTS",
//   //   tag: "HQ / CHATTOGRAM",
//   //   address: (
//   //     <>
//   //       Level 6, Chartered Tower, GEC Circle,
//   //       <br />
//   //       Chattogram 4000, Bangladesh
//   //     </>
//   //   ),
//   //   phone: "+880 1811-000 000",
//   //   phoneHref: "tel:+8801811000000",
//   //   email: "contact@outlinearchitects.com",
//   //   emailHref: "mailto:contact@outlinearchitects.com",
//   //   mapSrc:
//   //     "https://www.google.com/maps?q=GEC+Circle+Chattogram+Bangladesh&output=embed",
//   //   image:
//   //     "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
//   // },
// ];

// const StudioSection = ({ office, index }) => {
//   const [activeTab, setActiveTab] = useState("map");

//   return (
//     <Reveal delay={index * 120} className="w-full">
//       <div className="flex flex-col gap-4 py-4">
//         {/* Studio Title & Media Switcher */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-100 pb-2">
//           <div>
//             <h3 className="text-xl sm:text-2xl font-sans font-extrabold mt-6 tracking-wider text-[#5b7fc7] uppercase mb-0.5">
//               {office.name}
//             </h3>
//             <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
//               {office.tag}
//             </span>
//           </div>

//           {/* Photo / Map Switcher Buttons */}
//           <div className="flex items-center gap-2 font-mono text-[11px]">
//             <button
//               onClick={() => setActiveTab("map")}
//               className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
//                 activeTab === "map"
//                   ? "bg-gray-900 text-white font-bold"
//                   : "bg-gray-100 text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               <Compass size={12} />
//               Map
//             </button>
//             <button
//               onClick={() => setActiveTab("image")}
//               className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
//                 activeTab === "image"
//                   ? "bg-gray-900 text-white font-bold"
//                   : "bg-gray-100 text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               <ImageIcon size={12} />
//               Photo
//             </button>
//           </div>
//         </div>

//         {/* Media Container (Scaled height down) */}
//         <div className="relative w-full h-[240px] sm:h-[300px] overflow-hidden rounded-md bg-gray-100">
//           {activeTab === "map" ? (
//             <iframe
//               title={`${office.name} location map`}
//               src={office.mapSrc}
//               width="100%"
//               height="100%"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
//             />
//           ) : (
//             <img
//               src={office.image}
//               alt={office.name}
//               className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
//             />
//           )}
//         </div>

//         {/* Details Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm pt-1">
//           <div className="flex items-start gap-2.5">
//             <MapPin size={16} className="text-[#121212] shrink-0 mt-0.5" />
//             <div>
//               <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
//                 Location
//               </span>
//               <span className="text-gray-700 leading-relaxed block text-xs sm:text-sm">
//                 {office.address}
//               </span>
//             </div>
//           </div>

//           <div className="flex items-start gap-2.5">
//             <Phone size={16} className="text-[#121212] shrink-0 mt-0.5" />
//             <div>
//               <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
//                 Phone
//               </span>
//               <a
//                 href={office.phoneHref}
//                 className="text-gray-800 transition-colors hover:text-[#121212] text-xs sm:text-sm"
//               >
//                 {office.phone}
//               </a>
//             </div>
//           </div>

//           <div className="flex items-start gap-2.5">
//             <Mail size={16} className="text-[#121212] shrink-0 mt-0.5" />
//             <div>
//               <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
//                 Email
//               </span>
//               <a
//                 href={office.emailHref}
//                 className="text-gray-800 transition-colors hover:text-[#5b7fc7] text-xs sm:text-sm"
//               >
//                 {office.email}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Reveal>
//   );
// };

// const ContactPage = () => {
//   return (
//     <>
//       <main className="relative z-10 w-full min-h-screen bg-theme-primary text-theme-primary font-mono overflow-hidden transition-colors duration-500">
//         {/* ================= 1. HERO ================= */}
//         <section className="relative w-full min-h-[50vh] sm:min-h-[45vh] flex items-end overflow-hidden">
//           <div
//             className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 bg-[#5B7FC774]"
//             // style={{ backgroundImage: `url(${bgImage})` }}
//           />
//           <div className="absolute inset-0 z-0" />

//           <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-24 mt-16 sm:mt-36 py-12 md:py-16">
//             <Reveal>
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white tracking-tight uppercase">
//                 Let's Build
//                 <br />
//                 Together.
//               </h1>
//             </Reveal>

//             <Reveal delay={150}>
//               <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base font-mono text-gray-700 leading-relaxed tracking-normal">
//                 Have an ambitious architectural vision, structural restoration, or commercial design project in mind? Reach out directly to either of our main studios. Our multidisciplinary design team is prepared to guide your project through every phase—from initial strategic concepts and spatial planning to technical engineering and final handover.
//               </p>
//             </Reveal>
//           </div>
//         </section>

//         {/* ================= 2. OFFICES ================= */}
//         <section className="relative w-full bg-white px-6 sm:px-8 md:px-12 lg:px-94 py-8 sm:py-22">
//           <div className="w-full max-w-[1400px] mx-auto">
//             {/* Section Heading */}
//             <Reveal>
//               <div className="mb-6 mt-15 sm:mt-30 text-center">
//                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-gray-900 leading-tight">
//                   Talk To Our Studios
//                 </h2>
//               </div>
//             </Reveal>

//             {/* Offices List */}
//             <div className="flex flex-col gap-8 sm:gap-12">
//               {offices.map((office, idx) => (
//                 <StudioSection key={office.name} office={office} index={idx} />
//               ))}
//             </div>
//           </div>
//         </section>


//         {/* <Meet /> */}
//         <CTASection/>
//       </main>

//       {/* Footer Block */}
//       <div className="relative z-10 w-full border-t border-theme backdrop-blur-md transition-colors duration-500" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-primary) 70%, transparent)' }}>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default ContactPage;


























import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Compass, Image as ImageIcon } from "lucide-react";
import Footer from "./Footer";
import Meet from "./Meet";
import bgImage from "../assets/about.png";
import CTASection from "./CTA";

/* Scroll-reveal Helper */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const supportsIO =
    typeof window !== "undefined" && "IntersectionObserver" in window;
  const [visible, setVisible] = useState(!supportsIO);

  useEffect(() => {
    const el = ref.current;
    if (!el || !supportsIO) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [supportsIO]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
};

/* Office locations dataset */
const offices = [
  {
    // name: "STUDIO DNA",
    // tag: "THE STUDIO / BARIDHARA",
    address: (
      <>
        House 42, Road 11, Baridhara,
        <br />
        Dhaka 1212, Bangladesh
      </>
    ),
    phone: "+880 1711-000 000",
    phoneHref: "tel:+8801711000000",
    email: "info@studiodna.com",
    emailHref: "mailto:info@studiodna.com",
    mapSrc:
      "https://www.google.com/maps?q=Baridhara+Dhaka+Bangladesh&output=embed",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
  },
];

const StudioSection = ({ office, index }) => {
  const [activeTab, setActiveTab] = useState("map");

  return (
    <Reveal delay={index * 120} className="w-full">
      <div className="flex flex-col gap-6 py-4">
        {/* Studio Title & Media Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-100 pb-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-sans font-extrabold mt-6 tracking-wider text-[#5b7fc7] uppercase mb-0.5">
              {office.name}
            </h3>
            <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
              {office.tag}
            </span>
          </div>

          {/* Photo / Map Switcher Buttons */}
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <button
              onClick={() => setActiveTab("map")}
              className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
                activeTab === "map"
                  ? "bg-gray-900 text-white font-bold"
                  : "bg-gray-100 text-gray-600 hover:text-gray-900"
              }`}
            >
              <Compass size={12} />
              Map
            </button>
            <button
              onClick={() => setActiveTab("image")}
              className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
                activeTab === "image"
                  ? "bg-gray-900 text-white font-bold"
                  : "bg-gray-100 text-gray-600 hover:text-gray-900"
              }`}
            >
              <ImageIcon size={12} />
              Photo
            </button>
          </div>
        </div>

        {/* Media Container */}
        <div className="relative w-full h-[240px] sm:h-[300px] overflow-hidden rounded-md bg-gray-100">
          {activeTab === "map" ? (
            <iframe
              title={`${office.name} location map`}
              src={office.mapSrc}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <img
              src={office.image}
              alt={office.name}
              className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
            />
          )}
        </div>

        {/* Details Section: Single Row per item with Full-width Underlines */}
        <div className="flex flex-col font-mono w-full pt-2">
          {/* 1. Location */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 w-full
           border-b border-gray-200 py-4 px-4 sm:px-14">
            <div className="flex items-center gap-2 text-gray-400 shrink-0 ">
              <MapPin size={18} className="text-[#5b7fc7]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">
                Location
              </span>
            </div>
            <address className="text-base sm:text-lg text-gray-800 not-italic font-medium sm:text-left leading-relaxed">
              {office.address}
            </address>
          </div>

          {/* 2. Phone */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 px-4 sm:px-14 w-full border-b border-gray-200 py-4">
            <div className="flex items-center gap-2 text-gray-400 shrink-0">
              <Phone size={18} className="text-[#5b7fc7]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">
                Phone
              </span>
            </div>
            <a
              href={office.phoneHref}
              className="text-base sm:text-lg text-gray-800 hover:text-[#5b7fc7] transition-colors font-medium no-underline sm:text-left"
            >
              {office.phone}
            </a>
          </div>

          {/* 3. Email */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 px-4 sm:px-14 w-full border-b 
          border-gray-200 py-4">
            <div className="flex items-center gap-2 text-gray-400 shrink-0">
              <Mail size={18} className="text-[#5b7fc7]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">
                Email
              </span>
            </div>
            <a
              href={office.emailHref}
              className="text-base sm:text-lg text-gray-800 hover:text-[#5b7fc7] transition-colors font-medium no-underline 
              sm:text-left"
            >
              {office.email}
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const ContactPage = () => {
  return (
    <>
      <main className="relative z-10 w-full min-h-screen bg-theme-primary text-theme-primary font-mono overflow-hidden transition-colors duration-500">
        {/* ================= 1. HERO ================= */}
        <section className="relative w-full min-h-[50vh] sm:min-h-[45vh] flex items-end overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 bg-[#5B7FC774]"
            // style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 z-0" />

          <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-24 mt-16 sm:mt-36 py-12 md:py-16">
            <Reveal>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white tracking-tight uppercase">
                Let's Build
                <br />
                Together.
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base font-mono text-gray-700 leading-relaxed tracking-normal">
                Have an ambitious architectural vision, structural restoration, or commercial design project in mind? Reach out directly to either of our main studios. Our multidisciplinary design team is prepared to guide your project through every phase—from initial strategic concepts and spatial planning to technical engineering and final handover.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ================= 2. OFFICES ================= */}
        <section className="relative w-full bg-white px-6 sm:px-8 md:px-12 lg:px-94 py-8 sm:py-22">
          <div className="w-full max-w-[1400px] mx-auto">
            {/* Section Heading */}
            <Reveal>
              <div className="mb-6 mt-15 sm:mt-30 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-gray-900 leading-tight">
                  Talk To Our Studio
                </h2>
              </div>
            </Reveal>

            {/* Offices List */}
            <div className="flex flex-col gap-8 sm:gap-12">
              {offices.map((office, idx) => (
                <StudioSection key={office.name} office={office} index={idx} />
              ))}
            </div>
          </div>
        </section>


        {/* <Meet /> */}
        <CTASection/>
      </main>

      {/* Footer Block */}
      <div className="relative z-10 w-full border-t border-theme backdrop-blur-md transition-colors duration-500" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-primary) 70%, transparent)' }}>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;