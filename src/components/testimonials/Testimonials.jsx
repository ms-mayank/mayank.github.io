import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Name 1",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore sit et harum, consequatur, expedita consectetur voluptatibus a, quae perspiciatis error vitae odio rem adipisci. Quos perspiciatis vitae deleniti repudiandae voluptates.",
  },
  {
    avatar: AVTR2,
    name: "Name 2",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore sit et harum, consequatur, expedita consectetur voluptatibus a, quae perspiciatis error vitae odio rem adipisci. Quos perspiciatis vitae deleniti repudiandae voluptates.",
  },
  {
    avatar: AVTR3,
    name: "Name 3",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore sit et harum, consequatur, expedita consectetur voluptatibus a, quae perspiciatis error vitae odio rem adipisci. Quos perspiciatis vitae deleniti repudiandae voluptates.",
  },
  {
    avatar: AVTR4,
    name: "Name 4",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore sit et harum, consequatur, expedita consectetur voluptatibus a, quae perspiciatis error vitae odio rem adipisci. Quos perspiciatis vitae deleniti repudiandae voluptates.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container" modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
