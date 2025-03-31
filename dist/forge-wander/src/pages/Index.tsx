
import { useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BlogSection from '@/components/BlogSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ScrollButton from '@/components/ScrollButton';

const Index = () => {
  const blogRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  
  const handleNavigate = (section: string) => {
    if (section === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (section === 'blog') {
      const blogElement = document.getElementById('blog');
      if (blogElement) {
        blogElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'about') {
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const handleReadBlog = () => {
    const blogElement = document.getElementById('blog');
    if (blogElement) {
      blogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigate} />
      
      <main>
        <Hero onReadBlog={handleReadBlog} />
        <BlogSection />
        <AboutSection />
      </main>
      
      <Footer onNavigate={handleNavigate} />
      <ScrollButton />
    </div>
  );
};

export default Index;
