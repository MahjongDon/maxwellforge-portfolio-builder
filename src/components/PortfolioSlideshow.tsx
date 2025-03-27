
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
    image: "public/lovable-uploads/e0c9c369-392b-44be-9ccd-b25305648a2b.png",
    altText: "Joe's Coffee Shop landing page with coffee cups"
  },
  {
    id: 2,
    title: "RevUp Sales Summit",
    image: "public/lovable-uploads/e8d85fdb-6656-42fd-b6fa-3ac3fff9acfd.png",
    altText: "RevUp Sales Summit landing page with countdown timer"
  },
  {
    id: 3,
    title: "WanderFree Blog",
    image: "public/lovable-uploads/ff1ec87f-5bf9-4ab3-a079-f8dd94571877.png",
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
    image: "public/lovable-uploads/7b85148d-6f85-40c6-bb65-29ea5ce34a91.png",
    altText: "ForgeNotes note-taking app with interface"
  },
  {
    id: 7,
    title: "ForgeGuard",
    image: "public/lovable-uploads/453046f1-76a1-4e14-8075-d8a369ea46d0.png",
    altText: "ForgePass screenshot of a secure password generator with customizable options"
  }
];

const PortfolioSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, []);
  
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, []);

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
        setApi={(api) => {
          if (api) api.scrollTo(currentSlide);
        }}
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
          onClick={() => prevSlide()} 
          className="absolute left-4 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 border-none"
        />
        <CarouselNext 
          onClick={() => nextSlide()} 
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
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default PortfolioSlideshow;
