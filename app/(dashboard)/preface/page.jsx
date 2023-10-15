"use client";

import * as THREE from 'three'
import dynamic from "next/dynamic";
import { addEffect, useFrame } from '@react-three/fiber'
import React, {useRef, useEffect, useLayoutEffect} from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { SplitText } from 'gsap/dist/SplitText';

import Hero from "@/components/introduction/sections/Hero";
import About from "@/components/introduction/sections/About";
import ImageGroup from "@/components/graphics/ScrollCurtains/ImageGroup";
import HomeBredCurbs from "@/components/partials/HomeBredCurbs";

const { damp } = THREE.MathUtils



const state = {
  top: 0,
  progress: 0,
}

const data = [
  {
    brand: "9.71s",
    description: "We are not stars, we just have a Chopper neatly packed in automobile",
    imgUrl: "https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/ben-johnson.jpg"
  }
];

const Sticky = () => {
    const content = useRef();
    const wrapper = useRef();
    const stickyTrackRef = useRef();
    const stickyElRef = useRef();

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    useEffect(() => {
      const lenis = new Lenis({
        wrapper: wrapper.current,
        content: content.current,
        duration: 1.8,
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
      
  
          const stickyTrack = gsap.utils.toArray(stickyTrackRef.current);
          const stickyEl = gsap.utils.toArray(stickyElRef.current);
        
          for (let i = 0; i < stickyEl.length; i++) {
            ScrollTrigger.create({
              markers: false,
              trigger: stickyEl[i],
              pin: stickyEl[i],
              start: () => `top top`,
              end: () => `bottom top`,
              pinSpacing: false
            });
          }
  
  
  
          }, main)
          return () => ctx.revert()
  
      },[])

      return (
        <div ref={wrapper} className='box-border'>
                    <div ref={content} >

                 

                                    <section className="max-w-screen-lg mx-auto my-0 px-[2em] py-[8em]">
                                        <article>
                                            <header className="z-[2] col-[1_/_4]" data-speed="1.25">
                                            <h2 >Våg å lytte,  våg å skifte mening</h2>
                                            <p>Jerky pastrami strip steak pork chuck. Biltong boudin burgdoggen shankle, short ribs short loin drumstick corned beef rump ribeye filet mignon pork chop. </p>
                                            </header>
                                            
                                            <div className="relative flex justify-center items-center col-[2_/_-1]">
                                            <div className="image-parent">
                                                <img className="block max-w-full h-[180%] object-cover opacity-60" data-speed="auto" src="https://images.unsplash.com/photo-1583430999185-4c19b0c9636a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" alt="" />
                                            </div>
                                            
                                    
                                            
                                        </div>
                                    </article>
                                </section>

                                     <section class="mb-32 text-[rgba(255,255,255,0.5)] leading-[1.7] m-0">
                                            <section className="stickyTrack" ref={stickyTrackRef}>
                                                  <div className="max-w-[900px] columns-2 gap-12">
                                                    <div className="overflow-hidden rounded-lg">
                                                      <img className="max-w-full h-auto object-cover scale-[130%]" data-speed="auto" src="https://itsmil.es/media/placeholder_11.jpg"/>
                                                 
                                                    </div>
                                                    <div  ref={stickyElRef}>
                                                      <h1 className='leading-[1.1] mt-0 mb-[0.4em] mx-0'>GSAP Pinning</h1>
                                                      <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptates quos ullam unde dicta quas, facere nobis architecto accusamus, delectus, veritatis adipisci perferendis repellat? Labore repellendus minima dolore illum obcaecati.</p>
                                                    </div>
                                                  </div>
                                          </section>
                                            <section className=" h-[calc(100vh_-_5px)]" ref={stickyTrackRef}>
                                                      <div className="max-w-[900px]">
                                                        <div className="stickyEl" ref={stickyElRef}>
                                                          <h1 className='leading-[1.1] mt-0 mb-[0.4em] mx-0'>GSAP Pinning</h1>
                                                          <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptates quos ullam unde dicta quas, facere nobis architecto accusamus, delectus, veritatis adipisci perferendis repellat? Labore repellendus minima dolore illum obcaecati.</p>
                                                        </div>
                                                      </div>
                                            </section>
                                            <section className="stickyTrack" ref={stickyTrackRef}>
                                                        <div className="max-w-[900px] columns-2 gap-12">
                                                            <div className="stickyEl" ref={stickyElRef}>
                                                            <div className="h-[16vw] w-[16vw] bg-[rgba(255,255,255,0.2)]"></div>
                                                            </div>
                                                            <div className="overflow-hidden rounded-lg">
                                                            <img className="max-w-full h-auto object-cover scale-[130%]" data-speed="auto" src="https://itsmil.es/media/placeholder_13.jpg"/>
                                                            </div>
                                                        </div>
                                            </section>
                                            <section className="h-[calc(100vh_-_5px)]" ref={stickyTrackRef}>
                                                    <div className="max-w-[900px] margin-inline-start:auto margin-inline-end:auto padding-inline-start: 1.25rem padding-inline-end: 1.25rem">
                                                        <div  ref={stickyElRef}>
                                                        <h1 className='leading-[1.1] mt-0 mb-[0.4em] mx-0'>GSAP Pinning</h1>
                                                        <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptates quos ullam unde dicta quas, facere nobis architecto accusamus, delectus, veritatis adipisci perferendis repellat? Labore repellendus minima dolore illum obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptates quos ullam unde dicta quas, facere nobis architecto accusamus, delectus, veritatis adipisci perferendis repellat? Labore repellendus minima dolore illum obcaecati.</p>
                                                        </div>
                                                    </div>
                                            </section>
                                            <section  ref={stickyTrackRef}>
                                                        <div className="max-w-[900px] margin-inline-start:auto margin-inline-end:auto padding-inline-start: 1.25rem padding-inline-end: 1.25rem columns-2 gap-12">
                                                          <div className="overflow-hidden rounded-lg">
                                                            <img className="max-w-full h-auto object-cover scale-[130%]" data-speed="auto" src="https://itsmil.es/media/placeholder_10.jpg"/>
                                                          </div>
                                                          <div  ref={stickyElRef}>
                                                            <h1 className='leading-[1.1] mt-0 mb-[0.4em] mx-0'>GSAP Pinning</h1>
                                                            <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptates quos ullam unde dicta quas, facere nobis architecto accusamus, delectus, veritatis adipisci perferendis repellat? Labore repellendus minima dolore illum obcaecati.</p>
                                                          </div>
                                                        </div>
                                            </section>
                                            <section className="h-[calc(100vh_-_var(--siteHeader-height))]" ref={stickyTrackRef}>
                                                <div className="max-w-[900px] margin-inline-start:auto margin-inline-end:auto padding-inline-start: 1.25rem padding-inline-end: 1.25rem  ">
                                                    <div  ref={stickyElRef}>
                                                    <h1 className='leading-[1.1] mt-0 mb-[0.4em] mx-0'>GSAP Pinning</h1>
                                                    <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptates quos ullam unde dicta quas, facere nobis architecto accusamus, delectus, veritatis adipisci perferendis repellat? Labore repellendus minima dolore illum obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptates quos ullam unde dicta quas, facere nobis architecto accusamus, delectus, veritatis adipisci perferendis repellat? Labore repellendus minima dolore illum obcaecati.</p>
                                                    </div>
                                                </div>
                                        </section>
                                                

                              </section>
                          
                  </div>
              </div>

      )
}


