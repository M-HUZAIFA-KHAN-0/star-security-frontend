"use client";

import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function SplitSection({SplitSectionData = [], isImgFirst = false}) {

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {isImgFirst ? (
          <>
            {/* Left Side Image */}
            <Col md={5} className="d-flex justify-content-center mb-4 mb-md-0">
              <div style={{ maxWidth: "500px", width: "100%" }}>
                <Image
                  src={SplitSectionData.img}
                  alt={SplitSectionData.heading}
                  width={500}
                  height={400}
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>

            {/* Right Side Content */}
            <Col md={7}>
              <div
                className="black-color mb-3"
                style={{ width: "60px", height: "3px" }}
              ></div>
              <h2 className="mb-3 color-primary fw-bold">{SplitSectionData.heading}</h2>
              <p className="mb-3">{SplitSectionData.para}</p>
            </Col>
          </>
        ) : (
          <>
            {/* Right Side Content */}
            <Col md={7}>
              <div
                className="black-color mb-3"
                style={{ width: "60px", height: "3px" }}
              ></div>
              <h2 className="mb-3 color-primary fw-bold">{SplitSectionData.heading}</h2>
              <p className="mb-3">{SplitSectionData.para}</p>
            </Col>

            {/* Left Side Image */}
            <Col md={5} className="d-flex justify-content-center mb-4 mb-md-0">
              <div style={{ maxWidth: "500px", width: "100%" }}>
                <Image
                  src={SplitSectionData.img}
                  alt={SplitSectionData.heading}
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
