import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FriendListRelationFilter } from "../friend/FriendListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  friends?: FriendListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
