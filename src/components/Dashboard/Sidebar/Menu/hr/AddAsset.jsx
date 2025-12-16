import React from "react";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../../../ImageGenerate";
import useAuth from "../../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosNormal from "../../../../../hooks/useAxiosNormal";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddAsset = () => {
  const { user } = useAuth();
  const axiosNormal = useAxiosNormal();
  const axiosInstance = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = useForm();

  const { data: HrManager = {} } = useQuery({
    queryKey: ["HrManager", user?.email],
    queryFn: async () => {
      const res = await axiosNormal.get(`hrManager?email=${user?.email}`);
      return res.data;
    },
  });

  const handleAddProduct = async (data) => {
    const { name, image, productType, quantity } = data;
    const imageFile = image[0];
    const imageURL = await imageUpload(imageFile);
    // console.log(imageURL, name, productType, Number(quantity));
    const productInfo = {
      productName: name,
      productImage: imageURL,
      productType,
      productQuantity: Number(quantity),
      dateAdded: new Date().toLocaleDateString(),
      hrEmail: HrManager.email,
      companyName: HrManager.companyName,
    };

    await axiosInstance.post("/assets", productInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Create your asset successfully",
          icon: "success",
          draggable: true,
        });
        reset()
      }
    });
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-[#18212F] text-gray-400 shadow-lg rounded-2xl border border-[#9435E7]">
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#9435E7]">
        Add New Asset
      </h2>

      <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-5">
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
            <p className="text-red-500 text-sm">Product Image is required</p>
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
            <p className="text-red-500 text-sm">Product quantity is required</p>
          )}
        </div>

        {/* Submit Button */}
        <button className="w-full bg-[#9435E7] text-white p-3 rounded-xl font-semibold hover:bg-[#9435E740] hover:text-[#9435E7] transition ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddAsset;
