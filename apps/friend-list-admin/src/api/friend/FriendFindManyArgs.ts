import { FriendWhereInput } from "./FriendWhereInput";
import { FriendOrderByInput } from "./FriendOrderByInput";

export type FriendFindManyArgs = {
  where?: FriendWhereInput;
  orderBy?: Array<FriendOrderByInput>;
  skip?: number;
  take?: number;
};
