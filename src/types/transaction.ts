export interface ITransaction {
  _id: string;
  buyerID: {
    _id: string;
    name: string;
    email: string;
  };
  sellerID: string;
  itemID: {
    _id: string;
    title: string;
    price: string;
    images: string;
  };
  status: TransactionStatus; // Use union type directly
  soldPrice?: number;
  paymentMethod?: string;
  createdAt: string;
  updatedAt: string;
}

export type TransactionStatus = "pending" | "completed" | "cancelled";
