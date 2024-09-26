"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container flex justify-end pr-48">
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
                  "Thank you for visiting my site!",
                  1000,
                  "Please feel free to reach out.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            </motion.div>
          </div>
          <Link href="https://github.com/jrodriguez-1" target="_blank" rel="noopener noreferrer">
            <div className="relative w-12 h-16 m-2">
              <Image
                src={"/images/github.png"}
                alt={"Logo"}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/jose-rodriguez-1022761b4/" target="_blank" rel="noopener noreferrer">
            <div className="relative w-16 h-16 m-2">
              <Image
                src={"/images/linkedin-logo.png"}
                alt={"Logo"}
                sizes="100%"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Link>
      </div>
    </footer>
  );
};

export default Footer;