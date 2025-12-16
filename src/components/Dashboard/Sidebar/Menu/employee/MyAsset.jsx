// import React from "react";

// const AllRequest = () => {
//   return (
//     <div>
//       <h2 className="bg-gray-300">
//         this is all request page Columns: Employee, Asset, Date, Status, Actions
//         (show in tabular format) Status: Pending, Approved, Rejected
//       </h2>
//     </div>
//   );
// };

// export default AllRequest;

import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";
import { FaRegCheckCircle } from "react-icons/fa";
import MenuItem from "../MenuItem";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { RiDeleteBack2Line, RiFileDownloadFill } from "react-icons/ri";
import { MdOutlineInstallMobile } from "react-icons/md";

const MyAsset = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const modalRef = useRef(null);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const { refetch, data: requestData = [] } = useQuery({
    queryKey: ["myAsset", search, filter, user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/requestData/?email=${user?.email}&search=${search}&filter=${filter}`
      );
      return res.data;
    },
  });

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <div className="overflow-x-auto border border-[#9435E7] text-gray-400 bg-[#18212F] rounded-xl">
        <MenuItem
          icon={RiFileDownloadFill}
          address={"/dashboard/my-asset"}
          label={"My Assets"}
        />

        <div className="flex justify-between">
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
                placeholder="Search by Asset Name"
              />
            </label>
          </div>

          <div className="pr-4">
            <select
              onChange={(e) => handleFilter(e)}
              defaultValue="Product Type"
              className="select bg-[#18212F] border border-[#9435E7]"
            >
              <option disabled={true}>Product Type</option>
              <option>Non-returnable</option>
              <option>Returnable</option>
            </select>
          </div>
        </div>

        <table className="table ">
          {/* head */}
          <thead>
            , Status
            <tr className="text-[#9435E7]">
              <th>#</th>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Company Name</th>
              <th>Approval Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requestData?.map((request, i) => (
              <tr key={request._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={request.productInfo.productImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {request.productInfo.productName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{request.productInfo.productType}</td>
                <td>{request.productInfo.companyName}</td>
                <td>{"Approve Date"}</td>
                <td
                  className={`${
                    request.status === "pending"
                      ? "text-amber-500"
                      : request.status === "approve"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {request.status}
                </td>
                <td>
                  {request?.productInfo?.productType === "Returnable" &&
                    request?.status === "approve" && (
                      <button className="btn btn-success btn-sm mr-2 text-xl border">
                        <FaRegCheckCircle />
                        <span className="text-sm">Return</span>
                      </button>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAsset;
