import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Shield, Users, MapPin, Award, Clock, CheckCircle } from "lucide-react";
import styles from "@/styles/page.module.css";

import Banner from "@/components/mainBanner/mainBanner";
import Facts from "@/components/facts/facts";
import AboutSection from "@/components/aboutSection/aboutSection";
import Services from "@/components/services/services";
import Testimonial from "@/components/testimonial/testimonial";
import JointSection from "@/components/joinSection/joinSection";
import ParallaxSection from "@/components/parallaxSection/parallaxSection";
import OfferSection from "@/components/offerSection/OfferSection";
import TeamSection from "@/components/teamSection/teamSection";


export default function Home() {

  const aboutData = {
          bgImage: "/images/about.jpg",
          heading: "About Us",
          description:
            "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet",
          stats: [
            {
              id: 1,
              icon: "/icon/icon-1.png",
              value: "1234",
              label: "Happy Clients",
            },
            {
              id: 2,
              icon: "/icon/icon-5.png",
              value: "1234",
              label: "Projects Done",
            },
          ],
          cta: "Explore More",
          ctalink: "#",
      };

      
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



  return (
    <>
      <Banner
        bgImage="/images/hero-1.jpg"
        subheading="We Provide The Best"
        heading="Security Service"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cta="GET APPOINTMENT"
      />
      <Facts />
      <AboutSection aboutData={aboutData} />
      <Services servicesData={servicesData} topHeading = "Our Services"/>
      <ParallaxSection />
      <OfferSection />
      <TeamSection />
      <Testimonial />
      <JointSection />
    </>
  );
}