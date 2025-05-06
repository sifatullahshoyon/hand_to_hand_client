import ProductCart from "@/components/shared/Carts/ProductCart";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { IListing } from "@/types";
import Link from "next/link";
import React from "react";

const watchesData: IListing[] = [
  {
    _id: "1",
    title: "Seiko watch 5 GMT SKX01 Grapevine",
    description: "Stylish GMT watch from Seiko with grapevine color theme.",
    price: "54,000",
    condition: "brandNew",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/16963460981455923451.webp",
    userID: "user1",
    category: "electronics",
  },
  {
    _id: "2",
    title: "Seiko watch 5 GMT SKX01 Blueberry",
    description: "Stylish GMT watch from Seiko with blueberry color theme.",
    price: "54,000",
    condition: "brandNew",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/16963458811770821092.webp",
    userID: "user1",
    category: "electronics",
  },
  {
    _id: "3",
    title: "Versus Versace Echo Park Collection Luxury",
    description: "Luxury timepiece from Versus Versace Echo Park Collection.",
    price: "25,200",
    condition: "gentlyUsed",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/1699684953831211057.webp",
    userID: "user2",
    category: "electronics",
  },
  {
    _id: "4",
    title: "Casio MTP-1302D-1A1",
    description: "Classic design Casio watch, perfect for everyday use.",
    price: "1500",
    condition: "fairCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/17045119941356272531.webp",
    userID: "user3",
    category: "electronics",
  },
  {
    _id: "5",
    title: "Casio MTS-100D-2AV",
    description: "Stylish and budget-friendly Casio watch.",
    price: "9500",
    condition: "goodCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/170427703669924080.webp",
    userID: "user4",
    category: "electronics",
  },
  {
    _id: "6",
    title: "Casio LF-20W-3A",
    description: "Trendy digital Casio LF series watch.",
    price: "3700",
    condition: "goodCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/17043072961383969508.webp",
    userID: "user4",
    category: "electronics",
  },
  {
    _id: "7",
    title: "Casio LF-20W-8A2",
    description: "Digital Casio watch with a sleek gray strap.",
    price: "3900",
    condition: "goodCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/17043133381095338580.webp",
    userID: "user5",
    category: "electronics",
  },
  {
    _id: "8",
    title: "Casio LF-20W-1A",
    description: "Casio watch with a black strap and durable design.",
    price: "4,500",
    condition: "gentlyUsed",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/17043133381095338580.webp",
    userID: "user5",
    category: "electronics",
  },
  {
    _id: "9",
    title: "Casio CA-53WF-8B",
    description: "Vintage-style Casio calculator watch in gray.",
    price: "3,650",
    condition: "fairCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/1704343350743063168.webp",
    userID: "user6",
    category: "electronics",
  },
  {
    _id: "10",
    title: "Casio CA-53WF-3B",
    description: "Classic calculator watch in green from Casio.",
    price: "3,650",
    condition: "fairCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/1704346158557625373.webp",
    userID: "user6",
    category: "electronics",
  },
];

const Watch = () => {
  return (
    <div className="mt-16">
      <Container>
        <SectionTitle title="Fashionable Watch Carnival" />
        <Link href="/products">
          <div
            data-aos="fade-down"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pb-6"
          >
            {/* Product Cards */}
            {watchesData.map((item, index) => (
              <ProductCart key={index} item={item} />
            ))}
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default Watch;
