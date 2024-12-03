const AddVisa = () => {
  const visaTypes = ["Tourist Visa", "Student Visa", "Official Visa"];
  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
  ];

  const handleSubmit = () => {};
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
            // value={formData.countryName}
            // onChange={handleInputChange}
            required
          />
        </div>

        {/* Visa Type */}
        <div>
          <label className="label">Visa Type</label>
          <select
            name="visaType"
            className="select select-bordered w-full"
            // value={formData.visaType}
            // onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select Visa Type
            </option>
            {visaTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
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
            required
          />
        </div>

        {/* Required Documents */}
        <div className="col-span-2">
          <label className="label">Required Documents</label>
          <div className="flex flex-wrap gap-4">
            {documentOptions.map((doc, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={doc}
                  //   onChange={handleCheckboxChange}
                  //   checked={formData.requiredDocuments.includes(doc)}
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
            required
          />
        </div>

        {/* Age Restriction */}
        <div>
          <label className="label">Age Restriction</label>
          <input
            type="number"
            name="ageRestriction"
            placeholder="Enter Age Restriction"
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
            required
          />
        </div>

        {/* Validity */}
        <div>
          <label className="label">Validity</label>
          <input
            type="text"
            name="validity"
            placeholder="Enter Validity (e.g., 6 months)"
            className="input input-bordered w-full"
            // value={formData.validity}
            // onChange={handleInputChange}
            required
          />
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
            required
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button className="btn btn-primary w-full">Add Visa</button>
        </div>
      </form>
    </div>
  );
};

export default AddVisa;
