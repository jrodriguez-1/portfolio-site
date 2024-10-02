"use client";
import { Suspense, lazy } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

const AboutSection = lazy(() => import("./components/AboutSection"));
const EmailSection = lazy(() => import("./components/EmailSection"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col opacity-90">
      <div className="container mx-auto my-4 pt-28 sm:px-6 lg:px-8 flex-grow ">
        <Navbar />
        <HeroSection data-section-id="#home" index={0} />
        <Suspense fallback={<div>Loading...</div>}>
          <AboutSection data-section-id="#about" />
          <EmailSection /> 
        </Suspense>
        <Footer />
      </div>
    </main>
  );
}
