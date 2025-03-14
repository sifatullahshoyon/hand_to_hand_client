import ProductCart from "@/components/shared/Carts/ProductCart";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";
import React from "react";

const watchsData = [
  {
    name: "Seiko watch 5 GMT SKX01 Grapevine",
    price: "54,000",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/16963460981455923451.webp",
  },
  {
    name: "Seiko watch 5 GMT SKX01 Blueberry",
    price: "54,000",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/16963458811770821092.webp",
  },
  {
    name: "Versus Versace Echo Park Collection Luxury",
    price: "25,200",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/1699684953831211057.webp",
  },
  {
    name: "Casio MTP-1302D-1A1",
    price: "1500",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/17045119941356272531.webp",
  },
  {
    name: "Casio MTS-100D-2AV",
    price: "9500",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/170427703669924080.webp",
  },
  {
    name: "Casio LF-20W-3A",
    price: "3700",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/17043072961383969508.webp",
  },
  {
    name: "Casio LF-20W-8A2",
    price: "3900",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/17043133381095338580.webp",
  },
  {
    name: "Casio LF-20W-1A",
    price: "4,500",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/17043133381095338580.webp",
  },
  {
    name: "Casio CA-53WF-8B",
    price: "3,650",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/1704343350743063168.webp",
  },
  {
    name: "Casio CA-53WF-3B",
    price: "3,650",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/1704346158557625373.webp",
  },
];

const Watch = () => {
  return (
    <div className="mt-16">
      <Container>
        <SectionTitle title="Fashionable Watch Carnival" />
        <Link href="/products">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pb-6">
            {/* Product Cards */}
            {watchsData.map((item, index) => (
              <ProductCart key={index} item={item} />
            ))}
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default Watch;
