import { useState } from "react";
import { hamburger } from "../assets/icons";
import { logo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="padding-x lg:sticky top-0 z-10 w-full lg:bg-gray-200">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img
            src={logo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[100px] h-[100px]"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (for mobile) */}
        <div className="hidden max-lg:block">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
  <ul className="absolute top-16 right-0 bg-white p-4 w-full max-w-[250px] shadow-lg rounded-md z-50 max-lg:block">
    {navLinks.map((item) => (
      <li key={item.label} className="mb-2">
        <a href={item.href} className="block text-lg text-slate-gray">
          {item.label}
        </a>
      </li>
    ))}
  </ul>
)}

      </nav>
    </header>
  );
};

export default Nav;
