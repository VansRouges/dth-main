import { Calendar, Clock, User, Video, BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GetLiveClassesQueryResult } from "@/sanity.types";
import Link from "next/link";

interface LiveClassCardProps {
  liveClass: GetLiveClassesQueryResult[number];
  index?: number;
}

export function LiveClassCard({ liveClass, index = 0 }: LiveClassCardProps) {
  const meetingLink = liveClass?.meetingLink || "#";
  
  // Ensure that liveClass.date is not null before using it
  const liveClassDate = liveClass?.date ? new Date(liveClass.date) : null;
  
  // Check if the live class is upcoming
  const isUpcoming = liveClassDate && liveClassDate.getTime() > Date.now();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isToday = (dateString: string) => {
    const today = new Date();
    const classDate = new Date(dateString);
    return today.toDateString() === classDate.toDateString();
  };

  return (
    <Card 
      className="group hover:shadow-elevated transition-all duration-300 bg-card border-border/40 hover:border-primary/30 animate-fade-in overflow-hidden relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient overlay for visual appeal */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      <CardHeader className="pb-3 relative">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
              {liveClass.title}
            </CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground truncate">
                {liveClass?.course?.title || "No course"}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {liveClassDate && liveClass?.date && isToday(liveClass?.date) && (
              <Badge variant="default" className="bg-primary/10 text-primary border-primary/20 animate-float">
                Today
              </Badge>
            )}
            <div 
              className={`w-3 h-3 rounded-full ${isUpcoming ? "bg-green-500" : "bg-orange-500"}`}
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 relative">
        {/* Description */}
        {liveClass.description && (
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {liveClass.description}
          </p>
        )}

        {/* Class Details */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-primary/70" />
            <span className="text-foreground">
              {liveClassDate ? liveClass?.date && formatDate(liveClass?.date) : "TBA"}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary/70" />
            <span className="text-foreground">{liveClass?.time || "TBA"}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-primary/70" />
            <span className="text-foreground truncate">
              {liveClass?.facilitator?.name || "TBA"}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Video className="h-4 w-4 text-primary/70" />
            <span className="text-foreground">
              {liveClass?.duration ? `${liveClass.duration}h` : "TBA"}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 border-t border-border/40">
          <Button 
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium group/btn"
            size="sm"
          >
            <Link href={meetingLink} target="_blank" rel="noopener noreferrer">
              <Video className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
              Join Meeting
              <ExternalLink className="h-3 w-3 ml-2 opacity-70" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}