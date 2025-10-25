"use client";

import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Shield, Users, MapPin, Award, Clock, CheckCircle } from "lucide-react";
import styles from "@/styles/page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Banner from "@/components/mainBanner/mainBanner";
import Facts from "@/components/facts/facts";
import AboutSection from "@/components/aboutSection/aboutSection";
import Services from "@/components/services/services";
import Testimonial from "@/components/testimonial/testimonial";
import JointSection from "@/components/joinSection/joinSection";
import ParallaxSection from "@/components/parallaxSection/parallaxSection";
import OfferSection from "@/components/offerSection/OfferSection";
import TeamSection from "@/components/teamSection/teamSection";
import HalfBanner from "@/components/halfBanner/halfBanner";



export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width on mount
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  const servicesData = [
    {
      id: 1,
      title: "Commercial CCTV System",
      desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
      icon: "icon/icon-6.png",
    },
    {
      id: 2,
      title: "Finger Print Access",
      desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
      icon: "icon/icon-8.png",
    },
    {
      id: 3,
      title: "Fire Detection And Safety",
      desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
      icon: "icon/icon-9.png",
    },
    {
      id: 4,
      title: "Smart Home Security",
      desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
      icon: "icon/icon-3.png",
    },
    {
      id: 5,
      title: "Access Control System",
      desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
      icon: "icon/icon-2.png",
    },
  ];


  const aboutData = {
          bgImage: "/images/about.jpg",
          heading: "About Us",
          description:
            "Star Security Services provides tailored solutions in manned guarding, cash protection, electronic systems, and investigations. With trained teams, innovation, and commitment, we ensure reliable protection for people, property, and assets across industries.",
          stats: [
            {
              id: 1,
              icon: "/icon/icon-1.png",
              value: "196",
              label: "Happy Clients",
            },
            {
              id: 2,
              icon: "/icon/icon-5.png",
              value: "270",
              label: "Projects Done",
            },
          ],
          cta: "Explore More",
          ctalink: "/about",
      };



  const sectionData = {
    heading: <>
          Welcome to{" "}
          <span style={{ color: "var(--primary-color)" }}>Our Service</span>
        </>,
    para: "We provide the best solutions for your business.",
    // optionalPara: "This is an optional paragraph, you can remove it if not needed.",
    ctaText: "Get Started",
    ctaHref: "/contact",
    img: "/images/carousel-2.jpg",
  };



  return (
    <>
      {isMobile ? 
        (
          <HalfBanner
            bgImage="/images/hero-1.jpg"
            subheading="Your Security Partner"
            heading="Reliable Protection, Anytime Anywhere"
            text="Star Security delivers trusted protection with skilled guards, advanced systems, and reliable services, built on innovation, discipline, and commitment to safeguard people, property, and businesses."
          />
        ) : (
          <Banner
            bgImage="/images/hero-1.jpg"
            subheading="Your Security Partner"
            heading="Reliable Protection, Anytime Anywhere"
            text="Star Security delivers trusted protection with skilled guards, advanced systems, and reliable services, built on innovation, discipline, and commitment to safeguard people, property, and businesses."
            cta="Hire Us"
          />
        )
      }
      <Facts />
      <AboutSection aboutData={aboutData} />
      <Services servicesData={servicesData} topHeading = "Our Services"/>
      <ParallaxSection sectionData={sectionData} />
      <OfferSection />
      <TeamSection />
      <Testimonial />
      <JointSection />
    </>
  );
}