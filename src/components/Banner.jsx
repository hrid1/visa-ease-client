import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../assets/banner/pic1.jpg";
import banner2 from "../assets/banner/pic2.jpg";
import banner3 from "../assets/banner/pic4.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mx-4 md:mx-6">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[300px] md:h-[640px] rounded-xl overflow-hidden">
            <img className="h-full w-full object-cover" src={banner1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[300px] md:h-[640px] rounded-xl overflow-hidden">
            <img className="h-full w-full object-cover" src={banner2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[300px] md:h-[640px] rounded-xl overflow-hidden">
            <img className="h-full w-full object-cover" src={banner3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
