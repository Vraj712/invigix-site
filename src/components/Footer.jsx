import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      {/* ==========================================
          CTA SECTION (White Background)
      ========================================== */}
      <section className="bg-white py-32 border-t border-gray-100 relative overflow-hidden">
        
        {/* Decorative Floating Dots */}
        <motion.div animate={{ y: [-10, 10] }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }} className="absolute right-[20%] top-20 w-3 h-3 rounded-full bg-pink-400"></motion.div>
        <motion.div animate={{ y: [10, -10] }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4 }} className="absolute right-[15%] top-40 w-4 h-4 rounded-full bg-blue-400"></motion.div>
        <motion.div animate={{ y: [-5, 5] }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }} className="absolute left-[15%] bottom-20 w-2 h-2 rounded-full bg-yellow-400"></motion.div>

        <div className="max-w-[800px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Have a project in<br/>mind? Let's connect 
            <span className="inline-block ml-2 text-[#7ea8be]">✎</span>
          </h2>
          <p className="text-gray-500 text-lg font-medium mb-10 max-w-xl mx-auto">
            We have three projects with this template and that is because we love the design, the large number of possibilities.
          </p>
          <a href="#contact" className="inline-block bg-[#181a29] text-white px-8 py-4 rounded-full font-bold hover:bg-[#28536b] transition-all shadow-xl hover:-translate-y-1 mb-20">
            Send a Message
          </a>

          {/* Contact Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="p-8 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-200">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Project Offers</p>
              <p className="text-xl font-extrabold text-gray-900">info.invigix.com</p>
            </div>
            <div className="p-8 text-center md:text-left">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Consultation</p>
              <p className="text-xl font-extrabold text-gray-900">+ 1 223 38 87</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          FOOTER (Dark Theme)
      ========================================== */}
      <footer className="bg-[#181a29] text-white py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-white/10 pb-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#7ea8be] rounded-full"></div>
              <span className="text-2xl font-bold tracking-tight">invigix</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-widest text-white/50">
              <a href="#" className="hover:text-white transition-colors">Apply</a>
              <a href="#" className="hover:text-white transition-colors">Management</a>
              <a href="#" className="hover:text-white transition-colors">Reporting</a>
              <a href="#" className="hover:text-white transition-colors">Tracking</a>
              <a href="#" className="hover:text-white transition-colors">Subscribe</a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 text-white/50">
              <a href="#" className="hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
              <a href="#" className="hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-sm gap-4">
            <p>These Terms will be applied fully and affect your use of this Website. By using this Website, you agreed to accept all terms.</p>
            <p>© 2026 Invigix. All rights reserved.</p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;