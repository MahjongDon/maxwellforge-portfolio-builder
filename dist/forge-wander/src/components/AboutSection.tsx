
import { useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="about" ref={sectionRef} className="py-24">
      <div className="wf-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-wanderfree-blue font-medium">ABOUT US</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">Our Mission</h2>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 leading-relaxed">
              WanderFree helps you travel the world on a budget. Explore tips, hacks, and destinations to make your next trip affordable and amazing. We believe that traveling shouldn't be a luxury reserved for the wealthy - it should be accessible to everyone who dreams of exploring new places.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our team of experienced budget travelers shares authentic advice gained from years of worldwide exploration. Whether you're planning your first backpacking adventure or looking to optimize your family vacation budget, WanderFree is your trusted resource for making travel more affordable and accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
