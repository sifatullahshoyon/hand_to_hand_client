import ProductCart from "@/components/shared/Carts/ProductCart";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";
import React from "react";

export const smartphonesData = [
  {
    id: "1",
    name: "iPhone 13",
    price: "48,000",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/16849134262051952318.webp",
  },
  {
    id: "2",
    name: "iPhone 11",
    price: "27,000",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/1697438852151547196.webp",
  },
  {
    id: "3",
    name: "Samsung Galaxy S22 Ultra 5G",
    price: "43,000",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/16850213311425534601.webp",
  },
  {
    id: "4",
    name: "Google Pixel 6",
    price: "24,150",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/16850134092132952576.webp",
  },
  {
    id: "5",
    name: "Oneplus 11R",
    price: "26,500",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/1685001957877953062.webp",
  },
  {
    id: "6",
    name: "Xiaomi Redmi Note 13 Pro Plus",
    price: "28,350",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/1704524214568200227.webp",
  },
  {
    id: "7",
    name: "Oppo Find N3 Flip",
    price: "64,999",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/17182710551080519463.webp",
  },
  {
    id: "8",
    name: "Vivo T3 Lite",
    price: "12,999",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/1726410560706888292.webp",
  },
  {
    id: "9",
    name: "Xiaomi Redmi 13C",
    price: "11,052",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/170426580681418869.webp",
  },
  {
    id: "10",
    name: "Oppo F25 Pro",
    price: "19,000",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/1714214411527697784.webp",
  },
];

const Smartphone = () => {
  return (
    <div className="mt-16">
      <Container>
        <SectionTitle title="Smartphone Hot Collection" />
        {/* End Section Title */}
        <Link href="/products">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pb-6">
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
