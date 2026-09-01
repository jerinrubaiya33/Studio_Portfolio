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
    <section className="cta-section relative w-full py-12 sm:py-10 font-sans bg-[#5B7FC774] text-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center space-y-5 py-10 sm:py-16"
        >
          {/* TOP ACCENT LINE */}
          <div className="w-8 h-0.5 rounded-full bg-white" />

          {/* MAIN HEADING */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-medium font-mono tracking-tight leading-[1.05] max-w-4xl text-neutral-900">
            Ready To Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-700 to-[#667EAE]">
              Something Amazing?
            </span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-xs sm:text-sm md:text-base max-w-xl font-normal font-mono leading-relaxed text-neutral-600">
            Connect design, construction, and supply through one integrated delivery team.
          </p>

          {/* ACTION BUTTON */}
          <div className="pt-2">
            <Link
              to="/cta"
              className="group relative inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wide px-5 py-2.5 rounded-md shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden text-white bg-neutral-900 hover:bg-neutral-800"
            >
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />

              <span className="relative z-10 transition-colors duration-500 group-hover:text-white font-mono">
                Start a Conversation
              </span>

              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                <ArrowUpRight
                  size={14}
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