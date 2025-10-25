"use client";
import { useState } from "react";
import styles from "./branches.module.css";

export default function Branches() {
  const regions = ["North", "South", "East", "West"];

  const branches = {
    North: [
      { id: 1, title: "Midtown Tower", img: "/images/branches/branch-13.jpg" },
      { id: 2, title: "Downtown Plaza", img: "/images/branches/branch-2.jpg" },
      { id: 3, title: "Waterfront Tower", img: "/images/branches/branch-7.jpg" },
      { id: 10, title: "Grand Arena", img: "/images/branches/branch-4.jpg" },
    ],
    South: [
      { id: 4, title: "Sunset Mall", img: "/images/branches/branch-5.jpg" },
      { id: 5, title: "Central Market", img: "/images/branches/branch-6.jpg" },
    ],
    East: [
      { id: 6, title: "East Tower", img: "/images/branches/branch-7.jpg" },
      { id: 7, title: "Green Plaza", img: "/images/branches/branch-8.jpg" },
      { id: 8, title: "Ocean View", img: "/images/branches/branch-9.jpg" },
    ],
    West: [
      { id: 9, title: "West Gate", img: "/images/branches/branch-10.jpg" },
      { id: 10, title: "Grand Arena", img: "/images/branches/branch-11.jpg" },
    ],
  };

  const [activeRegion, setActiveRegion] = useState("North");

  return (
    <div>
      <div className={styles.Branches_BG}></div>

      <div className="container mx-auto py-5">
        {/* Heading */}
        <div className="text-center">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: "60px", height: "3px" }}
          />
          <h1 className="display-5 mb-5 color-w">Our Branches</h1>
        </div>

        {/* Region Buttons */}
        <div className="d-flex justify-content-center align-items-center mb-5">
          <div className={styles.scrollContainer}>
            {regions.map((region) => (
              <div
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`${styles.customBtn} ${
                  activeRegion === region ? styles.active : ""
                }`}
              >
                {region}
              </div>
            ))}
          </div>
        </div>

        {/* Branch Cards */}
        <div className="row justify-content-center">
          {branches[activeRegion]?.length > 0 ? (
            branches[activeRegion].map((branch) => (
              <div key={branch.id} className="col-lg-6 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                <div className={`card mb-3 ${styles.cardCustom}`} style={{ width: "33rem" }}>
                  <img
                    className={`card-img-top ${styles.cardImg}`}
                    src={branch.img}
                    height="380"
                    alt={branch.title}
                  />
                  <div className={styles.productDetail}>
                    <h5 className="card-title text-center color-primary fs-4">
                      {branch.title}
                    </h5>
                    <div className="mb-5 mt-3 color-w">
                      <p className="mb-0 d-flex align-items-center gap-2 my-3">
                        <i className="fa-solid fa-location-dot primary-hover"></i>
                        Little bit of description about the branch.
                      </p>
                      <p className="mb-0 d-flex align-items-center gap-2 my-3">
                        <i className="fa-solid fa-phone primary-hover"></i>
                        +123 456 7890
                      </p>
                      <p className="mb-0 d-flex align-items-center gap-2 my-3">
                        <i className="fa-solid fa-envelope primary-hover"></i>
                        branch@example.com
                      </p>
                    </div>
                    <button
                      type="button"
                      className={`btn btn-outline-dark ${styles.branchesBtn}`}
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-12 text-center text-gray-500">
              No branches available for this region.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
