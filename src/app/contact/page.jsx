"use client";

import ComingSoon from "@/components/ComingSoon/comingSoon";
import HalfBanner from "@/components/halfBanner/halfBanner";
import JointSection from "@/components/joinSection/joinSection";

export default function ContactPage() {
  return (
    <>
    <HalfBanner
      bgImage="/images/hero-1.jpg"
      subheading="Our Network"
      heading="Branches & Locations"
      text="Explore our extensive network of branches and locations, strategically positioned to serve you better. Find the nearest branch for personalized assistance and reliable services."
    />
    <JointSection />
    </>
  );
}


