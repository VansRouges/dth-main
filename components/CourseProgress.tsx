"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  progress: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
  showPercentage?: boolean;
  label?: string;
  className?: string;
}

export function CourseProgress({
  progress,
  variant = "default",
  size = "default",
  showPercentage = true,
  label,
  className,
}: CourseProgressProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between gap-2 text-sm">
        {label && <span className="text-gray-900 font-medium">{label}</span>}
        {showPercentage && (
          <span className="text-gray-900 font-bold">{progress}%</span>
        )}
      </div>
      <Progress
        value={progress}
        className={cn(
          "h-2 transition-all",
          size === "sm" && "h-1",
          variant === "success" && "[&>div]:bg-orange-500"
        )}
      />
    </div>
  );
}