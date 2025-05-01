import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import PixelArt from '../components/PixelArt';

const TeamMember = ({ member, index }) => {
  return (
    <motion.div 
      className="retro-card p-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative mb-6 overflow-hidden group">
        <img 
          src={member.photo} 
          alt={member.name} 
          className="w-full h-56 object-cover rounded transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex space-x-4">
            {member.twitter && (
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyber-yellow transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyber-yellow transition-colors duration-300">
                <FaGithub size={20} />
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyber-yellow transition-colors duration-300">
                <FaLinkedinIn size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      <h3 className="font-pixel text-cyber-yellow text-lg mb-1">{member.name}</h3>
      <p className="text-neon-pink text-sm mb-3">{member.role}</p>
      <p className="text-sm text-gray-300">{member.bio}</p>
    </motion.div>
  );
};

const Team = () => {
  const teamData = {
    organizing: [
      {
        name: "Rahul Sharma",
        role: "Hackathon Director",
        bio: "Tech enthusiast with 10+ years of experience organizing hackathons and tech events.",
        photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        twitter: "https://twitter.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Priya Patel",
        role: "Operations Lead",
        bio: "Event management specialist ensuring smooth execution of all hackathon operations.",
        photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Amit Kumar",
        role: "Technical Lead",
        bio: "Full-stack developer and cloud architect handling technical infrastructure.",
        photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Neha Gupta",
        role: "Partnerships Manager",
        bio: "Connecting companies with talented developers and fostering valuable partnerships.",
        photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      }
    ],
    tech: [
      {
        name: "Rohan Joshi",
        role: "Full-Stack Developer",
        bio: "JavaScript enthusiast specializing in React and Node.js development.",
        photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Zara Khan",
        role: "UI/UX Designer",
        bio: "Creating delightful user experiences that bring joy to digital interactions.",
        photo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Vikram Singh",
        role: "DevOps Engineer",
        bio: "Infrastructure specialist ensuring hackathon systems run smoothly.",
        photo: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    ],
    marketing: [
      {
        name: "Ananya Reddy",
        role: "Marketing Lead",
        bio: "Digital marketing strategist with a passion for technology and community building.",
        photo: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Raj Mehta",
        role: "Content Creator",
        bio: "Storyteller creating compelling content across digital platforms to spread the word.",
        photo: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Shreya Das",
        role: "Social Media Manager",
        bio: "Building online communities and managing social media presence for maximum engagement.",
        photo: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      }
    ]
  };
  
  return (
    <div className="screen-on">
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle>Meet Our Team</SectionTitle>
          <motion.p 
            className="text-center max-w-2xl mx-auto mb-16 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hack4Maha is brought to you by a dedicated team of tech enthusiasts, event organizers, and creatives
            committed to providing an exceptional hackathon experience.
          </motion.p>
          
          <div className="relative">
            <div className="absolute -top-10 right-0 hidden xl:block">
              <PixelArt type="alien" size="lg" />
            </div>
            
            <div className="mb-16">
              <motion.h3 
                className="font-pixel text-neon-pink text-xl mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                ORGANIZING COMMITTEE
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamData.organizing.map((member, index) => (
                  <TeamMember key={index} member={member} index={index} />
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <motion.h3 
                className="font-pixel text-neon-pink text-xl mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                TECHNICAL TEAM
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamData.tech.map((member, index) => (
                  <TeamMember key={index} member={member} index={index} />
                ))}
              </div>
            </div>
            
            <div>
              <motion.h3 
                className="font-pixel text-neon-pink text-xl mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                MARKETING & COMMUNICATIONS
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamData.marketing.map((member, index) => (
                  <TeamMember key={index} member={member} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-space-blue/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3 
              className="font-pixel text-2xl text-cyber-yellow mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              WANT TO JOIN OUR TEAM?
            </motion.h3>
            <motion.p 
              className="text-lg mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're always looking for passionate volunteers to help make Hack4Maha even better.
              If you're interested in being part of our team for future events, get in touch!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="mailto:team@hack4maha.com" 
                className="arcade-btn"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;