import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineClockCircle, AiOutlineDollar } from "react-icons/ai";
import { FaPassport } from "react-icons/fa";
import { FiEdit, FiTrash } from "react-icons/fi";
import Swal from "sweetalert2";
import { parse } from "date-fns";
import { AuthContext } from "../provider/AuthProvider";

const MyVisaCard = ({ visa, visas, setVisas }) => {
  // handle Delete
  const handleDelete = (id) => {
    console.log("delete", id);
    fetch(`http://localhost:8000/myvisa/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data)
        if (data.deletedCount) {
          // show success
          Swal.fire({
            title: "Deleted!",
            text: "Visa successfuly removed!",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });

          // update ui
          const filterVisas = visas.filter((visa) => visa._id !== id);
          setVisas(filterVisas);
        } else {
          Swal.fire({
            title: "Opps!",
            text: "There is an issu!",
            icon: "error",
          });
        }
      });
  };

  //  ------------------------- handle update

  const { user } = useContext(AuthContext);
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

  // Update button
  const [curVisa, setCurVisa] = useState({});

  const handleUpdate = (id) => {
    console.log("Updating visa with ID:", id);

    // Fetch the visa by ID
    fetch(`http://localhost:8000/visa/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurVisa(data);
        console.log("Data", data);
        // Show the modal 
        setTimeout(() => {
          document.getElementById("my_modal_4").showModal();
        }, 200);
      });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Extract form values
    const countryimg = form.countryImage.value;
    const country = form.countryName.value;
    const visatype = form.visaType.value;
    const processingtime = form.processingTime.value;
    const description = form.description.value;
    const age = form.age.value;
    const visafee = form.fee.value;
    const formattedDate = startDate.toLocaleDateString("en-CA");
    const applicationmethod = form.applicationMethod.value;

    // Create the form data object
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
      createdAt: new Date().toISOString(),
      useremail: user?.email,
    };

    // Log the form data for debugging
    console.log("Form Data to be submitted:", formData);
  };

  console.log(curVisa);
  return (
    <div>
      <div className="card bg-white shadow-lg rounded-lg p-4 relative">
        {/* Country Image */}
        <div className="w-full h-40 rounded-md overflow-hidden mb-4">
          <img
            src={visa?.countryimg}
            alt={visa?.country}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Visa Details */}
        <h2 className="text-lg font-bold mb-2">{visa?.country}</h2>
        <p className="text-sm flex items-center mb-2">
          <FaPassport className="mr-2 text-blue-500" />
          Visa Type: {visa?.visatype}
        </p>
        <p className="text-sm flex items-center mb-2">
          <AiOutlineClockCircle className="mr-2 text-green-500" />
          Processing Time: {visa?.processingtime}
        </p>
        <p className="text-sm flex items-center mb-2">
          <AiOutlineDollar className="mr-2 text-yellow-500" />
          Fee: ${visa?.visafee}
        </p>
        <p className="text-sm flex items-center mb-4">
          <span className="mr-2 font-semibold">Validity:</span>
          {visa?.validity}
        </p>
        <p className="text-sm flex items-center mb-4">
          <span className="mr-2 font-semibold">Application Method:</span>
          {visa?.applicationmethod}
        </p>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            className="btn btn-secondary btn-sm flex items-center space-x-1"
            onClick={() => handleUpdate(visa?._id)}
          >
            <FiEdit />
            <span>Update</span>
          </button>
          <button
            className="btn btn-error btn-sm flex items-center space-x-1"
            onClick={() => handleDelete(visa?._id)}
          >
            <FiTrash />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* modal form */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between items-center mx-">
            <h3 className="font-bold text-lg text-center  ">Update Form</h3>
            <div className="modal-action mt-0 ">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">X</button>
              </form>
            </div>
          </div>
          <form
            className="md:grid md:grid-cols-2  gap-6 bg-base-200 p-6 shadow-lg rounded-lg md:w-10/12 mx-auto"
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
                defaultValue={curVisa?.countryimg}
                required
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
                defaultValue={curVisa?.country}
                required
              />
            </div>

            {/* Visa Type */}
            <div>
              <label className="label">Visa Type</label>
              <select
                name="visaType"
                className="select select-bordered w-full"
                style={{ maxWidth: "100%" }}
                value={curVisa?.visatype}
                required
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
                defaultValue={curVisa?.processingtime}
                required
              />
            </div>

            {/* required Documents */}
            <div className="col-span-2">
              <label className="label">required Documents</label>
              <div className="flex flex-wrap gap-4">
                {documentOptions.map((doc, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={doc}
                      onChange={handleCheckboxChange}
                      checked={selectedDocuments.includes(doc)}
                      className="checkbox"
                      // defaultValue={}
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
                defaultValue={curVisa?.description}
                required
              />
            </div>

            {/* Age Restriction */}
            <div>
              <label className="label">Age Restrication</label>
              <input
                type="number"
                name="age"
                placeholder="Enter Age"
                className="input input-bordered w-full"
                defaultValue={curVisa?.age}
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
                defaultValue={curVisa?.visafee}
                required
              />
            </div>

            {/* Validity */}
            <div>
              <label className="label ">Validity</label>
              <div className="w-full">
                <DatePicker
                  className="border-2 p-2 rounded-md w-full"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  // defaultValue={curVisa.formattedDate}
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
                defaultValue={curVisa?.visatype}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-2 mt-4">
              <button className="btn bg-teal-500 w-full">Update </button>
            </div>
          </form>
          {/* <p className="py-4">Click the button below to close</p> */}
        </div>
      </dialog>
    </div>
  );
};

export default MyVisaCard;
