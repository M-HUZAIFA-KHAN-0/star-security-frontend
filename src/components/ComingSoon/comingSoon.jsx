"use client";

import React from "react";

export default function ComingSoon() {
  return (
    <div className="d-flex justify-content-center align-items-center text-center vh-100">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">🚧 Coming Soon</h1>
        <p className="lead text-muted mb-4">
          This page is currently under development. Please check back later!
        </p>
        <button
          className="btn bg-primary color-w rounded-pill py-3 px-5 fs-5 cta-hover"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
