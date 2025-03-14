"use client";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const ProductPriceRange = () => {
  const [priceRange, setPriceRange] = useState(500);

  // Function to generate gradient color based on the selected price
  const getSliderBackground = () => {
    const minValue = 500;
    const maxValue = 36700;
    const percentage = (priceRange - minValue) / (maxValue - minValue);
    const color = `linear-gradient(to right, #8a4af3 ${
      percentage * 100
    }%, #d1d5db ${percentage * 100}%)`;
    return color;
  };

  return (
    <div className="w-full max-w-md my-4">
      <label className="block font-semibold mb-2 font-roboto text-lg">
        Price Range
      </label>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 font-medium font-roboto">$500</span>
        <Slider
          defaultValue={[500]}
          min={500}
          max={36700}
          step={100}
          onValueChange={(value) => setPriceRange(value[0])}
          className="flex-1 p-0.5 rounded-2xl"
          style={{
            background: getSliderBackground(),
          }}
        />
        <span className="text-gray-600 font-medium font-roboto">
          ${priceRange}
        </span>
      </div>
    </div>
  );
};

export default ProductPriceRange;
