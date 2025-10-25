"use client";

import BenefitsFeatureSection from "@/components/benefitsFeatureSection/benefitsFeatureSection";
import BenefitsSection from "@/components/benefitsSection/benefitsSection";
import JobSection from "@/components/jobSection/jobSection";
import TeamSection from "@/components/teamSection/teamSection";
import Testimonial from "@/components/testimonial/testimonial";
import JointSection from "@/components/joinSection/joinSection";
import HalfBanner from "@/components/halfBanner/halfBanner";
import WorkProcess from "@/components/workProcess/workProcess";
import ParallaxSection from "@/components/parallaxSection/parallaxSection";

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Security Guard - Corporate",
      location: "North Region",
      type: "Full-time",
      salary: "$35,000 - $42,000",
      description:
        "Provide security services for corporate clients including access control, surveillance, and incident response.",
      requirements: [
        "Valid security license",
        "2+ years experience",
        "Excellent communication skills",
      ],
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Security Supervisor",
      location: "West Region",
      type: "Full-time",
      salary: "$45,000 - $55,000",
      description:
        "Lead and supervise security teams, conduct training, and ensure quality service delivery.",
      requirements: [
        "Supervisory experience",
        "Security certification",
        "Leadership skills",
      ],
      posted: "5 days ago",
    },
    {
      id: 3,
      title: "Electronic Security Technician",
      location: "East Region",
      type: "Full-time",
      salary: "$40,000 - $50,000",
      description:
        "Install, maintain, and repair electronic security systems including CCTV and access control.",
      requirements: [
        "Technical certification",
        "Electronics experience",
        "Problem-solving skills",
      ],
      posted: "1 week ago",
    },
    {
      id: 4,
      title: "Cash Services Officer",
      location: "South Region",
      type: "Full-time",
      salary: "$38,000 - $46,000",
      description:
        "Handle cash transportation and processing services with adherence to security protocols.",
      requirements: [
        "Clean driving record",
        "Physical fitness",
        "Attention to detail",
      ],
      posted: "3 days ago",
    },
    {
      id: 5,
      title: "Training Coordinator",
      location: "North Region",
      type: "Full-time",
      salary: "$50,000 - $60,000",
      description:
        "Develop and deliver training programs for security personnel and new recruits.",
      requirements: [
        "Training experience",
        "Curriculum development",
        "Communication skills",
      ],
      posted: "1 week ago",
    },
  ];

  const regions = ["North Region", "West Region", "East Region", "South Region"];

  const benefitsData = [
    {
      icon: "bi bi-cash-coin",
      title: "Competitive Salary",
      description:
        "Industry-leading compensation packages with performance bonuses",
    },
    {
      icon: "bi bi-people",
      title: "Career Growth",
      description:
        "Clear advancement paths and professional development opportunities",
    },
    {
      icon: "bi bi-clock-history",
      title: "Work-Life Balance",
      description:
        "Flexible scheduling options and comprehensive time-off policies",
    },
  ];

  const stepsData = [
    {
      id: "01",
      title: "Apply Online",
      desc: "Submit your application and resume through our online portal",
      icon: "fa-solid fa-user-plus",
    },
    {
      id: "02",
      title: "Initial Review",
      desc: "Our HR team will review your qualifications and experience",
      icon: "fa-solid fa-user-check",
    },
    {
      id: "03",
      title: "Interview",
      desc: "Participate in a comprehensive interview process",
      icon: "fa-solid fa-chalkboard-teacher",
    },
    {
      id: "04",
      title: "Join Our Team",
      desc: "Complete onboarding and begin your career with us",
      icon: "fa-solid fa-user-tie",
    },
  ];

  const sectionData = {
    heading: (
      <>
        Ready to Start{" "}
        <span style={{ color: "var(--primary-color)" }}>Your Career</span>?
      </>
    ),
    para: "Join our team of dedicated security professionals and make a difference in protecting people and property.",
    ctaText: "Get Started",
    ctaHref: "/contact",
    img: "/images/carousel-2.jpg",
  };

  return (
    <>
      <HalfBanner
        bgImage="/images/career-banner.png"
        subheading="careers"
        heading="Join Our Security Force"
        text="Build your future with Star Security Services, where training, growth, and opportunities await dedicated professionals who want to make a difference."
      />

      <BenefitsSection benefits={benefitsData} topHeading="Why Work With Us?" />

      <BenefitsFeatureSection />

      <JobSection
        jobs={jobOpenings}
        regions={regions}
        topHeading={"Current Openings"}
      />

      <WorkProcess steps={stepsData} topHeading="Application Process" />

      <TeamSection />

      <ParallaxSection sectionData={sectionData} />

      <Testimonial />

      <JointSection />
    </>
  );
}
