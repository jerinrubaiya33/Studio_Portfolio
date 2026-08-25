// import { MapPin, Phone, Mail } from "lucide-react";
// import officeImage from "../assets/akm.png";
// import office2Image from "../assets/sushi.png";
// import logo from "/src/assets/studioDNA_logo_black.png";
// import logo2 from "/src/assets/outline.png";
// import bgImage from "../assets/projectsbg.png";

// // Social icon button - rendered with vibrant brand colors directly
// const SocialIcon = ({ children, label, href, activeColor }) => (
//   <a
//     href={href}
//     aria-label={label}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="group relative flex h-7 w-7 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:brightness-110"
//     style={{ backgroundColor: activeColor }}
//   >
//     <span className="relative z-10 flex items-center justify-center">
//       {children}
//     </span>
//   </a>
// );

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer
//       className="relative z-10 w-full overflow-hidden border-t border-gray-300/30 text-gray-800"
//       style={{
//         fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
//       }}
//     >
//       {/* Background Image Container with Crisp Overlay */}
//       <div
//         className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       />
//       <div className="absolute inset-0 z-0 bg-[#ffffff]/10 backdrop-blur-[32px] pointer-events-none" />

//       {/* Decorative top rule */}
//       <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent z-10" />

//       {/* Main Content Container */}
//       <div className="relative z-10 w-full px-4 pt-6 pb-6 sm:px-8 lg:px-12 lg:pt-8">
//         {/* ---------- Brand Row ---------- */}
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
//           {/* Main Studio DNA Info */}
//           <div className="lg:col-span-7">
//             {/* Flex container */}
//             <div className="flex flex-wrap items-center gap-2">
//               <img
//                 src={logo}
//                 alt="STUDIO DNA Logo"
//                 className="h-10 w-auto shrink-0 object-contain sm:h-12 md:h-14 grayscale opacity-80"
//               />
//               <p className="text-gray-500 text-base sm:text-lg">+</p>
//               <img
//                 src={logo2}
//                 alt="Outline Architects Logo"
//                 className="h-10 w-auto shrink-0 object-contain sm:h-12 md:h-14 grayscale opacity-80"
//               />

//               <div className="w-full sm:w-auto sm:ml-2">
//                 <div className="text-base tracking-tight text-gray-700 sm:text-xl font-serif">
//                   STUDIO DNA
//                 </div>
//                 <div
//                   className="text-[9px] tracking-[0.18em] text-[#8A8A8A] uppercase sm:text-[10px] my-0.5"
//                   style={{ fontFamily: "'JetBrains Mono', monospace" }}
//                 >
//                   A Subsidiary Studio
//                 </div>
//                 <div className="text-base tracking-tight text-gray-700 sm:text-xl font-serif">
//                   OUTLINE ARCHITECTS
//                 </div>
//               </div>
//             </div>

//             <p
//               className="mt-3 text-xs leading-relaxed text-gray-600 sm:text-sm max-w-2xl"
//               style={{ fontFamily: "'JetBrains Mono', monospace" }}
//             >
//               STUDIO DNA provides comprehensive services in architecture,
//               planning & engineering, interior & landscape design for both
//               public and private sectors — covering residential, commercial,
//               institutional & industrial projects, renovations, and landmark
//               restorations. We deliver efficient, end-to-end design, build and
//               supply services to our valued clients.
//             </p>
//           </div>

//           {/* Social + newsletter */}
//           <div className="lg:col-span-5 lg:pl-6 lg:pt-2">
//             <p
//               className="text-[11px] sm:text-xs tracking-[0.2em] text-gray-600 font-medium"
//               style={{ fontFamily: "'JetBrains Mono', monospace" }}
//             >
//               — FOLLOW THE STUDIO
//             </p>

//             {/* Social Icons */}
//             <div className="mt-2.5 flex flex-wrap items-center gap-2">
//               <SocialIcon label="Instagram" href="#" activeColor="#E1306C">
//                 <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                   <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
//                 </svg>
//               </SocialIcon>

