import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { 
    name: 'Vraj Panchal', 
    role: 'Founder & Web Developer', 
    expertise: 'Full-Stack & Python',
    imgPlaceholder: 'VP'
  },
  { 
    name: 'Asha', 
    role: 'Lead Designer', 
    expertise: 'UI/UX & Graphics',
    imgPlaceholder: 'A'
  },
  { 
    name: 'IT Support Lead', 
    role: 'Network Technician', 
    expertise: 'Infrastructure',
    imgPlaceholder: 'IT'
  }
];

const Team = () => {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Minds</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Meet the Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-[2rem] p-4 border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden"
            >
              {/* Image Area */}
              <div className="w-full h-72 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-[1.5rem] flex items-center justify-center overflow-hidden relative">
                <span className="text-5xl font-bold text-indigo-300">{member.imgPlaceholder}</span>
                
                {/* Social Overlay on Hover */}
                <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm cursor-pointer hover:bg-indigo-600 hover:text-white">In</span>
                     <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm cursor-pointer hover:bg-indigo-600 hover:text-white">Tw</span>
                   </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="pt-6 pb-4 px-4 text-center">
                <div className="inline-block px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-bold mb-3">
                  {member.expertise}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-500 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;