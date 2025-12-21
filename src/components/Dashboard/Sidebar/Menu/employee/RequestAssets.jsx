import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";
import MenuItem from "../MenuItem";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { RiFolderAddFill } from "react-icons/ri";

const AssetList = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const modalRef = useRef(null);
  const [assetData, setAssetData] = useState({});
  const [search, setSearch] = useState("");
  const { refetch, data: assets = [] } = useQuery({
    queryKey: ["assets", search],
    queryFn: async () => {
      const res = await axiosInstance.get(`/assets?search=${search}`);
      return res.data;
    },
  });

  const { data: employeeData = {} } = useQuery({
    queryKey: ["employee", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/employee/${user?.email}`);
      return res.data;
    },
  });

  const obj = Object.assign({},...assets)
  const connectedCompany = employeeData?.connectedCompany?.find(c => c.hrEmail === obj.hrEmail)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = useForm();

  const handleRequest = (data) => {
    setAssetData(data);
    modalRef.current.showModal();
  };

  const handleRequestProduct = async (data) => {
    const { textarea } = data;
    const requestInfo = {
      requestedNote: textarea || "my note",
      requestedDate: new Date().toLocaleDateString(),
      requestedPerson: user?.displayName,
      requestedEmail: user?.email,
      requestedPhotoURL: user?.photoURL,
      requestedUid: user?.uid,
      status: "pending",
      requestedId: employeeData?._id,
      requestedAsset: connectedCompany?.assetCount,
      productInfo: {
        companyName: assetData?.companyName,
        dateAdded: assetData?.dateAdded,
        hrEmail: assetData?.hrEmail,
        productImage: assetData?.productImage,
        productName: assetData?.productName,
        productQuantity: assetData?.productQuantity,
        productType: assetData?.productType,
        productId: assetData?._id,
      },
    };

    await axiosInstance.post("/requestData", requestInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        modalRef.current.close();
        Swal.fire({
          title: "Request",
          text: "Request submitted Successfully",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto border border-[#9435E7] text-gray-400 bg-[#18212F] rounded-xl">
        <MenuItem
          icon={RiFolderAddFill}
          address={"/dashboard/request-assets"}
          label={"Request Assets"}
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
              placeholder="Search"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-5 px-4">
          {assets.map((asset) => (
            <div
              key={asset._id}
              className="card  shadow-sm  border border-gray-700"
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={asset.productImage}
                  alt={asset.productName}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </figure>
              <div className="card-body bg-[#18213F] rounded-b-2xl">
                <h2 className="card-title">{asset.productName}</h2>
                <h2 className="card-title">
                  Quantity: <span className="">{asset.productQuantity}</span>
                </h2>
                <h2 className="card-title">
                  Type: <span className="">{asset.productType}</span>
                </h2>
                <div className="card-actions ">
                  {asset.productQuantity === 0 ? (
                    <button className="w-full bg-[#9435E7] text-white p-3 rounded-xl font-semibold hover:bg-[#9435E740] hover:text-[#9435E7] transition">
                      Not Available
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRequest(asset)}
                      className="w-full bg-[#9435E7] text-white p-3 rounded-xl font-semibold hover:bg-[#9435E740] hover:text-[#9435E7] transition"
                    >
                      Request
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box max-w-lg mx-auto p-6 bg-[#18212F] text-gray-400 shadow-lg rounded-2xl border border-[#9435E7]">
          <h2 className="text-2xl font-semibold mb-6 text-center text-[#9435E7]">
            Request Assets
          </h2>

          <form
            onSubmit={handleSubmit(handleRequestProduct)}
            className="space-y-5"
          >
            {/* Product Name */}
            <div>
              <label className="font-semibold">{assetData?.productName}</label>
              <textarea
                type="text"
                cols={6}
                rows={4}
                className="w-full mt-2 p-3 border border-[#9435E7] rounded-xl focus:outline-[#9435E7] bg-[#9435E710] text-gray-300"
                placeholder="note"
                {...register("textarea")}
              />
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
