
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Initialize animation and scrolling logic
  useEffect(() => {
    // Function to handle lazy loading of images
    const blurImages = document.querySelectorAll(".blur-load");
    blurImages.forEach((div) => {
      const img = div.querySelector("img");
      
      function loaded() {
        div.classList.add("loaded");
      }
      
      if (img?.complete) {
        loaded();
      } else {
        img?.addEventListener("load", loaded);
      }
    });

    // Function to handle reveal animations on scroll
    const handleScrollAnimations = () => {
      // Your animation logic here if needed
    };

    window.addEventListener("scroll", handleScrollAnimations);
    handleScrollAnimations(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScrollAnimations);
      blurImages.forEach((div) => {
        const img = div.querySelector("img");
        img?.removeEventListener("load", () => div.classList.add("loaded"));
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
