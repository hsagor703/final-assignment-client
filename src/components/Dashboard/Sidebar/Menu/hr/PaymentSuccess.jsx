import axios from "axios";
import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { IoBagCheckOutline } from "react-icons/io5";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const axiosInstance = useAxiosSecure();
  const sessionId = searchParams.get("session_id");
  console.log(sessionId);
  useEffect(() => {
    if (sessionId) {
      axiosInstance
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
        });
    }
  }, [sessionId]);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[#18212F] p-10 rounded-lg shadow-lg text-center">
        <IoBagCheckOutline className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-[#9435E7] mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order is being processed.
        </p>
        <Link to={'/dashboard/payment-info'} className="myBtn">
         Payment History
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
