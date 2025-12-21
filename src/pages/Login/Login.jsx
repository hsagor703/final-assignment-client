import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const { createUser, updateUserProfile, loading, signIn } = useAuth();
  const [show, setShow] = useState(true)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then(() => {
        toast.success("login successfully");
        navigate(from);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100/10 text-gray-900">
        <div className="mb-4 text-center">
          <p className="text-sm text-gray-300">Welcome to AssetVerse</p>
          <h1 className="my-1 text-4xl font-bold text-[#9435E7]">
            Login for Access
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
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
            <div className="relative">
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="text-sm mb-2 text-gray-300"
                >
                  Password
                </label>
              </div>
              <input
                type={show ? 'text' : 'password'}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                })}
                autoComplete="new-password"
                placeholder="*******"
                className=" w-full px-3 py-2 border rounded-md border-[#9435E7] focus:outline-[#9435E7] bg-[#9435E710] text-gray-300"
              />

              <button onClick={() => setShow(!show)} type="button" className="absolute top-10 text-xl text-[#9435E7] right-3">
                {show ? <FaEye /> : <FaEyeSlash />}
                
              </button>
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm">Password is Required</p>
              )}
              {errors.password?.type === "minLength" && (
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

        <p className="px-6 mt-2 text-sm text-center text-gray-300">
          Don't have an account register? <br />
          <Link
            to="/employee"
            className=" mr-1 hover:underline hover:text-[#9435E7] text-[#9435E7]"
          >
            Employee
          </Link>
          or
          <Link
            to="/hrManager"
            className=" ml-1 hover:underline hover:text-[#9435E7] text-[#9435E7]"
          >
            HR Manager
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
