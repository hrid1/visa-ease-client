import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddVisa = () => {
  // const visaTypes = ["Tourist Visa", "Student Visa", "Official Visa"];
  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
  ];

  const [startDate, setStartDate] = useState(new Date());
  const [selectedDocuments, setSelectedDocuments] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedDocuments((prev) =>
      checked ? [...prev, value] : prev.filter((doc) => doc !== value)
    );
  };
  // handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const countryimg = form.countryImage.value;
    const country = form.countryName.value;
    const visatype = form.visaType.value;
    const processingtime = form.processingTime.value;
    const description = form.description.value;
    const age = form.age.value;
    const visafee = form.fee.value;
    const formattedDate = startDate.toLocaleDateString("en-CA");
    const applicationmethod = form.applicationMethod.value;

    // formData
    const formData = {
      countryimg,
      country,
      visatype,
      processingtime,
      description,
      age,
      visafee,
      formattedDate,
      applicationmethod,
    };
    // console.log(formattedDate, visatype, selectedDocuments);
    console.log(formData);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Add Visa</h1>
      <form
        className="md:grid md:grid-cols-2  gap-6 bg-base-100 p-6 shadow-lg rounded-lg md:w-10/12 mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Country Image */}
        <div>
          <label className="label">Country Image URL</label>
          <input
            type="text"
            name="countryImage"
            placeholder="Enter Image URL"
            className="input input-bordered w-full"
            // value={formData.countryImage}
            // onChange={handleInputChange}
            requiredf
          />
        </div>

        {/* Country Name */}
        <div>
          <label className="label">Country Name</label>
          <input
            type="text"
            name="countryName"
            placeholder="Enter Country Name"
            className="input input-bordered w-full"
            // value={formData.countryName}
            // onChange={handleInputChange}
            requiredf
          />
        </div>

        {/* Visa Type */}
        <div>
          <label className="label">Visa Type</label>
          <select
            name="visaType"
            className="select select-bordered w-full"
            style={{ maxWidth: "100%" }}
            // value={formData.visaType}
            // onChange={handleInputChange}
            requiredf
          >
            <option value="" disabled>
              Select Visa Type
            </option>

            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Student Visa">Student Visa</option>
            <option value="Official Visa">Official Visa</option>
          </select>
        </div>

        {/* Processing Time */}
        <div>
          <label className="label">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            placeholder="Enter Processing Time (e.g., 10 days)"
            className="input input-bordered w-full"
            // value={formData.processingTime}
            // onChange={handleInputChange}
            requiredf
          />
        </div>

        {/* requiredf Documents */}
        <div className="col-span-2">
          <label className="label">requiredf Documents</label>
          <div className="flex flex-wrap gap-4">
            {documentOptions.map((doc, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={doc}
                  onChange={handleCheckboxChange}
                  checked={selectedDocuments.includes(doc)}
                  className="checkbox"
                />
                <span>{doc}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="label">Description</label>
          <textarea
            name="description"
            placeholder="Enter Description"
            className="textarea textarea-bordered w-full"
            // value={formData.description}
            // onChange={handleInputChange}
            requiredf
          />
        </div>

        {/* Age Restriction */}
        <div>
          <label className="label">Age Restriction</label>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            className="input input-bordered w-full"
            // value={formData.ageRestriction}
            // onChange={handleInputChange}
          />
        </div>

        {/* Fee */}
        <div>
          <label className="label">Fee</label>
          <input
            type="number"
            name="fee"
            placeholder="Enter Fee"
            className="input input-bordered w-full"
            // value={formData.fee}
            // onChange={handleInputChange}
            requiredf
          />
        </div>

        {/* Validity */}
        <div>
          <label className="label ">Validity</label>
          {/* <input
            type="text"
            name="validity"
            placeholder="Enter Validity (e.g., 6 months)"
            className="input input-bordered w-full"
            // value={formData.validity}
            // onChange={handleInputChange}
            requiredf
          /> */}
          <div className="w-full">
            <DatePicker
              className="border-2 p-2 rounded-md w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        {/* Application Method */}
        <div>
          <label className="label">Application Method</label>
          <input
            type="text"
            name="applicationMethod"
            placeholder="Enter Application Method"
            className="input input-bordered w-full"
            // value={formData.applicationMethod}
            // onChange={handleInputChange}
            requiredf
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 mt-4">
          <button className="btn bg-teal-500 w-full">Add Visa</button>
        </div>
      </form>
    </div>
  );
};

export default AddVisa;
