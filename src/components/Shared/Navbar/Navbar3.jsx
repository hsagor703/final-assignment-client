import React from "react";
import Container from "../Container";
import logo from "../../../assets/images/a-logo.png";
import { Link, NavLink } from "react-router";
import {  FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";


const Navbar3 = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>
          <FaHome size={18} /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/employee"}>
          <FaPeopleGroup size={18}/>
          Join as Employee
        </NavLink>
      </li>
      <li>
        <NavLink to={"/hrManager"}> <GrUserManager size={18}/>Join as HR Manager</NavLink>
      </li>
      <li className="dropdown">
        <div tabIndex={0} role="button" className=" ">
          Employee
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
          HR Manager
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
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
      </li>
     
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
            <Link to={'/login'} className="btn bg-[#9435E7] text-gray-200 border border-[#9435E7]">
              login
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar3;
