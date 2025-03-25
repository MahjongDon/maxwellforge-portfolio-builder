
import { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-lg font-bold text-primary hover:text-black transition-colors">
              MaxwellForge
            </a>
          </div>
          
          <div className="text-sm text-primary/70">
            &copy; {currentYear} MaxwellForge. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
