"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PaymentProccedCart = () => {
  const pathName = usePathname();
  return (
    <>
      <Card
        className={`${
          pathName === "/cart" ? "border-none shadow " : "bg-gray-50"
        } border-none `}
      >
        {pathName === "/cart" && (
          <CardTitle className="pl-4 text-xl">Payment Details</CardTitle>
        )}
        <CardContent>
          <div className="flex justify-between gap-2 mb-3">
            <p className="text-neutral-500">Subtotal</p>
            <p className="text-neutral-500">$516.39</p>
          </div>
          <div className="flex justify-between gap-2 mb-3">
            <p className="text-neutral-500">Discount</p>
            <p className="text-neutral-500">$00.0</p>
          </div>
          <div className="flex justify-between gap-2 mb-3">
            <p className="text-neutral-500">Shipment cost</p>
            <p className="text-neutral-500">$20</p>
          </div>
          <hr className="text-neutral-300" />
          <div className="flex justify-between gap-2 mt-3">
            <p className="text-[#1A1A1A]">Grand Total</p>
            <p className="text-[#1A1A1A]">$200.69</p>
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/checkout" className="w-full">
            <Button className="w-full bg-purple-500 hover:bg-purple-600 transition-all text-white cursor-pointer">
              Proceed to checkout
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default PaymentProccedCart;
