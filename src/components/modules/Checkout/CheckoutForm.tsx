"use client";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
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
  address: z.string({ required_error: "Address is required" }),
  type: z.enum(shippings.map((ship) => ship.value) as [string, ...string[]], {
    required_error: "You need to select a shipation.",
  }),
});

const CheckoutForm = () => {
  // form validation
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { type: "regularShipping" },
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
      address: data.address,
      type: data.type,
      price: selectedShipping ? selectedShipping.price : "0.00",
    };

    console.log(formData);
  };
  return (
    <div>
      <Card className="md:w-4/5 h-full mx-auto flex flex-col justify-center shadow overflow-hidden rounded border-none">
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full items-center gap-4"
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
                        value={field.value || ""}
                        className="placeholder:text-[#c0bfbd]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* End Email  */}
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
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "SIGN IN"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutForm;
