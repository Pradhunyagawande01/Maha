import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountdownTimer from "../Components/CountdownTimer";
import SectionTitle from "../Components/SectionTitle";
import PixelArt from "../Components/PixelArt";

const Home = () => {
  // Change this date to your hackathon date
  const hackathonDate = "2025-08-30T09:00:00";

  return (
    <div className="screen-on">
      {/* Hero Section */}
      <section
        className="min-h-[90vh] flex flex-col justify-center items-center relative overflow-hidden"
        // style={{
        //   backgroundImage: "url(/img/bg1.png)",
        //   backgroundSize: "cover",
        // }}
      >
        <div className="absolute top-20 right-20 hidden lg:block">
          <PixelArt type="rocket" size="xl" />
        </div>
        <div className="absolute bottom-40 left-20 hidden lg:block">
          <PixelArt type="star" size="lg" />
        </div>

        <motion.div
          className="container-custom text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            <span style={{ color: "#199b1f" }}>Hack</span>
            <span style={{ color: "#ff5c00" }}>4Maha</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl font-pixel mb-8 text-whitenpm "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            संयोजय|नवसृज|विजयी भव{" "}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#ff5c00] font-pixel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Central India's 24 Hours Premiere Hackathon
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link to="https://hack4maharashtra.devfolio.co/" target="_blank" 
            className="btn btn-primary border-2 border-[#597E1E] hover:bg-[#ff5c00] font-pixel py-2 px-6 transition-all duration-200">
              Register Now
            </Link>
            {/* <Link
              to="/about"
              className="btn btn-primary border-2 border-[#597E1E] hover:bg-cyber-yellow/10 font-pixel py-2 px-6 transition-all duration-200"
            >
              Learn More
            </Link> */}
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {/* <h3 className="font-pixel mb-6">COUNTDOWN TO LAUNCH</h3> */}
            <CountdownTimer targetDate={hackathonDate} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-space-blue/30">
        <div className="container-custom text-[#ff5c00]">
          <SectionTitle className="">About The Hackathon</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="retro-card p-6 relative">
                <div className="absolute -top-6 -right-6 z-10">
                  <img
                    src="/img/orange.png"
                    alt="Orange Icon"
                    className="w-20 h-30 object-contain"
                  />
                </div>
                <h3 className=" font-pixel text-[#597E1E] mb-4">
                  WHAT IS HACK4MAHA?
                </h3>
                <p className="text-gray-200 mb-4">
                  Hack4Maha is a 24-hour arcade-themed hackathon where culture
                  meets code. From the forts of Shivaji Maharaj to the streets
                  of Mumbai, we honor Maharashtra’s spirit.
                </p>
                <p className="text-gray-200 mb-4">
                  In one electrifying day, tradition and tech collide to create
                  tomorrow. Hack for legacy. Build for the future.
                </p>
                <p className="text-gray-200 mb-4">
                  Hack4Maha is Maharashtra’s biggest 24-hour hackathon, where
                  technology meets tradition. Powered by NariNexus, this
                  arcade-themed hackathon celebrates the spirit of Maharashtra —
                  from the bravery echoing in the stones of Sinhagad, Raigad,
                  and Pratapgad, to the zest of Nagpur’s oranges and the
                  unstoppable creativity of Mumbai’s streets.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="retro-card p-4 text-center">
                <h3 className="text-2xl font-pixel text-white  mb-2">24+</h3>
                <p className=" font-pixel text-sm">HOURS</p>
              </div>
              <div className="retro-card p-4 text-center">
                <h3 className="text-2xl font-pixel text-white  mb-2">350+</h3>
                <p className=" font-pixel text-sm">HACKERS</p>
              </div>
              <div className="retro-card p-4 text-center">
                <h3 className="text-2xl font-pixel text-white mb-2">25+</h3>
                <p className="font-pixel text-sm">MENTORS</p>
              </div>
              <div className="retro-card p-4 text-center">
                <h3 className="text-2xl font-pixel text-white mb-2">₹1L+</h3>
                <p className=" font-pixel text-sm">PRIZES</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      {/* <section className="py-20">
        <div className="container-custom">
          <SectionTitle>Hackathon Themes</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI & Machine Learning",
                description: "Build solutions powered by artificial intelligence and machine learning algorithms.",
                icon: "🤖"
              },
              {
                title: "FinTech Revolution",
                description: "Create innovative financial technologies that transform how we handle money.",
                icon: "💰"
              },
              {
                title: "Healthcare Tech",
                description: "Develop tools and applications that improve healthcare delivery and patient outcomes.",
                icon: "🏥"
              },
              {
                title: "Sustainable Future",
                description: "Design solutions addressing environmental challenges and promoting sustainability.",
                icon: "🌱"
              },
              {
                title: "Smart Cities",
                description: "Build technologies that make urban living more efficient, safe, and enjoyable.",
                icon: "🏙️"
              },
              {
                title: "Education Tech",
                description: "Create platforms and tools that enhance learning experiences and accessibility.",
                icon: "📚"
              }
            ].map((theme, index) => (
              <motion.div
                key={index}
                className="retro-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{theme.icon}</div>
                <h3 className="font-pixel text-cyber-yellow text-lg mb-3">{theme.title}</h3>
                <p className="text-gray-300">{theme.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-space-blue/30 relative overflow-hidden">
        <div className="absolute top-10 left-10 hidden lg:block">
          <PixelArt type="alien" size="xl" />
        </div>
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <PixelArt type="star" size="lg" />
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-pixel text-3xl md:text-4xl text-white mb-6">
              READY TO JOIN THE ADVENTURE?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Don't miss your chance to be part of this incredible hackathon
              experience. Register now and secure your spot!
            </p>
            <Link
              to="https://solo.to/hack4maha"
              className="arcade-btn text-lg py-3 px-8"
            >
              Our Socials
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Sponsors Preview */}
      {/* <section className="py-20">
        <div className="container-custom">
          <SectionTitle>Our Sponsors</SectionTitle>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Hack4Maha is proudly supported by leading organizations committed to fostering innovation and tech talent.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/5473289/pexels-photo-5473289.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=600"
            ].map((sponsor, index) => (
              <motion.div
                key={index}
                className="w-full h-20 flex items-center justify-center p-4 bg-white/10 rounded hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img 
                  src={sponsor} 
                  alt={`Sponsor ${index + 1}`} 
                  className="max-h-12 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/sponsors" className="text-cyber-teal hover:text-cyber-yellow transition-colors duration-300 font-bold">
              View all sponsors
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
