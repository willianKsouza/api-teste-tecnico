import { Access } from "payload/config";

export const isAdmin: Access = ({ req: { user } }) => {
  if (user?.role?.includes("admin")) {
    return true;
  }
  return false;
};
