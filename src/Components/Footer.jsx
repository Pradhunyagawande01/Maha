import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-5 pb-0 mt-5 relative" style={{backgroundImage: 'url(/img/Group.png)', backgroundSize: 'cover'}}>
      <div className="pixel-divider text-[#597E1E]"></div>
      
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h3 className="font-pixel text-[#ff5c00] text-xl mb-4">Hack4Maha</h3>
          <p className="text-gray-300 mb-4">संयोजय I नवसृज I विजयी भव</p>
          <div className="flex space-x-4 mt-6">
            <a href="https://x.com/hack4maha" target="_blank" rel="noopener noreferrer" 
               className="bg-space-light w-10 h-10 rounded flex items-center justify-center text-white hover:bg-[#28075c]  hover:text-[#1DA1F2] transition-colors duration-300">
              <FaTwitter />
            </a>
            {/* <a href="https://github.com/hack4maha" target="_blank" rel="noopener noreferrer"
               className="bg-space-light w-10 h-10 rounded flex items-center justify-center text-white hover:bg-[#597E1E] hover:text-space-dark transition-colors duration-300">
              <FaGithub />
            </a> */}
            <a href="https://www.linkedin.com/company/hack4maha/" target="_blank" rel="noopener noreferrer"
               className="bg-space-light w-10 h-10 rounded flex items-center justify-center text-white hover:bg-[#28075c] hover:text-blue-600 transition-colors duration-300">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/hack4maha/" target="_blank" rel="noopener noreferrer"
               className="bg-space-light w-10 h-10 rounded flex items-center justify-center text-white hover:bg-[#28075c] hover:text-[#E1306C] transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="https://discord.com/invite/jcRp9agp4F" target="_blank" rel="noopener noreferrer"
               className="bg-space-light w-10 h-10 rounded flex items-center justify-center text-white hover:bg-[#28075c]  hover:text-[#7289da] transition-colors duration-300">
              <FaDiscord />
            </a>
          </div>
        </div>
        
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            {/* <h4 className="font-pixel text-[#ff5c00] text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-blue-800 transition-all duration-200 hover:pl-1">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-800  transition-all duration-200 hover:pl-1">About</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-blue-800  transition-all duration-200 hover:pl-1">FAQ</a></li>
              <li><a href="/prize" className="text-gray-300 hover:text-blue-800  transition-all duration-200 hover:pl-1">Prizes</a></li>
            </ul> */}
          </div>
          
          <div>
            {/* <h4 className="font-pixel text-[#ff5c00] text-sm mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/sponsors" className="text-gray-300 hover:text-blue-800  transition-all duration-200 hover:pl-1">Sponsors</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-blue-800  transition-all duration-200 hover:pl-1">Team</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-blue-800  transition-all duration-200 hover:pl-1">Gallery</a></li>
              <li><a href="/code-of-conduct" className="text-gray-300 hover:text-blue-800  transition-all duration-200 hover:pl-1">Code of Conduct</a></li>
            </ul> */}
          </div>
          
          <div>
            <h4 className="font-pixel text-[#ff5c00] text-sm mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:info@hack4maha.com" className="text-gray-300 hover:text-blue-800  transition-all duration-200">hack4maharashtra@gmail.com</a></li>
              <li><a href="tel:+912345678900" className="text-gray-300 hover:text-blue-800  transition-all duration-200">+91 7776955168</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="container-custom mt-12 pt-6 border-t border-space-light/30">
        <p className="text-center text-gray-400 text-sm">
          &copy; {currentYear} Hack4Maha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;