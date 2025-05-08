"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { addProduct } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { IListing } from "@/types";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { useState, useEffect } from "react";

const ProductCart = ({ item }: { item: IListing }) => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Check if the product is in the wishlist on component mount
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const isProductInWishlist = wishlist.some(
      (wishlistItem: IListing) => wishlistItem._id === item._id
    );
    setIsInWishlist(isProductInWishlist);
  }, [item._id]);

  const handleAddToCart = (product: IListing) => {
    dispatch(addProduct(product));
    toast.success("Item successfully added to Cart");
  };

  const handleAddToWishlist = (product: IListing) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    // Check if the product is already in the wishlist
    const isProductInWishlist = wishlist.some(
      (wishlistItem: IListing) => wishlistItem._id === product._id
    );

    if (isProductInWishlist) {
      // Remove the product from the wishlist
      const updatedWishlist = wishlist.filter(
        (wishlistItem: IListing) => wishlistItem._id !== product._id
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setIsInWishlist(false);
      toast.success("Product removed from your wishlist!");
    } else {
      // Add the product to the wishlist
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setIsInWishlist(true);
      toast.success("Product added to your wishlist!");
    }
  };

  return (
    <Card className="p-4 text-center relative bg-white border-none group hover:shadow-xl transition-all w-full">
      {pathName !== "/products" ? (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          Buy
        </span>
      ) : (
        <span
          onClick={() => handleAddToWishlist(item)}
          className="absolute top-2 left-2 cursor-pointer"
        >
          <Heart fill={isInWishlist ? "red" : "none"} stroke="currentColor" />
        </span>
      )}
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
        <p className="text-sm text-gray-600 mb-4">
          Starting from {item?.price}
        </p>
      </CardContent>
      {pathName === "/products" && (
        <CardFooter className="flex flex-col space-y-2.5">
          <Link href={`/products/${item._id}`} className="w-full">
            <Button className="bg-purple-500 text-white hover:bg-purple-600 font-medium cursor-pointer w-full rounded-full">
              More Details
            </Button>
          </Link>
          <Button
            onClick={() => handleAddToCart(item)}
            className="border-2 border-gray-600 font-medium cursor-pointer w-full rounded-full"
          >
            Add to Cart <ShoppingCart />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProductCart;
