import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Import all your components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import CustomCursor from './components/CustomCursor';

function App() {
  // State to control whether the website is "loading" or ready
  const [isLoading, setIsLoading] = useState(true);

  // This stops the user from scrolling while the loading screen is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    // Updated to use your new custom 'surface' and 'dark' colors, and prevents side-scrolling
    <div className="font-sans antialiased text-dark bg-surface overflow-x-hidden">
      
      {/* The Magnetic Cursor (Hidden on mobile screens) */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      {/* AnimatePresence allows the Preloader to animate OUT when it unmounts */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader setLoading={setIsLoading} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Team />
      </main>
    </div>
  );
}

export default App;