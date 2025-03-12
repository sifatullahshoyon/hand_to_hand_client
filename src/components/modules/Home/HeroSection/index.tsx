import React from "react";
import styles from "./HeroSection.module.css";
import { Input } from "@/components/ui/input";
import Container from "@/components/shared/Container";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className={`${styles.banner} mb-5`}>
      <Container>
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-2xl md:text-6xl font-bold text-white leading-[1.2] tracking-wide text-center mb-11 text-balance">
            One Marketplace,
            <span className="">Endless Possibilities</span>
            <br />
            Shop{" "}
            <span className="text-purple-500 font-extrabold">
              Hand To Hand
            </span>{" "}
            Today!
          </h1>
          <div className="relative  py-2 w-[50%]">
            <Input
              type="text"
              placeholder="Search To Buy..."
              className=" outline-none border-none bg-white focus:ring-2 py-6 pl-10 placeholder:text-#b8afaf]"
            />
            <Search className="absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out text-[#b8afaf]" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
