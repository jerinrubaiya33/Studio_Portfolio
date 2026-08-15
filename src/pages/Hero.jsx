import React, { useState, useRef, useEffect } from "react";
import archVideo from "/src/assets/arch.mp4"; 

function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  
  // Track the pending play promise to avoid race conditions on rapid clicks
  const playPromiseRef = useRef(null);

  // Sync state with the actual HTML5 video element safely
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      // Initiate play and store the promise
      playPromiseRef.current = video.play();
      playPromiseRef.current.catch((err) => {
        // Handle play interruption gracefully without freezing state
        if (err.name !== "AbortError") {
          console.log("Video play error:", err);
        }
      });
    } else {
      // If a play request is pending, wait for it before calling pause()
      if (playPromiseRef.current !== null) {
        playPromiseRef.current
          .then(() => {
            video.pause();
          })
          .catch(() => {
            // If play was aborted, ensure pause state is synchronized
            video.pause();
          });
      } else {
        video.pause();
      }
    }
  }, [isPlaying]);

  const handleVideoToggle = (e) => {
    e.stopPropagation();
    setIsPlaying((prev) => !prev);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    if (total > 0) {
      setProgress((current / total) * 100);
    }
  };

  return (
    <div 
      className={`relative z-30 flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-75 sm:pt-24 text-center transition-colors duration-700 ease-out shadow-[0_-20px_50px_rgba(0,0,0,0.3)] 
        w-full aspect-video md:h-auto md:min-h-[70vh] md:max-h-[680px] 
        -mt-42 sm:-mt-28 md:-mt-34 select-none
        ${isPlaying ? "bg-[#3c472b]" : "bg-[#2a2c2a]"}`}
    >
      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 w-full bg-black/5 h-[3px] z-30 pointer-events-none">
        <div 
          className={`h-full transition-all duration-150 ease-out ${
            isPlaying ? "bg-[#ff7b00]" : "bg-[#ff7b00]/60"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className={`absolute inset-0 h-full w-full object-cover select-none transition-all duration-700 ease-out pointer-events-none ${
          isPlaying 
            ? "scale-100 blur-0 opacity-100 brightness-100" 
            : "scale-[0.998] blur-[0px] opacity-90 brightness-80 contrast-100"
        }`}
        style={{ zIndex: -2 }}
      >
        <source src={archVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dynamic Overlay Sheet */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          isPlaying ? "bg-black/0 opacity-100" : "bg-zinc-200/10 opacity-100"
        }`}
        style={{ zIndex: -1 }}
      />

      {/* Bottom Left Watermark */}
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 md:bottom-11 md:left-16 z-10 pointer-events-none select-none text-left">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white/40 leading-none">
          studio<span className="text-[#ff7b00]/70">DNA</span>
        </h1>
      </div>

      {/* Bottom Right Control Container */}
      <div 
        onClick={handleVideoToggle}
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-11 md:right-21 z-20 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center cursor-pointer pointer-events-auto"
      >
        {/* Pause Icon */}
        <div 
          className={`absolute p-3 sm:p-4 rounded-full backdrop-blur-md border border-white/10 text-white transition-all duration-700 ease-out shadow-lg hover:scale-105 ${
            isPlaying ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-75 translate-y-4 invisible pointer-events-none"
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </div>

        {/* Resume Icon */}
        <div 
          className={`absolute p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-700 ease-out shadow-lg hover:scale-105 ${
            isPlaying ? "opacity-0 scale-75 translate-y-4 invisible pointer-events-none" : "opacity-100 scale-100 translate-y-0 visible"
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

    </div>
  );
}

export default Hero;