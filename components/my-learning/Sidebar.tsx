"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area"; 
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Library,
  ChevronRight,
  ChevronDown,
  PlayCircle,
  X,
  Check,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  GetCourseByIdQueryResult,
  GetCompletionsQueryResult,
  Module,
} from "@/sanity.types";
import { useSidebar } from "@/hooks/use-sidebar";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CourseProgress } from "@/components/CourseProgress";
import { calculateCourseProgress } from "@/lib/courseProgress";

interface SidebarProps {
  course: GetCourseByIdQueryResult;
  completedLessons?: GetCompletionsQueryResult["completedLessons"];
}

export function Sidebar({ course, completedLessons = [] }: SidebarProps) {
  const pathname = usePathname();
  const { isOpen, toggle, close } = useSidebar();
  const [isMounted, setIsMounted] = useState(false);
  const [openModules, setOpenModules] = useState<string[]>([]);

  useEffect(() => {
    if (pathname && course?.modules) {
      const currentModuleId = course.modules.find((module) =>
        module.lessons?.some(
          (lesson) =>
            pathname ===
            `/my-learning/${course._id}/lessons/${lesson._id}`
        )
      )?._id;

      if (currentModuleId && !openModules.includes(currentModuleId)) {
        setOpenModules((prev) => [...prev, currentModuleId]);
      }
    }
  }, [pathname, course, openModules]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!course || !isMounted) {
    return null;
  }

  const progress = calculateCourseProgress(
    course.modules as unknown as Module[],
    completedLessons
  );

  const SidebarContent = () => (
    <div className="h-full flex flex-col bg-white">
      <div className="p-4 lg:p-6 border-b flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <Link
            href="/my-learning"
            className="flex items-center gap-x-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <div className="flex items-center gap-x-2">
              <Library className="h-4 w-4" />
              <span>My Learning</span>
            </div>
          </Link>
          <div className="space-x-2">
            <Button
              onClick={close}
              variant="ghost"
              className="lg:hidden -mr-2 text-gray-700 hover:text-gray-900"
              size="icon"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="font-semibold text-2xl text-gray-900">{course.title}</h1>
          <CourseProgress
            progress={progress}
            variant="success"
            label="Course Progress"
          />
        </div>
      </div>
      <ScrollArea className="flex-1 h-0">
        <div className="p-2 lg:p-4 pb-8">
          <Accordion
            type="multiple"
            className="w-full space-y-4"
            value={openModules}
            onValueChange={setOpenModules}
          >
            {course.modules?.map((module, moduleIndex) => (
              <AccordionItem
                key={module._id}
                value={module._id}
                className={cn(
                  "border-none",
                  moduleIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                )}
              >
                <AccordionTrigger className="px-2 py-2 hover:no-underline transition-colors text-gray-900">
                  <div className="flex items-center gap-x-2 lg:gap-x-4 w-full">
                    <span className="text-sm font-medium text-gray-600 min-w-[28px]">
                      {String(moduleIndex + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-y-1 text-left flex-1 min-w-0">
                      <p className="text-sm font-medium truncate text-gray-900">
                        {module.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {module.lessons?.length || 0} lessons
                      </p>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200",
                        openModules.includes(module._id) && "rotate-180"
                      )}
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2">
                  <div className="flex flex-col space-y-1">
                    {module.lessons?.map((lesson, lessonIndex) => {
                      const isActive =
                        pathname ===
                        `/my-learning/${course._id}/lessons/${lesson._id}`;
                      const isCompleted = completedLessons.some(
                        (completion) => completion.lesson?._id === lesson._id
                      );

                      return (
                        <Link
                          key={lesson._id}
                          prefetch={false}
                          href={`/my-learning/${course._id}/lessons/${lesson._id}`}
                          onClick={close}
                          className={cn(
                            "flex items-center pl-8 lg:pl-10 pr-2 lg:pr-4 py-2 gap-x-2 lg:gap-x-4 group hover:bg-gray-100 transition-colors relative",
                            isActive && "bg-gray-100",
                            isCompleted && "text-gray-500"
                          )}
                        >
                          <span className="text-xs font-medium text-gray-500 min-w-[28px]">
                            {String(lessonIndex + 1).padStart(2, "0")}
                          </span>
                          {isCompleted ? (
                            <Check className="h-4 w-4 shrink-0 text-green-500" />
                          ) : (
                            <PlayCircle
                              className={cn(
                                "h-4 w-4 shrink-0",
                                isActive
                                  ? "text-blue-600"
                                  : "text-gray-500 group-hover:text-blue-500"
                              )}
                            />
                          )}
                          <span
                            className={cn(
                              "text-sm line-clamp-2 min-w-0 text-gray-800 flex-1 truncate",
                              isCompleted &&
                                "text-gray-500 line-through decoration-green-500/50"
                            )}
                          >
                            {lesson.title}
                          </span>
                          {isCompleted && (
                            <Check className="h-4 w-4 shrink-0 text-green-500 ml-2" />
                          )}
                          {isActive && (
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-8 bg-blue-600" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );

  return (
    <>
      {/* Thin Mobile Sidebar */}
      <aside className="fixed inset-y-0 right-0 z-50 flex flex-col items-center w-[60px] border-l bg-white lg:hidden py-4 gap-y-4">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/my-learning" prefetch={false}>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-700 hover:text-gray-900">
                  <Library className="h-5 w-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>My Learning</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={toggle}
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-gray-700 hover:text-gray-900"
              >
                <ChevronRight
                  className={cn(
                    "h-5 w-5 transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Toggle Sidebar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </aside>

      {/* Main Sidebar - Desktop & Mobile */}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-40 bg-white border-l transition-all duration-300 ease-in-out overflow-hidden",
          "lg:z-50 lg:block lg:w-96 lg:border-l",
          isOpen
            ? "w-[calc(100%-60px)] translate-x-[-60px] lg:translate-x-0 lg:w-96"
            : "translate-x-[100%] lg:translate-x-0"
        )}
      >
        <div className="h-full overflow-hidden">
          <SidebarContent />
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={close}
        />
      )}
    </>
  );
}