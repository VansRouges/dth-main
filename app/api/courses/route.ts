// app/api/courses/route.ts
import { GetCoursesQueryResult } from "@/sanity.types";
import { getCourses } from "@/sanity/lib/courses/getCourses";
import { NextResponse } from "next/server";

export async function GET() {
  const allCourses: GetCoursesQueryResult = await getCourses();
  return NextResponse.json(allCourses);
}