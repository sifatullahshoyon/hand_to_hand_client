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
