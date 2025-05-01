import { motion } from 'framer-motion';

const SectionTitle = ({ children, centered = true }) => {
  return (
    <motion.h2 
      className={`arcade-title text-[#ff5c00] ${centered ? 'text-center' : 'text-left'}` }
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;