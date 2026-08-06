import { useState } from "react";
import { navLinks } from "../constants";

const Nav = ({ visible = true, isPageTwo = false, activeSection = "home" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  if (!visible) return null;

  const backgroundClass = isPageTwo ? "bg-secondary/95" : "bg-primary/95";

  return (
    <header
      className={`md:hidden fixed top-0 left-0 right-0 z-50 ${backgroundClass} backdrop-blur-md border-b border-white/10 transition-all duration-300`}
    >
      <nav className="max-container px-6 sm:px-16 flex flex-col md:flex-row items-start md:items-center justify-between py-4 gap-4 relative">
        <a
          href="#home"
          className="text-gold font-poppins font-bold text-xs tracking-[0.2em] uppercase"
          onClick={() => setMenuOpen(false)}
        >
          JM
        </a>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-white/10 text-white hover:bg-white/10 transition-colors duration-200"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <ul
          className={`md:flex gap-8 sm:gap-10 md:items-center w-full md:w-auto ${
            menuOpen ? "block" : "hidden md:block"
          } bg-secondary/95 md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0 absolute md:static top-full left-0 md:left-auto md:top-auto shadow-lg md:shadow-none border border-white/10 md:border-0`}
        >
          {navLinks.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            const isContact = item.label === "Contact";
            const isWhiteLink = item.label === "Skills" || item.label === "Project";

            const baseClasses = "font-poppins text-sm font-medium transition-colors duration-300 pb-1 border-b-[3px]";
            const stateClasses = isActive
              ? isContact
                ? "text-gold border-gold"
                : "text-white border-gold"
              : isContact
              ? "text-gold/80 hover:text-gold border-transparent"
              : isWhiteLink
              ? "text-white border-transparent hover:text-gold/80"
              : "text-text/60 hover:text-white border-transparent";

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`${baseClasses} ${stateClasses}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
