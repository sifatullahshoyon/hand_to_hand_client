import ProductCart from "@/components/shared/Carts/ProductCart";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { IListing } from "@/types";
import Link from "next/link";
import React from "react";

export const laptopsData: IListing[] = [
  {
    _id: "1",
    title: "Lenovo Ideapad Slim 3i",
    description: "A lightweight and efficient laptop for everyday tasks.",
    price: "51,400",
    condition: "brandNew",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/16851654191184568877.webp",
    userID: "user1",
  },
  {
    _id: "2",
    title: "HP Elitebook 840 G3",
    description: "Business-class laptop with durable design and performance.",
    price: "21,052",
    condition: "gentlyUsed",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/1685186575392313556.webp",
    userID: "user2",
  },
  {
    _id: "3",
    title: "Dell Latitude 7490",
    description: "Compact and powerful for professionals on the move.",
    price: "27,000",
    condition: "goodCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/16851865551162362832.webp",
    userID: "user3",
  },
  {
    _id: "4",
    title: "HP Elitebook 840 G3",
    description: "Another variant of G3 model with slight improvements.",
    price: "24,150",
    condition: "gentlyUsed",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/17271675301827375026.webp",
    userID: "user4",
  },
  {
    _id: "5",
    title: "HP Elitebook 840 G5",
    description: "A sleek and secure device for business use.",
    price: "31,500",
    condition: "goodCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/16851860051231278524.webp",
    userID: "user5",
  },
  {
    _id: "6",
    title: "Dell Latitude 7280",
    description: "Small and sturdy, great for professionals.",
    price: "28,350",
    condition: "fairCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/16851859051447280524.webp",
    userID: "user6",
  },
  {
    _id: "7",
    title: "Dell Latitude E7470",
    description: "Trusted choice for office tasks with reliable build.",
    price: "22,500",
    condition: "gentlyUsed",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/16851856511247453815.webp",
    userID: "user7",
  },
  {
    _id: "8",
    title: "Lenovo Thinkpad T420",
    description: "Classic ThinkPad with durable build and keyboard.",
    price: "18,000",
    condition: "fairCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/16851854321309724972.webp",
    userID: "user8",
  },
  {
    _id: "9",
    title: "HP Elitebook 840 G2",
    description: "Mid-range business laptop with solid performance.",
    price: "19,999",
    condition: "gentlyUsed",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/1696488136445198977.webp",
    userID: "user9",
  },
  {
    _id: "10",
    title: "HP Probook 640 G2",
    description: "Reliable performance for work and studies.",
    price: "21,999",
    condition: "goodCondition",
    images:
      "https://d3qqewlrl1nyfn.cloudfront.net/product/16851864411794513545.webp",
    userID: "user10",
  },
];

const Laptop = () => {
  return (
    <div className="mt-16">
      <Container>
        <SectionTitle title="Laptop Hot Collection" />
        <Link href="/products">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pb-6">
            {/* Product Cards */}
            {laptopsData.map((item, index) => (
              <ProductCart key={index} item={item} />
            ))}
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default Laptop;
