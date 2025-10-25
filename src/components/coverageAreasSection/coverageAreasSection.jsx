"use client";

import React from "react";

export default function CoverageAreasSection() {
  return (
    <div className="text-center p-5 bg-primary">
      <div className="text-center">
        <div
          className="bg-light mb-3 mx-auto"
          style={{ width: "60px", height: "3px" }}
        />
        <h1 className="display-5 mb-5">Coverage Areas</h1>
      </div>

      {/* Image Section */}
      <div className="w-100 d-flex justify-content-center">
        <img
          src="/images/map.png"
          alt="Coverage Area"
          className="img-fluid"
          style={{ width: "90%" }} // 90% screen width
        />
      </div>
    </div>
  );
}
