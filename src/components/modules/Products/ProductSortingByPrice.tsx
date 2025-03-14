"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductSortingByPrice = () => {
  const [sortBy, setSortBy] = useState("Popularity");

  console.log(sortBy);

  return (
    <div className="flex justify-between items-center mb-6">
      <h2></h2>
      {/* dropdown menu btn */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="px-6 font-bold">
            Sort by <ChevronDown size={18} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuItem onClick={() => setSortBy("Low to High")}>
            Price: Low to High
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSortBy("High to Low")}>
            Price: High to Low
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProductSortingByPrice;
