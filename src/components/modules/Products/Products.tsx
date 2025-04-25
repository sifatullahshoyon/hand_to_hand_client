"use client";

import React, { useState, useMemo } from "react";
import Container from "@/components/shared/Container";
import styles from "./Products.module.css";
import { Button } from "@/components/ui/button";
import ProductFilter from "./ProductFilter/ProductFilter";
import { FilterIcon } from "lucide-react";
import ProductSortingByPrice from "./ProductSortingByPrice";
import ProductCart from "@/components/shared/Carts/ProductCart";
import { IListing } from "@/types";
import { Input } from "@/components/ui/input";

interface ProductsProps {
  products: IListing[];
}

const Products = ({ products }: ProductsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [availability, setAvailability] = useState<
    "all" | "in stock" | "out of stock"
  >("all");

  // ✅ Filtering with search and availability
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchName = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchAvailability =
        availability === "all"
          ? true
          : availability === "in stock"
          ? product.availability === "in stock"
          : product.availability === "out of stock";

      return matchName && matchAvailability;
    });
  }, [products, searchTerm, availability]);

  // console.log("filteredProducts", filteredProducts);
  // console.log("products", products);
  const handleSearch = () => {
    // Optional: add manual search trigger functionality if needed
  };

  const handleResetFilter = () => {
    setSearchTerm("");
    setAvailability("all");
  };

  return (
    <>
      <div className={`${styles.banner}`}>
        <div className="flex flex-col justify-center items-center h-[300px]">
          <h1 className="font-bold text-white text-4xl tracking-wide text-center pb-4">
            All Products
          </h1>
          <p className="text-gray-300">Home &gt; Products</p>
        </div>
      </div>

      <div className="my-16 p-6">
        <Container>
          {/* 🔍 Search Field */}
          <div className="flex w-full max-w-1/2 items-center space-x-2 mb-16 mx-auto">
            <Input
              type="text"
              placeholder="Search By Product Name"
              className="placeholder:text-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              type="button"
              className="bg-purple-500 hover:bg-purple-600 transition text-white px-8 cursor-pointer"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
            {/* 🔘 Filter Section */}
            <div className="col-span-2 bg-gray-50 shadow-xl rounded p-6">
              <div className="flex flex-row justify-between items-center flex-wrap gap-2 space-y-2 lg:space-y-0 mb-6">
                <Button className="flex items-center gap-2 text-xl font-bold px-4">
                  <FilterIcon size={25} />
                  <span>Filter</span>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-purple-500 border-2 hover:bg-purple-500 hover:text-white font-normal tracking-wide transition cursor-pointer"
                  onClick={handleResetFilter}
                >
                  Reset Filter
                </Button>
              </div>

              {/* ✅ Product Filter with props */}
              <ProductFilter onAvailabilityChange={setAvailability} />
            </div>

            {/* 🛒 Product Listing */}
            <div className="col-span-6 p-6">
              <div className="flex justify-between items-center gap-2 flex-wrap mb-6">
                <p className="font-bold text-xl text-[#1A1A1A] tracking-wide">
                  {filteredProducts.length} Products
                </p>
                <ProductSortingByPrice />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-6">
                {filteredProducts.map((item, index) => (
                  <ProductCart key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Products;

//! ======================= end  =================================
