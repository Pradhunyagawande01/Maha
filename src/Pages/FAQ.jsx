import { motion } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle';
import FaqAccordion from '../Components/FaqAccordion';
import PixelArt from '../Components/PixelArt';

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Hack4Maha?",
      answer: "Hack4Maha is a 24-hour hackathon where participants collaborate to build innovative solutions to real-world problems. It's a platform for learning, networking, and showcasing your skills."
    },
    {
      question: "Who can participate?",
      answer: "Anyone with an interest in technology can participate! Whether you're a student, professional, designer, or developer, we welcome participants of all skill levels and backgrounds."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, Hack4Maha is completely free to participate in! We believe in making innovation accessible to everyone."
    },
    {
      question: "Do I need a team to participate?",
      answer: "While we encourage team participation (teams of 2-4 people and a girl teammate is compulsary)."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, any hardware you plan to use for your project, and a positive attitude! We'll provide meals, snacks, and a comfortable hacking environment."
    },
    {
      question: "How are projects judged?",
      answer: "Projects are judged based on innovation, technical complexity, design, practicality, and presentation. Our panel of judges includes industry experts and tech leaders who will evaluate each submission."
    },
    {
      question: "What kind of projects can I build?",
      answer: "You can build any type of project that aligns with our themes. This includes web/mobile applications, hardware projects, AI solutions, games, and more. We encourage creativity and innovation!"
    },
    {
      question: "Are there prizes?",
      answer: "Yes! We have exciting prizes for the winning teams, including cash rewards, tech gadgets, internship opportunities, and more. Check our Prizes page for detailed information."
    },
    {
      question: "What if I don't know how to code?",
      answer: "No problem! Hack4Maha is a learning experience. We'll have workshops and mentors to help you get started. Teams need diverse skills, including design, presentation, and problem-solving abilities."
    },
    {
      question: "Will there be food and accommodation?",
      answer: "Yes, we provide meals throughout the hackathon. While we don't provide accommodation, we can suggest nearby affordable options for out-of-town participants."
    }
  ];
  
  return (
    <div className="screen-on">
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          
          <div className="relative">
          <div className="absolute -top-6 -right-6 z-10">
                  <img
                    src="/img/orange.png"
                    alt="Orange Icon"
                    className="w-20 h-30 object-contain"
                  />
                </div>
            
            {/* <motion.p 
              className="text-center max-w-2xl mx-auto mb-12 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Got questions about Hack4Maha? We've got answers! Check out our most frequently asked questions below.
            </motion.p> */}
            
            <FaqAccordion faqItems={faqItems} />
          </div>
        </div>
      </section>
      
      {/* <section className="py-16 bg-space-blue/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3 
              className="font-pixel text-2xl text-cyber-yellow mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Still Have Questions?
            </motion.h3>
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Can't find the answer you're looking for? Feel free to reach out to our team directly!
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="mailto:info@hack4maha.com" 
                className="arcade-btn"
              >
                Email Us
              </a>
              <a 
                href="https://discord.gg/hack4maha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary border-2 border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow/10 font-pixel py-2 px-6 transition-all duration-200"
              >
                Join Discord
              </a>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default FAQ;