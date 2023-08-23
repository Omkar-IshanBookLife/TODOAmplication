import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FriendUpdateInput = {
  age?: number | null;
  email?: string;
  name?: string;
  user?: UserWhereUniqueInput;
};
