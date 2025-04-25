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

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const listingId = await params.id;
  console.log("listingId", listingId);
  console.log("params", await params.id);

  const { data: product } = await getSingleListing(listingId);

  return (
    <>
      <SingleProduct product={product} />
    </>
  );
};

export default SingleProductPage;
