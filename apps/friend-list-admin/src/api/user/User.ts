import { Friend } from "../friend/Friend";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  friends?: Array<Friend>;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
