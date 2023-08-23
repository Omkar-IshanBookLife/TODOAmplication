import { FriendUpdateManyWithoutUsersInput } from "./FriendUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  friends?: FriendUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
