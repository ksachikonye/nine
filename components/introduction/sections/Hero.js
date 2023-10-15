'use client'
import React, { useState, useEffect, useRef } from 'react';
import gsap, { Elastic, Expo, Power1 } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { motion } from "framer-motion";
import Pugachev from "./Pugachev";
import {FighterJet} from './FighterJet';

gsap.registerPlugin(ScrollTrigger);

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
    return (<div className="absolute inset-0 box-border  h-[500vh]">
            <video className="h-full w-full object-cover fixed  " autoPlay={true} playsInline={true} loop muted preload="auto">
                <source src="/assets/videos/introduction_video.mp4" type="video/mp4"/>
            </video>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
        </div>);
};

const Hero = () => {
    const variants = {
        hidden: { opacity: 0 },
        enter: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            staggerChildren: 0.5,
            ease: "easeInOut",
            duration: 2
          }
        },
        exit: {
          opacity: 0,
          x: 0,
          y: -100,
          transition: {
            staggerChildren: 0.5
          }
        }
      };
      const itemLeft = {
        hidden: { opacity: 0, x: "-100%" },
        enter: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            staggerChildren: 0.5,
            ease: "easeInOut",
            duration: 2
          }
        },
        exit: { opacity: 0, x: "-100%" }
      };
      const itemRight = {
        hidden: { opacity: 0, x: "100%" },
        enter: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            staggerChildren: 0.5,
            ease: "easeInOut",
            duration: 2
          }
        },
        exit: { opacity: 0, x: "100%" }
      };
      const itemBottom = {
        hidden: { opacity: 0, y: 200, x: "-50%" },
        enter: {
          opacity: 1,
          x: "-50%",
          y: 0,
          transition: {
            staggerChildren: 0.5,
            ease: "easeInOut",
            duration: 2
          }
        },
        exit: { opacity: 0, y: 200, x: "-50%" }
      };
    

    return (<motion.section  variants={variants} className="relative z-10 flex h-[100vh] w-full justify-center antialiased" id="home" initial="initial" animate="animate">
        
        <section data-scroll-section>
          <div className="relative w-full lg:grid-cols-8 bg-dark text-light h-screen grid grid-cols-6 lg:gap-6 antialiased">


            <motion.div
              variants={itemLeft}
              className="z-10 hero_text leading lg:grid-cols-8 md:text-left text-center space-y-4 col-span-full lg:col-start-2 flex flex-col items-center justify-center lg:col-end-6 lg:h-screen h-full"
            >
              <div className="md:text-5xl text-3xl font-bold uppercase">
              Speculum de{" "}
                <span className="md:text-7xl text-5xl text-stroke">
                LABITULIS
                </span>{" "}
                <span className="md:text-7xl text-5xl text-stroke">SURREXISSENT</span>{" "}
                Magnificentiae
              </div>
              <div className="inline-block">
              Chigutiro{" "}
                <span
                  className="inline-block text-center"
                  style={{ width: "76px", minWidth: "76px" }}
                >
             
                </span>{" "}
                In medio Ecclesiae aperuit os ejus * Et implevit eum Deus 
                  spiritu sapientiae et intellectus * Jucunditatem et
                  exsultationem thesaurizavit super eum. De secretis
                  Operibus artis et naturae Et de nullitate magiea.
              </div>
            </motion.div>





            <motion.div
              variants={itemRight}
              className="absolute  lg:h-screen top-32 lg:top-0 w-full lg:w-6/12 col-span-full lg:right-12 h-full"
            >
              <FighterJet  />
            </motion.div>


            <motion.div
              variants={itemBottom}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 inline-flex flex-col space-y-1 items-center justify-end  h-12"
            >
              <p className="text-sm font-medium tracking-widest leading-snug text-center text-gray-100 uppercase">
                Reverse the bullet
              </p>
            
            </motion.div>


          </div>
        </section>
     
            <HeroBackground />
            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div className={`relative flex flex-col items-center justify-center  pointer-events-none`}>
                    <Pugachev width={240} height={80}/>
                </div>
            </div>
        </motion.section>);
};
export default Hero;