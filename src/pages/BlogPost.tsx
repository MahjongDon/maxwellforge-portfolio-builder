
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

// Using the same blog posts data from BlogSection
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

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-24">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
            <p className="mb-6">The blog post you're looking for doesn't exist.</p>
            <button 
              onClick={() => navigate("/blog")}
              className="inline-flex items-center text-primary hover:text-black transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <article className="py-12">
          <div className="container mx-auto px-4">
            <a 
              href="/blog" 
              className="inline-flex items-center text-primary hover:text-black transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </a>
            
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center text-sm text-primary/60 mb-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.category}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>
              
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-lg font-semibold">MF</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium">{post.author}</p>
                </div>
              </div>
              
              <div className="aspect-video mb-8 rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed">{post.content}</p>
                
                {/* More article content would go here */}
                <p className="text-lg leading-relaxed mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Key Considerations</h2>
                
                <p className="text-lg leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li className="text-lg">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                  <li className="text-lg">Ut enim ad minim veniam, quis nostrud exercitation</li>
                  <li className="text-lg">Duis aute irure dolor in reprehenderit in voluptate</li>
                </ul>
              </div>
              
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-black transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-black transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-black transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
