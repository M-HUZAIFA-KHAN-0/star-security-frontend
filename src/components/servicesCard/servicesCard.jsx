"use client";

import React from "react";
import Link from "next/link";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function ServicesCards({ data }) {
  return (
    <Container className="py-5">
      <div className="text-center">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: "60px", height: "3px" }}
          />
          <h1 className="display-5 mb-5">Our Cash Services</h1>
        </div>
      <Row className="">
        {data.map((item, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 border-0 hover-effect my-4">
              <Card.Img variant="top" src={item.img} alt={item.title} height={210}/>
              <Card.Body className="text-center px-4">
                <Card.Title className="mt-4 mb-3 fs-3 fw-bold color-primary">{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Link href={item.link} passHref>
                  <Button variant="link" className="p-0 mt-3 fw-bold color-primary text-decoration-none ">
                    READ MORE
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
