import { RouteObject } from "react-router-dom";
import Home from "../pages/Home/index";
import RootLayout from "../layout/RootLayout";
import Profile from "../pages/Profile"
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Search from "../pages/Search";
import Followings from "../pages/Followings";
import AuthLayout from "../layout/AuthLayout";
import DetailThread from "../pages/DetailThread/detailThread";

const router: RouteObject[] = [
   {
      path: "/",
      element: <RootLayout />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: "profile/:profileId",
            element: <Profile />,
         },
         {
            path: "search",
            element: <Search />,
         },
         {
            path: "follows",
            element: <Followings />,
         },
      ],
   },
   {
      path:"thread/detail/:threadId",
      element:<DetailThread/>
   },
   {
      path: "/auth",
      element: <AuthLayout />,
      children: [
         {
            path: "login",
            element: <Login />,
         },
         {
            path: "register",
            element: <Register />,
         },
      ],
   },
];

export default router;
