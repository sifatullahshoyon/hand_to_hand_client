import { Card, CardContent } from "@/components/ui/card";
import { IProduct } from "@/types";
import Image from "next/image";
import React from "react";

const ProductCart = ({ item }: { item: IProduct }) => {
  //   const { img, name, price } = item;
  return (
    <Card className="p-4 text-center relative bg-white border-none group hover:shadow-xl transition-all">
      <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
        Buy
      </span>
      <CardContent>
        <Image
          src={item?.img}
          width={100}
          height={100}
          alt={item?.name}
          className="mx-auto"
        />
        <h3 className="py-4 font-semibold text-balance text-[#1A1A1A] group-hover:text-purple-500">
          {item?.name}
        </h3>
        <p className="text-sm text-gray-600">Starting from {item?.price}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCart;
