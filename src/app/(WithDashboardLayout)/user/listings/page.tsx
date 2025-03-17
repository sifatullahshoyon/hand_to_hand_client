import Listing from "@/components/modules/Listings/Listing";
import { getAllListings } from "@/services/listings";
import React from "react";

const ListingPage = async () => {
  const { data } = await getAllListings();
  console.log("List Data =>", data);
  return (
    <div>
      <Listing listings={data} />
    </div>
  );
};

export default ListingPage;
