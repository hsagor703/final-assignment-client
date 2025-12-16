import { useState } from "react";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../assets/images/a-logo.png";
// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";

// User Menu
import MenuItem from "./Menu/MenuItem";
import AdminMenu from "./Menu/AdminMenu";
import SellerMenu from "./Menu/SellerMenu";
import CustomerMenu from "./Menu/CustomerMenu";
import HrManagerBar from "./Menu/hr/HrManagerBar";
import EmployeeBar from "./Menu/employee/EmployeeBar";
import useAxiosNormal from "../../../hooks/useAxiosNormal";
import { useQuery } from "@tanstack/react-query";

const Sidebar = () => {
  const { logOut, user } = useAuth();
  const [isActive, setActive] = useState(false);
  const axiosNormal = useAxiosNormal();

  const { data: HrManager = {} } = useQuery({
    queryKey: ["HrManager", user?.email],
    queryFn: async () => {
      const res = await axiosNormal.get(`hrManager?email=${user?.email}`);
      return res.data;
    },
  });

  const { data: employee = {} } = useQuery({
    queryKey: ["employee", user?.email],
    queryFn: async () => {
      const res = await axiosNormal.get(`employee?email=${user?.email}`);
      return res.data;
    },
  });

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar, only visible till md breakpoint */}
      <div className=" text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="  rounded-xl mx-auto pb-2">
            {/* Logo */}
            <Link to="/" className="flex items-center justify-center">
              <img src={logo} alt="logo" width="50" height="100" />
              <p className="text-2xl font-bold text-[#9435E7]">AssetVerse</p>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none text-[#9435E7]"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#18212F] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* Top Content */}
          <div>
            <div className=" #9435E7 bg-[#9435E750] rounded-xl mx-auto py-2">
              <Link to="/" className="flex items-center justify-center">
                <img src={logo} alt="logo" width="50" height="100" />
                <p className="text-2xl font-bold text-[#9435E7]">AssetVerse</p>
              </Link>
            </div>
          </div>

          {/* Middle Content */}
          <div className="flex flex-col justify-between flex-1 mt-2">
            <nav>
              <MenuItem
                icon={BsGraphUp}
                label="Statistics"
                address="/dashboard"
              />
              {/* Role-Based Menu */}
              <CustomerMenu />
              <SellerMenu />
              <AdminMenu />
              {HrManager.role === "hr" && <HrManagerBar />}
              {employee.role === "employee" && <EmployeeBar />}
            </nav>
          </div>

          {/* Bottom Content */}
          <div>
            <hr className="text-[#9435E7]" />

            <MenuItem
              icon={FcSettings}
              label="Profile"
              address="/dashboard/profile"
            />
            <button
              onClick={logOut}
              className="flex cursor-pointer w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-[#9435E740]   hover:text-[#9435E7] transition-colors duration-300 transform"
            >
              <GrLogout className="w-5 h-5" />
              <span className="mx-4 font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
