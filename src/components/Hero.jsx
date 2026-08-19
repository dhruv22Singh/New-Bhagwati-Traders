import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    badge: 'Wood Elegance',
    title: 'Wood Finishes with',
    highlight: 'Birla Opus',
    desc: 'Premium Coatings for a Luxurious Look – Premium Interior, Exterior Paints & False Ceiling Solutions.',
    bgImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=50&w=600'
  },
  {
    id: 2,
    badge: 'Interior Luxe',
    title: 'Transform Spaces with',
    highlight: 'Vibrant Colors',
    desc: 'Explore over 2000+ shades designed to bring life and elegance to your dream home.',
    bgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=50&w=600'
  },
  {
    id: 3,
    badge: 'Modern Ceilings',
    title: 'Aesthetic & Premium',
    highlight: 'False Ceiling',
    desc: 'Seamless architectural lighting & false ceiling solutions tailored for modern spaces.',
    bgImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=50&w=600'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);

  return (
    <section className="relative w-full h-screen min-h-[650px] bg-neutral-900 text-white overflow-hidden flex items-center pt-16">
      {/* Background Images with Aesthetic Dark Overlay */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } transition-transform duration-1000`}
        >
          <img
            src={slide.bgImage}
            alt={slide.title}
            fetchPriority={index=== 0?"high" : "low"}
            loading={index === 0 ? "eager" : "lazy"}
            decoding='async'
            className="w-full h-full object-cover"
          />
          {/* Subtle Dark Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
        </div>
      ))}

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28">
        <div className="max-w-2xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-sm tracking-wide font-medium">
            <span>★</span>
            <span>{heroSlides[current].badge}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/80">Birla Opus Authorized Dealer</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight text-white">
            {heroSlides[current].title}{' '}
            <span className="font-semibold text-amber-400 block sm:inline">
              {heroSlides[current].highlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-neutral-300 font-normal leading-relaxed max-w-xl">
            {heroSlides[current].desc}
          </p>

          {/* Aesthetic Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all text-sm font-medium"
            >
              <FileText size={18} />
              <span>Get Quote</span>
            </a>

            <a
              href="tel:+918271805067" // अपना फोन नंबर यहाँ डालें
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-medium text-sm transition-all shadow-lg shadow-amber-500/20"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/9958914873" // अपना व्हाट्सएप नंबर यहाँ डालें
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600/90 hover:bg-emerald-600 backdrop-blur-md border border-emerald-400/30 text-white text-sm font-medium transition-all"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Experience & Customers Stats */}
          <div className="grid grid-cols-4 gap-6 pt-8 border-t border-white/10 max-w-lg">
            <div>
              <div className="text-2xl font-semibold text-white">1000+</div>
              <div className="text-xs text-neutral-400">Customers</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">2000+</div>
              <div className="text-xs text-neutral-400">Colour Shades</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-amber-400">8+</div>
              <div className="text-xs text-neutral-400">Years Exp.</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">100%</div>
              <div className="text-xs text-neutral-400">Genuine</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-6 bottom-12 z-20 hidden md:flex items-center gap-3">
        <button
        aria-label='Previous Slide'
          onClick={() => setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
        aria-label='Next Slide'
          onClick={() => setCurrent((prev) => (prev + 1) % heroSlides.length)}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Bottom Dots (Clean & Separated) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            aria-label={'Go to slide ${i + 1}'}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-amber-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}