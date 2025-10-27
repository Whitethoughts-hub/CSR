import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Main_logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && window.scrollY > 0) {
        setHasAnimated(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  // ✅ Automatically detect navbar height to prevent overlap
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, [menuOpen]);

  const linkClasses = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "font-bold text-[#007643] link-tag"
        : "font-normal text-[#404041] link-tag"
    }`;

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar fixed top-0 left-0 w-full z-50 bg-white ${
          hasAnimated ? "slide-in shadow-md" : ""
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-[20px] md:px-[50px]  py-2">
          {/* Desktop Navbar */}
          <div className="hidden md:flex justify-between items-center h-14">
            {/* Left Section */}
            <div className="flex space-x-8">
              <NavLink to="/home" className={linkClasses}>
                HOME
              </NavLink>
              <NavLink to="/projects" className={linkClasses}>
                PROJECTS
              </NavLink>
            </div>

            {/* Center Section (Logo) */}
            <div className="flex justify-center">
              <NavLink to="/home" className="flex items-center">
                <img src={Logo} alt="Logo" className="h-14 w-auto" />
              </NavLink>
            </div>

            {/* Right Section */}
            <div className="flex space-x-8">
              <NavLink to="/leadership" className={linkClasses}>
                LEADERSHIP
              </NavLink>
              <NavLink to="/contact" className={linkClasses}>
                CONTACT
              </NavLink>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden flex justify-between items-center h-14">
            {/* Logo Left */}
            <NavLink to="/home" className="flex items-center">
              <img src={Logo} alt="Logo" className="h-12 w-auto" />
            </NavLink>

            {/* Hamburger Right */}
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-10 h-10 p-1 space-y-2 transition-all duration-400"
            >
              <span
                className={`block w-8 h-0.5 bg-black rounded transition-all duration-400 ${
                  menuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-black rounded transition-all duration-400 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-black rounded transition-all duration-400 ${
                  menuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out bg-white ${
            menuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-5"
          }`}
        >
          <div className="max-w-[1300px] mx-auto px-[20px] pt-4 pb-4 space-y-4 flex flex-col items-center text-black">
            <NavLink
              to="/home"
              className={linkClasses}
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/projects"
              className={linkClasses}
              onClick={() => setMenuOpen(false)}
            >
              PROJECTS
            </NavLink>
            <NavLink
              to="/leadership"
              className={linkClasses}
              onClick={() => setMenuOpen(false)}
            >
              LEADERSHIP
            </NavLink>
            <NavLink
              to="/contact"
              className={linkClasses}
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </nav>

      {/* ✅ Dynamic Spacer — auto matches navbar height */}
      <div
        style={{ height: `${navHeight}px` }}
        className="w-full bg-transparent"
      ></div>
    </>
  );
};

export default Navbar;
