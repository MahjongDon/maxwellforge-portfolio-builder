
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
    image: "/lovable-uploads/8c55be99-03c5-4023-b3ef-e8787fbb3676.png",
    altText: "Joe's Coffee Shop landing page with coffee cups and latte art"
  },
  {
    id: 2,
    title: "RevUp Sales Summit",
    image: "/lovable-uploads/1d6c0f29-d362-4ca7-b319-f55b62f13e91.png",
    altText: "RevUp Sales Summit landing page with countdown timer on dark background"
  },
  {
    id: 3,
    title: "WanderFree Blog",
    image: "/lovable-uploads/d33dee7e-20bc-41c1-ab8c-4291bd92b6d5.png",
    altText: "WanderFree travel blog with palm trees background and budget travel tips"
  },
  {
    id: 4,
    title: "FinForge Budget Tracker",
    image: "/lovable-uploads/78f11d83-c04a-4996-b9d6-16aabb4a60e6.png",
    altText: "FinForge budget tracker showing financial dashboard with charts and budget overview"
  },
  {
    id: 5,
    title: "ForgeCRM",
    image: "/lovable-uploads/bbb1cf95-220f-4e83-bcdc-ddb323d38e5c.png",
    altText: "CRM App dashboard displaying contact management and sales pipeline metrics"
  },
  {
    id: 6,
    title: "ForgeNotes",
    image: "/lovable-uploads/8079d914-daa2-4a23-bd97-5bbcb90a2a27.png",
    altText: "ForgeNotes note-taking app with markdown formatting and dark mode interface"
  },
  {
    id: 7,
    title: "ForgeGuard",
    image: "/lovable-uploads/c21fe084-3a36-441e-ba8a-58ca75ee3df6.png",
    altText: "ForgeGuard secure password generator with customizable options"
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

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
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
