import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


function CTASection() {

  return (
    <section className="cta-section relative w-full py-12 sm:py-10 font-sans bg-[#A84E32] text-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center space-y-5 py-10 sm:py-16"
        >
          {/* TOP ACCENT LINE */}
          <div className="w-8 h-0.5 rounded-full bg-[#ffffff]" />

          {/* MAIN HEADING */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold font-mono tracking-tight leading-[1.05] max-w-5xl text-white">
            Ready To Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-[#D9A08B]">
              Something Amazing?
            </span>
          </h2>

          {/* SUBTITLE */}
          <p className="whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg font-normal font-mono leading-relaxed
           text-white">
            Connect design, construction, and supply through one integrated delivery team.
          </p>

          {/* ACTION BUTTON */}
          <div className="pt-2">
            <Link
              to="/cta"
              className="group relative inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wide px-5 py-2.5 rounded-md shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden text-white bg-[#1c1c1c] hover:bg-black"
            >
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#D9A08B] rounded-full scale-0 
              group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />

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