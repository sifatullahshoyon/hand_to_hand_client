"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FormSchema = z.object({
  type: z.enum(["all", "inStock", "outOfStock"], {
    required_error: "You need to select a notification type.",
  }),
});

const ProductFilterRadio = ({
  onAvailabilityChange,
}: {
  onAvailabilityChange: (value: "all" | "in stock" | "out of stock") => void;
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: "all",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const value =
      data.type === "inStock"
        ? "in stock"
        : data.type === "outOfStock"
        ? "out of stock"
        : "all";
    onAvailabilityChange(value);
    console.log("Selected availability:", value);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-2">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-4 font-roboto">
              <FormLabel className="text-lg font-bold">Availability</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value} // ✅ Ensures controlled behavior
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">All</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="inStock" />
                    </FormControl>
                    <FormLabel className="font-normal">In Stock</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="outOfStock" />
                    </FormControl>
                    <FormLabel className="font-normal">Out of Stock</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ProductFilterRadio;
