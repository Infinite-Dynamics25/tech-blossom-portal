import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Trophy, TrendingUp, Play, Calendar } from "lucide-react";

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Learning <span className="text-gradient">Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your progress, access courses, and manage your learning journey all in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Dashboard Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Overview */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Learning Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">12</div>
                    <div className="text-sm text-muted-foreground mb-2">Courses Completed</div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">48h</div>
                    <div className="text-sm text-muted-foreground mb-2">Study Time</div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success mb-1">320</div>
                    <div className="text-sm text-muted-foreground mb-2">XP Points</div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Current Courses */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Continue Learning</span>
                  </div>
                  <Button variant="ghost" size="sm">View All</Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "React Advanced Patterns", progress: 65, duration: "4h left" },
                  { title: "Machine Learning Fundamentals", progress: 30, duration: "8h left" },
                  { title: "Cloud Architecture", progress: 85, duration: "1h left" },
                ].map((course, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-4 rounded-lg bg-background-tertiary border border-border">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Play className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{course.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{course.duration}</span>
                        <span>•</span>
                        <span>{course.progress}% complete</span>
                      </div>
                      <Progress value={course.progress} className="h-1 mt-2" />
                    </div>
                    <Button size="sm" variant="outline">Continue</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Study Session
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Trophy className="mr-2 h-4 w-4" />
                  View Achievements
                </Button>
                <Button className="w-full justify-start gradient-primary">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Courses
                </Button>
              </CardContent>
            </Card>
            
            {/* Achievements */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-warning" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: "First Course Completed", icon: "🎉" },
                  { title: "Week Streak", icon: "🔥" },
                  { title: "Code Warrior", icon: "⚡" },
                ].map((achievement, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg bg-background-tertiary border border-border">
                    <span className="text-2xl">{achievement.icon}</span>
                    <span className="font-medium">{achievement.title}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Study Time */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>Today's Goal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">45m</div>
                  <div className="text-sm text-muted-foreground mb-4">of 60 minutes</div>
                  <Progress value={75} className="h-3" />
                  <div className="text-xs text-muted-foreground mt-2">15 minutes to go!</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;