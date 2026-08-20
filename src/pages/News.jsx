import React from "react";
import { ArrowRight } from "lucide-react";
import bgImage from "../assets/news.png";

export default function News() {
  const newsArticles = [
    {
      id: 1,
      date: "09 July 2026",
      title: "Sweetbird North marks the next evolution of Miami's Design District",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-3",
      imageHeight: "h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px]",
    },
    {
      id: 2,
      date: "06 July 2026",
      title: "Shanghai Grand Opera House by Snøhetta enters final phase ahead of October opening",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      colSpan: "col-span-12 lg:col-span-6",
      imageHeight: "h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px]",
    },
    {
      id: 3,
      date: "02 July 2026",
      title: "Theodore Roosevelt Presidential Library landscape dedicated to America's...",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-3",
      imageHeight: "h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px]",
    },
  ];

  return (
    <section className="relative w-full min-h-screen text-gray-900 font-sans px-4 sm:px-6 md:px-10 lg:px-12 py-6 sm:py-10 pb-16 sm:pb-20 overflow-hidden">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Backdrop Overlay */}
      <div className="absolute inset-0 z-0 backdrop-blur-[40px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-row items-end justify-between mb-6 sm:mb-8 border-b border-gray-300/60 pb-3 mt-8 sm:mt-16 md:mt-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-normal text-gray-800 tracking-tight">
            Latest News
          </h2>

          <a
            href="#all-articles"
            className="group flex items-center gap-1.5 text-xs sm:text-sm md:text-base font-semibold text-gray-700 hover:text-black transition-colors shrink-0 mb-1"
          >
            <span className="font-mono">All articles</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 sm:w-4 sm:h-4" />
          </a>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-start">
          {newsArticles.map((article) => (
            <article key={article.id} className={`${article.colSpan} group cursor-pointer`}>
              {/* Image Container */}
              <div className="w-full overflow-hidden mb-2.5 sm:mb-3 bg-gray-100 rounded-sm shadow-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className={`w-full ${article.imageHeight} object-cover transition-transform duration-500 ease-out group-hover:scale-105`}
                />
              </div>

              {/* Content */}
              <div className="space-y-1">
                <p className="text-xs text-gray-600 font-semibold tracking-wide">
                  {article.date}
                </p>

                <h3 className="text-sm sm:text-base md:text-lg font-serif font-normal leading-snug text-gray-900 group-hover:text-gray-600 transition-colors">
                  {article.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}