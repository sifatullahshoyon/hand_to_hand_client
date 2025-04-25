// import SingleProduct from "@/components/modules/SingleProduct/SingleProduct";
// import { getSingleListing } from "@/services/listings";

// const SingleProductPage = async ({ params }: { params: { id: any } }) => {
//   const listingId = params.id;
//   console.log("listingId", listingId);
//   console.log("params", params.id);

//   const { data: product } = await getSingleListing(listingId);

//   return (
//     <>
//       <SingleProduct product={product} />
//     </>
//   );
// };

// export default SingleProductPage;

//! =========

import SingleProduct from "@/components/modules/SingleProduct/SingleProduct";
import { getSingleListing } from "@/services/listings";

interface SingleProductPageProps {
  params: {
    id: string;
  };
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  const listingId = params.id; // Access the id directly since params is not a Promise
  console.log("listingId", listingId);

  const { data: product } = await getSingleListing(listingId);

  return (
    <>
      <SingleProduct product={product} />
    </>
  );
};

export default SingleProductPage;
