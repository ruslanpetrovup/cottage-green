import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ imgs, classT, numberT }) => {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={1}
        slidesPerView={1}
      >
        {imgs.map((num, index) => (
          <SwiperSlide key={index}>
            <button className="slider-button" onClick={numberT}>
              <img className={classT} src={num} alt="slide" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
