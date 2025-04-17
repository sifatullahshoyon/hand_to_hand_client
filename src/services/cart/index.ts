// "use server";

// import { revalidateTag } from "next/cache";
// import { cookies } from "next/headers";
// import { FieldValues } from "react-hook-form";

// // Create Listing
// export const createListing = async (userData: FieldValues) => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/listings`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: (await cookies()).get("token")!.value,
//         },
//         body: JSON.stringify(userData),
//       }
//     );
//     revalidateTag("LISTINGS");
//     return res.json();
//   } catch (error: any) {
//     console.error(error);
//     return Error(error);
//   }
// };
