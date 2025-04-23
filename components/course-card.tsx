"use client"
import { useState } from "react"
import { Book, AlarmClock, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CourseModal } from "./course-modal"


interface CourseCardProps {
  title: string
  instructor: string
  price: string
  duration: string
}

export function CourseCard({ title, instructor, price, duration }: CourseCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
    <div 
      className="group min-w-[280px] flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden hover:shadow-md transition-shadow"
      onClick={() => setIsModalOpen(true)}
    >
      <div className="h-[120px] bg-gray-200 flex items-center justify-center">
        <Book className="h-12 w-12 text-gray-500" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-primary">Full course</span>

          <div className="flex items-center gap-1">
            <AlarmClock className="h-4 w-4 text-primary" />
            <span className="text-xs text-primary">{duration}</span>
          </div>
        </div>
        <h3 className="font-bold text-sm mb-2">{title}</h3>
        <div className="flex items-center text-gray-900 mb-2 space-x-1">
          <GraduationCap className="h-4 w-4" />
          <span className="text-xs">{instructor}</span>
        </div>
        <div className="relative h-8 cursor-pointer">
          <Button className="absolute inset-0 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Purchase ({price})
          </Button>
          <p className="absolute inset-0 font-bold text-sm group-hover:opacity-0 transition-opacity">
            {price}
          </p>
        </div>
      </div>
    </div>

    <CourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={{
          title,
          instructor,
          price,
          duration,
        }}
      />
    </>
  )
}