import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, PlayCircle } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Full-Stack Web Development",
      description: "Master React, Node.js, and database technologies to build complete web applications.",
      level: "Beginner",
      duration: "12 weeks",
      students: "2.5k",
      rating: "4.9",
      image: "🌐",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      popular: true
    },
    {
      title: "Machine Learning & AI",
      description: "Learn Python, TensorFlow, and deep learning to build intelligent applications.",
      level: "Intermediate",
      duration: "16 weeks",
      students: "1.8k",
      rating: "4.8",
      image: "🤖",
      technologies: ["Python", "TensorFlow", "Keras", "Pandas"],
      popular: false
    },
    {
      title: "Cloud DevOps Engineering",
      description: "Master AWS, Docker, Kubernetes, and CI/CD pipelines for modern deployment.",
      level: "Advanced",
      duration: "14 weeks",
      students: "1.2k",
      rating: "4.9",
      image: "☁️",
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins"],
      popular: true
    },
    {
      title: "Mobile App Development",
      description: "Build cross-platform mobile apps with React Native and Flutter frameworks.",
      level: "Intermediate",
      duration: "10 weeks",
      students: "2.1k",
      rating: "4.7",
      image: "📱",
      technologies: ["React Native", "Flutter", "Firebase", "Redux"],
      popular: false
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Learn ethical hacking, network security, and protection strategies.",
      level: "Beginner",
      duration: "8 weeks",
      students: "1.5k",
      rating: "4.8",
      image: "🔒",
      technologies: ["Kali Linux", "Wireshark", "Metasploit", "OWASP"],
      popular: false
    },
    {
      title: "Data Science & Analytics",
      description: "Analyze big data using Python, R, and advanced statistical methods.",
      level: "Intermediate",
      duration: "12 weeks",
      students: "1.9k",
      rating: "4.9",
      image: "📊",
      technologies: ["Python", "R", "SQL", "Tableau"],
      popular: true
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-success/20 text-success";
      case "Intermediate": return "bg-warning/20 text-warning";
      case "Advanced": return "bg-destructive/20 text-destructive";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <section id="courses" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Popular <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from hundreds of expert-led courses designed to take you from beginner to professional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <Card key={idx} className="glass group hover:scale-105 transition-all duration-300 relative overflow-hidden">
              {course.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="gradient-primary">Popular</Badge>
                </div>
              )}
              
              <CardHeader className="relative">
                <div className="text-6xl mb-4 text-center">{course.image}</div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {course.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Course metadata */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>
                
                {/* Level badge */}
                <div className="flex items-center justify-between">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {course.technologies.map((tech, techIdx) => (
                    <Badge key={techIdx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Button className="w-full gradient-primary group-hover:shadow-glow transition-all">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="glass">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;