"use server";

import { IListing } from "@/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

// Create Listing
export const createListing = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_PROD}/listings`,
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
    return { data: null as unknown as IListing };
  }
};

// get all listings

// export const getAllListings = async (page?: string, limit?: string) => {
//   try {
//     console.log("page => ", page, "limit => ", limit);
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API_PROD}/listings?limit=${limit}&page=${page}`,
//       {
//         next: {
//           tags: ["LISTINGS"],
//         },
//       }
//     );
//     const data = await res.json();

//     return {
//       data: data.data,
//       meta: data.meta, // Ensure meta is returned correctly
//     };
//   } catch (error: any) {
//     console.error("Error fetching listings:", error);
//     throw new Error(error);
//   }
// };

// services/listings.ts

export const getAllListings = async (
  page?: string,
  limit?: string,
  searchTerm?: string
) => {
  try {
    let url = `${process.env.NEXT_PUBLIC_BASE_API_PROD}/listings?`;

    if (limit) url += `limit=${limit}&`;
    if (page) url += `page=${page}&`;
    if (searchTerm) url += `searchTerm=${searchTerm}`;

    const res = await fetch(url, {
      next: {
        tags: ["LISTINGS"],
      },
    });

    const data = await res.json();
    // console.log("data => ", data.data, "meta => ", data.meta);
    return {
      data: data?.data?.data,
      meta: data.meta,
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
): Promise<{
  status: boolean;
  message: string;
  listingData: IListing | null;
}> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_PROD}/listings/${listingId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("token")!.value,
        },
        body: JSON.stringify(listingData),
      }
    );
    const data = await res.json();
    revalidateTag("LISTINGS");
    return {
      status: res.ok,
      message: data.message || "Listing updated successfully",
      listingData: data.listingData || null,
    };
  } catch (error: any) {
    console.error(error);
    return {
      status: false,
      message: "Failed to update listing",
      listingData: null,
    };
  }
};

// delete listings
export const deleteListing = async (listingId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_PROD}/listings/${listingId}`,
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
// export const getSingleListing = async (
//   listingId: string
// ): Promise<{ data: IListing }> => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API_PROD}/listings/${listingId}`,
//       {
//         next: {
//           tags: ["LISTINGS"],
//         },
//       }
//     );
//     // revalidateTag("LISTINGS");
//     return res.json();
//   } catch (error: any) {
//     return Error(error);
//   }
// };

//!

// export const getSingleListing = async (
//   listingId: string
// ): Promise<{ data: IListing | null }> => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API_PROD}/listings/${listingId}`,
//       {
//         next: {
//           tags: ["LISTINGS"],
//         },
//       }
//     );
//     // revalidateTag("LISTINGS");
//     return res.json();
//   } catch (error: any) {
//     console.error(error);
//     return { data: null }; // Ensure a value is always returned
//   } finally {
//     return { data: null }; // Fallback return to satisfy all code paths
//   }
// };

//*

export const getSingleListing = async (
  listingId: string
): Promise<{ data: IListing | null }> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_PROD}/listings/${listingId}`,
      {
        next: {
          tags: ["LISTINGS"],
        },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch listing:", res.statusText);
      return { data: null };
    }

    return await res.json(); // ✅ only return here if successful
  } catch (error: any) {
    console.error(error);
    return { data: null };
  }
};
