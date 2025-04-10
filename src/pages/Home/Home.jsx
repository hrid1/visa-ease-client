import AboutUs from "../../components/AboutUs";
import AchievementCount from "../../components/AchievementCount";
import Banner from "../../components/Banner";
import Blogs from "../../components/Blogs";
import FaqSection from "../../components/FaqSection";
import LatestVisas from "../../components/LatestVisas";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestVisas />
      <AchievementCount />
      <AboutUs />
      <Blogs />
      <FaqSection />
    </div>
  );
};

export default Home;
