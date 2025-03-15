import React from "react";
import styles from "../Products/Products.module.css";
import Container from "@/components/shared/Container";
import CheckoutForm from "./CheckoutForm";
import CheckoutOrderCart from "@/components/shared/Carts/CheckoutOrderCart";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Checkout = () => {
  return (
    <>
      <div className={`${styles.banner}`}>
        <div className="flex flex-col justify-center items-center h-[300px]">
          <h1 className="font-bold text-white text-4xl tracking-wide text-center pb-4">
            Checkout Page
          </h1>
          <p className="text-gray-300">Home &gt; Checkout</p>
        </div>
      </div>
      {/* End Item Banner Img */}
      <div className="my-16 p-2">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {/* checkout form */}
            <div>
              <CheckoutForm />
              <Link
                href="/cart"
                className="flex items-center gap-2 mt-6 ml-16 mb-2 text-purple-500"
              >
                <ArrowLeft size={18} /> Return Cart
              </Link>
            </div>
            {/* Order information */}
            <CheckoutOrderCart />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Checkout;
