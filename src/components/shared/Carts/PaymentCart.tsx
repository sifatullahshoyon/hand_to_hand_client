"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import {
  decrementOrderQuantity,
  ICartProduct,
  incrementOrderQuantity,
  removeProduct,
} from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { BadgeCheck, Minus, Plus, Trash2, Truck } from "lucide-react";
import Image from "next/image";
import React from "react";

const PaymentCart = ({ product }: { product: ICartProduct }) => {
  const { _id, images, title, color, price } = product;

  const dispatch = useAppDispatch();

  // order quantity increase & decrease function
  const handleIncrementQuantity = (id: string) => {
    dispatch(incrementOrderQuantity(id));
  };

  const handleDecrementQuantity = (id: string) => {
    dispatch(decrementOrderQuantity(id));
  };
  // product remove from cart
  const handleRemoveProductFromCart = (id: string) => {
    dispatch(removeProduct(id));
  };
  return (
    <>
      <Card className="flex lg:flex-row justify-between gap-6  px-4 py-6  mx-auto border-none bg-gray-50 shadow-lg mb-6">
        <div className="w-full lg:w-[25%] p-2">
          <Image
            src={images ? images : "Img Not Found"}
            width={200}
            height={200}
            alt={title}
            className="object-cover"
            placeholder="blur"
            blurDataURL="all"
            loading="lazy"
          />
        </div>
        <CardContent className=" w-full">
          {/* card img */}
          <CardTitle>
            <h1 className="pb-4 font-bold text-balance text-[#1A1A1A] ">
              {title ? title : "Title Not Found"}
            </h1>
          </CardTitle>
          <CardDescription>
            <p className="pb-4 text-neutral-500">
              Color :{" "}
              <span className="text-[#1A1A1A]">{color ? color : "Black"}</span>
            </p>
            {/* end color */}
            <div className="flex items-center gap-2 pb-4">
              <BadgeCheck className="text-purple-500" size={20} />
              <p className="text-neutral-500 text-sm">Guaranteed</p>
            </div>
            {/* end Guaranteed */}
            <div className="flex items-center gap-2 pb-4">
              <Truck className="text-purple-500" size={20} />
              <p className="text-neutral-500 text-sm">Free Delivery</p>
            </div>
            <div className="flex justify-between items-center flex-wrap gap-2">
              <p className="pb-4 text-neutral-500 text-base">
                Price :{" "}
                <span className="text-[#1A1A1A]">
                  BDT {price ? price : "0.00"}
                </span>
              </p>
              {/* start product quantity option */}

              <div className="flex items-center gap-2">
                <p className="text-neutral-500">
                  <Trash2
                    onClick={() => handleRemoveProductFromCart(_id)}
                    size={18}
                    className="text-rose-400"
                  />
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => handleDecrementQuantity(_id)}
                    // disabled={product?.orderQuantity > 1}
                  >
                    {" "}
                    <Minus />{" "}
                  </Button>
                  <span>{product?.orderQuantity}</span>
                  <Button onClick={() => handleIncrementQuantity(_id)}>
                    <Plus />
                  </Button>
                </div>
              </div>

              {/* end product quantity option */}
            </div>
            {/* end Free Delivery */}
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
};

export default PaymentCart;
