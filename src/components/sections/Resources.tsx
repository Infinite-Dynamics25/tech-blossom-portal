import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Video, 
  Code, 
  BookOpen, 
  Download, 
  ExternalLink,
  Calendar,
  Users,
  MessageCircle
} from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Documentation & Guides",
      icon: FileText,
      color: "text-primary",
      resources: [
        { name: "React Best Practices", type: "Guide", downloads: "12.5k", recent: true },
        { name: "JavaScript ES6+ Reference", type: "Cheatsheet", downloads: "8.2k", recent: false },
        { name: "API Design Patterns", type: "Documentation", downloads: "5.7k", recent: true },
      ]
    },
    {
      title: "Video Tutorials",
      icon: Video,
      color: "text-accent",
      resources: [
        { name: "Advanced React Hooks", type: "Tutorial Series", downloads: "15.2k", recent: true },
        { name: "Docker for Beginners", type: "Workshop", downloads: "9.8k", recent: false },
        { name: "Machine Learning Basics", type: "Course Preview", downloads: "11.3k", recent: true },
      ]
    },
    {
      title: "Code Templates",
      icon: Code,
      color: "text-success",
      resources: [
        { name: "Full-Stack Starter Kit", type: "Template", downloads: "6.4k", recent: true },
        { name: "REST API Boilerplate", type: "Template", downloads: "4.1k", recent: false },
        { name: "Mobile App Template", type: "Template", downloads: "3.9k", recent: true },
      ]
    }
  ];

  const liveEvents = [
    {
      title: "Advanced TypeScript Workshop",
      date: "Dec 15, 2024",
      time: "2:00 PM EST",
      speaker: "Sarah Chen",
      attendees: "250+",
      type: "Workshop"
    },
    {
      title: "Career in AI/ML Panel",
      date: "Dec 18, 2024",
      time: "6:00 PM EST",
      speaker: "Tech Leaders",
      attendees: "500+",
      type: "Panel"
    },
    {
      title: "Open Source Contribution",
      date: "Dec 20, 2024",
      time: "4:00 PM EST",
      speaker: "Alex Kumar",
      attendees: "180+",
      type: "Meetup"
    }
  ];

  return (
    <section id="resources" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive library of tutorials, documentation, templates, and live events 
            to accelerate your learning journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {resourceCategories.map((category, idx) => (
            <Card key={idx} className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-background-tertiary flex items-center justify-center`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.resources.map((resource, resourceIdx) => (
                  <div key={resourceIdx} className="flex items-center justify-between p-3 rounded-lg bg-background-tertiary border border-border">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-sm">{resource.name}</h4>
                        {resource.recent && (
                          <Badge variant="outline" className="text-xs">New</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>{resource.type}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Download className="h-3 w-3" />
                          <span>{resource.downloads}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  View All {category.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Live Events Section */}
        <div className="bg-background-secondary rounded-2xl p-8 glass">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Upcoming <span className="text-gradient">Live Events</span>
              </h3>
              <p className="text-muted-foreground">
                Join live workshops, panels, and community meetups with industry experts.
              </p>
            </div>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              View Calendar
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveEvents.map((event, idx) => (
              <Card key={idx} className="glass">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="gradient-primary">{event.type}</Badge>
                    <div className="text-sm text-muted-foreground">{event.date}</div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{event.attendees} registered</span>
                    </div>
                    <span className="text-muted-foreground">{event.time}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Speaker: </span>
                    <span className="font-medium">{event.speaker}</span>
                  </div>
                  <Button size="sm" className="w-full gradient-primary">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Register Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;