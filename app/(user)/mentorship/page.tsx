// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MessageSquare, Star, Users } from "lucide-react"
import UserLayout from "@/components/user-layout";

export default function MentorshipPage() {
  return (
    <UserLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Mentorship</h1>
          <p className="text-gray-500">Connect with mentors and schedule sessions</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled mentorship sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Advanced React Patterns",
                    date: "Today, 2:00 PM",
                    mentor: "Sarah Johnson",
                    avatar: "S",
                  },
                  {
                    title: "Data Structures Review",
                    date: "Tomorrow, 10:00 AM",
                    mentor: "Michael Chen",
                    avatar: "M",
                  },
                  {
                    title: "Career Planning Session",
                    date: "Friday, 3:30 PM",
                    mentor: "Lisa Rodriguez",
                    avatar: "L",
                  },
                ].map((session, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {/* <Avatar>
                      <AvatarFallback>{session.avatar}</AvatarFallback>
                    </Avatar> */}
                    <div className="space-y-1 flex-1">
                      <p className="font-medium">{session.title}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="mr-1 h-3 w-3" />
                        <span>Mentor: {session.mentor}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Join
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Find a Mentor</CardTitle>
              <CardDescription>Browse available mentors in your field</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "David Wilson",
                    specialty: "Frontend Development",
                    rating: 4.9,
                    sessions: 120,
                    avatar: "D",
                  },
                  {
                    name: "Jennifer Lee",
                    specialty: "Data Science & ML",
                    rating: 4.8,
                    sessions: 85,
                    avatar: "J",
                  },
                  {
                    name: "Robert Taylor",
                    specialty: "DevOps & Cloud",
                    rating: 4.7,
                    sessions: 64,
                    avatar: "R",
                  },
                ].map((mentor, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {/* <Avatar>
                      <AvatarFallback>{mentor.avatar}</AvatarFallback>
                    </Avatar> */}
                    <div className="space-y-1 flex-1">
                      <p className="font-medium">{mentor.name}</p>
                      <p className="text-sm text-gray-500">{mentor.specialty}</p>
                      <div className="flex items-center text-sm">
                        <div className="flex items-center text-yellow-500 mr-2">
                          <Star className="h-3 w-3 fill-yellow-500" />
                          <span className="ml-1">{mentor.rating}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          <span>{mentor.sessions} sessions</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm">Book</Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Mentors
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Mentorship Calendar</CardTitle>
            <CardDescription>Your upcoming and available session slots</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 border rounded-md">
              <div className="text-center">
                <Calendar className="mx-auto h-10 w-10 text-gray-400" />
                <p className="mt-2 text-gray-500">Calendar view will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </UserLayout>
  )
}
