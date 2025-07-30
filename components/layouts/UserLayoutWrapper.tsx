"use client";

import { usePathname } from "next/navigation"; // Client-side hook
import { useMemo } from "react"; // To memoize derived values
import GenericUserLayout, {
  RouteType,
} from "@/components/layouts/GenericUserLayout";
import { GetCoursesQueryResult } from "@/sanity.types";
import React, { ReactNode } from "react";

interface UserLayoutWrapperProps {
  children: ReactNode;
  signedInWrapper: ReactNode;
  courses: GetCoursesQueryResult;
}

export default function UserLayoutWrapper({
  children,
  signedInWrapper,
  courses,
}: UserLayoutWrapperProps) {
  const pathname = usePathname();

  const { searchType, mainContent, data } = useMemo(() => {
    let currentSearchType: RouteType = "other-routes";
    let currentMainContent: RouteType | undefined = "other-routes";
    let coursesData;

    if (pathname.startsWith("/dashboard")) {
      coursesData = courses;
      currentSearchType = "dashboard-route";
      currentMainContent = "dashboard-route";
    } else if (pathname.startsWith("/learning-management")) {
      currentSearchType = "management-route";
      currentMainContent = "management-route";
    } else if (
      pathname.startsWith("/courses/") ||
      pathname.startsWith("/mentor/")
    ) {
      currentSearchType = "other-routes";
      currentMainContent = undefined;
    }

    return {
      searchType: currentSearchType,
      mainContent: currentMainContent,
      data: coursesData,
    };
  }, [pathname, courses]); // Re-calculate when pathname changes

  return (
    <GenericUserLayout
      searchType={searchType}
      mainContent={mainContent}
      data={data}
      signedInWrapper={signedInWrapper}
    >
      {children}
    </GenericUserLayout>
  );
}
