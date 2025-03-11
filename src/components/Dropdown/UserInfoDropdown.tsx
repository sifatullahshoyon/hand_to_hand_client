"use client";
import {
  CreditCard,
  Heart,
  LogIn,
  LogOut,
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

const UserInfoDropdown = () => {
  const user = true;
  //     const user = useAppSelector(useCurrentUser);

  //   const dispatch = useAppDispatch();

  const handleLogout = () => {
    //   dispatch(logout());
    toast.success("Logout Successfully.");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* open btn */}
        <UserRound className="text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* my profile start */}
        <DropdownMenuGroup>
          <DropdownMenuItem className="group cursor-pointer">
            <User className="group-hover:text-[#EF6291]" />
            <span className="group-hover:text-[#EF6291]">Profile</span>
          </DropdownMenuItem>
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

          <DropdownMenuItem className="group cursor-pointer">
            <ShoppingCart className="group-hover:text-[#EF6291]" />
            <span className="group-hover:text-[#EF6291]">Shopping Cart</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="group cursor-pointer">
            <CreditCard className="group-hover:text-[#EF6291]" />
            <span className="group-hover:text-[#EF6291]">Checkout</span>
          </DropdownMenuItem>
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
  );
};

export default UserInfoDropdown;
