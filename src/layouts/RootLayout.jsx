import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
