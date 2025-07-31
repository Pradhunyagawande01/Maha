import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Tracks from './Components/Tracks';
import StickyScrollRevealDemo from "./Components/stickyscrollrevealdemo";
import Timeline from './Components/Timeline';
import GalleryDemo from "./Pages/GalleryDemo";
import Gallery2 from "./Pages/Gallery2";
import Team from './Components/Team';
import Venue from './Components/Venue';
import Sponsors from './Components/Sponsors';
import Footer from './Components/Footer';
import MarioCharacter from './Components/MarioCharacter';
import FaqSection from './Components/FAQ';
import './style/App.css';


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [stars, setStars] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Generate random stars for background
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          animationDelay: Math.random() * 5,
          twinkleSpeed: Math.random() * 3 + 1,
        });
      }
      setStars(newStars);
    };

    generateStars();

    // Handle scroll for Mario character movement
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mario-app">
      {/* Animated star background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-yellow-600 mario-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.twinkleSpeed}s`,
            }}
          />
        ))}
        
       
         
      </div>

      {/* Mario Character */}
      <MarioCharacter scrollY={scrollY} />

      <div className="relative z-10">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>

         
          {/* <section id="tracks">
            <Tracks />
          </section> */}
          <section id="stickyscrollrevealdemo">
             <StickyScrollRevealDemo />
          </section>
          
           <section id="gallerydemo">
            <GalleryDemo />
          </section> 
           <section id="galler2">
            <Gallery2 />
          </section> 
            {/* <section id="sponsors">
            <Sponsors />
          </section>
          <section id="team">
            <Team />
          </section>
           <section id="venue">
            <Venue />
          </section> */}
         
          <section id="faq">
            <FaqSection />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;