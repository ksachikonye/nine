import { useRef, useState, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { Loader, Float, useGLTF, PresentationControls, Environment, Html } from '@react-three/drei'
import { GlobalCanvas, ScrollScene, UseCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'



export default function Camera() {
  const eventSource = useRef()
  const [isTouch, setTouch] = useState(false)
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    setTouch(isTouch)
  }, [])
  return (
    <div ref={eventSource}>
      {/* Set eventSource so events works in both Html and Canvas */}
      <GlobalCanvas
        eventSource={eventSource}
        eventPrefix="client"
        scaleMultiplier={0.01}
        camera={{ fov: 33 }}
        style={{ pointerEvents: 'none' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[14, 14, 14]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
        {/* Children from UseCanvas are automatically injected here */}
      </GlobalCanvas>

      <SmoothScrollbar>
        {(bind) => (
          <article {...bind}>
              <div class="container my-24 mx-auto md:px-6">

<section class="mb-32">
  <h2 class="mb-16 text-center text-2xl font-bold">Psychological Consequences</h2>

  <div class="mb-16 flex flex-wrap">
      <div ref={el} class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                <UseCanvas>
                <ScrollScene track={el}>{(props) => <Elephants {...props} />}</ScrollScene>
              </UseCanvas>
        </div>
   

    <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
      <h3 class="mb-4 text-2xl font-bold">Color Consilience</h3>
      <div class="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
   
        Travels
      </div>
      <p class="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        Published <u>14.01.2022</u> by
        <a href="#!">Lisa McCartney</a>
      </p>
      <p class="mb-6 text-neutral-500 dark:text-neutral-300">
        The retina consists of three types of photoreceptors which encode 
        color by calculating the relative amount of activation across the 
        visual scene. Activation occurs when loose electrons are knocked 
        off some lipids setting up a cascade of signals that are then 
        processed by the brain. 
      </p>
      <p class="text-neutral-500 dark:text-neutral-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
        nulla saepe rerum aspernatur odio amet perferendis tempora
        mollitia? Ratione unde magni omnis quaerat blanditiis cumque
        dolore placeat rem dignissimos?
      </p>
    </div>
  </div>




  <div class="mb-16 flex flex-wrap lg:flex-row-reverse">
        <div ref={el} class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                <UseCanvas>
                <ScrollScene track={el}>{(props) => <DigitalOil {...props} />}</ScrollScene>
              </UseCanvas>
        </div>

    <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
      <h3 class="mb-4 text-2xl font-bold">Exhibition in Paris</h3>
      <div class="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">

        Art
      </div>
      <p class="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        Published <u>12.01.2022</u> by
        <a href="#!">Anna Doe</a>
      </p>
      <p class="text-neutral-500 dark:text-neutral-300">
        Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta
        dui, sit amet rutrum enim massa in ante. Curabitur in justo at
        lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi
        vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus
        vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
        tortor finibus, a eleifend lectus dictum. Cras tempor convallis
        magna id rhoncus. Suspendisse potenti. Nam mattis faucibus
        imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus
        at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
        felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
        iaculis est vehicula ut.
      </p>
    </div>
  </div>

  <div class="flex flex-wrap">
        <div ref={el} class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
            <UseCanvas>
            <ScrollScene track={el}>{(props) => <NuerembergChronicle {...props} />}</ScrollScene>
          </UseCanvas>
        </div>
   

    <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
      <h3 class="mb-4 text-2xl font-bold">Stock market boom</h3>
      <div class="mb-4 flex items-center text-sm font-medium text-yellow-600">
    
        Business
      </div>
      <p class="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        Published <u>10.01.2022</u> by
        <a href="#!">Joe Svan</a>
      </p>
      <p class="text-neutral-500 dark:text-neutral-300">
        Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
        tincidunt vulputate libero, nec imperdiet sapien pulvinar id.
        Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
        augue ornare. Proin ac dui vel lectus eleifend vestibulum et
        lobortis risus. Nullam in commodo sapien. Curabitur ut erat congue
        sem finibus eleifend egestas eu metus. Sed ut dolor id magna
        rutrum ultrices ut eget libero. Duis vel porttitor odio. Ut
        pulvinar sed turpis ornare tincidunt. Donec luctus, mi euismod
        dignissim malesuada, lacus lorem commodo leo, tristique blandit
        ante mi id metus. Integer et vehicula leo, vitae interdum lectus.
        Praesent nulla purus, commodo at euismod nec, blandit ultrices
        erat. Aliquam eros ipsum, interdum et mattis vitae, faucibus vitae
        justo. Nulla condimentum hendrerit leo, in feugiat ipsum
        condimentum ac. Maecenas sed blandit dolor.
      </p>
    </div>

    <div class="mb-16 flex flex-wrap">
      <div ref={el} class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                <UseCanvas>
                <ScrollScene track={el}>{(props) => <Elephants {...props} />}</ScrollScene>
              </UseCanvas>
        </div>
   

    <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
      <h3 class="mb-4 text-2xl font-bold">Color Consilience</h3>
      <div class="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
   
        Travels
      </div>
      <p class="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        Published <u>14.01.2022</u> by
        <a href="#!">Lisa McCartney</a>
      </p>
      <p class="mb-6 text-neutral-500 dark:text-neutral-300">
        The retina consists of three types of photoreceptors which encode 
        color by calculating the relative amount of activation across the 
        visual scene. Activation occurs when loose electrons are knocked 
        off some lipids setting up a cascade of signals that are then 
        processed by the brain. 
      </p>
      <p class="text-neutral-500 dark:text-neutral-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
        nulla saepe rerum aspernatur odio amet perferendis tempora
        mollitia? Ratione unde magni omnis quaerat blanditiis cumque
        dolore placeat rem dignissimos?
      </p>
    </div>
  </div>
  </div>
</section>

</div>
          </article>
        )}
      </SmoothScrollbar>

     
    </div>
  )
}


