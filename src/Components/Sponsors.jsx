import React from 'react';
import { Star, Award, Crown, Gem } from 'lucide-react';
import DottedBg from './DottedBg';

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      icon: <Crown className="h-12 w-12 text-yellow-400" />,
      color: "from-yellow-400 to-yellow-600",
      sponsors: [
        {
          name: "TechCorp",
          logo: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=200",
          description: "Leading technology solutions provider"
        }
      ]
    },
    {
      tier: "Platinum Sponsors",
      icon: <Gem className="h-12 w-12 text-purple-400" />,
      color: "from-purple-400 to-purple-600",
      sponsors: [
        {
          name: "InnovateLabs",
          logo: "https://images.pexels.com/photos/1181307/pexels-photo-1181307.jpeg?auto=compress&cs=tinysrgb&w=200",
          description: "Innovation in every solution"
        },
        {
          name: "CodeMaster",
          logo: "https://images.pexels.com/photos/1181310/pexels-photo-1181310.jpeg?auto=compress&cs=tinysrgb&w=200",
          description: "Empowering developers worldwide"
        }
      ]
    },
    {
      tier: "Gold Sponsors",
      icon: <Award className="h-12 w-12 text-orange-400" />,
      color: "from-orange-400 to-orange-600",
      sponsors: [
        {
          name: "StartupHub",
          logo: "https://images.pexels.com/photos/1181313/pexels-photo-1181313.jpeg?auto=compress&cs=tinysrgb&w=200",
          description: "Nurturing the next generation of startups"
        },
        {
          name: "CloudTech",
          logo: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=200",
          description: "Cloud solutions for modern businesses"
        },
        {
          name: "DevTools",
          logo: "https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=200",
          description: "Essential tools for developers"
        }
      ]
    },
    {
      tier: "Silver Sponsors",
      icon: <Star className="h-12 w-12 text-blue-400" />,
      color: "from-blue-400 to-blue-600",
      sponsors: [
        {
          name: "WebFlow",
          logo: "https://images.pexels.com/photos/1181322/pexels-photo-1181322.jpeg?auto=compress&cs=tinysrgb&w=200",
          description: "Beautiful web experiences"
        },
        {
          name: "DataCorp",
          logo: "https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=200",
          description: "Data-driven solutions"
        },
        {
          name: "MobileTech",
          logo: "https://images.pexels.com/photos/1181328/pexels-photo-1181328.jpeg?auto=compress&cs=tinysrgb&w=200",
          description: "Mobile-first development"
        },
        {
          name: "AILabs",
          logo: "https://images.pexels.com/photos/1181331/pexels-photo-1181331.jpeg?auto=compress&cs=tinysrgb&w=200",
          description: "Artificial intelligence research"
        }
      ]
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
  />
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-10 h-10 bg-yellow-400 opacity-10 rotate-animation"></div>
        <div className="absolute top-1/2 right-20 w-6 h-6 bg-purple-400 opacity-15 float-animation"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-cyan-400 opacity-20 rotate-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text zoom-in text-orange-500 mb-12">
          Sponsors
        </h2>
        
        <div className="text-center mb-16">
          <p className="text-xl text-slate-300 max-w-3xl mx-auto slide-in">
            We're grateful to our incredible sponsors who make Hack4Maharashtra possible. 
            Their support helps us create an unforgettable experience for all participants!
          </p>
        </div>

        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-8 slide-in" style={{animationDelay: `${tierIndex * 0.2}s`}}>
                <div className="float-animation" style={{animationDelay: `${tierIndex * 0.3}s`}}>
                  {tier.icon}
                </div>
                <h3 className={`text-3xl font-bold pixel-text bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.tier}
                </h3>
              </div>
              
              <div className={`grid gap-8 ${
                tier.sponsors.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                tier.sponsors.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto' :
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              }`}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div 
                    key={sponsorIndex}
                    className="pixel-card p-8 text-center hover:bg-slate-700/50 transition-all duration-300 group hover:scale-105 bounce-in"
                    style={{animationDelay: `${tierIndex * 0.2 + sponsorIndex * 0.1}s`}}
                  >
                    <div className="relative mb-6">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="w-24 h-24 mx-auto rounded-lg object-cover border-2 border-slate-600 group-hover:border-cyan-400 transition-all duration-300"
                      />
                      <div className={`absolute inset-0 w-24 h-24 mx-auto rounded-lg bg-gradient-to-t ${tier.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 pixel-text">
                      {sponsor.name}
                    </h4>
                    <p className="text-slate-300 text-sm">
                      {sponsor.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sponsors;