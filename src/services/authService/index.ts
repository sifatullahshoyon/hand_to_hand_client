"use server";

import { FieldValues } from "react-hook-form";

// user registration
export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/users/create-user`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
