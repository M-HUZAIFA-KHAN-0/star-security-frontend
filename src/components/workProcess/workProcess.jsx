"use client";

import styles from "./workProcess.module.css";

export default function WorkProcess() {
  const steps = [
    {
      id: "01",
      title: "Secure Collection",
      desc: "Cash and valuables safely collected from your branch or business location under strict protocols.",
      icon: "fa-solid fa-shield",
    },
    {
      id: "02",
      title: "Armored Transportation",
      desc: "GPS-enabled secure vehicles with trained guards ensure safe and reliable transfer.",
      icon: "fa-solid fa-car-on",
    },
    {
      id: "03",
      title: "Vaulting & Processing",
      desc: "Funds securely counted, verified, and managed at high-security vault facilities.",
      icon: "fa-solid fa-gears",
    },
  ];

  return (
    <section className={`text-center ${styles["pos-r"]}`}>
      <div className="container">
        {/* Section Heading */}
        <div className="text-center">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: "60px", height: "3px" }}
          />
          <h1 className="display-5 mb-5">Our Cash Services Process</h1>
        </div>

        <div className="row">
          {/* Decorative SVG Background */}
          <div id="svg-container" className={styles["svg-container"]}>
            <svg
              id="svgC"
              width="100%"
              height="100%"
              viewBox="0 0 620 120"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M62.9 14.9c-25-7.74-56.6 4.8-60.4 24.3-3.73 19.6 21.6 35 39.6 37.6 42.8 6.2 72.9-53.4 116-58.9 65-18.2 191 101 215 28.8 5-16.7-7-49.1-34-44-34 11.5-31 46.5-14 69.3 9.38 12.6 24.2 20.6 39.8 22.9 91.4 9.05 102-98.9 176-86.7 18.8 3.81 33 17.3 36.7 34.6 2.01 10.2.124 21.1-5.18 30.1"
                fill="none"
                stroke="var(--primary-color)"
                strokeMiterlimit="10"
                style={{
                  strokeWidth: 1,
                  strokeDasharray: "5, 10",
                  strokeDashoffset: 10,
                }}
              />
            </svg>
          </div>

          {/* Steps */}
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`col-lg-4 col-md-12 ${idx > 0 ? "md-mt-5" : ""}`}
            >
              <div className={styles["work-process"]}>
                {/* Loader (only for first two steps if needed) */}
                {idx < 2 && (
                  <div className={styles["box-loader"]}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}

                <div className={styles["step-num-box"]}>
                  <div className={styles["step-icon"]}>
                    <span>
                      <i className={step.icon}></i>
                    </span>
                  </div>
                  <div className={styles["step-num"]}>{step.id}</div>
                </div>

                <div className={styles["step-desc"]}>
                  <h4>{step.title}</h4>
                  <p className="mb-0">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
