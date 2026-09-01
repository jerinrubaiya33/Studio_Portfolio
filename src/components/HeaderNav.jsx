import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import logoImage from "/src/assets/studioDNA_logo.png";
import logoBlack from "/src/assets/studioDNA_logo_black.png";
import menuBg from "/src/assets/projectsbg.png";

function HeaderNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wasHidden, setWasHidden] = useState(false);

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

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current) {
        upScrollAccumulator.current = 0;

        if (currentScrollY > 100) {
          setIsVisible(false);
          setWasHidden(true);
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

      // Reset when fully back at top
      if (currentScrollY <= 60) {
        setWasHidden(false);
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
    // { label: "About", href: "#about" },
    { label: "Services", href: "/services" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "/contact" },
  ];

  // Section to scroll to after navigating to the home page (cross-page anchor click)
  const [pendingSection, setPendingSection] = useState(null);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return true;
    }
    return false;
  };

  // Once on the home page, keep retrying until the section exists (render timing),
  // then clear up. Cleanup runs on unmount and route change.
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

  // Router-aware navigation: section anchors work from any page (navigate home first)
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
      navigate("/"); // ScrollToTop handles jumping to the top on route change
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
              className={`w-auto object-contain absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${isScrolled
                  ? "h-16 sm:h-14 md:h-22"
                  : "h-18 sm:h-16 md:h-24"
                } ${!(theme === "light" && (location.pathname === "/services" || (isVisible && wasHidden))) ? "opacity-100" : "opacity-0"
                }`}
            />
            <img
              src={logoBlack}
              alt="Studio DNA Logo"
              className={`w-auto object-contain transition-opacity duration-500 ease-in-out ${isScrolled
                  ? "h-16 sm:h-14 md:h-22"
                  : "h-18 sm:h-16 md:h-24"
                } ${theme === "light" && (location.pathname === "/services" || (isVisible && wasHidden)) ? "opacity-100" : "opacity-0"
                }`}
            />
          </a>

          {/* THEME TOGGLE BUTTON */}
          <div className="flex items-center gap-2 mr-4 sm:mr-6 md:mr-12">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="relative flex items-center w-[52px] h-[28px] md:w-[56px] md:h-[30px] rounded-full transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] focus:outline-none touch-manipulation"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)',
                boxShadow: theme === 'dark'
                  ? 'inset 0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(255,255,255,0.05)'
                  : 'inset 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(255,255,255,0.6)',
              }}
            >
              {/* Sliding Knob */}
              <span
                className="absolute top-[3px] left-[3px] w-[22px] h-[22px] md:w-[24px] md:h-[24px] rounded-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] shadow-md"
                style={{
                  transform: theme === 'dark' ? 'translateX(24px)' : 'translateX(0)',
                  backgroundColor: theme === 'dark' ? '#1c1c1c' : '#f0f0f0',
                }}
              >
                {theme === 'dark' ? (
                  /* Moon Icon (Night) */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  /* Sun Icon (Day) */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </span>
            </button>
          </div>

          {/* MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="group relative overflow-hidden  flex items-center mr-8 sm:mr-8 md:mr-18 gap-2 sm:gap-2.5 px-3.5 py-2 md:px-4 md:py-2 bg-white text-black rounded-sm 
             group-hover:border-white transition-all duration-500 hover:scale-[1.03] active:scale-95 focus:outline-none touch-manipulation"
          >
            {/* Animated Expanding Circle from Bottom Center */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-900 ease-out pointer-events-none" />

            {/* Hamburger Icon Lines */}
            <div className="relative z-10 flex flex-col gap-[3px] w-3.5">
              <span className="h-[2px] bg-[#4f5d39] group-hover:bg-white transition-colors duration-500 w-full" />
              <span className="h-[2px] bg-[#4f5d39] group-hover:bg-white transition-colors duration-500 w-full" />
            </div>

            {/* Menu Text */}
            <span
              className="relative z-10 text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-widest uppercase
              transition-colors duration-500 group-hover:text-white"
              style={{ fontFamily: "'serif', sans-serif" }}
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
           md:p-12 md:px-40 px-14 overflow-y-auto ${theme === 'dark' ? 'bg-[#1c1c1c]' : 'bg-[#EFEFEF]'} ${isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
          }`}
        // style={{
        //   backgroundImage: `url(${menuBg})`,
        // }}
      >
        {/* OPTIONAL OVERLAY LAYER FOR BETTER TEXT CONTRAST */}
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
                src={theme === 'light' ? logoBlack : logoImage}
                alt="Studio DNA Logo"
                className={`h-22 sm:h-16 md:h-32 -ml-6 md:-ml-12 w-auto object-contain ${theme === 'dark' ? 'opacity-80' : ''}`}
              />
            </a>

            {/* TOGGLE - CENTERED */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="relative flex items-center md:-mt-3 w-[52px] h-[28px] md:w-[56px] md:h-[30px] rounded-full transition-all duration-700 
                ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] focus:outline-none touch-manipulation"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)',
                  boxShadow: theme === 'dark'
                    ? 'inset 0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(255,255,255,0.05)'
                    : 'inset 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(255,255,255,0.6)',
                }}
              >
                <span
                  className="absolute top-[3px] left-[3px] w-[22px] h-[22px] md:w-[24px] md:h-[24px] rounded-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] shadow-md"
                  style={{
                    transform: theme === 'dark' ? 'translateX(24px)' : 'translateX(0)',
                    backgroundColor: theme === 'dark' ? '#1c1c1c' : '#f0f0f0',
                  }}
                >
                  {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  )}
                </span>
              </button>
            </div>

            {/* CLOSE BUTTON - RIGHT */}
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Navigation Menu"
              className={`group flex items-center gap-2.5 sm:gap-3 px-3 py-2 sm:px-3.5 sm:py-2 border rounded-sm transition-all duration-300 focus:outline-none backdrop-blur-sm touch-manipulation ${theme === 'dark' ? 'border-white/25 hover:border-white active:bg-white/10 bg-white/10' : 'border-[#333333]/25 hover:border-[#333333] active:bg-white/80 bg-white/60'}`}
            >
              <span
                className={`text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase ${theme === 'dark' ? 'text-white' : 'text-[#333333]'}`}
                style={{ fontFamily: "'serif', sans-serif" }}
              >
                Close
              </span>

              <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                <span className="absolute h-[1px] w-full rotate-45 transition-transform duration-300 group-hover:rotate-90" style={{ backgroundColor: theme === 'dark' ? '#ffffff' : '#333333' }} />
                <span className="absolute h-[1px] w-full -rotate-45 transition-transform duration-300 group-hover:rotate-0" style={{ backgroundColor: theme === 'dark' ? '#ffffff' : '#333333' }} />
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
                    className={`text-3xl sm:text-5xl md:text-[4vw] font-bold leading-tight sm:leading-none uppercase inline-block
                    transition-all duration-500 ease-out hover:translate-x-2 sm:hover:translate-x-4 hover:opacity-75 active:translate-x-1
                     ${theme === 'dark' ? 'text-white/70 hover:text-white/90' : 'text-[#333333]'} ${isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                      }`}
                    style={{
                      fontFamily: "'serif'",
                    }}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          {/* FOOTER */}
          <div className={`w-full border-t pt-4 sm:pt-6 flex flex-col md:flex-row justify-between gap-3 sm:gap-4 text-[10px] sm:text-[11px] tracking-widest font-mono uppercase ${theme === 'dark' ? 'border-white/15 text-white/60' : 'border-[#333333]/15 text-[#333333]/70'}`}>
            <div>
              © {new Date().getFullYear()} Studio DNA & Outline Architecture.
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a
                href="#"
                className={`transition-colors py-1 ${theme === 'dark' ? 'hover:text-white active:text-white' : 'hover:text-[#333333] active:text-black'}`}
              >
                Instagram
              </a>

              <a
                href="#"
                className={`transition-colors py-1 ${theme === 'dark' ? 'hover:text-white active:text-white' : 'hover:text-[#333333] active:text-black'}`}
              >
                LinkedIn
              </a>

              <a
                href="#"
                className={`transition-colors py-1 ${theme === 'dark' ? 'hover:text-white active:text-white' : 'hover:text-[#333333] active:text-black'}`}
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