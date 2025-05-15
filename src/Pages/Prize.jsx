import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import PixelArt from '../components/PixelArt';

const PrizeCard = ({ title, amount, benefits, ribbon, delay }) => {
  return (
    <motion.div 
      className={`retro-card p-6 ${ribbon ? 'border-4 relative overflow-hidden' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {ribbon && (
        <div className="absolute top-5 -right-10 bg-neon-pink text-white font-pixel text-xs py-1 px-10 transform rotate-45">
          {ribbon}
        </div>
      )}
      <h3 className="font-pixel text-xl text-cyber-yellow mb-6 text-center">{title}</h3>
      <p className="font-pixel text-3xl text-neon-pink text-center mb-6">{amount}</p>
      
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span className="text-cyber-yellow mr-2">✓</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const SpecialPrize = ({ logo, sponsor, title, prize, delay }) => {
  return (
    <motion.div 
      className="retro-card p-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
          <span className="text-xl">{logo}</span>
        </div>
        <div>
          <p className="text-cyber-yellow font-pixel text-sm">{sponsor}</p>
        </div>
      </div>
      <h4 className="font-pixel text-neon-pink text-base mb-2">{title}</h4>
      <p className="text-sm text-gray-200">{prize}</p>
    </motion.div>
  );
};

const Prize = () => {
  return (
    <div className="screen-on">
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-20">
            <SectionTitle>ARCADE PRIZE TIERS</SectionTitle>
            <motion.p 
              className="max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Compete for exciting prizes and opportunities! Our prize pool includes cash rewards, 
              tech gadgets, internship offers, and more.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">
            <div className="absolute top-0 left-0 -translate-y-16 -translate-x-16 hidden xl:block">
              <PixelArt type="star" size="lg" />
            </div>
            <div className="absolute bottom-0 right-0 translate-y-16 translate-x-16 hidden xl:block">
              <PixelArt type="planet" size="lg" />
            </div>
            
            <PrizeCard 
              title="RUNNER UP"
              amount="₹15,000"
              benefits={[
                "Cash prize of ₹15,000",
                "Official certificates",
                "Exclusive hackathon merchandise",
                "Feature on our website and social media"
              ]}
              delay={0.1}
            />
            
            <PrizeCard 
              title="GRAND CHAMPION"
              amount="₹20,000"
              benefits={[
                "Cash prize of ₹20,000",
                "Potential internship opportunities",
                "Mentorship from industry experts",
                "Exclusive hackathon merchandise",
                "Official certificates",
                "Feature on our website and social media"
              ]}
              ribbon="BEST OVERALL"
              delay={0}
            />
            
            <PrizeCard 
              title="SECOND RUNNER UP"
              amount="₹10,000"
              benefits={[
                "Cash prize of ₹10,000",
                "Official certificates",
                "Exclusive hackathon merchandise",
                "Feature on our website and social media"
              ]}
              delay={0.2}
            />
          </div>
          
          <div className="text-center">
            <motion.h3 
              className="font-pixel text-2xl text-cyber-yellow mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              CATEGORY AWARDS
            </motion.h3>
            <motion.p 
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              In addition to our main prizes, we offer special awards for outstanding projects in specific categories!
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Best UI/UX Design",
                  prize: "₹15,000 + Design Software Subscriptions",
                  logo: "🎨",
                  sponsor: "Design Studio",
                },
                {
                  title: "Best Use of AI",
                  prize: "₹10,000 + Cloud Credits",
                  logo: "🤖",
                  sponsor: "AI Solutions",
                },
                {
                  title: "Most Innovative Idea",
                  prize: "₹5,000 + Innovation Mentorship",
                  logo: "💡",
                  sponsor: "Idea Labs",
                },
                {
                  title: "Social Impact Award",
                  prize: "₹3,000 + NGO Partnership",
                  logo: "🌍",
                  sponsor: "Impact Foundation",
                },
                {
                  title: "Best Freshman Team",
                  prize: "₹3,000 + Educational Resources",
                  logo: "🎓",
                  sponsor: "Learn Tech",
                },
                {
                  title: "Best Mobile App",
                  prize: "₹3,000 + App Store Features",
                  logo: "📱",
                  sponsor: "Mobile Masters",
                },
                {
                  title: "Best Hardware Hack",
                  prize: "₹30,000 + Hardware Kits",
                  logo: "🔧",
                  sponsor: "Hardware Hub",
                },
                {
                  title: "Best Web3 Project",
                  prize: "₹35,000 + Blockchain Credits",
                  logo: "🔗",
                  sponsor: "Blockchain Partners",
                }
              ].map((prize, index) => (
                <SpecialPrize 
                  key={index}
                  title={prize.title}
                  prize={prize.prize}
                  logo={prize.logo}
                  sponsor={prize.sponsor}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-space-blue/30 relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3 
              className="font-pixel text-2xl text-cyber-yellow mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              EXCLUSIVE SPONSOR PRIZES
            </motion.h3>
            <motion.p 
              className="text-lg mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our sponsors have added exciting rewards for teams that excel in using their technologies.
              Check out our sponsors page for more details!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/sponsors" className="arcade-btn">
                View Sponsor Prizes
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prize;