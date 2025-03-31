
import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import { cn } from '@/lib/utils';

interface AgendaDay {
  day: string;
  date: string;
  title: string;
  sessions: {
    time: string;
    title: string;
    description: string;
    speaker?: string;
  }[];
}

const Agenda = () => {
  const [activeDay, setActiveDay] = useState(0);
  
  const agendaData: AgendaDay[] = [
    {
      day: "Day 1",
      date: "February 15, 2025",
      title: "Mindset Mastery for Sales",
      sessions: [
        {
          time: "9:00 AM - 10:30 AM",
          title: "Opening Keynote: The Psychology of 10X Sales",
          description: "Discover the mindset shifts that separate top 1% sellers from the rest.",
          speaker: "John Maxwell"
        },
        {
          time: "11:00 AM - 12:30 PM",
          title: "Breaking Limiting Beliefs in Sales",
          description: "Identify and eliminate the mental blocks holding back your sales potential.",
          speaker: "Sarah Johnson"
        },
        {
          time: "2:00 PM - 3:30 PM",
          title: "The Courage to Close: Overcoming Fear of Rejection",
          description: "Learn how to turn rejection into opportunity and build unstoppable confidence.",
          speaker: "Michael Rodriguez"
        },
        {
          time: "4:00 PM - 5:30 PM",
          title: "Panel Discussion: Habits of Million-Dollar Salespeople",
          description: "Hear directly from top performers about their daily routines and success secrets.",
        }
      ]
    },
    {
      day: "Day 2",
      date: "February 16, 2025",
      title: "Closing Techniques That Work",
      sessions: [
        {
          time: "9:00 AM - 10:30 AM",
          title: "The Non-Pushy Close: Ethical Persuasion Tactics",
          description: "Master the art of guiding customers to 'yes' without manipulation or pressure.",
          speaker: "Michael Rodriguez"
        },
        {
          time: "11:00 AM - 12:30 PM",
          title: "Objection Handling: Turn 'No' Into 'Yes'",
          description: "A proven framework for addressing every type of customer objection effectively.",
          speaker: "Sarah Johnson"
        },
        {
          time: "2:00 PM - 3:30 PM",
          title: "Digital Sales Mastery: Closing in the Virtual World",
          description: "Adapt your closing techniques for online and remote selling environments.",
          speaker: "John Maxwell"
        },
        {
          time: "4:00 PM - 5:30 PM",
          title: "Live Demonstrations: Closing Real Deals",
          description: "Watch expert closers demonstrate their techniques with real prospects in real-time.",
        }
      ]
    },
    {
      day: "Day 3",
      date: "February 17, 2025",
      title: "Implementation & Scale",
      sessions: [
        {
          time: "9:00 AM - 10:30 AM",
          title: "Building Your Personal Sales System",
          description: "Create your customized sales playbook to implement everything you've learned.",
          speaker: "John Maxwell"
        },
        {
          time: "11:00 AM - 12:30 PM",
          title: "The Follow-Up Formula: Never Lose a Lead Again",
          description: "Develop an automated follow-up system that converts leads to customers.",
          speaker: "Sarah Johnson"
        },
        {
          time: "2:00 PM - 3:30 PM",
          title: "Becoming a Sales Leader: Influence & Team Building",
          description: "Learn how to elevate your entire team and become the go-to sales authority.",
          speaker: "Michael Rodriguez"
        },
        {
          time: "4:00 PM - 5:30 PM",
          title: "Closing Ceremony: Your 30-Day Action Plan",
          description: "Walk away with a concrete, step-by-step plan to implement your new skills immediately.",
        }
      ]
    }
  ];

  return (
    <section id="agenda" className="revup-section relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-revup-red/30 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-revup-red/20 filter blur-3xl"></div>
      </div>
      
      <div className="revup-container relative z-10">
        <SectionHeading 
          title="Event Agenda" 
          subtitle="Three transformative days packed with actionable content, hands-on workshops, and networking opportunities."
        />
        
        {/* Day selector tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {agendaData.map((day, index) => (
            <button
              key={index}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 font-medium text-base md:text-lg",
                activeDay === index
                  ? "bg-revup-red text-white shadow-lg"
                  : "bg-revup-dark-gray text-white hover:bg-revup-red/20"
              )}
              onClick={() => setActiveDay(index)}
            >
              {day.day}: {day.title}
            </button>
          ))}
        </div>
        
        {/* Day content */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display">{agendaData[activeDay].title}</h3>
          <p className="text-revup-gray text-lg">{agendaData[activeDay].date}</p>
        </div>
        
        {/* Sessions */}
        <div className="max-w-4xl mx-auto">
          {agendaData[activeDay].sessions.map((session, index) => (
            <div 
              key={index}
              className={cn(
                "bg-revup-dark-gray rounded-lg p-6 mb-6 shadow-lg border-l-4 border-revup-red animate-fade-in",
                "transform transition-all duration-500 hover:translate-x-1"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <p className="text-revup-red font-medium mb-2 md:mb-0">{session.time}</p>
                {session.speaker && (
                  <p className="text-revup-gray text-sm">
                    Presented by <span className="text-white">{session.speaker}</span>
                  </p>
                )}
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-3">{session.title}</h4>
              <p className="text-revup-gray">{session.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
