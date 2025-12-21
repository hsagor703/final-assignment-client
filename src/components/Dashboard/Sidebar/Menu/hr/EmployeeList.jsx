import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";
import { FaPeopleGroup, FaTrash } from "react-icons/fa6";
import MenuItem from "../MenuItem";
import Swal from "sweetalert2";
import { Link } from "react-router";

const EmployeeList = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const [company, setCompany] = useState([])
  const [search, setSearch] = useState("");
  const { refetch, data: myEmployee = [] } = useQuery({
    queryKey: ["myEmployee", search],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/employee?HRManagerUid=${user?.uid}&search=${search}`
      );
      return res.data;
    },
  });


  const { data: HrManager = {} } = useQuery({
      queryKey: ["HrManager", user?.email],
      queryFn: async () => {
        const res = await axiosNormal.get(`/hrManager?email=${user?.email}`);
        return res.data;
      },
    });


  const handleRemoveEmployee = (id, hrId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/employee/${id}?hrId=${hrId}`).then((res) => {
          if (res?.data?.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your employee has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto border border-[#9435E7] text-gray-400 bg-[#18212F] rounded-xl">
        <MenuItem
          icon={FaPeopleGroup}
          address={"/dashboard/employee-list"}
          label={"My Employee List"}
        />

        <div className="pl-4">
          <label className="input border border-[#9435E7] bg-[#18212F]">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search by Name"
            />
          </label>
        </div>

        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-[#9435E7]">
              <th>#</th>
              <th>Employee Name</th>
              <th>Employee Email</th>
              <th>Asset Count</th>
              <th>Join Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myEmployee.map((employee, i) => {
              const filterConnectedCompany = employee.connectedCompany.find(c =>c.HRManagerUid === user?.uid)
              // console.log(filterConnectedCompany);
              return (
                 <tr key={employee._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={employee.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{employee.name}</div>
                    </div>
                  </div>
                </td>
                <td>{employee.email}</td>
                <td>{filterConnectedCompany.assetCount}</td>
                <td>{filterConnectedCompany.joinDate}</td>
                <th>
                  <button
                    onClick={() => handleRemoveEmployee(employee._id,HrManager?._id)}
                    className="btn btn-ghost btn-error btn-sm text-xl"
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
              )
            }
              // const filterConnectedCompany = employee.fiter(Connect)
              // <tr key={employee._id}>
              //   <td>{i + 1}</td>
              //   <td>
              //     <div className="flex items-center gap-3">
              //       <div className="avatar">
              //         <div className="mask mask-squircle h-12 w-12">
              //           <img
              //             src={employee.photoURL}
              //             alt="Avatar Tailwind CSS Component"
              //           />
              //         </div>
              //       </div>
              //       <div>
              //         <div className="font-bold">{employee.name}</div>
              //       </div>
              //     </div>
              //   </td>
              //   <td>{employee.email}</td>
              //   <td>{employee.assetCount}</td>
              //   <td>{employee.joinDate}</td>
              //   <th>
              //     <button
              //       onClick={() => handleRemoveEmployee(employee._id,HrManager?._id)}
              //       className="btn btn-ghost btn-error btn-sm text-xl"
              //     >
              //       <FaTrash />
              //     </button>
              //   </th>
              // </tr>
            )}
          </tbody>
        </table>

        <div className="border-t border-[#9435E7]"></div>

        <div className="grid justify-center mt-3">
          <h2 className="text-center w-62 p-3 rounded-sm  border border-[#9435E7] text-[#9435E7]">{myEmployee.length}/{HrManager.packageLimit} Employee Used</h2>
          <Link to={'/dashboard/employee-add'} className="myBtn w-62 mb-5 text-center">Add Employee</Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
