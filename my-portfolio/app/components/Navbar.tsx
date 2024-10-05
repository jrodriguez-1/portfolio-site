"use client";
import React, { useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../utils/Logo";

const navLinks: {label: string; path: string}[] = [
  { label: "home", path: "#home" },
  { label: "about", path: "#about" },
  { label: "contact", path: "#contact" },
];

const Navbar = () => {
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
      <nav ref={navbarRef} className="fixed top-0 left-0 right-0 z-10 bg-gray-300 bg-opacity-10 border border-[#33353F] backdrop-blur-lg backdrop-brightness-125 backdrop-contrast-150 border-b shadow-lg py-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <Logo/>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center font-bold">
            {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="text-white lg:text-2xl tracking-wider z-10 no-underline hover:underline after:content-[''] after:absolute after: w-full after:h-0.5
                  after:bg-white after:bottom-0 after:left-0
                           after:scale-x-0 hover:after:scale-x-100
                           after:transition-transform after:duration-300 after:origin-left"
                  onClick={(e) => smoothScroll(e, link.path.substring(1))}
                >
                  {link.label}
                </a>
            ))}
        </div>

         {/* Mobile Menu Button */}
         <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="text-white focus:outline-none px-10"
            >
              {navbarOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

        {/* Mobile Menu */}
          <div className={`md:hidden ${navbarOpen ? 'block' : 'hidden'} bg-gray-900 bg-opacity-95`}>
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  onClick={(e) => smoothScroll(e, link.path.substring(1))}
                  className="block text-white hover:text-gray-300 py-2 text-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
    </nav>
  );
};

export default Navbar;