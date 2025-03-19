export interface IListing {
  _id: string;
  title: string;
  description: string;
  price: number;
  condition: string;
  images: string;
  userID: string;
  status?: string;
  availability?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

// children : IListing[]
