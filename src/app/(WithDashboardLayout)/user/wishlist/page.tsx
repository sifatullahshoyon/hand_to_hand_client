"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IListing } from "@/types";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash } from "lucide-react";
import { useAppDispatch } from "@/redux/hook";
import { addProduct } from "@/redux/features/cartSlice";
import { toast } from "sonner";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<IListing[]>([]);

  const dispatch = useAppDispatch();

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  // Remove Product from Wishlist
  const handleRemoveFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Add Product to Cart
  const handleAddToCart = (product: IListing) => {
    dispatch(addProduct(product));
    const toastId = "toastId";
    toast.success("Item successfully added to Cart", { id: toastId });
  };

  return (
    <div className="p-6">
      {/* Headline */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Your Wishlist
      </h1>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div
              key={product._id}
              className=" rounded-lg shadow-lg p-4 flex flex-col items-center bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={product?.images}
                alt={product?.title}
                className="object-cover rounded mb-4"
                width={150}
                height={150}
                placeholder="blur"
                loading="lazy"
                blurDataURL="all"
              />
              <h3 className="font-semibold text-center text-lg text-gray-800">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">${product.price}</p>
              <div className="flex gap-2">
                {/* Add to Cart Button */}
                <Button
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>

                {/* Remove Button */}
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                  onClick={() => handleRemoveFromWishlist(product._id)}
                >
                  <Trash className="w-4 h-4" />
                  Remove
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Your wishlist is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
