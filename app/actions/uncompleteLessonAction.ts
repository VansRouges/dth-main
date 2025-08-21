"use server";

import { revalidatePath } from "next/cache";
import { uncompleteLessonById } from "@/sanity/lib/lessons/uncompleteLessonById";

export async function uncompleteLessonAction(
  lessonId: string,
  clerkId: string,
  courseId?: string
) {
  try {
    await uncompleteLessonById({
      lessonId,
      clerkId,
      courseId,
    });

    // Revalidate the course pages to update sidebar and progress
    revalidatePath("/my-learning/[courseId]", "layout");
    revalidatePath("/my-learning/[courseId]/lessons/[lessonId]", "page");

    return { success: true };
  } catch (error) {
    console.error("Error uncompleting lesson:", error);
    return { success: false, error: "Failed to uncomplete lesson" };
  }
}