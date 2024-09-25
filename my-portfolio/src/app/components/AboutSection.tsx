"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../utils/TabButton";
import TerminalCard from "../utils/TerminalCard";
// import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <h1 className="text-center text-4xl text-white mb-4">About Me</h1>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div>
      <TerminalCard/>
      </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          {/* <p className="text-base lg:text-lg">
            I’ve always had a passion for technology, and thrive on the creative challenges it presents. As a full stack developer, I've honed my skills in various domains including front-end design, data engineering, DevOps, and building rest APIs. I love creating the connective tissue that makes applications come to life. My journey in the Marine Corps instilled discipline, teamwork, and resilience; qualities that I carry with me every day, and reflect in my work. 
            Beyond coding, I'm an avid outdoor enthusiast, finding inspiration in nature that often fuels my innovative thinking. Fitness is a big part of my life, teaching me the value of persistence and dedication, qualities I channel into my work. I'm deeply committed to my journey of self-improvement, constantly exploring new methodologies to stay ahead in this ever-evolving world. I strive for wisdom in all aspects of life, every day is one step closer to success and every failure is a lesson learned. Throughout my journey, it’s important that I not only achieve my goals, but aid those around me and leave a positive impact wherever I am. Software engineering has helped me explore ideas and express my creativity. I hope to continue on this path, and am excited for what the future holds.
          </p> */}
          {/* <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div> */}
          {/* <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content || null}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;