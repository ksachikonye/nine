'use client'

import React, { useLayoutEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis'
import Image from 'next/image'
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Domcreate() {
  const wrapper = useRef();
  const content = useRef();
  const sectionOne = useRef();
  const glock = useRef();
  const slide = useRef();
  const sq1 = useRef();
  const barrel = useRef();
  const spring = useRef();
  const base = useRef();

  useEffect(() => {
        const lenis = new Lenis({
          wrapper: wrapper.current,
          content: content.current,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
          direction: 'vertical', // vertical, horizontal
          gestureDirection: 'vertical', // vertical, horizontal, both
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        })
    
        lenis.on('scroll', ({ scroll, progress }) => {
          state.top = scroll
          state.progress = progress
        })
        const effectSub = addEffect((time) => lenis.raf(time))
        return () => {
          effectSub()
          lenis.destroy()
        }
      }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // create the smooth scroller FIRST!
      ScrollSmoother.create({
        smooth: 5, // seconds it takes to "catch up" to native scroll position
          effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
          normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
          ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
          preventDefault: true
        // look for data-speed and data-lag attributes on elements and animate accordingly
      });

      gsap.to(sq1.current, {
        scrollTrigger: {
          trigger: sectionOne.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.2
        },
        rotation: 360,
        duration: 3.5,
        ease: "power3.out",
        immediateRender: false
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: glock.current,
          start: "center bottom",
          end: "top top",
          scrub: true
        }
      });
      tl.to(slide.current,  { yPercent: -40 }, 0);
      tl.to(barrel.current, { yPercent:  45 }, 0);
      tl.to(spring.current, { yPercent: 170 }, 0);
      tl.to(base.current,   { yPercent:  35 }, 0);


    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={wrapper} className='m-0 p-0 left-0 top-0 box-border'>
        <div  ref={content} >
          <section ref={sectionOne} className='h-screen w-screen flex flex-col justify-center items-center relative'>
            <div className="w-[16vh] h-[16vh] invisible" ref={sq1}></div>
            <section class="glock">
                <Image src="https://assets.codepen.io/16327/teardown-barrel.png" class="barrel piece" alt="barrel"/>
                <Image src="https://assets.codepen.io/16327/teardown-spring.png" class="spring piece" alt="spring"/>
                <Image src="https://assets.codepen.io/16327/teardown-slide.png" class="slide piece" alt="slide"/>
                <Image src="https://assets.codepen.io/16327/teardown-base.png" class="base piece" alt="base"/>
                </section>
           </section>
        </div>
      </div>
    </>
  );
}

export default Domcreate;
