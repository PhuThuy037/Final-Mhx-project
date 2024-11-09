import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Events,
  EventsCommunity,
  Error,
  AddEvent,
  Logout,
  // Stats,
  // AllJobs,
  // Profile,
  // Admin,
  // EditJob,
} from "./pages";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
import { action as logoutAction } from "./pages/action";
import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { action as eventAction } from "./pages/AddEvent";
// import { action as logoutAction } from "./pages/Logout";

// import { loader as dashboardLoader } from "./pages/DashboardLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction(queryClient),
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout queryClient={queryClient} />,
    // loader: dashboardLoader(queryClient),
    children: [
      {
        index: true,
        element: <EventsCommunity />,
      },
      {
        path: "add-event",
        element: <AddEvent />,
        action: eventAction(queryClient),
      },
      {
        path: "all-by-university",
        element: <Events />,
      },

      {
        path: "logout", // Route logout
        element: <Logout />,
        action: logoutAction(queryClient),
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
