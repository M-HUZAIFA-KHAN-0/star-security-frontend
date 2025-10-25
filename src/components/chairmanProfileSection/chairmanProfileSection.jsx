"use client";
import React from "react";
import styles from "./chairmanProfileSection.module.css";

export default function ChairmanProfileSection({ heading, chairman }) {
  return (
    <section className={styles.sectionPadding}>
      <div className="container">
        <div className="mx-auto" style={{ maxWidth: "90%" }}>
          <div className="text-center">
            <div
                className="bg-primary mb-3 mx-auto"
                style={{ width: "60px", height: "3px" }}
            />
            <h1 className="display-5 mb-5">{heading}</h1>
          </div>
          <div className={`card p-4 ${styles.customCard}`}>
            <div className="row align-items-center g-4">
              {/* Image */}
              <div className="col-12 col-md-4">
                <img
                  src={chairman.image}
                  alt={chairman.name}
                  className={`img-fluid rounded ${styles.chairmanImg}`}
                />
              </div>

              {/* Content */}
              <div className="col-12 col-md-8">
                <h3 className="h4 fw-bold mb-2">{chairman.name}</h3>
                <p className="color-primary fw-medium mb-3">{chairman.position}</p>
                {chairman.description.map((para, index) => (
                  <p key={index} className="text-muted mb-2">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
