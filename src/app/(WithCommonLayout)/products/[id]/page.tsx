import SingleProduct from "@/components/modules/SingleProduct/SingleProduct";
import { getSingleListing } from "@/services/listings";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const listingId = params.id;

  const { data: product } = await getSingleListing(listingId);

  return (
    <>
      <SingleProduct product={product} />
    </>
  );
};

export default SingleProductPage;
