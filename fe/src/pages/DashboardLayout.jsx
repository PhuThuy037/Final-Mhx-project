import { Outlet, redirect, useNavigate, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar, Loading } from "../components";
import { createContext, useContext, useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
// import { checkDefaultTheme } from "../App";
// const userQuery = {
//   queryKey: ["data"],
//   queryFn: async () => {
//     const { data } = await customFetch.get("/user/info");
//     return data;
//   },
// };

// export const loader = (queryClient) => async () => {
//   try {
//     return await queryClient.ensureQueryData(userQuery);
//   } catch (error) {
//     return redirect("/");
//   }
// };

const DashboardContext = createContext();

const DashboardLayout = ({ queryClient }) => {
  // const { data: user } = useQuery(userQuery).data;
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const [showSidebar, setShowSidebar] = useState(false);

  const [isAuthError, setIsAuthError] = useState(false);

  // const toggleDarkTheme = () => {
  //   const newDarkTheme = !isDarkTheme;
  //   setIsDarkTheme(newDarkTheme);
  //   document.body.classList.toggle("dark-theme", newDarkTheme);
  //   localStorage.setItem("darkTheme", newDarkTheme);
  // };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // const logoutUser = async () => {
  //   navigate("/");
  //   await customFetch.get("/user/logout");
  //   Cookies.remove("token"); // Thay 'token' bằng tên cookie mà bạn đang lưu
  //   Cookies.remove("refreshToken");
  //   queryClient.invalidateQueries();
  //   toast.success("Logging out...");
  // };

  // customFetch.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     if (error?.response?.status === 401) {
  //       setIsAuthError(true);
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  // useEffect(() => {
  //   if (!isAuthError) return;
  //   logoutUser();
  // }, [isAuthError]);

  return (
    <DashboardContext.Provider
      value={{
        // user,
        showSidebar,
        // isDarkTheme,
        // toggleDarkTheme,
        toggleSidebar,
        // logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <Outlet />
            <div className="dashboard-page">
              {/* {isPageLoading ? <Loading /> : <Outlet context={{ user }} />} */}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
