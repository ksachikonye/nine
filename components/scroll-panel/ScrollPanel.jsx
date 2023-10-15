'use client'
import React, { useEffect } from "react";
import ScrollOut from "scroll-out";

import { Scrolling } from "./Scrolling";

const data = [
  {
    brand: "Hexa | Custom",
    description: "A platform bringing brands to life",
    imgUrl: "/images/hexa.jpeg"
  },
  {
    brand: "Coachella",
    description: "A website worthy of an iconic event",
    imgUrl: "/images/coachella.jpeg"
  },
  {
    brand: "Ruffwear",
    description: "An adventurous approach to eCommerce",
    imgUrl: "/images/ruffwear.jpeg"
  }
];

export default function ScrollPanel() {
  useEffect(() => {
    let s = ScrollOut({
      threshold: 0,
      cssProps: {
        visibleY: true,
        viewportY: true
      }
    });
    return () => {
      console.log("hi");
      s.teardown();
    };
  }, []);

  return (
    <div className="h-full w-full m-0 p-0 relative box-border antialised">
      {data.map((section, i) => (
        <Scrolling key={i} url={section.url} text={section.txt} header={section.header} subheader={section.subheader} />
      ))}
    </div>
  );
}