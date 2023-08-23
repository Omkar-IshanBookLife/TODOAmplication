import { User } from "../user/User";

export type Friend = {
  age: number | null;
  createdAt: Date;
  email: string;
  id: string;
  name: string;
  updatedAt: Date;
  user?: User;
};
