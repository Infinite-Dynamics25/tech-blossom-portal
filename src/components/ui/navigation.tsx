import { Button } from "@/components/ui/button";
import { BookOpen, Users, Trophy, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/d97b3a60-d6cb-427c-bf68-8e93acaf87e7.png" alt="Infinite Dynamics Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-gradient">InfiniteTechAcademy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Features
            </a>
            <a 
              href="#dashboard" 
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Dashboard
            </a>
            <a 
              href="#courses" 
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Courses
            </a>
            <a 
              href="#resources" 
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Resources
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/auth")}
            >
              Sign In
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="gradient-primary"
              onClick={() => navigate("/auth")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;