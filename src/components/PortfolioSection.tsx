
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
  demoUrl?: string;
  githubUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Landing Page",
    category: "Web Development",
    description: "High-converting landing page with optimized CTAs and responsive design.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    buildTime: "24 hours",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    result: "35% increase in lead generation within first week.",
    demoUrl: "https://example.com/landing-page",
    githubUrl: "https://github.com/maxwellforge/landing-page"
  },
  {
    id: 2,
    title: "Blog Site",
    category: "Content Platform",
    description: "Minimalist blog platform with advanced content management and SEO optimization.",
    technologies: ["NextJS", "SCSS", "Sanity CMS"],
    buildTime: "36 hours",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    result: "Improved page load speed by 45% and doubled organic traffic.",
    demoUrl: "https://example.com/blog-site",
    githubUrl: "https://github.com/maxwellforge/blog-site"
  },
  {
    id: 3,
    title: "CRM App",
    category: "Business Application",
    description: "Custom CRM solution with client management, pipeline tracking, and analytics dashboard.",
    technologies: ["React", "Firebase", "ChartJS"],
    buildTime: "48 hours",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    result: "Streamlined sales process, reducing closing time by 22%.",
    demoUrl: "https://example.com/crm-app",
    githubUrl: "https://github.com/maxwellforge/crm-app"
  },
  {
    id: 4,
    title: "Note-Taking App",
    category: "Productivity Tool",
    description: "Elegant note-taking application with markdown support and cloud syncing.",
    technologies: ["Vue.js", "TailwindCSS", "Supabase"],
    buildTime: "30 hours",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    result: "Positive user feedback with 90% satisfaction rating from beta testers.",
    demoUrl: "https://example.com/note-app",
    githubUrl: "https://github.com/maxwellforge/note-app"
  },
  {
    id: 5,
    title: "Password Generator",
    category: "Security Tool",
    description: "Secure password generator with customizable parameters and strength assessment.",
    technologies: ["JavaScript", "CSS", "HTML"],
    buildTime: "12 hours",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
    result: "Featured in a security newsletter with over 10,000 downloads in the first month.",
    demoUrl: "https://example.com/password-generator",
    githubUrl: "https://github.com/maxwellforge/password-generator"
  },
  {
    id: 6,
    title: "Calendar Task Management",
    category: "Productivity Tool",
    description: "Comprehensive calendar and task management web application with reminders and priority sorting.",
    technologies: ["React", "Redux", "MUI", "Firebase"],
    buildTime: "40 hours",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    result: "Used by three startups as their primary task management solution.",
    demoUrl: "https://example.com/calendar-app",
    githubUrl: "https://github.com/maxwellforge/calendar-app"
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

        {/* 3-column by 2-row Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="portfolio-card reveal group transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-lg"
              data-delay={index + 1}
            >
              <div 
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="portfolio-card-overlay group-hover:opacity-100">
                <div className="portfolio-card-content group-hover:translate-y-0">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 mb-3">{item.category}</p>
                  <p className="text-white/70 mb-4 text-sm line-clamp-2">{item.description}</p>
                  
                  <div className="flex gap-2 justify-center">
                    {item.demoUrl && (
                      <a 
                        href={item.demoUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm rounded-sm transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(item);
                      }}
                      className="px-3 py-1.5 bg-white text-black text-sm rounded-sm hover:bg-white/90 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedItem && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
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
              
              <div className="flex gap-4 mt-6">
                {selectedItem.demoUrl && (
                  <a 
                    href={selectedItem.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2 bg-secondary hover:bg-secondary/80 text-primary font-medium transition-colors"
                  >
                    View Live Demo
                  </a>
                )}
                
                {selectedItem.githubUrl && (
                  <a 
                    href={selectedItem.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2 border border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    GitHub Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
