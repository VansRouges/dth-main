import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EllipsisVertical } from "lucide-react"
import Image from "next/image"

interface Course {
  id: number
  title: string
  price: string
  duration: string
  lessons: number
  thumbnail: string
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card key={course.id} className="overflow-hidden h-96 p-5 text-black">
      <div className="flex justify-between">
        <span>Course ID:</span>
        <EllipsisVertical className="w-6 h-6 cursor-pointer" />
      </div>
      <div className="aspect-video h-[45%]">
        <Image
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
            <span className="font-bold">{course.lessons}</span>
          </div>
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle className="line-clamp-1 text-black font-semibold text-xl">{course.title}</CardTitle>
        <CardDescription className="line-clamp-2 tracking-wide text-[#FF8800] text-lg font-bold">
          {course.price}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}