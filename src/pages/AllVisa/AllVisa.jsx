import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle, AiOutlineDollar } from "react-icons/ai";
import { FaPassport } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllVisa = () => {
  const visas = useLoaderData();
  const navigate = useNavigate();
  const [filterVisas, setFilterVisas] = useState(visas);
  const [selectedVisaType, setSelectedVisaType] = useState("All");
  const [sortOrder, setSortOrder] = useState(""); // Empty string for no initial sorting

  useEffect(() => {
    let filteredVisas =
      selectedVisaType === "All"
        ? visas
        : visas.filter((visa) => visa.visatype === selectedVisaType);

    if (sortOrder) {
      // Apply sorting only when sortOrder is not empty
      filteredVisas = [...filteredVisas].sort((a, b) => {
        if (sortOrder === "asc") {
          return a.country.localeCompare(b.country); // Ascending order (A-Z)
        } else if (sortOrder === "dsc") {
          return b.country.localeCompare(a.country); // Descending order (Z-A)
        }
        return 0; // No sorting applied
      });
    }

    setFilterVisas(filteredVisas);
  }, [selectedVisaType, sortOrder, visas]);

  return (
    <section className="p-6 bg-base-100">
      <h1 className="text-3xl font-bold text-center mb-8">All Visas</h1>

      <div>
        {/* Dropdown for Filtering */}
        <div className="mb-6 max-w-md mx-auto">
          <label htmlFor="visaFilter" className="block mb-2 font-medium">
            Filter by Visa Type:
          </label>
          <select
            value={selectedVisaType}
            onChange={(e) => setSelectedVisaType(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="All">All</option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Student Visa">Student Visa</option>
            <option value="Official Visa">Official Visa</option>
          </select>
        </div>

        {/* Dropdown for Sorting */}
        <div className="mb-6 max-w-md mx-auto">
          <label htmlFor="visaSort" className="block mb-2 font-medium">
            Sort by Country:
          </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">No Sorting</option>
            <option value="asc">Ascending (A-Z)</option>
            <option value="dsc">Descending (Z-A)</option>
          </select>
        </div>
      </div>

      {/* Visa Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filterVisas.map((visa, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-lg rounded-lg p-4"
          >
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
              className="btn bg-teal-600 text-white btn-sm w-full"
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
