"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"
import { CourseCard } from "./course-dashboard/CourseCard"
import AdminLiveClasses from "./course-dashboard/AdminLiveClasses"
import { AddCourseDialog } from "./course-dashboard/AddCourseDialog"
import { GetCoursesQueryResult, GetLiveClassesQueryResult } from "@/sanity.types";

interface TopPicksProps {
  courses: GetCoursesQueryResult;
  liveClasses: GetLiveClassesQueryResult;
}

export default function CourseDashboard({ courses, liveClasses }: TopPicksProps) {
  const [courseModalOpen, setCourseModalOpen] = useState(false)

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

        <TabsContent value="live-classes">
          <AdminLiveClasses liveClasses={liveClasses} />
        </TabsContent>
      </Tabs>

      <AddCourseDialog open={courseModalOpen} onOpenChange={setCourseModalOpen} />
    </div>
  )
}