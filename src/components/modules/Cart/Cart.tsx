"use client";
import React from "react";
import styles from "../Products/Products.module.css";
import Container from "@/components/shared/Container";
import PaymentCart from "@/components/shared/Carts/PaymentCart";
import { useAppSelector } from "@/redux/hook";
import { orderedProductsSelector } from "@/redux/features/cartSlice";
import Image from "next/image";
import CheckoutForm from "../Checkout/CheckoutForm";

const Cart = () => {
  const products = useAppSelector(orderedProductsSelector);
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
          <div className="md:flex md:flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 gap-4  w-full">
            <div className="w-full">
              {products.length === 0 && (
                <div className="text-center text-gray-500">
                  <p className="text-xl font-semibold">Your cart is empty</p>
                  <p className="mt-2">
                    Looks like your cart is on vacation—bring it back to work by
                    adding some items!
                  </p>
                  <div className="flex justify-center items-center ">
                    <Image
                      src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-illustration-download-in-svg-png-gif-file-formats--is-explore-box-states-pack-design-development-illustrations-3385483.png?f=webp"
                      alt="empty cart"
                      width={300}
                      height={300}
                      placeholder="blur"
                      loading="lazy"
                      blurDataURL="all"
                    />
                  </div>
                </div>
              )}
              {products?.map((product) => (
                <PaymentCart key={product?._id} product={product} />
              ))}
            </div>
            <div className="w-full md:w-[60%] lg:w-[60%]">
              <CheckoutForm products={products} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cart;
