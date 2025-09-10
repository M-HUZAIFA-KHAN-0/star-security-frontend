"use client";

import Link from "next/link";
import styles from "./parallaxSection.module.css";

export default function ParallaxSection() {
  // JSON data object
  const sectionData = {
    heading: <>
          Welcome to{" "}
          <span style={{ color: "var(--primary-color)" }}>Our Service</span>
        </>,
    para: "We provide the best solutions for your business.",
    // optionalPara: "This is an optional paragraph, you can remove it if not needed.",
    ctaText: "Get Started",
    ctaHref: "/get-started",
  };

  return (
    <section className={`${styles.parallax} d-flex align-items-center`}>
      <div className="container text-center text-white">
        <h1 className="mb-4 fw-bold">{sectionData.heading}</h1>
        <p className="mb-3">{sectionData.para}</p>
        {sectionData.optionalPara && <p className="mb-4">{sectionData.optionalPara}</p>}
        <Link href={sectionData.ctaHref} className="btn bg-primary color-w rounded-pill py-3 px-5 fs-5 cta-hover mt-3">
          {sectionData.ctaText}
        </Link>
      </div>
    </section>
  );
}
