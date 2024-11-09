import { redirect } from "react-router-dom";
import Cookies from "js-cookie";

// action để xử lý logout
export const action = () => {
  // Xóa cookie chứa thông tin người dùng hoặc token

  // Chuyển hướng về trang login
  return redirect("/");
};
