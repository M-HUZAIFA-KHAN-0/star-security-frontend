"use client";
import styles from "./benefitsSection.module.css"; // optional manual css

export default function BenefitsSection({ topHeading, benefits = [] }) {
  return (
    <section className="section-padding py-5">
      <div className="container">
        <div className="text-center">
            <div
              className="bg-primary mb-3 mx-auto"
              style={{ width: "60px", height: "3px" }}
            />
            <h1 className="display-5 mb-5">{topHeading}</h1>
          </div>
        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-12 col-md-4 text-center px-5">
              <div className={`d-flex align-items-center justify-content-center rounded-circle mx-auto mb-4 ${styles.iconWrapper}`}>
                <i className={`${benefit.icon} fs-2 color-primary`}></i>
              </div>
              <h3 className="h5 fw-semibold text-dark mb-3">{benefit.title}</h3>
              <p className="text-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
