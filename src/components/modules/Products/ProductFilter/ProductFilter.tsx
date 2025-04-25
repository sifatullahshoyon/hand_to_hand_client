import ProductCategoryCheckbox from "@/components/Checkbox/ProductCategoryCheckbox";
import ProductFilterRadio from "@/components/RadioGroup/ProductFilterRadio";
import ProductLocation from "@/components/RadioGroup/ProductLocation";
import ProductPriceRanage from "@/components/Range/ProductPriceRanage";
import React from "react";

type ProductFilterProps = {
  onAvailabilityChange: (
    availability: "all" | "in stock" | "out of stock"
  ) => void;
};

const ProductFilter: React.FC<ProductFilterProps> = ({
  onAvailabilityChange,
}) => {
  return (
    <>
      <ProductFilterRadio onAvailabilityChange={onAvailabilityChange} />
      {/* End Product Filter Radio */}
      <ProductPriceRanage />
      {/* End Product Price Range */}
      <ProductCategoryCheckbox />
      {/* End Product Price Range */}
      <ProductLocation />
      {/* End Product Price Range */}
    </>
  );
};

export default ProductFilter;
