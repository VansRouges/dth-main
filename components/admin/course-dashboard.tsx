"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, Plus, Upload, User, Video, ExternalLink, EllipsisVertical } from "lucide-react"

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
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload logic here
      console.log("Files dropped:", e.dataTransfer.files)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Handle file upload logic here
      console.log("File selected:", e.target.files[0])
    }
  }

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
            <Dialog open={courseModalOpen} onOpenChange={setCourseModalOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Course
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Upload Course Videos</DialogTitle>
                  <DialogDescription className="text-black">Upload your course videos by clicking or dragging files here.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragActive ? "border-primary bg-primary/5" : "border-gray-300 hover:border-primary/50"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <div className="space-y-2">
                      <p className="text-lg font-medium">Drop your videos here</p>
                      <p className="text-sm text-black/20">or click to browse files</p>
                    </div>
                    <input
                      type="file"
                      multiple
                      accept="video/*"
                      onChange={handleFileSelect}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" className="text-white" onClick={() => setCourseModalOpen(true)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setCourseModalOpen(false)}>Upload</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden h-96 p-5 text-black">
                <div className="flex justify-between">
                  <span>Course ID:</span>
                  <EllipsisVertical className="w-6 h-6 cursor-pointer" />
                </div>
                <div className="aspect-video h-[45%]">
                  <img
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-black">
                    <div className="flex items-center">
                      <span>Number of Modules: </span>
                      <span className="font-bold">{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <span>Number of Lessons: </span>
                      <span className=" font-bold">{course.lessons}</span>
                    </div>
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle className="line-clamp-1 text-black font-semibold text-xl">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2 tracking-wide text-[#FF8800] text-lg font-bold">{course.price}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="live-classes" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Live Classes</h2>
            <Dialog open={liveClassModalOpen} onOpenChange={setLiveClassModalOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Schedule Class
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Schedule Live Class</DialogTitle>
                  <DialogDescription className="text-black">Create a new live class session for your students.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Meeting Title</Label>
                    <Input id="title" placeholder="Enter meeting title" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Input id="time" type="time" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="facilitator">Facilitator Name</Label>
                    <Input id="facilitator" placeholder="Enter facilitator name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Course</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.title}>
                            {course.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="meeting-link">Google Meeting Link</Label>
                    <Input id="meeting-link" placeholder="https://meet.google.com/..." type="url" />
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" className="text-white" onClick={() => setLiveClassModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setLiveClassModalOpen(false)}>Schedule Class</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveClasses.map((liveClass) => (
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
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
