import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, User, ExternalLink } from "lucide-react"
import { GetLiveClassesQueryResult } from "@/sanity.types"
import Link from "next/link"

interface LiveClassCardProps {
  liveClass: GetLiveClassesQueryResult[number];
}

export function LiveClassCard({ liveClass }: LiveClassCardProps) {
  const meetingLink = liveClass?.meetingLink || "#";

  // Ensure that liveClass.date is not null before using it
  const liveClassDate = liveClass?.date ? new Date(liveClass.date) : null;
  
  // Check if the live class is upcoming
  const isUpcoming = liveClassDate && liveClassDate.getTime() > Date.now();

  return (
    <Card key={liveClass._id}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="line-clamp-1 text-black">{liveClass.title}</CardTitle>
          <div
            className={`w-3 h-3 rounded-full ${isUpcoming ? "bg-green-500" : "bg-orange-500"}`}
          />
        </div>
        <Badge variant="secondary" className="w-fit">
          {liveClass?.course?.title}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm text-black">
          <CalendarDays className="w-4 h-4 mr-2" />
          {/* Check if liveClassDate is valid before calling toLocaleDateString */}
          {liveClassDate ? liveClassDate.toLocaleDateString() : "TBA"} at {liveClass?.time}
        </div>

        <div className="flex items-center text-sm text-black">
          <User className="w-4 h-4 mr-2" />
          {liveClass?.facilitator?.name}
        </div>

        <div className="pt-2">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href={meetingLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Join Meeting
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
