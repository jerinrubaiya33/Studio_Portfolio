import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUp } from "lucide-react";
import designImg from "../assets/designImg.avif";
import buildImg from "../assets/buildImg.png";
import supplyImg from "../assets/supplyImg.avif";
import CTASection from "./CTA";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);

  const supportsIO =
    typeof window !== "undefined" &&
    "IntersectionObserver" in window;

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
      className={`transition-all duration-[2000ms] ease-out ${visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
        } ${className}`}
    >
      {children}
    </div>
  );
};

const corePillars = [
  {
    num: "01",
    title: "Design",
    image: designImg,
    subtitle:
      "Architecture and specialist design coordinated as one system — from first sketch to approval.",
    items: [
      "Architectural design",
      "Structural design",
      "Mechanical design",
      "Electrical design",
      "Plumbing design",
      "HVAC design",
      "Fire design",
      "Graphics & visualisation",
      "Authority approval",
      "Special approval",
      "Green building certification",
      "Feasibility reports",
    ],
  },
  {
    num: "02",
    title: "Build",
    image: buildImg,
    subtitle:
      "Construction, fit-out and delivery executed across varied structural systems with rigorous supervision.",
    items: [
      "RCC and masonry structures",
      "Prefabricated & metal structures",
      "Composite structures",
      "Wooden and bamboo structures",
      "Rammed-earth structures",
      "Interior fit-out",
      "Landscape construction",
      "Project management",
      "Legal & documentation services",
    ],
  },
  {
    num: "03",
    title: "Supply",
    image: supplyImg,
    subtitle:
      "Material and product sourcing connected directly to project delivery — local and imported.",
    items: [
      "Local supply",
      "Imported supply",
      "Sourcing",
      "Indenting",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setShowTopBtn(scrolled > totalHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative z-10 min-h-screen w-full overflow-hidden bg-[#2E3133] font-sans text-white transition-colors
     duration-500">

      {/* Increased top padding further on desktop (md:pt-56 lg:pt-64) */}
      <section className="relative w-full border-y border-gray-100 pt-16 sm:pt-16 md:pt-56 lg:pt-38 pb-4 sm:py-16 px-4
       sm:px-6 md:px-14 lg:px-16">

        <div className="absolute inset-0  z-0 bg-white/10" />

        <div className="relative z-10 mx-auto mb-10 max-w-[1800px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">

          <Reveal>
            <div className="mb-6 md:mb-8 lg:mb-10 px-0 md:px-8 lg:px-18">

              <div className="relative flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:items-end">

                <button
                  onClick={() => navigate(-1)}
                  className="group relative md:absolute mt-8 mb-4 sm:-mt-10 sm:mb-0 md:-left-32 lg:-left-37 md:top-1/2 z-20 flex md:-translate-y-1/2 
                  items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em]
                   text-gray-500 transition-all duration-300 hover:text-gray-900"
                >
                  <span
                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center bg-[#2E3133] text-white transition-all
                      duration-300 group-hover:border-gray-900 group-hover:bg-[#D9A08B]"
                  >
                    <ArrowLeft
                      size={14}
                      strokeWidth={1.5}
                      className="text-white transition-transform duration-300 group-hover:-translate-x-1"
                    />
                  </span>

                  <span className="block">
                    Back
                  </span>
                </button>

                <h2 className="font-mono text-2xl sm:text-xl sm:mt-20 md:text-3xl lg:text-3xl xl:text-3xl font-extrabold leading-tight whitespace-nowrap
                   text-[#FFFFFF]">
                  Design · Build · Supply
                </h2>

              </div>

            </div>
          </Reveal>

          <div className="divide-y divide-gray-300/80 border-b border-t border-gray-300/80">

            {corePillars.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 1200}>

                {/* Reduced vertical padding even more on desktop (md:py-6 lg:py-10) */}
                <div className="grid grid-cols-1 items-center gap-8 py-8 sm:py-12 md:py-6 lg:py-10 lg:grid-cols-12 lg:gap-16 px-0 sm:px-4 md:px-8 lg:px-20">

                  <div className="flex flex-col justify-center text-left lg:col-span-6 pr-0 lg:pr-4">

                    <h3 className="font-sans text-4xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#D9A08B] lg:text-6xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 sm:mt-4 lg:mt-5 max-w-lg font-mono text-xs sm:text-sm md:text-base font-medium leading-relaxed text-gray-900">
                      {item.subtitle}
                    </p>

                    <div className="mt-5 sm:mt-6 w-full max-w-[180px] sm:max-w-[320px]">
                      <div className="relative h-28 sm:h-36 md:h-40 lg:h-44 w-full overflow-hidden border border-gray-200/80 bg-gray-100 shadow-sm">
                        <img
                          src={item.image}
                          alt={`${item.title} service`}
                          loading="lazy"
                          className="h-full w-full object-cover grayscale transition-all duration-500 ease-out hover:grayscale-90"
                        />
                      </div>
                    </div>

                  </div>

                  <div className="w-full lg:col-span-6 pl-0 lg:pl-4 pt-0 lg:pt-12">

                    <ul className="divide-y divide-gray-300/80 border-b border-t border-gray-300/80">

                      {item.items.map((service, serviceIndex) => (
                        <li
                          key={`${item.num}-${serviceIndex}`}
                          className="py-2.5 sm:py-3 px-1 sm:px-2 font-mono text-[11px] sm:text-xs md:text-base font-semibold uppercase tracking-wide text-white"
                        >
                          {service}
                        </li>
                      ))}

                    </ul>

                  </div>

                </div>

              </Reveal>
            ))}

          </div>

        </div>
      </section>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-[#D9A08B] text-white shadow-md transition-all duration-300 hover:h-9 hover:w-9 hover:shadow-lg cursor-pointer ${showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <ArrowUp
          size={14}
          className="opacity-100 scale-100 transition-all duration-300"
        />
      </button>
      <CTASection />
      <Footer />

      {/* Rendered last so the page tags win over section-level ones */}
      <Helmet>
        <title>Services — Design, Build & Supply | Studio DNA</title>
        <meta
          name="description"
          content="Architecture, interior design, engineering, landscape, construction and supply — integrated services delivered by Studio DNA across Bangladesh."
        />
        <link rel="canonical" href="https://sdnabd.com/services" />
        <meta property="og:title" content="Services — Design, Build & Supply | Studio DNA" />
        <meta
          property="og:description"
          content="Architecture, interior design, engineering, landscape, construction and supply — integrated services delivered by Studio DNA across Bangladesh."
        />
        <meta property="og:url" content="https://sdnabd.com/services" />
        <meta property="og:type" content="website" />
      </Helmet>
    </main>
  );
};

export default Services;