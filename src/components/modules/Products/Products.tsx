import Container from "@/components/shared/Container";
import React from "react";
import styles from "./Products.module.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductFilter from "./ProductFilter/ProductFilter";

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
      {/* End Product Banner Img */}

      {/* Start Product Section */}

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
              className="bg-purple-500 hover:bg-purple-600 transition text-white"
            >
              Search
            </Button>
          </div>
          {/* End search functionality */}

          <div className="grid grid-cols-6 gap-6">
            {/* start filter section */}
            <div className="col-span-2 border-amber-200 border">
              <ProductFilter />
            </div>
            {/* End filter section */}

            {/* start Product section */}
            <div className="col-span-4 border-b-blue-700 border">
              <p> product components</p>
            </div>
            {/* End Product section */}
          </div>
        </Container>
      </div>

      {/* End Product Section */}
    </div>
  );
};

export default Products;
