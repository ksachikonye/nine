"use client";
import Lenis from '@studio-freight/lenis'
import { useEffect,  useRef, useLayoutEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import Card from "@/components/ui/Card";
import GroupChart2 from "@/components/charts/sleep/groupTwo";

import HomeBredCurbs from "@/components/partials/HomeBredCurbs";

const Loader = () => {
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
                                       <h2 className="text-white text-[110px] font-extrabold" ref={bannerRef}>Sleep
                                         <p>Terrestrial Locomotion.</p>
                                       </h2>
                                       <a href="#" className="no-underline leading-[60px] text-white font-extrabold uppercase relative px-0 py-2">Reversed Bullet</a>
                                     </div>
                                   </div>
                                   <div className="col-span-2">
                               
                                   </div>
                                 </div>
                               </div>
                             </div>

                           </header>
                           
                         </div>



                       
                         </section>
             

         </div>
     </div>
    )

}


function Preamble(){
   return (
    <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
            <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
    </div>
</section>
   )
}


function WhyWeSleep(){
 return (
  <div class="container my-24 mx-auto md:px-6">
      
        <section class="mb-32">
          <h1 class="mb-4 text-3xl font-bold">
            Why do we sleep
          </h1>
       

          <section class="bg-white dark:bg-gray-900">
                  <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                      <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Restorative Process</h2>
                          <p class="mb-4">All living systems oscillate about a mean in a system that is subject to feedback control. The simplest of organisms oscillate between food engulfing and inactivity with assimilation on the other. This oscillation is mirrored by processes of chemical degradation and synthesis.</p>
                          <p> The activity/inactivity rythm determines the chemical processes in such a way that the synthetic period coincides with the inactive period.</p>
                      </div>
                      <div class="grid grid-cols-2 gap-4 mt-8">
                          <img class="w-full rounded-lg" src="https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/energy-differences.PNG" alt="office content 1"/>
                          <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/degradation-pathway.PNG" alt="office content 2"/>
                      </div>
                  </div>
          </section>

      <h1 class="mb-6 text-3xl font-bold">
            Energy Change
          </h1>

          <p>
            The assimilation of food for multicellular organisms is also dependent on 
            the endocrine systems. Dignissimos harum quod culpa officiis suscipit
            soluta labore! Expedita quas, nesciunt similique autem, sunt,
            doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
            Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex
            ducimus consequatur corporis, architecto nesciunt vitae ipsum
            consequuntur perspiciatis nulla esse voluptatem quos dolorum delectus
            similique eum vero in est velit quasi pariatur blanditiis incidunt
            quam.
          </p>
        </section>

          <div className="grid grid-cols-12 gap-5 mb-5">
          <div className="2xl:col-span-12">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
              <GroupChart2 />
            </div>
          </div>
        </div>

        
        <p class="mb-3 text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
        <div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
            <p class="mb-3 text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
            <blockquote class="mb-3">
                <p class="text-xl italic font-semibold text-gray-900 dark:text-white">" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</p>
            </blockquote>
        </div>
        <p class="mb-3 text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>



    <p class="mb-6">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
      sapiente molestias consectetur. Fuga nulla officia error placeat
      veniam, officiis rerum laboriosam ullam molestiae magni velit laborum
      itaque minima doloribus eligendi! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Optio sapiente molestias consectetur.
      Fuga nulla officia error placeat veniam, officiis rerum laboriosam
      ullam molestiae magni velit laborum itaque minima doloribus eligendi!
    </p>

    <p class="mb-6">
      <strong>Optio sapiente molestias consectetur?</strong>
    </p>

    <p class="mb-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
      architecto ex ab aut tempora officia libero praesentium, sint id
      magnam eius natus unde blanditiis. Autem adipisci totam sit
      consequuntur eligendi.
    </p>

    <p
      class="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700">
      <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Optio odit consequatur porro sequi ab distinctio
      modi. Rerum cum dolores sint, adipisci ad veritatis laborum eaque
      illum saepe mollitia ut voluptatum.
    </p>

    <p class="mb-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
      libero repellat molestiae aperiam laborum aliquid atque magni nostrum,
      inventore perspiciatis possimus quia incidunt maiores molestias eaque
      nam commodi! Magnam, labore.
    </p>

    <img src="https://mdbcdn.b-cdn.net/img/new/slides/194.jpg"
      class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />

    <ul class="mb-6 list-inside list-disc">
      <li>Lorem</li>
      <li>Ipsum</li>
      <li>Dolor</li>
      <li>Sit</li>
      <li>Amet</li>
    </ul>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
      temporibus nulla voluptatibus accusantium sapiente doloremque.
      Doloribus ratione laboriosam culpa. Ab officiis quidem, debitis
      nostrum in accusantium dolore veritatis eius est?
    </p>

 

</div>
 )

}

