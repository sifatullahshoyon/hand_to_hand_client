// "use client";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
// } from "@/components/ui/card";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Loader2 } from "lucide-react";
// import React from "react";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import { listingFormValidationSchema } from "./ListingsFormValidation";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { createListing } from "@/services/listings";
// import { toast } from "sonner";

// const CreateListingsForm = () => {
//   // form validation
//   const form = useForm({
//     resolver: zodResolver(listingFormValidationSchema),
//   });

//   // Destructure form value
//   const {
//     formState: { isSubmitting },
//   } = form;

//   // submit handler function
//   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
//     try {
//       const res = await createListing(data);
//       if (res?.status === true) {
//         toast.success(res?.message);
//         form.reset();
//       } else {
//         toast.error(res?.message);
//       }
//     } catch (error: any) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <div className="w-full md:w-[80%] lg:w-[50%] mx-auto h-full flex flex-col justify-center shadow-none overflow-scroll md:overflow-hidden rounded mb-6">
//         <Card className=" mx-auto flex flex-col justify-center shadow-xl overflow-scroll md:overflow-hidden rounded border-none bg-white">
//           <CardHeader>
//             <CardDescription className=" text-[#1A1A1A] text-2xl text-center font-bold">
//               Add to <span className="text-purple-500 ">Listing</span>
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="grid w-full items-center gap-4"
//               >
//                 <FormField
//                   control={form.control}
//                   name="title"
//                   render={({ field }) => (
//                     <FormItem>
//                       <Label htmlFor="name" className="text-base font-bold">
//                         Title
//                       </Label>
//                       <FormControl>
//                         <Input
//                           id="title"
//                           placeholder="Enter Listing Title"
//                           {...field}
//                           value={field.value || ""}
//                           className="placeholder:text-[#c0bfbd] w-full"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-400" />
//                     </FormItem>
//                   )}
//                 />
//                 {/* End Title */}
//                 <FormField
//                   control={form.control}
//                   name="description"
//                   render={({ field }) => (
//                     <FormItem>
//                       <Label
//                         htmlFor="description"
//                         className="text-base font-bold"
//                       >
//                         Description
//                       </Label>
//                       <FormControl>
//                         <Input
//                           id="description"
//                           placeholder="Enter Your Listing Description"
//                           {...field}
//                           value={field.value || ""}
//                           className="placeholder:text-[#c0bfbd]"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-400" />
//                     </FormItem>
//                   )}
//                 />
//                 {/* End Email */}
//                 <FormField
//                   control={form.control}
//                   name="price"
//                   render={({ field }) => (
//                     <FormItem>
//                       <Label htmlFor="price" className="text-base font-bold">
//                         Price
//                       </Label>
//                       <FormControl>
//                         <Input
//                           id="price"
//                           placeholder="Enter Listing Price"
//                           {...field}
//                           value={field.value || ""}
//                           className="placeholder:text-[#c0bfbd]"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-400" />
//                     </FormItem>
//                   )}
//                 />
//                 {/* End price */}

//                 <FormField
//                   control={form.control}
//                   name="images"
//                   render={({ field }) => (
//                     <FormItem>
//                       <Label htmlFor="images" className="text-base font-bold">
//                         Image Link
//                       </Label>
//                       <FormControl>
//                         <Input
//                           id="images"
//                           placeholder="Enter Your Listing Img Link"
//                           {...field}
//                           value={field.value || ""}
//                           className="placeholder:text-[#c0bfbd]"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-400" />
//                     </FormItem>
//                   )}
//                 />
//                 {/* End img */}

//                 <FormField
//                   control={form.control}
//                   name="color"
//                   render={({ field }) => (
//                     <FormItem>
//                       <Label htmlFor="color" className="text-base font-bold">
//                         Listing Color
//                       </Label>
//                       <FormControl>
//                         <Input
//                           id="color"
//                           placeholder="Black"
//                           {...field}
//                           value={field.value || ""}
//                           className="placeholder:text-[#c0bfbd]"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-400" />
//                     </FormItem>
//                   )}
//                 />
//                 {/* End color */}

//                 <FormField
//                   control={form.control}
//                   name="availability"
//                   render={({ field }) => (
//                     <FormItem className=" space-y-2">
//                       <FormLabel className="text-base font-bold">
//                         Availability
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           value={field.value}
//                           className="flex flex-row space-x-1"
//                         >
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="in stock" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               In Stock
//                             </FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="out of stock" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Out of Stock
//                             </FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                       <FormMessage className="text-red-400" />
//                     </FormItem>
//                   )}
//                 />
//                 {/* End Availability */}

//                 <FormField
//                   control={form.control}
//                   name="condition"
//                   render={({ field }) => (
//                     <FormItem className=" space-y-2">
//                       <FormLabel className="text-base font-bold">
//                         Listing Condition
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           value={field.value}
//                           className="flex flex-row space-x-1"
//                         >
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="brandNew" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Brand New
//                             </FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="gentlyUsed" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Gently Used
//                             </FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="fairCondition" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Fair Condition
//                             </FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="goodCondition" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Good Condition
//                             </FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                       <FormMessage className="text-red-400" />
//                     </FormItem>
//                   )}
//                 />
//                 {/* End Condition */}
//                 <FormField
//                   control={form.control}
//                   name="category"
//                   render={({ field }) => (
//                     <FormItem className=" space-y-2">
//                       <FormLabel className="text-base font-bold">
//                         Listing Category
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           value={field.value}
//                           className="flex flex-row space-x-1"
//                         >
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="mobiles" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Mobiles
//                             </FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="electronics" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Electronics
//                             </FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="vehicles" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Vehicles
//                             </FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="homeAndLiving" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Home & Living
//                             </FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="womensFashion" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Women&apos;s Fashion
//                             </FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="MensFashion" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Men&apos;s Fashion
//                             </FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="hobbiesAndSports" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Hobbies & Sports
//                             </FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                       <FormMessage className="text-red-400" />
//                     </FormItem>
//                   )}
//                 />
//                 {/* End category */}

