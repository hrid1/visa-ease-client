import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllVisa from "../pages/AllVisa/AllVisa";
import AddVisa from "../pages/AddVisa/AddVisa";
import PrivateRoutes from "./PrivateRoutes";
import MyVisa from "../pages/MyVisa/MyVisas";
import VisaApplication from "../pages/VisaApplication/VisaApplication";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allvisas",
        element: <AllVisa />,
      },
      {
        path: "/addvisa",
        element: (
          <PrivateRoutes>
            <AddVisa />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myvisas",
        element: (
          <PrivateRoutes>
            <MyVisa />
          </PrivateRoutes>
        ),
      },
      {
        path: "/visa-application",
        element: (
          <PrivateRoutes>
            <VisaApplication/>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
