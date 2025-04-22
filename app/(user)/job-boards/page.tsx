import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Building, Clock, DollarSign, MapPin, Search } from "lucide-react"
import UserLayout from "@/components/user-layout";

export default function JobsPage() {
  return (
    <UserLayout>
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Job Boards</h1>
        <p className="text-gray-500">Find your next opportunity in tech</p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input placeholder="Search jobs by title, company, or keywords" className="pl-9" />
        </div>
        <Button variant="outline">
          <MapPin className="mr-2 h-4 w-4" />
          Location
        </Button>
        <Button variant="outline">
          <Briefcase className="mr-2 h-4 w-4" />
          Job Type
        </Button>
        <Button>
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>

      <Tabs defaultValue="recommended" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
          <TabsTrigger value="applied">Applied</TabsTrigger>
        </TabsList>

        <TabsContent value="recommended" className="space-y-4">
          {[
            {
              title: "Senior Frontend Developer",
              company: "TechCorp Inc.",
              location: "San Francisco, CA (Remote)",
              salary: "$120,000 - $150,000",
              type: "Full-time",
              posted: "Posted 2 days ago",
              description:
                "We're looking for an experienced Frontend Developer to join our team and help build our next-generation web applications.",
            },
            {
              title: "Data Scientist",
              company: "DataViz Solutions",
              location: "New York, NY (Hybrid)",
              salary: "$110,000 - $140,000",
              type: "Full-time",
              posted: "Posted 3 days ago",
              description:
                "Join our data science team to build machine learning models and analyze complex datasets for our enterprise clients.",
            },
            {
              title: "DevOps Engineer",
              company: "CloudScale",
              location: "Remote",
              salary: "$130,000 - $160,000",
              type: "Full-time",
              posted: "Posted 1 week ago",
              description:
                "Help us build and maintain our cloud infrastructure and CI/CD pipelines for our growing platform.",
            },
            {
              title: "Mobile App Developer",
              company: "AppWorks",
              location: "Austin, TX (On-site)",
              salary: "$100,000 - $130,000",
              type: "Full-time",
              posted: "Posted 5 days ago",
              description:
                "Develop cross-platform mobile applications using React Native for our suite of productivity tools.",
            },
          ].map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Building className="mr-1 h-3 w-3" />
                      {job.company}
                    </CardDescription>
                  </div>
                  <span className="text-xs text-gray-500">{job.posted}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">{job.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <DollarSign className="mr-1 h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Briefcase className="mr-1 h-4 w-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{job.posted}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Save</Button>
                <Button>Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="recent" className="h-[400px] flex items-center justify-center border rounded-md">
          <p className="text-gray-500">Recent job listings will appear here</p>
        </TabsContent>

        <TabsContent value="saved" className="h-[400px] flex items-center justify-center border rounded-md">
          <p className="text-gray-500">Saved jobs will appear here</p>
        </TabsContent>

        <TabsContent value="applied" className="h-[400px] flex items-center justify-center border rounded-md">
          <p className="text-gray-500">Applied jobs will appear here</p>
        </TabsContent>
      </Tabs>
    </div>
    </UserLayout>
  )
}
