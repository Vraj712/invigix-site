import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-40 pb-32 bg-[#F8F9FA] relative overflow-hidden">
      
      {/* Decorative CSS Background Orbs (Replaces missing image shapes) */}
      <motion.div 
        animate={{ y: ['-20px', '20px'], x: ['-10px', '10px'] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-[80px]" 
      />
      <motion.div 
        animate={{ y: ['20px', '-20px'], x: ['10px', '-10px'] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" 
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Typography */}
          <motion.div 
            className="w-full lg:w-[55%]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[55px] sm:text-6xl lg:text-[75px] font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Get Solid Solution <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 relative inline-block">
                Reliable & Secure
                {/* The classic template swoop underline */}
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-blue-600/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="5" />
                </svg>
              </span> <br />
              Managed IT.
            </h1>

            <p className="text-lg text-gray-600 mb-10 max-w-lg font-medium leading-relaxed">
              Best solutions for big data & Technology services. We provide innovative, reliable, and responsive IT solutions that keep your operations running smoothly.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <a href="#services" className="bg-blue-600 text-white px-9 py-4 rounded-full font-bold hover:bg-gray-900 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-blue-600/20">
                Our all Services
              </a>
              <a href="#contact" className="text-gray-900 font-bold hover:text-blue-600 transition-colors flex items-center gap-3 group">
                Contact us
                <span className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Overlapping Image Layout (With Live Unsplash Images) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[45%] relative h-[500px] lg:h-[650px]"
          >
            {/* Main Center Image */}
            <div className="absolute inset-0 md:right-10 md:top-10 md:bottom-10 bg-gray-200 rounded-[40px] overflow-hidden shadow-2xl z-10 border-[6px] border-white">
               <img 
                 src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                 alt="Tech Team" 
                 className="w-full h-full object-cover"
               />
            </div>

            {/* Overlapping Floating Element (Bottom Left) */}
            <motion.div 
              animate={{ y: ['-10px', '10px'] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="absolute -left-6 lg:-left-16 bottom-16 bg-white p-6 rounded-[24px] shadow-2xl z-20 w-[260px] border border-gray-100 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-2xl">285%</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mt-1">Growth</p>
                </div>
              </div>
            </motion.div>

            {/* Overlapping Image (Top Right) */}
            <motion.div 
               animate={{ y: ['10px', '-10px'] }}
               transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
               className="absolute -right-6 top-16 w-48 h-48 rounded-full overflow-hidden border-[8px] border-white shadow-2xl z-20 hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" 
                alt="Code Screen" 
                className="w-full h-full object-cover"
              />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;