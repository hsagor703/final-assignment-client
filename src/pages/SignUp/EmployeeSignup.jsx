import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { createUser, updateUserProfile, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const handleEmployee = (data) => {
   console.log('from employee signin', data);
  };

  // form submit handler
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   try {
  //     //2. User Registration
  //     const result = await createUser(email, password);

  //     //3. Save username & profile photo
  //     await updateUserProfile(
  //       name,
  //       "https://lh3.googleusercontent.com/a/ACg8ocKUMU3XIX-JSUB80Gj_bYIWfYudpibgdwZE1xqmAGxHASgdvCZZ=s96-c"
  //     );
  //     console.log(result);

  //     navigate(from, { replace: true });
  //     toast.success("Signup Successful");
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err?.message);
  //   }
  // };

  // Handle Google Signin
  // const handleGoogleSignIn = async () => {
  //   try {
  //     //User Registration using google
  //     await signInWithGoogle();

  //     navigate(from, { replace: true });
  //     toast.success("Signup Successful");
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err?.message);
  //   }
  // };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100/10 text-gray-900">
        <div className="mb-4 text-center">
          <p className="text-sm text-gray-300">Welcome to AssetVerse</p>
          <h1 className="my-1 text-4xl font-bold text-[#9435E7]">
            Join as Employee
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(handleEmployee)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-[#9435E7] focus:outline-[#9435E7] bg-[#9435E710] text-gray-300"
                data-temp-mail-org="0"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>
            {/* Image */}
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Profile Image
              </label>
              <input
                {...register('image',{required:true})}
                type="file"
                accept="image/*"
                className="w-full px-3 py-2 border rounded-md border-[#9435E7] file:bg-[#9435E7] file:p-1 file:px-2 file:text-sm file:rounded-md focus:outline-[#9435E7] bg-[#9435E710] text-gray-300"
              />
              <p className="mt-1 text-xs text-gray-400">
                PNG, JPG or JPEG (max 2MB)
              </p>
               {errors.image?.type === "required" && (
                <p className="text-red-500 text-sm">File is Required</p>
              )}
              
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-gray-300 text-sm"
              >
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-[#9435E7] focus:outline-[#9435E7] bg-[#9435E710] text-gray-300"
                data-temp-mail-org="0"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 text-sm">Email is Required</p>
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="text-sm mb-2 text-gray-300"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                })}
                autoComplete="new-password"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-[#9435E7] focus:outline-[#9435E7] bg-[#9435E710] text-gray-300"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm">Password is Required</p>
              )}
              {errors.password?.type === "minlength" && (
                <p className="text-red-500 text-sm">
                  Password must be at least 6 character
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 text-sm">
                  Password must contain 6 character and uppercase, lowercase,
                  number & special character
                </p>
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="text-sm mb-2 text-gray-300"
                >
                  Date of Birth
                </label>
              </div>
              <input
                type="date"
                {...register("date", { required: true })}
                placeholder="Date of Birth"
                className="w-full px-3 py-2 border rounded-md border-[#9435E7] focus:outline-[#9435E7] bg-[#9435E710] text-gray-300"
              />
              {errors.date?.type === "required" && (
                <p className="text-red-500 text-sm">date is Required</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#9435E7] w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        {/* <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div> */}
        <p className="px-6 mt-2 text-sm text-center text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-[#9435E7] text-[#9435E7]"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
