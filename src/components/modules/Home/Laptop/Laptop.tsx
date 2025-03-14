import ProductCart from "@/components/shared/Carts/ProductCart";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";
import React from "react";

const leptopsData = [
  {
    name: "Lenovo Ideapad Slim 3i",
    price: "51,400",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/16851654191184568877.webp",
  },
  {
    name: "HP Elitebook 840 G3",
    price: "21,052",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/1685186575392313556.webp",
  },
  {
    name: "Dell Latitude 7490",
    price: "27,000",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/16851865551162362832.webp",
  },
  {
    name: "HP Elitebook 840 G3",
    price: "24,150",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/17271675301827375026.webp",
  },
  {
    name: "HP Elitebook 840 G5",
    price: "31,500",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/16851860051231278524.webp",
  },
  {
    name: "Dell Latitude 7280",
    price: "28,350",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/16851859051447280524.webp",
  },
  {
    name: "Dell Latitude E7470",
    price: "22,500",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/16851856511247453815.webp",
  },
  {
    name: "Lenovo Thinkpad T420",
    price: "18000",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/16851854321309724972.webp",
  },
  {
    name: "HP Elitebook 840 G2",
    price: "19,999",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/1696488136445198977.webp",
  },
  {
    name: "HP Probook 640 G2",
    price: "21,999",
    img: "https://d3qqewlrl1nyfn.cloudfront.net/product/16851864411794513545.webp",
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
            {leptopsData.map((item, index) => (
              <ProductCart key={index} item={item} />
            ))}
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default Laptop;
