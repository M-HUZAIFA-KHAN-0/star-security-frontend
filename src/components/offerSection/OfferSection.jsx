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
      icon: "bi-gear", // bootstrap icons
      title: "CCTV Installation",
      text: "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
      img: "/images/about.jpg",
    },
    {
      type: "card",
      icon: "bi-wifi",
      title: "Wireless Networking",
      text: "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
      img: "/images/about.jpg",
    },
    {
      type: "card",
      icon: "bi-fingerprint",
      title: "Finger Print Access",
      text: "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
      img: "/images/about.jpg",
    },
    {
      type: "card",
      icon: "bi-camera",
      title: "Closed Cameras",
      text: "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
      img: "/images/about.jpg",
    },
    {
      type: "card",
      icon: "bi-camera-video",
      title: "Security Cameras",
      text: "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
      img: "/images/about.jpg",
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
