import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const ImageModal = ({ image, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="max-w-5xl max-h-[90vh] relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image.url} 
          alt={image.caption} 
          className="max-w-full max-h-[80vh] object-contain rounded"
        />
        <p className="text-center mt-4 text-white font-pixel">{image.caption}</p>
        <button 
          className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
          onClick={onClose}
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { 
      url: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Brainstorming session at Hack4Maha 2023",
      year: "2023"
    },
    { 
      url: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Team collaboration during the hackathon",
      year: "2023"
    },
    { 
      url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Mentors helping participants with technical challenges",
      year: "2022"
    },
    { 
      url: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Winners receiving their prizes on stage",
      year: "2022"
    },
    { 
      url: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Participants presenting their projects to judges",
      year: "2022"
    },
    { 
      url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Networking session with industry professionals",
      year: "2021"
    },
    { 
      url: "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Late night coding and problem-solving",
      year: "2021"
    },
    { 
      url: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Workshop session on emerging technologies",
      year: "2021"
    },
    { 
      url: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Team building activities before the hackathon",
      year: "2020"
    }
  ];
  
  const years = [...new Set(images.map(img => img.year))].sort((a, b) => b - a);
  
  return (
    <div className="screen-on">
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle>Gallery</SectionTitle>
          <motion.p 
            className="text-center max-w-2xl mx-auto mb-16 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore memories from our previous hackathons. Get a glimpse of the exciting atmosphere,
            collaborative spirit, and innovative projects at Hack4Maha.
          </motion.p>
          
          {years.map(year => (
            <div key={year} className="mb-16">
              <motion.h3 
                className="font-pixel text-neon-pink text-xl mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                HACK4MAHA {year}
              </motion.h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images
                  .filter(img => img.year === year)
                  .map((image, index) => (
                    <motion.div 
                      key={index}
                      className="retro-card p-3 cursor-pointer overflow-hidden group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="overflow-hidden">
                        <img 
                          src={image.url} 
                          alt={image.caption} 
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <p className="mt-3 text-sm text-center">{image.caption}</p>
                    </motion.div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
};

export default Gallery;