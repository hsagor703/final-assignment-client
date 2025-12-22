// import { MdBusinessOff } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { Link } from "react-router";
import { BsFillBagXFill } from "react-icons/bs";


const NoCompanyAffiliation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#18212F] max-w-md w-full rounded-2xl shadow-lg p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <BsFillBagXFill   className="text-gray-400 text-6xl" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-[#9435E7] mb-2">
          No Company Affiliation
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          You are currently not connected to any company. Once an HR manager
          adds you to their organization, you’ll be able to access company
          assets and team information.
        </p>

        {/* Actions */}
        <div className="space-y-3">
          <Link
            to="/"
            className="block w-full bg-[#9435E7] text-white py-3 rounded-xl font-semibold hover:bg-[#7b28c9] transition"
          >
            Go to Home
          </Link>

          <p className="text-sm text-gray-400">
            Please contact your HR if you believe this is a mistake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoCompanyAffiliation;
