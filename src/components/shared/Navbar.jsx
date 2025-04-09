import { useContext } from "react";
import { PiGoogleCardboardLogoBold } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogout = () => {
    logOut()
      .then(() => {
        // alert("User LogOut");
        toast.success("Goodbye! See you soon!");
      })
      .catch();
  };

  // all navlinks
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
        to="/learning"
      >
        Learning
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "font-bold text-emerald-500" : ""
        }
        to="/tutorial"
      >
        Tutorials
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "font-bold text-emerald-500" : ""
        }
        to="/about"
      >
        About Us
      </NavLink>
      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-emerald-500" : ""
          }
          to="/profile"
        >
          Profile
        </NavLink>
      )}
    </div>
  );

  return (
    <>
      {user && (
        <div className=" mx-auto text-xs font-sh text-center bg-emerald-50 py-1">
          <p>
            Hello, <span className="font-medium">{user.displayName}!</span>{" "}
            We&apos;re glad to have you back!
          </p>
        </div>
      )}

      <div className="navbar backdrop-blur-lg	 bg-emerald-5 container py-4 mx-auto sticky top-0 z-50">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-2 w-40 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 text-xl md:text-2xl font-bold text-emerald-600"
          >
            <PiGoogleCardboardLogoBold />
            LexiQuest
          </Link>
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
                    <img src={user?.photoURL} alt="profile-pic"  referrerPolicy="no-referrer"    />
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
              to="/auth/login"
              className="px-3 bg-emerald-500 text-white font-medium rounded-md  py-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
