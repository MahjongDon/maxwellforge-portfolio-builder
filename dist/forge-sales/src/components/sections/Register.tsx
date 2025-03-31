
import React from 'react';
import SectionHeading from '../SectionHeading';
import Button from '../Button';
import { Check } from 'lucide-react';

const Register = () => {
  const benefitsList = [
    "Full 3-day access to all keynotes and breakout sessions",
    "Comprehensive workbook and implementation guides",
    "Networking reception with speakers and industry leaders",
    "Lunch and refreshments provided each day",
    "30-day post-event support and follow-up coaching call",
    "Exclusive access to attendee-only resources",
    "Certificate of completion for professional development"
  ];

  return (
    <section id="register" className="revup-section relative">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-revup-red/20 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-revup-red/10 filter blur-3xl"></div>
      </div>
      
      <div className="revup-container relative z-10">
        <SectionHeading 
          title="Secure Your Seat Today" 
          subtitle="Limited to just 500 attendees to ensure a personalized experience. Spots are filling quickly!"
          gradient
        />
        
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-revup-dark-gray to-revup-dark rounded-lg overflow-hidden shadow-xl border border-white/10">
          <div className="bg-revup-red p-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-display">RevUp Sales Summit 2025</h3>
            <p className="text-white/90 mt-2">February 15-17, 2025 • Grand Hyatt, New York</p>
          </div>
          
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-8 border-b border-white/10">
              <div>
                <div className="flex items-baseline mb-4">
                  <span className="text-white text-lg">Early Bird Price:</span>
                  <span className="text-revup-red text-3xl md:text-4xl font-bold ml-3">$1,997</span>
                  <span className="text-revup-gray text-base ml-2 line-through">$2,997</span>
                </div>
                <p className="text-revup-gray">Price increases on December 15, 2024</p>
              </div>
              
              <div className="bg-revup-red/10 border border-revup-red/30 px-4 py-2 rounded-lg mt-4 md:mt-0">
                <p className="text-white text-sm font-medium">Only <span className="text-revup-red font-bold">127 spots</span> left at this price</p>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold text-white mb-6">What's Included:</h4>
            
            <ul className="space-y-4 mb-8">
              {benefitsList.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-revup-red mr-3 flex-shrink-0 mt-1" />
                  <span className="text-revup-gray">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="text-center pt-4">
              <Button variant="primary" size="lg" className="w-full md:w-auto">
                Reserve Your Seat Now
              </Button>
              
              <p className="mt-6 text-revup-gray text-sm">
                100% Satisfaction Guaranteed. Full refund available if requested after first day.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display">Corporate Team Packages Available</h3>
          <p className="text-revup-gray mb-8 max-w-2xl mx-auto">
            Bringing your sales team? Special rates available for groups of 3 or more. Contact us to learn more about our corporate packages.
          </p>
          <Button variant="secondary" href="mailto:groups@revupsummit.com">
            Contact About Group Rates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Register;
