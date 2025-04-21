export interface IUser {
  name: string;
  email: string;
  phoneNumber: string;
  role: "user" | "admin";
  _id: string;
}
