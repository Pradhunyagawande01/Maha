import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import DottedBg from './DottedBg';

const Team = () => {
  const teamMembers = [
    {
      name: "Sunidhi Chauhan",
      role: "Co-orgnizer",
      image: "/org/sunidhi.png",
    
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        
      }
    },
    {
      name: "Sujal Khade",
      role: "Organizer",
      image: "/org/sujal.png", 
      
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
 
      }
    },
    {
      name: "Vaibhavi Mangrulkar",
      role: "Co-orgnizer",
      image: "/org/vaibhavi.png", 
    
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
       
      }
    },
    {
      name: "Ayush Thakre",
      role: " Co-orgnizer",
      image: "/org/ayush.png ",
    
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
 
      }
    },
    {
      name: "Pranav Tekade",
      role: " Co-orgnizer",
      image: " ",
   
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
   
      }
    },
    {
      name: "Akshay Gangasagar",
      role: "Co-orgnizer",
      image: "/org/akshay.png ",
      
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        
      }
    },
     {
      name: "Pradhumnya Gawande",
      role: "Co-orgnizer",
      image: " /org/pradhunya.png",
     
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        
      }
    },
     {
      name: "Kritika Rukhiyana",
      role: "Co-orgnizer",
      image: "/org/kritika.png ",
  
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        
      }
    },
     {
      name: "Rishu Singh",
      role: "Co-orgnizer",
      image: " /org/rishu.png",
        social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
       
      }
    }

  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: 'spring',
        stiffness: 80,
        damping: 12
      }
    }),
    hover: {
      y: -5,
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="relative py-20 bg-slate-800 overflow-hidden">
      <DottedBg
        dotColor="rgba(255, 255, 255, 0.15)"
        dotSize={2}
        baseSpacing={40}
        repelRadius={100}
        explodeStrength={25}
        returnSpeed={0.5}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <h2 className="section-title text zoom-in text-orange-500 mb-12">
      Organizers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              className="relative p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl group"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={i}
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                {/* Glow Layers */}
                <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-xl group-hover:bg-orange-400/50 group-hover:blur-2xl transition-all duration-300"></div>
                <div className="absolute inset-0 rounded-full bg-yellow-500/30 blur-xl group-hover:bg-yellow-400/50 group-hover:blur-2xl transition-all duration-300 delay-75"></div>

                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden z-10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover border-4 border-white/30 rounded-full"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-orange-300 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-white/70 mb-4">{member.bio}</p>

                <div className="flex justify-center gap-4">
                  <a href={member.social.github} target="_blank" rel="noreferrer" className="text-white hover:text-gray-300">
                    <Github size={20} />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-blue-400">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noreferrer" className="text-white hover:text-sky-400">
                    <Twitter size={20} />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-white hover:text-red-400">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
