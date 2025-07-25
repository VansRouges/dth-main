import { useState, useMemo } from "react";
import { Search, Filter, Calendar, Users, BookOpen, Grid, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LiveClassCard } from "./LiveClassCard";
import { GetLiveClassesQueryResult } from "@/sanity.types";

interface AdminLiveClassesProps {
  liveClasses: GetLiveClassesQueryResult;
}

export default function AdminLiveClasses({ liveClasses }: AdminLiveClassesProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCourse, setFilterCourse] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter and search logic
  const filteredClasses = useMemo(() => {
    return liveClasses.filter(liveClass => {
      const matchesSearch =
        liveClass?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        liveClass?.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        liveClass?.facilitator?.name?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCourse = filterCourse === "all" || liveClass?.course?.title === filterCourse;

      return matchesSearch && matchesCourse;
    });
  }, [searchTerm, filterCourse, liveClasses]);

  const courses = useMemo(() => {
    const uniqueCourses = [...new Set(liveClasses.map((c) => c?.course?.title))];
    return uniqueCourses;
  }, [liveClasses]);

  // Determine if the class is upcoming (green) or past (orange)

  const totalClasses = liveClasses.length;
  const todayClasses = liveClasses.filter((c) => {
    const today = new Date();
    const classDate = c.date ? new Date(c.date) : null;
    return today.toDateString() === classDate?.toDateString();
  }).length;

  return (
    <div className="min-h-screen">

      {/* Stats Cards */}
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-border/40 rounded-lg p-6 shadow-card animate-fade-in hover:shadow-elevated transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-black">{totalClasses}</p>
                <p className="text-sm text-black">Total Classes</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-lg p-6 shadow-card animate-fade-in hover:shadow-elevated transition-shadow" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Calendar className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-black">{todayClasses}</p>
                <p className="text-sm text-black">Today&#39;s Classes</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-lg p-6 shadow-card animate-fade-in hover:shadow-elevated transition-shadow" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-black">{courses.length}</p>
                <p className="text-sm text-black">Active Courses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white border border-border/40 rounded-lg p-6 shadow-card mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black" />
              <Input
                placeholder="Search classes, facilitators, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Course Filter */}
            <Select value={filterCourse} onValueChange={setFilterCourse}>
              <SelectTrigger className="w-full lg:w-[200px]">
                <Filter className="h-4 w-4 mr-2 text-black" />
                <SelectValue placeholder="Filter by course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                    {courses.map((course, index) => (
                    <SelectItem key={index} value={course || "Unknown Course"}>
                        {course || "Unknown Course"}
                    </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-8 w-8 p-0"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-8 w-8 p-0"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || filterCourse !== "all") && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/40">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {searchTerm && (
                <Badge variant="secondary" className="gap-1">
                  Search: {searchTerm}
                  <button onClick={() => setSearchTerm("")} className="ml-1 hover:text-destructive">×</button>
                </Badge>
              )}
              {filterCourse !== "all" && (
                <Badge variant="secondary" className="gap-1">
                  Course: {filterCourse}
                  <button onClick={() => setFilterCourse("all")} className="ml-1 hover:text-destructive">×</button>
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Classes Grid */}
        <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          {filteredClasses.length > 0 ? (
            <div className={viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
            }>
              {filteredClasses.map((liveClass, index) => (
                <LiveClassCard 
                  key={liveClass._id} 
                  liveClass={liveClass} 
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No classes found</h3>
              <p className="text-muted-foreground">
                {searchTerm || filterCourse !== "all"
                  ? "Try adjusting your search criteria"
                  : "No live classes have been scheduled yet"
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
