
import { useEffect, useState } from 'react';

interface HeroProps {
  onReadBlog: () => void;
}

const Hero = ({ onReadBlog }: HeroProps) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div 
        className={`absolute inset-0 bg-black/30 z-10 transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1682687220801-eef408f95d71?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="wf-container relative z-20 text-center">
        <div 
          className={`transition-all duration-700 delay-300 transform ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Budget Travel Tips for Everyone
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how to explore the world without breaking the bank. Travel smart, travel more.
          </p>
          
          <button 
            onClick={onReadBlog}
            className="wf-btn text-lg"
          >
            Read the Blog
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div 
          className={`w-8 h-12 border-2 border-white/70 rounded-full flex justify-center pt-2 transition-opacity delay-1000 duration-1000 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
