"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"
import { CourseCard } from "./course-dashboard/CourseCard"
import { LiveClassCard } from "./course-dashboard/LiveClassCard"
import { AddCourseDialog } from "./course-dashboard/ AddCourseDialog"
// import { ScheduleClassDialog } from "./course-dashboard/ScheduleClassDialog"
import { GetCoursesQueryResult, GetLiveClassesQueryResult } from "@/sanity.types";


interface TopPicksProps {
  courses: GetCoursesQueryResult;
  liveClasses: GetLiveClassesQueryResult;
}

export default function CourseDashboard({ courses, liveClasses }: TopPicksProps) {
  const [courseModalOpen, setCourseModalOpen] = useState(false)
  console.log("Live Classes:", liveClasses)
  // console.log("Courses:", courses)
  // const [liveClassModalOpen, setLiveClassModalOpen] = useState(false")

  

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.length > 0 ? (
              courses.map((course) => (
                <div key={course._id} className="flex-shrink-0 w-[300px]">
                  <CourseCard course={course} />
                </div>
              ))
            ) : (
              <div className="text-gray-500">No courses available.</div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="live-classes" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Live Classes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveClasses.map((liveClass) => (
              <LiveClassCard key={liveClass._id} liveClass={liveClass} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <AddCourseDialog open={courseModalOpen} onOpenChange={setCourseModalOpen} />
      {/* <ScheduleClassDialog open={liveClassModalOpen} onOpenChange={setLiveClassModalOpen} courses={courses} /> */}
    </div>
  )
}
