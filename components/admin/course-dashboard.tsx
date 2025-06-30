"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"
import { CourseCard } from "./course-dashboard/CourseCard"
import { LiveClassCard } from "./course-dashboard/LiveClassCard"
import { AddCourseDialog } from "./course-dashboard/ AddCourseDialog"
import { ScheduleClassDialog } from "./course-dashboard/ScheduleClassDialog"

// Mock data
const courses = [
  {
    id: 1,
    title: "Introduction to React",
    price: "NGN 12,000.00",
    duration: "4",
    lessons: 12,
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    price: "NGN 12,000.00",
    duration: "6",
    lessons: 18,
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    price: "NGN 12,000.00",
    duration: "8",
    lessons: 24,
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
]

const liveClasses = [
  {
    id: 1,
    title: "React Hooks Deep Dive",
    date: "2024-01-15",
    time: "14:00",
    facilitator: "John Smith",
    course: "Introduction to React",
    meetingLink: "https://meet.google.com/abc-defg-hij",
    status: "upcoming",
  },
  {
    id: 2,
    title: "JavaScript ES6+ Features",
    date: "2024-01-10",
    time: "16:00",
    facilitator: "Sarah Johnson",
    course: "Advanced JavaScript",
    meetingLink: "https://meet.google.com/xyz-uvwx-yzab",
    status: "past",
  },
  {
    id: 3,
    title: "Building REST APIs",
    date: "2024-01-20",
    time: "10:00",
    facilitator: "Mike Davis",
    course: "Node.js Backend Development",
    meetingLink: "https://meet.google.com/def-ghij-klmn",
    status: "upcoming",
  },
]

export default function CourseDashboard() {
  const [courseModalOpen, setCourseModalOpen] = useState(false)
  const [liveClassModalOpen, setLiveClassModalOpen] = useState(false)

  

  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="courses" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="live-classes">Live Classes</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Courses</h2>
            <Button onClick={() => setCourseModalOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Course
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="live-classes" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Live Classes</h2>
            {/* <Button onClick={() => setLiveClassModalOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Schedule Class
            </Button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveClasses.map((liveClass) => (
              <LiveClassCard key={liveClass.id} liveClass={liveClass} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <AddCourseDialog open={courseModalOpen} onOpenChange={setCourseModalOpen} />
      <ScheduleClassDialog open={liveClassModalOpen} onOpenChange={setLiveClassModalOpen} courses={courses} />
    </div>
  )
}
