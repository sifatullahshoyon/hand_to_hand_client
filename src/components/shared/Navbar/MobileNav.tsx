"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Navcart from "./Navcart";
import Image from "next/image";
import logo from "@/app/assets/img/logo.png";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}

      <SheetTrigger asChild>
        <div className="md:hidden flex justify-between items-center w-full gap-2">
          <Link href="/" className="flex justify-start items-center gap-2">
            <Image src={logo} alt="logo" width={50} />
            <p className="text-white text-lg">Hand to Hand</p>
          </Link>
          <Button variant="ghost" size="icon">
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
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </SheetTrigger>

      <SheetContent side="left" className="p-4 bg-gray-600">
        {/* logo */}
        <div className="my-6">
          <Link href="/" className="flex justify-start items-center gap-2">
            <Image
              src={logo}
              alt="logo"
              width={60}
              placeholder="blur"
              loading="lazy"
            />
            <p className="text-white text-lg">Hand to Hand</p>
          </Link>
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
                <p className="py-2 font-leto text-white tracking-wide">
                  {item.element}
                </p>
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
    path: "/about-us",
    element: "About Us",
  },
];
