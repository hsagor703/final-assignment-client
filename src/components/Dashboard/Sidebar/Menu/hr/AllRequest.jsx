
import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";
import { FaRegCheckCircle } from "react-icons/fa";
import MenuItem from "../MenuItem";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { RiDeleteBack2Line } from "react-icons/ri";
import { MdOutlineInstallMobile } from "react-icons/md";

const AllRequest = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const modalRef = useRef(null);
  const [assetId, setAssetId] = useState();
  const [search, setSearch] = useState("");
  const { refetch, data: requestData = [] } = useQuery({
    queryKey: ["requestData", search],
    queryFn: async () => {
      const res = await axiosInstance.get(`/requestData?search=${search}`);
      return res.data;
    },
  });

  // const handleEdit = (id) => {
  //   setAssetId(id);
  //   modalRef.current.showModal();
  // };

  // const handleUpdateProduct = async (data) => {
  //   const { name, image, productType, quantity } = data;
  //   const imageFile = image[0];
  //   const imageURL = await imageUpload(imageFile);
  //   const updateInfo = {
  //     productName: name,
  //     productImage: imageURL,
  //     productType,
  //     productQuantity: Number(quantity),
  //   };

  //   await axiosInstance.patch(`/assets/${assetId}`, updateInfo).then((res) => {
  //     if (res.data.modifiedCount) {
  //       refetch();
  //       modalRef.current.close();
  //       Swal.fire({
  //         title: "Updated",
  //         text: "Your asset has been Updated.",
  //         icon: "success",
  //       });
  //     }
  //   });
  // };

  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosInstance.delete(`/assets/${id}`).then((res) => {
  //         if (res?.data?.deletedCount) {
  //           refetch();
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "Your asset has been deleted.",
  //             icon: "success",
  //           });
  //         }
  //       });
  //     }
  //   });
  // };
  return (
    <div>
      <div className="overflow-x-auto border border-[#9435E7] text-gray-400 bg-[#18212F] rounded-xl">
        <MenuItem
          icon={MdOutlineInstallMobile}
          address={"/dashboard/all-request"}
          label={"All Requests"}
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
              placeholder="Search by Employee"
            />
          </label>
        </div>

        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-[#9435E7]">
              <th>#</th>
              <th>Employee</th>
              <th>Asset</th>
              <th>Request Date</th>
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
                          src={request.requestedPhotoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{request.requestedPerson}</div>
                    </div>
                  </div>
                </td>
                <td>{request.productInfo.productName}</td>
                <td>{request.requestedDate}</td>
                <td className={`${request.status === "pending" ? "text-amber-500" : request.status === "approve" ? "text-green-500" : "text-red-500"}`} >{request.status}</td>
                <th>
                  <button
                    onClick={"() => handleEdit(asset._id)"}
                    className="btn btn-success btn-sm mr-2 text-xl border"
                  >
                    <FaRegCheckCircle />{" "}
                    <span className="text-sm">Approve</span>
                  </button>
                  <button
                    onClick={"() => handleDelete(asset._id)"}
                    className="btn btn-error btn-sm text-xl"
                  >
                    <RiDeleteBack2Line />{" "}
                    <span className="text-sm">Reject</span>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRequest;
