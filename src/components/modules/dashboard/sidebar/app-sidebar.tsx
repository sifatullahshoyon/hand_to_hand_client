"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Command,
  Frame,
  GalleryVerticalEnd,
  House,
  LayoutDashboard,
  Map,
  PieChart,
  UserPen,
  History,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import logo from "../../../../app/assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
      isActive: false,
    },
    {
      title: "Dashboard Home",
      url: "/user/dashboard",
      icon: LayoutDashboard,
      isActive: false,
    },

    {
      title: "Manage Listings",
      url: "/user/listings",
      icon: BookOpen,
      items: [
        {
          title: "Create Listings",
          url: "/user/listings/add-listings",
        },
      ],
    },

    {
      title: "Purchase History",
      url: "/user/purchase-history",
      icon: History,
      isActive: false,
    },
    {
      title: "Sales History",
      url: "/user/sales-history",
      icon: History,
      isActive: false,
    },
    {
      title: "Profile",
      url: "/user/profile",
      icon: UserPen,
      isActive: false,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link
          href="/"
          className="flex flex-wrap justify-center items-center mb-6"
        >
          <Image src={logo} alt="logo" placeholder="blur" width={50} />
          <p className="text-[#1A1A1A] font-bold text-lg text-balance">
            Hand to Hand
          </p>
        </Link>
      </SidebarHeader>
      {/* Header End */}
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      {/* End Side bar Content */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
