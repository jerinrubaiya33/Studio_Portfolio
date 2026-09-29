// import { MapPin, Phone, Mail } from "lucide-react";
// import logoWhite from "/src/assets/studioDNA_logo.png";

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
//       className="relative z-10 w-full overflow-hidden border-t border-gray-800 text-white"
//       style={{
//         fontFamily: "'Manrope', ui-sans-serif, system-ui, sans-serif",
//         backgroundColor: '#111111',
//       }}
//     >
//       {/* Background Overlay */}
//       <div className="absolute inset-0 z-0 bg-black/10 backdrop-blur-[32px] pointer-events-none" />

//       {/* Decorative top rule */}
//       <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent z-10" />

//       {/* Main Content Container */}
//       <div className="relative z-10 w-full px-4 pt-6 pb-6 sm:px-8 lg:px-12 lg:pt-8">
//         {/* ---------- Brand Row ---------- */}
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
//           {/* Main Studio DNA Info */}
//           <div className="lg:col-span-7">
//             {/* Flex container */}
//             <div className="flex flex-wrap items-center gap-2">
//               <img
//                 src={logoWhite}
//                 alt="STUDIO DNA Logo"
//                 className="h-18 w-auto -ml-5 sm:-ml-10 shrink-0 object-contain sm:h-12 md:h-30 grayscale brightness-200 opacity-95"
//                 style={{ transform: 'translateX(-12px)' }}
//               />
//             </div>

//             <p
//               className="mt-3 text-xs leading-relaxed text-gray-300 sm:text-lg max-w-2xl"
//               style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
//             >
//               STUDIO DNA provides comprehensive services in architecture,
//               planning & engineering, interior & landscape design for both
//               public and private sectors — covering residential, commercial,
//               institutional & industrial projects, renovations, and landmark
//               restorations. We deliver efficient, end-to-end design, build and
//               supply services to our valued clients.
//             </p>
//           </div>
//         </div>

//         {/* ---------- MIDDLE SECTION ---------- */}
//         <div className="pt-6 mt-8 mb-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

//           {/* Middle Left: Contact */}
//           <div>
//             <h3 className="text-xs sm:text-[16px] font-bold tracking-[0.15em] text-white uppercase">
//               CONTACT
//             </h3>

//             <ul className="mt-3 space-y-2.5 font-mono text-xs sm:text-[18px] text-gray-200">
//               <li className="flex gap-2 items-start">
//                 <MapPin size={16} className="mt-0.5 shrink-0 text-gray-400" />
//                 <span className="leading-snug">
//                   Suite 5, Level 1, Mannan Plaza
//                   Bashundhara River View R/A
//                   <br />
//                   Osudh Factory Mor, South Keraniganj
//                   Dhaka 1311, Bangladesh
//                 </span>
//               </li>

//               <li className="flex items-center gap-2">
//                 <Phone size={16} className="shrink-0 text-gray-400" />
//                 <a
//                   href="tel:+8801313711661"
//                   className="transition-colors hover:text-[#A84E32]"
//                 >
//                   +880 1313-711 661
//                 </a>
//               </li>

//               <li className="flex items-center gap-2">
//                 <Mail size={16} className="shrink-0 text-gray-400" />
//                 <a
//                   href="mailto:contact@outlinearchitects.com"
//                   className="transition-colors hover:text-[#A84E32]"
//                 >
//                    info@sdnabd.com
//                 </a>
//               </li>
//             </ul>

//             {/* Social Icons under Contact */}
//             <div className="mt-4 flex flex-wrap items-center gap-2">
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
//           </div>

