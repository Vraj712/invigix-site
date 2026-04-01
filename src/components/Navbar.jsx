import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Demo', 'Pages', 'Projects', 'Blog', 'Shop', 'Contact'];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6 pointer-events-none">
      <nav 
        className={`pointer-events-auto max-w-[1320px] mx-auto bg-white rounded-full flex items-center justify-between transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${
          scrolled ? 'px-6 py-3' : 'px-8 py-4'
        }`}
      >
        
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center cursor-pointer">
          {/* Custom Invigix SVG Logo */}
          <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* The Geometric Network Icon */}
            <path d="M5 20 L15 8 L28 12 L18 24 Z" fill="#7ea8be" /> {/* Light Blue */}
            <path d="M18 24 L28 12 L38 20 L28 32 Z" fill="#28536b" /> {/* Dark Slate Blue */}
            <path d="M5 20 L18 24 L28 32 L15 28 Z" fill="#c2948a" /> {/* Dusty Rose */}
            
            {/* Network Nodes */}
            <circle cx="5" cy="20" r="2.5" fill="#173140" />
            <circle cx="15" cy="8" r="2.5" fill="#173140" />
            <circle cx="28" cy="12" r="2.5" fill="#173140" />
            <circle cx="38" cy="20" r="2.5" fill="#173140" />
            <circle cx="28" cy="32" r="2.5" fill="#173140" />
            <circle cx="15" cy="28" r="2.5" fill="#173140" />

            {/* The Typography */}
            <text 
              x="48" 
              y="28" 
              fontFamily="'Plus Jakarta Sans', sans-serif" 
              fontSize="22" 
              fontWeight="800" 
              fill="#173140" 
              letterSpacing="-0.5"
            >
              invigix<tspan fill="#c2948a">.</tspan>
            </text>
          </svg>
        </div>
        
        {/* Centered Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-dark font-medium text-[15px] hover:text-secondary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Side Icons & CTA Button */}
        <div className="flex items-center gap-6">
          <button className="hidden lg:block text-primary hover:text-secondary transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <a 
            href="#contact" 
            className="hidden lg:flex items-center bg-primary text-white rounded-full pl-6 pr-2 py-2 hover:bg-secondary transition-colors group"
          >
            <span className="font-semibold text-sm mr-3">Start a project</span>
            <span className="bg-white text-primary rounded-full p-1.5 transform group-hover:-rotate-45 transition-transform duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>

          <button className="text-primary flex flex-col gap-1.5 focus:outline-none hover:text-secondary transition-colors">
            <span className="w-6 h-[2px] bg-currentColor rounded-full block"></span>
            <span className="w-4 h-[2px] bg-currentColor rounded-full block ml-auto"></span>
            <span className="w-6 h-[2px] bg-currentColor rounded-full block"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;