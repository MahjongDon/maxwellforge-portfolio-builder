
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-site mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          className="text-xl font-semibold flex items-center space-x-2"
        >
          <span className="text-joe-blue">Joe's</span>
          <span>Coffee Shop</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-2">
          <button onClick={() => scrollTo('menu')} className="nav-link">
            Menu
          </button>
          <button onClick={() => scrollTo('contact')} className="nav-link">
            Contact
          </button>
          <button onClick={() => scrollTo('location')} className="nav-link">
            Location
          </button>
        </div>

        <button 
          onClick={() => scrollTo('menu')} 
          className="joe-button text-sm"
        >
          View Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
