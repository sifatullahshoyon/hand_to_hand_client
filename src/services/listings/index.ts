"use server";

import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

// Create Listing
export const createListing = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/listings`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );
    revalidateTag("LISTINGS");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// get all listings
export const getAllListings = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/listings`,
      {
        next: {
          tags: ["LISTINGS"],
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
