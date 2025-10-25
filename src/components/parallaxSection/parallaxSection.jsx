"use client";

import Link from "next/link";
import styles from "./parallaxSection.module.css";

export default function ParallaxSection({sectionData}) {

  return (
    <section
      className={`${styles.parallax} d-flex align-items-center`}
      style={{ backgroundImage: `url("${sectionData.img}")` }}
    >
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
