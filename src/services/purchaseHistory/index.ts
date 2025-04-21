"use server";

import { cookies } from "next/headers";

// get all orders
export const getAllOrders = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/order`,
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
