"use client";
import {
  LogIn,
  LogOut,
  PanelsTopLeft,
  ShoppingCart,
  User,
  UserRound,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import Link from "next/link";
import { logout } from "@/services/authService";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/constants";

const UserInfoDropdown = () => {
  const { user, setLoading } = useUser();
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
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {/* open btn */}
          <UserRound className="text-white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white border-none">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* my profile start */}
          <DropdownMenuGroup>
            {user && (
              <Link href="/user/profile">
                <DropdownMenuItem className="group cursor-pointer">
                  <User className="group-hover:text-[#EF6291]" />
                  <span className="group-hover:text-[#EF6291]">Profile</span>
                </DropdownMenuItem>
              </Link>
            )}
            {!user && (
              <Link href="/login">
                <DropdownMenuItem className="group cursor-pointer">
                  <LogIn className="group-hover:text-[#EF6291]" />
                  <span className="group-hover:text-[#EF6291]">Login</span>
                </DropdownMenuItem>
              </Link>
            )}
          </DropdownMenuGroup>
          {/* my profile end */}
          <DropdownMenuSeparator />
          {/* start cart  */}
          <DropdownMenuGroup>
            {/* End Wish List */}
            {user && (
              <Link href="/cart">
                <DropdownMenuItem className="group cursor-pointer">
                  <ShoppingCart className="group-hover:text-[#EF6291]" />
                  <span className="group-hover:text-[#EF6291]">
                    Shopping Cart
                  </span>
                </DropdownMenuItem>
              </Link>
            )}
            {/* End Shopping Cart */}
            {user && (
              <Link href="/user/dashboard">
                <DropdownMenuItem className="group cursor-pointer">
                  <PanelsTopLeft className="group-hover:text-[#EF6291]" />
                  <span className="group-hover:text-[#EF6291]">Dashboard</span>
                </DropdownMenuItem>
              </Link>
            )}
            {/* End Dashboard */}
          </DropdownMenuGroup>
          {/* End cart  */}
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {user && (
              <DropdownMenuItem
                onClick={handleLogout}
                className="group bg-[#EF6291] hover:bg-[#EF6291] focus:bg-[#EF6291] cursor-pointer"
              >
                <LogOut className="group-hover:bg-[#EF6291] group-hover:text-[#1A1A1A] text-white" />
                <span className="group-hover:bg-[#EF6291] group-hover:text-[#1A1A1A] text-white">
                  Sign Out
                </span>
              </DropdownMenuItem>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserInfoDropdown;
