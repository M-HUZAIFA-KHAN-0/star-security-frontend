"use client";
import React from "react";
import styles from "./directorsSection.module.css";

export default function DirectorsSection({ heading, directors }) {
  return (
    <section className={`${styles.sectionPadding} bg-light`}>
      <div className="container">
        <div className="text-center">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: "60px", height: "3px" }}
          />
          <h1 className="display-5 mb-5">{heading}</h1>
        </div>
        <div className="row g-4">
          {directors.map((director, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                className={`card text-center p-4 h-100 ${styles.customCardHover}`}
              >
                <img
                  src={director.image}
                  alt={director.name}
                  className={`${styles.directorImg} mx-auto mb-3`}
                />
                <h3 className="h5 fw-semibold mb-2">{director.name}</h3>
                <p className="primary-hover fw-medium">{director.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
