"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  clearCart,
  grandTotalSelector,
  orderedProductsSelector,
  shippingAddressSelector,
  subTotalSelector,
} from "@/redux/features/cartSlice";
import { useCreateOrderMutation } from "@/redux/features/order/order";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";

const PaymentProccedCart = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(orderedProductsSelector);
  const subTotal = useAppSelector(subTotalSelector);
  const grandTotal = useAppSelector(grandTotalSelector);
  const shippingConst = useAppSelector(shippingAddressSelector);

  //* place order function

  const [createOrder, { isLoading, isSuccess, data, isError }] =
    useCreateOrderMutation();

  const handlePlaceOrder = async (
    products: { _id: string; orderQuantity: number }[]
  ) => {
    try {
      // console.log("Cart products before filtering:", products);

      const validProducts = products.map((product) => ({
        product: product._id,
        quantity: product.orderQuantity,
      }));

      // console.log("Valid products being sent to backend:", validProducts);

      if (validProducts.length === 0) {
        toast.error("No valid products to place an order. Please try again.");
        return;
      }

      // Send the transformed products to the backend
      const res = await createOrder({ products: validProducts }).unwrap();
      console.log("Order response:", res);
    } catch (error) {
      console.error(error);
    }
  };

  //* loading , error handling

  const toastId = "cart";

  useEffect(() => {
    if (isLoading) toast.loading("processing Order....", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });

      // clear cart
      dispatch(clearCart());

      if (data?.data) {
        setTimeout(() => {
          window.location.href = data?.data?.paymentUrl;
        }, 1000);
      }
    }

    if (isError) {
      toast.error(JSON.stringify(isError), { id: toastId });
    }
  }, [data?.data, data?.message, dispatch, isError, isLoading, isSuccess]);
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
            <Button
              onClick={() => handlePlaceOrder(products)}
              className="w-full bg-purple-500 hover:bg-purple-600 transition-all text-white cursor-pointer"
            >
              Proceed to Payment
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default PaymentProccedCart;
