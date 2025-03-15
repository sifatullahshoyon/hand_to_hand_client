import React from "react";
import styles from "../Products/Products.module.css";
import Container from "@/components/shared/Container";
import PaymentCart from "@/components/shared/Carts/PaymentCart";
import PaymentProccedCart from "./PaymentProccedCart";

const Cart = () => {
  return (
    <>
      <div className={`${styles.banner}`}>
        <div className="flex flex-col justify-center items-center h-[300px]">
          <h1 className="font-bold text-white text-4xl tracking-wide text-center pb-4">
            Cart Page
          </h1>
          <p className="text-gray-300">Home &gt; Cart</p>
        </div>
      </div>
      {/* End Item Banner Img */}
      <div className="my-16 p-2">
        <Container>
          <div className="md:flex md:flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 gap-12  w-full">
            <div className="w-full">
              <PaymentCart />
            </div>
            <div className="w-full md:w-[60%] lg:w-[40%]">
              <PaymentProccedCart />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cart;
