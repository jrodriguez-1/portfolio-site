import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AchievementsSection from "./components/AchievmentsSection";
import AboutSection from "./components/AboutSection";
// import { Container } from "postcss";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mt-24 mx-auto px-12 py-4">
        <Navbar />
        <HeroSection />
        <AchievementsSection />
        <AboutSection />

        {/* 
        <ProjectsSection />
        <EmailSection /> */}
      </div>
      <Footer />
    </main>
  );
}
