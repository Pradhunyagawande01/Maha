import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const originalTexts = useRef({}); // store original link text

  const navigation = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Tracks', href: '#stickyscrollrevealdemo', id: 'tracks' },
    // { name: 'Timeline', href: '#timeline', id: 'timeline' },
    { name: 'Gallery', href: '#galleryparallax', id: 'gallery' },
    // { name: 'Team', href: '#team', id: 'team' },
    // { name: 'Venue', href: '#venue', id: 'venue' },
    // { name: 'Sponsors', href: '#sponsors', id: 'sponsors' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 🔐 Decryption Effect
  const decryptText = (el, finalText) => {
    const chars = "!@#$%^&*()_+=-{}[]|:;<>,.?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;
    const interval = setInterval(() => {
      el.innerText = finalText
        .split("")
        .map((char, i) => {
          if (i < iterations) return finalText[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      if (iterations >= finalText.length) clearInterval(interval);
      iterations += 1 / 2;
    }, 30);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ✅ Logo Image */}
          <div className="flex-shrink-0">
            <a href="#home">
              <img
                src="/Logo.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* ✅ Desktop Navigation */}
<div className="hidden md:flex space-x-8 justify-end flex-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                ref={(el) => (originalTexts.current[item.id] = el)}
                onMouseEnter={(e) => decryptText(e.target, item.name)}
                onMouseLeave={(e) => (e.target.innerText = item.name)}
                className={`text-sm font-medium transition duration-200 ${
                  activeSection === item.id ? 'text-yellow-400' : 'text-white hover:text-yellow-300'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* ✅ Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.id ? 'text-yellow-400' : 'text-white hover:text-yellow-300'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
