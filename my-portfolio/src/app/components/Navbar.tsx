"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const navLinks: {label: string; path: string}[] = [
  {
    label: "// about",
    path: "#about",
  },
  {
    label: "// projects",
    path: "#projects",
  },
  {
    label: "// contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const linksRef = useRef<HTMLAnchorElement>(null);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
// ignore this message
  return (
    <nav className="absolute mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-20 py-4">
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
      <h1 className="text-lime-800 mb-4 text-4xl sm:text-5xl lg:text-2xl lg:leading-normal font-mono">
            <TypeAnimation
              sequence={[
                "function repeat() {",
                1000,
                "eat();",
                1000,
                "sleep();",
                1000,
                "code;",
                1000,
                "repeat;",
                1000,
                "}) ();",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          </motion.div>
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
        <div className="menu hidden md:block md:w-auto" id="navbar ">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 py-4 items-center font-mono">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="block py-2 pl-3 pr-4 text-lime-800 sm:text-xl lg:text-2xl rounded md:p-0 hover:text-white"
                  onClick={(e) => smoothScroll(e, link.path.substring(1))}
                  >
                    {link.label}
                  </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;