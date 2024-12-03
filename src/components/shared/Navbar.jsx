import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(logOut)
  // ------------ handle logout-----------
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Goodbye! See you soon!");
      })
      .catch();
  };
  // -------------all_navlinks-----------
  const navLinks = (
    <div className="flex flex-col lg:flex-row gap-5 font-medium">
      <NavLink
        className={({ isActive }) =>
          isActive ? "font-bold text-emerald-500" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "font-bold text-emerald-500" : ""
        }
        to="/allvisas"
      >
        All Visas
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "font-bold text-emerald-500" : ""
        }
        to="/addvisa"
      >
        Add Visa
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "font-bold text-emerald-500" : ""
        }
        to="/myvisas"
      >
        My added visas
      </NavLink>
      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-emerald-500" : ""
          }
          to="/visa-application"
        >
          Application
        </NavLink>
      )}
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100 container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">visa</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <section className="flex gap-3  items-center ">
              <div className="avatar placeholder border-2 rounded-full">
                <div className="avatar">
                  <div className="w-11 rounded-full">
                    <img
                      src={user?.photoURL}
                      alt="profile-pic"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="px-3 bg-emerald-500 text-white font-medium rounded-md  py-2"
              >
                Logout
              </button>
            </section>
          ) : (
            <Link
              to="/login"
              className="px-3 bg-emerald-500 text-white font-medium rounded-md  py-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
