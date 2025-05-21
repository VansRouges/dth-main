"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  LearningIcon,
  MentorshipIcon,
  UserGroupIcon
} from "@/constants/user-icons"

const navItems = [
  {
    title: "User Management",
    url: "/admin",
    icon: <UserGroupIcon />,
  },
  {
    title: "Instructors",
    url: "/admin/instructors",
    icon: <MentorshipIcon />,
  },
  {
    title: "Course Management",
    url: "/admin/courses",
    icon: <LearningIcon />,
  },
  
];

export function AdminAppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader className="text-[#104BC1]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="hover:bg-white hover:text-[#104BC1]"
              tooltip={"DataTechHub"}
              size="lg"
              asChild
            >
              <Link href="/">
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-bold logo-font capitalize">DataTechHub</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-1">
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  className={cn(
                    "hover:bg-white group hover:text-[#104BC1] transition-colors",
                    pathname === item.url ? "bg-[#104BC1] text-white hover:bg-[#104BC1] hover:text-white" : ""
                  )}
                  size="lg"
                  asChild
                >
                  <Link href={item.url} className="">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}