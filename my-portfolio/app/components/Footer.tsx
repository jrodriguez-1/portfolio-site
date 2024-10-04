"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t bottom-0 z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex sm:justify-between space-x-4 mr-10">
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