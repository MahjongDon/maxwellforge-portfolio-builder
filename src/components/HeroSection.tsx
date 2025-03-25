
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Element animation sequence
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current, imageRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add("active");
        }, index * 200);
      }
    });
  }, []);

  return (
    <section id="home" className="relative min-h-[100vh] w-full flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
          <h1 
            ref={titleRef} 
            className="reveal text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            MaxwellForge
            <span className="block text-black/80">Fast, Custom Websites</span>
          </h1>
          
          <p 
            ref={subtitleRef} 
            className="reveal mt-6 text-xl md:text-2xl text-primary/70 max-w-xl"
          >
            I build high-converting websites in 48 hours. Hire me on Fiverr.
          </p>
          
          <div ref={ctaRef} className="reveal mt-8">
            <a href="#contact" className="cta-button">
              <span>Work With Me</span>
            </a>
          </div>
        </div>
        
        <div 
          ref={imageRef} 
          className="reveal w-full md:w-1/2 aspect-[4/3] md:aspect-square"
        >
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-4 md:inset-8 bg-secondary"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center transform scale-95"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-primary/60"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
