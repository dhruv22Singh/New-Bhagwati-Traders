import React, { useState, useRef } from 'react';
import videoSrc from '../assets/paint-flow.mp4'; // Aapka video path

export default function VideoSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      // Direct DOM level element attribute change
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);

      // Sound play ki browser protection bypass karne ke liye explicitly play trigger
      if (!newMutedState) {
        videoRef.current.play().catch((err) => console.log('Autoplay error:', err));
      }
    }
  };

  return (
    <section className="py-12 bg-neutral-950 text-white flex justify-center px-4">
      <div className="max-w-5xl w-full bg-neutral-900/80 border border-amber-500/30 rounded-3xl overflow-hidden p-3 md:p-5 shadow-2xl relative">
        
        {/* Video Container */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload='none'
            className="w-full h-full object-contain pointer-events-none"
          />

          {/* Mute/Unmute Toggle Button */}
          <button
            onClick={toggleMute}
            type="button"
            className="absolute top-4 right-4 z-20 bg-neutral-900/90 hover:bg-neutral-800 text-amber-400 border border-amber-500/50 px-4 py-2 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2 backdrop-blur-md transition-all shadow-xl active:scale-95 cursor-pointer"
          >
            {isMuted ? '🔇' : '🔊'}
          </button>

          {/* Bottom Tag */}
          
        </div>

      </div>
    </section>
  );
}