
import React, { useRef, useEffect } from 'react';

const Map = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="location" className="joe-section">
      <div 
        ref={sectionRef}
        className="fade-in-section"
      >
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-joe-blue/10 rounded-full mb-4">
            <span className="text-joe-blue text-sm font-medium">Find Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Location
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Located in the heart of downtown, our coffee shop is easily accessible and waiting to serve you.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.2990112364707!2d-122.33026302393227!3d47.60623397107638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab2f8fc9713%3A0x11bbc2c077d9233!2sPike%20Place%20Market!5e0!3m2!1sen!2sus!4v1682800795821!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Joe's Coffee Shop location"
          ></iframe>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-600">123 Coffee Lane<br />Seattle, WA 98101</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Hours</h3>
            <p className="text-gray-600">Monday - Friday: 7am - 7pm<br />Weekends: 8am - 6pm</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-gray-600">info@joescoffee.com<br />(555) 123-4567</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
