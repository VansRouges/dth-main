"use client";
import { GetCoursesQueryResult } from "@/sanity.types";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState, useRef } from "react";

export function DashboardSearchBar({ data }: { data: GetCoursesQueryResult }) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter courses based on searchInput
  const searchedCourses =
    searchInput.length >= 3 && data
      ? data.filter(
          (course) =>
            course.title?.toLowerCase().includes(searchInput?.toLowerCase()) ||
            course.instructor?.name
              ?.toLowerCase()
              .includes(searchInput?.toLowerCase()) ||
            course.description
              ?.toLowerCase()
              .includes(searchInput?.toLowerCase())
        )
      : [];

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setSearchInput(newValue);
      setIsOpen(newValue.length >= 3);
    },
    []
  );

  const clearSearch = useCallback(() => {
    setSearchInput("");
    setIsOpen(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  }, []);

  const handleCourseSelect = useCallback(
    (courseSlug: string | null) => {
      if (!courseSlug) return;
      router.push(`/courses/${courseSlug}`);
      setIsOpen(false);
      setSearchInput("");
    },
    [router]
  );

  return (
    <div className="relative w-full max-w-md" ref={dropdownRef}>
      <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-full">
        <div className="flex flex-1 items-center space-x-2">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search courses, topics..."
            className="outline-none border-none text-sm w-full placeholder:text-gray-500"
            value={searchInput}
            onChange={handleChangeInput}
            onFocus={() => searchInput.length >= 3 && setIsOpen(true)}
          />
          {searchInput && (
            <button
              onClick={clearSearch}
              className="p-1 cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Clear search"
              type="button"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          )}
        </div>
        {/* <SlidersVertical className="h-5 w-5 text-gray-500 cursor-pointer" /> */}
      </div>

      {/* dropdown */}
      {isOpen && searchInput.length >= 3 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-[300px] overflow-y-auto">
          {searchedCourses.length > 0 ? (
            searchedCourses.map((course) => (
              <div
                key={course.title}
                onClick={() => handleCourseSelect(course?.slug)}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm border-b border-gray-100 last:border-b-0"
              >
                {course.title}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500">
              No courses found for &quot;{searchInput}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
