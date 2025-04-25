import SingleProduct from "@/components/modules/SingleProduct/SingleProduct";
import { getSingleListing } from "@/services/listings";
import { Metadata } from "next";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { data: product } = await getSingleListing(params.id);
  return {
    title: product?.title || "Product Details", // Changed from 'name' to 'title' to match IListing
    description: product?.description || "View product details",
  };
}

const SingleProductPage = async ({ params }: PageProps) => {
  const { data: product } = await getSingleListing(params.id);

  return <SingleProduct product={product} />;
};

export default SingleProductPage;
