import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Tracks', id: 'stickyscrollrevealdemo' },
  { label: 'Gallery', id: 'gallerydemo' },
  { label: 'Humans', id: 'chromagrid' },
  { label: 'FAQ', id: 'faq' },
];

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const originalTexts = useRef({}); // store original link text

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

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
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
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                ref={(el) => (originalTexts.current[link.id] = el)}
                onMouseEnter={(e) => decryptText(e.target, link.label)}
                onMouseLeave={(e) => (e.target.innerText = link.label)}
                className={`text-sm font-medium transition duration-200 ${
                  activeSection === link.id ? 'text-yellow-400' : 'text-white hover:text-yellow-300'
                }`}
              >
                {link.label}
              </button>
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
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.id ? 'text-yellow-400' : 'text-white hover:text-yellow-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
