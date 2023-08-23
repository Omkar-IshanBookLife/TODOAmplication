import { FriendCreateNestedManyWithoutUsersInput } from "./FriendCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  friends?: FriendCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
