import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import CasesSection from "@/components/CasesSection";
import TimelineSection from "@/components/TimelineSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <TechStackSection />
    <ProjectsSection />
    <CasesSection />
    <TimelineSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
    <ThemeToggle />
  </>
);

export default Index;
