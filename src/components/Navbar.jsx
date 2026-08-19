import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'False Ceiling', href: '#false-ceiling' },
    { name: 'Colours', href: '#colours' },
    { name: 'Tools', href: '#tools' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full border-2 border-amber-400/80 p-0.5 overflow-hidden bg-neutral-900 shrink-0 shadow-md shadow-amber-500/20">
              <img 
                src="/WhatsApp_Image_2026-07-19_at_13.57.26.jpeg" 
                alt="New Bhagwati Traders Logo" 
                width="44"
                height="44"
                loading="eager"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h1 className="font-semibold text-lg tracking-wide text-white">न्यू भगवती ट्रेडर्स</h1>
              <p className="text-[10px] text-amber-400/90 tracking-widest uppercase">Birla Opus Authorized Dealer</p>
            </div>
          </div>

          {/* Desktop Nav Links & Call Button */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919876543210"
              className="relative group overflow-hidden px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 font-medium text-sm text-neutral-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2 font-semibold">
                <span>📞</span> Call Now
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Aesthetic Hamburger Toggle Button */}
          <div className="flex items-center">
            <button
              aria-label="Toggle Navigation Menu"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-amber-400 hover:text-amber-300 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 focus:outline-none"
            >
              {isOpen ? (
                <span className="text-xl font-bold block w-6 h-6 leading-none">✕</span>
              ) : (
                <div className="space-y-1.5 w-6">
                  <span className="block h-0.5 bg-amber-400 rounded-full transition-all" />
                  <span className="block h-0.5 bg-amber-400/80 rounded-full w-4 ml-auto" />
                  <span className="block h-0.5 bg-amber-400 rounded-full" />
                </div>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Futuristic Glassmorphic Dropdown Menu */}
      {isOpen && (
        <div className="bg-neutral-900/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 py-8">
            
            {/* Menu Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group relative p-3.5 rounded-xl bg-neutral-800/40 border border-white/5 hover:border-amber-400/40 hover:bg-neutral-800/80 transition-all duration-300 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-amber-300 transition-colors">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Futuristic Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-semibold text-sm shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>📞</span> Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/30 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all"
              >
                <span>💬</span> WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}