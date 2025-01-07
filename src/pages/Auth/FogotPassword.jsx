import { useContext } from "react";
import { FaFingerprint } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const FogotPassword = () => {
  //   console.log("this is forgot");

  const { forgotPassword } = useContext(AuthContext);
  const location = useLocation();
  const prefilledEmail = location.state?.email || "";

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);

    forgotPassword(email)
      .then(() => {
        toast.success("Password reset link sent!");
        window.location.href = "https://mail.google.com/";
      })
      .catch((err) => {
        // console.log(err.message);
        toast.error("Invalid email. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center md:min-h-[80vh] mt-8 md:mt-0">
      <div className="card md:w-96 border shadow-xl p-6 rounded-lg">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaFingerprint className="text-4xl text-emerald-500" />
        </div>
        {/* Title */}
        <h2 className="text-xl font-semibold text-center mb-2">
          Forgot password?
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          No worries, we’ll send you reset instructions.
        </p>
        {/* Email Input */}
        <form onSubmit={handleForgotPassword} className="mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            defaultValue={prefilledEmail}
            name="email"
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />

          {/* Reset Password Button */}
          <button className="btn mt-4 bg-emerald-500 text-white w-full">
            Reset password
          </button>
        </form>

        {/* Back to login */}
        <div className="text-center mt-6">
          <Link
            to="/auth/login"
            className="text-emerald-500 hover:underline shadow px-3 py-2 rounded-xl font-medium "
          >
            &larr; Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FogotPassword;
