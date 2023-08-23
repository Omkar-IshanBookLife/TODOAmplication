import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FriendWhereInput = {
  age?: IntNullableFilter;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  user?: UserWhereUniqueInput;
};
