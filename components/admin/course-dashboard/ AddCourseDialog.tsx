import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Upload, Copy, Check, ExternalLink } from "lucide-react"
// import { uploadCourseVideo } from "@/supabase/supabase"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
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
  const [uploadProgress, setUploadProgress] = useState(0)
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
    toast.error("Only video files are allowed (MP4, WebM, MOV)");
    return;
  }

  setIsUploading(true);
  setUploadProgress(0);

  const formData = new FormData();
  formData.append("file", file);

  const xhr = new XMLHttpRequest();

  // Progress tracking
  xhr.upload.onprogress = (event) => {
    if (event.lengthComputable) {
      const percent = Math.round((event.loaded / event.total) * 100);
      setUploadProgress(percent);
    }
  };

  // Handle completion
  xhr.onload = () => {
    if (xhr.status === 200) {
      const { url } = JSON.parse(xhr.response);
      setVideoUrl(url);
      toast.success("Video uploaded successfully!");
    } else {
      toast.error("Upload failed. Please try again.");
    }
    setIsUploading(false);
  };

  // Handle errors
  xhr.onerror = () => {
    toast.error("Network error during upload.");
    setIsUploading(false);
  };

  // Start upload
  xhr.open("POST", "/api/upload-video", true);
  xhr.send(formData);
};

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
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

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Create Your Course Lesson</h4>
              <p className="text-sm text-blue-800 mb-3">
                Once you have your video URL, go to Sanity to create your course lesson and add the video link.
              </p>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="text-blue-700 border-blue-300 hover:bg-blue-100 bg-transparent"
              >
                <a href="https://dth.sanity.io" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open Sanity Studio
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Upload area */}
          <div className="space-y-4">
            <div className="relative">
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive ? "border-primary bg-primary/5" : "border-gray-300 hover:border-primary/50"
                } ${isUploading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={(e) => {
                  e.stopPropagation()
                  if (!isUploading) fileInputRef.current?.click()
                }}
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
              </div>
              <div className="mt-4">
                {isUploading && (
                  <div className="space-y-2">
                    <Progress value={uploadProgress} className="h-2" />
                    <p className="text-sm text-center text-gray-500">
                      Uploading: {uploadProgress}%
                    </p>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/webm,video/quicktime"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
                disabled={isUploading}
              />
            </div>

            {videoUrl && (
              <div className="space-y-2" onClick={(e) => e.stopPropagation()}>
                <Label>Video URL</Label>
                <div className="flex items-center gap-">
                  <Input
                    value={videoUrl}
                    readOnly
                    className="flex-1"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <Button
                    size="icon"
                    onClick={copyToClipboard}
                    title="Copy to clipboard"
                    className="text-white bg-blue-400 hover:bg-blue-500"
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
          <Button className="bg-blue-400 hover:bg-[#104BC1] text-white" onClick={() => {
            setVideoUrl("")
            onOpenChange(false)
          }}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}