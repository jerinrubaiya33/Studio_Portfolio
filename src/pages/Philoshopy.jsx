//35483f
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Philosophy() {
  const [activeNav, setActiveNav] = useState('STUDIO');

  return (
    <div className="flex flex-col bg-[#315847] text-white selection:bg-[#D9A08B]">
      <main className="flex-1 flex flex-col justify-start gap-12 sm:gap-16 md:gap-32 px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-28 max-w-7xl mx-auto w-full">

        {/* Top Section */}
        <div>
          <span className="text-[10px] sm:text-[12px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/70 block mb-5 sm:mb-8 md:mb-10">
            STUDIO PHILOSOPHY
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold font-sans tracking-tight
           leading-[1.15] sm:leading-[1.1] max-w-3xl text-white">
            &ldquo;Decoding Nature &amp; Architecture through Creativity&rdquo;
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-0 sm:-mt-12 border-white/25 pt-6 sm:pt-8 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-end">
          <p className="text-xs sm:text-sm md:text-lg font-light text-white max-w-xl leading-relaxed">
            Studio DNA creates complete built environments through architecture, engineering, interior design, landscape, construction and supply.
          </p>

          <div className="flex flex-col items-start md:items-end w-full md:w-auto mt-8 md:mt-0">
            {/* 2. Change <a> to <Link to="/studio"> */}
            <Link
              to="/studio"
              className="group relative shrink-0 inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold 
              tracking-wide text-[#ffffff] bg-[#2E3133] border border-[#ffffff]/70 px-3.5 sm:px-5 py-2 sm:py-3 rounded-md shadow-sm 
              hover:shadow-md transition-all duration-500 cursor-pointer overflow-hidden font-sans w-auto"
            >
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#A84E32] rounded-full scale-0
              group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#ffffff]">
                Meet the Studio
              </span>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#ffffff]">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}