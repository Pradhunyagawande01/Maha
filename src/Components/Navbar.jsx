import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-space-blue/95 backdrop-blur-md shadow-lg"
          : "bg-space-blue/80 backdrop-blur-sm"
      }`}
      style={{ backgroundImage: "/img/Group.png" }}
    >
      <div className="container-custom h-20 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <span className="font-pixel text-cyber-yellow text-lg md:text-xl drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
            <img className="h-10 w-auto" src="/img/Logo.png" alt="" />
          </span>
        </NavLink>

        <div
          className="lg:hidden text-[#ff5c00] text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={`fixed lg:static top-20 left-0 w-full lg:w-auto h-[calc(100vh-5rem)] lg:h-auto 
                       flex flex-col lg:flex-row lg:items-center bg-space-blue/95 lg:bg-transparent 
                       backdrop-blur-md lg:backdrop-blur-none transition-all duration-300 ease-in-out 
                       ${
                         isOpen
                           ? "translate-x-0 opacity-100"
                           : "-translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100"
                       } 
                       lg:space-x-6 p-8 lg:p-0 overflow-auto lg:overflow-visible z-40`}
        >
          {["Home", "About", "FAQ"].map(
            (item) => (
              <li key={item} className="my-4 lg:my-0">
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `font-pixel text-sm lg:text-xs uppercase tracking-wider transition-colors duration-300 
                  ${
                    isActive
                      ? "text-[#ff5c00] border-b-2 border-[#ff5c00]"
                      : "text-white hover:text-[#ff5c00]"
                  }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            )
          )}
          {/* <li className="mt-8 lg:mt-0 lg:ml-4">
            <NavLink 
              to="/register" 
              className="arcade-btn block text-center lg:inline-block"
            >
              Register Now
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