//           {/* Middle Center: Resources */}
//           <div>
//             <h3 className="text-xs sm:text-[16px] font-bold tracking-[0.15em] text-white uppercase">
//               RESOURCES
//             </h3>
//             <ul className="mt-3 space-y-1.5 font-mono text-xs sm:text-[18px] text-gray-200">
//               <li><a href="#" className="transition-colors hover:text-[#A84E32]">Home</a></li>
//               <li><a href="#" className="transition-colors hover:text-[#A84E32]">Our Services</a></li>
//               <li><a href="#" className="transition-colors hover:text-[#A84E32]">Portfolio</a></li>
//               <li><a href="#" className="transition-colors hover:text-[#A84E32]">About</a></li>
//               <li><a href="#" className="transition-colors hover:text-[#A84E32]">Contact</a></li>
//               {/* <li><a href="#" className="transition-colors hover:text-[#A84E32]">Privacy Policy</a></li>
//               <li><a href="#" className="transition-colors hover:text-[#A84E32]">Refund Policy</a></li>
//               <li><a href="#" className="transition-colors hover:text-[#A84E32]">Terms and Conditions</a></li>
//               <li><a href="#" className="transition-colors hover:text-[#A84E32]">Licenses</a></li> */}
//             </ul>
//           </div>

//           {/* Middle Right: Our Services */}
//           <div>
//             <h3 className="text-xs sm:text-[16px] font-bold tracking-[0.15em] text-white uppercase">
//               Ways of working
//             </h3>

//             <ul className="mt-3 space-y-1.5 font-mono text-xs sm:text-[18px] text-gray-200">
//               <li>Architecture</li>
//               <li>Interior</li>
//               <li>Landscape</li>
//               <li>Hospitality</li>
//               <li>Residential</li>
//               <li>Healthcare</li>
//             </ul>
//           </div>

//         </div>

//         {/* ---------- Bottom Bar ---------- */}
//         <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-gray-800 pt-4 sm:flex-row sm:items-center">
//           <p
//             className="max-w-2xl text-[10px] sm:text-[11px] leading-relaxed tracking-[0.08em] text-gray-300"
//             style={{ fontFamily: "'Manrope', sans-serif" }}
//           >
//             STUDIO DNA IS A DESIGN BRANCH OF OUTLINE ARCHITECTS, EXTENDING 30
//             YEARS OF PRACTICE INTO FOCUSED RESIDENTIAL & BOUTIQUE WORK.
//             <br />© {year} ALL RIGHTS RESERVED.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

















import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoWhite from "/src/assets/studioDNA_logo.png";

