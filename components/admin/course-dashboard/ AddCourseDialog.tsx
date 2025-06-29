import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Upload, Copy, Check } from "lucide-react"
import { uploadCourseVideo } from "@/supabase/supabase"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

interface AddCourseDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddCourseDialog({ open, onOpenChange }: AddCourseDialogProps) {
  const [dragActive, setDragActive] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [videoUrl, setVideoUrl] = useState("")
  const [copied, setCopied] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await handleFileUpload(e.dataTransfer.files[0])
    }
  }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await handleFileUpload(e.target.files[0])
    }
  }

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith("video/")) {
      toast("Invalid file type", {
        description: "Please upload a video file",
      })
      return
    }

    setIsUploading(true)
    try {
      const { url, error } = await uploadCourseVideo(file)
      if (error) throw error
      if (url) {
        setVideoUrl(url)
        toast("Upload successful", {
          description: "Video has been uploaded to Supabase storage",
        })
      }
    } catch (error) {
      console.error("Upload error:", error)
      toast("Upload failed", {
        description: "There was an error uploading your video",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(videoUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Upload Course Videos</DialogTitle>
          <DialogDescription className="text-black">
            Upload your course videos to Supabase storage
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-8">
          {/* Left side - Instructions */}
          <div className="space-y-4">
            <h3 className="font-medium">How to upload videos</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Drag and drop a video file or click to browse</li>
              <li>Only one video can be uploaded at a time</li>
              <li>Accepted formats: MP4, WebM, MOV</li>
              <li>Maximum file size: 100MB</li>
            </ol>

            <h3 className="font-medium pt-4">After uploading</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>The video URL will appear on the right</li>
              <li>Copy this URL to use in your course content</li>
              <li>This URL is public and can be embedded</li>
            </ul>

            <div className="pt-4">
              <Label htmlFor="course-title">Course Title</Label>
              <Input id="course-title" placeholder="Enter course title" className="mt-1" />
            </div>
          </div>

          {/* Right side - Upload area */}
          <div className="space-y-4">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive ? "border-primary bg-primary/5" : "border-gray-300 hover:border-primary/50"
              } ${isUploading ? "opacity-50 cursor-not-allowed" : ""}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => !isUploading && fileInputRef.current?.click()}
            >
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <div className="space-y-2">
                <p className="text-lg font-medium">
                  {isUploading ? "Uploading..." : "Drop your video here"}
                </p>
                <p className="text-sm text-black/20">
                  {isUploading ? "Please wait..." : "or click to browse files"}
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/webm,video/quicktime"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={isUploading}
              />
            </div>

            {videoUrl && (
              <div className="space-y-2">
                <Label>Video URL</Label>
                <div className="flex items-center gap-2">
                  <Input
                    value={videoUrl}
                    readOnly
                    className="flex-1"
                  />
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={copyToClipboard}
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Copy this URL to use in your course
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline" onClick={() => {
            setVideoUrl("")
            onOpenChange(false)
          }}>
            Cancel
          </Button>
          <Button disabled={!videoUrl} onClick={() => {
            // Handle course creation with the video URL
            onOpenChange(false)
          }}>
            Create Course
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}