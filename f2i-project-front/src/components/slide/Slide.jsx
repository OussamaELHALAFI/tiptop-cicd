import React from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Virtual, Navigation, Pagination]);

import "./slide.scss";

const Slide = ({ data }) => {
  return (
    <div className="slide">
      <div className="container">
        <div className="caroussel">
          <Swiper
            className="swipper"
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            virtual
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 40
              },
              1440: {
                slidesPerView: 1,
                spaceBetween: 50
              }
            }}
          >
            {data.map((card) => (
              <SwiperSlide
                className="swipperslide"
                key={card.id}
                virtualIndex={card.id}
              >
                <img src={card.img} alt={card.title} />
                {/* <div className="desc">
                  <h4>
                    <small>{card.title}</small>
                    {card.desc}
                  </h4>
                </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slide;
