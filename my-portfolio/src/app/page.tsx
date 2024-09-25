import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import IconGallery from "./components/IconGallery";
import AboutSection from "./components/AboutSection";
// import { Container } from "postcss";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mt-24 mx-auto px-12 py-4">
        <Navbar />
        <IntroSection />
        <IconGallery />
        <AboutSection data-section-id="#about"/>
        {/* 
        <ProjectsSection />
        <EmailSection /> */}
      </div>
      <Footer />
    </main>
  );
}
