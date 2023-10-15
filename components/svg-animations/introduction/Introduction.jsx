'use client'
import Lenis from '@studio-freight/lenis'
import { useEffect,  useRef, useLayoutEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';




export function Introduction() {
  const content = useRef()
  const wrapper = useRef()
  const videoRef = useRef();
  const squareTrigger = useRef();
  const stickySquares = useRef();
  const rect = useRef();
  const logoTrigger = useRef();
  const stickyLogo = useRef();
  const stickyLogoWrap = useRef();
  

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
        gsap.timeline({ repeat: -1, yoyo: true }).fromTo(
            videoRef.current,
            {
              filter: "brightness(80%)"
            },
            {
              filter: "brightness(120%)",
              ease: "power1.inOut",
              duration: 2.2
            }
          );
          
          let staggerSquares = gsap
            .timeline({
              scrollTrigger: {
                trigger: squareTrigger.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 2
              }
            })
            .set(stickySquares.current, { opacity: 1 })
            .from(rect.current, {
              opacity: 0,
              duration: 0.05,
              stagger: { each: 0.5, from: "random" }
            });
          
          let logoScale = gsap
            .timeline({
              scrollTrigger: {
                trigger: logoTrigger.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 2
              },
              defaults: {
                ease: "none"
              }
            })
            .set(stickyLogo.current, { opacity: 1 })
            .to(stickyLogoWrap.current, {
              opacity: 1,
              duration: 0.1
            })
            .fromTo(
              stickyLogo.current,
              { scale: 0.01, xPercent: 0 },
              {
                scale: 1,
                xPercent: 0.15,
                duration: 1,
                ease: "power1.out"
              }
            )
            .fromTo(
              videoRef.current,
              {
                scale: 1.3
              },
              { scale: 1, duration: 1, ease: "power1.out" },
              0.1
            )
            .to(
              videoRef.current,
              {
                opacity: 1,
                duration: 0.03
              },
              "<"
            )
            .to(
              stickyLogo.curremt,
              {
                color: "#b8b8b8",
                duration: 0.03
              },
              "<"
            );
 
        
 
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: videoRef.current,
              start: "top top",
              end: "bottom+=200% bottom",
              scrub: true,
              markers: true
            }
          });
 
          // wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
          videoRef.current.onloadedmetadata = function () {
            tl.to(videoRef.current, { currentTime: videoRef.current.duration });
          };
 
          // Dealing with devices
          function isTouchDevice() {
            return (
              "ontouchstart" in window ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            );
          }
          if (isTouchDevice()) {
            videoRef.current.play();
            videoRef.current.pause();
          }
       

        }, wrapper)
        return () => ctx.revert()

    },[])
            
