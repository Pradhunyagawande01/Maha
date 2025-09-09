import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Car, Train, Coffee, Wifi, Utensils, Shield } from 'lucide-react';
import DottedBg from './DottedBg';
import { GoogleGeminiEffect } from './ui/GoogleGeminiEffect';

const Venue = () => {
  const [pathLengths, setPathLengths] = useState([0, 0, 0, 0, 0]);
  const geminiRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPathLengths([1, 1, 1, 1, 1]);
          } else {
            setPathLengths([0, 0, 0, 0, 0]);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (geminiRef.current) observer.observe(geminiRef.current);

    return () => {
      if (geminiRef.current) observer.unobserve(geminiRef.current);
    };
  }, []);

  return (
    <section className="relative py-24 overflow-hidden  ">
      {/* Dotted Background */}
      <DottedBg
        dotColor="rgba(255, 255, 255, 0.15)"
        dotSize={2}
        baseSpacing={40}
        repelRadius={100}
        explodeStrength={25}
        returnSpeed={0.5}
      />

     
    

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="section-title text-center py-20 text-4xl font-extrabold text-transparent bg-clip-text bg-orange-600">
          Venue
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Venue Details */}
          <div className="space-y-8">
            <div className="pixel-card p-8 bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl shadow-lg   transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <MapPin className="h-12 w-12 text-orange-800  " />
                <div>
                  <h3 className="text-2xl font-bold text-white pixel-text">
                    Main Venue
                  </h3>
                   
                </div>
              </div>
              <div className="space-y-4 text-slate-300">
                <p><span className="italic text-slate-400">Location:</span> To Be Decided</p>
                {/* <p>📞 <span className="italic text-slate-400">Contact:</span> +91 77769 55168</p> */}
              </div>
            </div>

            {/* Transportation */}
            <div className="pixel-card p-8 bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl shadow-lg   transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 pixel-text">
                How to Reach
              </h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <Train className="h-6 w-6 text-blue-400 mt-1 animate-pulse" />
                  <div>
                    <p className="text-white font-medium">By Train</p>
                    <p className="text-slate-400 text-sm">
                      Nearest station info will be updated soon
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Car className="h-6 w-6 text-green-400 mt-1  " />
                  <div>
                    <p className="text-white font-medium">By Car</p>
                    <p className="text-slate-400 text-sm">
                      Parking & route details coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="pixel-card p-8 bg-gradient-to-br from-slate-700/60 to-slate-800/70 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl flex flex-col justify-center items-center">
            <div className="aspect-video w-full bg-slate-700/50 rounded-xl flex items-center justify-center border border-dashed border-cyan-400/50">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                <p className="text-white font-bold text-2xl pixel-text">Map</p>
                <p className="text-slate-400 mt-2">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>

        
         
      </div>
    </section>
  );
};

export default Venue;
