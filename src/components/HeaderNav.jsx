import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImage from "/src/assets/studioDNA_logo.png";

function HeaderNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isCloseHovered, setIsCloseHovered] = useState(false);

  const lastScrollY = useRef(0);
  const upScrollAccumulator = useRef(0);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hysteresis: only flip the scrolled state well past the threshold so
      // mobile viewport changes (URL bar show/hide) can't make it flicker
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else if (currentScrollY < 10) {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current) {
        upScrollAccumulator.current = 0;

        if (currentScrollY > 100) {
          setIsVisible(false);
        }
      } else {
        upScrollAccumulator.current +=
          lastScrollY.current - currentScrollY;

        if (
          upScrollAccumulator.current > 350 ||
          currentScrollY <= 60
        ) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Projects", href: "/projects" },
    { label: "Studio", href: "/studio" },
    { label: "Services", href: "/services" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "/contact" },
  ];

  const [pendingSection, setPendingSection] = useState(null);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!pendingSection || location.pathname !== "/") return;

    let attempts = 0;
    let timeoutId;
    const tryScroll = () => {
      if (scrollToSection(pendingSection)) {
        setPendingSection(null);
        return;
      }
      attempts += 1;
      if (attempts < 20) {
        timeoutId = setTimeout(tryScroll, 50);
      } else {
        setPendingSection(null);
      }
    };
    timeoutId = setTimeout(tryScroll, 60);

    return () => clearTimeout(timeoutId);
  }, [pendingSection, location.pathname]);

  const handleNavigate = (href) => {
    setIsMenuOpen(false);

    if (href === "/projects") {
      navigate("/projects");
      return;
    }

    if (href.startsWith("#")) {
      const sectionId = href.slice(1);
      if (location.pathname === "/") {
        scrollToSection(sectionId);
      } else {
        setPendingSection(sectionId);
        navigate("/");
      }
      return;
    }

    navigate(href);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-full overflow-x-hidden z-50 select-none transition-all duration-500
          ease-out ${isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
          } ${isScrolled
            ? "bg-transparent py-1 border-b border-white/10 shadow-sm"
            : "bg-transparent py-2.5 sm:py-3 md:py-4 border-b border-transparent"
          }`}
      >
        <div className="w-full max-w-full flex items-center justify-between px-0">
          {/* LOGO */}
          <a href="/" onClick={handleLogoClick} className="active:opacity-80 transition-opacity relative -ml-2 sm:ml-8 md:ml-14">
            <img
              src={logoImage}
              alt="Studio DNA Logo"
              className={`w-auto object-contain relative transition-opacity duration-500 ease-in-out ${isScrolled
                  ? "h-16 sm:h-14 md:h-22"
                  : "h-18 sm:h-16 md:h-30"
                }`}
            />
          </a>

          {/* MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(true)}
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
            aria-label="Open Navigation Menu"
            className="menu-btn group relative overflow-hidden flex items-center mr-8 sm:mr-8 md:mr-18 gap-2 sm:gap-2.5 px-3.5 py-2 md:px-4 md:py-2 rounded-sm 
              transition-all duration-500 hover:scale-[1.03] active:scale-95 focus:outline-none touch-manipulation border border-transparent"
            style={{ backgroundColor: "#F7F7F4" }}
          >
            {/* Animated Expanding Circle from Bottom Center */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#A84E32] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-900 ease-out pointer-events-none" />

            {/* Hamburger Icon Lines */}
            <div className="relative z-10 flex flex-col gap-[3px] w-3.5">
              <span 
                className="menu-hamburger-line h-[2px] transition-colors duration-500 w-full" 
                style={{ backgroundColor: isMenuHovered ? "#F7F7F4 !important" : "#A84E32" }} 
              />
              <span 
                className="menu-hamburger-line h-[2px] transition-colors duration-500 w-full" 
                style={{ backgroundColor: isMenuHovered ? "#F7F7F4 !important" : "#A84E32" }} 
              />
            </div>

            {/* Menu Text */}
            <span
              className="menu-text relative z-10 text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-widest uppercase transition-colors duration-500"
              style={{ 
                fontFamily: "'Manrope', sans-serif", 
                color: isMenuHovered ? "#F7F7F4 !important" : "#000000" 
              }}
            >
              Menu
            </span>
          </button>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-[60] h-[100dvh] w-full max-w-full overflow-x-hidden bg-cover bg-center 
          bg-no-repeat transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col justify-between p-5 sm:p-8
          md:p-12 md:px-40 px-14 overflow-y-auto bg-[#2E3133] ${isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
          }`}
      >
        <div className="absolute inset-0 z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between min-h-full w-full max-w-[1920px] mx-auto gap-6 sm:gap-8">
          {/* TOP BAR */}
          <div className="w-full flex items-center justify-between">
            {/* LOGO */}
            <a
              href="/"
              onClick={handleLogoClick}
              className="flex items-center active:opacity-80 transition-opacity"
            >
              <img
                src={logoImage}
                alt="Studio DNA Logo"
                className="h-22 sm:h-16 md:h-32 -ml-6 md:-ml-12 w-auto object-contain"
              />
            </a>

            {/* CLOSE BUTTON - RIGHT */}
            <button
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={() => setIsCloseHovered(true)}
              onMouseLeave={() => setIsCloseHovered(false)}
              aria-label="Close Navigation Menu"
              className={`group flex items-center gap-2.5 sm:gap-3 px-3.5 py-2 rounded-sm transition-all duration-500 focus:outline-none touch-manipulation active:scale-95 ${
                isCloseHovered ? "border border-white" : "border border-transparent"
              }`}
              style={{ backgroundColor: isCloseHovered ? "#A84E32" : "#F7F7F4" }}
            >
              <span
                className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase transition-colors duration-500"
                style={{ 
                  fontFamily: "'Manrope', sans-serif",
                  color: isCloseHovered ? "#F7F7F4" : "#1c1c1c"
                }}
              >
                Close
              </span>

              <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                <span 
                  className="absolute h-[1px] w-full rotate-45 transition-transform duration-300 group-hover:rotate-90 transition-colors duration-500" 
                  style={{ backgroundColor: isCloseHovered ? "#F7F7F4" : "#1c1c1c" }}
                />
                <span 
                  className="absolute h-[1px] w-full -rotate-45 transition-transform duration-300 group-hover:rotate-0 transition-colors duration-500" 
                  style={{ backgroundColor: isCloseHovered ? "#F7F7F4" : "#1c1c1c" }}
                />
              </div>
            </button>
          </div>

          {/* NAVIGATION */}
          <div className="w-full flex flex-col items-start justify-center flex-grow py-4 sm:py-8 md:py-12">
            <nav className="flex flex-col space-y-2.5 sm:space-y-4 md:space-y-6 w-full">
              {menuItems.map((item, index) => (
                <div
                  key={item.href}
                  className="overflow-hidden"
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(item.href);
                    }}
                    className={`text-3xl sm:text-5xl md:text-[3vw] font-bold leading-tight sm:leading-none uppercase inline-block
                    transition-all duration-500 ease-out hover:translate-x-2 sm:hover:translate-x-4 hover:opacity-75 active:translate-x-1
                    text-[#F7F7F4] ${isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                      }`}
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          {/* FOOTER */}
          <div className="w-full border-t border-white/15 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between gap-3 sm:gap-4 text-[10px] sm:text-[11px] tracking-widest font-mono uppercase text-white/70">
            <div>
              © {new Date().getFullYear()} Studio DNA.
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a
                href="#"
                className="transition-colors py-1 hover:text-white active:text-white"
              >
                Instagram
              </a>

              <a
                href="#"
                className="transition-colors py-1 hover:text-white active:text-white"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="transition-colors py-1 hover:text-white active:text-white"
              >
                Journal
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderNav;