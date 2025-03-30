
import { useRef, useEffect } from "react";
import { Code, Wrench, LayoutGrid } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "Website Development",
    description: "Custom-built websites designed to convert visitors into customers. Delivered in just 48 hours.",
    icon: LayoutGrid,
    features: ["Responsive design", "SEO optimization", "Fast loading times", "Custom functionality"]
  },
  {
    id: 2,
    title: "Website Maintenance",
    description: "Keep your website running smoothly with regular updates, security patches, and performance optimization.",
    icon: Wrench,
    features: ["Security monitoring", "Performance optimization", "Content updates", "Technical support"]
  },
  {
    id: 3,
    title: "App Creation",
    description: "Transform your ideas into functional web applications with custom features and intuitive interfaces.",
    icon: Code,
    features: ["User authentication", "Database integration", "Custom API development", "Cross-platform compatibility"]
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

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

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      elementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 
          ref={(el) => (elementsRef.current[0] = el)} 
          className="section-title reveal text-center"
        >
          Services
        </h2>
        <p 
          ref={(el) => (elementsRef.current[1] = el)} 
          className="section-subtitle reveal text-center mx-auto"
          data-delay="1"
        >
          Professional web solutions delivered with speed and precision
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              ref={(el) => (elementsRef.current[index + 2] = el)}
              className="reveal border border-border hover:border-primary transition-all duration-300 bg-white shadow-sm scale-in-hover"
              data-delay={index + 2}
            >
              <CardHeader className="pb-2">
                <div className="mb-4 p-3 inline-block bg-secondary rounded-md">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mt-2 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-primary mr-2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-primary/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
