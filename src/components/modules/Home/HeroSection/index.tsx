"use client";
import React from "react";
import styles from "./HeroSection.module.css";
import { Input } from "@/components/ui/input";
import Container from "@/components/shared/Container";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4, // Delay each word
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const words = [
    "One Marketplace, Endless Possibilities.",
    "Shop",
    "Hand To Hand",
    "Today!",
  ];
  return (
    <div className={`${styles.banner}`}>
      <Container>
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-[40px] md:text-6xl font-bold text-white leading-[1.5] tracking-wide text-center mb-11 text-balance">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className={
                  word === "Hand To Hand"
                    ? "text-purple-500 font-extrabold"
                    : ""
                }
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {word}{" "}
              </motion.span>
            ))}
          </h1>
          {/* start search functionality */}
          <div className="flex w-full max-w-1/2 items-center space-x-2 mb-16 mx-auto">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search By Product Name"
                className=" bg-white focus:ring-2 focus:ring-purple-500  py-5 pl-10 placeholder:text-#b8afaf]"
              />
              <Search className="absolute top-1/2 left-6 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out text-[#b8afaf]" />
            </div>
            <Button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 transition text-white px-8 py-5"
            >
              Search
            </Button>
          </div>
          {/* End search functionality */}
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
