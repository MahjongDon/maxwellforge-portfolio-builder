
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
  altText: string;
  result: string;
  demoUrl?: string;
  githubUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Landing Page",
    category: "Joe's Coffee",
    description: "High-converting landing page with optimized CTAs and responsive design.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    buildTime: "24 hours",
    image: "public/lovable-uploads/e0c9c369-392b-44be-9ccd-b25305648a2b.png",
    altText: "Joe's Coffee Shop landing page screenshot showing a mobile-ready design for small businesses.",
    result: "35% increase in lead generation within first week.",
    demoUrl: "http://forgecoffee.maxwellforge.dev"
  },
  {
    id: 2,
    title: "Sales Summit",
    category: "RevUp",
    description: "Event landing page with countdown timer, registration form, and speaker profiles.",
    technologies: ["React", "TailwindCSS", "Netlify"],
    buildTime: "30 hours",
    image: "public/lovable-uploads/e8d85fdb-6656-42fd-b6fa-3ac3fff9acfd.png",
    altText: "RevUp Sales Summit landing page with registration countdown and event details.",
    result: "Sold out event within 48 hours of page launch.",
    demoUrl: "https://app.netlify.com/sites/forgesales/overview"
  },
  {
    id: 3,
    title: "Blog Site",
    category: "WanderFree",
    description: "Minimalist blog platform with advanced content management and SEO optimization.",
    technologies: ["NextJS", "SCSS", "Sanity CMS"],
    buildTime: "36 hours",
    image: "public/lovable-uploads/ff1ec87f-5bf9-4ab3-a079-f8dd94571877.png",
    altText: "WanderFree travel blog screenshot with budget travel tips and clean design.",
    result: "Improved page load speed by 45% and doubled organic traffic.",
    demoUrl: "http://forgewander.maxwellforge.dev"
  },
  {
    id: 4,
    title: "Budget Tracker",
    category: "FinForge",
    description: "Personal finance application for tracking expenses and managing budgets with visualization tools.",
    technologies: ["Vue.js", "Chart.js", "Firebase"],
    buildTime: "36 hours",
    image: "public/lovable-uploads/1edb3df9-4321-4969-8c8d-46b7ff226110.png",
    altText: "FinForge budget tracker screenshot with expense tracking and currency conversion features.",
    result: "Helped users reduce unnecessary spending by an average of 15%.",
    demoUrl: "http://finforge.maxwellforge.dev/"
  },
  {
    id: 5,
    title: "CRM App",
    category: "ForgeCRM",
    description: "Custom CRM solution with client management, pipeline tracking, and analytics dashboard.",
    technologies: ["React", "Firebase", "ChartJS"],
    buildTime: "48 hours",
    image: "public/lovable-uploads/b5bfb219-96d4-4324-aa0d-e938814d3b76.png",
    altText: "CRM App screenshot displaying contact and task management for small businesses.",
    result: "Streamlined sales process, reducing closing time by 22%.",
    demoUrl: "http://forgecrm.maxwellforge.dev/"
  },
  {
    id: 6,
    title: "Note-Taking App",
    category: "ForgeNotes",
    description: "Elegant note-taking application with markdown support and cloud syncing.",
    technologies: ["Vue.js", "TailwindCSS", "Supabase"],
    buildTime: "30 hours",
    image: "public/lovable-uploads/7b85148d-6f85-40c6-bb65-29ea5ce34a91.png",
    altText: "ForgeNotes screenshot showing a note-taking app with Markdown and dark mode.",
    result: "Positive user feedback with 90% satisfaction rating from beta testers.",
    demoUrl: "http://forgenotes.maxwellforge.dev/"
  },
  {
    id: 7,
    title: "Password Generator",
    category: "ForgeGuard",
    description: "Secure password generator with customizable parameters and strength assessment.",
    technologies: ["JavaScript", "CSS", "HTML"],
    buildTime: "12 hours",
    image: "public/lovable-uploads/453046f1-76a1-4e14-8075-d8a369ea46d0.png",
    altText: "ForgePass screenshot of a secure password generator with customizable options.",
    result: "Featured in a security newsletter with over 10,000 downloads in the first month.",
    demoUrl: "http://forgeguard.maxwellforge.dev/"
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
              className="portfolio-card group transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-lg"
              data-delay={index + 1}
            >
              <div 
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
                aria-label={item.altText}
                role="img"
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
                aria-label="Close modal"
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
                aria-label={selectedItem.altText}
                role="img"
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
