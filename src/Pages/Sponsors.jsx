import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import PixelArt from '../components/PixelArt';

const Sponsors = () => {
  const [activeCategory, setActiveCategory] = useState('platinum');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state for pixel aesthetic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Sample sponsor data - replace with actual sponsor information
  const sponsors = {
    platinum: [
      {
        name: "TechGiant Corp",
        logo: "/api/placeholder/150/100",
        description: "Leading technology company specializing in cloud solutions and AI services.",
        website: "https://example.com"
      },
      {
        name: "InnovateNow",
        logo: "/api/placeholder/150/100",
        description: "Pioneer in digital transformation and innovative software development.",
        website: "https://example.com"
      }
    ],
    gold: [
      {
        name: "DevStack",
        logo: "/api/placeholder/150/100",
        description: "Developer platform offering tools and services for building modern applications.",
        website: "https://example.com"
      },
      {
        name: "CloudMatrix",
        logo: "/api/placeholder/150/100",
        description: "Cloud infrastructure provider with global data centers and cutting-edge technology.",
        website: "https://example.com"
      },
      {
        name: "DataVision",
        logo: "/api/placeholder/150/100",
        description: "Data analytics company providing insights and solutions for businesses.",
        website: "https://example.com"
      }
    ],
    silver: [
      {
        name: "CodeCraft",
        logo: "/api/placeholder/150/100",
        description: "Software development company specializing in web and mobile applications.",
        website: "https://example.com"
      },
      {
        name: "SecureNet",
        logo: "/api/placeholder/150/100",
        description: "Cybersecurity solutions provider protecting digital assets worldwide.",
        website: "https://example.com"
      },
      {
        name: "AILabs",
        logo: "/api/placeholder/150/100",
        description: "Research-driven artificial intelligence company developing cutting-edge AI models.",
        website: "https://example.com"
      }
    ],
    community: [
      {
        name: "TechHub",
        logo: "/api/placeholder/150/100",
        description: "Co-working space and community for tech startups and entrepreneurs.",
        website: "https://example.com"
      },
      {
        name: "DevNetwork",
        logo: "/api/placeholder/150/100",
        description: "Platform connecting developers and providing resources for growth.",
        website: "https://example.com"
      },
      {
        name: "InnovateCampus",
        logo: "/api/placeholder/150/100",
        description: "Educational institution offering courses in technology and innovation.",
        website: "https://example.com"
      }
    ]
  };

  const categoryInfo = {
    platinum: {
      title: "PLATINUM SPONSORS",
      description: "Our Platinum sponsors are the cornerstone of Hack4Maha, providing major financial support, resources, and expertise.",
      color: "text-purple-400",
      borderColor: "border-purple-400",
      hoverBg: "hover:bg-purple-900/20",
      activeBg: "bg-purple-900/30",
      gradientFrom: "from-purple-900/20",
      gradientTo: "to-black/80"
    },
    gold: {
      title: "GOLD SPONSORS",
      description: "Gold sponsors play a crucial role in supporting our hackathon with significant contributions and specialized resources.",
      color: "text-yellow-400",
      borderColor: "border-yellow-400",
      hoverBg: "hover:bg-yellow-900/20",
      activeBg: "bg-yellow-900/30",
      gradientFrom: "from-yellow-900/20",
      gradientTo: "to-black/80"
    },
    silver: {
      title: "SILVER SPONSORS",
      description: "Silver sponsors help enhance the hackathon experience through their valuable support and participation.",
      color: "text-gray-300",
      borderColor: "border-gray-300",
      hoverBg: "hover:bg-gray-800/50",
      activeBg: "bg-gray-800/70",
      gradientFrom: "from-gray-800/20",
      gradientTo: "to-black/80"
    },
    community: {
      title: "COMMUNITY PARTNERS",
      description: "Our community partners help us reach a wider audience and create a more inclusive environment for all participants.",
      color: "text-teal-400",
      borderColor: "border-teal-400",
      hoverBg: "hover:bg-teal-900/20",
      activeBg: "bg-teal-900/30",
      gradientFrom: "from-teal-900/20",
      gradientTo: "to-black/80"
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Category selector component
  const CategorySelector = () => (
    <div className="border-4 border-cyan-400/70 p-2 bg-gray-900/90 mb-10 relative shadow-lg shadow-cyan-400/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {Object.keys(categoryInfo).map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              font-mono py-3 px-4 text-sm uppercase transition-all duration-300
              ${activeCategory === category 
                ? `${categoryInfo[category].activeBg} border-2 ${categoryInfo[category].borderColor}` 
                : 'bg-gray-800 hover:bg-gray-700 border-2 border-transparent'
              }
            `}
          >
            <span className={activeCategory === category ? categoryInfo[category].color : 'text-gray-400'}>
              {category}
            </span>
          </button>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
    </div>
  );

  // Loading screen
  if (isLoading) {
    return (
      <div className="bg-gray-900 bg-opacity-90 min-h-screen flex flex-col items-center justify-center">
        <div className="font-mono text-4xl text-cyan-400 mb-6">LOADING SPONSORS</div>
        <div className="w-64 h-8 bg-gray-800 border-2 border-cyan-400 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 bg-opacity-90 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Animated pixel art elements */}
          <motion.div 
            className="absolute top-0 right-0 -z-10 opacity-50 hidden lg:block"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <PixelArt type="planet" size="lg" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-0 -z-10 opacity-40 hidden lg:block"
            animate={{ 
              y: [0, 15, 0],
              x: [0, -10, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <PixelArt type="satellite" size="md" />
          </motion.div>

          <SectionTitle>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Sponsors
            </motion.span>
          </SectionTitle>
          
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-mono text-lg mb-8 text-white shadow-lg">
              Hack4Maha is powered by these amazing organizations that believe in the future of tech innovation.
            </p>
            
            <div className="bg-black/80 border-2 border-purple-600/70 p-4 mb-10 shadow-lg shadow-purple-500/20">
              <div className="flex gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-cyan-400 text-sm">
                &gt; LOADING SPONSOR DATA...
                <br />
                &gt; ACCESS GRANTED
                <br />
                &gt; SELECT SPONSOR TIER TO VIEW
              </div>
            </div>
          </motion.div>
          
          <CategorySelector />
          
          <motion.div 
            className="mb-16 px-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            key={activeCategory} // Force re-render animation when category changes
          >
            <div className={`border-4 ${categoryInfo[activeCategory].borderColor} p-5 mb-10 bg-gradient-to-r ${categoryInfo[activeCategory].gradientFrom} ${categoryInfo[activeCategory].gradientTo}`}>
              <h3 className={`font-mono text-2xl ${categoryInfo[activeCategory].color} mb-4`}>
                {categoryInfo[activeCategory].title}
              </h3>
              <p className="max-w-3xl mb-2 text-gray-300">
                {categoryInfo[activeCategory].description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsors[activeCategory].map((sponsor, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="relative bg-gray-900/70 border-2 border-gray-700 group overflow-hidden backdrop-blur-sm"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {/* Animated background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity z-0 ${categoryInfo[activeCategory].hoverBg}`}></div>
                  
                  {/* Scanline effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent bg-size-200 opacity-10 pointer-events-none"></div>
                  
                  <div className="p-6 relative z-10">
                    <div className="h-24 w-full flex items-center justify-center mb-6 bg-black/20 border border-gray-800">
                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name} 
                        className="max-w-full max-h-full object-contain mx-auto"
                      />
                    </div>
                    
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-4"></div>
                    
                    <h4 className={`font-mono ${categoryInfo[activeCategory].color} text-lg mb-3`}>
                      {sponsor.name}
                    </h4>
                    
                    <p className="text-sm text-gray-300 mb-6 h-20 overflow-y-auto pr-2">
                      {sponsor.description}
                    </p>
                    
                    <a 
                      href={sponsor.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center bg-black/60 border-2 ${categoryInfo[activeCategory].borderColor} ${categoryInfo[activeCategory].color} py-1 px-3 text-sm font-mono hover:bg-black/80 transition-all duration-300 group`}
                    >
                      <span className="mr-2">VISIT WEBSITE</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-mono text-xl text-cyan-400 mb-6">BECOME A SPONSOR</h3>
            <p className="mb-8 text-white">
              Interested in sponsoring Hack4Maha? We offer various sponsorship packages to suit different organizations.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-black/60 border-3 border-purple-500 text-purple-400 py-3 px-6 font-mono text-lg hover:bg-purple-900/20 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-purple-500/20"
            >
              GET IN TOUCH
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;