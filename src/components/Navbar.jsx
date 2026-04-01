import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Shrink the navbar slightly when scrolling down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Demo', 'Pages', 'Projects', 'Blog', 'Shop', 'Contact'];

  return (
    // The outer container handles the floating position at the top
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6 pointer-events-none">
      
      {/* The inner container is the actual white "pill" */}
      <nav 
        className={`pointer-events-auto max-w-[1320px] mx-auto bg-white rounded-full flex items-center justify-between transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${
          scrolled ? 'px-6 py-3' : 'px-8 py-4'
        }`}
      >
        
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
          <svg className="w-8 h-8 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z"/>
          </svg>
          <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
            invigix
          </span>
        </div>
        
        {/* Centered Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-gray-800 font-medium text-[15px] hover:text-indigo-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Side Icons & CTA Button */}
        <div className="flex items-center gap-6">
          
          {/* Search Icon */}
          <button className="hidden lg:block text-gray-600 hover:text-indigo-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Start a Project Button (Agntix Style) */}
          <a 
            href="#contact" 
            className="hidden lg:flex items-center bg-gray-900 text-white rounded-full pl-6 pr-2 py-2 hover:bg-indigo-600 transition-colors group"
          >
            <span className="font-semibold text-sm mr-3">Start a project</span>
            <span className="bg-white text-gray-900 rounded-full p-1.5 transform group-hover:-rotate-45 transition-transform duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>

          {/* Custom Hamburger Menu Icon (Staggered Lines) */}
          <button className="text-gray-900 flex flex-col gap-1.5 focus:outline-none">
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