return (
    <>
    <div ref={wrapper} className='absolute overflow-hidden w-0 h-0 top-[0%] bottom-auto inset-x-[0%] antialiased'>
           <div ref={content} className='bg-[#b8b8b8] text-black text-[1vw] leading-[1.6] font-normal tracking-normal w-full max-w-[100em] mx-auto px-[2.8em] py-[5em]' >

           <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="fixed z-[1000] bg-transparent text-[#b8b8b8] mix-blend-difference top-[0%] bottom-auto inset-x-[0%]">
       
       <div className="relative">
             <div className="absolute z-[1] w-full h-full inset-[0%]">
                <div className="sticky flex overflow-hidden w-full h-screen justify-center items-center top-0">
                   <div className="absolute z-[1] w-full h-full bg-[50%_50%] bg-cover bg-no-repeat inset-[0%] bg-[url('https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/ben-johnson.jpg')] "></div>
                   <div className="absolute z-[2] w-full h-full opacity-0 inset-[0%]" ref={stickySquares}>
                      <svg ref={rect} className="fill-current"viewBox="0 0 1881 951" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                         <rect width="95" height="96"/>
                         <rect x="94" width="95" height="96"/>
                         <rect x="188" width="95" height="96"/>
                         <rect x="282" width="95" height="96"/>
                         <rect x="376" width="95" height="96"/>
                         <rect x="470" width="95" height="96"/>
                         <rect x="564" width="95" height="96"/>
                         <rect x="658" width="95" height="96"/>
                         <rect x="752" width="95" height="96"/>
                         <rect x="846" width="95" height="96"/>
                         <rect x="940" width="95" height="96"/>
                         <rect x="1034" width="95" height="96"/>
                         <rect x="1128" width="95" height="96"/>
                         <rect x="1222" width="95" height="96"/>
                         <rect x="1316" width="95" height="96"/>
                         <rect x="1410" width="95" height="96"/>
                         <rect x="1504" width="95" height="96"/>
                         <rect x="1598" width="95" height="96"/>
                         <rect x="1692" width="95" height="96"/>
                         <rect x="1786" width="95" height="96"/>
                         <rect y="95" width="95" height="96"/>
                         <rect x="94" y="95" width="95" height="96"/>
                         <rect x="188" y="95" width="95" height="96"/>
                         <rect x="282" y="95" width="95" height="96"/>
                         <rect x="376" y="95" width="95" height="96"/>
                         <rect x="470" y="95" width="95" height="96"/>
                         <rect x="564" y="95" width="95" height="96"/>
                         <rect x="658" y="95" width="95" height="96"/>
                         <rect x="752" y="95" width="95" height="96"/>
                         <rect x="846" y="95" width="95" height="96"/>
                         <rect x="940" y="95" width="95" height="96"/>
                         <rect x="1034" y="95" width="95" height="96"/>
                         <rect x="1128" y="95" width="95" height="96"/>
                         <rect x="1222" y="95" width="95" height="96"/>
                         <rect x="1316" y="95" width="95" height="96"/>
                         <rect x="1410" y="95" width="95" height="96"/>
                         <rect x="1504" y="95" width="95" height="96"/>
                         <rect x="1598" y="95" width="95" height="96"/>
                         <rect x="1692" y="95" width="95" height="96"/>
                         <rect x="1786" y="95" width="95" height="96"/>
                         <rect y="190" width="95" height="96"/>
                         <rect x="94" y="190" width="95" height="96"/>
                         <rect x="188" y="190" width="95" height="96"/>
                         <rect x="282" y="190" width="95" height="96"/>
                         <rect x="376" y="190" width="95" height="96"/>
                         <rect x="470" y="190" width="95" height="96"/>
                         <rect x="564" y="190" width="95" height="96"/>
                         <rect x="658" y="190" width="95" height="96"/>
                         <rect x="752" y="190" width="95" height="96"/>
                         <rect x="846" y="190" width="95" height="96"/>
                         <rect x="940" y="190" width="95" height="96"/>
                         <rect x="1034" y="190" width="95" height="96"/>
                         <rect x="1128" y="190" width="95" height="96"/>
                         <rect x="1222" y="190" width="95" height="96"/>
                         <rect x="1316" y="190" width="95" height="96"/>
                         <rect x="1410" y="190" width="95" height="96"/>
                         <rect x="1504" y="190" width="95" height="96"/>
                         <rect x="1598" y="190" width="95" height="96"/>
                         <rect x="1692" y="190" width="95" height="96"/>
                         <rect x="1786" y="190" width="95" height="96"/>
                         <rect y="285" width="95" height="96"/>
                         <rect x="94" y="285" width="95" height="96"/>
                         <rect x="188" y="285" width="95" height="96"/>
                         <rect x="282" y="285" width="95" height="96"/>
                         <rect x="376" y="285" width="95" height="96"/>
                         <rect x="470" y="285" width="95" height="96"/>
                         <rect x="564" y="285" width="95" height="96"/>
                         <rect x="658" y="285" width="95" height="96"/>
                         <rect x="752" y="285" width="95" height="96"/>
                         <rect x="846" y="285" width="95" height="96"/>
                         <rect x="940" y="285" width="95" height="96"/>
                         <rect x="1034" y="285" width="95" height="96"/>
                         <rect x="1128" y="285" width="95" height="96"/>
                         <rect x="1222" y="285" width="95" height="96"/>
                         <rect x="1316" y="285" width="95" height="96"/>
                         <rect x="1410" y="285" width="95" height="96"/>
                         <rect x="1504" y="285" width="95" height="96"/>
                         <rect x="1598" y="285" width="95" height="96"/>
                         <rect x="1692" y="285" width="95" height="96"/>
                         <rect x="1786" y="285" width="95" height="96"/>
                         <rect y="380" width="95" height="96"/>
                         <rect x="94" y="380" width="95" height="96"/>
                         <rect x="188" y="380" width="95" height="96"/>
                         <rect x="282" y="380" width="95" height="96"/>
                         <rect x="376" y="380" width="95" height="96"/>
                         <rect x="470" y="380" width="95" height="96"/>
                         <rect x="564" y="380" width="95" height="96"/>
                         <rect x="658" y="380" width="95" height="96"/>
                         <rect x="752" y="380" width="95" height="96"/>
                         <rect x="846" y="380" width="95" height="96"/>
                         <rect x="940" y="380" width="95" height="96"/>
                         <rect x="1034" y="380" width="95" height="96"/>
                         <rect x="1128" y="380" width="95" height="96"/>
                         <rect x="1222" y="380" width="95" height="96"/>
                         <rect x="1316" y="380" width="95" height="96"/>
                         <rect x="1410" y="380" width="95" height="96"/>
                         <rect x="1504" y="380" width="95" height="96"/>
                         <rect x="1598" y="380" width="95" height="96"/>
                         <rect x="1692" y="380" width="95" height="96"/>
                         <rect x="1786" y="380" width="95" height="96"/>
                         <rect y="475" width="95" height="96"/>
                         <rect x="94" y="475" width="95" height="96"/>
                         <rect x="188" y="475" width="95" height="96"/>
                         <rect x="282" y="475" width="95" height="96"/>
                         <rect x="376" y="475" width="95" height="96"/>
                         <rect x="470" y="475" width="95" height="96"/>
                         <rect x="564" y="475" width="95" height="96"/>
                         <rect x="658" y="475" width="95" height="96"/>
                         <rect x="752" y="475" width="95" height="96"/>
                         <rect x="846" y="475" width="95" height="96"/>
                         <rect x="940" y="475" width="95" height="96"/>
                         <rect x="1034" y="475" width="95" height="96"/>
                         <rect x="1128" y="475" width="95" height="96"/>
                         <rect x="1222" y="475" width="95" height="96"/>
                         <rect x="1316" y="475" width="95" height="96"/>
                         <rect x="1410" y="475" width="95" height="96"/>
                         <rect x="1504" y="475" width="95" height="96"/>
                         <rect x="1598" y="475" width="95" height="96"/>
                         <rect x="1692" y="475" width="95" height="96"/>
                         <rect x="1786" y="475" width="95" height="96"/>
                         <rect y="570" width="95" height="96"/>
                         <rect x="94" y="570" width="95" height="96"/>
                         <rect x="188" y="570" width="95" height="96"/>
                         <rect x="282" y="570" width="95" height="96"/>
                         <rect x="376" y="570" width="95" height="96"/>
                         <rect x="470" y="570" width="95" height="96"/>
                         <rect x="564" y="570" width="95" height="96"/>
                         <rect x="658" y="570" width="95" height="96"/>
                         <rect x="752" y="570" width="95" height="96"/>
                         <rect x="846" y="570" width="95" height="96"/>
                         <rect x="940" y="570" width="95" height="96"/>
                         <rect x="1034" y="570" width="95" height="96"/>
                         <rect x="1128" y="570" width="95" height="96"/>
                         <rect x="1222" y="570" width="95" height="96"/>
                         <rect x="1316" y="570" width="95" height="96"/>
                         <rect x="1410" y="570" width="95" height="96"/>
                         <rect x="1504" y="570" width="95" height="96"/>
                         <rect x="1598" y="570" width="95" height="96"/>
                         <rect x="1692" y="570" width="95" height="96"/>
                         <rect x="1786" y="570" width="95" height="96"/>
                         <rect y="665" width="95" height="96"/>
                         <rect x="94" y="665" width="95" height="96"/>
                         <rect x="188" y="665" width="95" height="96"/>
                         <rect x="282" y="665" width="95" height="96"/>
                         <rect x="376" y="665" width="95" height="96"/>
                         <rect x="470" y="665" width="95" height="96"/>
                         <rect x="564" y="665" width="95" height="96"/>
                         <rect x="658" y="665" width="95" height="96"/>
                         <rect x="752" y="665" width="95" height="96"/>
                         <rect x="846" y="665" width="95" height="96"/>
                         <rect x="940" y="665" width="95" height="96"/>
                         <rect x="1034" y="665" width="95" height="96"/>
                         <rect x="1128" y="665" width="95" height="96"/>
                         <rect x="1222" y="665" width="95" height="96"/>
                         <rect x="1316" y="665" width="95" height="96"/>
                         <rect x="1410" y="665" width="95" height="96"/>
                         <rect x="1504" y="665" width="95" height="96"/>
                         <rect x="1598" y="665" width="95" height="96"/>
                         <rect x="1692" y="665" width="95" height="96"/>
                         <rect x="1786" y="665" width="95" height="96"/>
                         <rect y="760" width="95" height="96"/>
                         <rect x="94" y="760" width="95" height="96"/>
                         <rect x="188" y="760" width="95" height="96"/>
                         <rect x="282" y="760" width="95" height="96"/>
                         <rect x="376" y="760" width="95" height="96"/>
                         <rect x="470" y="760" width="95" height="96"/>
                         <rect x="564" y="760" width="95" height="96"/>
                         <rect x="658" y="760" width="95" height="96"/>
                         <rect x="752" y="760" width="95" height="96"/>
                         <rect x="846" y="760" width="95" height="96"/>
                         <rect x="940" y="760" width="95" height="96"/>
                         <rect x="1034" y="760" width="95" height="96"/>
                         <rect x="1128" y="760" width="95" height="96"/>
                         <rect x="1222" y="760" width="95" height="96"/>
                         <rect x="1316" y="760" width="95" height="96"/>
                         <rect x="1410" y="760" width="95" height="96"/>
                         <rect x="1504" y="760" width="95" height="96"/>
                         <rect x="1598" y="760" width="95" height="96"/>
                         <rect x="1692" y="760" width="95" height="96"/>
                         <rect x="1786" y="760" width="95" height="96"/>
                         <rect y="855" width="95" height="96"/>
                         <rect x="94" y="855" width="95" height="96"/>
                         <rect x="188" y="855" width="95" height="96"/>
                         <rect x="282" y="855" width="95" height="96"/>
                         <rect x="376" y="855" width="95" height="96"/>
                         <rect x="470" y="855" width="95" height="96"/>
                         <rect x="564" y="855" width="95" height="96"/>
                         <rect x="658" y="855" width="95" height="96"/>
                         <rect x="752" y="855" width="95" height="96"/>
                         <rect x="846" y="855" width="95" height="96"/>
                         <rect x="940" y="855" width="95" height="96"/>
                         <rect x="1034" y="855" width="95" height="96"/>
                         <rect x="1128" y="855" width="95" height="96"/>
                         <rect x="1222" y="855" width="95" height="96"/>
                         <rect x="1316" y="855" width="95" height="96"/>
                         <rect x="1410" y="855" width="95" height="96"/>
                         <rect x="1504" y="855" width="95" height="96"/>
                         <rect x="1598" y="855" width="95" height="96"/>
                         <rect x="1692" y="855" width="95" height="96"/>
                         <rect x="1786" y="855" width="95" height="96"/>
                      </svg>
                   </div>
                   <div className="absolute z-[3] flex w-full h-full justify-center items-center bg-[#b8b8b8] opacity-0 inset-[0%] " ref={stickyLogoWrap}>
                      <video ref={videoRef} className="fixed w-screen h-screen object-cover" playsinline="true" webkit-playsinline="true" preload="auto" muted="muted">
                        <source src="https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/bolt_beijing_100m.mp4" type="video/mp4" />
                      </video>

                      <div className="absolute z-[3] w-[30610vw] flex-[0_0_auto] opacity-0 text-black " ref={stickyLogo}>
                         <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                width="100%" viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200" >
                            <path fill="#F2EEE3" opacity="1.000000" stroke="none" 
                               d="
                            M1089.000000,1201.000000 
                               C726.000000,1201.000000 363.500000,1201.000000 1.000000,1201.000000 
                               C1.000000,801.000000 1.000000,401.000000 1.000000,1.000000 
                               C401.000000,1.000000 801.000000,1.000000 1201.000000,1.000000 
                               C1201.000000,401.000000 1201.000000,801.000000 1201.000000,1201.000000 
                               C1163.833374,1201.000000 1126.666626,1201.000000 1089.000000,1201.000000 
                            M364.695190,533.469971 
                               C362.776550,533.469971 360.857880,533.469971 359.011108,533.469971 
                               C359.011108,578.942383 359.011108,623.654663 359.011108,668.280518 
                               C398.775146,668.280518 438.164490,668.280518 477.659363,668.280518 
                               C477.659363,623.295288 477.659363,578.710449 477.659363,533.470459 
                               C440.169220,533.470459 402.908813,533.470459 364.695190,533.469971 
                            M660.757629,654.492554 
                               C660.757629,614.272156 660.757629,574.051758 660.757629,533.692139 
                               C620.551025,533.692139 581.167358,533.692139 541.552917,533.692139 
                               C541.552917,578.717163 541.552917,623.418335 541.552917,668.757324 
                               C543.789612,668.757324 545.739685,668.757324 547.689758,668.757324 
                               C580.999512,668.757507 614.309265,668.757690 647.619019,668.757812 
                               C660.758972,668.757812 660.758972,668.757751 660.757629,654.492554 
                            M724.201172,644.500000 
                               C724.201172,652.421814 724.201172,660.343689 724.201172,668.309204 
                               C764.323425,668.309204 803.688477,668.309204 843.158936,668.309204 
                               C843.158936,623.245422 843.158936,578.553650 843.158936,533.816528 
                               C803.396973,533.816528 764.009705,533.816528 724.201355,533.816528 
                               C724.201355,570.609436 724.201355,607.054749 724.201172,644.500000 
                            M1026.228149,588.500244 
                               C1026.228149,570.242371 1026.228149,551.984497 1026.228149,533.838745 
                               C986.176880,533.838745 946.779968,533.838745 907.412292,533.838745 
                               C907.412292,578.900452 907.412292,623.589539 907.412292,668.269531 
                               C947.147644,668.269531 986.493896,668.269531 1026.227173,668.269531 
                               C1026.227173,641.741211 1026.227173,615.620789 1026.228149,588.500244 
                            M275.499481,668.679199 
                               C281.919434,668.679199 288.339386,668.679199 294.808716,668.679199 
                               C294.808716,623.248901 294.808716,578.650330 294.808716,533.768921 
                               C255.183670,533.768921 215.784637,533.768921 176.306213,533.768921 
                               C176.306213,578.782959 176.306213,623.493042 176.306213,668.678711 
                               C209.263168,668.678711 241.881470,668.678711 275.499481,668.679199 
                            z"/>
                            <path fill="#5C6FAD" opacity="1.000000" stroke="none" 
                               d="
                            M365.171814,533.470215 
                               C402.908813,533.470459 440.169220,533.470459 477.659363,533.470459 
                               C477.659363,578.710449 477.659363,623.295288 477.659363,668.280518 
                               C438.164490,668.280518 398.775146,668.280518 359.011108,668.280518 
                               C359.011108,623.654663 359.011108,578.942383 359.011108,533.469971 
                               C360.857880,533.469971 362.776550,533.469971 365.171814,533.470215 
                            M435.500000,536.975342 
                               C411.091919,536.975342 386.683838,536.975342 362.302673,536.975342 
                               C362.302673,580.047058 362.302673,622.310730 362.302673,664.775391 
                               C399.618011,664.775391 436.664703,664.775391 473.808289,664.775391 
                               C473.808289,622.074829 473.808289,579.708008 473.808289,536.975342 
                               C461.112671,536.975342 448.806335,536.975342 435.500000,536.975342 
                            z"/>
                            <path fill="#6A7BB2" opacity="1.000000" stroke="none" 
                               d="
                            M660.757446,654.990112 
                               C660.758972,668.757751 660.758972,668.757812 647.619019,668.757812 
                               C614.309265,668.757690 580.999512,668.757507 547.689758,668.757324 
                               C545.739685,668.757324 543.789612,668.757324 541.552917,668.757324 
                               C541.552917,623.418335 541.552917,578.717163 541.552917,533.692139 
                               C581.167358,533.692139 620.551025,533.692139 660.757629,533.692139 
                               C660.757629,574.051758 660.757629,614.272156 660.757446,654.990112 
                            M609.500000,665.054932 
                               C625.240417,665.054932 640.980835,665.054932 656.610474,665.054932 
                               C656.610474,621.927307 656.610474,579.587341 656.610474,537.312256 
                               C619.263000,537.312256 582.360596,537.312256 545.299988,537.312256 
                               C545.299988,579.948120 545.299988,622.290833 545.299988,665.054993 
                               C566.601379,665.054993 587.550659,665.054993 609.500000,665.054932 
                            z"/>
                            <path fill="#5C6FAD" opacity="1.000000" stroke="none" 
                               d="
                            M724.201294,644.000000 
                               C724.201355,607.054749 724.201355,570.609436 724.201355,533.816528 
                               C764.009705,533.816528 803.396973,533.816528 843.158936,533.816528 
                               C843.158936,578.553650 843.158936,623.245422 843.158936,668.309204 
                               C803.688477,668.309204 764.323425,668.309204 724.201172,668.309204 
                               C724.201172,660.343689 724.201172,652.421814 724.201294,644.000000 
                            M839.967590,608.500000 
                               C839.967590,584.748047 839.967590,560.996094 839.967590,537.406067 
                               C802.158691,537.406067 765.107239,537.406067 728.126953,537.406067 
                               C728.126953,580.094971 728.126953,622.349548 728.126953,664.756348 
                               C765.501038,664.756348 802.543640,664.756348 839.967529,664.756348 
                               C839.967529,646.103394 839.967529,627.801697 839.967590,608.500000 
                            z"/>
                            <path fill="#5C6FAD" opacity="1.000000" stroke="none" 
                               d="
                            M1026.227661,589.000244 
                               C1026.227173,615.620789 1026.227173,641.741211 1026.227173,668.269531 
                               C986.493896,668.269531 947.147644,668.269531 907.412292,668.269531 
                               C907.412292,623.589539 907.412292,578.900452 907.412292,533.838745 
                               C946.779968,533.838745 986.176880,533.838745 1026.228149,533.838745 
                               C1026.228149,551.984497 1026.228149,570.242371 1026.227661,589.000244 
                            M1022.816895,591.500000 
                               C1022.816895,573.415466 1022.816895,555.330933 1022.816895,537.412231 
                               C984.965393,537.412231 947.915527,537.412231 910.885986,537.412231 
                               C910.885986,580.093811 910.885986,622.332947 910.885986,664.744385 
                               C948.285706,664.744385 985.326233,664.744385 1022.816772,664.744385 
                               C1022.816772,640.419067 1022.816772,616.459534 1022.816895,591.500000 
                            z"/>
                            <path fill="#5C6FAD" opacity="1.000000" stroke="none" 
                               d="
                            M274.999634,668.678955 
                               C241.881470,668.678711 209.263168,668.678711 176.306213,668.678711 
                               C176.306213,623.493042 176.306213,578.782959 176.306213,533.768921 
                               C215.784637,533.768921 255.183670,533.768921 294.808716,533.768921 
                               C294.808716,578.650330 294.808716,623.248901 294.808716,668.679199 
                               C288.339386,668.679199 281.919434,668.679199 274.999634,668.678955 
                            M179.183060,579.500000 
                               C179.183060,607.925476 179.183060,636.350891 179.183060,664.685791 
                               C216.993286,664.685791 254.052475,664.685791 291.144348,664.685791 
                               C291.144348,622.010498 291.144348,579.763062 291.144348,537.300537 
                               C253.765488,537.300537 216.715073,537.300537 179.183243,537.300537 
                               C179.183243,551.249817 179.183243,564.874878 179.183060,579.500000 
                            z"/>
                            <path fill="#F2EEE3" opacity="1.000000" stroke="none" 
                               d="
                            M436.000000,536.975342 
                               C448.806335,536.975342 461.112671,536.975342 473.808289,536.975342 
                               C473.808289,579.708008 473.808289,622.074829 473.808289,664.775391 
                               C436.664703,664.775391 399.618011,664.775391 362.302673,664.775391 
                               C362.302673,622.310730 362.302673,580.047058 362.302673,536.975342 
                               C386.683838,536.975342 411.091919,536.975342 436.000000,536.975342 
                            M420.720154,640.598511 
                               C421.758392,639.809692 423.007080,639.188782 423.795563,638.200745 
                               C426.194672,635.194336 425.613007,630.875427 422.505432,628.517700 
                               C419.229370,626.032166 415.873383,626.352661 413.217316,629.330078 
                               C410.582672,632.283508 410.424164,635.968201 413.330933,638.660339 
                               C414.888977,640.103394 417.723450,640.168213 420.720154,640.598511 
                            z"/>
                            <path fill="#F2EEE3" opacity="1.000000" stroke="none" 
                               d="
                            M609.000000,665.054932 
                               C587.550659,665.054993 566.601379,665.054993 545.299988,665.054993 
                               C545.299988,622.290833 545.299988,579.948120 545.299988,537.312256 
                               C582.360596,537.312256 619.263000,537.312256 656.610474,537.312256 
                               C656.610474,579.587341 656.610474,621.927307 656.610474,665.054932 
                               C640.980835,665.054932 625.240417,665.054932 609.000000,665.054932 
                            M596.500061,570.010986 
                               C603.548035,570.010986 610.596008,570.010986 617.987549,570.010986 
                               C606.023071,593.630554 594.432434,616.512329 582.646057,639.780396 
                               C588.354004,640.112671 592.966370,641.003540 595.806152,635.103699 
                               C606.060364,613.800049 616.742676,592.702576 627.041199,571.419739 
                               C628.459717,568.488220 628.626648,564.951172 629.458801,561.320251 
                               C610.743896,561.320251 593.190735,561.320251 575.684570,561.320251 
                               C574.557129,569.654114 574.847412,570.008118 582.506531,570.010620 
                               C586.837830,570.012024 591.169189,570.010925 596.500061,570.010986 
                            z"/>
                            <path fill="#F1EDE3" opacity="1.000000" stroke="none" 
                               d="
                            M839.967529,609.000000 
                               C839.967529,627.801697 839.967529,646.103394 839.967529,664.756348 
                               C802.543640,664.756348 765.501038,664.756348 728.126953,664.756348 
                               C728.126953,622.349548 728.126953,580.094971 728.126953,537.406067 
                               C765.107239,537.406067 802.158691,537.406067 839.967590,537.406067 
                               C839.967590,560.996094 839.967590,584.748047 839.967529,609.000000 
                            M792.392761,585.500000 
                               C792.392761,577.418335 792.392761,569.336609 792.392761,560.833313 
                               C789.063171,561.075012 785.893555,560.330505 784.292297,561.586121 
                               C776.354492,567.810486 768.830566,574.562683 761.257874,581.045776 
                               C765.533997,588.014343 766.120544,588.116394 771.711365,583.403687 
                               C775.183594,580.476868 778.651550,577.545105 782.484985,574.308655 
                               C782.484985,593.960327 782.484985,612.724304 782.484985,632.118164 
                               C776.814636,632.118164 771.420532,632.118164 766.086548,632.118164 
                               C766.086548,635.017700 766.086548,637.280396 766.086548,639.687927 
                               C780.126892,639.687927 793.860779,639.687927 807.586182,639.687927 
                               C807.586182,636.983093 807.586182,634.611389 807.586182,631.822021 
                               C802.408813,631.822021 797.643738,631.822021 792.393311,631.822021 
                               C792.393311,616.430420 792.393311,601.465210 792.392761,585.500000 
                            z"/>
                            <path fill="#F1EDE2" opacity="1.000000" stroke="none" 
                               d="
                            M1022.816833,592.000000 
                               C1022.816772,616.459534 1022.816772,640.419067 1022.816772,664.744385 
                               C985.326233,664.744385 948.285706,664.744385 910.885986,664.744385 
                               C910.885986,622.332947 910.885986,580.093811 910.885986,537.412231 
                               C947.915527,537.412231 984.965393,537.412231 1022.816895,537.412231 
                               C1022.816895,555.330933 1022.816895,573.415466 1022.816833,592.000000 
                            M959.616211,601.964233 
                               C964.023621,603.433716 968.515991,604.691711 972.818604,606.421753 
                               C979.385803,609.062500 981.704895,612.701721 981.352295,618.922546 
                               C981.001099,625.117798 977.718811,629.209839 971.363586,631.107910 
                               C962.914795,633.631226 955.684021,630.978943 949.137207,625.647400 
                               C947.104065,623.991577 945.042603,623.106506 943.284485,625.917053 
                               C941.756287,628.359985 939.138977,631.160400 943.386841,633.291016 
                               C948.812988,636.012512 954.237793,639.365601 960.051697,640.567444 
                               C977.535034,644.181458 992.434814,631.821411 991.613159,615.193665 
                               C991.097290,604.753906 984.316101,599.769043 975.471924,596.523621 
                               C970.335632,594.638794 965.120361,592.912964 960.143860,590.665405 
                               C955.663269,588.641968 953.322205,584.961060 953.924316,579.797791 
                               C954.510742,574.769226 957.455383,571.652649 962.047852,570.041321 
                               C969.275635,567.505493 975.812378,569.394348 981.826111,573.607178 
                               C984.154968,575.238647 986.007874,575.577637 987.518494,572.722473 
                               C988.747559,570.399414 990.794250,567.822266 987.135132,566.042725 
                               C982.701172,563.886475 978.214905,561.408875 973.468933,560.405029 
                               C960.282471,557.615784 948.007874,564.511536 944.671326,575.887451 
                               C941.288879,587.419983 946.166931,596.282654 959.616211,601.964233 
                            z"/>
                            <path fill="#F1EDE2" opacity="1.000000" stroke="none" 
                               d="
                            M179.183151,579.000000 
                               C179.183243,564.874878 179.183243,551.249817 179.183243,537.300537 
                               C216.715073,537.300537 253.765488,537.300537 291.144348,537.300537 
                               C291.144348,579.763062 291.144348,622.010498 291.144348,664.685791 
                               C254.052475,664.685791 216.993286,664.685791 179.183060,664.685791 
                               C179.183060,636.350891 179.183060,607.925476 179.183151,579.000000 
                            M243.094467,606.084961 
                               C243.249802,606.222412 243.405136,606.359863 243.291809,607.122375 
                               C235.197052,617.813293 227.102280,628.504211 218.824387,639.437012 
                               C229.754501,641.024231 230.243668,640.816345 235.885452,632.634705 
                               C241.464798,624.543762 247.249329,616.584595 252.549667,608.314941 
                               C255.306961,604.012939 257.883362,599.370422 259.364838,594.522217 
                               C262.411255,584.552551 261.359741,574.878235 253.700241,567.102905 
                               C246.480835,559.774292 237.429153,558.536316 227.792801,561.068970 
                               C216.541016,564.026123 209.556198,573.903259 209.783783,586.156433 
                               C209.989807,597.249207 216.346344,605.799500 227.081223,607.393677 
                               C232.074097,608.135193 237.448364,606.308533 243.094467,606.084961 
                            z"/>
                            <path fill="#5468A9" opacity="1.000000" stroke="none" 
                               d="
                            M420.351013,640.726746 
                               C417.723450,640.168213 414.888977,640.103394 413.330933,638.660339 
                               C410.424164,635.968201 410.582672,632.283508 413.217316,629.330078 
                               C415.873383,626.352661 419.229370,626.032166 422.505432,628.517700 
                               C425.613007,630.875427 426.194672,635.194336 423.795563,638.200745 
                               C423.007080,639.188782 421.758392,639.809692 420.351013,640.726746 
                            z"/>
                            <path fill="#5468A9" opacity="1.000000" stroke="none" 
                               d="
                            M596.000244,570.010986 
                               C591.169189,570.010925 586.837830,570.012024 582.506531,570.010620 
                               C574.847412,570.008118 574.557129,569.654114 575.684570,561.320251 
                               C593.190735,561.320251 610.743896,561.320251 629.458801,561.320251 
                               C628.626648,564.951172 628.459717,568.488220 627.041199,571.419739 
                               C616.742676,592.702576 606.060364,613.800049 595.806152,635.103699 
                               C592.966370,641.003540 588.354004,640.112671 582.646057,639.780396 
                               C594.432434,616.512329 606.023071,593.630554 617.987549,570.010986 
                               C610.596008,570.010986 603.548035,570.010986 596.000244,570.010986 
                            z"/>
                            <path fill="#5468A9" opacity="1.000000" stroke="none" 
                               d="
                            M792.393066,586.000000 
                               C792.393311,601.465210 792.393311,616.430420 792.393311,631.822021 
                               C797.643738,631.822021 802.408813,631.822021 807.586182,631.822021 
                               C807.586182,634.611389 807.586182,636.983093 807.586182,639.687927 
                               C793.860779,639.687927 780.126892,639.687927 766.086548,639.687927 
                               C766.086548,637.280396 766.086548,635.017700 766.086548,632.118164 
                               C771.420532,632.118164 776.814636,632.118164 782.484985,632.118164 
                               C782.484985,612.724304 782.484985,593.960327 782.484985,574.308655 
                               C778.651550,577.545105 775.183594,580.476868 771.711365,583.403687 
                               C766.120544,588.116394 765.533997,588.014343 761.257874,581.045776 
                               C768.830566,574.562683 776.354492,567.810486 784.292297,561.586121 
                               C785.893555,560.330505 789.063171,561.075012 792.392761,560.833313 
                               C792.392761,569.336609 792.392761,577.418335 792.393066,586.000000 
                            z"/>
                            <path fill="#5468A9" opacity="1.000000" stroke="none" 
                               d="
                            M959.252319,601.841003 
                               C946.166931,596.282654 941.288879,587.419983 944.671326,575.887451 
                               C948.007874,564.511536 960.282471,557.615784 973.468933,560.405029 
                               C978.214905,561.408875 982.701172,563.886475 987.135132,566.042725 
                               C990.794250,567.822266 988.747559,570.399414 987.518494,572.722473 
                               C986.007874,575.577637 984.154968,575.238647 981.826111,573.607178 
                               C975.812378,569.394348 969.275635,567.505493 962.047852,570.041321 
                               C957.455383,571.652649 954.510742,574.769226 953.924316,579.797791 
                               C953.322205,584.961060 955.663269,588.641968 960.143860,590.665405 
                               C965.120361,592.912964 970.335632,594.638794 975.471924,596.523621 
                               C984.316101,599.769043 991.097290,604.753906 991.613159,615.193665 
                               C992.434814,631.821411 977.535034,644.181458 960.051697,640.567444 
                               C954.237793,639.365601 948.812988,636.012512 943.386841,633.291016 
                               C939.138977,631.160400 941.756287,628.359985 943.284485,625.917053 
                               C945.042603,623.106506 947.104065,623.991577 949.137207,625.647400 
                               C955.684021,630.978943 962.914795,633.631226 971.363586,631.107910 
                               C977.718811,629.209839 981.001099,625.117798 981.352295,618.922546 
                               C981.704895,612.701721 979.385803,609.062500 972.818604,606.421753 
                               C968.515991,604.691711 964.023621,603.433716 959.252319,601.841003 
                            z"/>
                            <path fill="#5468A9" opacity="1.000000" stroke="none" 
                               d="
                            M242.649750,605.645935 
                               C237.448364,606.308533 232.074097,608.135193 227.081223,607.393677 
                               C216.346344,605.799500 209.989807,597.249207 209.783783,586.156433 
                               C209.556198,573.903259 216.541016,564.026123 227.792801,561.068970 
                               C237.429153,558.536316 246.480835,559.774292 253.700241,567.102905 
                               C261.359741,574.878235 262.411255,584.552551 259.364838,594.522217 
                               C257.883362,599.370422 255.306961,604.012939 252.549667,608.314941 
                               C247.249329,616.584595 241.464798,624.543762 235.885452,632.634705 
                               C230.243668,640.816345 229.754501,641.024231 218.824387,639.437012 
                               C227.102280,628.504211 235.197052,617.813293 243.627457,606.584595 
                               C243.952698,605.681702 243.942291,605.316711 244.113464,605.011047 
                               C244.208725,605.058411 244.122406,605.046448 243.768448,605.036072 
                               C243.217117,605.240417 242.933441,605.443176 242.649750,605.645935 
                            M222.591141,594.764282 
                               C223.569138,595.651306 224.458023,596.669861 225.540146,597.403259 
                               C230.966736,601.080872 239.137192,600.951660 244.776642,597.044128 
                               C250.704376,592.936951 252.047638,586.960022 250.889923,580.328186 
                               C249.745300,573.771484 245.569794,569.637512 239.123260,568.350769 
                               C232.698196,567.068176 226.690018,568.496033 222.682587,574.023743 
                               C218.032043,580.438599 218.428818,587.337158 222.591141,594.764282 
                            z"/>
                            <path fill="#F1EDE2" opacity="1.000000" stroke="none" 
                               d="
                            M222.370514,594.458374 
                               C218.428818,587.337158 218.032043,580.438599 222.682587,574.023743 
                               C226.690018,568.496033 232.698196,567.068176 239.123260,568.350769 
                               C245.569794,569.637512 249.745300,573.771484 250.889923,580.328186 
                               C252.047638,586.960022 250.704376,592.936951 244.776642,597.044128 
                               C239.137192,600.951660 230.966736,601.080872 225.540146,597.403259 
                               C224.458023,596.669861 223.569138,595.651306 222.370514,594.458374 
                            z"/>
                            <path fill="#F1EDE2" opacity="1.000000" stroke="none" 
                               d="
                            M244.036087,605.034485 
                               C244.122406,605.046448 244.208725,605.058411 244.140472,605.030518 
                               C243.985886,604.990662 244.036087,605.034485 244.036087,605.034485 
                            z"/>
                            <path fill="#F1EDE2" opacity="1.000000" stroke="none" 
                               d="
                            M243.958893,604.971191 
                               C243.942291,605.316711 243.952698,605.681702 243.761780,606.272034 
                               C243.405136,606.359863 243.249802,606.222412 242.872101,605.865479 
                               C242.933441,605.443176 243.217117,605.240417 243.768448,605.036072 
                               C244.036087,605.034485 243.985886,604.990662 243.958893,604.971191 
                            z"/>
                            </svg>
                      </div>
                 
                </div>
             </div>
             <div className="w-full h-[300vh]" ref={squareTrigger}></div>
             <div className="w-full h-[550vh]" ref={logoTrigger}></div>
             <div className="relative z-[2] w-full mt-[-18em] text-[#b8b8b8] mix-blend-difference"></div>
          </div>
       </div>

 </div>

         </div>
     </div>


          </>
)

}