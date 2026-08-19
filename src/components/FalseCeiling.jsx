import React, { useState, useEffect } from 'react';
import { useBackToClose } from '../hooks/useBackToClose';
// -------------------------------------------------------------
// 1. IMPORTS FOR ALL CATEGORIES
// -------------------------------------------------------------

// Living Room Images (14)
import lr0 from '../assets/living-room/living room ceiling.jpg';
import lr1 from '../assets/living-room/living room ceiling1.jpg';
import lr2 from '../assets/living-room/living room ceiling2.jpg';
import lr3 from '../assets/living-room/living room ceiling3.jpg';
import lr4 from '../assets/living-room/living room ceiling4.jpg';
import lr5 from '../assets/living-room/living room ceiling5.jpg';
import lr6 from '../assets/living-room/living room ceiling6.jpg';
import lr7 from '../assets/living-room/living room ceiling7.jpg';
import lr8 from '../assets/living-room/living room ceiling8.jpg';
import lr9 from '../assets/living-room/living room ceiling9.jpg';
import lr10 from '../assets/living-room/living room ceiling10.jpg';
import lr11 from '../assets/living-room/living room ceiling11.jpg';
import lr12 from '../assets/living-room/living room ceiling12.jpg';
import lr13 from '../assets/living-room/living room ceiling13.jpg';

const livingRoomGallery = [lr0, lr1, lr2, lr3, lr4, lr5, lr6, lr7, lr8, lr9, lr10, lr11, lr12, lr13];

// Gypsum Ceiling Images (20)
import g1 from '../assets/gypsum ceiling/1.jpg';
import g2 from '../assets/gypsum ceiling/2.jpg';
import g3 from '../assets/gypsum ceiling/3.jpg';
import g4 from '../assets/gypsum ceiling/4.jpg';
import g5 from '../assets/gypsum ceiling/5.jpg';
import g6 from '../assets/gypsum ceiling/6.jpg';
import g7 from '../assets/gypsum ceiling/7.jpg';
import g8 from '../assets/gypsum ceiling/8.jpg';
import g9 from '../assets/gypsum ceiling/9.jpg';
import g10 from '../assets/gypsum ceiling/10.jpg';
import g11 from '../assets/gypsum ceiling/11.jpg';
import g12 from '../assets/gypsum ceiling/12.jpg';
import g13 from '../assets/gypsum ceiling/13.jpg';
import g14 from '../assets/gypsum ceiling/14.jpg';
import g15 from '../assets/gypsum ceiling/15.jpg';
import g16 from '../assets/gypsum ceiling/16.jpg';
import g17 from '../assets/gypsum ceiling/17.jpg';
import g18 from '../assets/gypsum ceiling/18.jpg';
import g19 from '../assets/gypsum ceiling/19.jpg';
import g20 from '../assets/gypsum ceiling/20.jpg';

const gypsumGallery = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20];

// PVC Ceiling Images (18)
import p1 from '../assets/pvc ceiling/1.jpg';
import p2 from '../assets/pvc ceiling/2.jpg';
import p3 from '../assets/pvc ceiling/3.jpg';
import p4 from '../assets/pvc ceiling/4.jpg';
import p5 from '../assets/pvc ceiling/5.jpg';
import p6 from '../assets/pvc ceiling/6.jpg';
import p7 from '../assets/pvc ceiling/7.jpg';
import p8 from '../assets/pvc ceiling/8.jpg';
import p9 from '../assets/pvc ceiling/9.jpg';
import p10 from '../assets/pvc ceiling/10.jpg';
import p11 from '../assets/pvc ceiling/11.jpg';
import p12 from '../assets/pvc ceiling/12.jpg';
import p13 from '../assets/pvc ceiling/13.jpg';
import p14 from '../assets/pvc ceiling/14.jpg';
import p15 from '../assets/pvc ceiling/15.jpg';
import p16 from '../assets/pvc ceiling/16.jpg';
import p17 from '../assets/pvc ceiling/17.jpg';
import p18 from '../assets/pvc ceiling/18.jpg';

const pvcGallery = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18];

// Grid Ceiling Images (5)
import gr1 from '../assets/grid ceiling/1.jpg';
import gr2 from '../assets/grid ceiling/2.jpg';
import gr3 from '../assets/grid ceiling/3.jpg';
import gr4 from '../assets/grid ceiling/4.jpg';
import gr5 from '../assets/grid ceiling/5.jpg';

