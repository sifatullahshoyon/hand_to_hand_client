import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";
import aboutUs from "../../assets/img/banner/about-us.jpg";
import team from "../../assets/img/team.png";

const AboutUsPage = () => {
  return (
    <>
      <div className="w-full h-64">
        <Image
          src={aboutUs}
          alt="About Us"
          objectFit="cover"
          className="w-full h-full"
          placeholder="blur"
          loading="lazy"
        />
      </div>
      {/* End Img */}
      <Container>
        {/* start about us */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-6">
          {/* img section */}
          <div>
            <Image
              src={team}
              alt="team photo"
              placeholder="blur"
              loading="lazy"
              className="rounded-lg"
            />
          </div>
          {/* text section */}
          <div>
            <h1 className="text-3xl text-[#1A1A1A] font-bold">
              About <span className="text-purple-500">Hand to Hand</span>
            </h1>
            <p className="py-6 text-balance text-base text-gray-600 tracking-wide leading-relaxed">
              Hand to Hand is Bangladesh&apos;s largest online multi opt buying
              and <br /> selling marketplace.
            </p>
            <p className="pb-6 text-balance text-base text-gray-600 tracking-wide text-justify leading-relaxed">
              It will provide their customers a powerful platform where they can
              purchase new and sell second hand products. Customers can switch
              easily between their options and will choose to it, same goes for
              the seller. The unique feature of Hand to Hand is, it can offer
              products to its customer according to their location. If any
              purchaser wants to buy a specific product or any seller wants to
              sell a product- Hand to Hand will send them notification if they
              are in the nearest zone. Additionally, Hand to Hand will accept
              online payment and easy excess to the trader.
            </p>
          </div>
        </div>
        {/* End about us */}

        {/* start our journey */}
        <div className="mt-16">
          <h1 className="text-3xl text-[#1A1A1A] font-bold">
            Our <span className="text-purple-500">Journey</span>
          </h1>
          <p className="py-6 text-balance text-base text-gray-600 tracking-wide text-justify">
            It will provide their customers a powerful platform where they can
            purchase new and sell second hand products. Customers can switch
            easily between their options and will choose to it, same goes for
            the seller. The unique feature of Hand to Hand is, it can offer
            products to its customer according to their location. If any
            purchaser wants to buy a specific product or any seller wants to
            sell a product- Hand to Hand will send them notification if they are
            in the nearest zone. Additionally, Hand to Hand will accept online
            payment and easy excess to the trader.
          </p>
        </div>
        {/* start our journey */}

        {/* start our goal */}
        <div className="mt-16 mb-6 grid grid-cols-1 md:grid-cols-2 justify-between gap-10">
          {/* img section */}
          <div>
            <h1 className="text-3xl text-[#1A1A1A] font-bold">
              Our <span className="text-purple-500">Mission</span>
            </h1>
            <p className="py-6 text-balance text-base text-gray-600 tracking-wide text-justify leading-relaxed">
              Hand to Hand is a commercial enterprise and our mission is to
              generate sales & profits for our investors, owners, managers and
              staff. Hand to Hand is a services company and will concentrate on
              delivering best in class service to its customers. To provide the
              best online shopping experience in Bangladesh. To become the
              biggest on-demand online marketplace in Bangladesh To add real
              value to clients (both sellers and buyers).
            </p>
          </div>
          {/* text section */}
          <div>
            <h1 className="text-3xl text-[#1A1A1A] font-bold">
              Our <span className="text-purple-500">Vision</span>
            </h1>
            <p className="py-6 text-balance text-base text-gray-600 tracking-wide text-justify leading-relaxed">
              Our vision is to design a great customer experience, in terms of
              branding, software and service. We want to contribute in the
              Welfare and economic prosperity of the people and the community.
            </p>
          </div>
        </div>
        {/* End Our Goal */}
      </Container>
    </>
  );
};

export default AboutUsPage;
