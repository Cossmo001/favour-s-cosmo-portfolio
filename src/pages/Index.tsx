import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandsStrip from "@/components/BrandsStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <BrandsStrip />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
