'use client'
import Image from 'next/image'
import React, {  useState , Suspense, useRef, useContext} from "react";
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';




export  function GardenOfEarthlyDelights() {
  const wrapper = useRef();
  const content = useRef();
  const sectionsRef = useRef()
  const photoRef = useRef()
  const scrollRef = useRef()
  const [isTouch, setTouch] = useState(false)
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    setTouch(isTouch)
  }, [])

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  const lenis = useRef(null)

  const update = (time, deltaTime, frame) => {
    lenis.current.raf(time * 1000)
  }

  const resize = (e) => {
    ScrollTrigger.refresh()
  }

  useEffect(() => {

    lenis.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    lenis.current.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      // console.log({ scroll, limit, velocity, direction, progress })
      ScrollTrigger.update()
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

  
         
         // For each element, listen to a "click" event
         scrollRef.current.forEach(button => {
           button.addEventListener('click', e => {
             e.preventDefault();
         
             // get the DOM element by the ID (data-target value)
             const target = button.dataset.target;
             const elRef = document.querySelector(target.replace('#', ''));
         
             // Use lenis.scrollTo() to scroll the page to the right element
             lenis.scrollTo(elRef.current, {
               offset: 0, 
               immediate: false,
               duration: 3,
               easing: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2), // https://easings.net
             });
           });
         });

    requestAnimationFrame(raf)

    gsap.ticker.add(update)

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.current.scroll = value
        }
        return lenis.current.scroll
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      }
    })

    ScrollTrigger.defaults({ scroller: document.body })

    window.addEventListener('resize', resize)

    // animations
    // animations




    // clean

    return () => {
      window.removeEventListener('resize', resize)
      gsap.ticker.remove(update)
      lenis.current.destroy()


    }

  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // create the smooth scroller FIRST!
    ScrollSmoother.create({
        smooth: 5, 
        effects: true, 
        normalizeScroll: true, 
        ignoreMobileResize: true, 
        preventDefault: true
      });

   

      gsap.registerEffect({
        name: "zoom",
        effect: (targets, config) => {
          const vars = {transformOrigin: "0px 0px", ...config},
                { scale, origin } = config,
                clamp = gsap.utils.clamp(-100 * (scale - 1), 0);
          delete vars.origin;
          vars.xPercent = clamp((0.5 - origin[0] * scale) * 100);
          vars.yPercent = clamp((0.5 - origin[1] * scale) * 100);
          vars.overwrite = "auto";
          return gsap.to(targets, vars);
        },
        extendTimeline: true,
        defaults: {origin: [0.5, 0.5], scale: 2}
      });

      const zoomData = [
        {scale: 1, origin: [0.5, 0.5]},
        {scale: 3, origin: [0.6, 1]},
        {scale: 1, origin: [0.5, 0.5]},
        {scale: 2, origin: [0.8, 0.4]}
      ];

      gsap.utils.toArray(sectionsRef.current).forEach((section, index) => {
        const zoom = zoomData[index];
        ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          end: "+=125%",
          onToggle(self) {
            if (self.isActive) { // if it enters forward or backward
              gsap.effects.zoom(photoRef.current, {
                scale: zoom.scale,
                origin: zoom.origin,
                duration: 1,
                ease: "power1.inOut"
              });
            }
          }
        });
      });
 
   

    }, wrapper);
    return () => ctx.revert();
  }, []);

 




  return (

    
   


         <div class="container my-24 mx-auto md:px-6">
      
          <div className="w-2/5 fixed h-screen overflow-hidden right-0 top-0">
                <div className="w-full h-full bg-cover bg-center">
                    <Image ref={photoRef}
                    src="https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/Paradise.jpg"
                    alt="Picture of the author"
                    className="w-full h-full bg-cover bg-center"
                    />
                </div>
                </div>
                <section className="relative h-screen w-[58%] border-b-[#636363] border-b border-solid" ref={sectionsRef}>
                <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-2xl font-bold">
              What's the secret of the great taste?
            </h2>
            <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
              Hot news
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Earum maxime voluptas ipsam aliquam itaque cupiditate
              provident architecto expedita harum culpa odit, inventore rem
              molestias laborum repudiandae corporis pariatur quo eius iste!
              Quaerat, assumenda voluptates! Molestias, recusandae? Maxime
              fuga omnis ducimus.
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
              Commodi ut nisi assumenda alias maxime necessitatibus ad rem
              repellat explicabo, reiciendis illum suscipit iusto? Provident
              dignissimos similique, reiciendis inventore accusantium unde
              mollitia, deleniti quae atque error id perspiciatis illum.
              Laboriosam aperiam ab illo dignissimos obcaecati corporis
              similique a odio, optio iste quis placeat alias amet rerum
              sint quos dolor pariatur inventore possimus ad consequuntur
              fugiat perferendis consectetur laudantium.
            </p>
          </div>
                </section>
                <section className="relative h-screen w-[58%] border-b-[#636363] border-b border-solid" ref={sectionsRef}>
                    <h1 className="absolute text-4xl leading-none text-white ml-5 mr-0 my-0 top-[30px]">Section 2</h1>
                    <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-2xl font-bold">
              What's the secret of the great taste?
            </h2>
            <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
              Hot news
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Earum maxime voluptas ipsam aliquam itaque cupiditate
              provident architecto expedita harum culpa odit, inventore rem
              molestias laborum repudiandae corporis pariatur quo eius iste!
              Quaerat, assumenda voluptates! Molestias, recusandae? Maxime
              fuga omnis ducimus.
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
              Commodi ut nisi assumenda alias maxime necessitatibus ad rem
              repellat explicabo, reiciendis illum suscipit iusto? Provident
              dignissimos similique, reiciendis inventore accusantium unde
              mollitia, deleniti quae atque error id perspiciatis illum.
              Laboriosam aperiam ab illo dignissimos obcaecati corporis
              similique a odio, optio iste quis placeat alias amet rerum
              sint quos dolor pariatur inventore possimus ad consequuntur
              fugiat perferendis consectetur laudantium.
            </p>
          </div>
                </section>
                <section className="relative h-screen w-[58%] border-b-[#636363] border-b border-solid" ref={sectionsRef}> 
                    <h1 className="absolute text-4xl leading-none text-white ml-5 mr-0 my-0 top-[30px]">Section 3</h1>
                    <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-2xl font-bold">
              What's the secret of the great taste?
            </h2>
            <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
              Hot news
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Earum maxime voluptas ipsam aliquam itaque cupiditate
              provident architecto expedita harum culpa odit, inventore rem
              molestias laborum repudiandae corporis pariatur quo eius iste!
              Quaerat, assumenda voluptates! Molestias, recusandae? Maxime
              fuga omnis ducimus.
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
              Commodi ut nisi assumenda alias maxime necessitatibus ad rem
              repellat explicabo, reiciendis illum suscipit iusto? Provident
              dignissimos similique, reiciendis inventore accusantium unde
              mollitia, deleniti quae atque error id perspiciatis illum.
              Laboriosam aperiam ab illo dignissimos obcaecati corporis
              similique a odio, optio iste quis placeat alias amet rerum
              sint quos dolor pariatur inventore possimus ad consequuntur
              fugiat perferendis consectetur laudantium.
            </p>
          </div>
                </section>
                <section className="relative h-screen w-[58%] border-b-[#636363] border-b border-solid" ref={sectionsRef}>
                    <h1 className="absolute text-4xl leading-none text-white ml-5 mr-0 my-0 top-[30px]">Section 4</h1>
                    <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-2xl font-bold">
              What's the secret of the great taste?
            </h2>
            <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
              Hot news
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Earum maxime voluptas ipsam aliquam itaque cupiditate
              provident architecto expedita harum culpa odit, inventore rem
              molestias laborum repudiandae corporis pariatur quo eius iste!
              Quaerat, assumenda voluptates! Molestias, recusandae? Maxime
              fuga omnis ducimus.
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
              Commodi ut nisi assumenda alias maxime necessitatibus ad rem
              repellat explicabo, reiciendis illum suscipit iusto? Provident
              dignissimos similique, reiciendis inventore accusantium unde
              mollitia, deleniti quae atque error id perspiciatis illum.
              Laboriosam aperiam ab illo dignissimos obcaecati corporis
              similique a odio, optio iste quis placeat alias amet rerum
              sint quos dolor pariatur inventore possimus ad consequuntur
              fugiat perferendis consectetur laudantium.
            </p>
          </div>
                </section> 
             
       


      
                </div>
  )
}



