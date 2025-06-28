import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ScheduleClassDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  courses: Array<{ id: number; title: string }>
}

export function ScheduleClassDialog({ open, onOpenChange, courses }: ScheduleClassDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Schedule Live Class</DialogTitle>
          <DialogDescription className="text-black">
            Create a new live class session for your students.
          </DialogDescription>
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
            <Button variant="outline" className="text-white" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={() => onOpenChange(false)}>Schedule Class</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}