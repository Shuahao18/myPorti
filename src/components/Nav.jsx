import { useState } from "react";
import { motion } from "framer-motion";
import { hamburger } from "../assets/icons";
import { logo } from "../assets/images";
import { navLinks } from "../constants";
import { useTheme } from "../context/ThemeContext";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="padding-x sticky top-0 z-50 w-full bg-white dark:bg-primary/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-lg transition-colors duration-300">
      <nav className="flex justify-between items-center max-container py-6">
        {/* Logo */}
        <a 
          href="/"
          className="flex-shrink-0 hover:opacity-80 transition-opacity duration-300 group"
        >
          <img
            src={logo}
            alt="Joshua Meredores"
            width={129}
            height={29}
            className="w-24 h-auto sm:w-32 filter brightness-0 dark:brightness-100 group-hover:brightness-75 dark:group-hover:brightness-110 transition-all duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex-1 hidden lg:flex justify-center items-center gap-12">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-poppins font-medium text-sm tracking-wide text-gray-600 dark:text-text hover:text-coralY dark:hover:text-coralY transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-coralY to-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 relative w-12 h-12 flex items-center justify-center"
            aria-label="Toggle dark mode"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.071l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.414 5.414a1 1 0 01.414.586l1.293-1.293a1 1 0 00-1.414-1.414l-1.293 1.293a1 1 0 01.586.414zM5 8a1 1 0 100-2H4a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </motion.div>
          </motion.button>

          {/* Hamburger Button (for mobile) */}
          <div className="flex lg:hidden">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <img 
                src={hamburger} 
                alt="hamburger icon" 
                width={25} 
                height={25}
                className={`transition-transform duration-300 filter brightness-0 dark:brightness-100 ${menuOpen ? 'rotate-90' : ''}`}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-primary/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5 shadow-lg lg:hidden animate-fade-in-down"
          >
            <ul className="flex flex-col p-6 gap-4 max-container">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    onClick={handleNavClick}
                    className="block font-poppins font-medium text-base text-gray-600 dark:text-text hover:text-coralY dark:hover:text-coralY transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
