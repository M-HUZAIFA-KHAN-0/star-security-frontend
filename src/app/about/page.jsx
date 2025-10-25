import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Shield, Users, MapPin, Award, Clock, CheckCircle } from "lucide-react";

import Banner from "@/components/mainBanner/mainBanner";
import AboutSection from "@/components/aboutSection/aboutSection";
import Testimonial from "@/components/testimonial/testimonial";
import JointSection from "@/components/joinSection/joinSection";
import ParallaxSection from "@/components/parallaxSection/parallaxSection";
import FeatureSection from "@/components/featureSection/featureSection";
import AchievementSubBanner from "@/components/achievementSubBanner/achievementSubBanner";
import Timeline from "@/components/timelineSection/timeline";
import TeamSection from "@/components/teamSection/teamSection";
import HalfBanner from "@/components/halfBanner/halfBanner";
import DirectorsSection from "@/components/directorsSection/directorsSection";
import ChairmanProfileSection from "@/components/chairmanProfileSection/chairmanProfileSection";

export default function About() {
  const aboutData = {
    bgImage: "/images/about.jpg",
    heading: "We Have 21 Years of Experience",
    description: (
      <>
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
        diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem
        sit clita duo justo erat amet",
        <br />
        <br />
        "We are committed to delivering top-notch security solutions tailored to
        your needs. Our team of professionals is dedicated to ensuring your
        safety and peace of mind."
        <br />
        <br />
        "Join us on our mission to create a safer environment for everyone."
      </>
    ),
    stats: [
      // Example stats (commented out)
      // {
      //   id: 1,
      //   icon: "/icon/icon-1.png",
      //   value: "1234",
      //   label: "Happy Clients",
      // },
      // {
      //   id: 2,
      //   icon: "/icon/icon-5.png",
      //   value: "1234",
      //   label: "Projects Done",
      // },
    ],
    cta: "Let's Connect",
    ctalink: "#",
  };

  const chairman = {
    name: "John Anderson",
    position: "Chairman & Founder",
    image:
      "https://images.unsplash.com/photo-1624245532111-8f4aba352ba9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    description: [
      "With over 30 years of experience in the security industry, John Anderson founded Star Security Services with a vision to revolutionize security solutions. His leadership and strategic vision have been instrumental in the company's growth and success.",
      "Under his guidance, the company has expanded its operations across multiple regions and has established itself as a leader in providing innovative security solutions.",
    ],
  };

  const directorsData = [
    {
      name: "Michael Chen",
      position: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sarah Wilson",
      position: "Chief Operating Officer",
      image:
        "https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    },
    {
      name: "Emily Davis",
      position: "Chief Financial Officer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const sectionData = {
    heading: (
      <>
        Ready to{" "}
        <span style={{ color: "var(--primary-color)" }}>Secure</span> Your{" "}
        <span style={{ color: "var(--primary-color)" }}>Future</span>?
      </>
    ),
    para: "Let us help you create a comprehensive security solution tailored to your specific needs.",
    ctaText: "Contact Us Today",
    ctaHref: "/contact",
    img: "/images/carousel-2.jpg",
  };


    const eventsData = [
        {
            year: 1976,
            text: "Star Security founded, initially with services focused on the transport of valuables and cash management.",
        },
        {
            year: 1977,
            text: "Security monitoring was introduced, with implementation of services in new markets.",
        },
        {
            year: 1980,
            text: "Expanded operations internationally.",
        },
        {
            year: 1983,
            text: "Launched new security technology services.",
        },
        {
            year: 1987,
            text: "Strengthened workforce and training programs.",
        },
        {
            year: 1992,
            text: "Introduced integrated cash logistics.",
        },
    ];

  return (
    <>
      <HalfBanner
        bgImage="/images/about-banner.jpeg"
        subheading="About Us"
        heading="About Star Security Services"
        text="Since 2000, we have been at the forefront of security services, providing comprehensive solutions that protect people, property, and assets across multiple industries."
      />

      <AboutSection aboutData={aboutData} />
      <ParallaxSection sectionData={sectionData} />
      <ChairmanProfileSection heading="Chairman's Profile" chairman={chairman} />
      <DirectorsSection heading="Board of Directors" directors={directorsData} />
      <AchievementSubBanner />
      <Timeline events={eventsData}/>
      <TeamSection />
      <Testimonial />
      <JointSection />
    </>
  );
}
