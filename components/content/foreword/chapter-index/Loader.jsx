'use client'
import Lenis from '@studio-freight/lenis'
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect,  useRef, useLayoutEffect} from 'react'
import { gsap, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';


const Bosch = ({ width = 240, height = 80 }) => {
    return (<Image className={`w-${width} h-${height}`} src="/assets/svg/Bosch-signature.svg" alt="Logo" width={width} height={height}/>);
};

const HeroBackground = () => {
    let vidRef = useRef();

  useEffect(() => {
    let tl;
    const ctx = gsap.context(() => {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'video',
          start: 'top top',
          end: 'bottom+=500% bottom',
          scrub: true,
          markers: true,
        },
      });
    });
    vidRef.onloadedmetadata = function () {
      tl.fromTo(
        vidRef,
        {
          currentTime: 0,
          ease: Expo.easeIn,
        },
        {
          currentTime: vidRef.duration,
          ease: Expo.easeOut,
        }
      );
    };
    function isTouchDevice() {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
    if (isTouchDevice()) {
      vidRef.play();
      vidRef.pause();
    }
    return () => ctx.revert();
  }, []);
    return (<div className="absolute inset-0">
            <video className="h-full w-full object-cover"  webkit-playsinline="true" autoPlay={true}  playsInline={true} loop muted preload="auto"  ref={(el) => (vidRef = el)} >
                <source src="https://raw.githubusercontent.com/ksachikonye/hzevo-server/main/media/mp4/UsainBoltvUsainBolt.mp4" type="video/mp4"/>
            </video>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
        </div>);
};



export function Loader() {
  const content = useRef()
  const wrapper = useRef()
  const fromLeftRef = useRef()
  const loaderRef = useRef()
  const fromLeftTileRef = useRef()
  const bannerRef = useRef();
  const bannerImageRef = useRef();
  const loadingScreenRef = useRef()

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
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


        ScrollSmoother.create({
          smooth: 5, // seconds it takes to "catch up" to native scroll position
          effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
          normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
          ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
          preventDefault: true
        
        });
        const tl = gsap.timeline();

        const welcomeScreen = gsap.timeline({
          paused: "true",
        });
      
        
        tl.from(loaderRef.current, {
          duration: 0.8,
          opacity: 0,
          y: 10,
        });
      
        let tl1 = gsap.timeline({ ease: "power4.inOut", paused: "true" });

        tl1.set(fromLeftRef.current, { pointerEvents: "none" });
        tl1.to(fromLeftTileRef.current, {
          duration: 1.6,
          width: "100%",
          left: "0%",

          // stagger: 0.05,
        });
        tl1.to(fromLeftTileRef.current, {
          duration: 1,
          width: "100%",
          left: "100%",
          stagger: 0.1,
        });
        tl1.set(fromLeftTileRef.current, { left: "0", width: "0" });
        tl1.set(fromLeftRef.current, { pointerEvents: "all" });

        let id,
          i = 0;
        function loader() {
          id = setInterval(frame, 20);
        }
        function frame() {
          if (i >= 100) {
            clearInterval(id);
            tl1.play();
            welcomeScreen.play();
          } else {
            i++;
            loaderRef.current.innerHTML = i + "%";
          }
        }
        window.onload = function () {
          loader();
        };

        welcomeScreen.to(loadingScreenRef.current, {
          duration: 0.8,
          y: -2000,
          ease: "Power4.out",
          delay: 0.4,
        });
     
        
        welcomeScreen.from(
          bannerRef.current,
          {
            y: 500,
            duration: 0.9,
            stagger: {
              amount: 0.2,
            },
          },
          "-=.2"
        );
        


        

        }, main)
        return () => ctx.revert()

    },[])
            
return (
    <>
    <div ref={wrapper}>
           <div ref={content} >

           <div className="absolute z-10 w-full h-screen bg-[#222222] text-[white] overflow-hidden" ref={loadingScreenRef}>
             <div className="absolute flex w-full h-screen items-center justify-center">
               <div className="text-[250px] font-bold" ref={loaderRef}></div>
             </div>
           </div>

           <div className="fixed w-full h-full flex z-[999999] pointer-events-none inset-x-0 flex-col" ref={fromLeftRef}>
             <span className="h-full w-[0%]" ref={fromLeftTileRef}></span>
             <span className="h-full w-[0%]" ref={fromLeftTileRef}></span>
             <span className="h-full w-[0%]" ref={fromLeftTileRef}></span>
           </div>
             <section className="overflow-x-hidden cursor-none m-0 bg-[#222222]">
                <motion.section className="relative z-10 flex h-[100vh] w-full justify-center overflow-x-hidden cursor-none m-0 bg-[#222222]" id="home" initial="initial" animate="animate">
            <HeroBackground />
            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div className={`relative flex flex-col items-center justify-center  pointer-events-none`}>
                    <Bosch width={751.13153} height={142.61487} ref={bannerRef}/>
                </div>
            </div>
        </motion.section>

     


                        
                       
                         </section>
             

         </div>
     </div>


          </>
)

}