"use client";
import { Badge } from "@/components/ui/badge";
import UserInfoDropdown from "@/components/Dropdown/UserInfoDropdown";
import TooltipTitle from "../Tooltip/TooltipTitle";
import Link from "next/link";
import { orderedProductsSelector } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hook";
import Wishlist from "@/components/Wishlist/Wishlist";

const shoppingCartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-shopping-cart"
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const Navcart = () => {
  const products = useAppSelector(orderedProductsSelector);
  return (
    <div className="md:flex justify-between items-center gap-4 space-y-6 md:space-y-0">
      {/* Auth Options */}

      <Wishlist />
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
          {products?.length ? products?.length : 0}
        </Badge>
      </Link>
    </div>
  );
};

export default Navcart;
