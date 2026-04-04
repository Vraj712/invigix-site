import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      
      {/* Large faint background text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] select-none whitespace-nowrap">
        <h2 className="text-[25rem] font-black uppercase text-dark">
          Our Mission
        </h2>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Descriptive Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-1 px-1 bg-secondary rounded-full"></span>
              <span className="text-sm font-bold text-secondary uppercase tracking-widest">About Invigix</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8 tracking-tight max-w-lg">
              Empowering the Future of Digital Growth
            </h2>
            
            <div className="space-y-6 text-lg text-primary/80 leading-relaxed font-medium">
              <p>
                Invigix is a leading IT and technology solutions agency, dedicated to helping businesses navigate the complexities of the digital age. Founded on the principles of innovation and responsiveness, we combine strategy with technology to build bespoke digital solutions that drive results.
              </p>
              <p>
                Our team consists of expert developers, data engineers, and UI specialists, all focused on creating solid, scalable products that integrate customer insights. Whether you need big data integration or a complete brand overhaul, we keep your operations running smoothly.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Modern Stacking Data Cards Illustration */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="relative h-[550px]"
          >
            {/* Main card */}
            <div className="absolute top-10 left-10 w-[80%] h-[70%] bg-surface rounded-2xl p-8 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col gap-6">
               <div className="w-1/2 h-8 bg-white rounded-md shadow-sm"></div>
               <div className="w-full h-1 bg-gray-200 rounded-full"></div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-primary/10 rounded-xl"></div>
                  <div className="h-24 bg-primary rounded-xl p-4 text-white font-bold text-3xl">+84%</div>
               </div>
               <div className="w-full h-10 bg-white rounded-lg shadow-sm"></div>
            </div>

            {/* Accent light blue card */}
            <motion.div 
               animate={{ y: ['-10px', '10px'] }}
               transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
               className="absolute top-32 -left-10 w-[300px] h-[300px] bg-accent p-6 rounded-2xl shadow-2xl border border-white/50 flex items-end"
            >
               <div className="w-3/4 text-white font-extrabold text-3xl">Responsive Systems</div>
            </motion.div>

            {/* Small dusty rose accent */}
            <motion.div 
               animate={{ rotate: [-5, 5] }}
               transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
               className="absolute bottom-10 -right-10 w-[150px] h-[150px] bg-secondary p-6 rounded-xl border border-white/50 shadow-xl flex items-center justify-center font-black text-white text-xl text-center"
            >
               Secure &<br/>Reliable
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;