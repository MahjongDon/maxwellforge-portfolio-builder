
import { useState, useEffect, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  image: string;
  altText: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Joe's Coffee",
    image: "/lovable-uploads/1.webp",
    altText: "Joe's Coffee Shop landing page with coffee cups and latte art"
  },
  {
    id: 2,
    title: "RevUp Sales Summit",
    image: "/lovable-uploads/2.webp",
    altText: "RevUp Sales Summit landing page with countdown timer on dark background",
    demoUrl: "https://forgesales.maxwellforge.dev/"
  },
  {
    id: 3,
    title: "WanderFree Blog",
    image: "/lovable-uploads/3.webp",
    altText: "WanderFree travel blog with palm trees background and budget travel tips"
  },
  {
    id: 4,
    title: "FinForge Budget Tracker",
    image: "/lovable-uploads/4.webp",
    altText: "FinForge budget tracker showing financial dashboard with charts and budget overview"
  },
  {
    id: 5,
    title: "ForgeCRM",
    image: "/lovable-uploads/5.webp",
    altText: "ForgeCRM dashboard displaying contact management and sales pipeline metrics"
  },
  {
    id: 6,
    title: "ForgeNotes",
    image: "/lovable-uploads/6.webp",
    altText: "ForgeNotes note-taking app with markdown formatting and dark mode interface",
    demoUrl: "https://forgenotes.maxwellforge.dev"
  },
  {
    id: 7,
    title: "ForgeGuard",
    image: "/lovable-uploads/7.webp",
    altText: "ForgeGuard secure password generator with customizable options"
  }
];

const PortfolioSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadErrors, setLoadErrors] = useState<Record<number, boolean>>({});
  
  // Preload all slideshow images
  useEffect(() => {
    const loadImages = async () => {
      console.log("Starting to preload portfolio slideshow images");
      const promises = projects.map((project) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = project.image;
          img.onload = () => {
            console.log(`Successfully loaded: ${project.image}`);
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${project.image}`);
            setLoadErrors((prev) => ({ ...prev, [project.id]: true }));
            resolve();
          };
        });
      });
      await Promise.all(promises);
      console.log("All portfolio slideshow images preloaded");
      setImagesLoaded(true);
    };
    loadImages();
  }, []);
  
  const nextSlide = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, [api]);
  
  const prevSlide = useCallback(() => {
    if (api) {
      api.scrollPrev();
    }
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, [api]);

  const goToSlide = useCallback((index: number) => {
    if (api) {
      api.scrollTo(index);
    }
    setCurrentSlide(index);
  }, [api]);

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (!imagesLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-800">
        <p className="text-white">Loading slideshow...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Carousel 
        className="w-full h-full"
        opts={{
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="h-full">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="h-full">
              <div className="relative w-full h-full overflow-hidden">
                {loadErrors[project.id] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <p className="text-red-500">Failed to load image</p>
                  </div>
                ) : (
                  <div 
                    className={cn(
                      "w-full h-full bg-cover bg-center transition-transform duration-500",
                      "transform scale-105 hover:scale-100"
                    )} 
                    style={{ backgroundImage: `url(${project.image})` }}
                    role="img"
                    aria-label={project.altText}
                  >
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-2 px-4 py-1 bg-white/20 hover:bg-white/40 text-white rounded-md transition-colors"
                        >
                          View Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          onClick={prevSlide} 
          className="absolute left-4 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 border-none"
        />
        <CarouselNext 
          onClick={nextSlide} 
          className="absolute right-4 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 border-none"
        />
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {projects.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentSlide === index ? "bg-white w-4" : "bg-white/50"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default PortfolioSlideshow;
