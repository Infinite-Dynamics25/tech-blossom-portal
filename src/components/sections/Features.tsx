import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Users, 
  Zap, 
  Shield, 
  BookOpen, 
  MessageCircle,
  Trophy,
  Clock,
  Target
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized learning paths adapted to your pace and style with intelligent recommendations.",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "24/7 AI Chatbot",
      description: "Get instant help with coding questions, concept explanations, and learning guidance.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Join study groups, peer programming sessions, and connect with fellow learners.",
      color: "text-success"
    },
    {
      icon: Zap,
      title: "Interactive Labs",
      description: "Hands-on coding environments with real-time feedback and automated testing.",
      color: "text-warning"
    },
    {
      icon: Trophy,
      title: "Gamified Progress",
      description: "Earn XP, unlock achievements, and compete on leaderboards to stay motivated.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Industry Certifications",
      description: "Earn recognized certificates from top tech companies and boost your career.",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Learn at your own pace with offline content and mobile-friendly lessons.",
      color: "text-success"
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Get personalized career advice and job placement assistance from industry experts.",
      color: "text-warning"
    },
    {
      icon: BookOpen,
      title: "Rich Resources",
      description: "Access extensive libraries of tutorials, documentation, and reference materials.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-gradient">Excel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with proven learning methodologies 
            to accelerate your tech career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="glass group hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-background-tertiary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;