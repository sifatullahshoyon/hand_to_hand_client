// "use client";

// import React, { useState, useMemo } from "react";
// import Container from "@/components/shared/Container";
// import styles from "./Products.module.css";
// import { Button } from "@/components/ui/button";
// import ProductFilter from "./ProductFilter/ProductFilter";
// import { FilterIcon } from "lucide-react";
// import ProductSortingByPrice from "./ProductSortingByPrice";
// import ProductCart from "@/components/shared/Carts/ProductCart";
// import { IListing } from "@/types";
// import { Input } from "@/components/ui/input";

// interface ProductsProps {
//   products: IListing[];
// }

// const Products = ({ products }: ProductsProps) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [availability, setAvailability] = useState<
//     "all" | "in stock" | "out of stock"
//   >("all");
//   const [priceRange, setPriceRange] = useState<[number, number]>([
//     500, 5000000,
//   ]);

//   // ✅ Filtering with search and availability
//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => {
//       const matchName = product.title
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase());

//       const matchAvailability =
//         availability === "all"
//           ? true
//           : availability === "in stock"
//           ? product.availability === "in stock"
//           : product.availability === "out of stock";

//       const matchPrice =
//         Number(product.price) >= minPrice && Number(product.price) <= maxPrice;

//       return matchName && matchAvailability && matchPrice;
//     });
//   }, [products, searchTerm, availability, minPrice, maxPrice]);

//   console.log("filteredProducts", filteredProducts);
//   console.log("products", products);
//   const handleSearch = () => {
//     // Optional: add manual search trigger functionality if needed
//   };

//   const handleResetFilter = () => {
//     setSearchTerm("");
//     setAvailability("all");
//     setPriceRange([500, 5000000]); // Price Reset
//   };

//   return (
//     <>
//       <div className={`${styles.banner}`}>
//         <div className="flex flex-col justify-center items-center h-[300px]">
//           <h1 className="font-bold text-white text-4xl tracking-wide text-center pb-4">
//             All Products
//           </h1>
//           <p className="text-gray-300">Home &gt; Products</p>
//         </div>
//       </div>

//       <div className="my-16 p-6">
//         <Container>
//           {/* 🔍 Search Field */}
//           <div className="flex w-full max-w-1/2 items-center space-x-2 mb-16 mx-auto">
//             <Input
//               type="text"
//               placeholder="Search By Product Name"
//               className="placeholder:text-gray-400"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Button
//               type="button"
//               className="bg-purple-500 hover:bg-purple-600 transition text-white px-8 cursor-pointer"
//               onClick={handleSearch}
//             >
//               Search
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
//             {/* 🔘 Filter Section */}
//             <div className="col-span-2 bg-gray-50 shadow-xl rounded p-6">
//               <div className="flex flex-row justify-between items-center flex-wrap gap-2 space-y-2 lg:space-y-0 mb-6">
//                 <Button className="flex items-center gap-2 text-xl font-bold px-4">
//                   <FilterIcon size={25} />
//                   <span>Filter</span>
//                 </Button>
//                 <Button
//                   variant="outline"
//                   className="rounded-full border-purple-500 border-2 hover:bg-purple-500 hover:text-white font-normal tracking-wide transition cursor-pointer"
//                   onClick={handleResetFilter}
//                 >
//                   Reset Filter
//                 </Button>
//               </div>

//               {/* ✅ Product Filter with props */}
//               <div data-aos="fade-right">
//                 <ProductFilter
//                   onAvailabilityChange={setAvailability}
//                   onPriceChange={(min, max) => setPriceRange([min, max])}
//                 />
//               </div>
//             </div>

//             {/* 🛒 Product Listing */}
//             <div className="col-span-6 p-6">
//               <div className="flex justify-between items-center gap-2 flex-wrap mb-6">
//                 <p className="font-bold text-xl text-[#1A1A1A] tracking-wide">
//                   {filteredProducts.length} Products
//                 </p>
//                 <ProductSortingByPrice />
//               </div>

