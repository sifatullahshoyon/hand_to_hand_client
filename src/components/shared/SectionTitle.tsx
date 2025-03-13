import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between mb-6 px-2">
      <h2 className="text-2xl font-bold text-[#1A1A1A] text-balance border-l-4 border-purple-500 pl-2">
        {title}
      </h2>
      <Link href="/products">
        <Button className="bg-purple-500 hover:bg-purple-600 text-white cursor-pointer transition">
          View All
        </Button>
      </Link>
    </div>
  );
};

export default SectionTitle;
