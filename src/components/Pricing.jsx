import Aos from "aos";
import { useEffect } from "react";

const Pricing = () => {
  return (
    <div className="my-8 md:my-20 " data-aos="fade-up">
      <div className="text-center space-y-4 ">
        <h1 className="font-bold text-4xl">Pricing</h1>
        <p className="text-gray-700 text-lg">
          Get started on our free plan and upgrade when you are ready.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 place-items-centerr gap-10 md:gap-6 md:place-items-star t my-6">
        <div
          className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-40  shadow-none m-2 flex-1 max-w-md"
          data-aos="flip-left"
        >
          <h2 className="text-lg sm:text-xl font-medium  mb-2">Free</h2>
          <p className="text-lg sm:text-xl text- mb-8 mt-4 ">
            <span className="text-3xl sm:text-4xl font-bold ">$0</span> / Month
          </p>
          <ul className="list-none list-inside mb-6 text-gray-700">
            <li className="font-bold text-orange-600">Interactive Lessons</li>
            <li>Step-by-step Progress Tracking</li>
            <li>Personalized Learning Paths</li>
            <li>Fun and Engaging Quizzes</li>
          </ul>
          <button className="bg-emerald-100 btn w-4/5 text-">Buy now</button>
        </div>
        <div
          className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-40  shadow-none m-2 flex-1 max-w-md"
          data-aos="zoom-in"
        >
          <h2 className="text-lg sm:text-xl font-medium  mb-2">Starter</h2>
          <p className="text-lg sm:text-xl text- mb-8 mt-4 ">
            <span className="text-3xl sm:text-4xl font-bold ">$49</span> / Month
          </p>
          <ul className="list-none list-inside mb-6 text-gray-700">
            <li className="font-bold text-orange-600">Real-time Feedback</li>
            <li>Instant Correct/Incorrect Answers</li>
            <li>Voice Recognition for Pronunciation</li>
            <li>Daily Challenges & Tips</li>
          </ul>
          <button className="bg-emerald-500 btn w-4/5 text-white">
            Buy now
          </button>
        </div>
        <div
          className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-40  shadow-none m-2 flex-1 max-w-md"
          data-aos="flip-right"
        >
          <h2 className="text-lg sm:text-xl font-medium  mb-2">Profesinals</h2>
          <p className="text-lg sm:text-xl text- mb-8 mt-4 ">
            <span className="text-3xl sm:text-4xl font-bold ">$99</span> / Month
          </p>
          <ul className="list-none list-inside mb-6 text-gray-700">
            <li className="font-bold text-orange-600">Multilingual Support</li>
            <li>Multiple Languages Available</li>
            <li>Native Speaker Audio Clips</li>
            <li>Translation and Dictionary Features</li>
          </ul>
          <button className="bg-emerald-100 btn w-4/5 ">Buy now</button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
