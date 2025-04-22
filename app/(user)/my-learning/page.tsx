import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, Award } from "lucide-react"

export default function LearningPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Learning</h1>
        <p className="text-gray-500">Track your progress and continue your courses</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Full Stack Web Development",
            description: "Learn modern web development with React, Node.js, and MongoDB",
            progress: 75,
            timeLeft: "5 hours left",
            level: "Intermediate",
          },
          {
            title: "Data Science Fundamentals",
            description: "Master the basics of data analysis, visualization, and machine learning",
            progress: 60,
            timeLeft: "8 hours left",
            level: "Beginner",
          },
          {
            title: "UI/UX Design Principles",
            description: "Create beautiful and functional user interfaces with modern design principles",
            progress: 40,
            timeLeft: "12 hours left",
            level: "Intermediate",
          },
          {
            title: "Mobile App Development",
            description: "Build cross-platform mobile applications with React Native",
            progress: 25,
            timeLeft: "15 hours left",
            level: "Advanced",
          },
          {
            title: "Cloud Computing Essentials",
            description: "Learn AWS, Azure, and Google Cloud fundamentals",
            progress: 10,
            timeLeft: "20 hours left",
            level: "Intermediate",
          },
          {
            title: "Blockchain Development",
            description: "Build decentralized applications with Ethereum and Solidity",
            progress: 5,
            timeLeft: "25 hours left",
            level: "Advanced",
          },
        ].map((course, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-2 bg-blue-600" style={{ width: `${course.progress}%` }} />
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{course.timeLeft}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Award className="mr-1 h-4 w-4" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <button className="w-full rounded-md bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Continue Learning
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
