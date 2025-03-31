
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-revup-dark-gray border-t border-white/10 pt-16 pb-8">
      <div className="revup-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-display">
              Rev<span className="text-revup-red">Up</span> Sales Summit
            </h3>
            <p className="text-revup-gray mb-4">
              The premier event for sales professionals ready to transform their careers and 10X their results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-revup-gray hover:text-revup-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-revup-gray hover:text-revup-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-revup-gray hover:text-revup-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-revup-gray hover:text-revup-red transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-revup-gray hover:text-revup-red transition-colors">Home</a></li>
              <li><a href="#speakers" className="text-revup-gray hover:text-revup-red transition-colors">Speakers</a></li>
              <li><a href="#agenda" className="text-revup-gray hover:text-revup-red transition-colors">Agenda</a></li>
              <li><a href="#testimonials" className="text-revup-gray hover:text-revup-red transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-revup-gray hover:text-revup-red transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Event Details</h4>
            <ul className="space-y-2 text-revup-gray">
              <li>Date: February 15-17, 2025</li>
              <li>Location: Grand Hyatt, New York</li>
              <li>Doors Open: 8:00 AM</li>
              <li>Event Start: 9:00 AM</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-revup-gray">
                <Phone size={18} className="mr-2 text-revup-red" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center text-revup-gray">
                <Mail size={18} className="mr-2 text-revup-red" />
                <span>info@revupsummit.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-revup-gray text-sm">
          <p>&copy; {new Date().getFullYear()} RevUp Sales Summit. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-revup-red transition-colors">Privacy Policy</a>
            {' • '}
            <a href="#" className="hover:text-revup-red transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
