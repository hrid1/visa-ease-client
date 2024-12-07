import React, { useState } from "react";
import { AiOutlineClockCircle, AiOutlineDollar } from "react-icons/ai";
import { FaPassport } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import ApplicationCard from "../../components/ApplicationCard";

const VisaApplication = () => {
  const data = useLoaderData();

  const [applications, setApplications] = useState(data);
  // console.log(applications);
  const handleCancel = (id) => {
    console.log(id)
  }


  return (
    <section className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">
        My Visa Applications
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {applications.map((application) => (
          <ApplicationCard
            key={application._id}
            application={application}
            setApplications={setApplications}
            handleCancel={handleCancel}
          ></ApplicationCard>
        ))}
      </div>
    </section>
  );
};

export default VisaApplication;
