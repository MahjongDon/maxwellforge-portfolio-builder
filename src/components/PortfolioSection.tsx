
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  buildTime: string;
  image: string;
  result: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    category: "Web Development",
    description: "Complete store redesign with optimized product pages and checkout flow.",
    technologies: ["React", "TailwindCSS", "Stripe"],
    buildTime: "48 hours",
    image: "https://images.unsplash.com/photo-1523887329668-f151e3bf4e3f?q=80&w=2070&auto=format&fit=crop",
    result: "42% increase in conversion rate within first month."
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Modern analytics dashboard for a SaaS platform with real-time data visualization.",
    technologies: ["React", "Chart.js", "Firebase"],
    buildTime: "36 hours",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    result: "Streamlined user workflow, reducing task completion time by 28%."
  },
  {
    id: 3,
    title: "Restaurant Website",
    category: "Web Development",
    description: "Elegant website with online reservation system and menu management.",
    technologies: ["JavaScript", "TailwindCSS", "Node.js"],
    buildTime: "24 hours",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop",
    result: "Online reservations increased by 65% in first week."
  }
];

const PortfolioSection = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="section-title reveal">Portfolio</h2>
        <p className="section-subtitle reveal" data-delay="1">
          Recent projects delivered with precision and efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="portfolio-card reveal group aspect-[4/3]"
              data-delay={index + 1}
              onClick={() => openModal(item)}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="portfolio-card-overlay group-hover:opacity-100">
                <div className="portfolio-card-content group-hover:translate-y-0">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 mb-4">{item.category}</p>
                  <span className="inline-block px-4 py-1 border border-white/30 text-sm">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-black/70 hover:text-black z-10"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div 
                className="w-full aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedItem.image})` }}
              />
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedItem.title}</h3>
              <p className="text-primary/70 mb-6">{selectedItem.category}</p>
              
              <p className="text-lg mb-6">{selectedItem.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-primary/60 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-3 py-1 bg-secondary text-primary/80 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-primary/60 mb-2">Build Time</h4>
                  <p className="text-lg font-medium">{selectedItem.buildTime}</p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-primary/60 mb-2">Result</h4>
                  <p className="text-lg font-medium">{selectedItem.result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
