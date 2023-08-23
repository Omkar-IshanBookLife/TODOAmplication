import { Friend as TFriend } from "../api/friend/Friend";

export const FRIEND_TITLE_FIELD = "name";

export const FriendTitle = (record: TFriend): string => {
  return record.name || String(record.id);
};
