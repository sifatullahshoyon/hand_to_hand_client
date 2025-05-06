import React from "react";
import Container from "../Container";
import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="bg-purple-500 sticky top-0 z-50">
      <Container>
        <div className="flex h-20 items-center ">
          <DeskNav />
          <MobileNav />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
