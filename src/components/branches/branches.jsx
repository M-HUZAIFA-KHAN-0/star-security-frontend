"use client";
import { useState } from "react";
import styles from "./branches.module.css";

export default function Branches() {
  const regions = ["North", "South", "East", "West" ];

  const branches = {
    North: [
      { id: 1, title: "Midtown Tower", img: "https://picsum.photos/400/250?random=1" },
      { id: 2, title: "Downtown Plaza", img: "https://picsum.photos/400/250?random=2" },
      { id: 3, title: "Waterfront Tower", img: "https://picsum.photos/400/250?random=3" },
    ],
    South: [
      { id: 4, title: "Sunset Mall", img: "https://picsum.photos/400/250?random=4" },
      { id: 5, title: "Central Market", img: "https://picsum.photos/400/250?random=5" },
    ],
    East: [
      { id: 6, title: "East Tower", img: "https://picsum.photos/400/250?random=6" },
      { id: 7, title: "Green Plaza", img: "https://picsum.photos/400/250?random=7" },
      { id: 8, title: "Ocean View", img: "https://picsum.photos/400/250?random=8" },
    ],
    West: [
      { id: 9, title: "West Gate", img: "https://picsum.photos/400/250?random=9" },
      { id: 10, title: "Grand Arena", img: "https://picsum.photos/400/250?random=10" },
    ],
  };

  const [activeRegion, setActiveRegion] = useState("North");

  return (
        <div>
        <div className={`${styles.Branches_BG}`}></div>
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
        <div className={`${styles.scrollContainer}`}>
            {regions.map((region) => (
            <div
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`${styles.customBtn} ${activeRegion === region ? styles.active : ""}`}
            >
                {region}
            </div>
            ))}
        </div>
      </div>



      {/* Branch Cards */}
      <div className="row">
        {branches[activeRegion]?.length > 0 ? (
            branches[activeRegion].map((branch) => (
            <div
                key={branch.id}
                className="col-lg-6 col-md-6 col-sm-12"
            >
                <div className={`card mb-3 ${styles.cardCustom}`} style={{ width: "33rem" }}>
                <img
                    className={`card-img-top ${styles.cardImg}`}
                    src={branch.img}
                    height="380"
                    alt={branch.title}
                />
                <div className={styles.productDetail}>
                    <h5 className="card-title text-center color-primary fs-4">{branch.title}</h5>

                    <div className="mb-5 mt-3 color-w">
                        <p className="mb-0 d-flex align-items-center gap-2 my-3"> 
                            <i className="fa-solid fa-location-dot primary-hover"></i> 
                            'Little Bit Of Description About The Branch.'
                        </p>
                        <p className="mb-0 d-flex align-items-center gap-2 my-3"> 
                            <i className="fa-solid fa-phone primary-hover"></i> 
                            'Little Bit Of Description.'
                        </p>
                        <p className="mb-0 d-flex align-items-center gap-2 my-3"> 
                            <i className="fa-solid fa-envelope primary-hover"></i> 
                            'Description'
                        </p>
                    </div>

                    <button type="button" className={`btn btn-outline-dark ${styles.branchesBtn}`}>
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
