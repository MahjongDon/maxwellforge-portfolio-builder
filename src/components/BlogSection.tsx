
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Tech Stack for Your Business",
    excerpt: "A comprehensive guide to selecting technologies that align with your business goals and scale with your growth.",
    author: "Maxwell Forge",
    date: "May 15, 2023",
    category: "Web Development",
    image: "/lovable-uploads/3.webp",
    slug: "how-to-choose-right-tech-stack"
  },
  {
    id: 2,
    title: "5 Web Design Trends Dominating 2023",
    excerpt: "Explore the latest design trends shaping the web and learn how to incorporate them into your digital presence.",
    author: "Maxwell Forge",
    date: "June 22, 2023",
    category: "Design",
    image: "/lovable-uploads/2.webp",
    slug: "web-design-trends-2023"
  },
  {
    id: 3,
    title: "Optimizing Website Performance: A Step-by-Step Guide",
    excerpt: "Learn proven techniques to improve your website's loading speed, user experience, and conversion rates.",
    author: "Maxwell Forge",
    date: "July 8, 2023",
    category: "Performance",
    image: "/lovable-uploads/1.webp",
    slug: "website-performance-optimization-guide"
  }
];

const BlogSection = () => {
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
    <section id="blog" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 
          ref={(el) => (elementsRef.current[0] = el)} 
          className="section-title reveal text-center"
        >
          Latest Articles
        </h2>
        <p 
          ref={(el) => (elementsRef.current[1] = el)} 
          className="section-subtitle reveal text-center mx-auto"
          data-delay="1"
        >
          Insights and tips from the world of web development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              ref={(el) => (elementsRef.current[index + 2] = el)}
              className="reveal border border-border shadow-sm overflow-hidden scale-in-hover"
              data-delay={index + 2}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center text-sm text-primary/60 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-primary hover:text-black transition-colors"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div 
          ref={(el) => (elementsRef.current[5] = el)}
          className="reveal flex justify-center mt-12"
          data-delay="5"
        >
          <a 
            href="/blog" 
            className="inline-block border border-primary px-6 py-3 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
