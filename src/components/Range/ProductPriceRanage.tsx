// "use client";
// import { useState } from "react";
// import { Slider } from "@/components/ui/slider";

// const ProductPriceRange = () => {
//   const [priceRange, setPriceRange] = useState(500);

//   // Function to generate gradient color based on the selected price
//   const getSliderBackground = () => {
//     const minValue = 500;
//     const maxValue = 36700;
//     const percentage = (priceRange - minValue) / (maxValue - minValue);
//     const color = `linear-gradient(to right, #8a4af3 ${
//       percentage * 100
//     }%, #d1d5db ${percentage * 100}%)`;
//     return color;
//   };

//   return (
//     <div className="w-full max-w-md my-4">
//       <label className="block font-semibold mb-2 font-roboto text-lg">
//         Price Range
//       </label>
//       <div className="flex items-center gap-4">
//         <span className="text-gray-600 font-medium font-roboto">$500</span>
//         <Slider
//           defaultValue={[500]}
//           min={500}
//           max={36700}
//           step={100}
//           onValueChange={(value) => setPriceRange(value[0])}
//           className="flex-1 p-0.5 rounded-2xl"
//           style={{
//             background: getSliderBackground(),
//           }}
//         />
//         <span className="text-gray-600 font-medium font-roboto">
//           ${priceRange}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default ProductPriceRange;

//!

"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface ProductPriceRangeProps {
  onPriceChange: (minPrice: number, maxPrice: number) => void;
}

const ProductPriceRange = ({ onPriceChange }: ProductPriceRangeProps) => {
  const [minPrice, setMinPrice] = useState<number>(500);
  const [maxPrice, setMaxPrice] = useState<number>(5000000);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMinPrice(value);
    onPriceChange(value, maxPrice); // মিন প্রাইস চেঞ্জ হলে সাথে সাথে ফিল্টার করবো
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMaxPrice(value);
    onPriceChange(minPrice, value); // ম্যাক্স প্রাইস চেঞ্জ হলে সাথে সাথে ফিল্টার করবো
  };

  return (
    <div className="w-full max-w-md my-4 space-y-4">
      <label className="block font-semibold mb-2 font-roboto text-lg">
        Set Price Range
      </label>

      <div className="flex flex-col gap-4">
        {/* Minimum Price */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium text-sm mb-1">
            Minimum Price
          </label>
          <Input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            placeholder="Enter Minimum Price"
            className="border-gray-300"
          />
        </div>

        {/* Maximum Price */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium text-sm mb-1">
            Maximum Price
          </label>
          <Input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="Enter Maximum Price"
            className="border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPriceRange;
