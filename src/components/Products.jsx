import React, { useState, useEffect, useCallback } from 'react';
import { useBackToClose } from '../hooks/useBackToClose';

// -------------------------------------------------------------
// 1. IMPORTS FOR ALL PRODUCT CATEGORIES
// -------------------------------------------------------------

// Interior Paints (14)
import int1 from '../assets/interior paints/interior1.jpg';
import int2 from '../assets/interior paints/interior2.jpg';
import int3 from '../assets/interior paints/interior3.jpg';
import int4 from '../assets/interior paints/interior4.jpg';
import int5 from '../assets/interior paints/interior5.jpg';
import int6 from '../assets/interior paints/interior6.jpg';
import int7 from '../assets/interior paints/interior7.jpg';
import int8 from '../assets/interior paints/interior8.jpg';
import int9 from '../assets/interior paints/interior9.jpg';
import int10 from '../assets/interior paints/interior10.jpg';
import int11 from '../assets/interior paints/interior11.jpg';
import int12 from '../assets/interior paints/interior12.jpg';
import int13 from '../assets/interior paints/interior13.jpg';
import int14 from '../assets/interior paints/interior14.jpg';

const interiorGallery = [int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, int14];

// Exterior Paints (7)
import ext1 from '../assets/exterior paints/exterior1.jpg';
import ext2 from '../assets/exterior paints/exterior2.jpg';
import ext3 from '../assets/exterior paints/exterior3.jpg';
import ext4 from '../assets/exterior paints/exterior4.jpg';
import ext5 from '../assets/exterior paints/exterior5.jpg';
import ext6 from '../assets/exterior paints/exterior6.jpg';
import ext7 from '../assets/exterior paints/exterior7.jpg';

const exteriorGallery = [ext1, ext2, ext3, ext4, ext5, ext6, ext7];

// Waterproofing (4)
import wp1 from '../assets/waterproofing/waterproofing1.jpg';
import wp2 from '../assets/waterproofing/waterproofing2.jpg';
import wp3 from '../assets/waterproofing/waterproofing3.jpeg';
import wp4 from '../assets/waterproofing/waterproofin4.jpeg';

const waterproofingGallery = [wp1, wp2, wp3, wp4];

// Wall Putty & Primer (5)
import put1 from '../assets/wall putty primer/putty1.jpeg';
import put2 from '../assets/wall putty primer/putty2.jpeg';
import put3 from '../assets/wall putty primer/putty3.jpeg';
import put4 from '../assets/wall putty primer/putty4.jpeg';
import put5 from '../assets/wall putty primer/putty5.jpeg';

const puttyGallery = [put1, put2, put3, put4, put5];

// -------------------------------------------------------------
// 2. MAIN PRODUCTS COMPONENT
// -------------------------------------------------------------

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // FIX: useCallback ka use kiya taaki re-render par ye function change na ho
  const handleCloseModals = useCallback(() => {
    setSelectedProduct(null);
    setPreviewImage(null);
  }, []);

  useBackToClose(Boolean(selectedProduct || previewImage), handleCloseModals);

  // Security Features (Prevent Image Downloading & Copying)
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setPreviewImage(null);
        setSelectedProduct(null);
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

  const productsList = [
    {
      id: 1,
      tag: '✦ Interior',
      title: 'Interior Paints',
      description: 'Premium luxury interior paints with superior coverage, washable finish & 2000+ shades.',
      image: int1,
      gallery: interiorGallery,
    },
    {
      id: 2,
      tag: '✦ Exterior',
      title: 'Exterior Paints',
      description: 'Weather-proof, UV-resistant exterior coatings that protect and beautify your walls for years.',
      image: ext1,
      gallery: exteriorGallery,
    },
    {
      id: 3,
      tag: '✦ Protection',
      title: 'Waterproofing Solutions',
      description: 'Advanced waterproofing solutions for terrace, basement, bathroom & wet areas.',
      image: wp1,
      gallery: waterproofingGallery,
    },
    {
      id: 4,
      tag: '✦ Smooth Finish',
      title: 'Wall Putty & Primer',
      description: 'Smooth white cement-based putty & acrylic primers for silky wall base.',
      image: put1,
      gallery: puttyGallery,
    },
  ];

  return (
    <section id="products" className="py-20 bg-neutral-950 text-white relative overflow-hidden select-none">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-amber-400 text-xs md:text-sm tracking-widest uppercase font-semibold">
            Birla Opus Authorized Dealer
          </span>
          <h2 className="text-3xl md:text-5xl font-light">
            Our Luxury <span className="font-semibold text-amber-400">Products</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base italic">
            Engineered with German technology for vibrant longevity, rich sheen, and unmatched wall protection.
          </p>
        </div>

        {/* 4 Main Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsList.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative h-96 rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer transition-all duration-500 hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/15 hover:scale-[1.01]"
            >
              <img
                src={product.image}
                alt={product.title}
                draggable="false"
                loading='lazy'
                decoding='async'
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                <span className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-[11px] uppercase font-semibold text-amber-300 backdrop-blur-md">
                  {product.tag}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-neutral-300 line-clamp-2">
                  {product.description}
                </p>
                <div className="pt-3 flex items-center justify-between">
                  <span className="text-xs text-amber-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Products ({product.gallery.length} Images) →
                  </span>
                  <span className="text-[10px] uppercase font-mono text-neutral-500">
                    BIRLA OPUS
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Grid Gallery Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4 md:p-8 overflow-y-auto animate-fadeIn">
          {/* Header */}
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between pb-6 border-b border-white/10 mb-6 sticky top-0 bg-black/80 backdrop-blur-md z-20 pt-2">
            <div>
              <h3 className="text-2xl font-bold text-amber-400">{selectedProduct.title}</h3>
              <p className="text-xs text-neutral-400">Viewing {selectedProduct.gallery.length} High-Quality Product Images</p>
            </div>
            <button
              onClick={() => setSelectedProduct(null)}
              className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-amber-400 hover:text-amber-300 text-sm font-semibold rounded-full border border-amber-500/30 transition-all cursor-pointer shadow-lg"
            >
              ✕ Close
            </button>
          </div>

          {/* Image Grid */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-12">
            {selectedProduct.gallery.map((imgSrc, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  e.stopPropagation(); 
                  setPreviewImage(imgSrc);
                }}
                className="h-64 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group relative shadow-xl cursor-pointer hover:border-amber-400/50 transition-all duration-300"
              >
                <img
                  src={imgSrc}
                  alt={`Product ${idx + 1}`}
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
                  {selectedProduct.title} #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Full Zoom Modal Overlay */}
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
            onClick={(e) => e.stopPropagation()} 
            className="max-w-full max-h-[90vh] object-contain rounded-2xl border border-amber-500/30 shadow-2xl"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPreviewImage(null);
            }}
            className="absolute top-6 right-6 px-4 py-2 bg-neutral-900/80 text-amber-400 border border-amber-500/30 rounded-full text-sm font-bold cursor-pointer hover:bg-neutral-800 transition-colors"
          >
            ✕ Close Zoom
          </button>
        </div>
      )}
    </section>
  );
}