"use server";

// get all listings
export const getAllListings = async (page?: string, limit?: string) => {
  try {
    console.log("page => ", page, "limit => ", limit);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/listings?limit=${limit}&page=${page}`,
      {
        next: {
          tags: ["USER"],
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

// update user
export const updateUser = async (
  userId: string,
  updatedInfo: { name: string; phone: string }
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT}/users/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update user information.");
    }

    const data = await response.json();
    return { success: true, data }; // Ensure success is returned as true
  } catch (error) {
    console.error("Error updating user:", error);
    return { success: false, error }; // Ensure success is returned as false on error
  }
};
