import Products from "@/components/modules/Products/Products";
import { getAllListings } from "@/services/listings";

const ProductPage = async () => {
  const { data: products } = await getAllListings();

  return (
    <>
      <Products products={products} />
    </>
  );
};

export default ProductPage;
