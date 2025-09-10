"use client";

import { Row, Col } from "react-bootstrap";
import styles from "./achievementSubBanner.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AchievementSubBanner() {
  // JSON data array
  const stats = [
    {
      icon: "bi bi-person-fill",
      number: 102,
      label: "Happy Clients",
    },
    {
      icon: "bi bi-briefcase-fill",
      number: 250,
      label: "Projects Completed",
    },
    {
      icon: "bi bi-award-fill",
      number: 15,
      label: "Awards Won",
    },
    {
      icon: "bi bi-people-fill",
      number: 50,
      label: "Team Members",
    },
  ];

  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // sirf 1 bar animation chalegi
    threshold: 0.3, // jab 30% section viewport me aaye tab trigger hoga
  });

  return (
    <section
      ref={ref}
      className={`${styles.achievementBanner} d-flex align-items-center`}
    >
      <div className="container text-center text-white position-relative">
        <Row className="justify-content-around align-items-center h-100 gx-5">
          {stats.map((stat, index) => (
            <Col
              key={index}
              md={3}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <i className={`${stat.icon} fs-1 color-primary`}></i>
              <div className="fs-1 fw-bold">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5} // speed of count
                  />
                ) : (
                  "0"
                )}
              </div>
              <div className="mb-3 fs-5 fw-bolder">{stat.label}</div>
              <div
                className="bg-primary mb-3"
                style={{ width: "60px", height: "3px" }}
              ></div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
