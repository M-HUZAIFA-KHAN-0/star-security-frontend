"use client";

import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container py-5">
        <div className="row g-5">
          {/* Address */}
          <div className="col-lg-3 col-md-6">
            <h5>Address</h5>
            <p>
              <i className="fa fa-map-marker-alt"></i>123 Street, New York, USA
            </p>
            <p>
              <i className="fa fa-phone-alt"></i>+012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope"></i>info@example.com
            </p>
            <div className="d-flex pt-2">
              <Link href="#" className={styles.socialBtn}>
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className={`${styles.socialBtn} ms-2`}>
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className={`${styles.socialBtn} ms-2`}>
                <i className="fab fa-youtube"></i>
              </Link>
              <Link href="#" className={`${styles.socialBtn} ms-2`}>
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6">
                <h5>Services</h5>
                <Link href="#" className={styles.btnLink}>
                    Business Security
                </Link>
                <Link href="#" className={styles.btnLink}>
                    Fire Detection
                </Link>
                <Link href="#" className={styles.btnLink}>
                    Alarm Systems
                </Link>
                <Link href="#" className={styles.btnLink}>
                    CCTV & Video
                </Link>
                <Link href="#" className={styles.btnLink}>
                    Smart Home
                </Link>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
                <h5>Quick Links</h5>
                <Link href="#" className={styles.btnLink}>
                    About Us
                </Link>
                <Link href="#" className={styles.btnLink}>
                    Contact Us
                </Link>
                <Link href="#" className={styles.btnLink}>
                    Our Services
                </Link>
                <Link href="#" className={styles.btnLink}>
                    Terms & Condition
                </Link>
                <Link href="#" className={styles.btnLink}>
                    Support
                </Link>
            </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5>Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative w-100">
              <input
                type="text"
                className={styles.newsletterInput}
                placeholder="Your email"
              />
              <button type="button" className={styles.signupBtn}>
                SignUp
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <hr />
        </div>

        <div className={styles.footerEndRow}>
          <div className={styles.footerEndRowLink}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
          <div>
            <Link href="#" className={styles.logo}>
              <span className={styles.logoColor}>Star </span>
              <span className={styles.logoColor2}>Security</span>
            </Link>
          </div>
          <div>© 2025 Star Security</div>
        </div>
      </div>
    </div>
  );
}
