import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ExternalLink, GraduationCap, PlayCircle } from "lucide-react";
import Link from "next/link";

interface StudentCoursesListProps {
  student: {
    firstName: string;
    lastName: string;
    courseProgress?: Array<{
      courseId: string;
      courseTitle: string;
      progress: number;
      totalLessons: number;
      completedLessons: number;
      instructor: string;
      amountPaid: number;
      enrolledAt: string;
    }>;
  };
}

export function StudentCoursesList({ student }: StudentCoursesListProps) {
  const courseProgress = student.courseProgress || [];

  if (courseProgress.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5" />
            <span>Enrolled Courses</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <BookOpen className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">No course enrollments found</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-black">
          <BookOpen className="h-5 w-5" />
          <span>Enrolled Courses ({courseProgress.length})</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {courseProgress.map((course) => {
          const enrolledDate = new Date(course.enrolledAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          });

          const getStatusBadge = (progress: number) => {
            if (progress === 100) return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
            if (progress > 0) return <Badge className="bg-orange-100 text-orange-800 border-orange-200">In Progress</Badge>;
            return <Badge variant="outline" className="bg-gray-100 text-gray-800">Not Started</Badge>;
          };

          return (
            <div key={course.courseId} className="border rounded-lg p-4 space-y-4">
              {/* Course Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold text-black text-lg">{course.courseTitle}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <GraduationCap className="h-4 w-4" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Enrolled {enrolledDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>₦{course.amountPaid.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(course.progress)}
                  <Link href={`/my-learning/${course.courseId}`}>
                    <Button variant="outline" size="sm" className="cursor-pointer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Course
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Progress Section */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">
                    {course.completedLessons} of {course.totalLessons} lessons completed
                  </span>
                </div>
                <Progress 
                  value={course.progress} 
                  className="h-3"
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-blue-600">{course.progress}% Complete</span>
                  {course.progress > 0 && (
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <PlayCircle className="h-4 w-4" />
                      <span>{course.totalLessons - course.completedLessons} lessons remaining</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Performance Indicator */}
              {course.progress > 0 && (
                <div className="pt-2 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Performance:</span>
                    <div className="flex items-center space-x-2">
                      {course.progress >= 75 && (
                        <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                      )}
                      {course.progress >= 50 && course.progress < 75 && (
                        <Badge className="bg-yellow-100 text-yellow-800">Good</Badge>
                      )}
                      {course.progress > 0 && course.progress < 50 && (
                        <Badge className="bg-red-100 text-red-800">Needs Attention</Badge>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
