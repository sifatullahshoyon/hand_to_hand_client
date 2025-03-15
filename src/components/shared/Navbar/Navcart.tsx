import React from "react";
import { Badge } from "@/components/ui/badge";
import UserInfoDropdown from "@/components/Dropdown/UserInfoDropdown";
import TooltipTitle from "../Tooltip/TooltipTitle";
import Link from "next/link";

const heartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-heart"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const shoppingCartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-shopping-cart"
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const Navcart = () => {
  return (
    <div className="md:flex justify-between items-center gap-4 space-y-6 md:space-y-0">
      {/* Auth Options */}
      <div className="relative cursor-pointer">
        <TooltipTitle element={heartIcon} content="Wish List"></TooltipTitle>
        <Badge className="absolute -top-4 left-3 bg-[#1A1A1A] text-white">
          0
        </Badge>
      </div>
      <div className="cursor-pointer">
        <UserInfoDropdown />
      </div>
      {/* shopping cart */}
      <Link href="/cart" className="relative cursor-pointer">
        <TooltipTitle
          element={shoppingCartIcon}
          content="shopping Cart"
        ></TooltipTitle>
        <Badge className="absolute -top-4 left-3 bg-[#1A1A1A] text-white">
          0
        </Badge>
      </Link>
    </div>
  );
};

export default Navcart;
