"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  grandTotalSelector,
  shippingAddressSelector,
  subTotalSelector,
} from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hook";

import Link from "next/link";

const PaymentProccedCart = () => {
  const subTotal = useAppSelector(subTotalSelector);
  const grandTotal = useAppSelector(grandTotalSelector);
  const shippingConst = useAppSelector(shippingAddressSelector);
  return (
    <>
      <Card className="border-none shadow">
        <CardTitle className="pl-4 text-xl">Payment Details</CardTitle>
        <CardContent>
          <div className="flex justify-between gap-2 mb-3">
            <p className="text-neutral-500">Subtotal</p>
            <p className="text-neutral-500">{currencyFormatter(subTotal)}</p>
          </div>
          <div className="flex justify-between gap-2 mb-3">
            <p className="text-neutral-500">Discount</p>
            <p className="text-neutral-500">{currencyFormatter(0)}</p>
          </div>
          <div className="flex justify-between gap-2 mb-3">
            <p className="text-neutral-500">Shipment cost</p>
            <p className="text-neutral-500">
              BDT {shippingConst?.price ? shippingConst?.price : "0.00"}
            </p>
          </div>
          <hr className="text-neutral-300" />
          <div className="flex justify-between gap-2 mt-3">
            <p className="text-[#1A1A1A]">Grand Total</p>
            <p className="text-[#1A1A1A]">{currencyFormatter(grandTotal)}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Link href="" className="w-full">
            <Button className="w-full bg-purple-500 hover:bg-purple-600 transition-all text-white cursor-pointer">
              Proceed to Payment
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default PaymentProccedCart;
