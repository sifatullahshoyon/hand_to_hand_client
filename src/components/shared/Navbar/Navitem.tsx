"use client";
import Link from "next/link";
import React from "react";
import Navcart from "./Navcart";
import logo from "@/app/assets/img/logo-one.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navitem = () => {
  const pathname = usePathname();

  return (
    <div className="md:flex justify-between items-center w-full hidden">
      {/* logo */}
      <Link href="/" className="flex justify-center items-center gap-2">
        <Image src={logo} alt="logo" width={60} />
        <p className="text-white text-lg">Hand to Hand</p>
      </Link>

      {/* navItems */}
      <div className="flex justify-center items-center gap-6 px-2">
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <div key={index}>
              <Link
                href={item.path}
                className={`px-4 py-2 font-bold transition-all duration-300 ${
                  isActive ? "text-white" : "text-black"
                }`}
              >
                {item.element}
              </Link>
            </div>
          );
        })}
      </div>

      {/* search functionality */}
      <Navcart />
    </div>
  );
};

export default Navitem;

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
