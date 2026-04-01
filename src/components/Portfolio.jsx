import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'AI-Driven Trading Agent', category: 'Python / Machine Learning' },
  { title: 'Forex Analytics Dashboard', category: 'Full-Stack Web App' },
  { title: 'Creative Studio Portfolio', category: 'UI/UX & Frontend' },
  { title: 'IT Infrastructure Portal', category: 'Network & Support Solutions' }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Latest Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="w-full h-72 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium shadow-lg">View Project</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
              <p className="text-gray-500 font-medium">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;