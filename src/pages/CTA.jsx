// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight, Sparkles } from "lucide-react";
// import { Link } from "react-router-dom";

// function CTASection() {
//   return (
//     <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-white text-neutral-900 font-sans">
//       {/* CONTENT CONTAINER */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="relative rounded-3xl border border-neutral-200 bg-[#5b7fc7] backdrop-blur-md p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl shadow-neutral-100"
//         >
//           {/* LEFT COLUMN: BADGE + HEADING */}
//           <div className="max-w-2xl space-y-4">

//             <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none">
//               Have a Project <br className="hidden sm:inline" />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-400">
//                 in Mind?
//               </span>
//             </h2>
//           </div>

//           {/* RIGHT COLUMN: ACTION BUTTON */}
//           <div className="shrink-0 w-full md:w-auto">
//             <Link
//               to="/cta"
//               className="group relative inline-flex items-center justify-center w-full md:w-auto gap-3 text-xs sm:text-sm font-bold tracking-[0.15em] text-gray-900 uppercase bg-white/90 border-2 border-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
//             >
//               <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />
//               <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
//                 Start a Conversation
//               </span>
//               <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
//                 <ArrowUpRight 
//                   size={18} 
//                   className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
//                 />
//               </span>
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default CTASection;





























import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="relative w-full py-20  sm:py-16  bg-[#5B7FC774] text-neutral-900 font-sans">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center space-y-8 py-16 sm:py-24"
        >
          {/* TOP ACCENT LINE */}
          <div className="w-12 h-0.5 bg-white rounded-full" />

          {/* MAIN HEADING */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-medium font-mono tracking-tight text-neutral-900 leading-[1.05] max-w-5xl uppercase">
            Ready to build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-700 to-[#667EAE]">
              something amazing?
            </span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-base sm:text-lg md:text-2xl text-neutral-600 max-w-2xl font-normal font-mono leading-relaxed">
            Connect design, construction, and supply through one integrated delivery team.
          </p>

          {/* ACTION BUTTON */}
          <div className="pt-4">
            <Link
              to="/cta"
              className="group relative inline-flex items-center justify-center gap-2 text-xs sm:text-lg font-semibold 
              tracking-wide text-white  bg-neutral-900 px-7 py-3.5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />

              <span className="relative z-10 transition-colors duration-500 group-hover:text-white font-mono">
                Start a Conversation
              </span>

              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;