import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-bold text-white mb-6 block">Invigix</span>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Crafting premium digital experiences, robust web applications, and cutting-edge IT solutions for modern businesses.
            </p>
            <p className="text-gray-400">contact@invigix.com <br/> +1 (555) 123-4567</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-400 transition-colors">Portfolio</a></li>
              <li><a href="#blog" className="hover:text-indigo-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Social</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">YouTube</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Invigix. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;