"use server";

import { revalidatePath } from "next/cache";
import { completeLessonById } from "@/sanity/lib/lessons/completeLessonById";

export async function completeLessonAction(lessonId: string, clerkId: string, courseId?: string) {
  try {
    await completeLessonById({
      lessonId,
      clerkId,
      courseId,
    });

    // Revalidate the course pages to update sidebar and progress
    revalidatePath("/my-learning/[courseId]", "layout");
    revalidatePath("/my-learning/[courseId]/lessons/[lessonId]", "page");

    return { success: true };
  } catch (error) {
    console.error("Error completing lesson:", error);
    return { success: false, error: "Failed to complete lesson" };
  }
}