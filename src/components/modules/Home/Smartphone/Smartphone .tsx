import ProductCart from "@/components/shared/Carts/ProductCart";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { IListing } from "@/types";
import Link from "next/link";
import React from "react";

export const smartphonesData: IListing[] = [
  {
    _id: "1",
    title: "iPhone 13",
    description:
      "Smooth performance with A15 Bionic chip and great camera quality.",
    price: "48,000",
    condition: "gentlyUsed",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/16849134262051952318.webp",
    userID: "user1",
  },
  {
    _id: "2",
    title: "iPhone 11",
    description:
      "A reliable choice with decent battery and camera for daily use.",
    price: "27,000",
    condition: "fairCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/1697438852151547196.webp",
    userID: "user2",
  },
  {
    _id: "3",
    title: "Samsung Galaxy S22 Ultra 5G",
    description: "Premium flagship with S-Pen support and top-tier specs.",
    price: "43,000",
    condition: "goodCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/16850213311425534601.webp",
    userID: "user3",
  },
  {
    _id: "4",
    title: "Google Pixel 6",
    description: "Excellent photo quality with clean Android experience.",
    price: "24,150",
    condition: "gentlyUsed",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/16850134092132952576.webp",
    userID: "user4",
  },
  {
    _id: "5",
    title: "Oneplus 11R",
    description: "Smooth 120Hz display with powerful Snapdragon processor.",
    price: "26,500",
    condition: "goodCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/1685001957877953062.webp",
    userID: "user5",
  },
  {
    _id: "6",
    title: "Xiaomi Redmi Note 13 Pro Plus",
    description: "Affordable device with impressive performance and camera.",
    price: "28,350",
    condition: "brandNew",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/1704524214568200227.webp",
    userID: "user6",
  },
  {
    _id: "7",
    title: "Oppo Find N3 Flip",
    description: "Stylish foldable phone with flagship-level performance.",
    price: "64,999",
    condition: "brandNew",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/17182710551080519463.webp",
    userID: "user7",
  },
  {
    _id: "8",
    title: "Vivo T3 Lite",
    description:
      "Budget-friendly smartphone with decent battery and performance.",
    price: "12,999",
    condition: "goodCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/1726410560706888292.webp",
    userID: "user8",
  },
  {
    _id: "9",
    title: "Xiaomi Redmi 13C",
    description: "Entry-level phone ideal for basic use and long battery life.",
    price: "11,052",
    condition: "fairCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/170426580681418869.webp",
    userID: "user9",
  },
  {
    _id: "10",
    title: "Oppo F25 Pro",
    description: "Great for multimedia with AMOLED display and fast charging.",
    price: "19,000",
    condition: "gentlyUsed",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/1714214411527697784.webp",
    userID: "user10",
  },
];

const Smartphone = () => {
  return (
    <div className="mt-16">
      <Container>
        <SectionTitle title="Smartphone Hot Collection" />
        {/* End Section Title */}
        <Link href="/products">
          <div
            data-aos="fade-down"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pb-6"
          >
            {smartphonesData.map((item, index) => (
              <ProductCart key={index} item={item} />
            ))}
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default Smartphone;
