import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Code, FileText, Github, Users, Zap } from "lucide-react"
import UserLayout from "@/components/user-layout";

export default function ProjectsPage() {
  return (
    <UserLayout>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-gray-500">Manage and track your development projects</p>
        </div>
        <Button>
          <Zap className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce Platform",
                description: "A full-stack e-commerce platform with React, Node.js, and MongoDB",
                progress: 65,
                dueDate: "In 2 weeks",
                team: 3,
                tech: ["React", "Node.js", "MongoDB"],
              },
              {
                title: "Data Visualization Dashboard",
                description: "Interactive dashboard for visualizing complex datasets",
                progress: 40,
                dueDate: "In 4 weeks",
                team: 2,
                tech: ["D3.js", "React", "Python"],
              },
              {
                title: "Mobile Fitness App",
                description: "Cross-platform fitness tracking application with social features",
                progress: 25,
                dueDate: "In 6 weeks",
                team: 4,
                tech: ["React Native", "Firebase", "Redux"],
              },
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>Due {project.dueDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-1 h-4 w-4" />
                        <span>{project.team} members</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Details
                  </Button>
                  <Button size="sm">
                    <Code className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="h-[400px] flex items-center justify-center border rounded-md">
          <p className="text-gray-500">Completed projects will appear here</p>
        </TabsContent>

        <TabsContent value="archived" className="h-[400px] flex items-center justify-center border rounded-md">
          <p className="text-gray-500">Archived projects will appear here</p>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>GitHub Activity</CardTitle>
          <CardDescription>Your recent contributions and commits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 border rounded-md">
            <div className="text-center">
              <Github className="mx-auto h-10 w-10 text-gray-400" />
              <p className="mt-2 text-gray-500">GitHub activity graph will appear here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </UserLayout>
  )
}
