import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveAnimation from './components/InteractiveAnimation';
import Tools from './components/Tools';
import Products from './components/Products';
import ColourShades from './components/ColourShades';
import FalseCeiling from './components/FalseCeiling';

import Reviews from './components/Reviews';
import Payment from './components/Payment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Chatbot from './components/chatbot';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 सेकंड टाइमर

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className="bg-neutral-950 text-white min-h-screen font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* 1. Header Navigation */}
      <Navbar />

      <main>
        {/* 2. Top Banner / Video */}
        <Hero />

        {/* 3. Interactive Animation */}
        <InteractiveAnimation />

        {/* 4. Calculator / Tools */}
        <Tools />

        {/* 5. Products */}
        <Products />

        {/* 6. Trending Colour Shades */}
        <ColourShades />

        {/* 7. False Ceiling Solutions (Trending shades ke turant baad) */}
        <FalseCeiling />

       

        {/* 9. Reviews */}
        <Reviews />
        {/*10.Secure upi Payment*/}
        <Payment/>

        {/* 11. Enquiry / Contact Form (Reviews ke turant baad) */}
        <Contact />
      </main>

      {/* 12. Footer & Floating Buttons */}
      <Footer />
      <FloatingButtons />
      <Chatbot/>
    </div>
  );
}

export default App;