import React from "react";
import Container from "../Container";
import logo from "../../../assets/images/a-logo.png";
import { href, Link, NavLink } from "react-router";
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import avatarImg from "../../../assets/images/placeholder.jpg";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../LoadingSpinner";
import useAxiosNormal from "../../../hooks/useAxiosNormal";

const Navbar3 = () => {
  const { user, logOut } = useAuth();
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

  const handleLogout = () => {
    logOut().then(() => {
      toast.success("LogOut successfully");
    });
  };
  const links = (
    <>
      {user ? (
        <>
          <li>
            <NavLink to={"/"}>
              <FaHome size={18} /> Home
            </NavLink>
          </li>

          {employee.role === "employee" && (
            <li className="dropdown">
              <div tabIndex={0} role="button" className=" ">
                <FaPeopleGroup /> Employee
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100/10 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <Link>My Assets</Link>
                </li>
                <li>
                  <Link>My Team</Link>
                </li>
                <li>
                  <Link>Request Asset</Link>
                </li>
                <li>
                  <Link>Profile</Link>
                </li>
                <li>
                  <Link>Logout</Link>
                </li>
              </ul>
            </li>
          )}

          {HrManager.role === "hr" && (
            <li className="dropdown">
              <div tabIndex={0} role="button" className=" ">
                <GrUserManager /> HR Manager
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100/10 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <Link>Asset List</Link>
                </li>
                <li>
                  <Link>Add Asset</Link>
                </li>
                <li>
                  <Link>All Requests</Link>
                </li>
                <li>
                  <Link>Employee List</Link>
                </li>
                <li>
                  <Link>Profile</Link>
                </li>
                <li>
                  <Link>Logout</Link>
                </li>
              </ul>
            </li>
          )}

          <li>
            <NavLink to={"/dashboard"}>
              <RxDashboard />
              Dashboard
            </NavLink>
          </li>
        </>
      ) : (
        <>
          {" "}
          <li>
            <NavLink to={"/"}>
              <FaHome size={18} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/employee"}>
              <FaPeopleGroup size={18} />
              Join as Employee
            </NavLink>
          </li>
          <li>
            <NavLink to={"/hrManager"}>
              {" "}
              <GrUserManager size={18} />
              Join as HR Manager
            </NavLink>
          </li>
        </>
      )}
      {/* <li className="dropdown">
        <div tabIndex={0} role="button" className=" ">
          <FaPeopleGroup/> Employee
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100/10 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <Link>My Assets</Link>
          </li>
          <li>
            <Link>My Team</Link>
          </li>
          <li>
            <Link>Request Asset</Link>
          </li>
          <li>
            <Link>Profile</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <div tabIndex={0} role="button" className=" ">
          <GrUserManager/> HR Manager
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100/10 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <Link>Asset List</Link>
          </li>
          <li>
            <Link>Add Asset</Link>
          </li>
          <li>
            <Link>All Requests</Link>
          </li>
          <li>
            <Link>Employee List</Link>
          </li>
          <li>
            <Link>Profile</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to={'/dashboard'}> <RxDashboard />Dashboard</NavLink>
      </li> */}
    </>
  );
  return (
    <div className=" fixed w-full bg-[#18212F] text-gray-300 z-10 shadow-sm">
      <Container>
        <div className="navbar px-0 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100/20 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div className="">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img src={logo} alt="logo" width="40" height="100" />
                <p className="text-2xl font-bold text-[#9435E7]">AssetVerse</p>
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <div className="hidden md:block">
              {/* Avatar */}
              <img
                className="rounded-full mr-2 border border-[#9435E7]"
                referrerPolicy="no-referrer"
                src={user && user.photoURL ? user.photoURL : avatarImg}
                alt="profile"
                height="40"
                width="40"
              />
            </div>
            {user ? (
              <button
                onClick={handleLogout}
                className="btn bg-[#9435E7] text-gray-200 border border-[#9435E7]"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                className="btn bg-[#9435E7] text-gray-200 border border-[#9435E7]"
              >
                login
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar3;