//               <div data-aos="fade-left" className="pb-6">
//                 {filteredProducts.length > 0 ? (
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {filteredProducts.map((item, index) => (
//                       <ProductCart key={index} item={item} />
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="text-center py-20">
//                     <h2 className="text-2xl font-semibold text-gray-600">
//                       There are no{" "}
//                       {availability === "out of stock" ? "out of stock" : ""}{" "}
//                       products available at this time.
//                     </h2>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Products;

//! ==============================================================

"use client";

import React, { useState, useMemo } from "react";
import Container from "@/components/shared/Container";
import styles from "./Products.module.css";
import { Button } from "@/components/ui/button";
import ProductFilter from "./ProductFilter/ProductFilter";
import { FilterIcon } from "lucide-react";
import ProductSortingByPrice from "./ProductSortingByPrice";
import ProductCart from "@/components/shared/Carts/ProductCart";
import { IListing } from "@/types";
import { Input } from "@/components/ui/input";

interface ProductsProps {
  products: IListing[];
}

const Products = ({ products }: ProductsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [availability, setAvailability] = useState<
    "all" | "in stock" | "out of stock"
  >("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    500, 5000000,
  ]);
  const [isFilterApplied, setIsFilterApplied] = useState(false); // Track if filters are applied

  // ✅ Filtering with search, availability, and price
  const filteredProducts = useMemo(() => {
    console.log("Products:", products); // Debugging: Log all products

    if (!isFilterApplied) {
      // Show all products if no filters are applied
      return products;
    }

    const [minPrice, maxPrice] = priceRange;

    const result = products.filter((product) => {
      const matchName = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchAvailability =
        availability === "all"
          ? true
          : availability === "in stock"
          ? product.availability?.toLowerCase() === "in stock"
          : product.availability?.toLowerCase() === "out of stock";

      const matchPrice =
        Number(product.price) >= minPrice && Number(product.price) <= maxPrice;

      return matchName && matchAvailability && matchPrice;
    });

    console.log("Filtered Products:", result); // Debugging: Log filtered products
    return result;
  }, [products, searchTerm, availability, priceRange, isFilterApplied]);

  const handleSearch = () => {
    setIsFilterApplied(true); // Mark filters as applied
  };

  const handleResetFilter = () => {
    setSearchTerm("");
    setAvailability("all");
    setPriceRange([500, 5000000]);
    setIsFilterApplied(false); // Reset filter state
  };

  return (
    <>
      {/* 🔥 Top Banner */}
      <div className={`${styles.banner}`}>
        <div className="flex flex-col justify-center items-center h-[300px]">
          <h1 className="font-bold text-white text-4xl tracking-wide text-center pb-4">
            All Products
          </h1>
          <p className="text-gray-300">Home &gt; Products</p>
        </div>
      </div>

      <div className="my-16 p-6">
        <Container>
          {/* 🔍 Search Field */}
          <div className="flex w-full max-w-1/2 items-center space-x-2 mb-16 mx-auto">
            <Input
              type="text"
              placeholder="Search By Product Name"
              className="placeholder:text-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              type="button"
              className="bg-purple-500 hover:bg-purple-600 transition text-white px-8 cursor-pointer"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
            {/* 🔘 Filter Sidebar */}
            <div className="col-span-2 bg-gray-50 shadow rounded p-6 h-[80%]">
              <div className="flex flex-row justify-between items-center flex-wrap gap-2 space-y-2 lg:space-y-0 mb-6">
                <Button className="flex items-center gap-2 text-xl font-bold px-4">
                  <FilterIcon size={25} />
                  <span>Filter</span>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-purple-500 border-2 hover:bg-purple-500 hover:text-white font-normal tracking-wide transition cursor-pointer"
                  onClick={handleResetFilter}
                >
                  Reset Filter
                </Button>
              </div>

              {/* ✅ Product Filter */}
              <div data-aos="fade-right">
                <ProductFilter
                  onAvailabilityChange={(value) => {
                    setAvailability(value);
                    setIsFilterApplied(true); // Mark filters as applied
                  }}
                  onPriceChange={(min, max) => {
                    setPriceRange([min, max]);
                    setIsFilterApplied(true); // Mark filters as applied
                  }}
                />
              </div>
            </div>

            {/* 🛒 Product Listing */}
            <div className="col-span-6 p-6">
              <div className="flex justify-between items-center gap-2 flex-wrap mb-6">
                <p className="font-bold text-xl text-[#1A1A1A] tracking-wide">
                  {filteredProducts.length} Products
                </p>
                <ProductSortingByPrice />
              </div>

              <div data-aos="fade-left" className="pb-6">
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((item) => (
                      <ProductCart key={item._id} item={item} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <h2 className="text-2xl font-semibold text-gray-600">
                      There are no{" "}
                      {availability === "out of stock" ? "out of stock" : ""}{" "}
                      products available at this time.
                    </h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Products;