const gridGallery = [gr1, gr2, gr3, gr4, gr5];

// -------------------------------------------------------------
// 2. MAIN COMPONENT
// -------------------------------------------------------------

export default function FalseCeiling() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
 useBackToClose(Boolean(selectedCategory), () => {
  if (typeof setSelectedCategory === 'function') setSelectedCategory(null);
});

  // Security Features (Prevent Image Download / Copying)
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setPreviewImage(null);
        setSelectedCategory(null);
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'u' || e.key === 'i')) {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const ceilingTypes = [
    {
      id: 1,
      title: 'Modern Living Room Ceiling',
      subtitle: 'Gypsum & Ambient Cove Lighting',
      image: lr0,
      gallery: livingRoomGallery,
    },
    {
      id: 2,
      title: 'Gypsum Ceiling',
      subtitle: 'Seamless Finish & Fire Resistant',
      image: g1,
      gallery: gypsumGallery,
    },
    {
      id: 3,
      title: 'PVC False Ceiling',
      subtitle: 'Waterproof & Termite Proof',
      image: p1,
      gallery: pvcGallery,
    },
    {
      id: 4,
      title: 'Grid & Acoustic Ceiling',
      subtitle: 'Commercial & Office Elegance',
      image: gr1,
      gallery: gridGallery,
    },
  ];

  return (
    <section id="false-ceiling" className="py-20 bg-neutral-950 text-white relative overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-amber-400 text-xs md:text-sm tracking-widest uppercase font-semibold">
            ✦ Premium Interior Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-light">
            False Ceiling <span className="font-semibold text-amber-400">Solutions</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base italic">
            "Gypsum se lekar PVC tak, sab kuch ek hi chhat ke neeche"
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ceilingTypes.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCategory(item)}
              className="group relative h-80 rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer transition-all duration-500 hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/15 hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.title}
                draggable="false"
                loading='lazy'
                decoding='async'
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                <span className="text-[10px] uppercase font-semibold text-amber-400 tracking-wider">
                  {item.subtitle}
                </span>
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-amber-400/90 pt-2 flex items-center gap-1 font-medium">
                  🔍 Click to view {item.gallery.length} Designs
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Grid Modal Gallery */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4 md:p-8 overflow-y-auto animate-fadeIn">
          {/* Header Bar */}
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between pb-6 border-b border-white/10 mb-6 sticky top-0 bg-black/80 backdrop-blur-md z-20 pt-2">
            <div>
              <h3 className="text-2xl font-bold text-amber-400">{selectedCategory.title}</h3>
              <p className="text-xs text-neutral-400">Total {selectedCategory.gallery.length} Premium Designs</p>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-amber-400 hover:text-amber-300 text-sm font-semibold rounded-full border border-amber-500/30 transition-all cursor-pointer shadow-lg"
            >
              ✕ Close
            </button>
          </div>

          {/* Images Grid */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-12">
            {selectedCategory.gallery.map((imgSrc, idx) => (
              <div
                key={idx}
                onClick={() => setPreviewImage(imgSrc)}
                className="h-64 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group relative shadow-xl cursor-pointer hover:border-amber-400/50 transition-all duration-300"
              >
                <img
                  src={imgSrc}
                  alt={`Design ${idx + 1}`}
                  draggable="false"
                  loading='lazy'
                  decoding='async'
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-xs bg-amber-500/90 text-black px-3 py-1.5 rounded-full font-semibold shadow-lg">
                    🔎 Zoom View
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-amber-300 font-mono">
                  Design #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Single Image Full Zoom Overlay Modal */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-fadeIn"
        >
          <img
            src={previewImage}
            alt="Preview"
            draggable="false"
            loading='lazy'
            decoding='async'
            className="max-w-full max-h-[90vh] object-contain rounded-2xl border border-amber-500/30 shadow-2xl pointer-events-none"
          />
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-6 right-6 px-4 py-2 bg-neutral-900/80 text-amber-400 border border-amber-500/30 rounded-full text-sm font-bold"
          >
            ✕ Close Zoom
          </button>
        </div>
      )}
    </section>
  );
}