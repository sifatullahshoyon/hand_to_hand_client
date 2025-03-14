import Container from "@/components/shared/Container";
import React from "react";
import styles from "./Products.module.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductFilter from "./ProductFilter/ProductFilter";
import { FilterIcon } from "lucide-react";
import ProductSortingByPrice from "./ProductSortingByPrice";
import { smartphonesData } from "../Home/Smartphone/Smartphone ";
import ProductCart from "@/components/shared/Carts/ProductCart";

const Products = () => {
  return (
    <div>
      <div className={`${styles.banner}`}>
        <div className="flex flex-col justify-center items-center h-[300px]">
          <h1 className="font-bold text-white text-4xl tracking-wide text-center pb-4">
            All Product
          </h1>
          <p className="text-gray-300">Home &gt; Products</p>
        </div>
      </div>
      {/* End Item Banner Img */}

      {/* Start Item Section */}
      <div className="my-16 p-6">
        <Container>
          {/* start search functionality */}
          <div className="flex w-full max-w-1/2 items-center space-x-2 mb-16 mx-auto">
            <Input
              type="text"
              placeholder="Search By Product Name"
              className=" placeholder:text-gray-400"
            />
            <Button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 transition text-white px-8"
            >
              Search
            </Button>
          </div>
          {/* End search functionality */}

          <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
            {/* start filter with btn section */}
            <div className="col-span-2 bg-gray-50 shadow-xl rounded p-6">
              <div className="flex flex-row justify-between items-center flex-wrap gap-2 space-y-2 lg:space-y-0 mb-6">
                <Button className="flex items-center gap-2 text-xl font-bold px-4">
                  <FilterIcon size={25} />
                  <p className="font-bold font-2xl">Filter</p>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-purple-500 border-2  hover:bg-purple-500 hover:text-white font-normal tracking-wide transition cursor-pointer"
                >
                  Reset Filter
                </Button>
              </div>
              {/* End filter with btn section */}

              <ProductFilter />
            </div>
            {/* End filter section */}

            {/* start Product section */}
            <div className="col-span-6  p-6">
              <div className="flex justify-between items-center gap-2 flex-wrap mb-6">
                <p className="font-bold text-xl text-[#1A1A1A] tracking-wide">
                  150 Products
                </p>
                <ProductSortingByPrice />
              </div>
              {/* End total product & product options */}

              {/* start product cart */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6">
                {/* Product Cards */}
                {smartphonesData?.map((item, index) => (
                  <ProductCart key={index} item={item} />
                ))}
              </div>
            </div>
            {/* End Product section */}
          </div>
        </Container>
      </div>

      {/* End Item Section */}
    </div>
  );
};

export default Products;
