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
  MessageCircle,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Resources = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["resource_categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("resource_categories")
        .select("id,title,icon_key,color_key,resources(id,name,type,downloads,recent)")
        .order("created_at", { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
  });

  const { data: events = [] } = useQuery({
    queryKey: ["live_events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("live_events")
        .select("id,title,start_at,speaker,attendees_count,type")
        .order("start_at", { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
  });

  const iconMap = { file: FileText, video: Video, code: Code } as const;
  const colorClassMap = { primary: "text-primary", accent: "text-accent", success: "text-success" } as const;

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  const formatTime = (iso: string) =>
    new Date(iso).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });

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
          {categories.map((category) => {
            const Icon = iconMap[(category as any).icon_key as keyof typeof iconMap] ?? FileText;
            const colorClass = colorClassMap[(category as any).color_key as keyof typeof colorClassMap] ?? "text-primary";
            return (
              <Card key={(category as any).id} className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-background-tertiary flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${colorClass}`} />
                    </div>
                    <span>{(category as any).title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {(category as any).resources?.map((resource: any) => (
                    <div key={resource.id} className="flex items-center justify-between p-3 rounded-lg bg-background-tertiary border border-border">
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
                            <span>{Number(resource.downloads).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-4">
                    View All {(category as any).title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
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
            {events.map((event: any) => (
              <Card key={event.id} className="glass">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="gradient-primary">{event.type}</Badge>
                    <div className="text-sm text-muted-foreground">{formatDate(event.start_at)}</div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{Number(event.attendees_count).toLocaleString()} registered</span>
                    </div>
                    <span className="text-muted-foreground">{formatTime(event.start_at)}</span>
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