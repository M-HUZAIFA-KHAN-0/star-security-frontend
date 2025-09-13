"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef, useEffect } from "react";
import styles from "./services.module.css";

export default function Services({ servicesData = [], service_BG = false, topHeading }) {
  const swiperRef = useRef(null);
  const containerRef = useRef(null); // wrapper to measure items

  useEffect(() => {
    if (!containerRef.current) return;
    let resizeTimer = null;
    const itemClass = styles["service-item"] || "service-item"; // resolved class name from module
    const selector = "." + itemClass.replace(/\s+/g, ".");

    const waitImages = () => {
      const imgs = containerRef.current.querySelectorAll("img");
      const promises = Array.from(imgs).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((res) => {
          img.addEventListener("load", res, { once: true });
          img.addEventListener("error", res, { once: true });
        });
      });
      return Promise.all(promises);
    };

    const updateHeights = () => {
      if (!containerRef.current) return;
      const items = containerRef.current.querySelectorAll(selector);
      if (!items.length) return;

      // reset before measuring
      items.forEach((el) => {
        el.style.minHeight = "";
      });

      // measure
      const heights = Array.from(items).map((el) => {
        // getBoundingClientRect gives fractional px; use Math.ceil for crispness
        return Math.ceil(el.getBoundingClientRect().height);
      });

      const max = Math.max(...heights, 0);
      if (max > 0) {
        items.forEach((el) => {
          el.style.minHeight = `${max}px`;
        });
      }
    };

    // Wait images then measure
    waitImages().then(() => {
      // a tiny delay to ensure fonts/layout settled
      setTimeout(updateHeights, 50);
    });

    // Also run after a short delay (useful for swiper clones/initialization)
    const initTimer = setTimeout(updateHeights, 500);

    // on resize, recompute (debounced)
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateHeights, 120);
    };
    window.addEventListener("resize", onResize);

    // Optional: if you want to recalc when swiper completes init / slides change:
    // if (swiperRef.current) {
    //   swiperRef.current.on("slideChange", updateHeights);
    //   swiperRef.current.on("init", updateHeights);
    // }

    return () => {
      clearTimeout(initTimer);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);

      // cleanup: remove inline minHeight
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll(selector);
        items.forEach((el) => {
          el.style.minHeight = "";
        });
      }
    };
  }, [servicesData]); // re-run when data changes

  return (
    <section className={`${service_BG ? "service_BG text-white" : ""}`}>
      <div className="container-xxl py-5">
        <div className="container">
          {/* Heading */}
          <div className="text-center">
            <div
              className="bg-primary mb-3 mx-auto"
              style={{ width: "60px", height: "3px" }}
            />
            <h1 className="display-5 mb-5">{topHeading}</h1>
          </div>

          {/* wrapper ref around both Swiper & static grid */}
          <div ref={containerRef} className="service-row">
            {servicesData?.length > 4 ? (
              <Swiper
                modules={[Autoplay]}
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
                      className={`${styles["service-item"]} h-100 p-5 d-flex flex-column`}
                      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                      onMouseLeave={() => swiperRef.current?.autoplay.start()}
                    >
                      <div
                        className="btn-square mb-4"
                        style={{ width: "64px", height: "64px" }}
                      >
                        <img className="img-fluid" src={service.icon} alt="Icon" />
                      </div>

                      <div className={styles["service-content"]}>
                        <h4 className="mb-3">{service.title}</h4>
                        <p className="mb-4">{service.desc}</p>
                      </div>

                      <a className={`${styles["btn"]} fw-bolder mt-auto`} href="">
                        <i className="fa-solid fa-arrow-right fa-lg text-white me-3" />
                        Read More
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="row g-0 service-row">
                {servicesData.map((service) => (
                  <div key={service.id} className="col-md-6 col-lg-3 d-flex">
                    <div className={`${styles["service-item"]} h-100 p-5 d-flex flex-column`}>
                      <div
                        className="btn-square mb-4"
                        style={{ width: "64px", height: "64px" }}
                      >
                        <img className="img-fluid" src={service.icon} alt="Icon" />
                      </div>

                      <div className={styles["service-content"]}>
                        <h4 className="mb-3">{service.title}</h4>
                        <p className="mb-4">{service.desc}</p>
                      </div>

                      <a className={`${styles["btn"]} fw-bolder mt-auto`} href="">
                        <i className="fa-solid fa-arrow-right fa-lg text-white me-3" />
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
