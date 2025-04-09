import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import Learning from "../pages/Learning/Learning";
import Tutorial from "../pages/Tutorial/Tutorial";
import Lesson from "../pages/Lesson/Lesson";
import ErrorPage from "../pages/Error/ErrorPage";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/FogotPassword";
import Profile from "../pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import ProfileUpdate from "../pages/ProfileUpdate/ProfileUpdate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/learning",
        element: <Learning />,
      },
      {
        path: "/tutorial",
        element: <Tutorial />,
      },
      {
        path: "/lesson/:id",
        element: (
          <PrivateRoutes>
            <Lesson />
          </PrivateRoutes>
        ),
        loader: () => fetch("../vacab2data.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoutes>
           <ProfileUpdate/>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>
      },
    ],
  },
]);
