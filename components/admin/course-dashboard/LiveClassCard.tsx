import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, User, ExternalLink } from "lucide-react"

interface LiveClass {
  id: number
  title: string
  date: string
  time: string
  facilitator: string
  course: string
  meetingLink: string
  status: string
}

export function LiveClassCard({ liveClass }: { liveClass: LiveClass }) {
  return (
    <Card key={liveClass.id}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="line-clamp-1 text-black">{liveClass.title}</CardTitle>
          <div
            className={`w-3 h-3 rounded-full ${
              liveClass.status === "upcoming" ? "bg-green-500" : "bg-orange-500"
            }`}
          />
        </div>
        <Badge variant="secondary" className="w-fit">
          {liveClass.course}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm text-black">
          <CalendarDays className="w-4 h-4 mr-2" />
          {new Date(liveClass.date).toLocaleDateString()} at {liveClass.time}
        </div>

        <div className="flex items-center text-sm text-black">
          <User className="w-4 h-4 mr-2" />
          {liveClass.facilitator}
        </div>

        <div className="pt-2">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={liveClass.meetingLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Join Meeting
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}