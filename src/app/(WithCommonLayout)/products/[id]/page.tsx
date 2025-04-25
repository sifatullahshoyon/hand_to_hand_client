// import SingleProduct from "@/components/modules/SingleProduct/SingleProduct";
// import { getSingleListing } from "@/services/listings";

// // interface SingleProductPageProps {
// //   params: {
// //     id: string;
// //   };
// // }

// const SingleProductPage = async ({ params }: { params: { id: string } }) => {
//   const listingId = params.id;
//   console.log("listingId", listingId);

//   const { data: product } = await getSingleListing(listingId);

//   console.log("product", product);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return <SingleProduct product={product} />;
// };

// export default SingleProductPage;

//! =========

import SingleProduct from "@/components/modules/SingleProduct/SingleProduct";
import { getSingleListing } from "@/services/listings";
import { IListing } from "@/types";

// interface SingleProductPageProps {
//   params: {
//     id: string;
//   };
// }

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const listingId = (await params).id; // Access the id directly since params is not a Promise
  console.log("listingId", listingId);

  const { data: product } = await getSingleListing(listingId);

  console.log("product", product);

  return <> {<SingleProduct product={product as IListing} />}</>;
};

export default SingleProductPage;
