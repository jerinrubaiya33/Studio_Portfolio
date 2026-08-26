import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import ctaBgImage from "../assets/cta5.jpg";

function CTASection() {
  return (
    <section className="relative w-full h-[40vh] sm:h-[400px] md:h-[500px] lg:h-auto lg:min-h-[600px] flex items-end overflow-hidden font-mono text-white">
      {/* FULL-HEIGHT BACKGROUND IMAGE */}
      <img
        src={ctaBgImage}
        alt="CTA Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* BOTTOM BLACK GRADIENT OVERLAY ONLY */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

      {/* CONTENT CONTAINER */}
      <div className="relative -mb-6 sm:mb-0 z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-10 sm:py-0 sm:pb-12 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8"
        >
          {/* LEFT COLUMN: TITLE */}
          <div className="text-left">
            <h2 className="text-2xl sm:mb-0 -mb-4 sm:text-6xl md:text-6xl font-mono font-normal tracking-tight uppercase leading-[0.95] text-white drop-shadow-md">
              Have a Project 
              in Mind?
            </h2>
          </div>

          {/* RIGHT COLUMN: BUTTON */}
          <div>
            <Link
              to="/cta"
              className="group inline-flex items-center gap-3 text-xs sm:text-sm font-bold tracking-[0.15em] text-gray-900
              uppercase bg-white px-6 py-2 sm:px-8 sm:py-4 transition-all duration-300 hover:bg-neutral-200"
            >
              Get in Touch
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;