//               <SocialIcon label="Facebook" href="#" activeColor="#1877F2">
//                 <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//                 </svg>
//               </SocialIcon>

//               <SocialIcon label="LinkedIn" href="#" activeColor="#0077B5">
//                 <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
//                   <circle cx="4" cy="4" r="2" />
//                 </svg>
//               </SocialIcon>

//               <SocialIcon label="YouTube" href="#" activeColor="#FF0000">
//                 <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                   <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
//                   <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
//                 </svg>
//               </SocialIcon>

//               <SocialIcon label="Pinterest" href="#" activeColor="#BD081C">
//                 <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12.017 0C5.396 0 0 5.397 0 12.017c0 5.077 3.158 9.413 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.748-1.379l-.749 2.848c-.27 1.039-1.001 2.344-1.488 3.137C10.456 23.9 11.224 24 12.017 24 18.639 24 24 18.639 24 12.017 24 5.397 18.639 0 12.017 0z" />
//                 </svg>
//               </SocialIcon>
//             </div>

//             <form
//               onSubmit={(e) => e.preventDefault()}
//               className="mt-4 flex items-center border-b border-gray-400/50 pb-1.5 focus-within:border-[#5b7fc7]"
//             >
//               <input
//                 type="email"
//                 required
//                 placeholder="your@email.com"
//                 className="w-full bg-transparent text-xs sm:text-sm font-mono text-gray-800 placeholder:text-gray-500 focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="ml-2 inline-flex items-center gap-1 text-[11px] sm:text-xs tracking-[0.15em] font-semibold text-gray-600 transition-colors duration-300 hover:text-[#5b7fc7]"
//                 style={{ fontFamily: "'JetBrains Mono', monospace" }}
//               >
//                 <span>SUBSCRIBE</span>
//                 <span className="transition-transform duration-300 group-hover:translate-x-1">
//                   →
//                 </span>
//               </button>
//             </form>
//             <p className="mt-1 text-[10px] text-gray-500">
//               Occasional dispatches on projects, journals & studio news.
//             </p>
//           </div>
//         </div>

//         {/* ---------- Locations Section ---------- */}
//         <div className="pt-6 mt-8 mb-8 border-t border-gray-300/30 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
//           {/* ================= 01 STUDIO DNA ================= */}
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 items-center">
//             {/* Details */}
//             <div className="sm:col-span-6 sm:pl-4 order-2 sm:order-1 flex flex-col justify-end">
//               <h3 className="text-sm sm:text-base font-extrabold tracking-[0.15em] text-[#5b7fc7] font-sans">
//                 STUDIO DNA
//               </h3>

//               <ul className="mt-2.5 space-y-2 font-mono text-xs sm:text-sm text-gray-700">
//                 <li className="flex gap-2 items-start">
//                   <MapPin size={16} className="mt-0.5 shrink-0 text-gray-500" />
//                   <span className="leading-snug">
//                     House 42, Road 11, Baridhara,
//                     <br />
//                     Dhaka 1212, Bangladesh
//                   </span>
//                 </li>

//                 <li className="flex items-center gap-2">
//                   <Phone size={16} className="shrink-0 text-gray-500" />
//                   <a
//                     href="tel:+8801711000000"
//                     className="transition-colors hover:text-[#5b7fc7]"
//                   >
//                     +880 1711-000 000
//                   </a>
//                 </li>

//                 <li className="flex items-center gap-2">
//                   <Mail size={16} className="shrink-0 text-gray-500" />
//                   <a
//                     href="mailto:info@studiodna.com"
//                     className="transition-colors hover:text-[#5b7fc7]"
//                   >
//                     info@studiodna.com
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Media Stack */}
//             <div className="sm:col-span-6 flex flex-col gap-2 order-1 sm:order-2">
//               <div className="group relative rounded-lg overflow-hidden shadow-sm">
//                 <img
//                   src={officeImage}
//                   alt="Inside the Studio DNA office"
//                   loading="lazy"
//                   className="h-[90px] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//                 <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-2">
//                   <p
//                     className="text-[10px] tracking-[0.12em] font-medium text-white/90"
//                     style={{ fontFamily: "'JetBrains Mono', monospace" }}
//                   >
//                     — THE STUDIO
//                   </p>

