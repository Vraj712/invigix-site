import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Import all your components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // Import the new section!
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import CustomCursor from './components/CustomCursor';

function App() {
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
    <div className="font-sans antialiased text-dark bg-surface overflow-x-hidden">
      
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      <AnimatePresence mode="wait">
        {isLoading && <Preloader setLoading={setIsLoading} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        {/* Place the About section right after the Hero */}
        <About />
        <Services />
        <Process />
        <Team />
      </main>
    </div>
  );
}

export default App;