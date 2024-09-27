"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import IconGallery from "./components/IconGallery";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import { useState } from "react";
import ScrollObserver from "./utils/ScrollObserver";
import Projects from "./components/Projects";
import Header from "./components/Header";

export default function Home() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mt-24 mx-auto px-12 py-4">
        <ScrollObserver onIntersect={setIsNavbarFixed} />
        <Navbar isFixed={isNavbarFixed} />
        <HeroSection data-section-id="#home" index={0} dataSectionId={""} />
        {/* <Projects /> */}
        <AboutSection data-section-id="#about" />
        <EmailSection /> 
      </div>
      <Footer />
    </main>
  );
}
