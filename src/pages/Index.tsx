import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Dashboard from "@/components/sections/Dashboard";
import Courses from "@/components/sections/Courses";
import Resources from "@/components/sections/Resources";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Dashboard />
      <Courses />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
