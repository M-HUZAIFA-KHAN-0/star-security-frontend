"use client";
import Image from "next/image";
import styles from "./facts.module.css"; // agar custom css use karni ho


export default function Facts() {
  const services = [
    {
      id: "01",
      icon: "/icon/icon-3.png",
      title: "Home Security",
      text: "Advanced home protection solutions with alarms, CCTV, and monitoring systems to keep your family and property safe.",
    },
    {
      id: "02",
      icon: "/icon/icon-4.png",
      title: "Access Control",
      text: "Smart card, biometric, and keypad systems to regulate and monitor entry points with precision and reliability.",
    },
    {
      id: "03",
      icon: "/icon/icon-2.png",
      title: "24/7 Support",
      text: "Dedicated security assistance and monitoring available round-the-clock to ensure uninterrupted protection and peace of mind.",
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="col-md-6 col-lg-4"
              data-wow-delay={`${0.1 + index * 0.2}s`}
            >
              <div className={`h-100 p-4 p-xl-5 ${styles.card || ""}`}>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div
                    className="btn-square rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <Image
                      src={service.icon}
                      alt="Icon"
                      width={75}
                      height={75}
                      className="img-fluid"
                    />
                  </div>
                  <h1 className="display-1 mb-0 fw-bold" style={{ color: "#000" }}>
                    {service.id}
                  </h1>
                </div>
                <h5 className="text-white">{service.title}</h5>
                <hr className="w-25" style={{ border: "1px solid #fff" }}/>
                <span className="text-light">{service.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
