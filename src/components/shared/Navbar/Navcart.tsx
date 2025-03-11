import React from "react";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import UserInfoDropdown from "@/components/Dropdown/UserInfoDropdown";

const Navcart = () => {
  return (
    <div className="md:flex justify-between items-center gap-4 space-y-6 md:space-y-0">
      {/* Auth Options */}
      <div>
        <UserInfoDropdown />
      </div>
      {/* shopping cart */}
      <div className="relative">
        <ShoppingCart className="text-white" />
        <Badge className="absolute -top-4 left-3 bg-[#1A1A1A] text-white">
          0
        </Badge>
      </div>
    </div>
  );
};

export default Navcart;
