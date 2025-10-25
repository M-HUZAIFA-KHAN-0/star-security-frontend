"use client";
import styles from "./halfBanner.module.css";

export default function HalfBanner({ bgImage, subheading, heading, text, cta }) {
  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.subheading}>{subheading}</p>
        <h1 className={styles.heading}>
          {heading}
          {/* {heading.split(" ")[0]} <span>{heading.split(" ")[1]}</span> */}
        </h1>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  );
}
