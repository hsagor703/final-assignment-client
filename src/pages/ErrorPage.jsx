import { FaArrowAltCircleLeft, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#19142D] ">
      <div className="container flex  items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text- rounded-full border text-[#9435E7] font-boldbg-blue-50 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-400  md:text-3xl">
            Something Went Wrong!
          </h1>
          <p className="mt-4 text-gray-400 ">Here are some helpful links:</p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button
              onClick={() => navigate(-1)}
              className="myBtn "
            >
              <span className="flex items-center justify-center  text-sm">
                <FaArrowAltCircleLeft className="mr-2" /> <span>Back</span>
              </span>
            </button>

            <button className="myBtn" onClick={() => navigate("/")}>
              <span className="flex items-center justify-center text-sm">
                <FaHome className="mr-2" /> <span>Home</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
