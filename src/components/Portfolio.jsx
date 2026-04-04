import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Portfolio Data - UPDATED: Using Invigix Brand Colors instead of neon placeholders
const projects = [
  { id: 1, title: 'Nexa Mobile', category: 'Digital Design', color: 'bg-[#28536b]', size: 'large' },
  { id: 2, title: 'Aliens do 3D', category: 'Ecommerce', color: 'bg-[#c2948a]', size: 'square' },
  { id: 3, title: 'Photo Retouching', category: 'Branding', color: 'bg-[#7ea8be]', size: 'small' },
  { id: 4, title: 'Store Locator', category: 'Ecommerce', color: 'bg-[#181a29]', size: 'small' },
];

const filters = ['All', 'Branding', 'Digital Design', 'Ecommerce'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <section id="portfolio" className="bg-white relative z-20 overflow-hidden">
      
      {/* ==========================================
          PART 1: CASE STUDIES PORTFOLIO 
      ========================================== */}
      <div className="pt-32 pb-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
          <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Case Studies
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-lg font-medium">
            Passionate about solving problems through<br/>creative communications.
          </motion.p>
        </motion.div>

        {/* Filters - UPDATED: Removed scrollbar, added clean wrapping */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 border-b border-gray-100 pb-4 gap-4">
          {/* Changed to flex-wrap to eliminate the horizontal scrollbar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-gray-400 font-bold text-sm tracking-widest uppercase hidden md:block">Filter by</span>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-bold text-[15px] transition-colors relative ${activeFilter === filter ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {filter}
                <span className="text-[10px] absolute -top-1 -right-3 text-gray-400">
                  {filter === 'All' ? projects.length : projects.filter(p => p.category === filter).length}
                </span>
              </button>
            ))}
          </div>
          <a href="#projects" className="hidden sm:flex items-center gap-2 font-bold text-gray-900 hover:text-primary transition-colors whitespace-nowrap">
            See more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </motion.div>

        {/* Bento Box Grid - UPDATED: Reduced row height to 200px for better proportions */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                  project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                  project.size === 'square' ? 'md:col-span-1 md:row-span-2' : 
                  'md:col-span-1 md:row-span-1'
                } ${project.color}`}
              >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                {/* The Hover Plus Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 ease-out">
                  <div className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-gray-900 hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                  </div>
                </div>

                {/* Bottom Text Details */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white rounded-xl p-4 shadow-lg inline-block transform origin-bottom-left group-hover:scale-105 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                    <p className="text-gray-500 text-sm font-medium">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Mobile See More Button */}
        <div className="mt-10 flex justify-center sm:hidden">
          <button className="bg-gray-50 border border-gray-200 text-gray-900 px-6 py-3 rounded-full font-bold flex items-center gap-2">
            See more projects <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
          </button>
        </div>
      </div>

      {/* ==========================================
          PART 2: "YOU'LL LOVE IT" & STATS 
      ========================================== */}
      <div className="relative pt-32 pb-40 overflow-hidden border-t border-gray-50">
        
        {/* Massive Background Text */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-0 opacity-40 pointer-events-none w-full text-center overflow-hidden">
          <h2 className="text-[15rem] md:text-[22rem] font-black text-[#eef4f8] leading-none tracking-tighter whitespace-nowrap">
            you'll love
          </h2>
        </div>

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="text-2xl lg:text-3xl font-bold text-gray-900 leading-relaxed max-w-lg">
                We have three projects with this template and that is because we love the design, the <span className="text-[#7ea8be]">large number of possibilities.</span>
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex justify-center lg:justify-end">
              <motion.div animate={{ y: [-15, 15] }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut' }} className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Social Media Integration</h4>
                <a href="#" className="text-sm font-bold text-[#28536b] uppercase tracking-widest hover:text-[#7ea8be] transition-colors">Learn More</a>
              </motion.div>
            </motion.div>
          </div>

          {/* 3-Column Stats Grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center lg:text-left divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            <motion.div variants={fadeUp} className="md:px-8 pt-8 md:pt-0">
              <h3 className="text-5xl lg:text-6xl font-black text-[#28536b] mb-4">10+</h3>
              <p className="text-gray-900 font-bold mb-3">Years of Operation</p>
              <p className="text-gray-500 font-medium leading-relaxed">Our team have been running well about 10 years and keep going.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="md:px-8 pt-8 md:pt-0">
              <h3 className="text-5xl lg:text-6xl font-black text-[#7ea8be] mb-4">98%</h3>
              <p className="text-gray-900 font-bold mb-3">Positive Feedback</p>
              <p className="text-gray-500 font-medium leading-relaxed">Our team have been running well about 10 years and keep going.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="md:px-8 pt-8 md:pt-0">
              <h3 className="text-5xl lg:text-6xl font-black text-[#c2948a] mb-4">2,664</h3>
              <p className="text-gray-900 font-bold mb-3">Projects Completed</p>
              <p className="text-gray-500 font-medium leading-relaxed">Our team have been running well about 10 years and keep going.</p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;