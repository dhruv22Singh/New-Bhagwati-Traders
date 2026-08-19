import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 overflow-hidden">
      
      {/* Background Neon Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-400/10 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Main Futuristic Container */}
      <div className="relative flex flex-col items-center gap-6">
        
        {/* Animated Glow Rings around Logo */}
        <div className="relative flex items-center justify-center w-28 h-28">
          
          {/* Outer Rotating Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-amber-400 border-r-amber-500/50 animate-spin"></div>
          
          {/* Inner Counter-Rotating Ring */}
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-amber-300 border-l-amber-500/30 animate-[spin_1.5s_linear_infinite_reverse]"></div>

          {/* Logo Image */}
          <div className="w-20 h-20 rounded-full border border-amber-400/40 p-1 bg-neutral-900/90 shadow-xl shadow-amber-500/20 overflow-hidden flex items-center justify-center">
            <img 
              src="/WhatsApp_Image_2026-07-19_at_13.57.26.jpeg" 
              alt="Loading Logo"width="56" height="56" loading="lazy"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Text & Progress Bar */}
        <div className="flex flex-col items-center gap-3 text-center">
          
          {/* Brand Name */}
          <h2 className="text-xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
            न्यू भगवती ट्रेडर्स
          </h2>

          <p className="text-[10px] tracking-[0.25em] text-amber-400/80 uppercase font-semibold">
            Birla Opus Authorized Dealer
          </p>

          {/* Futuristic Loading Line */}
          <div className="w-48 h-1 bg-neutral-800 rounded-full overflow-hidden mt-2 relative">
            <div className="h-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full animate-[pulse_1s_infinite] w-full origin-left scale-x-100 transition-transform duration-1000"></div>
          </div>

          <span className="text-xs text-neutral-400 font-mono tracking-widest mt-1 animate-pulse">
            LOADING EXPERIENCE...
          </span>

        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;