
import React from 'react';
import SectionHeading from '../SectionHeading';

interface SpeakerProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  imagePosition?: string;
}

const SpeakerCard = ({ name, title, image, bio, imagePosition = 'center' }: SpeakerProps) => {
  return (
    <div className="bg-revup-dark-gray rounded-lg overflow-hidden shadow-lg card-hover animate-scale-in">
      <div className="relative overflow-hidden h-72">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover object-${imagePosition}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-revup-dark to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white font-display">{name}</h3>
        <p className="text-revup-red font-medium mb-4">{title}</p>
        <p className="text-revup-gray text-sm">{bio}</p>
      </div>
    </div>
  );
};

const Speakers = () => {
  const speakers = [
    {
      name: "John Maxwell",
      title: "Sales Legend & 5x NY Times Bestselling Author",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "With over 25 years of experience in automotive sales, John has helped thousands of sales professionals multiply their closing rates and transform their careers.",
      imagePosition: "center 60%"
    },
    {
      name: "Sarah Johnson",
      title: "Digital Sales Strategist",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Sarah's innovative approach to digital sales has revolutionized how top dealerships connect with customers. Her strategies have generated over $100M in sales."
    },
    {
      name: "Michael Rodriguez",
      title: "Closing Techniques Expert",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Known for his ability to close even the most challenging deals, Michael will reveal the psychological triggers that make customers say 'yes' every time."
    },
  ];

  return (
    <section id="speakers" className="revup-section bg-gradient-to-b from-revup-dark to-revup-dark-gray relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-revup-red/30 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-revup-red/20 filter blur-3xl"></div>
      </div>
      
      <div className="revup-container relative z-10">
        <SectionHeading 
          title="Learn from Industry Titans" 
          subtitle="Our elite lineup of speakers have transformed thousands of sales careers with their proven strategies and techniques."
          gradient
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard 
              key={index}
              name={speaker.name}
              title={speaker.title}
              image={speaker.image}
              bio={speaker.bio}
              imagePosition={speaker.imagePosition}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-revup-red font-semibold mb-2">And 9 more industry experts</p>
          <p className="text-revup-gray">Complete speaker lineup will be revealed closer to the event date</p>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
