import BrowseItems from "@/components/modules/Home/Browseitems/Browse items";
import Gallery from "@/components/modules/Home/Gallery/Gallery";
import GalleryTwo from "@/components/modules/Home/GalleryTwo/GalleryTwo";
import HeroSection from "@/components/modules/Home/HeroSection";
import Laptop from "@/components/modules/Home/Laptop/Laptop";
import Smartphone from "@/components/modules/Home/Smartphone/Smartphone ";
import Watch from "@/components/modules/Home/Watch/Watch";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BrowseItems />
      <Smartphone />
      <Gallery />
      <Laptop />
      <GalleryTwo />
      <Watch />
    </>
  );
};

export default HomePage;
