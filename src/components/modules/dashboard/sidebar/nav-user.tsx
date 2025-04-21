"use client";

import { ChevronsUpDown, LogOut, User, UserRoundPen } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/services/authService";
import { toast } from "sonner";
import { protectedRoutes } from "@/constants";
import Link from "next/link";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();

  // start logout functionality

  const { user: UserInfo, setLoading } = useUser();
  // redirect
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setLoading(true);
    // tost
    toast.success("Logout Successfully.");

    // jodi user logout obusthay private route a thake tahle take redirect kore home page a niye jabe
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/login");
    }
  };

  return (
    <SidebarMenu className="bg-[#EF6291] rounded text-white transition">
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={UserInfo?.name} />
                <AvatarFallback className="rounded-lg">
                  <User />
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{UserInfo?.name}</span>
                <span className="truncate text-xs">{UserInfo?.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-white"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">UN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {UserInfo?.name ? UserInfo?.name : "user name"}
                  </span>
                  <span className="truncate text-xs">
                    {UserInfo?.email ? UserInfo?.email : "user@gmail.com"}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <Link href="/user/profile">
                <DropdownMenuItem>
                  <UserRoundPen />
                  Profile
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={handleLogout}
              className="bg-[#EF6291] transition"
            >
              <LogOut />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
