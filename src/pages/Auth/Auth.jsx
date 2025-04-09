import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";

const Auth = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h- [calc(100vh-80px)] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
