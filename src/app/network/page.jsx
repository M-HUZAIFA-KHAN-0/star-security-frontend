"use client";

import BranchSection from "@/components/branches/branches";
import TeamSection from "@/components/teamSection/teamSection";
import Testimonial from "@/components/testimonial/testimonial";
import JointSection from "@/components/joinSection/joinSection";
import HalfBanner from "@/components/halfBanner/halfBanner";
import CoverageAreasSection from "@/components/coverageAreasSection/coverageAreasSection";


export default function NetworkPage() {

  
  
  
    // const servicesCardData = [
    //   {
    //     img: "/images/hero-1.jpg",
    //     title: "Secured Cash-in-Transit",
    //     desc: "Safe and reliable armored transport of cash and valuables, ensuring complete protection from collection to delivery.",
    //     link: "/private-security",
    //   },
    //   {
    //     img: "/images/hero-1.jpg",
    //     title: "ATM Replenishment Services",
    //     desc: "Timely and accurate ATM cash loading with strict compliance, so your customers never face downtime.",
    //     link: "/transport-security",
    //   },
    //   {
    //     img: "/images/hero-1.jpg",
    //     title: "Vaulting & Processing Solutions",
    //     desc: "State-of-the-art vaults and professional cash handling teams to count, verify, and process funds securely.",
    //     link: "/home-security",
    //   },
    //   {
    //     img: "/images/hero-1.jpg",
    //     title: "Multi-Point Cash Collection",
    //     desc: "Flexible pickup solutions from multiple locations with end-to-end tracking for full accountability.",
    //     link: "/private-security",
    //   },
    //   {
    //     img: "/images/hero-1.jpg",
    //     title: "Cash Protection Services",
    //     desc: "Dedicated staff to manage daily cash handling and safeguard financial transactions at your premises.",
    //     link: "/transport-security",
    //   },
    //   {
    //     img: "/images/hero-1.jpg",
    //     title: "Valuables & Asset Transfer",
    //     desc: "Secure movement of high-value items like jewelry, documents, or precious metals with maximum confidentiality.",
    //     link: "/home-security",
    //   },
    // ];
  

    const branchSectionDataOne = {
    heading: "North Region",
    para: "Our North Region network reflects Star Security’s commitment to delivering seamless services and dependable support to our valued clients. With strategically placed branches, we provide convenient access, personalized assistance, and timely solutions for diverse needs. Our dedicated teams uphold professionalism, consistency, and care, ensuring trusted service across the region. Star Security makes it easier for businesses and individuals to connect locally with reliable protection and support.",
    img: "/images/t1.jpg",
    points: [
      {
        "branchName": "Lahore Branch (North Region)",
        "address": "12-C, Gulberg III, Lahore, Pakistan",
        "phone": "+92 42 1234567",
        "email": "lahore.north@star.com"
      },
      {
        "branchName": "Karachi Branch (South Region)",
        "address": "45-B, Shahrah-e-Faisal, Karachi, Pakistan",
        "phone": "+92 21 7654321",
        "email": "karachi.south@star.com"
      },
      {
        "branchName": "Islamabad Branch (East Region)",
        "address": "22-D, Blue Area, Islamabad, Pakistan",
        "phone": "+92 51 2468100",
        "email": "islamabad.east@star.com"
      },
      {
        "branchName": "Quetta Branch (West Region)",
        "address": "78-A, Jinnah Road, Quetta, Pakistan",
        "phone": "+92 81 3344556",
        "email": "quetta.west@star.com"
      }
    ]
};


const branchSectionDataTwo = {
heading: "North Region",
para: "Our North Region network reflects Star Security’s commitment to delivering seamless services and dependable support to our valued clients. With strategically placed branches, we provide convenient access, personalized assistance, and timely solutions for diverse needs. Our dedicated teams uphold professionalism, consistency, and care, ensuring trusted service across the region. Star Security makes it easier for businesses and individuals to connect locally with reliable protection and support.",
img: "/images/t1.jpg",
points: [
  {
    "branchName": "Lahore Branch (North Region)",
    "address": "12-C, Gulberg III, Lahore, Pakistan",
    "phone": "+92 42 1234567",
    "email": "lahore.north@star.com"
  },
  {
    "branchName": "Karachi Branch (South Region)",
    "address": "45-B, Shahrah-e-Faisal, Karachi, Pakistan",
    "phone": "+92 21 7654321",
    "email": "karachi.south@star.com"
  },
  {
    "branchName": "Islamabad Branch (East Region)",
    "address": "22-D, Blue Area, Islamabad, Pakistan",
    "phone": "+92 51 2468100",
    "email": "islamabad.east@star.com"
  },
  {
    "branchName": "Quetta Branch (West Region)",
    "address": "78-A, Jinnah Road, Quetta, Pakistan",
    "phone": "+92 81 3344556",
    "email": "quetta.west@star.com"
  }
]
};
  return (
    <>
      <HalfBanner 
        bgImage="/images/about-global.jpeg"
        subheading="our network"
        heading="Expanding Across Regions"
        text="With a strong presence in the North, South, East, and West, our branch network ensures seamless coverage and dedicated support wherever our clients need us."
      />
      <BranchSection />
      <CoverageAreasSection />
      {/* <AchievementSubBanner /> */}
      <TeamSection />
      <Testimonial />
      <JointSection />
      {/* <ServicesCards  data={servicesCardData}/> */}
      {/* <BranchSection branchSectionData = {branchSectionDataOne} isImgFirst={true} /> */}
      {/* <BranchSection branchSectionData = {branchSectionDataTwo} /> */}
    </>
  );
}


