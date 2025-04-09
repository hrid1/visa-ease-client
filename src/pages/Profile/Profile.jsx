import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEdit, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(user);

  return (
    <div className="min-h-screen bg-base-200">
      {/* Welcome Message */}
      <div className="py-8 text-center">
        <h1 className="text-4xl font-bold text-emerald-600">
          Welcome, {user?.displayName} !
        </h1>
      </div>

      {/* Profile Card */}
      <div className="max-w-lg mx-auto bg-teal-50 shadow-lg rounded-lg p-6">
        {/* User Avatar */}
        <div className="flex justify-center mb-6">
          {user?.photoURL ? (
            <img
              src={user?.photoURL}
              alt="User Profile"
              className="w-24 h-24 rounded-full border-4 border-emerald-500"
            />
          ) : (
            <FaUserCircle className="text-[96px] text-gray-400" />
          )}
        </div>

        {/* User Details */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 flex items-center justify-center gap-4">
            <FaUserCircle></FaUserCircle>
            {user.displayName}
          </h2>

          <p className="flex items-center justify-center mt-4 text-gray-600">
            <FaEnvelope className="mr-2 text-emerald-500" />
            {user.email}
          </p>
        </div>

        {/* Update Profile Button */}
        <div className="mt-8 text-center flex justify-between">
          <button className="btn bg-emerald-500 text-white  flex items-center justify-center"
          onClick={() => navigate(-1)}>
            <FaArrowLeftLong className="text-lg" /> Go Back
          </button>

          <button
            className="btn bg-emerald-500 text-white  flex items-center justify-center"
            onClick={() => navigate("/update-profile")}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
