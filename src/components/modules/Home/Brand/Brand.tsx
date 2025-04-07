import Container from "@/components/shared/Container";
import Marquee from "react-fast-marquee";
import brandImg1 from "@/app/assets/img/brand/brand-img-1.png";
import brandImg2 from "@/app/assets/img/brand/brand-img-2.png";
import brandImg3 from "@/app/assets/img/brand/brand-img-3.png";
import brandImg4 from "@/app/assets/img/brand/brand-img-4.png";
import brandImg5 from "@/app/assets/img/brand/brand-img-5.png";
import brandImg6 from "@/app/assets/img/brand/brand-img-6.png";
import brandImg7 from "@/app/assets/img/brand/brand-img-7.png";
import brandImg8 from "@/app/assets/img/brand/brand-img-8.png";
import brandImg9 from "@/app/assets/img/brand/brand-img-9.png";
import brandImg10 from "@/app/assets/img/brand/brand-img-10.png";
import Image from "next/image";

const Brand = () => {
  return (
    <div className="mt-16 mb-6">
      <Container>
        <h2 className="text-2xl font-bold text-[#1A1A1A] text-balance border-l-4 border-purple-500 pl-2 mb-6">
          Top Brand
        </h2>
        <Marquee>
          <div className="flex justify-center items-center gap-12">
            <Image src={brandImg2} alt="brandImg2" />
            <Image src={brandImg1} alt="brandImg1" />
            <Image src={brandImg3} alt="brandImg3" />
            <Image src={brandImg4} alt="brandImg4" />
            <Image src={brandImg5} alt="brandImg5" />
            <Image src={brandImg6} alt="brandImg6" />
            <Image src={brandImg7} alt="brandImg7" />
            <Image src={brandImg8} alt="brandImg8" />
            <Image src={brandImg9} alt="brandImg9" />
            <Image src={brandImg10} alt="brandImg10" className="mr-12" />
          </div>
        </Marquee>
      </Container>
    </div>
  );
};

export default Brand;