const Section = () => {
    const content = useRef()
    const wrapper = useRef()
    const heroTitle = useRef()
    const sunCircle = useRef()
    const hero = useRef()
    const marquee = useRef()
    const marqueeA = useRef()
    const marqueeB = useRef()
    const headingRef = useRef();
    const comparisonSectionRef = useRef()
    const containerLeftRef = useRef()
    const containerRightRef = useRef()
    const sectionRef = useRef()
    const sectionImageWrapperRef = useRef()
    const parallaxRef = useRef()
    const heroRef = useRef()

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
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

          gsap.set(headingRef.current, {
            yPercent: -150,
            opacity: 1
           });
           tl.current = gsap.timeline();
           let mySplitText = new SplitText( splitRef.current, { type: "words,chars" });
           let chars = mySplitText.chars;
    
           chars.forEach((char, i) => {
           smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
          });
  
          gsap.utils.toArray(comparisonSectionRef.current).forEach(section => {
            let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: section,
                  start: "center center",
                  // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                  end: () => "+=" + section.offsetWidth, 
                  scrub: true,
                  pin: true,
                  anticipatePin: 1
                },
                defaults: {ease: "power2.out"}
              });
            // animate the container one way...
            tl.fromTo(section.querySelector(containerRightRef.current), { xPercent: 100, x: 0, duration: 2.5}, {xPercent: 0});
              // ...and the image the opposite way (at the same time)
              tl.fromTo(section.querySelector(containerLeftRef.current), {xPercent: -100, x: 0, duration: 2.5}, {xPercent: 0}, 0);
          });
    
    
          gsap.utils.toArray(sectionRef.current).forEach((section, index) => {
            const w = section.querySelector(sectionImageWrapperRef.current);
            const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
            gsap.fromTo(w, { x }, {
              x: xEnd,
              scrollTrigger: {
                trigger: section,
                scrub: 0.5 } });
          });

          const splitTitle = new SplitText(heroTitle.current, { type: 'words,chars' })
         const char = splitTitle.char

            const tlHero = () =>
            gsap
                .timeline()
                .to(char, {
                opacity: 0,
                y: -100,
                stagger: { from: 'random', each: 0.01 }
                })
                .from(
                sunCircle.current,
                {
                    yPercent: 10,
                    scale: 0.5,
                    transformOrigin: 'bottom center'
                },
                '<'
                )

                ScrollTrigger.create({
                    trigger: hero.current,
                    start: 'top top',
                    end: 'bottom top',
                    pin: true,
                    scrub: 1,
                    animation: tlHero()
                  });

                  let tlMarquee = () =>
                    gsap
                        .timeline()
                        .from(marqueeA.current, { xPercent: 50 })
                        .from(marqueeB.current, { xPercent: -50 }, '<')

                    ScrollTrigger.create({
                    trigger: marquee.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                    animation: tlMarquee()
                    })
  
          const ts = gsap.timeline({
              scrollTrigger: {
                  trigger: heroRef.current,
                  start: "top top",
                  end: "bottom top",
                  scrub: true
              }
          });
          
          gsap.utils.toArray(parallaxRef.current).forEach(layer => {
              const depth = layer.dataset.depth;
              const movement = -(layer.offsetHeight * depth)
              ts.to(layer, {y: movement, ease: "power4.inOut"}, 0)
          });
    
  
          }, main)
          return () => ctx.revert()
  
      },[])


    return (
      <div className="box-border z-0 h-[100vh] w-screen antialiased" ref={wrapper} data-scroll-section>

            <div className="max-w-screen-lg mx-auto my-0 px-[2em] py-[8em]" ref={content}>

            <div ref={headingRef} className="leading-[1.35]" aria-hidden="true">
                              <p>reversed</p>
                              <div className="relative">
                              <p>bullet</p>
                              <p className="absolute z-[999] text-transparent top-0 inset-x-0 first:absolute first:z-[999] first:text-[white] first:top-0 first:inset-x-0" data-speed="0.95">bullet</p>
                              <p className="absolute z-[999] text-transparent top-0 inset-x-0 first:absolute first:z-[999] first:text-[white] first:top-0 first:inset-x-0" data-speed="0.9">bullet</p>
                              <p className="absolute z-[999] text-transparent top-0 inset-x-0 first:absolute first:z-[999] first:text-[white] first:top-0 first:inset-x-0" data-speed="0.85">bullet</p>
                              <p className="absolute z-[999] text-transparent top-0 inset-x-0 first:absolute first:z-[999] first:text-[white] first:top-0 first:inset-x-0" data-speed="0.8">bullet</p>
                              <p className="absolute z-[999] text-transparent top-0 inset-x-0 first:absolute first:z-[999] first:text-[white] first:top-0 first:inset-x-0" data-speed="0.75">bullet</p>
                              <p className="absolute z-[999] text-transparent top-0 inset-x-0 first:absolute first:z-[999] first:text-[white] first:top-0 first:inset-x-0" data-speed="0.7">bullet</p>
                              </div>
                  </div>

                      <div className='h-[300vh] bg-[#111] text-[white] overflow-x-hidden' >
                                  <section className="relative pb-[56.25%]" ref={comparisonSectionRef}>
                                          <div className="w-full h-full">
                                              <img className='w-full h-full absolute top-0' src="https://assets.codepen.io/16327/before.jpg" alt="before"/>
                                          </div>
                                          <div className="w-full h-full absolute top-0 absolute overflow-hidden translate-x-full translate-y-0 top-0" ref={containerRightRef}>
                                              <img className='-translate-x-full translate-y-0' src="https://assets.codepen.io/16327/after.jpg" alt="after" ref={containerLeftRef}/>
                                          </div>
                                  </section>
                          </div>

                    <section className="grid grid-cols-[repeat(2,1fr)] gap-x-4 gap-y-[20vh] items-center justify-items-center mt-[10vh] px-4 py-40 max-w-[1100px] mx-auto my-0">

                                  <div className="col-[2] row-[1]">
                                  <div className="mt-[1em] px-8 py-2 border-l-[solid] border-l-[white]">
                                  <h2>Easy parallax image effects</h2>
                                  <p>Pop your images in a container with overflow hidden, size them a little larger than the container and set data-speed to auto. GSAP does the rest.</p>
                                  </div>
                                  </div>

                                  <div className="image_cont">
                                  <img data-speed="auto" src="https://assets.codepen.io/756881/neon3.jpg" alt=""/>
                                  </div>

                          </section>

                    <section ref={sectionRef} className='text-[clamp(8rem,15vw,16rem)] leading-none font-black'>
                          <div className='flex text-[clamp(8rem,15vw,16rem)] leading-none font-black'>
                          CHIGURECHINOZIVIKANWANEKUNZICHIGUTIRO
                          </div>
                    </section>
                    <section ref={sectionRef} class='pb-4'>
                          <ul ref={sectionImageWrapperRef} class='flex'>
                          <li>
                              <img  className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=82' width='1240'/>
                          </li>
                          <li>

                              <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=45' width='1240'/>
                          </li>
                          <li>
                      
                              <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=193' width='1240'/>
                          </li>
                          <li>
                              <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=161' width='1240'/>
                          </li>
                          </ul>
                    </section>
                    <section ref={sectionRef} class='pb-4'>
                          <ul ref={sectionImageWrapperRef}  class='flex'>
                          <li>
                              <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=143' width='1240'/>
                          </li>
                          <li>
                              <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=25' width='1240'/>
                          </li>
                          <li>
                              <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=195' width='1240'/>
                          </li>
                          </ul>
                    </section>
                    <section ref={sectionRef} class='pb-4'>
                          <ul ref={sectionImageWrapperRef}  class='flex'>
                          <li>
                              <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=6' width='1240'/>
                          </li>
                          <li>
                              <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=73' width='1240'/>
                          </li>
                          <li>
                              <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=23' width='1240'/>
                          </li>
                          <li>
                              <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=110' width='1240'/>
                          </li>
                          </ul>
                    </section>
                    <section ref={sectionRef} class='pb-4'>
                              <ul ref={sectionImageWrapperRef}  class='flex'>
                              <li>
                                  <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=205' width='1240'/>
                              </li>
                              <li>
                                  <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=194' width='1240'/>
                              </li>
                              <li>
                                  <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=139' width='1240'/>
                              </li>
                              <li>
                                  <img className="w-full h-auto" height='874' src='https://source.unsplash.com/random/1240x874?sig=65' width='1240'/>
                              </li>
                              </ul>
                    </section>

                    <section className="hflex items-center justify-center" ref={hero}>
                        <div className="absolute bg-[color:var(--blue)] -translate-x-2/4 left-2/4 top-2/4">
                          <div className="w-[40vw] h-[40vw] mix-blend-lighten rounded-[50%]" ref={sunCircle}></div>
                        </div>
                        <h1 className="text-center leading-[8em] max-w-[976px] font-normal text-[158px] leading-[8rem] tracking-[-0.02em] mx-auto my-0">Here comes the sun</h1>
                      </section>

                
                      <section className="bg-[color:var(--blue)] flex items-center justify-center flex-col">
                        <h1 className="not-italic font-normal text-[32px] leading-[100%] text-center tracking-widest uppercase text-[#f47731] mix-blend-lighten" data-lag="0.2">Little Darling</h1>
                        <p>
                          <span className="mix-blend-screen w-[90px] h-[90px] inline-block relative z-10 mr-8 rounded-[50%] top-[5px]" data-lag="1.1"></span>Its been a long,
                        </p>
                        <p className='block font-normal text-[113px] leading-[100%] text-center text-white'>
                          cold lonely
                          <span className="inline-block mix-blend-difference" data-lag="1.2"
                            ><span className="asterisk__inner">✳︎</span>
                          </span>
                          winter
                        </p>
                      </section>

                  
                      <section className="overflow-hidden">
                        <a
                          href="https://www.youtube.com/watch?v=KQetemT1sWc"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <img
                          className='w-full h-screen object-cover'
                            src="./images/video-screenshot.jpeg"
                            alt="Video thumbnail"
                            data-speed="0.5"
                          />
                        </a>
                      </section>


                      <section className="flex flex-col items-center justify-center bg-[color:var(--blue)] relative" ref={marquee}>
                        <div className="absolute left-[20%] top-[30%]">
                          <img
                          className="w-[300px] h-[300px] mix-blend-screen object-cover rounded-[50%]"
                            width="350"
                            height="auto"
                            src="./images/beatles-jump.jpeg"
                            alt=""
                            data-lag="3"
                          />
                        </div>
                        <div className="absolute right-[20%] top-2/4">
                          <img
                          className="w-[300px] h-[300px] mix-blend-screen object-cover rounded-[50%]"
                            width="350"
                            height="auto"
                            src="./images/beatles-reunion.jpeg"
                            alt=""
                            data-lag="2"
                          />
                        </div>

                        <h3 className="whitespace-nowrap font-normal text-[240px] leading-[100%] text-[#2c449a] mix-blend-exclusion" ref={marqueeA}>
                          It feels like years since it's been here It feels like years since
                          it's been here
                        </h3>
                        <h3 className="whitespace-nowrap font-normal text-[240px] leading-[100%] text-[#2c449a] mix-blend-exclusion" ref={marqueeB}>
                          It feels like years since it's been here It feels like years since
                          it's been here
                        </h3>
                      </section>

              
                      <section className="bg-[color:var(--blue)] flex flex-col items-center justify-center gap-12">
                        <div className="text-[5vw] leading-none max-w-[30vw] text-center flex items-center flex-col bg-[color:var(--blue)]">
                          <h3 data-lag=".8">The smiles returning to the faces</h3>
                          <div className="smile" data-lag=".5"></div>
                        </div>
                    
                      </section>
                    <section ref={sectionRef} className='text-[clamp(8rem,15vw,16rem)] leading-none font-black'>
                      <div className='flex text-[clamp(8rem,15vw,16rem)] leading-none font-black'>
                        CHIGURECHEMAPANGAMAOKOMUDENGA
                      </div>
                    </section>

                    <div className="bg-[#231f20] text-[white]">
                    <ImageGroup data={data} />
                  </div>
                
            </div>
       
      </div>
    );
  };

    


  const Preface = () => {


  const content = useRef(null)
  const wrapper = useRef(null)

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

     return (

          <div
      ref={wrapper}
      style={{
        position: 'absolute',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        top: 0,
      }}>
      <div
        ref={content}
        style={{
          position: 'relative',
          minHeight: '200vh',
        }}>

            <div className="space-y-5 box-border z-0 h-[100vh] w-screen antialiased">
                    <HomeBredCurbs title="Preface" />

          <main className="flex flex-col items-center justify-center bg-black">
               
                <div className="bg-about bg-cover bg-center bg-no-repeat">
                    <Hero />
                </div>

      

               <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
                    <About />
              </div>

              <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
                    <Section />
              </div>

                  <div className="relative z-0">
                        <Sticky />
                  </div>
       
            </main>
  
      </div>
      </div>
    </div>
      
     )

  }
  
  export default Preface;