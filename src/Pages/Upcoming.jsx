import { motion } from "framer-motion";
import { Calendar, Award, Lightbulb, Sparkles } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Upcoming = () => {
  return (
    <section className="py-20 bg-space-blue/30 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#ff5c00] font-pixel mb-10">
          Let's Talk Open Source & Communities
        </h2>

        <motion.div
          className="relative retro-card p-6 flex flex-col items-center text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Date */}
          <div className="flex items-center text-sm text-gray-300 mb-4">
            <Calendar className="mr-2 h-4 w-4 text-[#ff5c00]" />
            June 28, 2025
          </div>

          {/* Description */}
          <p className="text-sm mb-6">
            Join us for an inspiring session with Patel Sir and Ali Musthafa Sir
            exploring open source, community, and social growth.
          </p>

          {/* Speakers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Speaker 1 */}
            <div className="bg-[#2c2c2c] border-2 border-[#ff5c00] p-4 rounded-xl text-center">
              <img
                src="/img/Ali.jpg"
                alt="Ali Musthafa"
                className="w-32 h-32 rounded-lg object-cover mx-auto mb-3 border-4 border-white"
              />
              <h4 className="text-[#ff5c00] font-pixel text-lg mb-1">
                Ali Musthafa
              </h4>
              <p className="text-sm text-gray-300">
                Senior Dev Advocate At Pieces
              </p>
              <a
                href="https://www.linkedin.com/in/ialimustufa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5c00] hover:text-white text-xl mt-2 inline-block"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Speaker 2 */}
            <div className="bg-[#2c2c2c] border-2 border-[#ff5c00] p-4 rounded-xl text-center">
              <img
                src="/img/Patel.jpg"
                alt="Patel Muhammad"
                className="w-32 h-32 rounded-lg object-cover mx-auto mb-3 border-4 border-white"
              />
              <h4 className="text-[#ff5c00] font-pixel text-lg mb-1">
                Patel Muhammad
              </h4>
              <p className="text-sm text-gray-300">
                GSoC @2023, Fellowship @Keploy
              </p>
              <a
                href="https://www.linkedin.com/in/patel-muhammad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5c00] hover:text-white text-xl mt-2 inline-block"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="mt-4 mb-8">
            <a
              href="https://lu.ma/sglu2w7i"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white px-6 py-2 border-2 border-black rounded-md cursor-pointer select-none transition-transform duration-200 ease-in-out font-pixel text-sm uppercase"
              style={{
                backgroundColor: "#ff5c00",
                boxShadow: "3px 3px 0 0 #000",
                fontFamily: "'Press Start 2P', cursive",
                letterSpacing: "0.1em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.borderColor = "#fff700";
                e.currentTarget.style.boxShadow = "4px 4px 0 0 #000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.borderColor = "black";
                e.currentTarget.style.boxShadow = "3px 3px 0 0 #000";
              }}
            >
              Register Now
            </a>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex p-3 bg-[#2b2b2b] border-2 border-white text-sm text-gray-300 rounded-md">
              <Lightbulb className="text-[#ff5c00] h-5 w-5 mr-3 mt-1" />
              Innovative solutions to real-world challenges
            </div>
            <div className="flex p-3 bg-[#2b2b2b] border-2 border-white text-sm text-gray-300 rounded-md">
              <Award className="text-[#ff5c00] h-5 w-5 mr-3 mt-1" />
              Recognition & mentorship opportunities
            </div>
            <div className="flex p-3 bg-[#2b2b2b] border-2 border-white text-sm text-gray-300 rounded-md">
              <Sparkles className="text-[#ff5c00] h-5 w-5 mr-3 mt-1" />
              Valuable professional networking
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Upcoming;