//                 <FormField
//                   control={form.control}
//                   name="status"
//                   render={({ field }) => (
//                     <FormItem className=" space-y-2">
//                       <FormLabel className="text-base font-bold">
//                         Listing Status
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           value={field.value}
//                           className="flex flex-row space-x-1"
//                         >
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="available" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Available
//                             </FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-1 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="sold" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Sold</FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                       <FormMessage className="text-red-400" />
//                     </FormItem>
//                   )}
//                 />
//                 {/* End status */}

//                 <Button
//                   type="submit"
//                   className="w-full  bg-purple-500 hover:bg-purple-600 text-white tracking-wide cursor-pointer mt-3"
//                 >
//                   {isSubmitting ? (
//                     <Loader2 className="animate-spin" />
//                   ) : (
//                     "Create Listing"
//                   )}
//                 </Button>
//               </form>
//             </Form>
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default CreateListingsForm;

//! ====================

"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { listingFormValidationSchema } from "./ListingsFormValidation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createListing } from "@/services/listings";
import { toast } from "sonner";

const CreateListingsForm = () => {
  const form = useForm({
    resolver: zodResolver(listingFormValidationSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await createListing(data);
      if (res?.status === true) {
        toast.success(res?.message);
        form.reset();
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <Card className="w-full  bg-white  border-none">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-3xl font-bold text-gray-900">
            Add to <span className="text-purple-600">Listing</span>
          </CardTitle>
          <CardDescription className="text-gray-500">
            Fill in the details to create a new listing
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-bold text-base">
                        Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Listing Title"
                          {...field}
                          className="focus-visible:ring-purple-500 rounded-full placeholder:text-[#A4A4A4]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Price */}
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-bold text-base">
                        Price
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Listing Price"
                          {...field}
                          className="focus-visible:ring-purple-500 rounded-full placeholder:text-[#A4A4A4]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Description - Full width */}
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-bold text-base">
                          Description
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Your Listing Description"
                            {...field}
                            className="focus-visible:ring-purple-500 rounded-full placeholder:text-[#A4A4A4]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Image Link */}
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="images"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-bold text-base">
                          Image Link
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Your Listing Img Link"
                            {...field}
                            className="focus-visible:ring-purple-500 rounded-full placeholder:text-[#A4A4A4]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Color */}
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-bold text-base">
                        Listing Color
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Black"
                          {...field}
                          className="focus-visible:ring-purple-500 rounded-full placeholder:text-[#A4A4A4]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Availability */}
                <FormField
                  control={form.control}
                  name="availability"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-gray-900 font-bold text-base">
                        Availability
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem
                                value="in stock"
                                className="text-purple-600"
                              />
                            </FormControl>
                            <FormLabel>In Stock</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem
                                value="out of stock"
                                className="text-purple-600"
                              />
                            </FormControl>
                            <FormLabel>Out of Stock</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Condition - Full width */}
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="condition"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-gray-900 font-bold text-base">
                          Listing Condition
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                          >
                            {[
                              { value: "brandNew", label: "Brand New" },
                              { value: "gentlyUsed", label: "Gently Used" },
                              {
                                value: "fairCondition",
                                label: "Fair Condition",
                              },
                              {
                                value: "goodCondition",
                                label: "Good Condition",
                              },
                            ].map((item) => (
                              <FormItem
                                key={item.value}
                                className="flex items-center space-x-2"
                              >
                                <FormControl>
                                  <RadioGroupItem
                                    value={item.value}
                                    className="text-purple-600"
                                  />
                                </FormControl>
                                <FormLabel>{item.label}</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Category - Full width */}
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-gray-900 font-bold text-base">
                          Listing Category
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                          >
                            {[
                              { value: "mobiles", label: "Mobiles" },
                              { value: "electronics", label: "Electronics" },
                              { value: "vehicles", label: "Vehicles" },
                              {
                                value: "homeAndLiving",
                                label: "Home & Living",
                              },
                              {
                                value: "womensFashion",
                                label: "Women's Fashion",
                              },
                              { value: "MensFashion", label: "Men's Fashion" },
                              {
                                value: "hobbiesAndSports",
                                label: "Hobbies & Sports",
                              },
                            ].map((item) => (
                              <FormItem
                                key={item.value}
                                className="flex items-center space-x-2"
                              >
                                <FormControl>
                                  <RadioGroupItem
                                    value={item.value}
                                    className="text-purple-600"
                                  />
                                </FormControl>
                                <FormLabel>{item.label}</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Status */}
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-gray-900 font-bold text-base">
                        Listing Status
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem
                                value="available"
                                className="text-purple-600"
                              />
                            </FormControl>
                            <FormLabel>Available</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem
                                value="sold"
                                className="text-purple-600"
                              />
                            </FormControl>
                            <FormLabel>Sold</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-5 text-md font-medium transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Create Listing"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateListingsForm;
