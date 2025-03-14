"use client";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const image1 =
  "https://d3qqewlrl1nyfn.cloudfront.net/slider/17312427262144528126.png";

const image2 =
  "https://d3qqewlrl1nyfn.cloudfront.net/slider/17330335251450919110.png";

const image3 =
  "https://d3qqewlrl1nyfn.cloudfront.net/slider/17312427692039943190.png";

import Image from "next/image";
import Container from "@/components/shared/Container";

const ImgSlider = () => {
  return (
    <div className="mt-16 mb-6">
      <Container>
        <Swiper
          navigation
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
        >
          <SwiperSlide>
            <div className="relative w-full h-[400px]">
              <Image src={image1} alt="img" fill className="object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[400px]">
              <Image src={image2} alt="img" fill className="object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[400px]">
              <Image src={image3} alt="img" fill className="object-cover" />
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default ImgSlider;
