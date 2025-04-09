import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <ScrollRestoration/>
      <div className="min-h-[calc(100vh-288px)] container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
