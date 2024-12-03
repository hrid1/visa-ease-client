import {
  AiOutlineClockCircle,
  AiOutlineDollar,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const LatestVisaCard = ({ visa }) => {
  return (
    <div>
      <div className="card w-full  bg-base-100 shadow-xl">
        {/* Country Image */}
        <figure>
          <img
            src={visa?.countryImage}
            alt={visa?.country}
            className="h-48 w-full object-cover"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body">
          {/* Country Name */}
          <h2 className="card-title text-lg font-bold">{visa?.country}</h2>

          {/* Visa Type */}
          <p className="text-sm">
            <AiOutlineInfoCircle className="inline-block mr-2" />
            Visa Type: <span className="font-semibold">{visa?.visaType}</span>
          </p>

          {/* Processing Time */}
          <p className="text-sm">
            <AiOutlineClockCircle className="inline-block mr-2" />
            Processing Time:{" "}
            <span className="font-semibold">{visa?.processingTime}</span>
          </p>

          {/* Fee */}
          <p className="text-sm">
            <AiOutlineDollar className="inline-block mr-2" />
            Fee: <span className="font-semibold">${visa?.fee}</span>
          </p>

          {/* Validity */}
          <p className="text-sm">
            Validity: <span className="font-semibold">{visa?.validity}</span>
          </p>

          {/* Application Method */}
          <p className="text-sm">
            Application Method:{" "}
            <span className="font-semibold">{visa?.applicationMethod}</span>
          </p>

          {/* See Details Button */}
          <div className="card-actions mt-4">
            <button
              className="btn bg-teal-600 text-white w-full"
              onClick={() =>
                alert(`Navigating to details for ${visa?.country}`)
              }
            >
              See Details
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestVisaCard;
