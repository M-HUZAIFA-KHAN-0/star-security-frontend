"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./testimonial.module.css";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
      name: "Client One",
      profession: "Profession",
      img: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, porro?",
      name: "Client Two",
      profession: "Profession",
      img: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      text: "Doloremque laudantium iste illum nostrum ullam aliquid nihil quia.",
      name: "Client Three",
      profession: "Profession",
      img: "/images/testimonial-3.jpg",
    },
    {
        id: 4,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, porro?",
        name: "Client Two",
        profession: "Profession",
        img: "/images/testimonial-2.jpg",
      }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: "60px", height: "3px" }}
          />
          <h1 className="display-5 mb-5">Testimonial</h1>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ 
            delay: 2000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView="auto"
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          className={styles.testimonialCarousel}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className={`text-center ${styles.testimonialItem}`}>
                <img
                  src={t.img}
                  alt={t.name}
                  className={styles.clientImage}
                />
                <p className="fs-5">{t.text}</p>
                <h4>{t.name}</h4>
                <span className="text-primary">{t.profession}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}