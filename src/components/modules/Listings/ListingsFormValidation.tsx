import { z } from "zod";

export const listingFormValidationSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(3, "Title must be at least 3 characters long"),

  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(10, "Description must be at least 10 characters long"),

  color: z.string({
    required_error: "Color is required",
    invalid_type_error: "Color must be a string",
  }),
  price: z.string({
    required_error: "Price is required",
    invalid_type_error: "Price must be a number",
  }),
  // .positive("Price must be a positive number")
  // .int(),

  condition: z.enum(
    ["brandNew", "gentlyUsed", "fairCondition", "goodCondition"],
    {
      required_error: "Condition is required",
    }
  ),
  status: z.enum(["available", "sold"], {
    required_error: "Status is required",
  }),

  images: z.string({
    required_error: "Images is required",
  }),

  availability: z.enum(["in stock", "out of stock"], {
    required_error: "Availability is required",
  }),
});
