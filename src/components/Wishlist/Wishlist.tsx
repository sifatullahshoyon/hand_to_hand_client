"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { IListing } from "@/types";
import TooltipTitle from "../shared/Tooltip/TooltipTitle";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash } from "lucide-react";
import { useAppDispatch } from "@/redux/hook";
import { addProduct } from "@/redux/features/cartSlice";
import { toast } from "sonner";

const heartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-heart"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const Wishlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wishlist, setWishlist] = useState<IListing[]>([]);

  const dispatch = useAppDispatch();

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  const handleWishlistClick = () => {
    setIsModalOpen(true);
  };

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
    <div className="md:flex justify-between items-center gap-4 space-y-6 md:space-y-0">
      {/* Wishlist Button */}
      <div className="relative cursor-pointer" onClick={handleWishlistClick}>
        <TooltipTitle element={heartIcon} content="Wish List"></TooltipTitle>
        <Badge className="absolute -top-4 left-3 bg-[#1A1A1A] text-white">
          {wishlist.length}
        </Badge>
      </div>

      {/* Wishlist Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white border-0">
          <DialogHeader>
            <DialogTitle>Your Wishlist</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {wishlist.length > 0 ? (
              wishlist.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={product?.images}
                      alt={product?.title}
                      className="object-cover rounded"
                      width={64}
                      height={64}
                    />
                    <div>
                      <h3 className="font-semibold">{product.title}</h3>
                      <p className="text-sm text-gray-500">${product.price}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {/* Add to Cart Button */}
                    <Button
                      className="bg-purple-500 hover:bg-purple-600 text-white cursor-pointer"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart <ShoppingCart />
                    </Button>

                    {/* Remove Button */}
                    <Button
                      className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                      onClick={() => handleRemoveFromWishlist(product._id)}
                    >
                      <Trash />
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                Your wishlist is empty.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Wishlist;
