import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: 'Step 1', title: 'Discovery', desc: 'Leveraging our findings, we craft a comprehensive IT plan aligning with your goals.' },
  { num: 'Step 2', title: 'Planning & Design', desc: 'Designing systems, networks, and software architecture for scale.' },
  { num: 'Step 3', title: 'Implementation', desc: 'Executing the code and building the digital ecosystem securely.' }
];

const Process = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] bg-gradient-to-tr from-gray-100 to-gray-200 rounded-[2rem] flex items-center justify-center"
          >
            <span className="text-gray-400 font-bold text-xl">[ Process Image ]</span>
          </motion.div>

          {/* Right Steps Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">How we works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transforming IT, One Step at a Time</h2>
            <p className="text-gray-600 mb-12 text-lg">Every business is unique, and so are our solutions. Here’s how we tailor our expertise to your needs.</p>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full border-2 border-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all text-indigo-600 font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <span className="text-purple-600 font-bold text-sm mb-1 block">{step.num}</span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;