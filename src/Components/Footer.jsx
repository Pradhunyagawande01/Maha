import React from "react";
import { Instagram, Linkedin, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://x.com/hack4maha",
      color: "hover:text-cyan-400",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/hack4maha/",
      color: "hover:text-pink-400",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/company/hack4maha/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <footer className="bg-[#0d1117] border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main content: Brand | Contact | Social */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          
          {/* Brand */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-20 h-20">
              <img
                src="/Logo.png"
                alt="H4M Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-left">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyan-400" />
                <a
                  href="tel:+917776955168"
                  className="text-slate-300 hover:text-cyan-400 text-sm"
                >
                  +91 77769 55168
                </a>
              </div>
              <div className="flex items-center space-x-3">
          <Mail className="h-4 w-4 text-cyan-400" />
          <a
            href="mailto:hack4maharashtra@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-400 text-sm"
          >
            hack4maharashtra@gmail.com
          </a>
        </div>

            </div>
          </div>

          {/* Social */}
          <div className="space-y-4 text-left">
            <h3 className="text-white font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-slate-800 text-slate-400 ${social.color} transition-colors`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-slate-400 text-sm">
            © 2025 Hack4Maha. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-slate-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by the H4M Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
