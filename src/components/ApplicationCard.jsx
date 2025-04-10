import React from "react";
import { AiOutlineClockCircle, AiOutlineDollar } from "react-icons/ai";
import { FaPassport } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const ApplicationCard = ({ application, handleCancel }) => {
  const { _id, email, firstName, lastName, appliedDate, visaInfo } =
    application || {};

  //   console.log(visaInfo);

  return (
    <>
      <div className="card bg-base-200 shadow-lg rounded-lg p-4 relative flex flex-col md:flex-row">
        {/* Country Image Section */}
        <div className="w-full md:w-1/2 h-44 md:h-72 rounded-md overflow-hidden mb-4 md:mb-0">
          <img
            src={visaInfo?.countryimg}
            alt={visaInfo?.country}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Visa Details Section */}
        <div className="w-full md:w-2/3 md:pl-6">
          <h2 className="text-xl font-bold mb-2">{visaInfo?.country}</h2>

          <div className="text-md flex items-center mb-2">
            <FaPassport className="mr-2 text-blue-500" />
            <span className="font-semibold">Visa Type:</span>{" "}
            {visaInfo?.visatype}
          </div>

          <div className="text-md flex items-center mb-2">
            <AiOutlineClockCircle className="mr-2 text-green-500" />
            <span className="font-semibold">Processing Time:</span>{" "}
            {visaInfo?.processingtime}
          </div>

          <div className="text-md flex items-center mb-2">
            <AiOutlineDollar className="mr-2 text-yellow-500" />
            <span className="font-semibold">Fee:</span> ${visaInfo?.visafee}
          </div>

          <div className="text-md flex items-center mb-2">
            <span className="mr-2 font-semibold">Validity:</span>
            {visaInfo?.formattedDate}
          </div>

          <div className="text-md flex items-center mb-2">
            <span className="mr-2 font-semibold">Application Method:</span>
            {visaInfo?.applicationmethod}
          </div>

          <div className="text-md flex items-center mb-2">
            <span className="mr-2 font-semibold">Applied Date:</span>
            {appliedDate}
          </div>

          <div className="text-md flex items-center mb-2">
            <span className="mr-2 font-semibold">Applicant Name:</span>
            {firstName} {lastName}
          </div>

          <div className="text-md flex items-center mb-4">
            <span className="mr-2 font-semibold">Applicant Email:</span>
            {email}
          </div>

          {/* Cancel Button */}
          <div className="flex justify-end">
            <button
              onClick={() => handleCancel(_id)}
              className="btn btn-error flex items-center space-x-1"
            >
              <MdOutlineCancel />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationCard;
