"use client";

// import FeatureSection from "@/components/featureSection/featureSection";
import Banner from "@/components/mainBanner/mainBanner";
import Services from "@/components/services/services";
import ServicesCards from "@/components/servicesCard/servicesCard";
import SplitSection from "@/components/splitSection/splitSection";
import WorkProcess from "@/components/workProcess/workProcess";


export default function BusinessPage() {

  const servicesData = [
    {
      id: 1,
      title: "Professional Female Guards",
      desc: "Trained female guards ensuring safety and comfort in sensitive areas.",
      icon: "icon/police.png",
    },
    {
      id: 2,
      title: "Bank / ATM Security",
      desc: "Round-the-clock protection for banks, ATMs, and financial institutions.",
      icon: "icon/doorman.png",
    },
    {
      id: 3,
      title: "Emergency Action Squad",
      desc: "Quick reaction teams equipped to handle urgent threats, emergencies, and crises.",
      icon: "icon/siren.png",
    },
    {
      id: 4,
      title: "Specialized Fire Squad",
      desc: "Specialized fire response teams trained to manage emergencies swiftly and safely.",
      icon: "icon/council.png",
    },
    {
      id: 5,
      title: "Trained Security Dogs",
      desc: "Highly trained K9 units for detection, tracking, patrolling, and enhanced security.",
      icon: "icon/dog.png",
    },
    {
      id: 6,
      title: "Comprehensive Security Guards",
      desc: "Professional guards deployed to secure offices, malls, and industries.",
      icon: "icon/team.png",
    },
    {
      id: 7,
      title: "Professional Bodyguard",
      desc: "Dedicated personal protection for executives, VIPs, high-profile events, and individuals.",
      icon: "icon/security.png",
    },
  ];


  const SplitSectionDataFirst = {
    heading: "Manned Guarding",
    para:
    <>
      Star Security Service provides a wide range of manned guarding solutions for industries, banks, retail outlets, residential colonies, hotels, and institutions. With professionalism and reliability at the core, Star Security deploys trained personnel to safeguard people, property, and assets across all environments. From static guards at offices, malls, hospitals, and schools to specialized teams like fire squads, dog squads, and bodyguards, we ensure complete protection and peace of mind.
      <br /><br />
      Alongside traditional guarding, Star Security Service delivers specialized roles that strengthen security frameworks, including access control, reception security, patrolling, event management, VIP protection, and quick reaction units for emergencies. We also provide armed guards for high-risk zones, lady guards for sensitive premises, and operators skilled in CCTV and alarm monitoring.
      <br /><br />
      Our sector-specific solutions cover 24/7 bank and ATM security, parking management, and construction site protection, while in hospitality, our guards combine security expertise with guest-friendly service. With this diverse portfolio, Star Security stands as a trusted partner for professional and adaptable security solutions.
    </>,
    img: "/images/t1.jpg",
  };

  const servicesCardData = [
    {
      img: "/images/hero-1.jpg",
      title: "Secured Cash-in-Transit",
      desc: "Safe and reliable armored transport of cash and valuables, ensuring complete protection from collection to delivery.",
      link: "/private-security",
    },
    {
      img: "/images/hero-1.jpg",
      title: "ATM Replenishment Services",
      desc: "Timely and accurate ATM cash loading with strict compliance, so your customers never face downtime.",
      link: "/transport-security",
    },
    {
      img: "/images/hero-1.jpg",
      title: "Vaulting & Processing Solutions",
      desc: "State-of-the-art vaults and professional cash handling teams to count, verify, and process funds securely.",
      link: "/home-security",
    },
    {
      img: "/images/hero-1.jpg",
      title: "Multi-Point Cash Collection",
      desc: "Flexible pickup solutions from multiple locations with end-to-end tracking for full accountability.",
      link: "/private-security",
    },
    {
      img: "/images/hero-1.jpg",
      title: "Cash Protection Services",
      desc: "Dedicated staff to manage daily cash handling and safeguard financial transactions at your premises.",
      link: "/transport-security",
    },
    {
      img: "/images/hero-1.jpg",
      title: "Valuables & Asset Transfer",
      desc: "Secure movement of high-value items like jewelry, documents, or precious metals with maximum confidentiality.",
      link: "/home-security",
    },
  ];
  const SplitSectionDataSecond = {
    heading: "Cash Services",
    para:
    <>
      Star Security Service offers a specialized range of Cash Services designed to ensure the secure handling, transfer, and management of money and valuables for businesses, banks, retail outlets, and institutions. With advanced systems, armored transportation, and trained professionals, we safeguard every stage of the cash cycle, providing our clients with reliability, transparency, and complete peace of mind.
      <br /><br />
      Our solutions cover the secure transfer of cash and valuables, ATM replenishment with 24/7 support, and high-security vaulting and processing where funds are counted, verified, and prepared with full compliance standards. Through multi-point cash collection, we streamline operations for businesses handling transactions across multiple locations, ensuring efficiency and accountability. In addition, our caretaker services provide on-site support for daily cash handling, giving organizations an added layer of security and convenience.
      <br /><br />
      By combining technology, expertise, and strict protocols, Star Security Service stands as a trusted partner for financial security. Whether it is safeguarding cash-in-transit, managing ATM operations, or offering end-to-end cash management solutions, our Cash Services division is committed to delivering professional, adaptable, and secure services tailored to client needs.
    </>,
    img: "/images/t2.jpg",
  }






  return (

    <>
      <Banner
        bgImage="/images/hero-1.jpg"
        subheading="We Provide The Best"
        heading="Security Service"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cta="GET APPOINTMENT"
      />
      <SplitSection SplitSectionData = {SplitSectionDataFirst}/>
      <Services servicesData = {servicesData}  service_BG = "true" topHeading = "Our Manned Guarding Services"/>
      <SplitSection SplitSectionData = {SplitSectionDataSecond} isImgFirst = "true"/>
      <ServicesCards data={servicesCardData} />
      <WorkProcess />
    </>
  );
}


