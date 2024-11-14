import { Access } from "payload/config";

export const isAdminOrUser: Access = ({req: { user }, id}) => {
  console.log(user,id);
  
  if (user?.role?.includes("admin")) {
    return true;
  }
  if (user?.role?.includes("user")) {
    return {
      
    }
  }

  return false;
};
