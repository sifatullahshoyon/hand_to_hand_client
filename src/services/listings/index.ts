"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

// Create Listing
export const createListing = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/listings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("token")!.value,
        },
        body: JSON.stringify(userData),
      }
    );
    revalidateTag("LISTINGS");
    return res.json();
  } catch (error: any) {
    console.error(error);
    return Error(error);
  }
};

// get all listings
export const getAllListings = async (page?: string, limit?: string) => {
  try {
    console.log("page => ", page, "limit => ", limit);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/listings?limit=${limit}&page=${page}`,
      {
        next: {
          tags: ["LISTINGS"],
        },
      }
    );
    const data = await res.json();

    return {
      data: data.data,
      meta: data.meta, // Ensure meta is returned correctly
    };
  } catch (error: any) {
    console.error("Error fetching listings:", error);
    throw new Error(error);
  }
};

// update listings
export const updateListing = async (
  listingId: string,
  listingData: FieldValues
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/listings/${listingId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("token")!.value,
        },
        body: JSON.stringify(listingData),
      }
    );
    revalidateTag("LISTINGS");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// delete listings
export const deleteListing = async (listingId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/listings/${listingId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("token")!.value,
        },
      }
    );
    revalidateTag("LISTINGS");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// GET single listings
export const getSingleListing = async (listingId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/listings/${listingId}`,
      {
        next: {
          tags: ["LISTINGS"],
        },
      }
    );
    // revalidateTag("LISTINGS");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
