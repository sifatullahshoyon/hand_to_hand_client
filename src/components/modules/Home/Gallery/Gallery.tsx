import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";
import img1 from "../../../../app/assets/img/gallery/one.jpeg";
import img2 from "../../../../app/assets/img/gallery/two.jpeg";
import img3 from "../../../../app/assets/img/gallery/three.jpeg";
import img4 from "../../../../app/assets/img/gallery/four.jpeg";

const Gallery = () => {
  return (
    <div className="mt-16 mb-6">
      <Container>
        <div
          data-aos="fade-right"
          className="md:flex md:flex-row flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 justify-between items-center gap-6"
        >
          <div className="hover:shadow-2xl transition-all hover:scale-110 mx-auto">
            <Image
              src={img1}
              alt="gallery img"
              placeholder="blur"
              loading="lazy"
              height={500}
            />
          </div>
          {/* img 1 */}
          <div className="hover:shadow-2xl transition-all hover:scale-110 mx-auto">
            <Image
              src={img2}
              alt="gallery img"
              placeholder="blur"
              loading="lazy"
              height={500}
            />
          </div>
          {/* img 2 */}
          <div className="hover:shadow-2xl transition-all hover:scale-110 mx-auto">
            <Image
              src={img3}
              alt="gallery img"
              placeholder="blur"
              loading="lazy"
              height={500}
            />
          </div>
          {/* img 3 */}
          <div className="hover:shadow-2xl transition-all hover:scale-110 mx-auto">
            <Image
              src={img4}
              alt="gallery img"
              placeholder="blur"
              loading="lazy"
              height={500}
            />
          </div>
          {/* img 4 */}
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
