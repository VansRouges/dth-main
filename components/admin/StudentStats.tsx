import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, CheckCircle, Clock, TrendingUp } from "lucide-react";

interface StudentStatsProps {
  student: {
    totalEnrollments: number;
    totalAmountPaid: number;
    totalCompletions: number;
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

export function StudentStats({ student }: StudentStatsProps) {
  const courseProgress = student.courseProgress || [];
  
  // Calculate overall statistics
  const totalLessons = courseProgress.reduce((sum, course) => sum + course.totalLessons, 0);
  const totalCompletedLessons = courseProgress.reduce((sum, course) => sum + course.completedLessons, 0);
  const averageProgress = courseProgress.length > 0 
    ? Math.round(courseProgress.reduce((sum, course) => sum + course.progress, 0) / courseProgress.length)
    : 0;
  const completedCourses = courseProgress.filter(course => course.progress === 100).length;

  // Custom Naira Symbol Component - Using Unicode symbol
  const NairaSymbol = () => (
    <div className="h-8 w-8 opacity-60 flex items-center justify-center text-2xl font-bold">
      ₦
    </div>
  );

  const stats = [
    {
      title: "Total Enrollments",
      value: student.totalEnrollments,
      icon: BookOpen,
      color: "blue",
      description: "Courses enrolled"
    },
    {
      title: "Completed Courses",
      value: completedCourses,
      icon: CheckCircle,
      color: "green",
      description: "100% completion"
    },
    {
      title: "Average Progress",
      value: `${averageProgress}%`,
      icon: TrendingUp,
      color: "purple",
      description: "Across all courses"
    },
    {
      title: "Total Investment",
      value: `₦${student.totalAmountPaid?.toLocaleString() || '0'}`,
      icon: NairaSymbol,
      color: "orange",
      description: "Amount paid"
    },
    {
      title: "Lessons Completed",
      value: totalCompletedLessons,
      icon: Clock,
      color: "indigo",
      description: `Out of ${totalLessons} total`
    }
  ];

  const colorClasses = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    green: "bg-green-50 text-green-700 border-green-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    orange: "bg-orange-50 text-orange-700 border-orange-200",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200"
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className={`border ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium opacity-80">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs opacity-70">{stat.description}</p>
                </div>
                {/* Handle custom NairaSymbol component vs Lucide icons */}
                {stat.title === "Total Investment" ? (
                  <NairaSymbol />
                ) : (
                  <Icon className="h-8 w-8 opacity-60" />
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
