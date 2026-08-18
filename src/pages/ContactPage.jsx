import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Compass, Image as ImageIcon } from "lucide-react";
import Footer from "./Footer";
import Meet from "./Meet";
import bgImage from "../assets/about.png";

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
      className={`transition-all duration-1000 ease-out will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${className}`}
    >
      {children}
    </div>
  );
};

/* Office locations dataset */
const offices = [
  {
    name: "STUDIO DNA",
    tag: "THE STUDIO / BARIDHARA",
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
  {
    name: "OUTLINE ARCHITECTS",
    tag: "HQ / CHATTOGRAM",
    address: (
      <>
        Level 6, Chartered Tower, GEC Circle,
        <br />
        Chattogram 4000, Bangladesh
      </>
    ),
    phone: "+880 1811-000 000",
    phoneHref: "tel:+8801811000000",
    email: "contact@outlinearchitects.com",
    emailHref: "mailto:contact@outlinearchitects.com",
    mapSrc:
      "https://www.google.com/maps?q=GEC+Circle+Chattogram+Bangladesh&output=embed",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
  },
];

const StudioSection = ({ office, index }) => {
  // Set default view tab to 'map'
  const [activeTab, setActiveTab] = useState("map");

  return (
    <Reveal delay={index * 120} className="w-full">
      <div className="flex flex-col gap-6 py-8">
        {/* Studio Title & Media Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <h3 className="text-2xl sm:text-4xl font-sans font-extrabold mt-20 tracking-wider text-[#5b7fc7] uppercase mb-1">
              {office.name}
            </h3>
            <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">
              {office.tag}
            </span>
          </div>

          {/* Photo / Map Switcher Buttons */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTab("map")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${activeTab === "map"
                  ? "bg-gray-900 text-white font-bold"
                  : "bg-gray-100 text-gray-600 hover:text-gray-900"
                }`}
            >
              <Compass size={14} />
              Map
            </button>
            <button
              onClick={() => setActiveTab("image")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${activeTab === "image"
                  ? "bg-gray-900 text-white font-bold"
                  : "bg-gray-100 text-gray-600 hover:text-gray-900"
                }`}
            >
              <ImageIcon size={14} />
              Photo
            </button>
          </div>
        </div>

        {/* Media Container (Defaults to Map) */}
        <div className="relative w-full h-[320px] sm:h-[420px] overflow-hidden rounded-md bg-gray-100">
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

        {/* Details Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-base pt-2">
          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-[#121212] shrink-0 mt-0.5" />
            <div>
              <span className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">
                Location
              </span>
              <span className="text-gray-700 leading-relaxed block text-base">
                {office.address}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone size={20} className="text-[#121212] shrink-0 mt-0.5" />
            <div>
              <span className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">
                Phone
              </span>
              <a
                href={office.phoneHref}
                className="text-gray-800 transition-colors hover:text-[#121212] text-base"
              >
                {office.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail size={20} className="text-[#121212] shrink-0 mt-0.5" />
            <div>
              <span className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">
                Email
              </span>
              <a
                href={office.emailHref}
                className="text-gray-800 transition-colors hover:text-[#5b7fc7] text-base"
              >
                {office.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const ContactPage = () => {
  return (
    <>
      <main className="relative z-10 w-full min-h-screen bg-white text-gray-900 font-mono overflow-hidden">
        {/* ================= 1. HERO ================= */}
        <section className="relative w-full min-h-[70vh] sm:min-h-[60vh] flex items-end overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 z-0" />

          <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-34 mt-30 py-16 md:py-28">
            <Reveal>
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#5b7fc7] block mb-3">
                — Contact
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-bold text-gray-900 tracking-tight uppercase">
                Let's Build
                <br />
                Together.
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 max-w-4xl text-base sm:text-lg md:text-xl font-mono text-gray-700 leading-relaxed tracking-normal">
                Have an ambitious architectural vision, structural restoration, or commercial design project in mind? Reach out directly to either of our main studios. Our multidisciplinary design team is prepared to guide your project through every phase—from initial strategic concepts and spatial planning to technical engineering and final handover.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ================= 2. OFFICES ================= */}
        <section className="relative w-full bg-white px-5 sm:px-10 md:px-16 lg:px-94 py-16 sm:py-24">
          <div className="w-full max-w-[1920px] mx-auto">
            {/* Section Heading */}
            <Reveal>
              <div className="mb-12 text-center">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-mono font-bold text-gray-900 leading-tight ">
                  Talk To Our Studios
                </h2>
              </div>
            </Reveal>

            {/* Offices List */}
            <div className="flex flex-col gap-16 sm:gap-24">
              {offices.map((office, idx) => (
                <StudioSection key={office.name} office={office} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* ================= 3. BOOK A CONSULTATION ================= */}
        <Meet />
      </main>

      {/* Footer Block */}
      <div className="relative z-10 w-full border-t border-neutral-300 bg-white/70 backdrop-blur-md">
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;