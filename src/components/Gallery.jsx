import React, { useState } from 'react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Categories with "False Ceiling" right next to "All"
  const categories = [
    'All',
    'False Ceiling',
    'Interior',
    'Exterior',
    'Waterproofing',
    'Wood Finish',
  ];

  // Gallery items data
  const galleryItems = [
    {
      id: 1,
      title: 'Modern Living False Ceiling',
      category: 'False Ceiling',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      title: 'Luxury Interior Lounge',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      title: 'Minimalist False Ceiling & Cove Light',
      category: 'False Ceiling',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      title: 'Exterior Modern Villa Finish',
      category: 'Exterior',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=50',
    },
    {
      id: 5,
      title: 'Damp-Proof Waterproofing',
      category: 'Waterproofing',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=50',
    },
    {
      id: 6,
      title: 'Teak Wood Premium Finish',
      category: 'Wood Finish',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=50',
    },
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-amber-400 text-xs md:text-sm tracking-widest uppercase font-semibold block">
            📸 IMAGE GALLERY
          </span>
          <h2 className="text-3xl md:text-5xl font-light">
            हमारी <span className="font-semibold text-amber-400">गैलरी</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
            A glimpse of premium paints, finishes & false ceiling work.
          </p>
        </div>

        {/* Category Buttons Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-lg shadow-amber-400/20 scale-105 font-semibold'
                  : 'bg-neutral-900/80 text-neutral-300 border-white/10 hover:border-amber-400/40 hover:bg-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-72 rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-500 shadow-2xl bg-neutral-900/40"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Text & Tag Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] px-3 py-1 rounded-full font-mono uppercase tracking-wider inline-block mb-2 backdrop-blur-md">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}