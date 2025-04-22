import { Book } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CourseCardProps {
  title: string
  instructor: string
  price: string
  duration: string
  showPurchaseButton?: boolean
}

export function CourseCard({ title, instructor, price, duration, showPurchaseButton = false }: CourseCardProps) {
  return (
    <div className="min-w-[280px] flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
      <div className="h-[120px] bg-gray-200 flex items-center justify-center">
        <Book className="h-12 w-12 text-gray-500" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium">Full course</span>
          <span className="text-xs text-orange-500">{duration}</span>
        </div>
        <h3 className="font-medium text-sm mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          <span className="text-xs text-gray-600">{instructor}</span>
        </div>
        {showPurchaseButton ? (
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-2">Purchase ({price})</Button>
        ) : (
          <p className="font-medium text-sm">{price}</p>
        )}
      </div>
    </div>
  )
}
