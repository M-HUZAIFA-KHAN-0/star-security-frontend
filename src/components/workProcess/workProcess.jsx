"use client";

import styles from "./workProcess.module.css";

export default function WorkProcess({steps , topHeading}) {
  

  return (
    <section className={`text-center ${styles["pos-r"]} py-5 service_BG `}>
      <div className="container p-0">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: "60px", height: "3px" }}
          />
          <h1 className="display-5 mb-5">{topHeading}</h1>
        </div>

        <div className="row ">
          {/* Decorative SVG Background */}
          <div id="svg-container" className={styles["svg-container"]}>
            <svg
              id="svgC"
              width="100%"
              height="100%"
              // viewBox="0 0 820 400"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                // d = "M 2 3 C 2 6 6 6 6 3 L 7 3 C 7 0 11 0 11 3 L 12 3 C 12 6 16 6 16 3 L 17 3 C 17 0 21 0 21 3"

                // d="M 83 39 c -12.9 -39.9 -75.9 -12.9 -65.9 25.1 c -6.5 23.8 21.6 35 39.6 37.6 c 42.8 6.2 72.9 -53.4 130.4 -60.6 c 112.9 -21.9 142.9 78.1 195.9 27.1 c 13 -22 -7 -49.1 -37 -45 c -34 11.5 -45.1 45.3 -22.1 68.3 c 9.38 12.6 24.2 20.6 39.8 22.9 c 91.4 9.05 311.3 -131.2 169.3 -94.2 c -124 125 6 65 123 37.8 c 2.01 10.2 246 49 185 -52 C 718 6 1034 211 984 55 C 888 -12 1001 157 1172 60 C 1279 -26 1083 7 1156 38"

                d="M 83 39 c -12.9 -39.9 -75.9 -12.9 -65.9 25.1 c -6.5 23.8 21.6 35 39.6 37.6 c 42.8 6.2 72.9 -53.4 130.4 -60.6 c 112.9 -21.9 142.9 78.1 169.9 16.9 c 13 -22 -7 -49.1 -37 -45 c -34 11.5 -45.1 45.3 -22.1 68.3 c 9.38 12.6 24.2 20.6 39.8 22.9 c 91.4 9.05 311.3 -131.2 198.3 -99.2 c -124 125 272 207 102 41 c -88 144 214 -37.8 80 -35.8 C 651 179 1034 211 918 15 C 720 -4 1001 157 1085 108 C 1279 -26 1083 7 1156 38"

                // d="M62.9 14.9c-25-7.74-56.6 4.8-60.4 24.3-3.73 19.6 21.6 35 39.6 37.6 42.8 6.2 72.9-53.4 116-58.9 65-18.2 191 101 215 28.8 5-16.7-7-49.1-34-44-34 11.5-31 46.5-14 69.3 9.38 12.6 24.2 20.6 39.8 22.9 91.4 9.05 102-98.9 176-86.7 18.8 3.81 33 17.3 36.7 34.6 2.01 10.2.124 21.1-5.18 30.1"
                fill="none"
                stroke="var(--primary-color)"
                strokeMiterlimit="10"
                style={{
                  strokeWidth: 2,
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
              className={`col-lg-3 col-md-6 px-2 ${idx > 0 ? "md-mt-5" : ""}`}
            >
              <div className={styles["work-process"]}>
                {/* Loader (only for first two steps if needed) */}
                {idx < 3 && (
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
