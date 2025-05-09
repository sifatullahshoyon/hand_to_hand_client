export interface IListing {
  _id: string;
  title: string;
  description: string;
  price: string;
  condition: "brandNew" | "gentlyUsed" | "fairCondition" | "goodCondition";
  images: string;
  userID: string;
  status?: "available" | "sold";
  availability?: "in stock" | "out of stock";
  color?: string;
  createdAt?: string;
  updatedAt?: string;
  category:
    | "mobiles"
    | "electronics"
    | "vehicles"
    | "homeAndLiving"
    | "womensFashion"
    | "MensFashion"
    | "hobbiesAndSports";
  __v?: number;
  children?: IListing[];
}

// export interface IListingOption {
//   color: string;
//   simVariation?: string;
//   ram?: string;
//   storage?: string;
//   size?: string;
//   condition: string;
//   unitCondition: {
//     batteryHealth?: string;
//     batteryCycle?: string;
//     scratches: string;
//     warrantyStatus: string;
//   };
//   price: number;
//   stock: number;
//   images: string[];
// }

// export interface IListingSpecification {
//   category: string;
//   specs: {
//     label: string;
//     value: string;
//   }[];
// }

// export interface IListing {
//   id: string;
//   name: string;
//   brand: string;
//   model: string;
//   category:
//     | "mobiles"
//     | "electronics"
//     | "vehicles"
//     | "homeAndLiving"
//     | "womensFashion"
//     | "MensFashion"
//     | "hobbiesAndSports";
//   status?: "available" | "sold";
//   availability?: "in stock" | "out of stock";
//   description: string;
//   images: string[];
//   options: IListingOption[];
//   specifications: IListingSpecification[];
//   couponCodes: string[];
//   condition: "brandNew" | "gentlyUsed" | "fairCondition" | "goodCondition";
//}
