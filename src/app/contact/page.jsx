"use client";

import ComingSoon from "@/components/ComingSoon/comingSoon";
import HalfBanner from "@/components/halfBanner/halfBanner";
import JointSection from "@/components/joinSection/joinSection";
import ParallaxSection from "@/components/parallaxSection/parallaxSection";
import Map from "@/components/map/map";

export default function ContactPage() {

  const sectionData = {
    heading: <>
          Emergency {" "}
          <span style={{ color: "var(--primary-color)" }}>Security Services</span>
        </>,
    para: "For immediate security assistance or emergency situations, contact our 24/7 emergency hotline.",
    // optionalPara: "This is an optional paragraph, you can remove it if not needed.",
    ctaText: "Call Emergency Line",
    ctaHref: "tel:+15551234567",
    img: "/images/carousel-2.jpg",
  };


  return (
    <>
      <HalfBanner
        bgImage="/images/contact-banner.png"
        subheading="contact us"
        heading="Get in Touch"
        text="Connect with us for inquiries, service details, or support. Our dedicated team is ready to assist you with all your security needs."
      />
      <JointSection />
      <ParallaxSection sectionData={sectionData} />
      < Map />
    </>
  );
}


