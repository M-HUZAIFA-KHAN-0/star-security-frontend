"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./timeline.module.css";

export default function Timeline() {
  const [activeYear, setActiveYear] = useState(null);

  const events = [
    { year: 1976, text: "Prosegur founded, initially with services focused on the transport of valuables and cash management." },
    { year: 1977, text: "Security monitoring was introduced, with implementation of services in new markets." },
    { year: 1980, text: "Expanded operations internationally." },
    { year: 1983, text: "Launched new security technology services." },
    { year: 1987, text: "Strengthened workforce and training programs." },
    { year: 1992, text: "Introduced integrated cash logistics." },
    // { year: 1995, text: "Digital monitoring services expanded." },
    // { year: 2001, text: "Entered new global markets." },
  ];

  const toggleYear = (year) => {
    setActiveYear((prev) => (prev === year ? null : year));
  };

  return (
    <section className={styles.timelineSection}>
      <Container>
        <div className="text-center">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: "60px", height: "3px" }}
          />
          <h1 className="display-5 mb-5">Our history</h1>
        </div>

        <div className={styles.timelineWrapper}>
          {/* top globe icon */}
          <div className="text-center mb-3">
            <div className={styles.globeIcon} aria-hidden>
                <img src="/globe (2).svg" alt="" width="100" height="100" className="mb-3" />
            </div>
          </div>

          {events.map((event, index) => {
            const isYearLeft = index % 2 === 0;
            const isActive = activeYear === event.year;

            return (
              <Row key={event.year} className="align-items-center position-relative my-3 g-0">
                {/* Left side */}
                <Col className="d-flex justify-content-end pe-3">
                    {isYearLeft ? (
                    <span className={styles.year}>{event.year}</span>
                    ) : (
                    isActive && (
                        <div className={styles.contentBox}>
                        <h5 className="mb-2">{event.year}</h5>
                        <p className="mb-0">{event.text}</p>
                        </div>
                    )
                    )}
                </Col>

                {/* Center dot */}
                <div className={styles.dotWrapper}>
                    <button
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => toggleYear(event.year)}
                    className={`${styles.dot} ${isActive ? styles.activeDot : ""}`}
                    />
                </div>

                {/* Right side */}
                <Col className="d-flex justify-content-start ps-3">
                    {!isYearLeft ? (
                    <span className={styles.year}>{event.year}</span>
                    ) : (
                    isActive && (
                        <div className={styles.contentBox}>
                        <h5 className="mb-2">{event.year}</h5>
                        <p className="mb-0">{event.text}</p>
                        </div>
                    )
                    )}
                </Col>
                </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
