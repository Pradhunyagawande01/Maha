import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Star,
  Zap,
  Target,
  Award,
} from "lucide-react";

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate floating particles
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2,
          speed: Math.random() * 3 + 1,
          color: ["#e60012", "#0066cc", "#ffcc00", "#00cc44"][
            Math.floor(Math.random() * 4)
          ],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const stats = [
    {
      icon: <Calendar className="h-16 w-16 text-yellow-400 float-animation" />,
      value: "48",
      label: "Hours",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-500/20",
    },
    {
      icon: (
        <Users
          className="h-16 w-16 text-green-400 float-animation"
          style={{ animationDelay: "1s" }}
        />
      ),
      value: "500+",
      label: "Hackers",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-500/20",
    },
    {
      icon: (
        <Trophy
          className="h-16 w-16 text-red-400 float-animation"
          style={{ animationDelay: "2s" }}
        />
      ),
      value: "₹50K",
      label: "Prizes",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-500/20",
    },
    {
      icon: (
        <MapPin
          className="h-16 w-16 text-blue-400 float-animation"
          style={{ animationDelay: "3s" }}
        />
      ),
      value: "Mumbai",
      label: "Location",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-500/20",
    },
  ];

  const features = [
    { icon: <Star className="h-8 w-8" />, text: "Epic Coding Adventure" },
    { icon: <Zap className="h-8 w-8" />, text: "Lightning Fast WiFi" },
    { icon: <Target className="h-8 w-8" />, text: "Real World Impact" },
    { icon: <Award className="h-8 w-8" />, text: "Amazing Prizes" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full opacity-30 float-animation"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              animationDuration: `${particle.speed}s`,
              animationDelay: `${particle.id * 0.2}s`,
            }}
          />
        ))}
      </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
  {/* Main Title */}
  <div className="slide-in-left mx-auto">
    <h1 className="mb-8 text-5xl font-bold zoom-in">
      <span className="text-green-500">Hack</span>
      <span className="text-orange-500">4Maha</span>
    </h1>

    <div className="mb-8">
      <p className="text-xl md:text-2xl text-white mb-4 mario-text slide-in-right zoom-in">
        30 - 31st AUG 2025
      </p>
      <p className="text-lg text-orange-600 mario-text slide-in-right zoom-in mb-8">
        संयोजय | नवसृज | विजयी भव
      </p>
      <p className="text-lg text-orange-600 mario-text slide-in-right zoom-in mb-10">
        Central India's 24 Hours Premiere Hackathon
      </p>

      {/* Pixelated Buttons - Centered */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-in-right zoom-in">
  {/* Transparent Glass Button with Animated Yellow Fill */}
  <a
    href="#register"
    className="relative overflow-hidden rounded-lg border-2 border-white text-white font-bold py-3 px-6 backdrop-blur-md bg-transparent transition-all duration-300 z-10 group"
  >
    <span className="relative z-20">Register Now</span>
   <span
  className="absolute inset-0 bg-black-100 blur-md scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"
  style={{ borderRadius: "0.5rem" }}
></span>

  </a>

  {/* Pixel Button for Discord */}
  <a
    href="https://discord.gg/yourlink"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-transperent hover:bg-blue-700 text-white font-bold py-3 px-6 border-4 border-black rounded-lg  transition-all duration-200"
  >
    Join Discord
  </a>
</div>

    </div>
  </div>
</div>

    </div>
  );
};

export default Hero;
