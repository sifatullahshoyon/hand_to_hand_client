import SingleProduct from "@/components/modules/SingleProduct/SingleProduct";
import { getSingleListing } from "@/services/listings";
import { Metadata } from "next";

interface SingleProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: SingleProductPageProps): Promise<Metadata> {
  const { data: product } = await getSingleListing(params.id);
  return {
    title: product?.name || "Product Details",
    description: product?.description || "View product details",
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
