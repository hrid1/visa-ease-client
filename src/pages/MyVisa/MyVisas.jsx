import React from "react";
import { AiOutlineClockCircle, AiOutlineDollar } from "react-icons/ai";
import { FaPassport } from "react-icons/fa";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";

const MyVisas = () => {
  const visas = useLoaderData();

  return (
    <section className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">My Added Visas</h1>

      {/* Visa Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {visas.map((visa, index) => (
          <div
            key={index}
            className="card bg-white shadow-lg rounded-lg p-4 relative"
          >
            {/* Country Image */}
            <div className="w-full h-40 rounded-md overflow-hidden mb-4">
              <img
                src={visa.countryimg}
                alt={visa.country}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Visa Details */}
            <h2 className="text-lg font-bold mb-2">{visa.country}</h2>
            <p className="text-sm flex items-center mb-2">
              <FaPassport className="mr-2 text-blue-500" />
              Visa Type: {visa.visatype}
            </p>
            <p className="text-sm flex items-center mb-2">
              <AiOutlineClockCircle className="mr-2 text-green-500" />
              Processing Time: {visa.processingtime}
            </p>
            <p className="text-sm flex items-center mb-2">
              <AiOutlineDollar className="mr-2 text-yellow-500" />
              Fee: ${visa.visafee}
            </p>
            <p className="text-sm flex items-center mb-4">
              <span className="mr-2 font-semibold">Validity:</span>
              {visa.validity}
            </p>
            <p className="text-sm flex items-center mb-4">
              <span className="mr-2 font-semibold">Application Method:</span>
              {visa.applicationmethod}
            </p>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <button
                className="btn btn-secondary btn-sm flex items-center space-x-1"
                onClick={() => onUpdate(visa.id)}
              >
                <FiEdit />
                <span>Update</span>
              </button>
              <button
                className="btn btn-error btn-sm flex items-center space-x-1"
                onClick={() => onDelete(visa.id)}
              >
                <FiTrash />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyVisas;
