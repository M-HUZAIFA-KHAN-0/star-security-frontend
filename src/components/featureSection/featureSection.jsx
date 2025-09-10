"use client";

import Image from "next/image";
import React from "react";
import styles from "./featureSection.module.css";

export default function FeatureSection() {
  const sections = [
    {
      heading: "Chairman",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cta: "More information",
      img: "/images/t1.jpg",
      reverse: false,
    },
    {
      heading: "Board Of Directors",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cta: "More information",
      img: "/images/t3.jpg",
      reverse: true,
    },
    
  ];

  return (
    <div className="container my-5">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`d-flex flex-column flex-md-row align-items-center justify-content-between mb-5 ${
            section.reverse ? "flex-md-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <div className="flex-grow-1 me-md-4">
            <h2 className={styles.heading}>{section.heading}</h2>
            <p className={styles.text}>{section.text}</p>
            <button className="btn bg-primary color-w rounded-pill py-3 px-5 fs-5 cta-hover">
              {section.cta}
            </button>
          </div>

          {/* Image */}
          <div 
          className={`${
            section.reverse ? "me-4" : ""
          }`}
          style={{ maxWidth: "400px", flexShrink: 0 }}>
            <Image
              src={section.img}
              alt={section.heading}
              width={400}
              height={400}
              className={`img-fluid ${styles.image}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
