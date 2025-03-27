
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Define portfolio project images and titles
const projectSlides = [
  {
    id: 1,
    title: "Joe's Coffee",
    image: "/lovable-uploads/Slideshow 1.PNG",
    altText: "Joe's Coffee Shop landing page with coffee cups and latte art"
  },
  {
    id: 2,
    title: "RevUp Sales Summit",
    image: "/lovable-uploads/Slideshow 2.PNG",
    altText: "RevUp Sales Summit landing page with countdown timer on dark background"
  },
  {
    id: 3,
    title: "WanderFree Blog",
    image: "/lovable-uploads/Slideshow 3.PNG",
    altText: "WanderFree travel blog with palm trees background and budget travel tips"
  },
  {
    id: 4,
    title: "FinForge Budget Tracker",
    image: "/lovable-uploads/Slideshow 4.PNG",
    altText: "FinForge budget tracker showing financial dashboard with charts and budget overview"
  },
  {
    id: 5,
    title: "ForgeCRM",
    image: "/lovable-uploads/Slideshow 5.PNG",
    altText: "ForgeCRM dashboard displaying contact management and sales pipeline metrics"
  },
  {
    id: 6,
    title: "ForgeNotes",
    image: "/lovable-uploads/Slideshow 6.PNG",
    altText: "ForgeNotes note-taking app with markdown formatting and dark mode interface"
  },
  {
    id: 7,
    title: "ForgeGuard",
    image: "/lovable-uploads/Slideshow 7.PNG",
    altText: "ForgeGuard secure password generator with customizable options"
  }
];

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle animations on component mount
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

  // Handle slideshow navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projectSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projectSlides.length - 1 : prev - 1));
  };

  // Auto advance slideshow - updated to 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
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
          className="reveal w-full md:w-1/2 aspect-[4/3] md:aspect-square relative"
        >
          {/* Simple Slideshow */}
          <div className="slideshow-container w-full h-full relative overflow-hidden">
            {projectSlides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`slide absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  role="img"
                  aria-label={slide.altText}
                >
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{slide.title}</h3>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-6 w-6 text-white" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ArrowRight className="h-6 w-6 text-white" />
            </button>
            
            {/* Slide indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {projectSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? "bg-white w-4" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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
