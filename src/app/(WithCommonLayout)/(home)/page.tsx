"use client";
import BrowseItems from "@/components/modules/Home/Browseitems/Browse items";
import HeroSection from "@/components/modules/Home/HeroSection";
import { useUser } from "@/context/UserContext";

import React from "react";

const HomePage = () => {
  const user = useUser();
  console.log({ user });
  return (
    <>
      <HeroSection />
      <BrowseItems />
    </>
  );
};

export default HomePage;
