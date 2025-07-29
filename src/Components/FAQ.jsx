import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import DottedBg from './DottedBg';

const generalFaqs = [
  { question: "What is Hack4maha and what makes it unique?", answer: "Hack4maha is a dynamic 24-hour in-person hackathon organized by NariNexus in Maharashtra. It’s designed to inspire creativity, foster collaboration, and push the boundaries of technology, offering an unforgettable experience for all participants." },
  { question: "How can I participate in Hack4maha?", answer: "You can register through our official website. Once registered, you’ll receive further instructions and updates via email." },
  { question: "What are the eligibility criteria for participants?", answer: "Everyone is welcome! Whether you’re a student or a tech enthusiast, all skill levels can participate" },
  { question: "What should I bring to the hackathon?", answer: "Bring your laptop, charger, any software tools you need, and lots of enthusiasm! We’ll take care of food and drinks." },
  { question: "Are inter-college teams allowed to participate?", answer: "Absolutely! You can form teams with participants from different colleges, universities, or backgrounds" },
  { question: "Can I participate solo?", answer: "No, solo participation is not allowed." },
];

const technicalFaqs = [
  { question: "Will there be WiFi available at the venue?", answer: "Of course! We know how important the internet is for hacking (and surviving 😄)." },
  { question: "It’s my first hackathon. What should I know?", answer: "Hackathons are about more than just winning they’re fantastic for learning, networking, and having fun. Come with a learning mindset, and you’re guaranteed to gain something valuable (and have a great time)!" },
  { question: "Will there be enough charging ports available?", answer: "Yes, we’ll ensure every team has access to charging ports. We know how crucial this is from our own hackathon experiences!" },
  { question: "Do I need to bring food or snacks?", answer: "No need! We’ll provide all meals and snacks throughout the event." },
  { question: "I have already applied but my application is not approved yet. What should I do?", answer: "Please be patient. We’ve received a high volume of registrations and are processing applications as quickly as possible. You’ll hear from us soon!" },
  { question: "Will our travel expenses be covered?", answer: "While we wish we could cover all of you guy's travel expenses, we cannot reimburse for travel costs. Food and accommodation is on us for the duration of the hack." },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-white/20 py-4">
    <button
      className="flex items-center justify-between w-full text-left text-yellow-500 font-medium text-base"
      onClick={onClick}
    >
      <span>{question}</span>
      <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && (
      <div className="mt-2 text-slate-300 text-sm transition-all duration-300">
        {answer}
      </div>
    )}
  </div>
);

const FaqSection = () => {
  const [openGeneral, setOpenGeneral] = useState(0);   // first open by default
  const [openTechnical, setOpenTechnical] = useState(0); // first open by default

  const toggleGeneral = (index) => {
    setOpenGeneral(prev => prev === index ? null : index);
  };

  const toggleTechnical = (index) => {
    setOpenTechnical(prev => prev === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-slate-800 overflow-hidden font-poppins">
      <DottedBg
        dotColor="rgba(255, 255, 255, 0.25)"
        dotSize={2}
        baseSpacing={40}
        repelRadius={100}
        explodeStrength={25}
        returnSpeed={0.5}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-16 text-orange-500 text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* General FAQs */}
          <div>
            
            <div className="space-y-3">
              {generalFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openGeneral === index}
                  onClick={() => toggleGeneral(index)}
                />
              ))}
            </div>
          </div>

          {/* Technical FAQs */}
          <div>
           
            <div className="space-y-3">
              {technicalFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openTechnical === index}
                  onClick={() => toggleTechnical(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
