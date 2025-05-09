// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Check, ShoppingCart, Heart } from "lucide-react";

// interface ProductSummaryProps {
//   product: any;
// }

// export default function ProductSummary({ product }: ProductSummaryProps) {
//   const {
//     selectedColor,
//     selectedSim,
//     selectedCondition,
//     selectedUnit,
//     couponApplied,
//   } = useAppSelector((state) => state.product);

//   // Find the selected unit to get its price
//   const unit =
//     product.units.find((u: any) => u.id === selectedUnit) || product.units[0];

//   // Calculate price with any discounts
//   let finalPrice = unit.price;
//   if (couponApplied) {
//     finalPrice = finalPrice * 0.9; // Assuming 10% discount for coupon
//   }

//   // Get color name
//   const colorObj =
//     product.colors.find((c: any) => c.value === selectedColor) ||
//     product.colors[0];

//   return (
//     <Card>
//       <CardContent className="p-6">
//         <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

//         <div className="space-y-4 mb-6">
//           <div className="flex justify-between">
//             <span className="text-gray-600">Subtotal</span>
//             <span className="font-medium">${unit.price.toFixed(2)}</span>
//           </div>

//           {couponApplied && (
//             <div className="flex justify-between text-green-600">
//               <span>Coupon Discount</span>
//               <span>-${(unit.price * 0.1).toFixed(2)}</span>
//             </div>
//           )}

//           <div className="flex justify-between text-lg font-bold pt-2 border-t">
//             <span>Total</span>
//             <span>${finalPrice.toFixed(2)}</span>
//           </div>
//         </div>

//         <div className="space-y-3 mb-6">
//           <h4 className="text-sm font-medium">Selected Options:</h4>
//           <ul className="space-y-2">
//             <li className="flex items-start">
//               <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
//               <span className="text-sm">
//                 <span className="font-medium">Color:</span> {colorObj.name}
//               </span>
//             </li>
//             <li className="flex items-start">
//               <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
//               <span className="text-sm">
//                 <span className="font-medium">SIM:</span>{" "}
//                 {product.simOptions.find((s: any) => s.value === selectedSim)
//                   ?.label || product.simOptions[0].label}
//               </span>
//             </li>
//             <li className="flex items-start">
//               <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
//               <span className="text-sm">
//                 <span className="font-medium">Condition:</span>{" "}
//                 {product.conditions.find(
//                   (c: any) => c.value === selectedCondition
//                 )?.label || product.conditions[0].label}
//               </span>
//             </li>
//             <li className="flex items-start">
//               <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
//               <span className="text-sm">
//                 <span className="font-medium">Unit:</span> {unit.name}
//               </span>
//             </li>
//           </ul>
//         </div>

//         <div className="space-y-3">
//           <Button className="w-full" size="lg">
//             <ShoppingCart className="mr-2 h-4 w-4" />
//             Add to Cart
//           </Button>
//           <Button variant="outline" className="w-full">
//             <Heart className="mr-2 h-4 w-4" />
//             Add to Wishlist
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
