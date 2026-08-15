import { useState, useEffect } from 'react';
import './LoadingScreen.css';

// SVG Cloud component for realistic cloud shapes
const Cloud = ({ className, style }) => (
  <svg className={`cloud-svg ${className}`} style={style} viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="cloud-blur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
      </filter>
      <linearGradient id="cloud-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
        <stop offset="50%" stopColor="rgba(240,240,240,0.9)" />
        <stop offset="100%" stopColor="rgba(220,220,220,0.85)" />
      </linearGradient>
    </defs>
    <path 
      d="M30,70 Q30,50 50,50 Q50,30 80,30 Q100,10 130,30 Q160,25 170,45 Q190,45 190,65 Q190,80 170,80 L40,80 Q20,80 20,70 Z" 
      fill="url(#cloud-gradient)"
      filter="url(#cloud-blur)"
    />
    {/* Additional puffs for realism */}
    <circle cx="60" cy="45" r="25" fill="rgba(255,255,255,0.9)" filter="url(#cloud-blur)" />
    <circle cx="100" cy="35" r="30" fill="rgba(250,250,250,0.95)" filter="url(#cloud-blur)" />
    <circle cx="140" cy="40" r="28" fill="rgba(245,245,245,0.9)" filter="url(#cloud-blur)" />
    <circle cx="80" cy="55" r="22" fill="rgba(240,240,240,0.85)" filter="url(#cloud-blur)" />
    <circle cx="120" cy="50" r="26" fill="rgba(235,235,235,0.9)" filter="url(#cloud-blur)" />
  </svg>
);

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete?.();
          }, 800);
          return 100;
        }
        return Math.min(prev + 1, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  const cloudOpacity = 1 - progress / 100;
  const fogOpacity = cloudOpacity * 0.9;

  return (
    <div className="loading-screen">
      {/* Sky background - starts overcast, becomes clear blue */}
      <div className="sky-gradient" />
      
      {/* Clear sky reveal layer */}
      <div 
        className="clear-sky-reveal"
        style={{ opacity: progress / 100 }}
      />

      {/* Cloud layers - positioned at different depths */}
      <div className="clouds-layer" style={{ opacity: cloudOpacity }}>
        {/* Background clouds (far away, smaller, more blurred) */}
        <Cloud className="cloud-far cloud-far-1" />
        <Cloud className="cloud-far cloud-far-2" />
        <Cloud className="cloud-far cloud-far-3" />
        
        {/* Mid-ground clouds */}
        <Cloud className="cloud-mid cloud-mid-1" />
        <Cloud className="cloud-mid cloud-mid-2" />
        <Cloud className="cloud-mid cloud-mid-3" />
        
        {/* Foreground clouds (larger, less blurred) */}
        <Cloud className="cloud-near cloud-near-1" />
        <Cloud className="cloud-near cloud-near-2" />
        <Cloud className="cloud-near cloud-near-3" />
        <Cloud className="cloud-near cloud-near-4" />
      </div>

      {/* Fog/Mist layers */}
      <div className="fog-layer fog-1" style={{ opacity: fogOpacity }} />
      <div className="fog-layer fog-2" style={{ opacity: fogOpacity * 0.7 }} />
      <div className="fog-layer fog-3" style={{ opacity: fogOpacity * 0.5 }} />
      
      {/* Atmospheric haze */}
      <div className="atmospheric-haze" style={{ opacity: fogOpacity * 0.6 }} />

      {/* Progress indicator */}
      <div className="progress-container" aria-live="polite" aria-label="Loading progress">
        <div className="progress-ring-wrapper">
          <svg className="progress-ring-svg" viewBox="0 0 120 120">
            <circle 
              className="progress-ring-bg" 
              cx="60" 
              cy="60" 
              r="54"
            />
            <circle 
              className="progress-ring-progress" 
              cx="60" 
              cy="60" 
              r="54"
              style={{
                strokeDashoffset: 339.292 - (339.292 * progress) / 100
              }}
            />
          </svg>
          <div className="progress-value">
            <span className="progress-number">{Math.floor(progress)}</span>
            <span className="progress-percent">%</span>
          </div>
        </div>
      </div>

      {/* Loading text */}
      <div className="loading-text" style={{ opacity: fogOpacity }}>
        Loading experience...
      </div>
    </div>
  );
};

export default LoadingScreen;