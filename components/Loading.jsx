'use client'
import React, { useRef} from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect.js";



const Loading = () => {
    const main = useRef()
    const progression = useRef()
    const loadRef = useRef()
    const circle1 = useRef();
    const circle2 = useRef();
    const circle3 = useRef();
    const circle4 = useRef();
    const circle5 = useRef();
    const panel1 = useRef();
    const panel2 = useRef();

 
  gsap.registerPlugin(ScrollTrigger)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {

        ScrollSmoother.create({
            smooth: 5, // seconds it takes to "catch up" to native scroll position
            effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
            normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
            ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
            preventDefault: true
          
          });

        const master = gsap.timeline();
    
        master.add(counter(loader().totalDuration()));
       

        function counter(duration) {
            //
            return gsap.to(progression.current, {
                innerText: 100,
                snap: 'innerText', // snaps to nearest integer
                duration,
                ease: 'power4.out',
            });
        }
    
        function loader() {
            const tlLoader = gsap
                .timeline({
                    onComplete: () => {
                        gsap.set(loadRef.current, { visibility: 'hidden' });
                    },
                })
            // circle moon translate up/right with pause
            tlLoader.to(circle1.current, {
                xPercent: 20,
                yPercent: -20,
                duration: 1,
                ease: 'power4.out',
            })
            tlLoader.to(circle1.current, {
                xPercent: 100,
                yPercent: -100,
                duration: 1,
                ease: 'power4.out',
            })
            // animate orange panel from bottom
            tlLoader.to(
                panel1.current,
                {
                    height: '100%',
                    duration: 1,
                    ease: 'power4.out',
                },
                '<+0.1' // 0.1 seconds after the start of the previous animation
            )
            // fill circle with blue, with pause at 50%
            tlLoader.to(
                circle2.current,
                {
                    height: '50%',
                    duration: 1,
                    ease: 'power4.out',
                },
                '<' // starts at same time as the start of the previous animation
            )
            tlLoader.to(circle2.current, {
                height: '100%',
                duration: 1,
                ease: 'power4.out',
            })
            // animate blue panel from bottom just as circle is filled with blue
            tlLoader.to(
                panel2.current,
                {
                    height: '100%',
                    duration: 1,
                    ease: 'power2.out',
                },
                '>-0.7' // start 0.7 second before the end of the previous animation
            )
            // fill circle with yellow just as its blue fill finsihed and blue panel starts
            tlLoader.to(
                circle3.current,
                {
                    height: '100%',
                    duration: 1,
                    ease: 'power4.out',
                },
                '<'
            )
            // expanding circles
            // "breathe in" with '.circle-mask' which has the clip-path applied
            tlLoader.to(circle4.current, {
                scale: 0.9,
            })
            // scale up '.circle-mask' (clip path)
            tlLoader.to(circle4.current, {
                scale: 3,
                duration: 1,
            })
            // scale up final orange circle, which also overlays our loading percent number
            tlLoader.to(
                circle5.current,
                {
                    scale: 2, // sacling to size of circle-mask, which is also scaling.
                    duration: 1.5,
                },
                '<'
            );

            return tlLoader;
        }




    }, main);
    return () => ctx.revert();
}, [])


  return (
    <div>
    <section ref={main}>
        <div className="fixed z-[1] flex overflow-hidden w-full min-h-screen flex-col justify-center items-center" ref={loadRef}>
            <div className="relative flex w-full min-h-screen justify-center items-center bg-[#f6ca73]">
                <div ref={panel1} className="absolute h-[0%] bg-[#f2a849] top-auto bottom-[0%] inset-x-[0%]"></div>
                <div ref={panel2} className="absolute h-[0%] bg-[#3b06e8] top-auto bottom-[0%] inset-x-[0%]"></div>
                <div ref={circle4} className="relative w-[70vmin] h-[70vmin]">
                    <div ref={circle5} className="relative w-full h-full bg-[#f2a849] rounded-[50vw]"></div>
                    <div ref={circle3} className="absolute z-[1] w-full h-[0%] bg-[#f6ca73] top-auto bottom-[0%] inset-x-[0%]"></div>
                    <div ref={circle2} className="absolute w-full h-[0%] bg-[#3b06e8] top-[0%] bottom-auto inset-x-[0%]"></div>
                    <div ref={circle1} className="absolute bg-[#f6ca73] rounded-[50vw] inset-[0%]"></div>
                </div>
            </div>
            <div className="absolute z-[2] flex items-baseline left-[5%] right-auto top-auto bottom-[5%]">
                <div ref={progression} className="z-[9] text-[20vw] leading-none">0</div>
                <div className="z-[9] text-[20vw] leading-none">%</div>
            </div>
            <div ref={circle5} className="absolute z-[3] w-[100vmin] h-[100vmin] bg-[#f2a849] mx-auto rounded-[50vw] scale-0 inset-[0%]"></div>
        </div>
        </section>

          </div>
  );
};


export default  Loading




