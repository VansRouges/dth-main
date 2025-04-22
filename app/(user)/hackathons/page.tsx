import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Globe, MapPin, Trophy, Users } from "lucide-react"
import UserLayout from "@/components/user-layout";


export default function HackathonsPage() {
  return (
    <UserLayout>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Hackathons</h1>
          <p className="text-gray-500">Participate in coding competitions and challenges</p>
        </div>
        <Button>
          <Trophy className="mr-2 h-4 w-4" />
          Join Hackathon
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Global AI Hackathon",
                organizer: "TechCorp Inc.",
                date: "June 15-17, 2023",
                location: "Virtual",
                participants: 1200,
                prizes: "$10,000 in prizes",
                description:
                  "Build innovative AI solutions to solve real-world problems in this 48-hour global hackathon.",
              },
              {
                title: "FinTech Innovation Challenge",
                organizer: "FinTech Alliance",
                date: "July 8-10, 2023",
                location: "New York, NY + Virtual",
                participants: 800,
                prizes: "$15,000 in prizes",
                description: "Create the next generation of financial technology solutions in this hybrid hackathon.",
              },
              {
                title: "Sustainable Tech Hackathon",
                organizer: "GreenTech Foundation",
                date: "July 22-24, 2023",
                location: "Virtual",
                participants: 600,
                prizes: "$8,000 in prizes",
                description:
                  "Develop technology solutions for environmental sustainability and climate change challenges.",
              },
              {
                title: "Health Innovation Hackathon",
                organizer: "HealthTech Consortium",
                date: "August 5-7, 2023",
                location: "Boston, MA + Virtual",
                participants: 500,
                prizes: "$12,000 in prizes",
                description: "Build innovative solutions to improve healthcare delivery and patient outcomes.",
              },
              {
                title: "Web3 Blockchain Challenge",
                organizer: "Blockchain Alliance",
                date: "August 19-21, 2023",
                location: "Virtual",
                participants: 900,
                prizes: "$20,000 in prizes",
                description: "Create decentralized applications and smart contracts on blockchain platforms.",
              },
              {
                title: "EdTech Innovation Sprint",
                organizer: "Education Technology Association",
                date: "September 9-11, 2023",
                location: "San Francisco, CA + Virtual",
                participants: 400,
                prizes: "$7,500 in prizes",
                description: "Develop technology solutions to improve education and learning outcomes.",
              },
            ].map((hackathon, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{hackathon.title}</CardTitle>
                  <CardDescription>{hackathon.organizer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500">{hackathon.description}</p>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>{hackathon.date}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="mr-1 h-4 w-4" />
                        <span>{hackathon.location}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Users className="mr-1 h-4 w-4" />
                        <span>{hackathon.participants} participants</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Trophy className="mr-1 h-4 w-4" />
                        <span>{hackathon.prizes}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Details</Button>
                  <Button>Register</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ongoing" className="h-[400px] flex items-center justify-center border rounded-md">
          <p className="text-gray-500">Ongoing hackathons will appear here</p>
        </TabsContent>

        <TabsContent value="past" className="h-[400px] flex items-center justify-center border rounded-md">
          <p className="text-gray-500">Past hackathons will appear here</p>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Global Hackathon Map</CardTitle>
          <CardDescription>Explore hackathons happening around the world</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 border rounded-md">
            <div className="text-center">
              <Globe className="mx-auto h-10 w-10 text-gray-400" />
              <p className="mt-2 text-gray-500">Interactive map will appear here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </UserLayout>
  )
}
