
import React from 'react';
import SectionHeading from '../SectionHeading';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
  stars?: number;
}

const TestimonialCard = ({ quote, name, title, image, stars = 5 }: TestimonialProps) => {
  return (
    <div className="bg-gradient-to-br from-revup-dark-gray to-revup-dark rounded-lg p-6 shadow-lg border border-white/5 h-full flex flex-col animate-scale-in">
      <div className="flex mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={18} className="text-revup-red fill-revup-red" />
        ))}
      </div>
      
      <blockquote className="mb-6 flex-grow">
        <p className="text-white italic relative">
          <span className="text-revup-red text-4xl absolute -top-4 -left-2 opacity-40">"</span>
          {quote}
          <span className="text-revup-red text-4xl absolute -bottom-8 -right-2 opacity-40">"</span>
        </p>
      </blockquote>
      
      <div className="flex items-center mt-auto">
        {image && (
          <div className="mr-4">
            <img 
              src={image} 
              alt={name} 
              className="h-12 w-12 rounded-full object-cover border-2 border-revup-red"
            />
          </div>
        )}
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-revup-gray text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This seminar changed my life. I was struggling to hit my targets, but after implementing what I learned at RevUp, I'm now the top salesperson at my dealership for 8 months straight.",
      name: "James Wilson",
      title: "Sales Manager, Luxury Motors",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      quote: "I was skeptical at first, but the ROI has been incredible. The closing techniques alone doubled my conversion rate. Worth every penny and then some.",
      name: "Emily Rodriguez",
      title: "Senior Sales Consultant, AutoNation",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      quote: "The mindset training was just what I needed. I've completely transformed how I approach objections, and my customers can feel the difference. My closing ratio went from 22% to 47%!",
      name: "Michael Chen",
      title: "Sales Director, Premier Auto Group",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
    },
    {
      quote: "I've attended many sales seminars, but RevUp is in a different league. The techniques are cutting-edge, the energy is incredible, and the results speak for themselves. My income increased by 86% in just 6 months.",
      name: "Sophia Martinez",
      title: "Top Performer, Hometown Motors",
      image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  ];

  return (
    <section id="testimonials" className="revup-section bg-gradient-to-b from-revup-dark-gray to-revup-dark relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/3 w-72 h-72 rounded-full bg-revup-red/20 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-revup-red/10 filter blur-3xl"></div>
      </div>
      
      <div className="revup-container relative z-10">
        <SectionHeading 
          title="Success Stories" 
          subtitle="Don't just take our word for it. Hear from past attendees who transformed their sales careers after attending the RevUp Sales Summit."
          gradient
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
              stars={5}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-revup-red/10 border border-revup-red/30 rounded-lg p-8 text-center max-w-3xl mx-auto backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">Results That Speak Volumes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4">
              <p className="text-3xl font-bold text-revup-red mb-1">93%</p>
              <p className="text-sm text-revup-gray">Report Higher Income</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-revup-red mb-1">4.2×</p>
              <p className="text-sm text-revup-gray">Average Sales Increase</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-revup-red mb-1">76%</p>
              <p className="text-sm text-revup-gray">Close More Deals</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-revup-red mb-1">98%</p>
              <p className="text-sm text-revup-gray">Would Recommend</p>
            </div>
          </div>
          <p className="text-revup-gray text-sm">Based on survey of 500+ past attendees, 6 months post-event</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
