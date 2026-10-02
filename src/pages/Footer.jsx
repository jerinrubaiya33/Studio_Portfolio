import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoWhite from "/src/assets/studioDNA_logo.png";

const SocialIcon = ({ children, label, href, activeColor }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:brightness-110"
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
      <div className="relative z-10 w-full px-6 pt-12 pb-10 sm:px-8 lg:px-12 lg:pt-14">
        {/* ---------- Brand Row ---------- */}
        <div>
          {/* Logo container */}
          <div className="flex flex-wrap items-center">
            <img
              src={logoWhite}
              alt="STUDIO DNA Logo"
              loading="lazy"
              className="h-24 sm:h-28 lg:h-32 w-auto -ml-10 sm:-ml-14 shrink-0 object-contain grayscale brightness-200 opacity-95"
            />
          </div>

          {/* Paragraph and Social Icons side-by-side on larger screens */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mt-6">
            <p
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200 max-w-4xl"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
            >
              STUDIO DNA provides comprehensive services in architecture,
              planning & engineering, interior & landscape design for both
              public and private sectors — covering residential, commercial,
              institutional & industrial projects, renovations, and landmark
              restorations. We deliver efficient, end-to-end design, build and
              supply services to our valued clients.
            </p>

            {/* Social Icons positioned beside the paragraph */}
            <div className="flex flex-col gap-3 lg:mr-30 shrink-0">
              <h3 className="text-sm sm:text-base font-bold tracking-[0.15em] text-gray-200 uppercase">
                OUR SOCIALS
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                {/* Real WhatsApp Logo SVG */}
                <SocialIcon label="WhatsApp" href="https://wa.me/8801313711665" activeColor="#25D366">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </SocialIcon>

                <SocialIcon label="Instagram" href="https://www.instagram.com/studio.dna.bd/" activeColor="#E1306C">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                  </svg>
                </SocialIcon>

                <SocialIcon label="Facebook" href="https://www.facebook.com/studio.dna.bd/" activeColor="#1877F2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </SocialIcon>

                <SocialIcon label="LinkedIn" href="https://www.linkedin.com/company/studio-dna-bd" activeColor="#0077B5">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </SocialIcon>

                <SocialIcon label="YouTube" href="https://www.youtube.com/@StudioDNA-q4x" activeColor="#FF0000">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- MIDDLE SECTION: CONTACT → MAP → RESOURCES ---------- */}
        <div className="pt-10 mt-12 mb-10 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">

          {/* Middle Left: Contact */}
          <div>
            <h3 className="text-sm sm:text-base font-bold tracking-[0.15em] text-gray-200 uppercase">
              CONTACT
            </h3>

            <ul className="mt-5 space-y-4 text-base sm:text-lg text-gray-200">
              <li className="flex gap-3 items-start">
                <MapPin size={20} className="mt-1 shrink-0 text-gray-200" />
                <span className="leading-snug">
                  Suite 5, Level 1, Mannan Plaza
                  <br />
                  Bashundhara River View R/A
                  <br />
                  Osudh Factory Mor, South Keraniganj
                  <br />
                  Dhaka 1311, Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-gray-200" />
                <a
                  href="tel:+8801313711661"
                  className="transition-colors hover:text-[#D9A08B]"
                >
                  +880 1313-711 661
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={20} className="shrink-0 text-gray-200" />
                <a
                  href="mailto:info@sdnabd.com"
                  className="transition-colors hover:text-[#D9A08B]"
                >
                   info@sdnabd.com
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Center: Google Map */}
          <div>
            <div className="overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 rounded-lg border border-gray-800 shadow-md w-full h-52">
              <iframe
                title="Studio DNA Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7300.5!2d90.4284213!3d23.6774307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e29f1b1e33%3A0x30f3fb5d64facbf5!2sStudio%20DNA!5e0!3m2!1sen!2sbd!4v1759000000000!5m2!1sen!2sbd"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/bnV5cCQyhWhZDGNa6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-gray-200 hover:text-[#D9A08B] transition-colors duration-300"
            >
              Open in Google Maps
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Middle Right: Resources */}
          <div className="ml-0 sm:ml-16">
            <h3 className="text-sm sm:text-base font-bold tracking-[0.15em] text-gray-200 uppercase">
              RESOURCES
            </h3>
            <ul className="mt-5 space-y-3 text-base sm:text-lg text-gray-200">
              <li><Link to="/" className="transition-colors hover:text-[#D9A08B]">Home</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-[#D9A08B]">Our Services</Link></li>
              <li><Link to="/projects" className="transition-colors hover:text-[#D9A08B]">Portfolio</Link></li>
              <li><Link to="/studio" className="transition-colors hover:text-[#D9A08B]">Studio</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-[#D9A08B]">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* ---------- Bottom Bar ---------- */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row sm:items-center">
          <p
            className="text-sm max-w-3xl sm:text-base uppercase leading-relaxed tracking-[0.08em] text-gray-200 font-medium"
          >
            Studio DNA works in association with Outline Architects, connecting architectural design with integrated build and supply services.
           
          </p>
          <p className="mr-40"> © {year} ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}