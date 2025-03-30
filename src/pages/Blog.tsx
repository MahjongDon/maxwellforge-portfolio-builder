import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Tech Stack for Your Business",
    excerpt: "A comprehensive guide to selecting technologies that align with your business goals and scale with your growth.",
    author: "Maxwell Forge",
    date: "May 15, 2023",
    category: "Web Development",
    image: "/lovable-uploads/3.PNG",
    slug: "how-to-choose-right-tech-stack",
    content: "The technology stack you choose for your project can significantly impact its success, scalability, and maintenance costs. This comprehensive guide walks through the key considerations when selecting a tech stack, from business requirements and team expertise to scalability needs and budget constraints. We'll explore popular technology combinations for different types of applications and provide a framework for making informed decisions."
  },
  {
    id: 2,
    title: "5 Web Design Trends Dominating 2023",
    excerpt: "Explore the latest design trends shaping the web and learn how to incorporate them into your digital presence.",
    author: "Maxwell Forge",
    date: "June 22, 2023",
    category: "Design",
    image: "/lovable-uploads/2.PNG",
    slug: "web-design-trends-2023",
    content: "Web design continues to evolve rapidly with new technologies and changing user expectations. This article examines the five most influential design trends of 2023, including minimalist interfaces, micro-interactions, 3D elements, dark mode implementations, and accessibility-first design. For each trend, we provide practical examples and implementation tips to help you incorporate these elements into your own projects."
  },
  {
    id: 3,
    title: "Optimizing Website Performance: A Step-by-Step Guide",
    excerpt: "Learn proven techniques to improve your website's loading speed, user experience, and conversion rates.",
    author: "Maxwell Forge",
    date: "July 8, 2023",
    category: "Performance",
    image: "/lovable-uploads/1.PNG",
    slug: "website-performance-optimization-guide",
    content: "Website performance directly impacts user experience, SEO rankings, and conversion rates. This comprehensive guide covers essential optimization techniques, from image compression and code minification to caching strategies and CDN implementation. You'll learn how to identify performance bottlenecks using tools like Lighthouse and WebPageTest, and how to implement both quick wins and long-term optimization strategies."
  },
  {
    id: 4,
    title: "The Business Case for Progressive Web Apps",
    excerpt: "Discover why more businesses are investing in PWAs and how they can benefit your organization.",
    author: "Maxwell Forge",
    date: "August 17, 2023",
    category: "Technology",
    image: "/lovable-uploads/6.PNG",
    slug: "business-case-progressive-web-apps",
    content: "Progressive Web Apps (PWAs) represent a significant shift in how businesses approach mobile strategy. This article examines the business benefits of PWAs, including improved user engagement, higher conversion rates, and reduced development costs compared to native apps. We'll look at real-world success stories from companies that have implemented PWAs and provide a framework for evaluating whether a PWA is right for your business."
  },
  {
    id: 5,
    title: "10 Essential Features Every Business Website Needs",
    excerpt: "Ensure your business website includes these critical elements to maximize effectiveness and ROI.",
    author: "Maxwell Forge",
    date: "September 5, 2023",
    category: "Business",
    image: "/lovable-uploads/5.PNG",
    slug: "essential-business-website-features",
    content: "A successful business website balances aesthetic appeal with practical functionality. This article outlines ten must-have features that every business website should include, from clear navigation and compelling calls-to-action to contact information and social proof. For each feature, we provide implementation best practices and examples of businesses doing it right."
  },
  {
    id: 6,
    title: "Introduction to Web Accessibility: Making Your Site Inclusive",
    excerpt: "Learn why web accessibility matters and how to implement WCAG guidelines in your projects.",
    author: "Maxwell Forge",
    date: "October 23, 2023",
    category: "Accessibility",
    image: "/lovable-uploads/4.PNG",
    slug: "web-accessibility-introduction",
    content: "Web accessibility ensures that people with disabilities can perceive, understand, navigate, and interact with websites. This introductory guide explains the importance of accessibility from both ethical and business perspectives, introduces the Web Content Accessibility Guidelines (WCAG), and provides practical tips for implementing accessibility in your web projects, from semantic HTML and keyboard navigation to color contrast and screen reader compatibility."
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <a 
              href="/" 
              className="inline-flex items-center text-primary hover:text-black transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </a>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">Blog</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div 
                  key={post.id}
                  className="border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-primary/60 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h3>
                    <p className="text-primary/70 mb-4">{post.excerpt}</p>
                    <a 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-primary hover:text-black transition-colors"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