//                   <p
//                     className="text-[10px] tracking-[0.12em] font-medium text-white/70"
//                     style={{ fontFamily: "'JetBrains Mono', monospace" }}
//                   >
//                     EST. 1994
//                   </p>
//                 </div>
//               </div>

//               <div className="overflow-hidden rounded-lg border border-gray-300">
//                 <iframe
//                   title="Studio DNA location map"
//                   src="https://www.google.com/maps?q=Baridhara+Dhaka+Bangladesh&output=embed"
//                   width="100%"
//                   height="90"
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="block h-[90px] w-full grayscale transition-all duration-500 hover:grayscale-0"
//                   style={{ border: 0 }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* ================= 02 OUTLINE ARCHITECTS ================= */}
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 items-center">
//             {/* Details */}
//             <div className="sm:col-span-6 sm:pl-2 order-2 sm:order-1 flex flex-col justify-end">
//               <h3 className="text-sm sm:text-base font-extrabold tracking-[0.15em] text-[#5b7fc7] font-sans">
//                 OUTLINE ARCHITECTS
//               </h3>

//               <ul className="mt-2.5 space-y-2 font-mono text-xs sm:text-sm text-gray-700">
//                 <li className="flex gap-2 items-start">
//                   <MapPin size={16} className="mt-0.5 shrink-0 text-gray-500" />
//                   <span className="leading-snug">
//                     Level 6, Chartered Tower, GEC Circle,
//                     <br />
//                     Chattogram 4000, Bangladesh
//                   </span>
//                 </li>

//                 <li className="flex items-center gap-2">
//                   <Phone size={16} className="shrink-0 text-gray-500" />
//                   <a
//                     href="tel:+8801811000000"
//                     className="transition-colors hover:text-[#5b7fc7]"
//                   >
//                     +880 1811-000 000
//                   </a>
//                 </li>

//                 <li className="flex items-center gap-2">
//                   <Mail size={16} className="shrink-0 text-gray-500" />
//                   <a
//                     href="mailto:contact@outlinearchitects.com"
//                     className="transition-colors hover:text-[#5b7fc7]"
//                   >
//                     contact@outlinearchitects.com
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Media Stack */}
//             <div className="sm:col-span-6 flex flex-col gap-2 order-1 sm:order-2">
//               <div className="group relative overflow-hidden rounded-lg shadow-sm">
//                 <img
//                   src={office2Image}
//                   alt="Inside the Outline Architects office"
//                   loading="lazy"
//                   className="h-[90px] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//                 <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-2">
//                   <p
//                     className="text-[10px] tracking-[0.12em] font-medium text-white/90"
//                     style={{ fontFamily: "'JetBrains Mono', monospace" }}
//                   >
//                     — HQ
//                   </p>

//                   <p
//                     className="text-[10px] tracking-[0.12em] font-medium text-white/70"
//                     style={{ fontFamily: "'JetBrains Mono', monospace" }}
//                   >
//                     EST. 2010
//                   </p>
//                 </div>
//               </div>

//               <div className="overflow-hidden rounded-lg border border-gray-300">
//                 <iframe
//                   title="Outline Architects location map"
//                   src="https://www.google.com/maps?q=GEC+Circle+Chattogram+Bangladesh&output=embed"
//                   width="100%"
//                   height="90"
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="block h-[90px] w-full grayscale transition-all duration-500 hover:grayscale-0"
//                   style={{ border: 0 }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ---------- Bottom Bar ---------- */}
//         <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-gray-300/50 pt-4 sm:flex-row sm:items-center">
//           <p
//             className="max-w-2xl text-[10px] sm:text-[11px] leading-relaxed tracking-[0.08em] text-gray-600"
//             style={{ fontFamily: "'JetBrains Mono', monospace" }}
//           >
//             STUDIO DNA IS A DESIGN BRANCH OF OUTLINE ARCHITECTS, EXTENDING 30
//             YEARS OF PRACTICE INTO FOCUSED RESIDENTIAL & BOUTIQUE WORK.
//             <br />© {year} ALL RIGHTS RESERVED.
//           </p>
//         </div>
//       </div>

