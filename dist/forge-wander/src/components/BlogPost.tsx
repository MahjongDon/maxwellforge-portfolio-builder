
import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface BlogPostProps {
  title: string;
  excerpt: string;
  content?: string;
  imageUrl: string;
  delay: number;
}

const BlogPost = ({ title, excerpt, imageUrl, delay, content }: BlogPostProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Create a slug from the title
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };
  
  const slug = createSlug(title);
  
  return (
    <Card 
      className="overflow-hidden animate-reveal shadow-lg h-full flex flex-col border border-gray-200"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="aspect-video overflow-hidden relative">
        <div 
          className={`absolute inset-0 bg-gray-200 transition-opacity duration-500 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img 
          src={imageUrl} 
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </div>
      
      <CardHeader className="p-6 pb-2">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar size={14} className="mr-1" />
          <span>March 2025</span>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-gray-600">{excerpt}</p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link 
          to={`/blog/${slug}`}
          className="wf-link text-wanderfree-blue font-medium"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPost;
