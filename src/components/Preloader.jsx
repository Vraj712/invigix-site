import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 1. Define the animation for the container holding the letters
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This tells it to wait 0.1s between animating each letter
      delayChildren: 0.3,   // Wait a tiny bit before starting the whole animation
    },
  },
};

// 2. Define the animation for each individual letter
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', damping: 12, stiffness: 100 }
  },
};

const Preloader = ({ setLoading }) => {
  const [counter, setCounter] = useState(0);
  
  // The word we want to animate, split into an array of letters
  const companyName = ['i', 'n', 'v', 'i', 'g', 'i', 'x', '.'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 800); // Wait a split second at 100% before sliding up
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <motion.div
      exit={{ y: '-100%', opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
      className="fixed inset-0 z-[9999] bg-surface flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center">
        
        {/* Staggered Text Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex pb-4 overflow-hidden"
        >
          {companyName.map((letter, index) => (
            <motion.span 
              key={index} 
              variants={letterVariants}
              className={`text-6xl md:text-8xl font-extrabold tracking-tight ${
                letter === '.' ? 'text-secondary' : 'text-dark'
              }`}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Loading Bar */}
        <div className="w-64 md:w-80 h-[2px] bg-muted/30 mt-8 relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-primary rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${counter}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="mt-4 text-xs font-bold text-primary tracking-[0.2em] uppercase flex w-64 md:w-80 justify-between">
          <span>Loading</span>
          <span>{counter > 100 ? 100 : counter}%</span>
        </div>

      </div>
    </motion.div>
  );
};

export default Preloader;