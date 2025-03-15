import React from "react";
import PaymentCart from "./PaymentCart";
import PaymentProccedCart from "@/components/modules/Cart/PaymentProccedCart";

const CheckoutOrderCart = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h1 className="my-6 text-2xl font-bold text-[#1A1A1A]">Your Order</h1>
      <div className="mb-6">
        <PaymentCart />
      </div>
      <PaymentProccedCart />
    </div>
  );
};

export default CheckoutOrderCart;
