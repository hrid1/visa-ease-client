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
import VisaDetails from "../pages/VisaDetails/VisaDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allvisas",
        loader: () => fetch("http://localhost:8000/visas"),
        element: <AllVisa />,
      },
      {
        path: "/visa/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:8000/visa/${params.id}`),
        element: (
          <PrivateRoutes>
            <VisaDetails />
          </PrivateRoutes>
        ),
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
        loader: () => fetch("http://localhost:8000/visas"),
        element: (
          <PrivateRoutes>
            <MyVisa />
          </PrivateRoutes>
        ),
      },
      {
        path: "/visa-application",
        loader: () => fetch("http://localhost:8000/application"),
        element: (
          <PrivateRoutes>
            <VisaApplication />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
