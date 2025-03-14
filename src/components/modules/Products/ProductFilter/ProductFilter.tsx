import ProductCategoryCheckbox from "@/components/Checkbox/ProductCategoryCheckbox";
import ProductFilterRadio from "@/components/RadioGroup/ProductFilterRadio";
import ProductLocation from "@/components/RadioGroup/ProductLocation";
import ProductPriceRanage from "@/components/Range/ProductPriceRanage";
import React from "react";

const ProductFilter = () => {
  return (
    <>
      <ProductFilterRadio />
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
