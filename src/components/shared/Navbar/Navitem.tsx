import Link from "next/link";
import React from "react";
import Navcart from "./Navcart";

const Navitem = () => {
  return (
    <div className="md:flex  justify-between items-center w-full hidden">
      {/* logo */}
      <Link href="/">
        <p>logo</p>
      </Link>
      {/* navItems */}
      <div className="flex justify-center items-center gap-6 px-2">
        {navItems.map((item, index) => (
          <div key={index}>
            <Link href={item.path}>{item.element}</Link>
          </div>
        ))}
      </div>
      {/* search functionality */}
      <>
        <Navcart />
      </>
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
