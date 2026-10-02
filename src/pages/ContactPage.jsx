import { useState, useEffect, useRef } from "react";
import { 
  Building2, 
  PhoneCall, 
  Send, 
  Globe, 
  Camera 
} from "lucide-react";
import Footer from "./Footer";
import CTASection from "./CTA";

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
      className={`transition-all duration-1000 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
    tag: "THE STUDIO / KÉRANIGANJ",
    address: (
      <>
        Suite 5, Level 1, Mannan Plaza
        <br />
        Bashundhara River View R/A
        <br />
        Osudh Factory Mor, South Keraniganj
        <br />
        Dhaka 1311, Bangladesh
      </>
    ),
    phone: "+880 1313-711 661",
    phoneHref: "tel:+8801313711661",
    email: "info@sdnabd.com",
    emailHref: "mailto:info@sdnabd.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7300.5!2d90.4284213!3d23.6774307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e29f1b1e33%3A0x30f3fb5d64facbf5!2sStudio%20DNA!5e0!3m2!1sen!2sbd!4v1759000000000!5m2!1sen!2sbd",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
  },
];

const StudioSection = ({ office, index }) => {
  const [activeTab, setActiveTab] = useState("map");

  return (
    <Reveal delay={index * 120} className="w-full">
      <div className="flex flex-col gap-6 py-4">
        {/* Studio Title & Media Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-100 pb-2">
          <div>
            <h3 className="text-2xl sm:text-3xl font-sans font-extrabold mt-6 tracking-wider text-[#D9A08B] uppercase mb-0.5">
              {office.name}
            </h3>
            <span className="text-[12px] font-mono tracking-widest text-gray-200 uppercase">
              {office.tag}
            </span>
          </div>

          {/* Photo / Map Switcher Buttons */}
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <button
              onClick={() => setActiveTab("map")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm transition-all duration-300 ${
                activeTab === "map"
                  ? "bg-gray-100 text-white font-medium shadow-sm"
                  : "bg-gray-100 text-white hover:text-gray-900 hover:bg-gray-200"
              }`}
            >
              <Globe size={13} strokeWidth={1.5} />
              Map
            </button>
            <button
              onClick={() => setActiveTab("image")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm transition-all duration-300 ${
                activeTab === "image"
                  ? "bg-gray-900 text-white font-medium shadow-sm"
                  : "bg-gray-100 text-white hover:text-gray-900 hover:bg-gray-200"
              }`}
            >
              <Camera size={13} strokeWidth={1.5} />
              Photo
            </button>
          </div>
        </div>

        {/* Media Container */}
        <div className="relative w-full h-[240px] sm:h-[300px] overflow-hidden rounded-md bg-gray-100">
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
              loading="lazy"
              className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
            />
          )}
        </div>

        {/* Details Section: Single Row per item with Full-width Underlines */}
        <div className="flex flex-col font-mono w-full pt-2">
          {/* 1. Location */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 w-full border-b border-gray-200 py-4 px-4 sm:px-14">
            <div className="flex items-center gap-2.5 text-white shrink-0">
              <Building2 size={16} strokeWidth={1.5} className="text-[#D9A08B]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">
                Location
              </span>
            </div>
            <address className="text-base sm:text-lg text-white not-italic font-medium sm:text-left leading-relaxed">
              {office.address}
            </address>
          </div>

          {/* 2. Phone */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 px-4 sm:px-14 w-full border-b border-gray-200 py-4">
            <div className="flex items-center gap-2.5 text-white shrink-0">
              <PhoneCall size={16} strokeWidth={1.5} className="text-[#D9A08B]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">
                Phone
              </span>
            </div>
            <a
              href={office.phoneHref}
              className="text-base sm:text-lg mr-0 sm:mr-40 text-white hover:text-[#D9A08B] transition-colors font-medium no-underline sm:text-left"
            >
              {office.phone}
            </a>
          </div>

          {/* 3. Email */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 px-4 sm:px-14 w-full border-b border-gray-200 py-4">
            <div className="flex items-center gap-2.5 text-white shrink-0">
              <Send size={16} strokeWidth={1.5} className="text-[#D9A08B]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">
                Email
              </span>
            </div>
            <a
              href={office.emailHref}
              className="text-base sm:text-lg mr-0 sm:mr-39 text-white hover:text-[#D9A08B] transition-colors font-medium no-underline sm:text-left"
            >
              {office.email}
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const ContactPage = () => {
  return (
    <>
      <main className="relative z-10 w-full min-h-screen bg-white text-gray-900 font-mono overflow-hidden transition-colors duration-500">
        {/* ================= 1. HERO ================= */}
        <section className="relative w-full min-h-[42vh] sm:min-h-[45vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 bg-[#315847]" />
          <div className="absolute inset-0 z-0" />

          <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-24 mt-16 sm:mt-36 py-12 md:py-16">
            <Reveal>
              <h1 className="text-4xl sm:text-4xl md:text-7xl font-mono font-bold text-white tracking-tight uppercase">
                Let's Build
                <br />
                Together.
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-4 max-w-2xl text-md sm:text-sm md:text-xl font-mono text-gray-900 leading-relaxed tracking-normal">
                Have an ambitious architectural vision, structural restoration, or commercial design project in mind? Reach out directly to either of our main studios. Our multidisciplinary design team is prepared to guide your project through every phase—from initial strategic concepts and spatial planning to technical engineering and final handover.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ================= 2. OFFICES ================= */}
        <section className="relative w-full bg-white px-6 sm:px-8 md:px-12 lg:px-94 py-8 sm:py-22">
          <div className="w-full max-w-[1400px] mx-auto">
            <Reveal>
              <div className="mb-6 mt-15 sm:mt-30 text-center">
                <h2 className="text-3xl sm:text-3xl lg:text-4xl font-mono font-bold text-gray-900 leading-tight">
                  Talk To Our Studio
                </h2>
              </div>
            </Reveal>

            <div className="flex flex-col gap-8 sm:gap-12">
              {offices.map((office, idx) => (
                <StudioSection key={office.name || idx} office={office} index={idx} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <div className="relative z-10 w-full border-t border-gray-200 bg-white/70 backdrop-blur-md transition-colors duration-500">
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;