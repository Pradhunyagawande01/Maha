import React from 'react';
import { Code, Lightbulb, Users, Target } from 'lucide-react';
import DottedBg from './DottedBg';
import ScrollVelocity from '../scroll velocity/ScrollVelocity.jsx';

const About = () => {
  const features = [
    {
      icon: <Code className="h-16 w-16 text-cyan-400" />,
      title: "24 Hours of Coding",
    },
    {
      icon: <Lightbulb className="h-16 w-16 text-yellow-400" />,
      title: "Innovation Hub",
    },
    {
      icon: <Users className="h-16 w-16 text-green-400" />,
      title: "Team Building",
    },
    {
      icon: <Target className="h-16 w-16 text-red-400" />,
      title: "Real Impact",
    }
  ];

  return (
    <section className="relative py-20 bg-slate-800 overflow-hidden">
      <DottedBg
        dotColor="rgba(255, 255, 255, 0.25)"
        dotSize={2}
        baseSpacing={40}
        repelRadius={100}
        explodeStrength={25}
        returnSpeed={0.5}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12 text-orange-500 text-4xl font-bold">
          About
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-start font-poppins">
          {/* Left: Description Box */}
          <div className="lg:w-1/2 w-full">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 text-left shadow-lg">
              <h4 className="text-xl text-yellow-400 mb-4 slide-in font-normal">
                WHAT IS HACK4MAHA?
              </h4>
              {/* <p className="text-base text-white fade-in font-normal" style={{ animationDelay: '0.5s' }}>
                Hack4Maha is a 24-hour arcade-themed hackathon where culture meets code. From the forts of Shivaji Maharaj to the streets of Mumbai, we honor Maharashtra’s spirit.
              </p> */}
              <p className="text-white mt-3 font-normal">
                In one electrifying day, tradition and tech collide to create tomorrow. Hack for legacy. Build for the future.
              </p>
              <p className="text-white mt-3 font-normal">
                Hack4Maha is Maharashtra’s biggest 24-hour hackathon, where technology meets tradition. Powered by NariNexus, this arcade-themed hackathon celebrates the spirit of Maharashtra — from the bravery echoing in the stones of Sinhagad, Raigad, and Pratapgad, to the zest of Nagpur’s oranges and the unstoppable creativity of Mumbai’s streets.
              </p>
            </div>
          </div>

          {/* Right: Features Grid */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 lg:mt-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 text-center bg-white/5 border border-white/10 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="flex justify-center mb-4 float-animation"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <span role="img" aria-label={feature.title}>
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 pixel-text">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

    {/* Scroll Velocity - Adjusted spacing */}
<div className="mt-48 mb-12 lg:mb-16">
<ScrollVelocity
  className="text-3xl md:text-5xl font-bold"
  texts={[
    "Hack4Maha 🚀",
    "Powered by NariNexus 💡",
    "Code. Culture. Creativity.",
    "Powered by NariNexus 💡",
  ]}
/>  
</div>
      
    </section>
  );
};

export default About;
