
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-revup-dark py-3 shadow-lg' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="revup-container flex items-center justify-between">
        <a href="#home" className="flex items-center z-10">
          <span className="text-white font-display font-bold text-xl md:text-2xl">
            Rev<span className="text-revup-red">Up</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-revup-red transition-colors text-base font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="ml-4 px-6 py-2 bg-revup-red text-white rounded-md font-medium hover:bg-opacity-90 transition-all"
          >
            Register Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="z-10 md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            'fixed inset-0 bg-revup-dark bg-opacity-95 flex flex-col justify-center items-center transition-all duration-300 md:hidden',
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
        >
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-revup-red text-2xl font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="mt-4 px-8 py-3 bg-revup-red text-white rounded-md text-xl font-medium hover:bg-opacity-90 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
