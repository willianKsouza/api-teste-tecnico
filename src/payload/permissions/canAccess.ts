import { Access } from "payload/config";

export const canAccess: Access = ({ req: { user } }) => {
  if (user) {
    if (user.role?.includes("admin")) {
      return true;
    }
    if (user.role?.includes("user")) {
      return {
        createdBy: {
          equals:user.id
        }
      };
    }
  }
  return false;
};
