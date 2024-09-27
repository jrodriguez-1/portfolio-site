"use client";
import React, { useTransition, useState } from "react";
import TabButton from "../utils/TabButton";
import SynthesizerCard from "../utils/AboutCard";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>4 years of engineering experience in software development and system architecture, specializing in full-stack applications.</li>
        <li>Proficient in Java Spring and Spring Boot, designing REST APIs and backend solutions.</li>
        <li>Proficient in UI/UX development, focusing on user-centered design principles to enhance usability and engagement.</li>
        <li>Java Spring and Spring Boot REST API development, designing scalable and efficient backend solutions.</li>
        <li>Experience with Continuous Integration and Continuous Deployment (CI/CD) processes, ensuring efficient and reliable software delivery.</li>
        <li>Experience in both relational and non-relational databases, including PostgreSQL, CockroachDB, and MongoDB, optimizing data storage and retrieval.</li>
        <li>Skilled in HTML, CSS, and Tailwind CSS, creating responsive and visually appealing web interfaces.</li>
        <li>Strong skills in performance optimization and troubleshooting to enhance application speed and scalability.</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Code Platoon</li>
        <li>Wilbur Wright College</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();
  const [showText, setShowText] = useState(false);

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const handleClick = () => {
    setShowText((prev) => !prev);
  }

  return (
    <section className="text-white bg-gray-800 py-16" id="about">
      <h1 className="text-center text-4xl text-white mb-4 font-bold mt-10">About Me</h1>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <SynthesizerCard />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="flex flex-row justify-start mt-2 my-8 mx-auto text-2xl">
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
          <div className="mx-24 text-base">
            {TAB_DATA.find((t) => t.id === tab)?.content || null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;