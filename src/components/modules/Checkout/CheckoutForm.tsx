"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
// import { useAppSelector } from "@/redux/hook";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  ICartProduct,
  orderSelector,
  // shippingAddressSelector,
  shippingCostSelector,
  updateShippingAddress,
} from "@/redux/features/cartSlice";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
// import Link from "next/link";

const shippings = [
  {
    value: "freeShipping",
    label: "Free Shipping",
    price: "0.00",
    days: "7-30 Business Days",
  },
  {
    value: "regularShipping",
    label: "Regular Shipping",
    price: "7.50",
    days: "3-14 Business Days",
  },
  {
    value: "expressShipping",
    label: "Express Shipping",
    price: "22.50",
    days: "3-7 Business Days",
  },
];

const FormSchema = z.object({
  user: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }).email(),
  address: z.string({ required_error: "Address is required" }),
  type: z.enum(shippings.map((ship) => ship.value) as [string, ...string[]], {
    required_error: "You need to select a shipation.",
  }),
});

const CheckoutForm = ({ products }: { products: ICartProduct[] }) => {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const router = useRouter();
  //! start shipping address
  // const shippingAddress = useAppSelector(shippingAddressSelector);
  // console.log(shippingAddress, "shipping address");

  //! end shipping address

  const shippingCost = useAppSelector(shippingCostSelector);

  console.log(shippingCost);

  const order = useAppSelector(orderSelector);

  console.log(order);

  // form validation
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      user: user?.name || "",
      email: user?.email || "",
      type: "regularShipping",
    },
  });

  // Destructure form value
  const {
    formState: { isSubmitting },
  } = form;

  // submit handler function
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // data.type অনুযায়ী সঠিক শিপিং তথ্য বের করা
    const selectedShipping = shippings.find((ship) => ship.value === data.type);

    // ফাইনাল ডাটা
    const formData = {
      name: data.user,
      email: data.email,
      address: data.address,
      type: data.type,
      price: selectedShipping ? selectedShipping.price : "0.00",
    };

    // dispatch(updateShippingAddress(formData));

    console.log(formData, "form data");
    dispatch(updateShippingAddress(formData));

    setTimeout(() => {
      router.push("/checkout");
    }, 100);
  };

  return (
    <>
      <Card className="md:w-4/5 h-full mx-auto flex flex-col justify-center shadow-lg overflow-hidden rounded border-none">
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full items-center gap-4 "
            >
              <FormField
                control={form.control}
                name="user"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="user" className="text-lg font-bold">
                      User
                    </Label>
                    <FormControl>
                      <Input
                        id="user"
                        placeholder="Enter Your Name"
                        {...field}
                        readOnly
                        className="placeholder:text-[#c0bfbd] bg-gray-200"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* End user name  */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="email" className="text-lg font-bold">
                      Email
                    </Label>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="Enter Your Email"
                        {...field}
                        readOnly
                        className="placeholder:text-[#c0bfbd] bg-gray-200"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* End user email  */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="address" className="text-lg font-bold">
                      Ship to
                    </Label>
                    <FormControl>
                      <Input
                        id="address"
                        placeholder="Enter Your Shipping Address"
                        {...field}
                        value={field.value || ""}
                        className="placeholder:text-[#c0bfbd]"
                        required
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* End address  */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-4 font-roboto">
                    <Label className="text-lg font-bold">Shipping Method</Label>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex flex-col space-y-0.5"
                      >
                        {shippings.map((ship) => (
                          <FormItem
                            key={ship.value}
                            className="flex justify-between items-center space-x-3"
                          >
                            <div className="flex  gap-2">
                              <FormControl className="">
                                <RadioGroupItem value={ship.value} />
                              </FormControl>
                              <div>
                                <Label className="font-normal mb-2">
                                  {ship.label}
                                </Label>
                                <Label className="font-normal">
                                  {ship.days}
                                </Label>
                              </div>
                            </div>
                            <Label className="font-normal">${ship.price}</Label>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* End Shipping Method */}

              <Button
                type="submit"
                className="w-full  bg-purple-500 hover:bg-purple-600 text-white tracking-wide cursor-pointer"
                disabled={products?.length === 0}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Proceed to checkout"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default CheckoutForm;
