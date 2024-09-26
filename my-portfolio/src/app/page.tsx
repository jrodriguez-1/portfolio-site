"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import IconGallery from "./components/IconGallery";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import { useState } from "react";
import ScrollObserver from "./utils/ScrollObserver";

export default function Home() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mt-24 mx-auto px-12 py-4">
        <ScrollObserver onIntersect={setIsNavbarFixed} />
        <Navbar isFixed={isNavbarFixed} />
        <IntroSection data-section-id="#home" />
        <IconGallery />
        <AboutSection data-section-id="#about" />
        {/* 
        <ProjectsSection />
        */}
        <EmailSection /> 
      </div>
      <Footer />
    </main>
  );
}
