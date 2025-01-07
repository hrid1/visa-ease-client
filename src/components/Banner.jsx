import banner0 from "../assets/carosol/banner0.jpg";
import banner1 from "../assets/carosol/banner1.jpg";
import banner2 from "../assets/carosol/banner2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className=" mx-auto rounded-2xl overflow-hidden">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="h-auto md:h-[640px]">
            <img className="h-full w-full object-cover" src={banner2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[640px] ">
            <img className="h-full w-full object-cover" src={banner0} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[640px] ">
            <img className="h-full w-full object-cover" src={banner1} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
