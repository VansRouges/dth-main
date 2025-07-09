"use client"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { Course } from "@/types/course"

interface CourseModalProps {
  isOpen: boolean
  onClose: () => void
  course: Course
}

export function CourseModal({ isOpen, onClose, course }: CourseModalProps) {
    const router = useRouter()

  const handlePurchase = () => {
    // Close the modal
    onClose()
    // Navigate to the course details page
    // In a real app, you would use the actual course ID
    router.push(`/courses/azure-data-engineering`)
  }
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-orange-500">Full course</span>
            <div className="flex items-center text-orange-500">
              <Clock className="h-4 w-4 mr-1" />
              {/* <span className="text-sm">{course.duration}</span> */}
            </div>
          </div>

          <h2 className="text-xl font-bold mb-2">{course.title}</h2>

          <div className="flex items-center mb-6">
            <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mr-2">
              <span className="text-xs">👤</span>
            </div>
            {/* <span className="text-sm">{course.instructor}</span> */}
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-3">What you&#39;ll learn</h3>
            <ul className="space-y-3 list-disc pl-5">
              <li className="text-sm">The course provides the entire toolbox you need to become a data scientist</li>
              <li className="text-sm">
                Fill up your resume with in demand data science skills: Statistical analysis, Python programming with
                NumPy, pandas, matplotlib, and Seaborn, Advanced statistical analysis, Tableau, Machine Learning with
                stats models and scikit-learn, Deep learning with TensorFlow
              </li>
              <li className="text-sm">Impress interviewers by showing an understanding of the data science field</li>
            </ul>
          </div>

          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
            onClick={handlePurchase}
        >
            Purchase ({course.price})
        </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
