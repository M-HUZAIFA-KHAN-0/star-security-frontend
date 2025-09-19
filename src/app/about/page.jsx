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


export default function About() {

    const aboutData = {
          bgImage: "/images/about.jpg",
          heading: "We Have 21 Years of Experience",
          description:
            <>
            "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet",
            <br /> <br />
            "We are committed to delivering top-notch security solutions tailored to your needs. Our team of professionals is dedicated to ensuring your safety and peace of mind."
            <br /> <br />
            "Join us on our mission to create a safer environment for everyone."
            </>,
          stats: [
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
          cta: "Lets Connect",
          ctalink: "#",
      };


  return (
    <>
      <HalfBanner
        bgImage="/images/hero-1.jpg"
        subheading="We Provide The Best"
        heading="Security Service"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <AboutSection aboutData={aboutData} />
      <ParallaxSection />
      <FeatureSection />
      <AchievementSubBanner />
      <Timeline />
      <TeamSection />
      <Testimonial />
      <JointSection />
    </>
  );
}
