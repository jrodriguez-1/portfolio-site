"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageItem {
  src: string;
  alt: string;
  label: string;
}

const images: ImageItem[] = [
  { src: '/images/js.png', alt: 'Image 1', label: 'JavaScript' },
  { src: '/images/react-logo.png', alt: 'Image 2', label: 'React' },
  { src: '/images/nextjs-logo.png', alt: 'Image 3', label: 'Next.js' },
  { src: '/images/java-logo.png', alt: 'Image 4', label: 'Java' },
  { src: '/images/spring-logo.png', alt: 'Image 5', label: 'Spring' },
];

const IconGallery: React.FC<ImageItem> = () => {
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
  
      return () => clearTimeout(timer);
    }, []);
  
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      {/* <div className={`transition-opacity duration-500 ${isVisible ? 'fade-in' : 'opacity-0'}`}> */}
      <div className={`transition-opacity duration-500 ${isVisible ? 'fade-in' : 'opacity-0'} sm:border-[#33353F] sm:border rounded-md py-6 px-4 sm:px-8 bg-amber-200`}>
      {/* </div> */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 4 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                  delay: 0.3,
                },
              }}
              className={'relative "flex flex-row items-center justify-between mx-16 my-4 sm:my-0 h-20 w-20'}
            >
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-[#000000] text-lg text-center pr-4">{image.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconGallery;