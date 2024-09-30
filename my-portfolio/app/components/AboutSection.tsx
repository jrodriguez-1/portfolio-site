"use client";
import React, { useTransition, useState } from "react";
import TabButton from "../utils/TabButton";
import SynthesizerCard from "../utils/AboutCard";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-4 space-y-2 text-sm sm:text-base">
        <li>4 years of engineering experience in software development and system architecture, specializing in full-stack applications.</li>
        <li>Proficient in Java Spring and Spring Boot, designing REST APIs and backend solutions.</li>
        <li>Proficient in UI/UX development, focusing on user-centered design principles to enhance usability and engagement.</li>
        <li>Java Spring and Spring Boot REST API development, designing scalable and efficient backend solutions.</li>
        <li>Experience in both relational and non-relational databases, including PostgreSQL, CockroachDB, and MongoDB, optimizing data storage and retrieval.</li>
        <li>Skilled in HTML, CSS, and Tailwind CSS, creating responsive and visually appealing web interfaces.</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 text-sm sm:text-base">
        <li>Code Platoon</li>
        <li>Wilbur Wright College</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 text-sm sm:text-base">
        <li>AWS Cloud Practitioner</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white bg-gray-800 py-8 sm:py-12" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-white mb-6 sm:mb-8 font-bold">About Me</h1>
        {/* Grid Layout for Synthesizer Card and Tab Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center py-6">
          {/* Left Column: Synthesizer Card */}
          <div className="w-full lg:w-1/2">
            <SynthesizerCard />
          </div>

          {/* Right Column: Tab Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-6">
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                {" "}
                Experience{" "}
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
            </div>
            
            {/* Tab Content */}
            <div className="text-left text-sm sm:text-base md:text-lg px-4 rounded-md overflow-y-auto max-h-[60vh] lg:max-h-none">
              {TAB_DATA.find((t) => t.id === tab)?.content || null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;