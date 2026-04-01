import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  { title: 'The Future of AI in Web Development', date: 'April 2, 2026', read: '5 min read' },
  { title: 'Why UI/UX is Critical for E-Commerce', date: 'March 28, 2026', read: '4 min read' },
  { title: 'Securing Your IT Infrastructure in 2026', date: 'March 15, 2026', read: '7 min read' }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          </div>
          <button className="hidden md:block text-indigo-600 font-bold hover:text-indigo-800">View All Posts &rarr;</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="w-full h-48 bg-gray-100 rounded-2xl mb-6 group-hover:shadow-md transition-shadow"></div>
              <div className="flex text-sm text-gray-500 mb-3 space-x-4">
                <span>{post.date}</span>
                <span>&bull;</span>
                <span>{post.read}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;