import Container from "@/components/shared/Container";
import React from "react";
import styles from "../Products/Products.module.css";

import ProductDetailsCart from "@/components/shared/Carts/ProductDetailsCart";

const SingleProduct = () => {
  return (
    <>
      <div className={`${styles.banner}`}>
        <div className="flex flex-col justify-center items-center h-[300px]">
          <h1 className="font-bold text-white text-4xl tracking-wide text-center pb-4">
            Product Details Page
          </h1>
          <p className="text-gray-300">
            Home &gt; Products &gt; Product Details
          </p>
        </div>
      </div>
      {/* End Item Banner Img */}

      {/* Start Product Details Section */}
      <div className="my-16 p-6">
        <Container>
          <div>
            <div>
              <ProductDetailsCart />
            </div>
          </div>
        </Container>
      </div>
      {/* End Product Details Section */}
    </>
  );
};

export default SingleProduct;
