import { GetCoursesQueryResult } from "@/sanity.types";
import { ReactNode } from "react";
import { SearchBar } from "../SearchBar";
import { DashboardSearchBar } from "../DashboardSearchBar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
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
          <div className="grid grid-cols-1 min-[1224px]:grid-cols-[1fr_320px] h-full">
            <main className="px-4 py-2 overflow-y-auto">{children}</main>
            <div className="border-l border-gray-200">
              <div className="sticky top-0">
                <OnboardingSidebar />
              </div>
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
        <header className="flex h-16 bg-inherit items-center justify-between px-4">
           {/* <div className="flex items-center gap-4"> */}
            <SidebarTrigger className="md:hidden hover:bg-white hover:text-black cursor-pointer mr-4" />
            {renderSearchBar()}
          {/* </div> */}
          <div className="ml-auto flex space-x-3">{signedInWrapper}</div>
        </header>

        {renderMainContentsLayout()}
      </SidebarInset>
    </SidebarProvider>
  );
}
