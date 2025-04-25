import Listing from "@/components/modules/Listings/Listing";
import { getAllListings } from "@/services/listings";
import React from "react";

const ListingPage = async ({
  searchParams,
}: {
  searchParams: { page: string }; // searchParams is a plain object
}) => {
  const page = await searchParams.page; // Default to page 1 if not provided

  const { data, meta } = await getAllListings(page, "20");

  return (
    <>
      <Listing listings={data} meta={meta} />
    </>
  );
};

export default ListingPage;
