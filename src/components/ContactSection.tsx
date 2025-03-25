
import { useRef, useEffect } from "react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      elementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            ref={(el) => (elementsRef.current[0] = el)}
            className="reveal section-title"
          >
            Ready to build your website?
          </h2>
          
          <p 
            ref={(el) => (elementsRef.current[1] = el)}
            className="reveal section-subtitle mx-auto"
            data-delay="1"
          >
            Get your custom website built in just 48 hours. Fast, professional, and tailored to your needs.
          </p>
          
          <div 
            ref={(el) => (elementsRef.current[2] = el)}
            className="reveal mt-10"
            data-delay="2"
          >
            <a 
              href="https://fiverr.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-4 text-lg font-medium hover:bg-black transition-colors duration-300"
            >
              Hire me now on Fiverr
            </a>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[3] = el)}
            className="reveal mt-16 flex flex-col md:flex-row items-center justify-center gap-8"
            data-delay="3"
          >
            <div className="text-center md:text-left">
              <h3 className="text-lg font-medium mb-1">Email</h3>
              <a 
                href="mailto:hello@maxwellforge.com" 
                className="text-primary/70 hover:text-primary transition-colors"
              >
                hello@maxwellforge.com
              </a>
            </div>
            
            <div className="h-8 border-l border-border hidden md:block"></div>
            
            <div className="text-center md:text-left">
              <h3 className="text-lg font-medium mb-1">Follow</h3>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <a href="#" className="text-primary/70 hover:text-primary transition-colors">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="#" className="text-primary/70 hover:text-primary transition-colors">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary/70 hover:text-primary transition-colors">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
