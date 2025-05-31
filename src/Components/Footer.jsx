import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-8 pb-6 mt-8 relative text-white"
      style={{
        backgroundImage: "url(/img/Group.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Site footer"
    >
      {/* Decorative pixel divider */}
      <div className="pixel-divider text-[#597E1E]" aria-hidden="true"></div>

      {/* Main container */}
      <div className="container-custom mx-auto px-6 md:px-8">
        {/* Top section: Branding + Contact Info */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-40 text-center ">
          {/* Branding & Social */}
          <div className="flex-1">
            <h3 className="font-pixel text-[#ff5c00] text-2xl mb-4">
              Hack4Maha
            </h3>
            <p className="text-gray-300 mb-6 text-base leading-relaxed">
              संयोजय I नवसृज I विजयी भव
            </p>

            <nav aria-label="Social media links">
              <ul className="flex justify-center space-x-4">
                <li>
                  <a
                    href="https://x.com/hack4maha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-space-light w-11 h-11 rounded flex items-center justify-center hover:bg-[#28075c] hover:text-[#1DA1F2] transition-colors duration-300"
                    title="Follow us on X"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/hack4maha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-space-light w-11 h-11 rounded flex items-center justify-center hover:bg-[#28075c] hover:text-blue-600 transition-colors duration-300"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/hack4maha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-space-light w-11 h-11 rounded flex items-center justify-center hover:bg-[#28075c] hover:text-[#E1306C] transition-colors duration-300"
                    title="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/jcRp9agp4F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-space-light w-11 h-11 rounded flex items-center justify-center hover:bg-[#28075c] hover:text-[#7289da] transition-colors duration-300"
                    title="Discord"
                  >
                    <FaDiscord />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h4 className="font-pixel text-[#ff5c00] text-base mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hack4maharashtra@gmail.com"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  hack4maharashtra@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917776955168"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  +91 7776955168
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-6 border-t border-space-light/30">
          <p className="text-center text-gray-400 text-sm select-none">
            &copy; {currentYear} Hack4Maha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
