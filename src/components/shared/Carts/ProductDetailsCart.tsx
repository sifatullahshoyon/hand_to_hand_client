import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { BadgeCheck, Minus, Plus, Star, Store, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductDetailsCart = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded bg-gray-50 px-4 py-6">
        {/* card img */}
        <div>
          <Image
            src="https://d3qqewlrl1nyfn.cloudfront.net/product/16851654191184568877.webp"
            width={500}
            height={500}
            alt="product img"
            className="mx-auto"
            placeholder="blur"
            blurDataURL="all"
            loading="lazy"
          />
        </div>
        {/* card content */}
        <Card className="lg:w-4/5 px-6 border-none shadow-lg">
          <CardTitle>
            <h1 className="pl-4 font-bold text-balance text-[#1A1A1A] ">
              Lenovo Ideapad Slim 3i
            </h1>
          </CardTitle>
          <CardContent>
            <CardDescription>
              <p className="text-neutral-500 text-balance">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem laudantium necessitatibus dicta quia expedita,
                deleniti dolores? Non libero sit dolorem!
              </p>
            </CardDescription>
            <div className="flex flex-row items-center space-x-6 pt-6">
              <Button>
                <Star fill="orange" /> 4.5
              </Button>
              <div className="border-r-2 w-2 h-6 border-neutral-300"></div>
              <p className="tracking-wide text-neutral-500">sold 125</p>
            </div>
            {/* end rating & sold section */}
            <div className="md:flex md:flex-row items-center flex-wrap space-y-2 lg:space-y-0 py-6 gap-8">
              <div className="flex items-center gap-2">
                <Store className="text-purple-500" size={20} />
                <p className="text-neutral-500 text-sm">In Stock</p>
              </div>
              {/* end stock */}
              <div className="flex items-center gap-2">
                <BadgeCheck className="text-purple-500" size={20} />
                <p className="text-neutral-500 text-sm">Guaranteed</p>
              </div>
              {/* end Guaranteed */}
              <div className="flex items-center gap-2">
                <Truck className="text-purple-500" size={20} />
                <p className="text-neutral-500 text-sm">Free Delivery</p>
              </div>
              {/* end Free Delivery */}
            </div>
            {/* end facalitlies section */}
            <p className="pb-4 text-neutral-500">
              Price : <span className="text-[#1A1A1A]">$50</span>
            </p>
            <p className="pb-4 text-neutral-500">
              Color : <span className="text-[#1A1A1A]">Black</span>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-neutral-500">Quantity</p>
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
            {/* End Quantity */}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Link href="/cart" className="w-full">
              <Button className="text-[#1A1A1A] border-neutral-300 border hover:border-purple-500 hover:border-2 w-full font-medium text-base tracking-wide cursor-pointer transition-all rounded-2xl">
                Add to cart
              </Button>
            </Link>
            <Link href="/checkout" className="w-full">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white w-full font-medium text-base tracking-wide cursor-pointer transition-all rounded-2xl">
                Buy Now
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ProductDetailsCart;
