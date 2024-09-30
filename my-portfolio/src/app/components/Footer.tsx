"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Footer = () => {
  return (
    <footer className=" border-t bottom-0 z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex sm:justify-between space-x-4 mr-10">
        <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4 sm:mb-0"
          >
          <h1 className="text-2xl sm:text-5xl lg:text-3xl glitch-text tracking-wider font-bold">
            <TypeAnimation
              sequence={[
                "Jose Rodriguez",
                1000,
                "Jose Rodriguez",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </h1>
            </motion.div>

            {/* Social Media Links */}
            <div className="flex flex-row space-x-4">
              <Link href="https://github.com/jrodriguez-1" target="_blank" rel="noopener noreferrer">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                  <Image
                    src={"/images/git.png"}
                    alt={"github logo"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
            <Link href="https://www.linkedin.com/in/jose-rodriguez-1022761b4/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src={"/images/linkedin.png"}
                  alt={"linkedIn logo"}
                  layout="fill"
                  objectFit="contain"
                />                    
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;