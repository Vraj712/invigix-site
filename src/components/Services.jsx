import React from 'react';
import { motion } from 'framer-motion';

const expertiseData = [
  { 
    title: 'Website Development', 
    desc: 'Trust our top minds to eliminate workflow pain points and implement new tech.',
    list: ['Strategy', 'Consultation', 'Management']
  },
  { 
    title: 'UI/UX Design', 
    desc: 'Crafting intuitive user interfaces that convert visitors into loyal customers.',
    list: ['Website', 'Landing Page', 'Mobile App']
  },
  { 
    title: 'Data Security', 
    desc: 'Robust protection for your IT infrastructure and sensitive business data.',
    list: ['Management', 'Backup & Recovery', 'Transfer']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">Core Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-indigo-100 transition-all duration-300 group"
            >
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl group-hover:text-white text-indigo-600">✦</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{item.desc}</p>
              
              <ul className="space-y-3 border-t border-gray-200 pt-6">
                {item.list.map((listItem, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                    {listItem}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;