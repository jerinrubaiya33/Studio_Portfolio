import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useLocation } from "react-router-dom";
import landscape1 from "../assets/bashanta-bilash-aerial-04.jpg";
import landscape2 from "../assets/sushi.jpg";
import landscape3 from "../assets/akm.jpg";
import landscape4 from "../assets/jb.jpg";

// 1. Import your audio file from your assets folder
import LightOnSteelAudio from "../assets/Light_on_Steel.mp3";

// The hero slider audio should only ever play on the homepage hero.
// This keeps the toggle from re-arming playback when the user leaves the homepage.
const HOME_PATH = "/";

// Keep the audio policy decision explicit at the top of the component so it is
// easy to change later. "true" means the hero slider starts with music enabled
// by default after a page refresh.
const DEFAULT_AUDIO_ON = true;

const projects = [
  {
    id: 1,
    title: "Bashanta Bilash Resort",
    category: "Architecture / Exterior",
    location: "Tarabo, Kachpur, Narayanganj",
    year: "2020-present",
    imgUrl: landscape1,
    isLocal: true,
  },
  {
    id: 2,
    title: "Sushi Samurai",
    category: "Commercial Space",
    location: "Banani, Dhaka",
    year: "2022",
    imgUrl: landscape2,
  },
  {
    id: 3,
    title: "AKM Restaurant & Convention Center",
    category: "Commercial Space",
    location: "Gulshan, Dhaka",
    year: "2022-23",
    imgUrl: landscape3,
  },
  {
    id: 4,
    title: "JB Apartment",
    category: "Interior Architecture",
    location: "Madhabdi, Narsingdi",
    year: "2020",
    imgUrl: landscape4,
  },
];

const getSrcSet = (baseUrl) => {
  if (!baseUrl.startsWith("http")) return undefined;
  const cleanUrl = baseUrl.split("?")[0];
  return [1200, 1920, 2560, 3840]
    .map((w) => `${cleanUrl}?auto=format&fit=crop&w=${w}&q=85 ${w}w`)
    .join(", ");
};

