"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IListing } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProductCart = ({ item }: { item: IListing }) => {
  const pathName = usePathname();

  return (
    <Card className="p-4 text-center relative bg-white border-none group hover:shadow-xl transition-all">
      <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
        Buy
      </span>
      <CardContent>
        <Image
          src={item?.images}
          width={100}
          height={100}
          alt={item?.title}
          className="mx-auto"
          placeholder="blur"
          blurDataURL="all"
          loading="lazy"
        />
        <h3 className="py-4 font-semibold text-balance text-[#1A1A1A] group-hover:text-purple-500">
          {item?.title}
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Starting from {item?.price}
        </p>
      </CardContent>
      {pathName === "/products" && (
        <CardFooter>
          <Link href={`/products/${item._id}`}>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white absolute bottom-4 font-medium cursor-pointer">
              More Details
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProductCart;
