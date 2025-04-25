// import Listing from "@/components/modules/Listings/Listing";
// import { getAllListings } from "@/services/listings";
// import React from "react";

// const ListingPage = async ({
//   searchParams,
// }: {
//   searchParams: { page: string }; // searchParams is a plain object
// }) => {
//   const page = await searchParams.page; // Default to page 1 if not provided

//   const { data, meta } = await getAllListings(page, "20");

//   return (
//     <>
//       <Listing listings={data} meta={meta} />
//     </>
//   );
// };

// export default ListingPage;

import Listing from "@/components/modules/Listings/Listing";
import { getAllListings } from "@/services/listings";
import React from "react";

interface ListingPageProps {
  searchParams: Promise<{ page?: string; limit?: string }>; // Treat searchParams as a Promise
}

const ListingPage = async ({ searchParams }: ListingPageProps) => {
  const resolvedSearchParams = await searchParams; // Await the Promise to resolve
  const page = resolvedSearchParams.page || "1"; // Default to page 1 if not provided
  const limit = resolvedSearchParams.limit || "20"; // Default to limit 20 if not provided

  const { data, meta } = await getAllListings(page, limit);

  return (
    <>
      <Listing listings={data} meta={meta} />
    </>
  );
};

export default ListingPage;