// Social icon button - rendered with vibrant brand colors directly
const SocialIcon = ({ children, label, href, activeColor }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:brightness-110"
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
      className="relative z-10 w-full overflow-hidden border-t border-gray-800 text-white"
      style={{
        fontFamily: "'Manrope', ui-sans-serif, system-ui, sans-serif",
        backgroundColor: '#111111',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-black/10 backdrop-blur-[32px] pointer-events-none" />

      {/* Decorative top rule */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent z-10" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full px-4 pt-6 pb-6 sm:px-8 lg:px-12 lg:pt-8">
        {/* ---------- Brand Row ---------- */}
        <div>
          {/* Logo container */}
          <div className="flex flex-wrap items-center gap-2">
            <img
              src={logoWhite}
              alt="STUDIO DNA Logo"
              className="h-18 w-auto -ml-5 sm:-ml-10 shrink-0 object-contain sm:h-12 md:h-30 grayscale brightness-200 opacity-95"
              style={{ transform: 'translateX(-12px)' }}
            />
          </div>

          {/* Paragraph and Social Icons side-by-side on larger screens */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mt-3">
            <p
              className="text-xs leading-relaxed text-gray-300 sm:text-lg max-w-3xl"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
            >
              STUDIO DNA provides comprehensive services in architecture,
              planning & engineering, interior & landscape design for both
              public and private sectors — covering residential, commercial,
              institutional & industrial projects, renovations, and landmark
              restorations. We deliver efficient, end-to-end design, build and
              supply services to our valued clients.
            </p>

            {/* Social Icons positioned to the right with a shifted-left offset */}
            <div className="flex flex-col gap-2 shrink-0 lg:mr-70">
              <h3 className="text-xs sm:text-[16px] font-bold tracking-[0.15em] mb-2 text-white uppercase">
                OUR SOCIALS
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <SocialIcon label="Instagram" href="#" activeColor="#E1306C">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                  </svg>
                </SocialIcon>

                <SocialIcon label="Facebook" href="#" activeColor="#1877F2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </SocialIcon>

                <SocialIcon label="LinkedIn" href="#" activeColor="#0077B5">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </SocialIcon>

                <SocialIcon label="YouTube" href="#" activeColor="#FF0000">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                </SocialIcon>

                <SocialIcon label="Pinterest" href="#" activeColor="#BD081C">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 0 5.397 0 12.017c0 5.077 3.158 9.413 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.748-1.379l-.749 2.848c-.27 1.039-1.001 2.344-1.488 3.137C10.456 23.9 11.224 24 12.017 24 18.639 24 24 18.639 24 12.017 24 5.397 18.639 0 12.017 0z" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- MIDDLE SECTION ---------- */}
        <div className="pt-6 mt-8 mb-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

          {/* Middle Left: Contact */}
          <div>
            <h3 className="text-xs sm:text-[16px] font-bold tracking-[0.15em] text-white uppercase">
              CONTACT
            </h3>

            <ul className="mt-3 space-y-2.5 font-mono text-xs sm:text-[18px] text-gray-200">
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gray-400" />
                <span className="leading-snug">
                  Suite 5, Level 1, Mannan Plaza
                  Bashundhara River View R/A
                  <br />
                  Osudh Factory Mor, South Keraniganj
                  Dhaka 1311, Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-gray-400" />
                <a
                  href="tel:+8801313711661"
                  className="transition-colors hover:text-[#D9A08B]"
                >
                  +880 1313-711 661
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-gray-400" />
                <a
                  href="mailto:info@sdnabd.com"
                  className="transition-colors hover:text-[#D9A08B]"
                >
                   info@sdnabd.com
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Center: Resources */}
          <div className="ml-0 sm:ml-50">
            <h3 className="text-xs sm:text-[16px]  font-bold tracking-[0.15em] text-white uppercase">
              RESOURCES
            </h3>
            <ul className="mt-3 space-y-1.5 font-mono text-xs sm:text-[18px] text-gray-200">
              <li><a href="#" className="transition-colors hover:text-[#D9A08B]">Home</a></li>
              <li><Link to="/services" className="transition-colors hover:text-[#D9A08B]">Our Services</Link></li>
              <li><Link to="/projects" className="transition-colors hover:text-[#D9A08B]">Portfolio</Link></li>
              <li><Link to="/studio" className="transition-colors hover:text-[#D9A08B]">Studio</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-[#D9A08B]">Contact</Link></li>
            </ul>
          </div>

          {/* Middle Right: Our Services */}
          <div className="ml-0 sm:ml-20">
            <h3 className="text-xs sm:text-[16px] font-bold tracking-[0.15em] text-white uppercase">
              Ways of working
            </h3>

            <ul className="mt-3 space-y-1.5 font-mono text-xs sm:text-[18px] text-gray-200">
              <li>Architecture</li>
              <li>Interior</li>
              <li>Landscape</li>
              <li>Hospitality</li>
              <li>Residential</li>
              <li>Healthcare</li>
            </ul>
          </div>

        </div>

        {/* ---------- Bottom Bar ---------- */}
        <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-gray-800 pt-4 sm:flex-row sm:items-center">
          <p
            className="max-w-2xl text-[10px] sm:text-[11px] leading-relaxed tracking-[0.08em] text-gray-300"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            STUDIO DNA IS A DESIGN BRANCH OF OUTLINE ARCHITECTS, EXTENDING 30
            YEARS OF PRACTICE INTO FOCUSED RESIDENTIAL & BOUTIQUE WORK.
            <br />© {year} ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}