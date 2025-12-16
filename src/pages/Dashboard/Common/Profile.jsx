import useAuth from "../../../hooks/useAuth";
import coverImg from "../../../assets/images/cover-image.jpg";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../ImageGenerate";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const modalRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState:{isLoading}
  } = useForm();
  const handleProfile = () => {
    modalRef.current.showModal();
  };

  const handleUpdateProfile = async (data) => {
    const { name, image } = data;
    const imageFile = image[0];
    const imageURL = await imageUpload(imageFile);
    await updateUserProfile(name, imageURL)
      .then(() => {
        console.log("profile updated");
        reset()
        modalRef.current.close();
        Swal.fire({
          title: "Profile Update",
          text: "Profile Updated Successfully",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#18212F] shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        <img
          alt="cover photo"
          src={coverImg}
          className="w-full mb-4 rounded-t-lg h-56"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16 text-gray-500">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-[#9435E7] "
            />
          </a>

          {/* <p className='p-2 px-4 text-xs text-white bg-lime-500 rounded-full'>
            Customer
          </p> */}
          <p className="mt-2 text-xl font-medium text-gray-600 ">
            User Id: {user?.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-gray-500 ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-gray-500 ">{user?.email}</span>
              </p>

              <div>
                <button
                  onClick={handleProfile}
                  className="bg-[#9435E7]  px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#9435E740] hover:text-[#9435E7 block mb-1"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <dialog ref={modalRef} className="modal">
          <div className="modal-box max-w-lg mx-auto p-6 bg-[#18212F] text-gray-400 shadow-lg rounded-2xl border border-[#9435E7]">
            <h2 className="text-2xl font-semibold mb-6 text-center text-[#9435E7]">
              Profile UpdateInfo
            </h2>

            <form
              onSubmit={handleSubmit(handleUpdateProfile)}
              className="space-y-5"
            >
              {/* Product Name */}
              <div>
                <label className="font-semibold"> Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 border border-[#9435E7] rounded-xl focus:outline-[#9435E7] bg-[#9435E710] text-gray-300"
                  placeholder="enter your name"
                  {...register("name")}
                />
              </div>
              <div>
                <label className="font-semibold"> Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full px-3 py-2 border rounded-md border-[#9435E7] file:bg-[#9435E7] file:p-1 file:px-2 file:text-sm file:rounded-md focus:outline-[#9435E7] bg-[#9435E710] text-gray-300"
                  {...register("image")}
                />
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#9435E7] text-white p-3 rounded-xl font-semibold hover:bg-[#9435E740] hover:text-[#9435E7] transition ">
                Submit
              </button>
            </form>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="w-full bg-[#9435E7] text-white p-3 rounded-xl font-semibold hover:bg-[#9435E740] hover:text-[#9435E7] transition mt-3">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Profile;
