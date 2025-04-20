// import Listing from "@/components/modules/Listings/Listing";
// import { getAllListings } from "@/services/listings";
// import React from "react";

// const ListingPage = async ({
//   searchParams,
// }: {
//   searchParams: Promise<{ page: string }>;
// }) => {
//   console.log(await searchParams);

//   const page = (await searchParams.page) || "1";

//   const { data, meta } = await getAllListings(page, "6");

//   // console.log(data);

//   return (
//     <>
//       <Listing listings={data.data} meta={meta} />
//     </>
//   );
// };

// export default ListingPage;

import Listing from "@/components/modules/Listings/Listing";
import { getAllListings } from "@/services/listings";
import React from "react";

const ListingPage = async ({
  searchParams,
}: {
  searchParams: { page: string }; // searchParams is a plain object
}) => {
  console.log("Server Search Params:", await searchParams);

  const page = await searchParams.page; // Default to page 1 if not provided
  // console.log("Server Page 39:", page);
  const { data, meta } = await getAllListings(page, "6");

  // console.log("Server Meta:", data);

  return (
    <>
      <Listing listings={data.data} meta={meta} />
    </>
  );
};

export default ListingPage;
