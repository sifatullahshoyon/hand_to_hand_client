import BrowseItems from "@/components/modules/Home/Browseitems/Browse items";
import HeroSection from "@/components/modules/Home/HeroSection";
import { getCurrentUser } from "@/services/authService";
import React from "react";

const HomePage = async () => {
  const user = await getCurrentUser();
  console.log("Home Page User => ", user);
  return (
    <>
      <HeroSection />
      <BrowseItems />
    </>
  );
};

export default HomePage;
