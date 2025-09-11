import React from "react";

export default function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center text-center vh-100">
      <div className="container">
        <h1 className="display-3 fw-bold color-primary mb-3">404</h1>
        <h2 className="h4 fw-semibold mb-3">Page Not Found</h2>
        <p className="lead text-muted mb-4">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a href="/" className="btn bg-primary color-w rounded-pill py-3 px-5 fs-5 cta-hover">
          Back to Home
        </a>
      </div>
    </div>
  );
}
