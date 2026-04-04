import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative z-20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- 1. TOP 3-COLUMN GRID --- */}
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-32"
        >
          {/* Card 1 */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="h-48 w-full flex items-center justify-center mb-6">
              {/* Abstract Illustration Placeholder */}
              <div className="relative w-32 h-32 bg-[#f6f0ed] rounded-3xl transform rotate-3 flex items-center justify-center shadow-lg border border-gray-100">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#c2948a] rounded-full"></div>
                <svg className="w-16 h-16 text-[#28536b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight">SEO Analytics</h3>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed px-4">Content-focused grid designs, unique social elements, post-sharing function, author exposure, sticky newsletter.</p>
          </motion.div>

          {/* Card 2 (With POPULAR Badge) */}
          <motion.div variants={fadeUp} className="flex flex-col items-center relative">
            <div className="absolute top-0 right-10 bg-white border border-gray-100 shadow-lg text-gray-900 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full z-10">
              Popular
            </div>
            <div className="h-48 w-full flex items-center justify-center mb-6">
              <div className="relative w-32 h-32 bg-[#eef4f8] rounded-full flex items-center justify-center shadow-lg border border-white">
                 <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#7ea8be] rounded-lg transform rotate-12"></div>
                 <svg className="w-16 h-16 text-[#28536b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight">Digital Marketing</h3>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed px-4">Content-focused grid designs, unique social elements, post-sharing function, author exposure, sticky newsletter.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="h-48 w-full flex items-center justify-center mb-6">
               <div className="relative w-32 h-32 bg-[#181a29] rounded-[2.5rem] transform -rotate-3 flex items-center justify-center shadow-2xl border-4 border-white">
                <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight">eCommerce Solutions</h3>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed px-4">Content-focused grid designs, unique social elements, post-sharing function, author exposure, sticky newsletter.</p>
          </motion.div>
        </motion.div>

        {/* --- 2. SPLIT FEATURE SECTION --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-40">
          {/* Left: Illustration Container */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="w-[400px] h-[400px] bg-[#f6f0ed] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 blur-3xl opacity-50"></div>
            {/* Modern floating UI illustration to replace the 3D man */}
            <div className="relative w-full max-w-md aspect-square bg-white border border-gray-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8">
              <div className="w-full h-12 bg-gray-50 rounded-xl mb-4 border border-gray-100 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="w-3/4 h-6 bg-[#eef4f8] rounded-md mb-4"></div>
              <div className="w-1/2 h-6 bg-[#f6f0ed] rounded-md mb-8"></div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-[#181a29] rounded-2xl p-4 flex flex-col justify-end">
                  <div className="w-full h-2 bg-white/20 rounded-full mb-2"></div>
                  <div className="w-2/3 h-2 bg-white/20 rounded-full"></div>
                </div>
                <div className="h-32 bg-[#7ea8be] rounded-2xl p-4 flex flex-col justify-end">
                  <div className="w-full h-16 bg-white/20 rounded-lg mb-2"></div>
                </div>
              </div>
              {/* Floating heart icon like in the video */}
              <motion.div animate={{ y: [-10, 10] }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }} className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-50 text-red-500">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="text-[#7ea8be] font-bold tracking-widest uppercase text-sm mb-4">Contact</div>
            <h2 className="text-4xl lg:text-[45px] font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Digital transformation<br/>made easy.
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium max-w-md">
              Adjust your design through a wide range of theme options in the customizer and see the changes instantly.
            </p>
            <a href="#contact" className="text-[#28536b] font-bold text-lg hover:text-[#7ea8be] transition-colors flex items-center gap-2 group">
              Start Your Project 
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </a>
          </motion.div>
        </div>

        {/* --- 3. THE 2x2 HOVER GRID SECTION --- */}
        <div className="text-center mb-16">
          <div className="text-[#7ea8be] font-bold tracking-widest uppercase text-sm mb-4">Our Services</div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#28536b] tracking-tight">
            We build ideas<br/>driven by the future.
          </h2>
        </div>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Grid Card 1 */}
          <motion.div variants={fadeUp} className="group bg-white hover:bg-[#181a29] p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex gap-6 cursor-pointer">
            <div className="w-12 h-12 flex-shrink-0 text-[#7ea8be] group-hover:text-white transition-colors">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">Interaction Design</h3>
              <p className="text-gray-500 group-hover:text-gray-300 font-medium leading-relaxed transition-colors">Produce the highest quality work and services for every client, on every project.</p>
            </div>
          </motion.div>

          {/* Grid Card 2 */}
          <motion.div variants={fadeUp} className="group bg-white hover:bg-[#181a29] p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex gap-6 cursor-pointer">
            <div className="w-12 h-12 flex-shrink-0 text-[#7ea8be] group-hover:text-white transition-colors">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors flex items-center gap-2">Search Engine Optimization <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></h3>
              <p className="text-gray-500 group-hover:text-gray-300 font-medium leading-relaxed transition-colors">Produce the highest quality work and services for every client, on every project.</p>
            </div>
          </motion.div>

          {/* Grid Card 3 */}
          <motion.div variants={fadeUp} className="group bg-white hover:bg-[#181a29] p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex gap-6 cursor-pointer">
            <div className="w-12 h-12 flex-shrink-0 text-[#7ea8be] group-hover:text-white transition-colors">
               <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors flex items-center gap-2">eCommerce Solutions <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></h3>
              <p className="text-gray-500 group-hover:text-gray-300 font-medium leading-relaxed transition-colors">Produce the highest quality work and services for every client, on every project.</p>
            </div>
          </motion.div>

          {/* Grid Card 4 (With PRO Badge) */}
          <motion.div variants={fadeUp} className="group bg-white hover:bg-[#181a29] p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex gap-6 cursor-pointer relative overflow-hidden">
            <div className="absolute top-6 right-6 bg-[#eef4f8] group-hover:bg-white text-gray-900 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-md transition-colors z-10">
              PRO
            </div>
            <div className="w-12 h-12 flex-shrink-0 text-[#7ea8be] group-hover:text-white transition-colors">
               <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div className="pr-12">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">Product Development</h3>
              <p className="text-gray-500 group-hover:text-gray-300 font-medium leading-relaxed transition-colors">Produce the highest quality work and services for every client, on every project.</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Services;