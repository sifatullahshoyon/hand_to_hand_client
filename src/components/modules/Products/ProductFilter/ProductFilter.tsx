import ProductCategoryCheckbox from "@/components/Checkbox/ProductCategoryCheckbox";
import ProductFilterRadio from "@/components/RadioGroup/ProductFilterRadio";
import ProductLocation from "@/components/RadioGroup/ProductLocation";
import ProductPriceRanage from "@/components/Range/ProductPriceRanage";
import React from "react";

type ProductFilterProps = {
  onAvailabilityChange: (
    availability: "all" | "in stock" | "out of stock"
  ) => void;
  onPriceChange: (minPrice: number, maxPrice: number) => void;
};

const ProductFilter: React.FC<ProductFilterProps> = ({
  onAvailabilityChange,
  onPriceChange,
}) => {
  return (
    <>
      <ProductFilterRadio onAvailabilityChange={onAvailabilityChange} />
      {/* End Product Filter Radio */}
      <ProductPriceRanage onPriceChange={onPriceChange} />
      {/* End Product Price Range */}
      <ProductCategoryCheckbox />
      {/* End Product Price Range */}
      <ProductLocation />
      {/* End Product Price Range */}
    </>
  );
};

export default ProductFilter;
