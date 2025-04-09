import aboutPic from "../assets/aboutus.jpg";




const AboutUs = () => {
  return (
    <>
      <div className="text-center pb-4 mt-10" data-aos="fade-down">
        <h1 className="text-center text-4xl font-bold mb-2">About Us</h1>
        <p className="text-gray-600">
          We are Dedicated to best of Our Services
        </p>
      </div>

      <section className="flex flex-col md:flex-row justify-center items-center gap-6 w-11/12 mx-auto lg:gap-8 my-6 md:my-12">
  {/* Image Section */}
  <div
    className="w-full md:w-1/2 border rounded-xl overflow-hidden"
    data-aos="fade-right"
  >
    <img
      className="w-full h-full max-h-[300px] md:max-h-none object-cover"
      src={aboutPic}
      alt="About Us"
    />
  </div>

  {/* Content Section */}
  <div
    className="w-full md:w-1/2 flex flex-col justify-start items-start gap-4 lg:gap-8"
    data-aos="fade-left"
  >
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold lg:w-2/3">
      We are Dedicated to Best of Our Services
    </h2>
    <p className="text-sm md:text-base leading-relaxed">
      Welcome to our language-learning platform. Explore vocabulary in fun,
      engaging ways tailored to help you build confidence in communication.
      Whether you&apos;re a beginner or an advanced learner, our tools are
      designed to simplify language learning.
      <br />
      <br />
      Discover lessons, tutorials, and interactive activities that make
      acquiring new skills. Join us today and start your journey towards
      fluency!
    </p>
    <button
      className="btn bg-emerald-500 text-white hover:bg-emerald-600 transition-all"
      data-aos="zoom-in"
    >
      Learn More
    </button>
  </div>
</section>

    </>
  );
};

export default AboutUs;
