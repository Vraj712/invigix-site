import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Import all components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials'; // New
import Footer from './components/Footer';             // New
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="font-sans antialiased text-dark bg-white overflow-x-hidden">
      
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      <AnimatePresence mode="wait">
        {isLoading && <Preloader setLoading={setIsLoading} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        
        {/* The Final Sections */}
        <Testimonials />
        <Footer />
        
      </main>
    </div>
  );
}

export default App;