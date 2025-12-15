import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";
import { FaEdit, FaList } from "react-icons/fa";
import { FaDeleteLeft, FaTrash } from "react-icons/fa6";
import MenuItem from "../MenuItem";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../../../ImageGenerate";

const AssetList = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const modalRef = useRef(null);
  const [assetId, setAssetId] = useState();
  const [search, setSearch] = useState("");
  const { refetch, data: assets = [] } = useQuery({
    queryKey: ["assets", search],
    queryFn: async () => {
      const res = await axiosInstance.get(`/assets?search=${search}`);
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = useForm();

  const handleEdit = (id) => {
    setAssetId(id);
    modalRef.current.showModal();
  };

  const handleUpdateProduct = async (data) => {
    const { name, image, productType, quantity } = data;
    const imageFile = image[0];
    const imageURL = await imageUpload(imageFile);
    const updateInfo = {
      productName: name,
      productImage: imageURL,
      productType,
      productQuantity: Number(quantity),
    };

    await axiosInstance.patch(`/assets/${assetId}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        modalRef.current.close();
        Swal.fire({
          title: "Updated",
          text: "Your asset has been Updated.",
          icon: "success",
        });
      }
    });
  };

  const handleDelete = (id) => {
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
        axiosInstance.delete(`/assets/${id}`).then((res) => {
          if (res?.data?.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your asset has been deleted.",
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
          icon={FaList}
          address={"/dashboard/asset-list"}
          label={"Asset List"}
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
              <th>Name</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, i) => (
              <tr key={asset._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={asset.productImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{asset.productName}</div>
                    </div>
                  </div>
                </td>
                <td>{asset.productType}</td>
                <td>{asset.productQuantity}</td>
                <td>{asset.dateAdded}</td>
                <th>
                  <button
                    onClick={() => handleEdit(asset._id)}
                    className="btn btn-ghost btn-success btn-sm  text-xl"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(asset._id)}
                    className="btn btn-ghost btn-error btn-sm text-xl"
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box max-w-lg mx-auto p-6 bg-[#18212F] text-gray-400 shadow-lg rounded-2xl border border-[#9435E7]">
          <h2 className="text-2xl font-semibold mb-6 text-center text-[#9435E7]">
            Update Your Product
          </h2>
          <form
            onSubmit={handleSubmit(handleUpdateProduct)}
            className="space-y-5"
          >
            {/* Product Name */}
            <div>
              <label className="font-semibold">Product Name</label>
              <input
                type="text"
                className="w-full mt-2 p-3 border border-[#9435E7] rounded-xl focus:outline-[#9435E7] bg-[#9435E710] text-gray-300"
                placeholder="Enter product name"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>

            {/* Product Image */}
            <div>
              <label className="font-semibold">Product Image</label>
              <input
                type="file"
                className="w-full mt-2 p-3 border rounded-xl border-[#9435E7] file:bg-[#9435E7] file:p-1 file:px-2 file:text-sm file:rounded-md focus:outline-[#9435E7] bg-[#9435E710] text-gray-300"
                accept="image/*"
                {...register("image", { required: true })}
              />
              {errors.image?.type === "required" && (
                <p className="text-red-500 text-sm">
                  Product Image is required
                </p>
              )}
            </div>

            {/* Product Type */}
            <div>
              <label className="font-semibold">Product Type</label>
              <select
                className="w-full mt-2 p-3 border border-[#9435E7] rounded-xl focus:outline-[#9435E7] focus:ring-[#9435E740]  bg-[#9435E710] text-gray-300"
                {...register("productType", { required: true })}
              >
                <option value="">Select type</option>
                <option value="Returnable">Returnable</option>
                <option value="Non-returnable">Non-returnable</option>
              </select>
              {errors.productType?.type === "required" && (
                <p className="text-red-500 text-sm">Product Type is required</p>
              )}
            </div>

            {/* Product Quantity */}
            <div>
              <label className="font-semibold">Product Quantity</label>
              <input
                type="number"
                min="1"
                className="w-full mt-2 p-3 border border-[#9435E7] rounded-xl focus:outline-[#9435E7] bg-[#9435E710] text-gray-300"
                placeholder="Enter quantity"
                {...register("quantity", { required: true })}
              />
              {errors.quantity?.type === "required" && (
                <p className="text-red-500 text-sm">
                  Product quantity is required
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#9435E7] text-white p-3 rounded-xl font-semibold hover:bg-[#9435E740] hover:text-[#9435E7] transition ">
              Submit
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="w-full bg-[#9435E7] text-white p-3 rounded-xl font-semibold hover:bg-[#9435E740] hover:text-[#9435E7] transition mt-3">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssetList;
