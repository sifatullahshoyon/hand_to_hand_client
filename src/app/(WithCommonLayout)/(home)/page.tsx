"use client";
import BrowseItems from "@/components/modules/Home/Browseitems/Browse items";
import Gallery from "@/components/modules/Home/Gallery/Gallery";
import HeroSection from "@/components/modules/Home/HeroSection";
import Smartphone from "@/components/modules/Home/Smartphone/Smartphone ";

import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BrowseItems />
      <Smartphone />
      <Gallery />
    </>
  );
};

export default HomePage;
