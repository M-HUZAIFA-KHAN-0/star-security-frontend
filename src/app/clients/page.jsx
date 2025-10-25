"use client";

import AchievementSubBanner from "@/components/achievementSubBanner/achievementSubBanner";
import ClientsSection from "@/components/clientsSection/clientsSection";
import ComingSoon from "@/components/ComingSoon/comingSoon";
import HalfBanner from "@/components/halfBanner/halfBanner";
import TeamSection from "@/components/teamSection/teamSection";
import Testimonial from "@/components/testimonial/testimonial";
import JointSection from "@/components/joinSection/joinSection";


export default function ClientsPage() {

  const clients = [
    { name: "Corporate Plaza", sector: "Corporate", services: "Manned Guarding", staff: 25 },
    { name: "City Mall", sector: "Retail", services: "Electronic Security", staff: 15 },
    { name: "Metro Bank", sector: "Financial", services: "Cash Services", staff: 30 },
    { name: "Tech Campus", sector: "Technology", services: "Access Control", staff: 20 },
  ];



  return (
    // <ComingSoon />
    <>
      <HalfBanner 
        bgImage="/images/client-banner.png"
        subheading="our clients"
        heading="Trusted by Leading Brands"
        text="Over the years, we have partnered with top organizations, delivering reliable security services that protect their operations, employees, and customers."
      />
      <ClientsSection clients={clients} />;
      <AchievementSubBanner />
      <TeamSection />
      <Testimonial />
      <JointSection />
    </>
  );
}


