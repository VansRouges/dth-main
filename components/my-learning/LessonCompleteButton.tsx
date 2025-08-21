"use client";

import { CheckCircle, Loader2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { completeLessonAction } from "@/app/actions/completeLessonAction";
import { uncompleteLessonAction } from "@/app/actions/uncompleteLessonAction";
import { getLessonCompletionStatusAction } from "@/app/actions/getLessonCompletionStatus";
import { useLessonCompletion } from "@/hooks/use-lesson-completion";
import { cn } from "@/lib/utils";

interface LessonCompleteButtonProps {
  lessonId: string;
  clerkId: string;
  courseId: string;
}

export function LessonCompleteButton({
  lessonId,
  clerkId,
  courseId,
}: LessonCompleteButtonProps) {
  console.log("lesson Id:", lessonId);
  console.log("clerk Id:", clerkId);
  console.log("course Id:", courseId);

  const [isPending, setIsPending] = useState(false);
  const [isCompleted, setIsCompleted] = useState<boolean | null>(null);
  const [isPendingTransition, startTransition] = useTransition();
  const router = useRouter();
  const { triggerRefresh } = useLessonCompletion();

  useEffect(() => {
    startTransition(async () => {
      try {
        const status = await getLessonCompletionStatusAction(lessonId, clerkId);
        setIsCompleted(status);
      } catch (error) {
        console.error("Error checking lesson completion status:", error);
        setIsCompleted(false);
      }
    });
  }, [lessonId, clerkId]);

  console.log("Completion status:", isCompleted);

  const handleToggle = async () => {
    try {
      setIsPending(true);
      let result;
      
      if (isCompleted) {
        result = await uncompleteLessonAction(lessonId, clerkId, courseId);
      } else {
        result = await completeLessonAction(lessonId, clerkId, courseId);
      }

      // Check if the action was successful
      if (result?.success !== false) {
        // Update local state immediately for instant feedback
        setIsCompleted(!isCompleted);
        
        // Trigger sidebar refresh
        triggerRefresh();
        
        // Refresh the page to update sidebar and course progress
        router.refresh();
        
        // Also revalidate the completion status
        startTransition(async () => {
          const newStatus = await getLessonCompletionStatusAction(
            lessonId,
            clerkId
          );
          setIsCompleted(newStatus);
        });
      } else {
        console.error("Action failed:", result?.error);
      }
    } catch (error) {
      console.error("Error toggling lesson completion:", error);
    } finally {
      setIsPending(false);
    }
  };

  const isLoading = isCompleted === null || isPendingTransition;

  return (
    <Button
      onClick={handleToggle}
      disabled={isPending || isLoading}
      size="lg"
      variant="default"
      className={cn(
        "min-w-[200px] cursor-pointer transition-all duration-200 ease-in-out",
        isCompleted
          ? "bg-orange-500 hover:bg-orange-700 text-white"
          : "bg-green-600 hover:bg-green-700 text-white"
      )}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Updating...
        </>
      ) : isPending ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          {isCompleted ? "Uncompleting..." : "Completing..."}
        </>
      ) : isCompleted ? (
        <>
          <XCircle className="h-4 w-4 mr-2" />
          Mark as Not Complete
        </>
      ) : (
        <>
          <CheckCircle className="h-4 w-4 mr-2" />
          Mark as Complete
        </>
      )}
    </Button>
  );
}