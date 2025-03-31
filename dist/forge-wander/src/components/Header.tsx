
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300",
        scrolled ? "py-4 bg-white/90 backdrop-blur-md shadow-sm" : "py-6"
      )}
    >
      <div className="wf-container flex items-center justify-between">
        <div className="logo">
          <a 
            href="#" 
            className="text-2xl font-semibold tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
          >
            <span className="text-wanderfree-blue">Wander</span>Free
          </a>
        </div>
        
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <a 
                href="#"
                className="wf-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#blog"
                className="wf-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('blog');
                }}
              >
                Blog
              </a>
            </li>
            <li>
              <a 
                href="#about"
                className="wf-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('about');
                }}
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
