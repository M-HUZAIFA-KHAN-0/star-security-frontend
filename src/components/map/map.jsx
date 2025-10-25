"use client";
import React from "react";

export default function Map() {
  return (
    <section style={{ padding: "60px 0" }}>
      <div className="container text-center mb-4">
        <div className="text-center">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: "60px", height: "3px" }}
          />
          <h1 className="display-5 mb-5">Find Us</h1>
        </div>
      </div>
      <div style={{ width: "100%", height: "90vh" }}>
        <iframe
          title="Star Security Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24156.64391766926!2d-74.0060158!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3162d5b1fb%3A0xbcc0f6219b2c8e8!2sStar%20Security%20Inc!5e0!3m2!1sen!2sus!4v1694944800000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
