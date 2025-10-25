"use client";

import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import styles from "./teamSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TeamSection() {
  const swiperRef = useRef(null);

  const teamMembers = [
    {
      img: "/images/t1.jpg",
      name: "Martin Anderson",
      role: "Supervisor",
    },
    {
      img: "/images/t2.jpg",
      name: "Denny Butler",
      role: "Supervisor",
    },
    {
      img: "/images/t3.jpg",
      name: "Nathan Mcpherson",
      role: "Supervisor",
    },
  ];

  return (
    <section className={`${styles.team_section} ${styles.layout_padding}`}>
      <Container className={styles.team_section_container}>
        {/* Heading */}
        <div className={`${styles.heading_container} ${styles.heading_center}`}>
          <div className="text-center">
            <div
              className="bg-primary mb-3 mx-auto"
              style={{ width: "60px", height: "3px" }}
            />
            <h1 className="display-5 mb-5">Our Guards</h1>
          </div>
          <p>
            Highly trained, disciplined, and reliable guards dedicated to ensuring
            safety, vigilance, and peace of mind at every site.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="team-carousel"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className={`${styles.box} h-100 p-3 d-flex flex-column`}
                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay.start()}
              >
                <div className={styles["img-box"]}>
                  <img src={member.img} alt={member.name} />
                </div>
                <div className={styles["detail-box"]}>
                  <h5>{member.name}</h5>
                  <h6>{member.role}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
