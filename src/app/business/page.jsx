"use client";

import Services from "@/components/services/services";
import SplitSection from "@/components/splitSection/splitSection";
import TeamSection from "@/components/teamSection/teamSection";
import Testimonial from "@/components/testimonial/testimonial";
import WorkProcess from "@/components/workProcess/workProcess";
import JointSection from "@/components/joinSection/joinSection";
import HalfBanner from "@/components/halfBanner/halfBanner";

export default function BusinessPage() {
  // ******* First ********
  const SplitSectionDataFirst = {
    heading: "Manned Guarding",
    para: (
      <>
        Star Security Service provides a wide range of manned guarding
        solutions for industries, banks, retail outlets, residential colonies,
        hotels, and institutions. With professionalism and reliability at the
        core, Star Security deploys trained personnel to safeguard people,
        property, and assets across all environments. From static guards at
        offices, malls, hospitals, and schools to specialized teams like fire
        squads, dog squads, and bodyguards, we ensure complete protection and
        peace of mind.
        <br />
        <br />
        Alongside traditional guarding, Star Security Service delivers
        specialized roles that strengthen security frameworks, including access
        control, reception security, patrolling, event management, VIP
        protection, and quick reaction units for emergencies. We also provide
        armed guards for high-risk zones, lady guards for sensitive premises,
        and operators skilled in CCTV and alarm monitoring.
        <br />
        <br />
        Our sector-specific solutions cover 24/7 bank and ATM security, parking
        management, and construction site protection, while in hospitality, our
        guards combine security expertise with guest-friendly service. With
        this diverse portfolio, Star Security stands as a trusted partner for
        professional and adaptable security solutions.
      </>
    ),
    img: "/images/manned-guarding.jpg",
  };

  const servicesDataFirst = [
    {
      id: 1,
      title: "Professional Female Guards",
      desc: "Trained female guards ensuring safety and comfort in sensitive areas.",
      icon: "icon/police.png",
    },
    {
      id: 2,
      title: "24/7 Bank and ATM Protection",
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

  // ******* Second ********
  const SplitSectionDataSecond = {
    heading: "Electronic Security Systems",
    para: (
      <>
        Star Security Service’s Electronic Security Systems division delivers
        advanced technology-driven solutions that protect businesses,
        institutions, and residential facilities with precision and reliability.
        Working in close partnership with reputed system integrators and
        installers, we specialize in the design, installation, and maintenance
        of a wide range of electronic security infrastructure tailored to modern
        safety needs.
        <br />
        <br />
        Our portfolio covers access control systems for regulated entry and
        exit, CCTV surveillance for continuous monitoring, and fire alarm and
        suppression systems to prevent and manage fire hazards. We also provide
        intruder and burglar alarms to guard against unauthorized access, along
        with perimeter protection systems that secure boundaries and critical
        zones. Each solution is backed by robust technology, expert
        implementation, and consistent maintenance to ensure maximum uptime and
        reliability.
        <br />
        <br />
        By combining advanced equipment, skilled professionals, and strong
        customer partnerships, Star Security Service ensures that clients
        receive end-to-end electronic security solutions that are both scalable
        and adaptable. Whether it’s enhancing workplace safety, safeguarding
        financial institutions, or protecting residential communities, our
        Electronic Security Systems division stands as a trusted partner in
        building safer and smarter environments.
      </>
    ),
    img: "/images/electronic-security.jpg",
  };

  const servicesDataSecond = [
    {
      id: 1,
      title: "Access Control Systems",
      desc: "Restricts and manages entry/exit with smart cards, biometrics, or keypads for enhanced security.",
      icon: "icon/fingerprint.png",
    },
    {
      id: 2,
      title: "Surveillance & Monitoring Solutions",
      desc: "24/7 monitoring and recording solutions for real-time visibility and incident review.",
      icon: "icon/cctv-camera.png",
    },
    {
      id: 3,
      title: "Smart Fire Alarm Solutions",
      desc: "Early detection and alert systems to warn occupants and minimize fire risks.",
      icon: "icon/fire-detector.png",
    },
    {
      id: 4,
      title: "Fire Suppression Systems",
      desc: "Automated solutions like sprinklers or gas-based systems to control and extinguish fires.",
      icon: "icon/extinguiser.png",
    },
    {
      id: 5,
      title: "Intruder & Burglar Alarms",
      desc: "Sensors and alarms that instantly detect unauthorized access or break-ins.",
      icon: "icon/thief.png",
    },
    {
      id: 6,
      title: "Perimeter Protection Systems",
      desc: "Secures the outer boundaries of facilities with fences, sensors, and surveillance technology.",
      icon: "icon/protection.png",
    },
    {
      id: 7,
      title: "Remote Monitoring Services",
      desc: "24/7 off-site monitoring by trained security professionals to reduce risks.",
      icon: "icon/tv-monitor.png",
    },
    {
      id: 8,
      title: "Response Communication",
      desc: "Public address (PA) and mass notification systems for crisis management.",
      icon: "icon/emergency-response.png",
    },
  ];

  // ******* Third ********
  const SplitSectionDataThird = {
    heading: "Cash Services",
    para: (
      <>
        Star Security Service offers a specialized range of Cash Services
        designed to ensure the secure handling, transfer, and management of
        money and valuables for businesses, banks, retail outlets, and
        institutions. With advanced systems, armored transportation, and trained
        professionals, we safeguard every stage of the cash cycle, providing our
        clients with reliability, transparency, and complete peace of mind.
        <br />
        <br />
        Our solutions cover the secure transfer of cash and valuables, ATM
        replenishment with 24/7 support, and high-security vaulting and
        processing where funds are counted, verified, and prepared with full
        compliance standards. Through multi-point cash collection, we streamline
        operations for businesses handling transactions across multiple
        locations, ensuring efficiency and accountability. In addition, our
        caretaker services provide on-site support for daily cash handling,
        giving organizations an added layer of security and convenience.
        <br />
        <br />
        By combining technology, expertise, and strict protocols, Star Security
        Service stands as a trusted partner for financial security. Whether it
        is safeguarding cash-in-transit, managing ATM operations, or offering
        end-to-end cash management solutions, our Cash Services division is
        committed to delivering professional, adaptable, and secure services
        tailored to client needs.
      </>
    ),
    img: "/images/cash-services.jpg",
  };

  const servicesDataThird = [
    {
      id: 1,
      title: "Secured Cash-in-Transit",
      desc: "Safe and reliable armored transport of cash and valuables, ensuring complete protection from collection to delivery.",
      icon: "icon/money-truck.png",
    },
    {
      id: 2,
      title: "ATM Replenishment Services",
      desc: "Timely and accurate ATM cash loading with strict compliance, so your customers never face downtime.",
      icon: "icon/web-positioning.png",
    },
    {
      id: 3,
      title: "Secure Vaulting & Processing",
      desc: "State-of-the-art vaults and professional cash handling teams to count, verify, and process funds securely.",
      icon: "icon/flow-chart.png",
    },
    {
      id: 4,
      title: "Multi-Point Cash Collection",
      desc: "Flexible pickup solutions from multiple locations with end-to-end tracking for full accountability.",
      icon: "icon/income.png",
    },
    {
      id: 5,
      title: "Cash Protection Services",
      desc: "Dedicated staff to manage daily cash handling and safeguard financial transactions at your premises.",
      icon: "icon/safebox.png",
    },
    {
      id: 6,
      title: "Valuables & Asset Transfer",
      desc: "Secure movement of high-value items like jewelry, documents, or precious metals with maximum confidentiality.",
      icon: "icon/computer.png",
    },
  ];

  // ******* Fourth ********
  const SplitSectionDataFourth = {
    heading: "Recruitment & Training Solutions",
    para: (
      <>
        Star Security Service’s Recruitment & Training division is dedicated to
        sourcing, preparing, and delivering skilled manpower tailored to the
        specific needs of each client and division. We follow a systematic
        process to identify the right candidates, ensuring they meet both
        technical and behavioral standards required in the security industry.
        <br />
        <br />
        Our specialized training programs focus on discipline, professional
        conduct, and job-specific skills, preparing recruits to handle real-world
        challenges with confidence. From security officers and control room
        operators to specialized roles in cash management, hospitality, and
        electronic security, we ensure every individual is equipped with the
        knowledge and capability to perform effectively.
        <br />
        <br />
        By combining rigorous recruitment standards with comprehensive training,
        Star Security Service provides clients with reliable, well-prepared
        manpower. This approach not only strengthens operational efficiency but
        also guarantees that organizations receive personnel who are
        trustworthy, skilled, and aligned with their security and service
        requirements.
      </>
    ),
    img: "/images/training-solutions.jpg",
  };

  // ******* Process ********
  const stepsData = [
    {
      id: "01",
      title: "Recruitment",
      desc: "Identifying and attracting the right candidates through structured hiring channels and partnerships.",
      icon: "fa-solid fa-user-plus",
    },
    {
      id: "02",
      title: "Screening",
      desc: "Conducting background checks and assessments to ensure reliability, skill, and trustworthiness.",
      icon: "fa-solid fa-user-check",
    },
    {
      id: "03",
      title: "Training",
      desc: "Providing classroom sessions and on-site practical training to prepare recruits for real-world roles.",
      icon: "fa-solid fa-chalkboard-teacher",
    },
    {
      id: "04",
      title: "Deployment",
      desc: "Assigning trained staff to relevant divisions for effective and professional service delivery.",
      icon: "fa-solid fa-user-tie",
    },
  ];

  return (
    <>
      <HalfBanner
        bgImage="/images/business-banner.jpeg"
        subheading="our business"
        heading="Comprehensive Security Solutions"
        text="From manned guarding and cash services to advanced electronic security systems, we deliver tailored solutions that ensure safety, trust, and peace of mind for every client."
      />

      {/* Manned Guarding */}
      <section id="manned-guarding">
        <SplitSection SplitSectionData={SplitSectionDataFirst} />
        <Services
          servicesData={servicesDataFirst}
          service_BG="true"
          topHeading="Our Manned Guarding Services"
        />
      </section>

      {/* Electronic Security */}
      <section id="electronic-security">
        <SplitSection SplitSectionData={SplitSectionDataSecond} isImgFirst="true" />
        <Services
          servicesData={servicesDataSecond}
          service_BG="true"
          topHeading="Our Electronic Security Services"
        />
      </section>

      {/* Cash Services */}
      <section id="cash-services">
        <SplitSection SplitSectionData={SplitSectionDataThird} />
        <Services
          servicesData={servicesDataThird}
          service_BG="true"
          topHeading="Our Cash Services"
        />
      </section>

      {/* Recruitment & Training */}
      <section id="recruitment-training">
        <SplitSection SplitSectionData={SplitSectionDataFourth} isImgFirst="true" />
        <WorkProcess steps={stepsData} topHeading="Our Recruitment & Training Process" />
      </section>

      <TeamSection />
      <Testimonial />
      <JointSection />
    </>
  );
}
