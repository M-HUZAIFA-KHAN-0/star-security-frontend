"use client";
import { useState } from "react";
import styles from "./OfferSection.module.css";
import { Row } from "react-bootstrap";

export default function OfferSection() {
  // Dummy data (icon, heading, text, image for hover)
  const data = [
    {
      type: "heading",
      title: "What Can We Offer Security",
      subtitle: "WHAT WE DO",
    },
    {
      type: "card",
      icon: "bi-gear",
      title: "CCTV Installation",
      text: "High-definition CCTV cameras with professional installation to monitor, record, and secure your premises 24/7.",
      img: "/images/cctv-installation.jpg",
    },
    {
      type: "card",
      icon: "bi-house-gear-fill",
      title: "Smart Home Security",
      text: "Advanced home automation and alarm systems that safeguard your family with real-time monitoring and alerts.",
      img: "/images/home-security.jpg",
    },
    {
      type: "card",
      icon: "bi-cash-stack",
      title: "Cash Protection Services",
      text: "Secure transportation and handling of cash and valuables with trained staff and armored vehicles.",
      img: "/images/cash-protection.png",
    },
    {
      type: "card",
      icon: "bi-diagram-3",
      title: "Secure Vaulting & Processing",
      text: "State-of-the-art vaults and professional cash handling teams to count, verify, and process funds securely.",
      img: "/images/secure-processing.jpg",
    },
    {
      type: "card",
      icon: "bi-newspaper",
      title: "Access Control Systems",
      text: "Smart card, biometric, and keypad-based systems to regulate and monitor entry points with precision.",
      img: "/images/access-control.jpg",
    },
        
  ];

  return (
    <div className="container my-5">

        {/* <div className="text-center">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: "60px", height: "2px" }}
          />
          <h1 className="display-5 mb-5">Why Choose Us</h1>
        </div> */}

      <Row>
        {data.map((item, index) => (
          <div key={index} className="col-md-4 px-0">
            {item.type === "heading" ? (
              <div className={`${styles.headingBox} h-100`}>
                <h5 className="text-uppercase color-primary fw-bold">
                  {item.subtitle}
                </h5>
                <h1 className="fw-bold">{item.title}</h1>
              </div>
            ) : (
              <div className={`${styles.cardBox} h-100`}>
                <i className={`bi ${item.icon} ${styles.iconLarge} mb-3 color-primary`}></i>
                <h5 className="fw-bold">{item.title}</h5>
                <p className={styles.cardText}>{item.text}</p>
                <div
                  className={styles.hoverImage}
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </Row>

    </div>
  );
}
