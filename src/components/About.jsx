import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  const features = ['Focus on Innovation', 'Agile Development', 'Sustainable Growth'];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering your business with <span className="text-indigo-600">next-gen</span> technology.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Invigix, we don't just write code; we build digital ecosystems. Our team specializes in creating robust, scalable solutions that bridge the gap between complex problems and elegant, user-friendly experiences.
            </p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700 font-medium">
                  <FiCheckCircle className="text-purple-600 mr-3" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-600 transition-colors">
              Discover Our Story
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
          >
            <div className="text-white/50 font-bold text-2xl">
              [ Add Team Image Here ]
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;