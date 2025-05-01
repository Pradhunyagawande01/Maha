import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="mb-6">
      <button 
        className="w-full flex justify-between items-center text-left p-4 retro-card hover:cursor-pointer"
        onClick={onToggle}
      >
        <span className="font-pixel text-sm md:text-base text-[#ff5c00]">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#ff5c00]"
        >
          <FaChevronDown />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-dark-card/60 border-l-2 border-r-2 border-b-2 retro-card">
              <p className="text-gray-200">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqAccordion = ({ faqItems }) => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FaqAccordion;