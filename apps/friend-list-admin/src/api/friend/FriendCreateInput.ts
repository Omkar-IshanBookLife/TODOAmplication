import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FriendCreateInput = {
  age?: number | null;
  email: string;
  name: string;
  user: UserWhereUniqueInput;
};
