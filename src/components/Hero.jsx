import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Animation for text masking (sliding up from an invisible bounding box)
const maskText = {
  hidden: { y: "100%" },
  visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]); // Parallax effect for images
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]); // Reverse parallax for text
  
  // Interactive Ambient Background state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized mouse position (-1 to 1) for smoother background movement
      const x = (e.clientX / window.innerWidth - 0.5) * 40; 
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="pt-40 pb-32 bg-surface relative overflow-hidden min-h-screen flex items-center">
      
      {/* 1. Kinetic Background Marquee Text (Like Deon Theme) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden select-none whitespace-nowrap">
        <motion.h1 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="text-[20rem] font-black uppercase"
        >
          INVIGIX TECH SOLUTIONS INVIGIX TECH SOLUTIONS
        </motion.h1>
      </div>

      {/* 2. Interactive Ambient 3D Glows (Like AI Software Theme) */}
      <motion.div 
        animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-20 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] z-0 pointer-events-none" 
      />
      <motion.div 
        animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[150px] z-0 pointer-events-none" 
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Typography */}
          <motion.div 
            className="w-full lg:w-[60%]"
            style={{ y: y2 }} // Applies scroll parallax
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          >
            {/* The "Masking" technique for the title */}
            <h1 className="text-[55px] sm:text-6xl lg:text-[75px] font-extrabold text-dark leading-[1.1] mb-6 tracking-tight">
              <div className="overflow-hidden pb-2"><motion.div variants={maskText}>Get Solid Solution</motion.div></div>
              <div className="overflow-hidden pb-2">
                <motion.div variants={maskText} className="text-primary relative inline-block">
                  Reliable & Secure
                  <svg className="absolute w-full h-3 -bottom-2 left-0 text-secondary/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="5" />
                  </svg>
                </motion.div>
              </div>
              <div className="overflow-hidden pb-2"><motion.div variants={maskText}>Managed IT.</motion.div></div>
            </h1>

            <div className="overflow-hidden mb-10">
              <motion.p variants={maskText} className="text-lg text-primary/80 max-w-lg font-medium leading-relaxed">
                Best solutions for big data & Technology services. We provide innovative, reliable, and responsive IT solutions that keep your operations running smoothly.
              </motion.p>
            </div>
            
            <motion.div variants={maskText} className="flex flex-wrap items-center gap-6">
              <a href="#services" className="bg-primary text-white px-9 py-4 rounded-full font-bold hover:bg-dark hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-primary/20">
                Our all Services
              </a>
              <a href="#contact" className="text-dark font-bold hover:text-secondary transition-colors flex items-center gap-3 group">
                Contact us
                <span className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14M12 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Floating Parallax Images */}
          <motion.div 
            style={{ y: y1 }} // Moves down slowly as you scroll down
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full lg:w-[40%] relative h-[500px] lg:h-[650px]"
          >
            <div className="absolute inset-0 md:right-0 md:top-10 md:bottom-10 bg-muted/20 rounded-[40px] overflow-hidden shadow-2xl z-10 border-[6px] border-white">
               <img 
                 src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                 alt="Tech Team" 
                 className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
               />
            </div>

            {/* Floating Glassmorphism Element */}
            <motion.div 
              animate={{ y: ['-15px', '15px'] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="absolute -left-16 bottom-24 backdrop-blur-md bg-white/80 p-6 rounded-[24px] shadow-2xl z-20 w-[260px] border border-white/50 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center text-primary shadow-inner">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-dark text-2xl">285%</h4>
                  <p className="text-sm text-primary font-bold uppercase tracking-wider mt-1">Growth rate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;