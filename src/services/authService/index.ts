"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

// user registration
export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_PROD}/users/create-user`,
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

// user Login
export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_PROD}/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    const result = await res.json();

    // set token in cookies
    if (result?.status === true) {
      const storeCookies = await cookies();

      storeCookies.set("token", result.token);
    }
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// get user info from cookies
export const getCurrentUser = async () => {
  const storeCookies = await cookies();
  // get token from cookies
  const accessToken = storeCookies.get("token")?.value;

  // decoded token
  let decodedData = null;

  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    return decodedData;
  } else {
    return null;
  }
};

// logout user
export const logout = async () => {
  const storeCookies = await cookies();

  storeCookies.delete("token");
};
