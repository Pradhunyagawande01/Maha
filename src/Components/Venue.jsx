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
            // Animate path lengths when component comes into view
            setPathLengths([1, 1, 1, 1, 1]);
          } else {
            // Reset animation when out of view
            setPathLengths([0, 0, 0, 0, 0]);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
      }
    );

    if (geminiRef.current) {
      observer.observe(geminiRef.current);
    }

    return () => {
      if (geminiRef.current) {
        observer.unobserve(geminiRef.current);
      }
    };
  }, []);

  const amenities = [
    {
      icon: <Wifi className="h-8 w-8 text-blue-400" />,
      title: "High-Speed Internet",
      description: "Blazing fast WiFi with dedicated bandwidth for all participants"
    },
    {
      icon: <Utensils className="h-8 w-8 text-green-400" />,
      title: "Food & Beverages",
      description: "Unlimited snacks, meals, and beverages throughout the event"
    },
    {
      icon: <Coffee className="h-8 w-8 text-yellow-400" />,
      title: "24/7 Cafe",
      description: "Coffee bar open round the clock to keep you energized"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-400" />,
      title: "Security",
      description: "24/7 security with safe parking and locker facilities"
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
        <div className="absolute top-20 left-20 w-12 h-12 bg-blue-400 opacity-10 rotate-animation"></div>
        <div className="absolute top-1/3 right-10 w-8 h-8 bg-yellow-400 opacity-15 float-animation"></div>
        <div className="absolute bottom-20 left-1/4 w-6 h-6 bg-green-400 opacity-20 rotate-animation" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text zoom-in text-orange-500 mb-12">
          Venue 
        </h2>
        
        {/* <div className="text-center mb-16">
          <p className="text-xl text-slate-300 max-w-3xl mx-auto slide-in">
            Join us at the amazing venue in the heart of Mumbai! Fully equipped with 
            all the amenities you need for an epic 48-hour coding adventure.
          </p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Venue Details */}
          <div className="space-y-8">
            <div className="pixel-card p-8 bounce-in">
              <div className="flex items-center space-x-4 mb-6">
                <MapPin className="h-12 w-12 text-cyan-400 float-animation" />
                <div>
                  <h3 className="text-2xl font-bold text-white pixel-text">
                    Main Venue
                  </h3>
                  <p className="text-slate-300">Mumbai Convention Center</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-300">
                {/* <p>📍 123 Tech Park, Bandra-Kurla Complex</p> */}
                <p>🏢 Nagpur, Maharashtra 400051</p>
                <p>📞 +91 77769 55168</p>
            
              </div>
            </div>

            {/* Transportation */}
            <div className="pixel-card p-8 bounce-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold text-white mb-6 pixel-text">
                How to Reach
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Train className="h-6 w-6 text-blue-400 mt-1 float-animation" />
                  <div>
                    <p className="text-white font-medium">By Train</p>
                    <p className="text-slate-300 text-sm">
                      Nearest station: Kurla (5 min walk) | BKC Metro (2 min walk)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Car className="h-6 w-6 text-green-400 mt-1 float-animation" style={{animationDelay: '1s'}} />
                  <div>
                    <p className="text-white font-medium">By Car</p>
                    <p className="text-slate-300 text-sm">
                      Ample parking available | Valet service provided
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="pixel-card p-8 bg-slate-700/50 bounce-in" style={{animationDelay: '0.4s'}}>
            <div className="aspect-video bg-slate-600 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-cyan-400 mx-auto mb-4 float-animation" />
                <p className="text-white font-bold text-xl pixel-text">Interactive Map</p>
                <p className="text-slate-300 mt-2">Click to open in Google Maps</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="pixel-button hover:shake-animation">
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* GoogleGeminiEffect Component - Same to Same */}


        
        <div ref={geminiRef} className="mt-0.5 relative h-screen flex items-center justify-center">
          <GoogleGeminiEffect
            pathLengths={pathLengths}
            title="Amazing Venue Experience"
            description="Witness the magic of our state-of-the-art venue coming to life as you scroll!"
            className="relative top-0"
          />
        </div>

         

      
         
      </div>
    </section>
  );
};

export default Venue;