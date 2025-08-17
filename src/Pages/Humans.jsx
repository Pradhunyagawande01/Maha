"use client"

import { Instagram, Linkedin, Github, Twitter } from "lucide-react"
import { useState, useEffect } from "react"
import DottedBg from  "../Components/DottedBg"
const teamMembers = [
  {
    id: 1,
    name: "Sunidhi",
    role: "Co-Organizer",
    image: "/org/sunidhi.png",
    social: {
      instagram: "https://www.instagram.com/sunidhi_vj/",
      linkedin: "https://www.linkedin.com/in/sunidhi-haware-797a97323/",
      github: "https://github.com/Sunidhi369",
       
    },
  },
  {
    id: 2,
    name: "Ayush",
    role: "Co-Organizer",
    image: "/org/ayush.jpg",
    social: {
      instagram: "https://www.instagram.com/ayushthakre__/",
      linkedin: "https://www.linkedin.com/in/ayush-thakre-096558294/",
      github: "https://github.com/ayushthakre07",
 
    },
  },
  {
    id: 3,
    name: "Vaibhavi",
    role: "Co-Organizer",
    image: "/org/vaibhavi.JPG",
    social: {
      instagram: "https://www.instagram.com/_vaibhavi29_?igsh=YnEzZnhnbTF3bHlr&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/vaibhavi-mangrulkar-7b0793285",
      github: "https://github.com/Vaibhavi-Mangrulkar",
 
    },
  },
  {
    id: 4,
    name: "Akshay",
    role: "Co-Organizer",
    image: "/org/akshay.png",
    social: {
      instagram: "https://www.instagram.com/akkhi_0925/",
      linkedin: "https://www.linkedin.com/in/akshay-gangasagar-67b25b305/",
    //   github: "#",
 
    },
  },
  {
    id: 5,
    name: "Pradhumnya",
    role: "Co-Organizer",
    image: "/org/pradhumnya.jpg",
    social: {
      instagram: "https://www.instagram.com/pradhyumnya_patil/",
      linkedin: "https://www.linkedin.com/in/pradhunya-gawande/",
      github: "https://www.linkedin.com/in/pradhunya-gawande/",
 
    },
  },
  {
    id: 6,
    name: "Pranav",
    role: "Co-Organizer",
    image: "/org/pranav.jpg",
    social: {
      instagram: "https://www.instagram.com/prana_v.18_/",
      linkedin: "https://www.linkedin.com/in/pranav-tekade-57b5a2320/",
      github: "https://github.com/codetechie18",
 
    },
  },
  {
    id: 7,
    name: "Sujal",
    role: "Organizer",
    image: "/org/sujal.png",
    social: {
      instagram: "https://www.instagram.com/cyb_suju/",
      linkedin: "https://www.linkedin.com/in/sujal-khade-2823a32a6/",
      github: "https://github.com/codetechie43",
    
    },
  },
]

export default function CoreTeamSection() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen relative bg-slate-800 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
       <h2 className="section-title text zoom-in text-orange-500 mb-12">
        Organizer
        </h2>
 
             <DottedBg
    dotColor="rgba(255, 255, 255, 0.25)"
    dotSize={2}
    baseSpacing={40}
    repelRadius={100}
    explodeStrength={25}
    returnSpeed={0.5}
  />  
        
      </div>

      <div
        className="fixed w-6 h-6  rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: hoveredCard ? "scale(2)" : "scale(1)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
           
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
  <div
    key={member.id}
    className={`group relative transition-all duration-700
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
      ${index % 3 === 1 ? "lg:mt-12" : index % 3 === 2 ? "lg:mt-6" : ""}
      ${index === teamMembers.length - 1 ? "lg:col-span-3 flex justify-center" : ""}
    `}
    style={{ transitionDelay: `${index * 150}ms` }}
    onMouseEnter={() => setHoveredCard(member.id)}
    onMouseLeave={() => setHoveredCard(null)}
  >
    <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 group max-w-sm w-full">
    

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-spin"
                    style={{ padding: "1px" }}
                  >
                    <div className="w-full h-full bg-slate-800 rounded-2xl"></div>
                  </div>
                </div>

                <div className="relative p-8 z-10">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img
  src={member.image || "/placeholder.svg"}
  alt={member.name}
  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
/>
 
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-purple-400 font-semibold text-lg">{member.role}</p>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.instagram}
                      className="w-12 h-12 bg-slate-700/50 hover:bg-gradient-to-r hover:from-gray-600 hover:to-slate-600 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-gray-500/25"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="w-12 h-12 bg-slate-700/50 hover:bg-gradient-to-r hover:from-gray-600 hover:to-slate-600 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-gray-500/25"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.social.github}
                      className="w-12 h-12 bg-slate-700/50 hover:bg-gradient-to-r hover:from-gray-600 hover:to-slate-600 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-gray-500/25"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                     
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