function HeroSlider() {
  const location = useLocation();
  const x = useMotionValue(0);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const audioRef = useRef(null);

  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userEnabledAudio, setUserEnabledAudio] = useState(DEFAULT_AUDIO_ON);
  const firstInteractionFired = useRef(false);

  // The hero slider audio is only meant to play when the slider is actually on the homepage.
  // On any other route, keep the element silent and do not participate in playback logic.
  const isHomeRoute = typeof location !== "undefined" ? location.pathname === HOME_PATH : false;

  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handleChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const duplicatedProjects = [...projects, ...projects];

  useEffect(() => {
    if (!trackRef.current) return;

    const singleSetWidth = trackRef.current.scrollWidth / 2;
    const duration = isDesktop ? 75 : 45;

    const controls = animate(x, -singleSetWidth, {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      onUpdate: (latestX) => {
        const firstSlide = trackRef.current?.children[0];
        const slideWidth = firstSlide ? firstSlide.offsetWidth : window.innerWidth * 1.5;

        const currentPos = Math.abs(latestX);
        const currentIndex = Math.floor(currentPos / slideWidth) % projects.length;
        const progressInSlide = currentPos % slideWidth;

        if (progressInSlide >= slideWidth * 0.5) {
          setActiveProject(null);
        } else {
          setActiveProject(projects[currentIndex]);
        }
      },
    });

    return () => controls.stop();
  }, [x, isDesktop]);

  const setAudioState = (playing, enabled) => {
    setIsPlaying(playing);
    setUserEnabledAudio(enabled);

    if (!audioRef.current) return;

    // If the hero slider is not on the homepage, never keep audio playing.
    if (!isHomeRoute) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      return;
    }

    audioRef.current.volume = enabled ? 1 : 0;
    if (playing && enabled) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const toggleAudio = async () => {
    if (!audioRef.current) {
      console.warn("HeroSlider: audioRef.current is null — audio element not mounted yet.");
      return;
    }

    // Mute/unmute is only meaningful while the hero slider is visible on the homepage.
    if (!isHomeRoute) {
      // If the user explicitly toggles while not on the homepage, we still record the choice
      // so the next homepage visit can honour it, but audio stays off right now.
      const nextEnabled = isPlaying ? false : false;
      setAudioState(false, nextEnabled);
      return;
    }

    try {
      if (isPlaying) {
        setAudioState(false, false);
      } else {
        await audioRef.current.play();
        setAudioState(true, true);
        firstInteractionFired.current = true;
      }
    } catch (error) {
      console.error("HeroSlider: audio playback failed.", error);
      setAudioState(false, false);
    }
  };

  // Attempt autoplay on mount, but only on the homepage hero.
  useEffect(() => {
    if (typeof window === "undefined" || !audioRef.current) return;
    if (!isHomeRoute) return;

    audioRef.current.volume = userEnabledAudio ? 1 : 0;

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        firstInteractionFired.current = true;
      })
      .catch(() => {
        // Blocked by browser autoplay policies until user gesture
      });
  }, [isHomeRoute]);

  // Unlock playback on first user interaction, but only while on the homepage hero.
  // A first gesture elsewhere should not re-enable the hero audio.
  useEffect(() => {
    if (typeof window === "undefined" || !audioRef.current) return;
    if (!isHomeRoute) return;

    const tryUnlockOnInteraction = () => {
      if (firstInteractionFired.current) return;
      firstInteractionFired.current = true;

      audioRef.current.volume = userEnabledAudio ? 1 : 0;

      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    };

    window.addEventListener("pointerdown", tryUnlockOnInteraction, { once: true });
    window.addEventListener("keydown", tryUnlockOnInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", tryUnlockOnInteraction);
      window.removeEventListener("keydown", tryUnlockOnInteraction);
    };
  }, [isHomeRoute, userEnabledAudio]);

  // Smoothly fade audio in/out when leaving the hero section.
  // This effect only runs while the hero slider is mounted on the homepage.
  useEffect(() => {
    if (typeof window === "undefined" || !audioRef.current) return;
    if (!isHomeRoute) return;

    const containerEl = containerRef.current;
    if (!containerEl) return;

    const handleScroll = () => {
      if (!audioRef.current) return;

      const rect = containerEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Define a longer fade distance (e.g., full height of the viewport)
      const fadeDistance = windowHeight; 
      
      let targetVolume = 0;

      // When the top of the container is above the viewport or bottom is above the top
      if (rect.bottom <= 0 || rect.top >= windowHeight) {
        targetVolume = 0;
      } else {
        // Calculate progress as it scrolls out of view downwards
        // rect.bottom goes from windowHeight down to 0 as you scroll past it
        const scrollProgress = rect.bottom / fadeDistance;
        targetVolume = Math.max(0, Math.min(1, scrollProgress));
      }

      const finalVolume = userEnabledAudio ? targetVolume : 0;
      audioRef.current.volume = finalVolume;

      // Manage playback state based on volume level to save resources
      if (finalVolume > 0.05 && !isPlaying && userEnabledAudio) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      } else if (finalVolume === 0 && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomeRoute, userEnabledAudio, isPlaying]);

  // Stop audio cleanly whenever the homepage route changes away from the hero section.
  useEffect(() => {
    if (!audioRef.current) return;

    if (!isHomeRoute) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0;
      setIsPlaying(false);
    }
  }, [isHomeRoute]);

  return (
    <div ref={containerRef} className="relative  z-0 h-[100svh] w-full overflow-hidden bg-black">
      {/* Background Audio Element */}
      <audio
        ref={audioRef}
        src={LightOnSteelAudio}
        loop
        preload="auto"
      />

      {/* Audio Toggle Control Button */}
      <div className="absolute bottom-6 right-6 z-50 flex items-center">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleAudio();
          }}
          className="group flex -mt-30 h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 cursor-pointer shadow-lg active:scale-95"
          aria-label={isPlaying ? "Mute background audio" : "Play background audio"}
        disabled={!isHomeRoute}
        >
          {isPlaying ? (
            <Volume2 size={22} className="text-white animate-pulse" />
          ) : (
            <VolumeX size={22} className="text-white/70" />
          )}
        </button>
      </div>

      {/* Top Gradient Overlay */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-24 bg-gradient-to-b from-transparent to-transparent sm:h-32 md:h-40" />

      {/* Panoramic Continuous Motion Track */}
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex h-[100svh] w-max"
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="relative flex h-full w-[max(125vw,125svh)] flex-shrink-0 items-center justify-center overflow-hidden"
          >
            <img
              src={project.imgUrl}
              srcSet={project.isLocal ? undefined : getSrcSet(project.imgUrl)}
              sizes="max(150vw, 150svh)"
              alt={project.title}
              className="block h-full w-full object-cover object-center transform-gpu md:h-auto md:object-contain"
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </motion.div>

      {/* Bottom Gradient Overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2/3 bg-gradient-to-t from-[#2E3133] via-[#2E313300] to-transparent sm:h-1/2" />

      {/* Description Overlay */}
      <div className="pointer-events-none absolute bottom-12 left-0 right-0 z-20 flex items-end justify-between p-6 text-white sm:bottom-0 sm:p-10 md:p-16">
        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl space-y-1 sm:space-y-2"
            >
              <motion.span
                className="block font-mono text-xs font-extrabold uppercase tracking-widest text-white sm:text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                {activeProject.category}
              </motion.span>

              <motion.h2
                className="font-sans text-2xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 30, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, rotateX: 40 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformPerspective: 800 }}
              >
                {activeProject.title}
              </motion.h2>

              <motion.p
                className="font-mono text-xs font-extrabold text-white sm:text-base"
                initial={{ opacity: 0, x: -30, letterSpacing: '0.3em' }}
                animate={{ opacity: 1, x: 0, letterSpacing: '0em' }}
                exit={{ opacity: 0, x: 30, letterSpacing: '0.3em' }}
                transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {activeProject.location} &bull; {activeProject.year}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HeroSlider;