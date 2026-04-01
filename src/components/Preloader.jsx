import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ setLoading }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Simulate the loading progress
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Trigger the removal of the preloader a split second after hitting 100%
          setTimeout(() => {
            setLoading(false);
          }, 600);
          return 100;
        }
        // Randomize the loading jumps to feel like real network loading
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <motion.div
      // The exit animation: Slides the whole white screen up and out of view
      exit={{ y: '-100%', opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center">
        {/* Company Name Reveal */}
        <div className="overflow-hidden pb-2">
          <motion.h1 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight"
          >
            Invigix<span className="text-indigo-600">.</span>
          </motion.h1>
        </div>

        {/* Loading Bar */}
        <div className="w-64 md:w-80 h-[2px] bg-gray-200 mt-8 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-indigo-600"
            initial={{ width: '0%' }}
            animate={{ width: `${counter}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="mt-4 text-sm font-bold text-gray-400 tracking-widest flex w-64 md:w-80 justify-between">
          <span>LOADING</span>
          <span>{counter > 100 ? 100 : counter}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;