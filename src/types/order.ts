export interface TOrder {
  _id: string;
  user: string;
  listings: TOrderListing[];
  totalPrice: number;
  status: TOrderStatus;
  createdAt: string;
  updatedAt: string;
  transaction: TOrderTransaction;
}

export interface TOrderListing {
  listing: string;
  quantity: number;
  _id: string;
  name: string;
  images: string;
}

export interface TOrderTransaction {
  id: string;
  transactionStatus: string | null;
  bank_status: string;
  date_time: string;
  method: string;
  sp_code: string;
  sp_message: string;
}

export type TOrderStatus =
  | "Pending"
  | "Paid"
  | "Shipped"
  | "Completed"
  | "Cancelled";
