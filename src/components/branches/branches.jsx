"use client";

import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function BranchSection({branchSectionData = [], isImgFirst = false}) {

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {isImgFirst ? (
          <>
            {/* Left Side Image */}
            <Col md={5} className="d-flex justify-content-center mb-4 mb-md-0">
              <div style={{ maxWidth: "500px", width: "100%" }}>
                <Image
                  src={branchSectionData.img}
                  alt={branchSectionData.heading}
                  width={500}
                  height={400}
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>

            {/* Right Side Content */}
            <Col md={7}>
                {/* Top Line */}
                <div
                    className="black-color mb-3"
                    style={{ width: "60px", height: "3px" }}
                ></div>

                {/* Heading */}
                <h2 className="mb-3 color-primary fw-bold">
                    {branchSectionData.heading}
                </h2>

                {/* Paragraph */}
                <p className="mb-4">{branchSectionData.para}</p>

                {/* Features Grid */}
                <Row>
                    {branchSectionData.points.map((point, index) => (
                    <Col md={6} key={index} className="my-4">
                        <h6 className="fw-bold mb-3 color-primary d-flex align-items-center gap-2">
                            <i className="fa-solid fa-location-dot primary-hover"></i>
                            <span>{point.branchName}</span>
                        </h6>
                        <p className="mb-0 d-flex align-items-start gap-2">
                            <i className="fa-solid fa-location-crosshairs primary-hover pt-1"></i>
                            <span>{point.address}</span>
                        </p>
                        <p className="mb-0 d-flex align-items-center gap-2">
                            <i className="fa-solid fa-phone primary-hover"></i>
                            <span>{point.phone}</span>
                        </p>
                        <p className="mb-0 d-flex align-items-center gap-2">
                            <i className="fa-solid fa-envelope primary-hover"></i>
                            <span>{point.email}</span>
                        </p>
                    </Col>

                    ))}
                </Row>
            </Col>
          </>
        ) : (
          <>
            {/* Right Side Content */}
            <Col md={7}>
                {/* Top Line */}
                <div
                    className="black-color mb-3"
                    style={{ width: "60px", height: "3px" }}
                ></div>

                {/* Heading */}
                <h2 className="mb-3 color-primary fw-bold">
                    {branchSectionData.heading}
                </h2>

                {/* Paragraph */}
                <p className="mb-4">{branchSectionData.para}</p>

                {/* Features Grid */}
                <Row>
                    {branchSectionData.points.map((point, index) => (
                    <Col md={6} key={index} className="my-4">
                        <h6 className="fw-bold mb-3 color-primary d-flex align-items-center gap-2">
                            <i className="fa-solid fa-location-dot primary-hover"></i>
                            <span>{point.branchName}</span>
                        </h6>
                        <p className="mb-0 d-flex align-items-start gap-2">
                            <i className="fa-solid fa-location-crosshairs primary-hover pt-1"></i>
                            <span>{point.address}</span>
                        </p>
                        <p className="mb-0 d-flex align-items-center gap-2">
                            <i className="fa-solid fa-phone primary-hover"></i>
                            <span>{point.phone}</span>
                        </p>
                        <p className="mb-0 d-flex align-items-center gap-2">
                            <i className="fa-solid fa-envelope primary-hover"></i>
                            <span>{point.email}</span>
                        </p>
                    </Col>

                    ))}
                </Row>
            </Col>

            {/* Left Side Image */}
            <Col md={5} className="d-flex justify-content-center mb-4 mb-md-0">
              <div style={{ maxWidth: "500px", width: "100%" }}>
                <Image
                  src={branchSectionData.img}
                  alt={branchSectionData.heading}
                  width={500}
                  height={400}
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}
