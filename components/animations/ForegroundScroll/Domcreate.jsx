'use client'
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap-trial/dist/gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Domcreate() {
  const main = useRef();
  const sq1 = useRef();
  const sq2 = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // create the smooth scroller FIRST!
      const smoother = ScrollSmoother.create({
        smooth: 1, // seconds it takes to "catch up" to native scroll position
        effects: true,
        wrapper: "#wrapper",
        content: "#content"
        // look for data-speed and data-lag attributes on elements and animate accordingly
      });

      gsap.to(sq1.current, {
        scrollTrigger: {
          trigger: "#first",
          start: "top top",
          end: "bottom top",
          scrub: 0.2
        },
        rotation: 360,
        ease: "linear",
        immediateRender: false
      });

      gsap.to(sq2.current, {
        scrollTrigger: {
          trigger: "#second",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 0.2
        },
        rotation: 360,
        ease: "linear",
        immediateRender: false
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div id="wrapper" ref={main}>
        <div id="content">
          <section id="first">
            <div className="element" ref={sq1}></div>
          </section>
          <section id="second">
            <div className="element" ref={sq2}></div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Domcreate;
