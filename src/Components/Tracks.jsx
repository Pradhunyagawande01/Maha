import React from 'react';
import { Smartphone, Globe, Brain, Shield, Leaf, Heart } from 'lucide-react';
import DottedBg from './DottedBg';

const Tracks = () => {
  const tracks = [
    {
      icon: <Smartphone className="h-16 w-16 text-blue-400" />,
      title: "Mobile Development",
      description: "Build innovative mobile apps for Android and iOS platforms",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Globe className="h-16 w-16 text-green-400" />,
      title: "Web Development",
      description: "Create stunning web applications and responsive websites",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Brain className="h-16 w-16 text-purple-400" />,
      title: "AI & Machine Learning",
      description: "Develop intelligent systems and ML-powered solutions",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="h-16 w-16 text-red-400" />,
      title: "Cybersecurity",
      description: "Build secure systems and protect digital infrastructure",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Leaf className="h-16 w-16 text-emerald-400" />,
      title: "Sustainability",
      description: "Create eco-friendly solutions for environmental challenges",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Heart className="h-16 w-16 text-pink-400" />,
      title: "Healthcare",
      description: "Develop healthcare solutions to improve lives",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
 <section className="relative py-20   overflow-hidden">
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
        <div className="absolute top-1/4 left-10 w-12 h-12 bg-cyan-400 opacity-10 rotate-animation"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-yellow-400 opacity-15 float-animation"></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-pink-400 opacity-20 rotate-animation" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text zoom-in text-orange-500 mb-12">
         Tracks
        </h2>
        
        <div className="text-center mb-16">
          <p className="text-xl text-slate-300 max-w-3xl mx-auto slide-in">
            Choose your adventure! Pick from our exciting tracks and build solutions 
            that make a real impact. Each track has dedicated mentors and amazing prizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div 
              key={index}
              className="pixel-card p-8 text-center hover:scale-105 transition-all duration-300 relative overflow-hidden bounce-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-10`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6 float-animation" style={{animationDelay: `${index * 0.3}s`}}>
                  {track.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 pixel-text">
                  {track.title}
                </h3>
                <p className="text-slate-300 mb-6">
                  {track.description}
                </p>
                <button className="pixel-button hover:shake-animation">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

         
      </div>
    </section>
  );
};

export default Tracks;