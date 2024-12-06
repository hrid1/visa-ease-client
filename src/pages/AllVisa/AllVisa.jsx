import React from "react";
import { AiOutlineClockCircle, AiOutlineDollar } from "react-icons/ai";
import { FaPassport } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllVisa = () => {
  const visas = useLoaderData();
  const navigate = useNavigate();

  console.log(visas)

  return (
    <section className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">All Visas</h1>

      {/* Visa Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {visas.map((visa, index) => (
          <div key={index} className="card bg-white shadow-lg rounded-lg p-4">
            {/* Visa Image */}
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
            <p className="text-sm flex items-center mb-4">
              <AiOutlineDollar className="mr-2 text-yellow-500" />
              Fee: ${visa.visafee}
            </p>

            {/* See Details Button */}
            <button
              className="btn btn-primary btn-sm w-full"
              onClick={() => navigate(`/visa/${visa._id}`)}
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllVisa;
