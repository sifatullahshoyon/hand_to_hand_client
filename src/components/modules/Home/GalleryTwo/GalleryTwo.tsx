import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";
import img5 from "../../../../app/assets/img/gallery/five.jpeg";
import img6 from "../../../../app/assets/img/gallery/six.jpeg";
import img7 from "../../../../app/assets/img/gallery/seven.jpeg";
import img8 from "../../../../app/assets/img/gallery/eight.jpeg";

const GalleryTwo = () => {
  return (
    <div className="mt-16 mb-6">
      <Container>
        <div className="md:flex md:flex-row flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 justify-between items-center gap-6">
          <div className="hover:shadow-2xl transition-all hover:scale-110 mx-auto">
            <Image
              src={img5}
              alt="gallery img"
              placeholder="blur"
              loading="lazy"
              height={500}
            />
          </div>
          {/* img 5 */}
          <div className="hover:shadow-2xl transition-all hover:scale-110 mx-auto">
            <Image
              src={img6}
              alt="gallery img"
              placeholder="blur"
              loading="lazy"
              height={500}
            />
          </div>
          {/* img 6 */}
          <div className="hover:shadow-2xl transition-all hover:scale-110 mx-auto">
            <Image
              src={img7}
              alt="gallery img"
              placeholder="blur"
              loading="lazy"
              height={500}
            />
          </div>
          {/* img 7 */}
          <div className="hover:shadow-2xl transition-all hover:scale-110 mx-auto">
            <Image
              src={img8}
              alt="gallery img"
              placeholder="blur"
              loading="lazy"
              height={500}
            />
          </div>
          {/* img 8 */}
        </div>
      </Container>
    </div>
  );
};

export default GalleryTwo;
