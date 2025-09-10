"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./teamSection.module.css";

export default function TeamSection() {

    const teamMembers = [
    {
      img: "/images/t1.jpg",
      name: "Martin Anderson",
      role: "supervisor",
    },
    {
      img: "/images/t2.jpg",
      name: "Denny Butler",
      role: "supervisor",
    },
    {
      img: "/images/t3.jpg",
      name: "Nathan Mcpherson",
      role: "supervisor",
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
            Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a
            euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget
            vitae malesuada, tortor tincidunt porta lorem lectus.
          </p>
        </div>

        {/* Team Members */}
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={4} sm={6} className="mx-auto">
              <div className={styles.box}>
                <div className={styles["img-box"]}>
                  <img src={member.img} alt={member.name} />
                </div>
                <div className={styles["detail-box"]}>
                  <h5>{member.name}</h5>
                  <h6>{member.role}</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Button */}
        <div className={`btn bg-primary color-w rounded-pill py-3 px-5 fs-5 cta-hover mt-4`}>
          <a href="#">View All</a>
        </div>
      </Container>
    </section>
  );
}
