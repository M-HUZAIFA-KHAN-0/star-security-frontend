"use client";
import React, { useState } from "react";
import styles from "./joinSection.module.css";

export default function JoinSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validate form
  const validate = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces.";
    } else if (formData.name.length > 40) {
      newErrors.name = "Name cannot exceed 40 characters.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Mobile
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required.";
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = "Mobile number must contain only digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const data = {
        Name: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        Message: formData.message,
      };

      try {
        const response = await fetch("http://localhost:5050/api/ContactInquiry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log("Form submitted successfully:", data);
          alert("Form submitted successfully!");

          // Reset form fields after success
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });

          // Reset errors
          setErrors({});
        } else {
          alert("Error submitting form. Please try again.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container quote px-lg-0">
        <div className="row g-0 mx-lg-0">
          {/* Left Image */}
          <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="/images/quote.jpg"
                style={{ objectFit: "cover" }}
                alt="quote"
              />
            </div>
          </div>

          {/* Right Form */}
          <div
            className="col-lg-6 quote-text py-5 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div className="p-lg-5 pe-lg-0">
              <div
                className="bg-primary mb-3"
                style={{ width: "60px", height: "3px" }}
              ></div>
              <h1 className="display-5 mb-5">Free Quote</h1>
              <p className="mb-4 pb-2">
                Reach out to Star Security for service inquiries, customized security solutions, or dedicated support. Our experienced team is here to listen, guide, and provide the right protection for your business, home, or institution.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  {/* Name */}
                  <div className="col-12 col-sm-12">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control border-1"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                    />
                    {errors.name && (
                      <small className="text-danger px-1">{errors.name}</small>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-12 col-sm-12">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control border-1"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                    />
                    {errors.email && (
                      <small className="text-danger px-1">{errors.email}</small>
                    )}
                  </div>

                  {/* Mobile */}
                  <div className="col-12 col-sm-12">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control border-1"
                      placeholder="Your Mobile"
                      style={{ height: "55px" }}
                    />
                    {errors.phone && (
                      <small className="text-danger px-1">{errors.phone}</small>
                    )}
                  </div>

                  {/* Note (optional) */}
                  <div className="col-12">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control border-1"
                      placeholder="Special Note"
                      rows="4"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <div className={`col-12 ${styles.resBtnCenter}`}>
                    <button
                      className="btn bg-primary color-w rounded-pill py-3 px-5 fs-5 cta-hover mt-3"
                      type="submit"
                    >
                      Get A Free Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}