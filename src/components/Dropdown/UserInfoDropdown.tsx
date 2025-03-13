"use client";
import {
  CreditCard,
  Heart,
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

const UserInfoDropdown = () => {
  const { user, loading, setLoading } = useUser();

  if (loading) {
    <p>loading...</p>;
  }

  const handleLogout = () => {
    logout();
    setLoading(true);
    toast.success("Logout Successfully.");
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
              <DropdownMenuItem className="group cursor-pointer">
                <User className="group-hover:text-[#EF6291]" />
                <span className="group-hover:text-[#EF6291]">Profile</span>
              </DropdownMenuItem>
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
            <DropdownMenuItem className="group cursor-pointer">
              <Heart className="group-hover:text-[#EF6291]" />
              <span className="group-hover:text-[#EF6291]">Wish List (0)</span>
            </DropdownMenuItem>
            {/* End Wish List */}
            {user && (
              <DropdownMenuItem className="group cursor-pointer">
                <ShoppingCart className="group-hover:text-[#EF6291]" />
                <span className="group-hover:text-[#EF6291]">
                  Shopping Cart
                </span>
              </DropdownMenuItem>
            )}
            {/* End Shopping Cart */}
            {user && (
              <DropdownMenuItem className="group cursor-pointer">
                <PanelsTopLeft className="group-hover:text-[#EF6291]" />
                <span className="group-hover:text-[#EF6291]">Dashboard</span>
              </DropdownMenuItem>
            )}
            {/* End Dashboard */}
            {user && (
              <DropdownMenuItem className="group cursor-pointer">
                <CreditCard className="group-hover:text-[#EF6291]" />
                <span className="group-hover:text-[#EF6291]">Checkout</span>
              </DropdownMenuItem>
            )}
            {/* End Checkout */}
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
