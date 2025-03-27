
import { useState, useEffect, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  image: string;
  altText: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Joe's Coffee",
    image: "public/lovable-uploads/044e5c53-3b47-4566-b468-a6e3d8dc9519.png",
    altText: "Joe's Coffee Shop landing page with coffee cups"
  },
  {
    id: 2,
    title: "RevUp Sales Summit",
    image: "public/lovable-uploads/d6548349-1199-41bf-97f0-ed6fa1ed8405.png",
    altText: "RevUp Sales Summit landing page with countdown timer"
  },
  {
    id: 3,
    title: "WanderFree Blog",
    image: "public/lovable-uploads/0482a93c-43ed-4b8c-9707-044ad5eb69e3.png",
    altText: "WanderFree travel blog with palm trees background"
  },
  {
    id: 4,
    title: "FinForge Budget Tracker",
    image: "public/lovable-uploads/1edb3df9-4321-4969-8c8d-46b7ff226110.png",
    altText: "FinForge budget tracker showing financial dashboard with charts"
  },
  {
    id: 5,
    title: "ForgeCRM",
    image: "public/lovable-uploads/b5bfb219-96d4-4324-aa0d-e938814d3b76.png",
    altText: "CRM App screenshot displaying contact and task management for small businesses"
  },
  {
    id: 6,
    title: "ForgeNotes",
    image: "public/lovable-uploads/5aba59fb-18d8-4dc1-81c5-64ddff5b3084.png",
    altText: "ForgeNotes note-taking app with interface"
  },
  {
    id: 7,
    title: "ForgeGuard",
    image: "public/lovable-uploads/c158ea81-3093-4da2-807f-769687d3d9a8.png",
    altText: "ForgePass screenshot of a secure password generator with customizable options"
  }
];

const PortfolioSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>(null);
  
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

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

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
                  </div>
                </div>
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
