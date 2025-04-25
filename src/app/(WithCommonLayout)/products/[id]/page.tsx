import SingleProduct from "@/components/modules/SingleProduct/SingleProduct";
import { getSingleListing } from "@/services/listings";
import { Metadata } from "next";
import { IListing } from "@/types/listing";

interface SingleProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: SingleProductPageProps): Promise<Metadata> {
  const { data: product }: { data: IListing } = await getSingleListing(
    params.id
  );
  return {
    title: product?.title || "Product Details",
    description: product?.description || "View product details",
  };
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  const listingId = params.id;

  const { data: product }: { data: IListing } = await getSingleListing(
    listingId
  );

  return (
    <>
      <SingleProduct product={product} />
    </>
  );
};

export default SingleProductPage;
