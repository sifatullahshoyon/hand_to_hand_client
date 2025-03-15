import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { BadgeCheck, Minus, Plus, Trash2, Truck } from "lucide-react";
import Image from "next/image";
import React from "react";

const PaymentCart = () => {
  return (
    <>
      <Card className="flex lg:flex-row justify-between gap-6 rounded bg-gray-50 px-4 py-6  mx-auto border-none shadow-lg">
        <div className="w-full lg:w-[25%] p-2">
          <Image
            src="https://d3qqewlrl1nyfn.cloudfront.net/product/16851654191184568877.webp"
            width={200}
            height={200}
            alt="product img"
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
              Lenovo Ideapad Slim 3i
            </h1>
          </CardTitle>
          <CardDescription>
            <p className="pb-4 text-neutral-500">
              Color : <span className="text-[#1A1A1A]">Black</span>
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
                Price : <span className="text-[#1A1A1A]">$50</span>
              </p>
              {/* start product quantity option */}
              <div className="flex items-center gap-2">
                <p className="text-neutral-500">
                  <Trash2 size={18} className="text-rose-400" />
                </p>
                <div className="flex items-center gap-2">
                  <Button>
                    {" "}
                    <Minus />{" "}
                  </Button>
                  <span>2</span>
                  <Button>
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
