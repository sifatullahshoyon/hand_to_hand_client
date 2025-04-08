import SingleProduct from "@/components/modules/SingleProduct/SingleProduct";
import { getSingleListing } from "@/services/listings";

interface SingleProductPageProps {
  params: {
    id: string;
  };
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  const listingId = params.id;

  const { data: product } = await getSingleListing(listingId);

  return (
    <>
      <SingleProduct product={product} />
    </>
  );
};

export default SingleProductPage;
