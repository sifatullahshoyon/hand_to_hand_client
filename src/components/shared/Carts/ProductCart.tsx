"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProductCart = ({ item }: { item: IProduct }) => {
  console.log("item id => ", item.id);
  const pathName = usePathname();
  console.log("path name in product cart => ", pathName);
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
        <p className="text-sm text-gray-600 mb-6">
          Starting from {item?.price}
        </p>
      </CardContent>
      {pathName === "/products" && (
        <CardFooter>
          <Link href={`/products/${item.id}`}>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white absolute bottom-4 font-medium">
              More Details
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProductCart;
