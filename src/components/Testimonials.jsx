import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { text: "Invigix completely transformed our online presence. The new website is incredibly fast and intuitive.", author: "Sarah Jenkins, TechCorp" },
  { text: "Their attention to detail in UI/UX design is unmatched. We saw a 40% increase in user retention.", author: "Michael Chen, StartUp Inc" },
  { text: "Highly professional and delivered the IT solutions right on schedule. Fantastic team to work with.", author: "Emma Watson, GlobalRetail" }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Feedback</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 bg-gray-800 rounded-2xl border border-gray-700"
            >
              <div className="text-indigo-400 text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">{review.text}</p>
              <p className="font-bold text-white">- {review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;