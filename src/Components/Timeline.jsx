import React from 'react';
import { Clock, Coffee, Trophy, Flag } from 'lucide-react';
import DottedBg from './DottedBg';

const Timeline = () => {
  const events = [
    {
      time: "Day 1 - 9:00 AM",
      icon: <Flag className="h-8 w-8 text-green-400" />,
      title: "Registration & Check-in",
      description: "Welcome breakfast, team formation, and event kick-off"
    },
    {
      time: "Day 1 - 10:00 AM",
      icon: <Clock className="h-8 w-8 text-blue-400" />,
      title: "Opening Ceremony",
      description: "Welcome speech, track introductions, and rules explanation"
    },
    {
      time: "Day 1 - 11:00 AM",
      icon: <Coffee className="h-8 w-8 text-yellow-400" />,
      title: "Hacking Begins!",
      description: "48 hours of non-stop coding, building, and innovation"
    },
    {
      time: "Day 1 - 1:00 PM",
      icon: <Coffee className="h-8 w-8 text-orange-400" />,
      title: "Lunch Break",
      description: "Fuel up with delicious food and networking"
    },
    {
      time: "Day 1 - 6:00 PM",
      icon: <Clock className="h-8 w-8 text-purple-400" />,
      title: "Workshop Session",
      description: "Technical workshops and mentor sessions"
    },
    {
      time: "Day 1 - 9:00 PM",
      icon: <Coffee className="h-8 w-8 text-red-400" />,
      title: "Dinner & Networking",
      description: "Connect with fellow hackers and mentors"
    },
    {
      time: "Day 2 - 12:00 AM",
      icon: <Clock className="h-8 w-8 text-cyan-400" />,
      title: "Midnight Snacks",
      description: "Keep the energy up with late-night fuel"
    },
    {
      time: "Day 2 - 8:00 AM",
      icon: <Coffee className="h-8 w-8 text-green-400" />,
      title: "Breakfast & Standup",
      description: "Morning fuel and progress check-ins"
    },
    {
      time: "Day 2 - 2:00 PM",
      icon: <Clock className="h-8 w-8 text-pink-400" />,
      title: "Submission Deadline",
      description: "Final submissions and demo preparations"
    },
    {
      time: "Day 2 - 3:00 PM",
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      title: "Presentations",
      description: "Teams showcase their amazing projects"
    },
    {
      time: "Day 2 - 6:00 PM",
      icon: <Trophy className="h-8 w-8 text-gold-400" />,
      title: "Awards Ceremony",
      description: "Winners announced and prizes distributed"
    },
    {
      time: "Day 2 - 7:00 PM",
      icon: <Flag className="h-8 w-8 text-red-400" />,
      title: "Closing Ceremony",
      description: "Thank you and see you next year!"
    }
  ];

  return (
 <section className="relative py-20 bg-slate-800 overflow-hidden">
  {/* Make DottedBg absolutely positioned inside */}
  <DottedBg
    dotColor="rgba(255, 255, 255, 0.25)"
    dotSize={2}
    baseSpacing={40}
    repelRadius={100}
    explodeStrength={25}
    returnSpeed={0.5}
  />      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-10 h-10 bg-blue-400 opacity-10 float-animation"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-green-400 opacity-15 rotate-animation"></div>
        <div className="absolute bottom-1/3 left-10 w-8 h-8 bg-purple-400 opacity-20 float-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text zoom-in text-orange-500 mb-12">
           Timeline
        </h2>
        
        <div className="text-center mb-16">
          <p className="text-xl text-slate-300 max-w-3xl mx-auto slide-in">
            Your 48-hour adventure awaits! Here's what to expect during our epic hackathon journey.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} slide-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="pixel-card p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                    <div className={`flex items-center space-x-4 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      {index % 2 === 0 ? (
                        <>
                          <div className="text-cyan-400 font-bold">{event.time}</div>
                          <div className="float-animation" style={{animationDelay: `${index * 0.2}s`}}>{event.icon}</div>
                        </>
                      ) : (
                        <>
                          <div className="float-animation" style={{animationDelay: `${index * 0.2}s`}}>{event.icon}</div>
                          <div className="text-cyan-400 font-bold">{event.time}</div>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 pixel-text">
                      {event.title}
                    </h3>
                    <p className="text-slate-300">
                      {event.description}
                    </p>
                  </div>
                </div>
                
                <div className="w-2/12 flex justify-center">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full border-4 border-slate-800 pulse-glow"></div>
                </div>
                
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center slide-up" style={{animationDelay: '1.5s'}}>
          <div className="pixel-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 pixel-text">
              Ready for the Challenge?
            </h3>
            <p className="text-slate-300 mb-6">
              48 hours of coding, learning, and building amazing projects. Are you ready to level up?
            </p>
            <button className="pixel-button text-lg hover:shake-animation">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;