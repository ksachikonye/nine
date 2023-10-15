'use client'
import { useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { SplitText } from 'gsap/dist/SplitText';




function ChapterEnd(props) {
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
    const imageRef = useRef()
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
  
    useIsomorphicLayoutEffect(() => {
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
  
    
  
          }, wrapper)
          return () => ctx.revert()
  
      },[])

      return (
        <>
        <div ref={wrapper}>
        <div ref={content}>

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
                        <h1 className="text-center  max-w-[976px] font-normal text-[158px] leading-[8rem] tracking-[-0.02em] mx-auto my-0">Here comes the sun</h1>
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
     

    </div>
    </div>

</>

      )
}
