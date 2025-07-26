"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check, ExternalLink } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { UploadDropzone } from "@/lib/uploadthing";

interface AddCourseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddCourseDialog({ open, onOpenChange }: AddCourseDialogProps) {
  const [videoUrl, setVideoUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(videoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Upload Course Videos</DialogTitle>
          <DialogDescription className="text-black">
            Upload your course videos using UploadThing
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-8">
          {/* Left side - Instructions */}
          <div className="space-y-4">
            <h3 className="font-medium">How to upload videos</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Use the UploadThing widget on the right</li>
              <li>Only one video can be uploaded at a time</li>
              <li>Accepted formats: MP4, WebM, MOV</li>
              <li>Maximum file size: 100MB</li>
            </ol>

            <h3 className="font-medium pt-4">After uploading</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>The video URL will appear below the uploader</li>
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
                <a
                  href="https://dth.sanity.studio/studio/structure/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open Sanity Studio
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Upload area */}
          <div className="space-y-4">
            <UploadDropzone
              endpoint="videoUploader"
              onClientUploadComplete={(res) => {
                if (!res || !res[0].url) return;
                setVideoUrl(res[0].url);
                toast.success("Upload complete!");
              }}
              onUploadError={(error: Error) => {
                toast.error(error.message || "Upload failed");
              }}
              appearance={{
                container: "border-2 border-dashed border-gray-300 p-4 rounded-lg text-center",
                button: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded",
                label: "text-sm text-gray-600",
              }}
              config={{ mode: "auto" }}
            />

            {videoUrl && (
              <div className="space-y-2" onClick={(e) => e.stopPropagation()}>
                <Label>Video URL</Label>
                <div className="flex items-center gap-2">
                  <Input value={videoUrl} readOnly className="flex-1" />
                  <Button
                    size="icon"
                    onClick={copyToClipboard}
                    title="Copy to clipboard"
                    className="text-white bg-blue-400 hover:bg-blue-500"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Copy this URL to use in your course</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <Button
            className="bg-blue-400 hover:bg-[#104BC1] text-white"
            onClick={() => {
              setVideoUrl("");
              onOpenChange(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
