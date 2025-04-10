import {
  IoGlobeOutline,
  IoDocumentTextOutline,
  IoCheckmarkCircleOutline,
  IoHeadsetOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-us" id="about">
    {/* Header Section */}
    <header className="bg-base-200 py-12">
      <h1 className="text-4xl font-bold text-center text-emerald-500">About Us</h1>
      <p className="text-lg text-center text-base-content mt-2">
        Your trusted partner for hassle-free visa applications.
      </p>
    </header>
  
    {/* Our Mission Section */}
    <section className="py-12 px-6 bg-base-100 ">
      <h2 className="text-2xl font-semibold text-center text-emerald-500">Our Mission</h2>
      <p className="text-center text-base-content mt-4 max-w-3xl mx-auto">
        We aim to simplify the visa application process, ensuring transparency, efficiency, and the highest success rate for applicants worldwide.
      </p>
      <div className="mt-8 flex justify-center w-[400px] mx-auto">
        <img
          src="https://www.projectmanager.com/wp-content/uploads/2018/11/181112_Blog_Feature_Mission.jpg"
          alt="Our mission illustration"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  
    {/* Why Choose Us Section */}
    <section className="py-12 px-6 bg-base-200">
      <h2 className="text-2xl font-semibold text-center text-emerald-500">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body items-center">
            <IoDocumentTextOutline className="text-emerald-500 text-5xl" />
            <h3 className="text-lg font-bold text-base-content mt-4">Easy Application</h3>
            <p className="text-sm text-base-content mt-2">Simplified processes for all your visa needs.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body items-center">
            <IoGlobeOutline className="text-emerald-500 text-5xl" />
            <h3 className="text-lg font-bold text-base-content mt-4">Global Reach</h3>
            <p className="text-sm text-base-content mt-2">We support visa applications for over 120 countries.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body items-center">
            <IoCheckmarkCircleOutline className="text-emerald-500 text-5xl" />
            <h3 className="text-lg font-bold text-base-content mt-4">High Success Rate</h3>
            <p className="text-sm text-base-content mt-2">98% of our applications are approved.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body items-center">
            <IoHeadsetOutline className="text-emerald-500 text-5xl" />
            <h3 className="text-lg font-bold text-base-content mt-4">24/7 Support</h3>
            <p className="text-sm text-base-content mt-2">We’re here to help anytime, anywhere.</p>
          </div>
        </div>
      </div>
    </section>
  
    {/* Team Section */}
    <section className="py-12 px-6 bg-base-100">
      <h2 className="text-2xl font-semibold text-center text-emerald-500">Meet Our Team</h2>
      <p className="text-center text-base-content mt-4 max-w-3xl mx-auto">
        Our experienced professionals work tirelessly to ensure your visa process is seamless.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
        {["John Doe", "Jane Smith", "Ali Khan"].map((name, idx) => (
          <div key={idx} className="card bg-base-200 shadow-lg">
            <div className="card-body items-center">
              <img
                src= {["https://media.istockphoto.com/id/1176772006/photo/portrait-of-man-looking-at-camera-over-white-background.jpg?s=612x612&w=0&k=20&c=hhlfr_8TgalVqSMprxcXHKhCnqixB3sxKDUXnr7IfT8=", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcm6NPgnBM-tCpq6ey8-0UhAC83M5faE17reg54aYhQ-VtJa7D4WIMfVIaoT-5ah7i_aQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0uRIuWY7dusryxOa0EqoVGKw-oXKnaNyPQ&s"][idx]}
                alt="Team Member"
                className="rounded-full w-24 h-24"
              />
              <h3 className="text-lg font-bold text-base-content mt-4">{name}</h3>
              <p className="text-sm text-base-content">
                {["Visa Consultant", "Documentation Specialist", "Customer Support Lead"][idx]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  
    {/* Call to Action Section */}
    <section className="py-12 px-6 bg-base-300">
      <h2 className="text-2xl font-semibold text-center text-emerald-500">Ready to Start?</h2>
      <p className="text-center text-base-content mt-4">
        Begin your visa application journey with us today!
      </p>
      <div className="mt-6 flex justify-center">
        <Link to="/allvisas">
          <button className="btn btn-primary">Apply Now</button>
        </Link>
      </div>
    </section>
  </div>
  
  
  
  );
};

export default AboutPage;
