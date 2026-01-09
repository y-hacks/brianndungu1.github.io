import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContributionGraph from "@/components/ContributionGraph";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProjectsSection />
      <ContributionGraph />
      <Footer />
    </div>
  );
};

export default Index;
