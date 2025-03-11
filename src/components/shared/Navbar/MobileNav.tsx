"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Navcart from "./Navcart";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}

      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-4 bg-gray-600">
        {/* logo */}
        <div className="my-6">
          <Link href="/">logo</Link>
        </div>
        <hr />
        {/* navItems */}
        <div className="flex flex-col items-start my-6">
          {navItems.map((item, index) => (
            <div key={index}>
              <Link
                href={item.path}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <p className="py-2">{item.element}</p>
              </Link>
            </div>
          ))}
          <div
            onClick={() => {
              setOpen(false);
            }}
          ></div>
        </div>
        <hr />
        {/* search functionality */}
        <div className="my-6">
          <Navcart />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

const navItems = [
  {
    path: "/",
    element: "Home",
  },
  {
    path: "/all-products",
    element: "All Product",
  },
  {
    path: "/dashboard",
    element: "Dashboard",
  },
];
