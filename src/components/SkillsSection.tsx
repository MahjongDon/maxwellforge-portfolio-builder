
import { useRef, useEffect } from "react";

interface Skill {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  const skills: Skill[] = [
    {
      id: 1,
      title: "Custom Web Development",
      description: "Bespoke websites built from scratch with clean code and modern frameworks.",
      icon: (
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
          className="text-primary"
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Rapid Turnaround",
      description: "Fast, efficient delivery without compromising on quality. Most projects completed within 48 hours.",
      icon: (
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
          className="text-primary"
        >
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Responsive Design",
      description: "Sites that look and function flawlessly across all devices and screen sizes.",
      icon: (
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
          className="text-primary"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds and optimized user experiences for better conversions.",
      icon: (
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
          className="text-primary"
        >
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "SEO Friendly",
      description: "Built with search engines in mind for better visibility and organic traffic.",
      icon: (
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
          className="text-primary"
        >
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Custom Functionality",
      description: "Interactive elements and bespoke features tailored to your specific business needs.",
      icon: (
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
          className="text-primary"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      )
    }
  ];

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

    skillsRef.current.forEach((skill) => {
      if (skill) observer.observe(skill);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      skillsRef.current.forEach((skill) => {
        if (skill) observer.unobserve(skill);
      });
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title reveal">My Services</h2>
        <p className="section-subtitle reveal" data-delay="1">
          Specialized web development services to help your business thrive online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              ref={(el) => (skillsRef.current[index] = el)}
              className="reveal bg-white p-6 md:p-8 transition-transform duration-500 scale-in-hover"
              data-delay={index + 1}
            >
              <div className="mb-4 p-3 inline-block bg-secondary rounded-full">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-primary/70">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
