
import React from 'react';
import Button from '../Button';
import CountdownTimer from '../CountdownTimer';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-24 pb-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-revup-red/10 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-revup-dark to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-revup-red/20 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-revup-red/10 filter blur-3xl"></div>
      </div>

      <div className="revup-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-revup-red/20 rounded-full mb-6 backdrop-blur-sm border border-revup-red/30 animate-fade-in">
            <p className="text-sm md:text-base font-medium text-white">February 15-17, 2025 • Grand Hyatt, New York</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight tracking-tight animate-fade-in" style={{ animationDelay: '200ms' }}>
            Unlock the Secrets to <span className="text-gradient">10X Your Sales</span> in 2025!
          </h1>
          
          <p className="text-xl md:text-2xl text-revup-gray mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
            Join the RevUp Sales Summit—Limited Seats, Unlimited Potential. Learn from industry titans and transform your sales approach forever.
          </p>

          <div className="mb-8 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <p className="text-lg text-white mb-4">Sale Ends In:</p>
            <CountdownTimer initialDuration={{ days: 1, hours: 5, minutes: 20, seconds: 0 }} />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Button href="#register" variant="primary" size="lg" animated>
              Register Now
            </Button>
            <Button href="#agenda" variant="secondary" size="lg">
              View Agenda
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-revup-red mb-2">3</p>
              <p className="text-sm text-revup-gray">Days of Training</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-revup-red mb-2">12+</p>
              <p className="text-sm text-revup-gray">Expert Speakers</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-revup-red mb-2">500</p>
              <p className="text-sm text-revup-gray">Limited Seats</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-revup-red mb-2">100%</p>
              <p className="text-sm text-revup-gray">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