const Sleep = () => {
    const content = useRef()
    const wrapper = useRef()
    const listingsWrapper = useRef();
    const listing = useRef();
    const sectionFeaturedRef = useRef();
    const leftSectionRef = useRef();
    const rightSectionRef = useRef();
    const srollWrapperRef = useRef();

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

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
           
                const listings = gsap.utils.toArray(listing.current);
                //get the width of the listings wrapper
                let listingsWrapperWidth = listingsWrapper.current.offsetWidth;
    
                //get the total width of all the listings plus the gaps
                let listingsTotalWidth = (listings.length * listings[0].offsetWidth) + ((listings.length - 1) * 16);
                let test = listingsWrapperWidth - listingsTotalWidth;
    
                gsap.to(listing.current, {
                    x: test,
                    duration: 2,
                    scrollTrigger: {
                        trigger: sectionFeaturedRef.current,
                        start: 'top top',
                        end: '+=300%',
                        scrub: true,
                        pin: true,
                    }
                })
    
              
    
                gsap.set(rightSectionRef.current, {zIndex: (i, target, targets) => targets.length - i});
                gsap.set(leftSectionRef.current, {zIndex: (i, target, targets) => targets.length - i});
    
    
                const ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: srollWrapperRef.current,
                        start: 'top top',
                        end: '+=300%',
                        scrub: true,
                        pin: true,
                    }
                });
                ts.to(leftSectionRef.current, {xPercent:-100, duration: 1.5, ease:'power4.inOut', stagger: 1 });
                ts.to(rightSectionRef.current, {xPercent:100, duration: 1.5, ease:'power4.inOut', stagger: 1}, "-=2");
    
    
            }, main)
            return () => ctx.revert()
    
        },[])



  return (
    <>
    <div ref={wrapper}>
                      <div ref={content} >
  
        <section className="box-border">
                <div className=" px-4 py-32" ref={sectionFeaturedRef}>
                    <div className="max-w-[1250px] mx-auto my-0">
                        <div className="max-w-[clamp(300px,40vw,50ch)] mx-auto my-0">
                            <h2 className="text-5xl">Featured Listings</h2>
                            <p className="text-lg leading-[1.4]">Browse our current listings in the Lubbock area. We're sure the home you're looking for is out there!</p>
                            <div className="no-underline text-white uppercase inline-block tracking-[1px] mt-10 px-7 py-4 rounded-[30px]">Find Your Home</div>
                        </div>
                        <div className="flex gap-4 mt-14" ref={listingsWrapper}>
                            <div className="w-[clamp(275px,400px,90vw)] flex-[0_0_auto] aspect-[1/1]" ref={listing}>
                                <div className="w-full h-full">
                                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/15253317/pexels-photo-15253317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                </div>
                            </div>
                            <div className="w-[clamp(275px,400px,90vw)] flex-[0_0_auto] aspect-[1/1]" ref={listing}>
                                <div className="w-full h-full">
                                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/10536106/pexels-photo-10536106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                </div>
                            </div>
                            <div className="w-[clamp(275px,400px,90vw)] flex-[0_0_auto] aspect-[1/1]" ref={listing}>
                                <div className="w-full h-full">
                                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/10536106/pexels-photo-10536106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                </div>
                            </div>
                            <div className="w-[clamp(275px,400px,90vw)] flex-[0_0_auto] aspect-[1/1]" ref={listing}>
                                <div className="w-full h-full">
                                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/13862328/pexels-photo-13862328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                </div>
                            </div>
                            <div className="w-[clamp(275px,400px,90vw)] flex-[0_0_auto] aspect-[1/1]" ref={listing}>
                                <div className="w-full h-full">
                                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/6204030/pexels-photo-6204030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                </div>
                            </div>
                            <div className="w-[clamp(275px,400px,90vw)] flex-[0_0_auto] aspect-[1/1]" ref={listing}>
                                <div className="w-full h-full">
                                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/15760049/pexels-photo-15760049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                </div>
                            </div>
                            <div className="w-[clamp(275px,400px,90vw)] flex-[0_0_auto] aspect-[1/1]" ref={listing}>
                                <div className="w-full h-full">
                                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/10844751/pexels-photo-10844751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                                                    <div className="px-8 py-24">
                                                        <div className="max-w-[1250px] mx-auto my-0">
                                                            <p className="text-lg leading-[1.4]">Well excuse me, Judge Reinhold! Why are you squeezing me with your body? What, so the guy we are meeting with can't even grow his own hair? COME ON! Steve Holt? The moron jock? OH MY GOD, WE'RE HAVING A FIRE… sale. Oh, the burning! ♪♪ Amaaaaaaziiiing Graaaace ♪♪ Caw ca caw, caw ca caw, caw ca caw, caw ca caw. The worst that could happen is that I could spill coffee all over this $3,000 suit. COME ON.</p>
                                                            <p className="text-lg leading-[1.4]">Stop it, stop it. This objectification of women has to stop. Michael: It's just Mom and whores. Look at us, crying like a couple of girls on the last day of camp. Her lawyers are claiming the seal is worth $250,000. And that's not even including Buster's Swatch. George Michael, you want to put your head down there by his drainage shunt? You are a worse psychiatrist than you are a son-in-law and you will never get work as an actor because you have no talent. Heart attack never stopped old big bear. Daddy horny, Michael. </p>
                                                        </div>
                                                    </div>
                    
                                                <div className="w-screen h-screen" ref={srollWrapperRef}>
                                                    <div className="w-full h-full grid grid-cols-[1fr] grid-rows-[1fr_1fr] relative overflow-hidden lg:grid-cols-[1fr_1fr] lg:grid-rows-[1fr]">
                                                        <div className="relative w-full col-[1/2] row-[1/2]" >
                                                            <div className="absolute w-full h-full top-0 w-full h-[50vh] lg:h-screen" ref={leftSectionRef}>
                                                                <img className="object-cover w-full h-full" src="https://source.unsplash.com/random/?clown" alt=""/>
                                                            </div>
                                                            <div className="absolute w-full h-full top-0 w-full h-[50vh] lg:h-screen" data-id="text2">
                                                                <div className="max-w-[clamp(300px,40vw,50ch)] mx-auto my-0">
                                                                    <h2 className="text-5xl">This is a headline</h2>
                                                                    <p className="text-base leading-[1.4] mt-8">Well, Michael, I did not find their buffoonery amusing. I run a pretty tight ship around here. With a pool table. It's a gaming ship. You might enjoy this. Oh. Em. Gee. That's amazing.</p>
                    
                                                                </div>
                                                            </div>
                                                            <div className="absolute w-full h-full top-0 w-full h-[50vh] lg:h-screen" ref={leftSectionRef}>
                                                                <img className="object-cover w-full h-full" src="https://source.unsplash.com/random/?small clown" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="relative w-full col-[1/2] row-[2/3] lg:col-[2/3] lg:row-[1/2]">
                                                            <div className="absolute w-full h-full top-0 w-full h-[50vh] text-white flex flex-col justify-center p-[5vw] lg:h-screen" data-id="text1">
                                                                <div className="max-w-[clamp(300px,40vw,50ch)] mx-auto my-0">
                                                                    <h2 className="text-5xl">This is a headline</h2>
                                                                    <p className="text-base leading-[1.4] mt-8">It walked on my pillow! The only thing I found in the fridge was a dead dove in a bag. Mom… after all these years, God's not going to take a call from you.</p>
                    
                                                                </div>
                                                            </div>
                                                            <div className="absolute w-full h-full top-0 scroller-image" ref={rightSectionRef}>
                                                                <img className="object-cover w-full h-full" src="https://source.unsplash.com/random/?sad clown" alt=""/>
                                                            </div>
                                                            <div className="absolute w-full h-full top-0 w-full h-[50vh] text-white flex flex-col justify-center p-[5vw] lg:h-screen" data-id="text3"/>
                                                            <div className="max-w-[clamp(300px,40vw,50ch)] mx-auto my-0">
                                                                <h2 className="text-5xl">Coo coo ca chaw</h2>
                                                                <p className="text-base leading-[1.4] mt-8">Mom always taught us to curl up in a ball and remain motionless when confronted. In the mid '90s, Tobias formed a folk music band with Lindsay and Maebe which he called Dr. Funke's 100 Percent Natural Good Time Family Band Solution.</p>
                    
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                    
                                                <div className="px-8 py-24">
                                                    <div className="max-w-[1250px] mx-auto my-0">
                                                        <p className="text-lg leading-[1.4]">Well excuse me, Judge Reinhold! Why are you squeezing me with your body? What, so the guy we are meeting with can't even grow his own hair? COME ON! Steve Holt? The moron jock? OH MY GOD, WE'RE HAVING A FIRE… sale. Oh, the burning! ♪♪ Amaaaaaaziiiing Graaaace ♪♪ Caw ca caw, caw ca caw, caw ca caw, caw ca caw. The worst that could happen is that I could spill coffee all over this $3,000 suit. COME ON.</p>
                                                        <p className="text-lg leading-[1.4]">Stop it, stop it. This objectification of women has to stop. Michael: It's just Mom and whores. Look at us, crying like a couple of girls on the last day of camp. Her lawyers are claiming the seal is worth $250,000. And that's not even including Buster's Swatch. George Michael, you want to put your head down there by his drainage shunt? You are a worse psychiatrist than you are a son-in-law and you will never get work as an actor because you have no talent. Heart attack never stopped old big bear. Daddy horny, Michael. </p>
                                                    </div>
                                            </div>
                                    
                    
                    
                                            </section>
                    
                                            <section>
                    
                            <header class="bg-header flex items-center justify-center h-screen pb-12">
                                    <div class="bg-white font-serif mx-4 p-4 text-center md:p-8">
                                        <p class="italic text-sm">
                                        November 1, 2019
                                        </p>
                                        <h1 class="text-5xl uppercase">
                                        Article Title
                                        </h1>
                                        <p class="text-lg">
                                        Author Name
                                        </p>
                                    </div>
                            </header>
                    
                    <div class="font-serif leading-normal mx-auto py-12 px-4 max-w-lg">
                        <p class="mb-6 text-xl md:text-2xl uppercase">This is a simple parallax effect created by setting the background attachment property to a fixed position. This technique is not meant for non-decorative images, videos, etc. as those require additional HTML and CSS to work properly.</p>
                        <p class="mb-4 text-lg">Quae commodi reiciendis dignissimos. Rerum molestiae hic dolores assumenda dolor! Corrupti reiciendis maxime fuga, recusandae obcaecati officia cum temporibus dicta quibusdam praesentium, magni, cumque aperiam iusto sequi illum molestiae non.</p>
                        <p class="mb-4 text-lg">In excepturi repellendus eum, qui corrupti rerum perferendis harum adipisci voluptate? Nihil, quidem deleniti libero officia dicta vel asperiores velit molestiae blanditiis, dolore voluptatibus excepturi laudantium at veniam illo. Dolor!</p>
                        <p class="mb-4 text-lg">Neque laudantium minus doloremque id quas quod sint velit corporis unde dolore accusantium delectus optio consequuntur voluptatem sapiente odit dolorum minima harum tenetur, dolor provident reprehenderit. Ex eum provident harum?</p>
                        <p class="mb-4 text-lg">Mollitia temporibus maxime placeat culpa distinctio possimus, praesentium, assumenda quasi eum voluptate magni aspernatur aperiam. Eius voluptates rem eum, facilis inventore hic provident pariatur nam non! At odit iste cum.</p>
                        <p class="mb-4 text-lg">Cumque voluptatibus laboriosam tempore architecto laudantium sint vitae cupiditate voluptate quod tempora saepe odio quasi dolores possimus non totam unde voluptates corrupti, ducimus ipsa enim officiis ipsum maxime eveniet. Aut!</p>
                        <p class="mb-4 text-lg">Maxime facere ut natus libero incidunt alias quam consectetur, nisi delectus exercitationem ab qui perferendis dolorem sequi veritatis nobis eius quas dolore ducimus atque vel. Doloribus mollitia non pariatur modi?</p>
                        <p class="mb-4 text-lg">Sed in amet a neque, delectus, cupiditate ab assumenda quidem facere molestias vitae itaque soluta reprehenderit dolorem. Deserunt quibusdam, consequatur veniam fugiat ipsam aliquam ea possimus quis officiis enim dolores.</p>
                        <p class="mb-4 text-lg">Exercitationem aperiam veniam perspiciatis iure ad nobis necessitatibus cumque cupiditate obcaecati natus. Neque nostrum maxime id veritatis tempore, a voluptate voluptatem et! A ullam id aliquam? Recusandae deleniti odit fugit!</p>
                        <p class="mb-4 text-lg">Beatae rerum obcaecati consectetur nostrum eos ipsam, accusamus delectus ex maxime neque sit quod repellendus voluptate sunt dolore hic explicabo ea dolorum vero vel quidem illo! Cupiditate sed voluptatibus ullam?</p>
                        <p class="mb-4 text-lg">Modi aliquam facilis adipisci! Soluta eveniet eos omnis, inventore nesciunt, laborum deserunt blanditiis nihil accusamus debitis voluptatibus possimus dolores vero maiores, sed voluptate ut! Facilis possimus vitae consectetur praesentium veritatis.</p>
                        <p class="mb-4 text-lg">Tempore, quaerat accusamus ad nostrum maiores numquam, ea nam sed reiciendis, eveniet perspiciatis. Eos nulla vel consectetur quo nesciunt aspernatur sint nemo cumque optio mollitia, veritatis, tenetur quibusdam eum natus.</p>
                    </div>
                    
                    <div class="bg-quote container flex items-center justify-center h-screen mx-auto">
                        <blockquote class="bg-black font-serif mx-4 p-4 text-center text-white md:p-8">
                        <p class="font-bold italic text-3xl">
                            &ldquo;Large, bold pull quote. Hats. Very good.&rdquo;
                        </p>
                        </blockquote>
                    </div>
                    
                    <div class="font-serif leading-normal mx-auto py-12 px-4 max-w-lg">
                        <p class="mb-4 text-lg">Quae commodi reiciendis dignissimos. Rerum molestiae hic dolores assumenda dolor! Corrupti reiciendis maxime fuga, recusandae obcaecati officia cum temporibus dicta quibusdam praesentium, magni, cumque aperiam iusto sequi illum molestiae non.</p>
                        <p class="mb-4 text-lg">In excepturi repellendus eum, qui corrupti rerum perferendis harum adipisci voluptate? Nihil, quidem deleniti libero officia dicta vel asperiores velit molestiae blanditiis, dolore voluptatibus excepturi laudantium at veniam illo. Dolor!</p>
                        <p class="mb-4 text-lg">Neque laudantium minus doloremque id quas quod sint velit corporis unde dolore accusantium delectus optio consequuntur voluptatem sapiente odit dolorum minima harum tenetur, dolor provident reprehenderit. Ex eum provident harum?</p>
                        <p class="mb-4 text-lg">Mollitia temporibus maxime placeat culpa distinctio possimus, praesentium, assumenda quasi eum voluptate magni aspernatur aperiam. Eius voluptates rem eum, facilis inventore hic provident pariatur nam non! At odit iste cum.</p>
                    </div>
                    
                    
                                            </section>
                    
                    
  
    
    
     
        </div>
    </div>
    </>
  );
};

export default Sleep;
