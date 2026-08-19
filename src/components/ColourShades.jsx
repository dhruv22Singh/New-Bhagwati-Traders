import React, { useState } from 'react';

export default function ColourShades() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedCode, setCopiedCode] = useState(null);

  const categories = ['All', 'Aesthetic Neutrals', 'Trending Greens', 'Luxury Blues', 'Warm Terracotta', 'Royal Purples'];

  const shades = [
    // Trending Greens
    { name: 'Sage Sanctuary', hex: '#9CAF88', category: 'Trending Greens' },
    { name: 'Emerald Royalty', hex: '#0F5257', category: 'Trending Greens' },
    { name: 'Muted Forest', hex: '#4A5D4E', category: 'Trending Greens' },
    
    // Luxury Blues
    { name: 'Midnight Opulence', hex: '#1B263B', category: 'Luxury Blues' },
    { name: 'Oceanic Depth', hex: '#2C5E7A', category: 'Luxury Blues' },
    { name: 'Celestial Dust', hex: '#6B8E9B', category: 'Luxury Blues' },

    // Aesthetic Neutrals
    { name: 'Champagne Beige', hex: '#E6D7C3', category: 'Aesthetic Neutrals' },
    { name: 'Warm Mocha', hex: '#795548', category: 'Aesthetic Neutrals' },
    { name: 'Creamy Linen', hex: '#F3EFE0', category: 'Aesthetic Neutrals' },

    // Warm Terracotta
    { name: 'Burnt Terracotta', hex: '#C86D51', category: 'Warm Terracotta' },
    { name: 'Sunset Amber', hex: '#D97736', category: 'Warm Terracotta' },
    { name: 'Dusty Peach', hex: '#E0A899', category: 'Warm Terracotta' },

    // Royal Purples & Pinks
    { name: 'Velvet Plum', hex: '#4A2E35', category: 'Royal Purples' },
    { name: 'Dusty Rose', hex: '#B87D82', category: 'Royal Purples' },
    { name: 'Mauve Elegance', hex: '#8E6C88', category: 'Royal Purples' },
  ];

  const filteredShades = selectedCategory === 'All' 
    ? shades 
    : shades.filter(shade => shade.category === selectedCategory);

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedCode(hex);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="colours" className="py-20 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-amber-400 text-xs md:text-sm tracking-widest uppercase font-semibold">
            ✦ Birla Opus Palette 2026
          </span>
          <h2 className="text-3xl md:text-5xl font-light">
            Explore <span className="font-semibold text-amber-400">Trending Shades</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
            Click any color card to copy its color code for your interior design plan.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-lg shadow-amber-400/20 scale-105'
                  : 'bg-neutral-900/80 text-neutral-300 border-white/10 hover:border-amber-400/40 hover:bg-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Color Palette Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filteredShades.map((shade, idx) => (
            <div
              key={idx}
              onClick={() => handleCopy(shade.hex)}
              className="group cursor-pointer rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-amber-400/50 p-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Color Swatch */}
              <div
                className="w-full h-32 rounded-xl transition-transform duration-500 group-hover:scale-105 relative flex items-center justify-center shadow-inner"
                style={{ backgroundColor: shade.hex }}
              >
                {/* Copy Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl backdrop-blur-[2px]">
                  <span className="bg-neutral-950/80 text-amber-300 border border-amber-400/30 text-xs px-3 py-1.5 rounded-full font-mono">
                    {copiedCode === shade.hex ? '✓ Copied!' : 'Copy Code'}
                  </span>
                </div>
              </div>

              {/* Color Info */}
              <div className="mt-3 text-center space-y-0.5">
                <h3 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors truncate">
                  {shade.name}
                </h3>
                <p className="text-xs text-neutral-400 font-mono">
                  {shade.hex}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}