//       {/* DISPLAY SECTION — Small Text & Gray */}
//       <div className="relative z-10 w-full px-4 py-3 select-none overflow-hidden border-t border-gray-300/20">
//         <div className="w-full">
//           <h1
//             className="text-sm sm:text-base md:text-lg font-light tracking-widest text-gray-500 text-center uppercase"
//             style={{ fontFamily: "'mono'" }}
//           >
//             Let's Build Together.
//           </h1>
//         </div>
//       </div>


//     </footer>
//   );
// }




























import { MapPin, Phone, Mail } from "lucide-react";
import officeImage from "../assets/akm.png";
import office2Image from "../assets/sushi.png";
import logo from "/src/assets/studioDNA_logo_black.png";
import logo2 from "/src/assets/outline.png";
import bgImage from "../assets/projectsbg.png";

// Social icon button - rendered with vibrant brand colors directly
const SocialIcon = ({ children, label, href, activeColor }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex h-7 w-7 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:brightness-110"
    style={{ backgroundColor: activeColor }}
  >
    <span className="relative z-10 flex items-center justify-center">
      {children}
    </span>
  </a>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 w-full overflow-hidden border-t border-gray-300/30 text-gray-800"
      style={{
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* Background Image Container with Crisp Overlay */}
      {/* <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      /> */}
      <div className="absolute inset-0 z-0 bg-[#ffffff]/10 backdrop-blur-[32px] pointer-events-none" />

      {/* Decorative top rule */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent z-10" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full px-4 pt-6 pb-6 sm:px-8 lg:px-12 lg:pt-8">
        {/* ---------- Brand Row ---------- */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Main Studio DNA Info */}
          <div className="lg:col-span-7">
            {/* Flex container */}
            <div className="flex flex-wrap items-center gap-2">
              <img
                src={logo}
                alt="STUDIO DNA Logo"
                className="h-18 w-auto shrink-0 object-contain sm:h-12  sm:-ml-10 -ml-7 md:h-24 grayscale opacity-80"
              />
              <p className="text-gray-500 text-base sm:text-lg">+</p>
              <img
                src={logo2}
                alt="Outline Architects Logo"
                className="h-18 w-auto shrink-0 object-contain sm:h-12 md:h-24 grayscale opacity-80"
              />

              <div className="w-full sm:w-auto sm:ml-2">
                <div className="text-base tracking-tight text-gray-700 sm:text-xl font-serif">
                  STUDIO DNA
                </div>
                <div
                  className="text-[9px] tracking-[0.18em] text-[#8A8A8A] uppercase sm:text-[10px] my-0.5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  A Subsidiary Studio
                </div>
                <div className="text-base tracking-tight text-gray-700 sm:text-xl font-serif">
                  OUTLINE ARCHITECTS
                </div>
              </div>
            </div>

            <p
              className="mt-3 text-xs leading-relaxed text-gray-600 sm:text-sm max-w-2xl"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              STUDIO DNA provides comprehensive services in architecture,
              planning & engineering, interior & landscape design for both
              public and private sectors — covering residential, commercial,
              institutional & industrial projects, renovations, and landmark
              restorations. We deliver efficient, end-to-end design, build and
              supply services to our valued clients.
            </p>
          </div>
        </div>

        {/* ---------- UPDATED MIDDLE SECTION ---------- */}
        <div className="pt-6 mt-8 mb-8 border-t border-gray-300/30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {/* Middle Left: Contact */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-gray-900 uppercase">
              CONTACT
            </h3>

            <ul className="mt-3 space-y-2.5 font-mono text-xs sm:text-sm text-gray-700">
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gray-500" />
                <span className="leading-snug">
                  Level 6, Chartered Tower, GEC Circle,
                  <br />
                  Chattogram 4000, Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-gray-500" />
                <a
                  href="tel:+8801811000000"
                  className="transition-colors hover:text-[#5b7fc7]"
                >
                  +880 1811-000 000
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-gray-500" />
                <a
                  href="mailto:contact@outlinearchitects.com"
                  className="transition-colors hover:text-[#5b7fc7]"
                >
                  contact@outlinearchitects.com
                </a>
              </li>
            </ul>

            {/* Social Icons under Contact */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <SocialIcon label="Instagram" href="#" activeColor="#E1306C">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                </svg>
              </SocialIcon>

              <SocialIcon label="Facebook" href="#" activeColor="#1877F2">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>

              <SocialIcon label="LinkedIn" href="#" activeColor="#0077B5">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>

              <SocialIcon label="YouTube" href="#" activeColor="#FF0000">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </SocialIcon>

              <SocialIcon label="Pinterest" href="#" activeColor="#BD081C">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 0 5.397 0 12.017c0 5.077 3.158 9.413 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.748-1.379l-.749 2.848c-.27 1.039-1.001 2.344-1.488 3.137C10.456 23.9 11.224 24 12.017 24 18.639 24 24 18.639 24 12.017 24 5.397 18.639 0 12.017 0z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Middle Center: Resources */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-gray-900 uppercase">
              RESOURCES
            </h3>

            <ul className="mt-3 space-y-1.5 font-mono text-xs sm:text-sm text-gray-700">
              <li><a href="#" className="transition-colors hover:text-[#5b7fc7]">Home</a></li>
              <li><a href="#" className="transition-colors hover:text-[#5b7fc7]">How we work</a></li>
              <li><a href="#" className="transition-colors hover:text-[#5b7fc7]">Portfolio</a></li>
              <li><a href="#" className="transition-colors hover:text-[#5b7fc7]">About</a></li>
              <li><a href="#" className="transition-colors hover:text-[#5b7fc7]">Contact</a></li>
              <li><a href="#" className="transition-colors hover:text-[#5b7fc7]">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-[#5b7fc7]">Refund Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-[#5b7fc7]">Terms and Conditions</a></li>
              <li><a href="#" className="transition-colors hover:text-[#5b7fc7]">Licenses</a></li>
            </ul>
          </div>

          {/* Middle Right: Our Services */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-gray-900 uppercase">
              OUR SERVICES
            </h3>

            <ul className="mt-3 space-y-1.5 font-mono text-xs sm:text-sm text-gray-700">
              <li>Exterior</li>
              <li>Interior</li>
              <li>Remodeling</li>
            </ul>
          </div>

        </div>

        {/* ---------- Bottom Bar ---------- */}
        <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-gray-300/50 pt-4 sm:flex-row sm:items-center">
          <p
            className="max-w-2xl text-[10px] sm:text-[11px] leading-relaxed tracking-[0.08em] text-gray-600"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            STUDIO DNA IS A DESIGN BRANCH OF OUTLINE ARCHITECTS, EXTENDING 30
            YEARS OF PRACTICE INTO FOCUSED RESIDENTIAL & BOUTIQUE WORK.
            <br />© {year} ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>

      {/* DISPLAY SECTION — Small Text & Gray */}
      {/* <div className="relative z-10 w-full px-4 py-3 select-none overflow-hidden border-t border-gray-300/20">
        <div className="w-full">
          <h1
            className="text-sm sm:text-base md:text-lg font-light tracking-widest text-gray-500 text-center uppercase"
            style={{ fontFamily: "'mono'" }}
          >
            Let's Build Together.
          </h1>
        </div>
      </div> */}
    </footer>
  );
}