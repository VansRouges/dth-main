import { GetCoursesQueryResult } from "@/sanity.types";
import { ReactNode } from "react";
import { SearchBar } from "../SearchBar";
import { DashboardSearchBar } from "../DashboardSearchBar";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import { OnboardingSidebar } from "../onboarding-sidebar";

export type RouteType = "other-routes" | "dashboard-route" | "management-route";

interface BaseLayoutProps {
  children: ReactNode;
  searchType?: RouteType;
  mainContent?: RouteType;
  data?: GetCoursesQueryResult;
  signedInWrapper: ReactNode;
}

export default function GenericUserLayout({
  children,
  searchType = "other-routes",
  mainContent = "other-routes",
  data,
  signedInWrapper,
}: BaseLayoutProps) {
  //   const onBoardingLayout = (
  //     <div className="hidden lg:block mx-auto bg-green- col-span-1">
  //       <OnboardingSidebar />
  //     </div>
  //   );

  const renderSearchBar = () => {
    switch (searchType) {
      case "other-routes":
        return <SearchBar />;
      case "dashboard-route":
        return <DashboardSearchBar data={data} />;
      case "management-route":
        return null;
      default:
        return null;
    }
  };

  const renderMainContentsLayout = () => {
    switch (mainContent) {
      case "other-routes":
        return (
          <div>
            <main>{children}</main>
          </div>
        );
      case "dashboard-route":
        return (
          <div className="grid grid-cols-4">
            <main className="w-full col-span-4 md:col-span-3 px-4 py-2 flex-1">
              {children}
            </main>
            <div className="hidden lg:block mx-auto col-span-1">
              <OnboardingSidebar />
            </div>
          </div>
        );
      case "management-route":
        return (
          <div className="p-4">
            <main>{children}</main>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
          "--onboarding-sidebar-width": "22rem",
        } as React.CSSProperties
      }
      className="flex h-full"
    >
      <AppSidebar />
      <SidebarInset className="bg-inherit flex-1 flex flex-col min-h-screen">
        <header className="flex h-16 bg-inherit shrink-0 items-center justify-between px-4">
          {renderSearchBar()}
          <div className="ml-auto flex space-x-3">{signedInWrapper}</div>
        </header>

        {renderMainContentsLayout()}
      </SidebarInset>
    </SidebarProvider>
  );
}
