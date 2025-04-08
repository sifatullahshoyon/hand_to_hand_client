import ProductCart from "@/components/shared/Carts/ProductCart";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { IListing } from "@/types";
import Link from "next/link";
import React from "react";

// const watchesData = [
//   {
//     _id: "1",
//     title: "Seiko watch 5 GMT SKX01 Grapevine",
//     price: "54,000",
//     images:
//       "https://d3qqewlrl1nyfn.cloudfront.net/product/16963460981455923451.webp",
//   },
//   {
//     _id: "2",
//     title: "Seiko watch 5 GMT SKX01 Blueberry",
//     price: "54,000",
//     images:
//       "https://d3qqewlrl1nyfn.cloudfront.net/product/16963458811770821092.webp",
//   },
//   {
//     _id: "3",
//     title: "Versus Versace Echo Park Collection Luxury",
//     price: "25,200",
//     images:
//       "https://d3qqewlrl1nyfn.cloudfront.net/product/1699684953831211057.webp",
//   },
//   {
//     _id: "4",
//     title: "Casio MTP-1302D-1A1",
//     price: "1500",
//     images:
//       "https://d3qqewlrl1nyfn.cloudfront.net/product/17045119941356272531.webp",
//   },
//   {
//     _id: "5",
//     title: "Casio MTS-100D-2AV",
//     price: "9500",
//     images:
//       "https://d3qqewlrl1nyfn.cloudfront.net/product/170427703669924080.webp",
//   },
//   {
//     _id: "6",
//     title: "Casio LF-20W-3A",
//     price: "3700",
//     images:
//       "https://d3qqewlrl1nyfn.cloudfront.net/product/17043072961383969508.webp",
//   },
//   {
//     _id: "7",
//     title: "Casio LF-20W-8A2",
//     price: "3900",
//     images:
//       "https://d3qqewlrl1nyfn.cloudfront.net/product/17043133381095338580.webp",
//   },
//   {
//     _id: "8",
//     title: "Casio LF-20W-1A",
//     price: "4,500",
//     images:
//       "https://d3qqewlrl1nyfn.cloudfront.net/product/17043133381095338580.webp",
//   },
//   {
//     _id: "9",
//     title: "Casio CA-53WF-8B",
//     price: "3,650",
//     images:
//       "https://d3qqewlrl1nyfn.cloudfront.net/product/1704343350743063168.webp",
//   },
//   {
//     _id: "10",
//     title: "Casio CA-53WF-3B",
//     price: "3,650",
//     images:
//       "https://d3qqewlrl1nyfn.cloudfront.net/product/1704346158557625373.webp",
//   },
// ];

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
