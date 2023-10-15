'use client'

'use client'
import Lenis from '@studio-freight/lenis'
import { useEffect,  useRef, useContext} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useIsomorphicLayoutEffect } from "website/lib/useIsomorphicLayoutEffect.js";

function Terrakota(props) {
    const { scene } = useGLTF('/models/terracotta_krater.glb')
  
    useFrame((state, delta) => (scene.rotation.y += delta))
  
    return <primitive object={scene} {...props} />
  }

export function ChapterLoader() {

  const content = useRef()
  const wrapper = useRef()
  const fromLeftRef = useRef()
  const loaderRef = useRef()
  const fromLeftTileRef = useRef()
  const bannerRef = useRef();
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

  useIsomorphicLayoutEffect(() => {
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
          model,
          {
            y: 500,
            duration: 0.9,
            stagger: {
              amount: 0.2,
            },
          },
          "-=.2"
        );
        
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

                       <div className="welcome-screen">
                           <header className="header js-active-header">
                             <div className="relative" > 
                               <div className="container">
                                 <div className="grid grid-cols-2">
                                   <div className="col-span-2">
                                     <div className="absolute top-[20%]">
                                       <h2 className="text-white text-[110px] font-extrabold" ref={bannerRef}>Maximum Velocity
                                         <p>Terrestrial Locomotion.</p>
                                       </h2>
                                       <a href="#" className="no-underline leading-[60px] text-white font-extrabold uppercase relative px-0 py-2">Reversed Bullet</a>
                                     </div>
                                   </div>
                                   <div className="col-span-2">
                                   <View orbit className='relative h-full  sm:h-48 sm:w-full'>
                                        <Suspense fallback={null}>
                                        <Terrakota scale={1} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
                                        <Common color={'lightpink'} />
                                        </Suspense>
                                    </View>
                                   </div>
                                 </div>
                               </div>
                             </div>

                           </header>
                           
                         </div>



                       
                         </section>
             

         </div>
     </div>


          </>
)

}