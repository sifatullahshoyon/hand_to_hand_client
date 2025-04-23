"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

// get all sales for a seller
export const getAllSales = async (sellerID: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/sales/${sellerID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("token")!.value,
        },
      }
    );

    return await res.json();
  } catch (error: any) {
    console.error("Error fetching listings:", error);
    throw new Error(error);
  }
};

// update sales status

export const updateSales = async (
  transactionID: string,
  salesData: FieldValues
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/sales/${transactionID}`, // Correct endpoint
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("token")!.value,
        },
        body: JSON.stringify(salesData),
      }
    );
    return res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};
