import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Starthub's smooth, gentle fade-up animation for text
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const floatAnimation = {
  y: [-10, 10],
  rotate: [-1, 1],
  transition: { repeat: Infinity, repeatType: 'reverse', duration: 3, ease: 'easeInOut' }
};

// The exact services your company offers
const companyServices = [
  "Web Development.", 
  "Graphic Design.", 
  "Full-Stack Solutions.", 
  "IT Support."
];

const Hero = () => {
  const [serviceIndex, setServiceIndex] = useState(0);

  // Automatically cycle through the services every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % companyServices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-48 pb-32 bg-[#181a29] overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* --- 1. THE 4-LAYER PARALLAX OCEAN WAVES (Moved Up & Taller) --- */}
      {/* Increased height container to allow waves to reach further up */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-[400px] pointer-events-none opacity-50">
        <style>{`
          .parallax > use {
            animation: move-waves 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
          }
          .parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 18s; fill: #22263d; }
          .parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 14s; fill: #2a2d43; }
          .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 10s; fill: #3b4371; }
          .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 7s; fill: #ffffff; }
          @keyframes move-waves {
            0% { transform: translate3d(-90px, 0, 0); }
            100% { transform: translate3d(85px, 0, 0); }
          }
        `}</style>
        
        {/* Increased SVG height from 150px to 300px to push the waves higher up the screen */}
        <svg className="absolute bottom-0 w-[200vw] h-[200px] sm:h-[300px]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" />
            <use xlinkHref="#gentle-wave" x="48" y="3" />
            <use xlinkHref="#gentle-wave" x="48" y="5" />
            <use xlinkHref="#gentle-wave" x="48" y="7" />
          </g>
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="relative flex flex-col items-center text-center">
          
          {/* --- 2. THE FLOATING ELEMENTS --- */}
          <motion.div animate={floatAnimation} className="absolute -top-16 -left-32 w-16 h-16 bg-[#2a2d43] rounded-full shadow-2xl flex items-center justify-center border border-white/5 p-3">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#7ea8be]"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" stroke="currentColor" strokeWidth="1.5"/></svg>
          </motion.div>
          
          <motion.div animate={{ y: [-15, 15], rotate: [-2, 2], transition: { repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut' } }} className="absolute top-1/4 -left-64 w-32 h-32 bg-primary rounded-[2rem] flex items-center justify-center border-4 border-white/10 shadow-3xl p-6">
             <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white"><path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.35 4.78.1.18.23.33.37.47.6.61 1.01 1.38 1.15 2.21l.14.8c.03.18.1.34.21.49.25.35.63.55 1.04.55.03 0 .07 0 .1 0H16c.41 0 .79-.2 1.04-.55.11-.15.18-.31.21-.49l.14-.8c.14-.83.55-1.6 1.15-2.21.14-.14.27-.29.37-.47.85-1.41 1.35-3.04 1.35-4.78C20.27 5.13 17.14 2 13.27 2H12zm0 2h1.27C15.93 4 18.27 6.13 18.27 9c0 1.2-.28 2.31-.76 3.29-.11.23-.21.44-.33.64-.67.68-1.13 1.55-1.28 2.49l-.1.58h-7.6l-.1-.58c-.15-.94-.61-1.81-1.28-2.49-.12-.2-.22-.41-.33-.64C6.01 11.31 5.73 10.2 5.73 9c0-2.87 2.34-5 5.27-5H12zM8.13 19l.06.33c.03.18.1.34.21.49.25.35.63.55 1.04.55.03 0 .07 0 .1 0H14c.41 0 .79-.2 1.04-.55.11-.15.18-.31.21-.49l.06-.33H8.13zM10.13 21l.06.33c.03.18.1.34.21.49.25.35.63.55 1.04.55.03 0 .07 0 .1 0H12c.41 0 .79-.2 1.04-.55.11-.15.18-.31.21-.49l.06-.33H10.13z" fill="currentColor"/></svg>
          </motion.div>
          
          <motion.div animate={{ x: [-10, 10], transition: { repeat: Infinity, repeatType: 'reverse', duration: 5, ease: 'easeInOut' } }} className="absolute top-1/3 -right-32 w-24 h-24 bg-[#3b4371] rounded-full shadow-xl flex items-center justify-center border border-white/5 p-5">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-secondary"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17C6.11 5.61 4.28 7.01 3.32 8.78 1.48 9.94.5 11.83.5 14c0 3.31 2.69 6 6 6h12c3.31 0 6-2.69 6-6 0-3.31-2.69-6-6-6zm.15 8H6.5c-2.21 0-4-1.79-4-4s1.79-4 4-4c.41 0 .8.06 1.18.17-.06.27-.09.55-.09.83 0 2.48 2.02 4.5 4.5 4.5.31 0 .61-.03.9-.1C12.7 15.82 14.19 16 15.5 16h4c2.21 0 4 1.79 4 4s-1.79 4-4 4z" fill="currentColor"/></svg>
          </motion.div>
          
          <motion.div animate={{ rotate: [-5, 5], transition: { repeat: Infinity, repeatType: 'reverse', duration: 2.5, ease: 'easeInOut' } }} className="absolute bottom-10 -right-40 w-20 h-20 bg-surface rounded-full shadow-2xl flex items-center justify-center border border-gray-100 p-5">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-dark"><path d="M12.27 2C10.59 2 8.99 2.65 7.77 3.82L5.8 5.7L6.68 6.64L8.65 4.76C9.62 3.86 10.88 3.36 12.18 3.36H12.27C14.73 3.36 16.73 5.36 16.73 7.82V12H20.27C21.94 12 23.27 13.34 23.27 15H17.73V19C17.73 20.66 16.39 22 14.73 22H11.27C10.45 22 9.68 21.68 9.12 21.12L4.31 16.32L5.2 15.43L10.01 20.24C10.35 20.58 10.8 20.73 11.27 20.73H14.73C15.68 20.73 16.45 19.96 16.45 19.01V12.73H16.73C18.66 12.73 20.23 11.16 20.23 9.23V7.82C20.23 3.36 16.73 2 12.27 2Z" fill="currentColor"/><path d="M7 10H0V16H7V10Z" fill="currentColor"/></svg>
          </motion.div>
          
          {/* --- 3. DYNAMIC ROTATING TYPOGRAPHY --- */}
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="w-full flex flex-col items-center z-20">
            <motion.h1 variants={fadeUp} className="text-[55px] sm:text-6xl lg:text-[75px] font-bold text-white leading-[1.1] mb-8 tracking-[-0.03em] max-w-5xl">
              Experience <span className="relative inline-block text-accent mr-2">magical
                {/* SVG Underline */}
                <svg className="absolute w-full h-4 -bottom-3 left-0 text-accent group-hover:text-white" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 C25,-10 50,30 100,10 V20 H0 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="1000" className="animate-underline-draw" />
                </svg>
              </span> 
              
              <br className="hidden md:block" />
              
              {/* Rotating Services Animation */}
              <span className="inline-flex min-w-[350px] justify-center md:justify-start">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-block text-white"
                  >
                    {companyServices[serviceIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>

              {/* Pencil icon */}
              <svg className="absolute w-12 h-12 -top-6 -right-10 text-primary hidden md:block" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M16 8l-8 8" stroke="currentColor" strokeWidth="1.5"/><path d="M12 6L8 8" stroke="currentColor" strokeWidth="1.5"/><path d="M16 12L16 8" stroke="currentColor" strokeWidth="1.5"/></svg>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-white/70 mb-10 leading-relaxed max-w-lg">
              Use customer data to build great and solid digital experiences that convert and accelerate your business growth.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
              <div className="relative group">
                <a href="#contact" className="relative bg-white text-dark px-10 py-5 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center gap-3">
                  Let's talk — Limited Time Offer
                </a>
                <div className="absolute -top-12 -right-12 bg-secondary p-4 rounded-full shadow-xl flex items-center justify-center text-white font-black text-xs group-hover:-translate-y-1 group-hover:rotate-12 transition-all">
                  20%<br/>OFF
                </div>
              </div>
              <motion.div variants={fadeUp} className="mt-4 text-sm text-gray-400 font-bold uppercase tracking-widest flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                Try for free. No credit card required.
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </div>
      
      {/* --- 4. THE CLIENT LOGO BAR --- */}
      <div className="relative mt-20 pt-10 border-t border-gray-100/5 select-none z-10 w-full bg-[#181a29] flex justify-center py-6">
        <div className="w-[1320px] px-8 flex items-center justify-around text-white/30 font-black text-3xl uppercase tracking-widest">
            <span>Spotify</span>
            <span>Nike</span>
            <span>AMD</span>
            <span>Apper</span>
            <span>Logitech</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;