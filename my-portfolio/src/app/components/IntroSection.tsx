"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const IntroSection = (index: number) => {
  return (
    <section className="lg:py-4">
      <div className="grid grid-cols-1 sm:grid-cols-12">
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
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-gray-600">
              Jose Rodriguez{" "}
            </span>
            <br></br>
            <p className="card-text"></p>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-1xl font-mono">
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
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
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
    </section>
  );
};

export default IntroSection;