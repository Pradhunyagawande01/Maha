import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import PixelArt from "../components/PixelArt";

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
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#1DA1F2] transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#] transition-colors duration-300"
              >
                <FaGithub size={20} />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600 transition-colors duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      <h3 className="font-pixel text-[#ff5c00] mb-1 text-sm aliiign-center justify-center">
        {member.name}
      </h3>
      {/* <p className="text-neon-pink text-sm mb-3">{member.role}</p> */}
      {/* <p className="text-sm text-gray-300">{member.bio}</p> */}
    </motion.div>
  );
};

const Team = () => {
  const teamData = {
    organizing: [
      {
        name: "Sujal khade",
        role: "",
        // bio: "Digital marketing strategist with a passion for technology and community building.",
        photo:
          "/img/org/sujal.png",
        twitter: "https://x.com/CodeTechie43?t=mTB5xj5Xm0mxEtD78UeReQ&s=09",
        linkedin: "https://www.linkedin.com/in/sujal-khade-2823a32a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Kritika Rukhiyana",
        role: "",
        // bio: "Storyteller creating compelling content across digital platforms to spread the word.",
        photo:
          "/img/org/kritika.png", 
        twitter: "https://x.com/Kritika8924",
        linkedin: "https://www.linkedin.com/in/kritika-rukhiyana-65a28a307",
      },
      {
        name: "Rishu Singh",
        role: "",
        // bio: "Tech enthusiast with 10+ years of experience organizing hackathons and tech events.",
        photo:
          "/img/org/rishu.png",
        twitter: "https://x.com/rishuksingh",
        // github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/rishukrsingh/",
      },
      {
        name: "Sunidhi Haware",
        role: "",
        // bio: "Event management specialist ensuring smooth execution of all hackathon operations.",
        photo:
          "/img/org/sunidhi.png",
        twitter: "https://x.com/Sunidhi_vj",
        linkedin: "https://www.linkedin.com/in/sunidhi-haware-797a97323",
      },
      {
        name: "Pradhunya Gawande",
        role: "",
        // bio: "Building online communities and managing social media presence for maximum engagement.",
        photo:
          "/img/org/pradhunya.png",
        twitter: "https://x.com/pradhunya_patil",
        linkedin: "https://www.linkedin.com/in/pradhunya-gawande",
      },
      // {
      //   name: "Amit Kumar",
      //   role: "Technical Lead",
      //   // bio: "Full-stack developer and cloud architect handling technical infrastructure.",
      //   photo:
      //     " ",
      //   github: "https://github.com",
      //   linkedin: "https://linkedin.com",
      // },
      // {
      //   name: "Neha Gupta",
      //   role: "Partnerships Manager",
      //   // bio: "Connecting companies with talented developers and fostering valuable partnerships.",
      //   photo:
      //     " ",
      //   twitter: "https://twitter.com",
      //   linkedin: "https://linkedin.com",
      // },
      // {
      //   name: "Rohan Joshi",
      //   role: "Full-Stack Developer",
      //   // bio: "JavaScript enthusiast specializing in React and Node.js development.",
      //   photo:
      //     " ",
      //   github: "https://github.com",
      //   twitter: "https://twitter.com",
      //   linkedin: "https://linkedin.com",
      // },
      // {
      //   name: "Zara Khan",
      //   role: "UI/UX Designer",
      //   // bio: "Creating delightful user experiences that bring joy to digital interactions.",
      //   photo:
      //     " ",
      //   twitter: "https://twitter.com",
      //   linkedin: "https://linkedin.com",
      // },
      // {
      //   name: "Vikram Singh",
      //   role: "DevOps Engineer",
      //   // bio: "Infrastructure specialist ensuring hackathon systems run smoothly.",
      //   photo:
      //     " ",
      //   github: "https://github.com",
      //   linkedin: "https://linkedin.com",
      // },
    ],
    // tech: [

    // ],
    // marketing: [
    // ]
  };

  return (
    <div className="screen-on">
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle>Meet Our Team</SectionTitle>
          {/* <motion.p
            className="text-center max-w-2xl mx-auto mb-16 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hack4Maha is brought to you by a dedicated team of tech enthusiasts,
            event organizers, and creatives committed to providing an
            exceptional hackathon experience.
          </motion.p> */}

          <div className="relative">
            <div className="absolute -top-10 right-0 hidden xl:block">
              <PixelArt type="alien" size="lg" />
            </div>

            <div className="mb-16">
              {/* <motion.h3
                className="font-pixel text-neon-pink text-xl mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                ORGANIZING TEAM
              </motion.h3> */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                                {teamData.organizing.map((member, index) => (
                  <TeamMember key={index} member={member} index={index} />
                ))}
              </div>
            </div>

            {/* <div className="mb-16">
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
            </div> */}

            {/* <div>
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
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;