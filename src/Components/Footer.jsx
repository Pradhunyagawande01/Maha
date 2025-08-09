import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Gamepad2,
  Heart
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Venue', href: '#venue' },
    { name: 'Sponsors', href: '#sponsors' },
  ];

  const socialLinks = [
    // { icon: <Facebook className="h-6 w-6" />, href: '#', color: 'hover:text-blue-400' },
    { icon: <Twitter className="h-6 w-6" />, href: 'https://x.com/hack4maha', color: 'hover:text-cyan-400' },
    { icon: <Instagram className="h-6 w-6" />, href: 'https://www.instagram.com/hack4maha/', color: 'hover:text-pink-400' },
    { icon: <Linkedin className="h-6 w-6" />, href: 'https://www.linkedin.com/company/hack4maha/', color: 'hover:text-blue-600' },
  ];

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t-4 border-cyan-400 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-6 h-6 bg-cyan-400 opacity-10 float-animation"></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-400 opacity-15 rotate-animation"></div>
        <div className="absolute bottom-10 left-1/4 w-8 h-8 bg-purple-400 opacity-10 float-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 slide-in">
            <div className="flex items-center space-x-2 mb-6">
            
              <span className="text-3xl font-bold pixel-text  text-orange-500 mb-12">
                HACK4MAHARASHTRA
              </span>
            </div>
          
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className={`text-slate-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="float-animation" style={{animationDelay: `${index * 0.2}s`}}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
         
          {/* Contact Info */}
          <div className="slide-in" style={{animationDelay: '0.4s'}}>
            <h3 className="text-xl font-bold text-white mb-6 pixel-text">
              Contact Us
            </h3>
            <div className="space-y-4">
              {/* <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400 mt-1 float-animation" />
               
              </div> */}
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400 float-animation" style={{animationDelay: '1s'}} />
               <a href="tel:+91 77769 55168" className="text-slate-300 hover:underline">
 +91 77769 55168
</a>

              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400 float-animation" style={{animationDelay: '2s'}} />
                <p className="text-slate-300">hack4maharashtra@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        
        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-700 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 fade-in">
            <p className="text-slate-400">
              © 2025 Hack4Maharashtra. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-600 float-animation" />
              <span>by the H4M Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;