"use client";

import { Container, Row, Col } from "react-bootstrap";
// import { FaPercent, FaRocket, FaMobileAlt, FaArrowUp, FaBullseye, FaHandshake } from "react-icons/fa";
import styles from "./benefitsFeatureSection.module.css";

export default function BenefitsFeatureSection() {
  const features = [
    {
      icon: "bi bi-people",
      title: "CONVERSION FOCUSED",
      desc: "Good design can increase conversions by up to 300%.",
    },
    {
      icon: "bi bi-people",
      title: "FAST DELIVERY",
      desc: "We believe it's better to deliver quickly and iterate along the way.",
    },
    {
      icon: "bi bi-people",
      title: "RESPONSIVE FIRST",
      desc: "Almost everyone has a phone, why is your website not responsive?",
    },
    {
      icon: "bi bi-people",
      title: "BRAND ELEVATION",
      desc: "9/10 customers don’t trust a brand with bad design.",
    },
    {
      icon: "bi bi-people",
      title: "DEDICATED FOCUS",
      desc: "Quality over quantity. Your project deserves full attention.",
    },
    {
      icon: "bi bi-people",
      title: "CLIENT SATISFACTION",
      desc: "We want you to be aligned with your future designs, it matters.",
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <Container>
        <div className="text-center color-w">
            <div
              className="bg-primary mb-3 mx-auto"
              style={{ width: "60px", height: "3px" }}
            />
            {/* <h1 className="display-5 mb-5">{topHeading}</h1> */}
            <h1 className="display-5 mb-5">Employee Benefits</h1>
        </div>
        <Row>
          {features.map((feature, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <div className={styles.card}>
                <div><i className={`${feature.icon} fs-2 color-primary`}></i></div>
                <h5 className={styles.title}>{feature.title}</h5>
                <p className={styles.desc}>{feature.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
