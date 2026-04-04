import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Shrink the navbar and add a frosted dark glass effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Services', 'Customer Stories', 'About', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#181a29]/90 backdrop-blur-md shadow-lg shadow-black/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-bold text-white tracking-tight flex items-center gap-1">
              <div className="w-4 h-4 bg-[#7ea8be] rounded-full"></div>
              invigix
            </span>
          </div>
          
          {/* Centered Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-white/70 font-medium text-[15px] hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Side CTA Buttons & Search */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <a href="#contact" className="text-white font-semibold text-[15px] hover:text-[#7ea8be] transition-colors">
              Log in
            </a>
            <a 
              href="#contact" 
              className="bg-[#28536b] text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-white hover:text-[#181a29] transition-all duration-300 shadow-lg"
            >
              Start for free
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;