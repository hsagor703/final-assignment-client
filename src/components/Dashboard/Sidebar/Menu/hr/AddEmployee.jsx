import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";
import MenuItem from "../MenuItem";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { RiFolderAddFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdPersonAddAlt1 } from "react-icons/md";
import useAxiosNormal from "../../../../../hooks/useAxiosNormal";
import { BsCoin } from "react-icons/bs";
import { Link } from "react-router";

const AddEmployee = () => {
  const { user } = useAuth();
  const axiosNormal = useAxiosNormal();
  console.log(user.uid);
  const axiosInstance = useAxiosSecure();
  const { data: employees = [] } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/employee`);
      return res.data;
    },
  });

  const { data: HrManager = {} } = useQuery({
    queryKey: ["HrManager", user?.email],
    queryFn: async () => {
      const res = await axiosNormal.get(`hrManager?email=${user?.email}`);
      return res.data;
    },
  });


  const handleAdd = (data) => {
    const addInfo = {
      HRManagerUid: user.uid,
      assetCount: 0,
      joinDate: new Date().toLocaleDateString(),
    };

    axiosInstance.patch(`/employee/${data._id}`, addInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Added",
          text: "Employee has been Added successfully.",
          icon: "success",
        });
      }

      if (res.data.modifiedCount === 0) {
        Swal.fire({
          title: "opps",
          text: "Employee has been Already Added !!!.",
          icon: "error",
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto border border-[#9435E7] text-gray-400 bg-[#18212F] rounded-xl">
        <MenuItem
          icon={MdPersonAddAlt1}
          address={"/dashboard/employee-add"}
          label={"Add Employee"}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-5 px-4">
          {employees.map((employee) => (
            <div
              key={employee._id}
              className="card  shadow-sm  border border-gray-700"
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={employee.photoURL}
                  alt={employee.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </figure>
              <div className="card-body bg-[#18213F] rounded-b-2xl">
                <h2 className="card-title">Name: {employee.name}</h2>
                <h2 className="card-title">Email: {employee.email}</h2>

                <div className="card-actions ">
                  {HrManager?.currentEmployees === 5 ? (
                    <Link to={'/dashboard/packages'} className="w-full bg-[#9435E7] text-white p-3 rounded-xl font-semibold hover:bg-[#9435E740] hover:text-[#9435E7] transition">
                      <div className="flex items-center justify-center">
                        <BsCoin color="yellow" size={22} className="mr-2" />
                        <span>Upgrade Your Package</span>
                      </div>
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleAdd(employee)}
                      className="w-full bg-[#9435E7] text-white p-3 rounded-xl font-semibold hover:bg-[#9435E740] hover:text-[#9435E7] transition"
                    >
                      <div className="flex items-center justify-center">
                        <MdPersonAddAlt1 className="mr-2" />
                        <span>Add</span>
                      </div>
                    </button>
                  )}
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
