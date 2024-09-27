"use client";
import React, { useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const navLinks: {label: string; path: string}[] = [
  { label: "// home", path: "#home" },
  { label: "// about", path: "#about" },
  { label: "// projects", path: "#projects"},
  { label: "// contact", path: "#contact" },
];

interface NavbarProps {
  isFixed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isFixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setNavbarOpen(false);
  };

    return (
      <nav 
        ref={navbarRef}
        className={`${isFixed ? "fixed top-0 left-0 right-0" : "absolute top-0 left-0 right-0"
        } z-10 bg-black-rgba bg-opacity-100 border border-[#33353F] backdrop-filter backdrop-grayscale backdrop-blur-lg`}
        style={{ transition: 'top 0.3s'}}
      >
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-20 py-4">
        {/* <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
        <h1 className="text-stone-50 mb-4 text-4xl sm:text-5xl lg:text-3xl lg:leading-normal font-bold">
              <TypeAnimation
                sequence={[
                  "Welcome to my portfolio!",
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </motion.div> */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          {/* Desktop Menu */}
        <div className="hidden md:flex md:w-auto">
          <ul className="flex space-x-6 items-center font-bold text-neutral-50">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="text-xl hover:text-white"
                  onClick={(e) => smoothScroll(e, link.path.substring(1))}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu */}
        {navbarOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-20 flex flex-col justify-center items-center md:hidden">
            <ul className="flex flex-col space-y-8 items-center font-serif text-neutral-50 text-2xl">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={(e) => smoothScroll(e, link.path.substring(1))}
                    className="hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;