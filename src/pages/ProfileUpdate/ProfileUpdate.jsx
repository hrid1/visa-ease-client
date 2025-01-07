import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProfileUpdate = () => {
  const { updateUserInfo, setRefetch, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  // handle the update form
  const handleUpdateForm = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const photo = e.target.photo.value;

    // console.log(name, photo);

    updateUserInfo(name, photo)
      .then(() => {
        // console.log("profile update succefull !");
        toast.success("Your profile is up-to-date!");
        navigate("/profile");
        setRefetch(Date.now());
      })
      .catch((err) => {
        // console.log(err.message);
        toast.error("Failed to update profile.");
      });

    // update this
  };

  return (
    <div>
      <>
        <h2 className="font-bold text-3xl ">Update Profile Information</h2>
        <section className="flex  items-center justify-center md:h-[60vh]">
          <div className="my-8 w-full rounded-md md:w-2/3 lg:w-1/3 mx-auto border shadow-md bg-opacity-50 py-4 px-6 ">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">My Profile</h2>
              <button className="text-xl font-bold cursor-pointer flex items-center justify-center gap-2">
                Edit
              </button>
            </div>
            <hr className="my-4 border-dashed bg-gray-700" />
            {/* form */}
            <form onSubmit={handleUpdateForm} className="">
              <div className="w-7/8 mt-5">
                <label htmlFor="userName">User Name</label>
                <br />
                <input
                  className="border outline-none px-3 py-1.5 rounded-md w-full mt-1 focus:outline-none"
                  name="username"
                  id="username"
                  type="text"
                  placeholder="username"
                  autoFocus
                />
              </div>

              <div className="w-7/8 mt-5">
                <label htmlFor="photo">Photo Url</label>
                <br />
                <input
                  className="border outline-none px-3 py-1.5 rounded-md w-full mt-1"
                  name="photo"
                  id="photo"
                  type="text"
                  placeholder="photo"
                />
              </div>

              <div className="text-center mt-6">
                <button className="btn  w-4/5  bg-emerald-500 text-white">
                  Update
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
    </div>
  );
};

export default ProfileUpdate;
