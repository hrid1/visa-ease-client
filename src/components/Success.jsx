import React from "react";
import CountUp from "react-countup";
import { BiBookReader } from "react-icons/bi";
import { FaHeart, FaTrophy } from "react-icons/fa";
import { GiDogBowl } from "react-icons/gi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineOndemandVideo, MdOutlineSchool } from "react-icons/md";
import { TbVocabulary } from "react-icons/tb";

const Success = () => {
  const stats = [
    {
      id: 1,
      value: "1245",
      label: "Memberships",
      icon: <IoPeopleOutline className="text-green-500 text-5xl" />,
    },
    {
      id: 2,
      value: "62",
      label: "Lessons",
      icon: <MdOutlineSchool className="text-green-500 text-5xl" />,
    },
    {
      id: 3,
      value: "24930",
      label: "Vocabulary",
      icon: <TbVocabulary className="text-green-500 text-5xl" />,
    },
    {
      id: 4,
      value: "357",
      label: "Tutorial",
      icon: <MdOutlineOndemandVideo className="text-green-500 text-5xl" />,
    },
  ];
  return (
    <section className="text-center bg-neutral-50 py-6 md:py-16 px-2" data-aos="fade-down">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Our Achievements
      </h2>
      <p className="text-gray-600 mb-8 w-full md:w-2/3 text-center mx-auto">
        Our platform empowers users to achieve their goals effortlessly. With
        seamless features, intuitive design, and unparalleled support,
        we&apos;ve transformed countless dreams into reality, building a
        community of inspired achievers.
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 md:px-4"
        data-aos="zoom-in"
        data-aos-duration="900"
      >
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            {stat.icon}
            <h3 className="text-5xl font-bold text-gray-800 mt-3">
              {/* {stat.value} */}
              <CountUp start={0} end={stat.value} duration={5}></CountUp>
            </h3>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Success;
