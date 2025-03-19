import Listing from "@/components/modules/Listings/Listing";
import { getAllListings } from "@/services/listings";
import React from "react";

const ListingPage = async () => {
  const { data } = await getAllListings();

  return (
    <>
      <Listing listings={data} />
    </>
  );
};

export default ListingPage;
