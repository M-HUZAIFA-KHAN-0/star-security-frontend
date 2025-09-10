"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import styles from "./services.module.css";

const servicesData = [
  {
    id: 1,
    title: "Commercial CCTV System",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
    icon: "icon/icon-6.png",
  },
  {
    id: 2,
    title: "Finger Print Access",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
    icon: "icon/icon-8.png",
  },
  {
    id: 3,
    title: "Fire Detection And Safety",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
    icon: "icon/icon-9.png",
  },
  {
    id: 4,
    title: "Smart Home Security",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
    icon: "icon/icon-3.png",
  },
  {
    id: 5,
    title: "Access Control System",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
    icon: "icon/icon-2.png",
  },
];

export default function Services() {
  const swiperRef = useRef(null);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: "60px", height: "2px" }}
          ></div>
          <h1 className="display-5 mb-5">Our Services</h1>
        </div>

        {servicesData.length > 4 ? (
          // ---- Swiper Carousel ----
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="service-row"
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id}>
                <div
                  className={`${styles["service-item"]} border h-100 p-5`}
                  onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                  onMouseLeave={() => swiperRef.current?.autoplay.start()}
                >
                  <div
                    className="btn-square bg-light rounded-circle mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src={service.icon} alt="Icon" />
                  </div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="mb-4">{service.desc}</p>
                  <a className={` ${styles["btn"]} fw-bolder `} href="">
                    <i className="fa-solid fa-arrow-right fa-lg text-white me-3"></i>
                    Read More
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // ---- Static 4-Column Grid ----
          <div className="row g-0 service-row">
            {servicesData.map((service) => (
              <div key={service.id} className="col-md-6 col-lg-3">
                <div className={`${styles["service-item"]} border h-100 p-5`}>
                  <div
                    className="btn-square bg-light rounded-circle mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src={service.icon} alt="Icon" />
                  </div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="mb-4">{service.desc}</p>
                  <a className={` ${styles["btn"]} fw-bolder `} href="">
                    <i className="fa-solid fa-arrow-right fa-lg text-white me-3"></i>
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
