"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  index: number;
  dataSectionId: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ index, dataSectionId }) => {
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
    <section id={dataSectionId} className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-12 pb-48 -mb-10">
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
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-gray-50">
              Jose Rodriguez{" "}
            </span>
            <br></br>
            <p className="card-text"></p>
          </h1>
          <p className="text-[#ffffff] text-base sm:text-lg mb-6 lg:text-1xl font-mono">
            Fullstack Developer | Marine Corps Veteran | Results-Driven Professional
          </p>
          <div>
          </div>
        </motion.div>
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
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] relative">
            <Image
            	fill
              src="/images/walking.jpg"
              alt="hero image"
              sizes="100%"
              style={{
                width: '100%',
                height: '100%',
								borderRadius: '50%',
								position: 'absolute',
                boxShadow: "0 8px 12px rgba(0, 0, 0, 0.5)",
                objectFit:'cover',
								zoom: 10.0,
                }}
            />
          </div>
        </motion.div>
      </div>
      <div className={`transition-opacity duration-500 ${isVisible ? 'fade-in' : 'opacity-0'} border-t-2 border-gray-300 w-full`}/>
      <div className="container mx-auto text-center mt-4 mb-4">
        <div className={`transition-opacity duration-500 ${isVisible ? 'fade-in' : 'opacity-0'} sm:border-[#33353F] sm:border rounded-md py-6 px-4 sm:px-8 bg-slate-400 flex justify-center space-x-44`}>
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-row items-center sm:my-0 h-full text-center">
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
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-2"
              />
              <p className="text-white">{skill.name}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className={`transition-opacity duration-500 ${isVisible ? 'fade-in' : 'opacity-0'} border-t-2 border-gray-300 w-full`}/>
    </section>
  );
};

export default HeroSection;



// Removed the local useEffect function declaration
// const HeroSection = (index: number) => {
//   return (
//     <section className="lg:py-4 ml-20">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <motion.div
//           initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50}}
//           whileInView={{
//             opacity: 1, 
//             x: 0,
//             transition: {
//               duration: 1,
//               delay: 0.3,
//             }
//           }}
//           viewport={{ once: true }}
//           className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
//         >
//           <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-mono">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-950 to-gray-600">
//               Jose Rodriguez{" "}
//             </span>
//             <br></br>
//             <p className="card-text"></p>
//           </h1>
//           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-1xl font-mono">
//             Fullstack Developer | Marine Corps Veteran | Results-Driven Professional
//           </p>
//           <div>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50}}
//           whileInView={{
//             opacity: 1, 
//             x: 0,
//             transition: {
//               duration: 1,
//               delay: 0.3,
//             }
//           }}
//           viewport={{ once: true }}
//           className="col-span-4 place-self-center mt-4 lg:mt-0"
//         >
//           <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] relative">
//             <Image
//             	fill
//               src="/images/walking.jpg"
//               alt="hero image"
//               sizes="100%"
//               style={{
//                 width: '100%',
//                 height: '100%',
// 								borderRadius: '50%',
// 								position: 'absolute',
//                 boxShadow: "0 8px 12px rgba(0, 0, 0, 0.5)",
//                 objectFit:'cover',
// 								zoom: 10.0,
//                 }}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;