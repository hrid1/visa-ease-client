import { useEffect } from "react";
import AboutUs from "../../components/AboutUs";
import Banner from "../../components/Banner";
import Pricing from "../../components/Pricing";
import Success from "../../components/Success";
import Aos from "aos";
import "aos/dist/aos.css";
import Blogs from "../../components/Blogs";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <Banner />
      <Success />
      <AboutUs />
      <Blogs/>
      <Pricing />
    </div>
  );
};

export default Home;
