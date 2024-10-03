"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  index: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ index }) => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'JavaScript', icon: '/images/js.png' },
    { name: 'React', icon: '/images/react-logo.png' },
    { name: 'Next.js', icon: '/images/nextjs-logo.png' },
    { name: 'Java', icon: '/images/java-logo.png' },
    { name: 'Spring', icon: '/images/spring-logo.png' },
  ];

      useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-800 to-black text-white py-8 px-4 sm:py-12">
      {/* Hero Content */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-12">
         <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50}}
          whileInView={{
            opacity: 1, 
            x: 0,
            transition: {
              duration: 1,
              delay: 0.3,
            }
          }}
          viewport={{ once: true }}
          className="col-span-1 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-50">
              Jose Rodriguez{" "}
            </span>
          </h1>
          <p className="text-white text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 font-mono">
            Fullstack Developer | Marine Corps Veteran | Results-Driven Professional
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50}}
          whileInView={{
            opacity: 1, 
            x: 0,
            transition: {
              duration: 1,
              delay: 0.3,
            }
          }}
          viewport={{ once: true }}
          className="col-span-1 sm:col-span-4 place-self-center mt-6 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 relative overflow-hidden">
            <Image
            	fill
              src="/images/walking.jpg"
              alt="hero image"
              objectFit="cover"
              priority
              className="rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Skill Icons */}
      <div className={`transition-opacity duration-500 ${isVisible ? 'fade-in' : 'opacity-0'} border-t-2 border-gray-300 w-full sm:mb-4`}/>
      <div className="container mx-auto py-2">
        <div className={`transition-opacity duration-500 ${isVisible ? 'fade-in' : 'opacity-0'} sm:border-[#33353F] sm:border rounded-md py-4 px-4 sm:px-4 bg-slate-400 flex flex-wrap gap-4 justify-center sm:gap-6 lg:gap-10`}>
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-row items-center sm:my-0 h-full text-center">
              <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                  delay: 0.3,
                },
              }}
              className="flex flex-col items-center"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                className=" mb-2 w-8 h-8 sm:w-8"
                objectFit="contain"
                width={32}
                height={32}
                priority
              />
              <p className="text-white sm:text-xm">{skill.name}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className={`transition-opacity duration-500 ${isVisible ? 'fade-in' : 'opacity-0'} border-t-2 border-gray-300 w-full sm:mt-4`}/>
    </section>
  );
};

export default HeroSection;