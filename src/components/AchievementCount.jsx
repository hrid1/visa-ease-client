import {
  IoCheckmarkCircleOutline,
  IoDocumentTextOutline,
  IoHeadsetOutline,
} from "react-icons/io5";

import CountUp from "react-countup";
import { FaGlobe } from "react-icons/fa6";

const AchievementCount = () => {
  const stats = [
    {
      id: 1,
      value: "1500",
      label: "Applications Processed",
      icon: <IoDocumentTextOutline className="text-emerald-500 text-5xl" />,
    },
    {
      id: 2,
      value: "120",
      label: "Countries Supported",
      icon: <FaGlobe className="text-emerald-500 text-5xl" />,
    },
    {
      id: 3,
      value: "98",
      label: "Approval Rate",
      icon: <IoCheckmarkCircleOutline className="text-emerald-500 text-5xl" />,
    },
    {
      id: 4,
      value: "247",
      label: "Support Available",
      icon: <IoHeadsetOutline className="text-emerald-500 text-5xl" />,
    },
  ];

  return (
    <section
      className="text-center bg-base py-6 md:py-16 px-2"
      data-aos="fade-down"
    >
      <h2 className="text-4xl font-bold text- mb-4">
        Our Achievements
      </h2>
      <p className="text-gray-600 mb-8 w-full md:w-2/3 text-center mx-auto">
        Our platform empowers users to achieve their goals effortlessly. With
        seamless features, intuitive design, and unparalleled support,
        we&apos;ve transformed countless dreams into reality, building a
        community of inspired achievers.
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 md:px-4 bg-base-100 py-2"
        data-aos="zoom-in"
        data-aos-duration="900"
      >
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-base-200 shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            {stat.icon}
            <h3 className="text-5xl font-bold  mt-3">
              {/* {stat.value} */}
              <CountUp start={0} end={stat.value} duration={5} delay={4}></CountUp>
            </h3>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementCount;
