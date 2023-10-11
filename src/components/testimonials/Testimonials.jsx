import React from "react";
import "./testimonial.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from '@iconify/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <span className="section__subtitle">Testimonial</span>
      <h2 className="section__title">My Colleagues Say</h2>
      <p className="section__text">
      <Icon icon="icon-park-outline:hand-drag" color="white" width="30" height="30" />
      Drag
      </p>
      

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        // modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />

              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
