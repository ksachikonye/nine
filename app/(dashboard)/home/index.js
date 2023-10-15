'use client'
import { useRect } from '@studio-freight/hamo'
import cn from 'clsx'


import { Card } from 'components/studio-freight/card'
import { Title } from 'components/studio-freight/intro'
import { ListItem } from 'components/studio-freight/list-item'
import {Introduction} from "@/components/svg-animations/introduction/Introduction";
import { projects } from 'content/projects'
import { useScroll } from 'hooks/use-scroll'
import { Layout } from 'layouts/default'
import { button, useControls } from 'leva'
import { clamp, mapRange } from 'lib/maths'
import { useStore } from 'lib/store'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { useIntersection, useWindowSize } from 'react-use'
import s from './home.module.scss'

const SFDR = dynamic(() => import('https://raw.githubusercontent.com/ksachikonye/hzevo-server/main/svgs/971s.svg'), { ssr: false })
const GitHub = dynamic(() => import('icons/github.svg'), { ssr: false })

const Parallax = dynamic(
  () => import('components/studio-freight/parallax').then((mod) => mod.Parallax),
  { ssr: false }
)

const AppearTitle = dynamic(
  () => import('components/studio-freight/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

const HorizontalSlides = dynamic(
  () =>
    import('components/studio-freight/horizontal-slides').then((mod) => mod.HorizontalSlides),
  { ssr: false }
)

const FeatureCards = dynamic(
  () => import('components/studio-freight/feature-cards').then((mod) => mod.FeatureCards),
  { ssr: false }
)

const WebGL = dynamic(
  () => import('components/studio-freight/webgl').then(({ WebGL }) => WebGL),
  { ssr: false }
)



const HeroTextIn = ({ children, introOut }) => {
  return (
    <div className={cn(s['hide-text'], introOut && s['show-text'])}>
      {children}
    </div>
  )
}

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState()
  const zoomRef = useRef(null)
  const [zoomWrapperRectRef, zoomWrapperRect] = useRect()
  const { height: windowHeight } = useWindowSize()
  const introOut = useStore(({ introOut }) => introOut)

  const [theme, setTheme] = useState('dark')
  const lenis = useStore(({ lenis }) => lenis)

  useControls(
    'lenis',
    () => ({
      stop: button(() => {
        lenis.stop()
      }),
      start: button(() => {
        lenis.start()
      }),
    }),
    [lenis]
  )

  useControls(
    'scrollTo',
    () => ({
      immediate: button(() => {
        lenis.scrollTo(30000, { immediate: true })
      }),
      smoothDuration: button(() => {
        lenis.scrollTo(30000, { lock: true, duration: 10 })
      }),
      smooth: button(() => {
        lenis.scrollTo(30000)
      }),
      forceScrollTo: button(() => {
        lenis.scrollTo(30000, { force: true })
      }),
    }),
    [lenis]
  )

  useScroll(({ scroll }) => {
    setHasScrolled(scroll > 10)
    if (!zoomWrapperRect.top) return

    const start = zoomWrapperRect.top + windowHeight * 0.5
    const end = zoomWrapperRect.top + zoomWrapperRect.height - windowHeight

    const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1)
    const center = 0.6
    const progress1 = clamp(0, mapRange(0, center, progress, 0, 1), 1)
    const progress2 = clamp(0, mapRange(center - 0.055, 1, progress, 0, 1), 1)
    setTheme(progress2 === 1 ? 'light' : 'dark')

    zoomRef.current.style.setProperty('--progress1', progress1)
    zoomRef.current.style.setProperty('--progress2', progress2)

    if (progress === 1) {
      zoomRef.current.style.setProperty('background-color', 'currentColor')
    } else {
      zoomRef.current.style.removeProperty('background-color')
    }
  })

  const [whyRectRef, whyRect] = useRect()
  const [cardsRectRef, cardsRect] = useRect()
  const [whiteRectRef, whiteRect] = useRect()
  const [featuresRectRef, featuresRect] = useRect()
  const [inuseRectRef, inuseRect] = useRect()

  const addThreshold = useStore(({ addThreshold }) => addThreshold)

  useEffect(() => {
    addThreshold({ id: 'top', value: 0 })
  }, [])

  useEffect(() => {
    const top = whyRect.top - windowHeight / 2
    addThreshold({ id: 'why-start', value: top })
    addThreshold({
      id: 'why-end',
      value: top + whyRect.height,
    })
  }, [whyRect])

  useEffect(() => {
    const top = cardsRect.top - windowHeight / 2
    addThreshold({ id: 'cards-start', value: top })
    addThreshold({ id: 'cards-end', value: top + cardsRect.height })
    addThreshold({
      id: 'red-end',
      value: top + cardsRect.height + windowHeight,
    })
  }, [cardsRect])

  useEffect(() => {
    const top = whiteRect.top - windowHeight
    addThreshold({ id: 'light-start', value: top })
  }, [whiteRect])

  useEffect(() => {
    const top = featuresRect.top
    addThreshold({ id: 'features', value: top })
  }, [featuresRect])

  useEffect(() => {
    const top = inuseRect.top
    addThreshold({ id: 'in-use', value: top })
  }, [inuseRect])

  useEffect(() => {
    const top = lenis?.limit
    addThreshold({ id: 'end', value: top })
  }, [lenis?.limit])

  useScroll((e) => {
    // console.log(
    //   window.scrollY,
    //   e.scroll,
    //   e.targetScroll,
    //   e.animatedScroll,
    //   e.velocity
    // )
    console.log(e.scroll, e.progress)
  })

  const inUseRef = useRef()

  const [visible, setIsVisible] = useState(false)
  const intersection = useIntersection(inUseRef, {
    threshold: 0.2,
  })
  useEffect(() => {
    if (intersection?.isIntersecting) {
      setIsVisible(true)
    }
  }, [intersection])

  return (
    <Layout
      theme={theme}
      seo={{
        title: 'Reversed Bullet',
        description:
          'Spectacular Mirror and Formalization of the Dash ',
      }}
      className={s.home}
    >
      <div className={s.canvas}>
        <WebGL />
      </div>

      <section className={s.hero}>
       <Introduction />
      </section>
      <section className={s.why} data-lenis-scroll-snap-align="start">
        <div className="layout-grid">
          <h2 className={cn(s.sticky, 'h2')}>
            <AppearTitle>Himalayas</AppearTitle>
          </h2>
          <aside className={s.features} ref={whyRectRef}>
            <div className={s.feature}>
              <p className="p">
         Fritz Weisner, an American with an extremely German sounding name, attempted to ascend K2, together with Pasang Dawa Lama in the summer of 1938. Back then, the fact that Everest is the highest mountain on the planet was still very much up for debate and K2 was just another high mountain, not necessarily the second highest.In 1802,
the United Kingdom commissioned a surveying project to accurately map the Indian Subcontinent to George Everest, Surveyor General of British-India. The project was completed 
71 years later and the Himalayas remained just a prediction, with ten peaks. K2 is situated in a remote part of Pakistan and is not visible unless one is less than 210km from the peak, perched on another peak. Mount Chimborizo in Ecuador was the then, highest mountain in the world, and still is, if you are measuring from the core of the earth, that is, 
it is the landmass furthest from the mantle. 891 individuals have sucessfully climbed Mount Everest, from all faces and in any kind of weather. You have individuals climbing 
up the mountain just to successfuly ski or snowboard all the way down to base camp, thats what you would expect from a mountain whose local name translates to Holy Mother.
The prominence of a mountain is the minimum height of climb to the summit on any route, from a higher peak or sea level. As you would expect, Mount Everest is the most prominent mountain, with a prominence as long as its height. The next four prominent peaks happen to be the top most isolated mountains, Conagua, Denali and Kilimanjaro.K2 is the least 
prominent mountain, back then, it took Fritz 3 months to get to the foot of the mountain. The local names for the Mountain, on both the Pakistani and Chinese sides, translate to "Big Mountain".Modern mountaneers call it "Savage Mountain" or "King of Mountains". Only 377 people have summitted K2 of which 91 have died attempting to do so. Now Fritz, came 150m short of the peak, but abandoned the ascent and came back down the mountain, empty handed. 
            
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>
               Self Driving Cars 
              </h3>
              <p className="p">
               You know the feeling one has when they receive a present ? That is exactly what a missile is supposed to 
               feel like. A rocket only goes in the direction it is pointed while a missile is guided. The mass of a predator
               is determined by the mass of the prey, in an indirect way. Herbivores are the largest animals because they do 
               not need to go after their meals. If a predator gains weight, it will have a hard time cornering or keeping up 
               with the sudden turns by the prey. The prey has no idea where it is going. Humans on the other hand, form paths, 
               and walk, something only humans do. Walking requires thinking, that is, direction. There has never been report 
               of a person, getting up, and walking to a place they did not imagine first. Secondly, there is the issue of 
               relations, humans live in societies, with social relations and hierachies, machines do not have heirarchy.Driving 
               from Point A to B is the same, its more than just shifting gears and steering. Human beings include "feeling" or 
               their current mental state into locomotion, there are days when they want to speed, and days when they want think.
               A self driving car would need to "feel" or have a mental state and identity, thats is the only way that car could 
               negotiate modern streets. 

              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>
                Federated Belief Networks
              </h3>
              <p className="p">
                A self-driving car that has had thousands of hours on the road, capturing high quality video data of streets is not as 
                smart as most people would assume. At best, the car and algorithms are able to, with high accuracy, identify scenerios 
                exactly as the car was exposed to, and thats all. For example, a car could react appropiately and be catious enough to 
                stop at a zebra crossing if individuals are around. If a pedestrian pulls out a gun, the car will stay in place simply 
                because that specific scenerio has not been trained for. That means, for each and every scenerio that you can imagine, 
                it should all be in hard code somewhere. Machines have no intuition. Algorithms can tell which part of a football game 
                is exciting, unless someone hard codes it. How can an algorithm know that, a ball hitting a post, is much crazier than 
                an actual goal ? when it has been trained only to react to goals "exciting points". Remember when Zinedine Zidane gave 
                Marco Matterazzi a head butt ? An algorithm meant to write newspapers would not know the significance of the situation 
                unless  it is trained to prioritise hot topics of discussion on media. Humans can think of what could have been ? Humans 
                have a habit of adjusting their beliefs as more information comes. That means our beliefs, are something that we hold 
                dear and defend, but are subject to change as soon as evidence changes.
               
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>
                Fire
              </h3>
              <p className="p">
                 Why are we like this, why are humans different ? The most outrageous component of being humans, is the fact that we walk 
                 upright. One could spend time looking into all the encyclopedias to no avail. Why do we walk upright ? Its not because of 
                 the decline in woodlands or the need to pick fruit or to see predators. Seeing predators from far off would not have benefited
                 anyone, humans were defenseless back then. If it were to pick fruit, then out fingers should have been curly instead of straight.
                 Sleep is defined as the state whereby the arousal threshold is at its highest. There are periods whereby muscle tension is zero. 
                 The invention of fire allowed humans to sleep on the ground, straight, risk free, allowing the transition to deeper sleep quality. 
                 Most other animals sleep way longer than humans but humans have the longest REM sleep, up to 25% of the total. Sleeping on the 
                 ground made humans smarter, made humans lose body hair and develop efficient sweat ducts and that caused the rise of clothing. 
                 It was only after sleeping only the ground did humans need items to cover their sensetive regions. Fashion trends have come 
                 and gone but none has ever exposed the goods and even the most primitive of our kind make sure that the goods are out of site.
                
       
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section className={s.rethink}>
        <div className={cn('layout-grid', s.pre)}>
          <div className={s.highlight} data-lenis-scroll-snap-align="start">
            <Parallax speed={-0.5}>
              <p className="h2">
                <AppearTitle>Materials and Methods </AppearTitle>
              </p>
            </Parallax>
          </div>
          <div className={s.comparison}>
            <Parallax speed={0.5}>
              <p className="p">
              The following methods where used as ground truth sources: 
              </p>
            </Parallax>
          </div>
        </div>
        <div className={s.cards} ref={cardsRectRef}>
          <HorizontalSlides>
            <Card
              className={s.card}
              number="01"
              text="Ultrasound Bone microfragmentation for Orthopedic recovery "
            />
            <Card
              className={s.card}
              number="02"
              text="Magnetic Resonance Scan on both legs for tracking performance of Ultrasound treatment "
            />
            <Card
              className={s.card}
              number="03"
              text="Computer Tomography on both legs to track  vascularization of the leg muscles after training"
            />
            <Card
              className={s.card}
              number="04"
              text="Echocardiography and rest Electrocardiography for cardiac stress testing and QT prolongation "
            />
            <Card
              className={s.card}
              number="05"
              text="30x human genome sequencing with Dante Labs and Next Generation 16S rRNA gene sequencing for hologenome studies. "
            />
          </HorizontalSlides>
        </div>
      </section>
      <section
        ref={(node) => {
          zoomWrapperRectRef(node)
          zoomRef.current = node
        }}
        className={s.solution}
      >
        <div className={s.inner}>
          <div className={s.zoom}>
            <h2 className={cn(s.first, 'h1 vh')}>
              we strive to bring  <br />
              <span className="contrast">too much information</span>
            </h2>
            <h2 className={cn(s.enter, 'h3 vh')}>
              Reversed <br /> Bullet
            </h2>
            <h2 className={cn(s.second, 'h1 vh')}>Speed is divine</h2>
          </div>
        </div>
      </section>
      <section className={cn('theme-light', s.featuring)} ref={whiteRectRef}>
        <div className={s.inner}>
          <div className={cn('layout-block', s.intro)}>
            <p className="p-l">
              Reversed Bullet{' '}is an information gateway that unashamedly retrieves 
              information from wearable technology apis, processes it, and then compares 
              it to information of similar persuation to determine the true averages for 
              given populations. Manufacturers being able to know the true dimensions of 
              the populace gives them the chance to design items that actual go with humans,
              from public places, sidewalks, corridors, shoes, you name it. Federation of 
              data will allow one to accurately and honestly compare their performance and 
              general physiological parameters with other people of the same description. 
              Want to know how your sleep parameters measure against people of similar age,
              height, weight, occupation, geolocation, anything you would want, is there. 
            
              .
            </p>
          </div>
        </div>
        <section ref={featuresRectRef}>
          <FeatureCards />
        </section>
      </section>
      <section
        ref={(node) => {
          inuseRectRef(node)
          inUseRef.current = node
        }}
        className={cn('theme-light', s['in-use'], visible && s.visible)}
      >
        <div className="layout-grid">
          <aside className={s.title}>
            <p className="h3">
              <AppearTitle>
                Lenis
                <br />
                <span className="grey">in use</span>
              </AppearTitle>
            </p>
          </aside>
          <ul className={s.list}>
            {projects.map(({ title, source, href }, i) => (
              <li key={i}>
                <ListItem
                  title={title}
                  source={source}
                  href={href}
                  index={i}
                  visible={visible}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    }, // will be passed to the page component as props
  }
}
