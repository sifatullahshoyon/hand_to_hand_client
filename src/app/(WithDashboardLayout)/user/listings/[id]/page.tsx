import UpdateListingsForm from "@/components/modules/Listings/updateListingsForm";
import { getAllListings } from "@/services/listings";
import { IListing } from "@/types";
import React from "react";

interface UpdateListingPageProps {
  params: { id: string };
}

const UpdateListingPage = async ({ params }: UpdateListingPageProps) => {
  const { id } = await params;
  const { data } = await getAllListings();
  const selectedListing = data?.find((listing: IListing) => listing._id === id);

  if (!selectedListing) {
    return <p>Listing not found</p>;
  }

  return (
    <div>
      {/* update listing form */}
      <UpdateListingsForm
        selectedListing={selectedListing}
        id={selectedListing._id}
      />
    </div>
  );
};

export default UpdateListingPage;
