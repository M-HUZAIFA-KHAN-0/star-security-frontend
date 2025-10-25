"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./aboutSection.module.css";

export default function AboutSection({ aboutData }) {
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container quote px-lg-0">
        <div className="row g-0 mx-lg-0">

          {/* Left Image Section */}
          <div className="col-lg-6 ps-lg-0" style={{ minHeight: "450px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src={aboutData.bgImage}
                style={{ objectFit: "cover" }}
                alt="quote"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div
            className="col-lg-6 about-text wow fadeIn d-flex align-items-center"
            data-wow-delay="0.5s"
          >
            <div className={`${styles["aboutSectionCenter"]} p-lg-5 pe-lg-0`}>
              <div
                className="bg-primary mb-3"
                style={{ width: "60px", height: "3px" }}
              ></div>

              <h1 className="display-5 mb-4">{aboutData.heading}</h1>
              <p className="mb-4 pb-2">{aboutData.description}</p>

              {/* Stats */}
              <div className="row g-4 mb-4 pb-3">
                {aboutData.stats.map((item, index) => {

                  const { ref, inView } = useInView({
                    triggerOnce: true,
                    threshold: 0.3,
                  });

                  return (
                    <div
                      key={item.id}
                      ref={ref}
                      className={`${styles["res-col-12"]} col-sm-6 wow fadeIn`}
                      data-wow-delay={`${0.1 + index * 0.2}s`}
                    >
                      <div className="d-flex align-items-center">
                        <div
                          className="btn-square bg-white rounded-circle"
                          style={{ width: "64px", height: "64px" }}
                        >
                          <Image
                            src={item.icon}
                            alt={item.label}
                            width={80}
                            height={80}
                            className="img-fluid"
                          />
                        </div>
                        <div className="ms-4">
                          <h2 className="mb-1">
                            {inView ? (
                              <CountUp
                                start={0}
                                end={item.value}
                                duration={2.2}
                              />
                            ) : (
                              "0"
                            )}+
                          </h2>
                          <p className="fw-medium fs-5 color-primary mb-0">
                            {item.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <a
                href={aboutData.ctalink}
                className="btn bg-primary color-w rounded-pill py-3 px-5 fs-5 cta-hover"
              >
                {aboutData.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
